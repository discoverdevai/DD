#!/usr/bin/env node
// Functional + keyboard checks from the launch checklist (10 §4.1, §4.4 Operable) against a production build.
// Usage: node qa/serve.mjs dist 4321   then   node qa/functional.mjs http://localhost:4321
import { chromium } from 'playwright';

const base = (process.argv[2] ?? 'http://localhost:4321').replace(/\/$/, '');
const results = [];
const ok = (name, pass, detail = '') => results.push({ name, pass: !!pass, detail });
const browser = await chromium.launch();
const desktop = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
await desktop.route((u) => !u.href.startsWith(base), (r) => r.abort());
await mobile.route((u) => !u.href.startsWith(base), (r) => r.abort());
const active = (p) => p.evaluate(() => { const a = document.activeElement; return a ? `${a.tagName.toLowerCase()}${a.id ? '#' + a.id : ''}${a.className && typeof a.className === 'string' ? '.' + a.className.split(' ')[0] : ''}` : 'none'; });

// ---- Desktop: skip link, Services disclosure, header hide/show, focus visible + not obscured
{
  const p = await desktop.newPage();
  await p.goto(base + '/', { waitUntil: 'networkidle' });
  await p.keyboard.press('Tab');
  ok('Skip link is the first Tab stop and becomes visible', await p.evaluate(() => { const a = document.activeElement; return a?.classList.contains('skip-link') && a.getBoundingClientRect().top >= 0; }), await active(p));
  await p.keyboard.press('Enter');
  ok('Skip link moves focus to <main>', (await active(p)).startsWith('main'), await active(p));

  const toggle = p.locator('[data-disclosure]');
  await toggle.focus(); await p.keyboard.press('Enter');
  ok('Services: Enter opens', (await toggle.getAttribute('aria-expanded')) === 'true' && await p.locator('#services-panel').isVisible());
  await p.keyboard.press('Escape');
  ok('Services: Esc closes and focus returns to the button', (await toggle.getAttribute('aria-expanded')) === 'false' && (await active(p)).includes('site-nav__toggle'), await active(p));
  await p.keyboard.press('Space');
  ok('Services: Space opens', (await toggle.getAttribute('aria-expanded')) === 'true');
  await p.mouse.click(1200, 600);
  ok('Services: outside click closes', (await toggle.getAttribute('aria-expanded')) === 'false');
  const labels = await p.locator('#services-panel .services-panel__label').allTextContents();
  ok('Services: panel lists Validate, Build, Scale, Launch-Ready Review, Partners', labels.join('|') === 'Validate|Build|Scale|Launch-Ready Review|Partners', labels.join('|'));

  await p.evaluate(() => scrollTo(0, 1500)); await p.waitForTimeout(150); await p.evaluate(() => scrollTo(0, 2200)); await p.waitForTimeout(500);
  ok('Header hides on scroll down', await p.locator('[data-header]').evaluate((h) => h.hasAttribute('data-hidden')));
  await p.evaluate(() => scrollTo(0, 1800)); await p.waitForTimeout(500);
  ok('Header shows on scroll up', !(await p.locator('[data-header]').evaluate((h) => h.hasAttribute('data-hidden'))));

  // Tab through the whole page: every stop has a visible focus indicator and is not hidden under the sticky header.
  await p.evaluate(() => scrollTo(0, 0));
  await p.locator('body').evaluate((b) => b.focus());
  let noRing = [], obscured = [], stops = 0;
  for (let i = 0; i < 70; i++) {
    await p.keyboard.press('Tab');
    const r = await p.evaluate(() => {
      const a = document.activeElement; if (!a || a === document.body) return null;
      const cs = getComputedStyle(a); const box = a.getBoundingClientRect();
      const ring = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) || cs.boxShadow !== 'none' || !!a.closest(':has(> a:focus-visible)') ;
      const header = document.querySelector('[data-header]'); const hb = header && !header.hasAttribute('data-hidden') ? header.getBoundingClientRect().bottom : 0;
      const hidden = box.bottom <= hb + 1 && box.height > 0 && !header.contains(a);
      return { id: `${a.tagName.toLowerCase()}.${String(a.className).split(' ')[0]} "${(a.textContent || '').trim().slice(0, 30)}"`, ring, hidden };
    });
    if (!r) break; stops++;
    if (!r.ring) noRing.push(r.id);
    if (r.hidden) obscured.push(r.id);
  }
  ok(`Focus indicator on every Tab stop (${stops} checked on /)`, !noRing.length, noRing.slice(0, 5).join(', '));
  ok('Focused element never hidden under the sticky header (WCAG 2.4.11)', !obscured.length, obscured.slice(0, 5).join(', '));

  const blank = await p.evaluate(() => [...document.querySelectorAll('a[target=_blank]')].filter((a) => !/noopener/.test(a.rel)).map((a) => a.href));
  ok('target=_blank links have rel=noopener', !blank.length, blank.join(', '));

  await p.goto(base + '/#faq-ownership', { waitUntil: 'networkidle' });
  ok('FAQ deep link #faq-ownership opens that answer', await p.locator('#faq-ownership').evaluate((d) => d.open));
  await p.close();
}

// ---- Reduced motion: no running animations after load (06 §9.6)
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  await p.goto(base + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
  const running = await p.evaluate(() => document.getAnimations().filter((a) => a.playState === 'running').length);
  ok('Reduced motion: no running animations on /', running === 0, `${running} running`);
  ok('Reduced motion: delivery scene shows its final state', await p.locator('[data-ds]').evaluate((d) => !d.hasAttribute('data-playing')));
  await ctx.close();
}

// ---- Mobile: menu dialog, sticky bar rules
{
  const p = await mobile.newPage();
  await p.goto(base + '/', { waitUntil: 'networkidle' });
  const open = p.locator('[data-menu-open]');
  await open.click();
  ok('Mobile menu opens as a modal dialog', await p.locator('dialog[data-menu]').evaluate((d) => d.open && d.matches(':modal')));
  ok('Mobile menu: focus starts inside (Close button)', (await active(p)).includes('menu-sheet__close'), await active(p));
  ok('Mobile menu: page scroll locked', await p.evaluate(() => getComputedStyle(document.documentElement).overflow === 'hidden'));
  await p.keyboard.press('Escape');
  ok('Mobile menu: Esc closes and focus returns to Menu', !(await p.locator('dialog[data-menu]').evaluate((d) => d.open)) && (await active(p)).includes('site-header__menu'), await active(p));

  const bar = p.locator('[data-bottom-bar]');
  ok('Sticky bar hidden while the hero CTA is visible', await bar.evaluate((b) => b.hidden));
  await p.evaluate(() => scrollTo(0, 1600)); await p.waitForTimeout(500);
  ok('Sticky bar shows after the hero leaves the viewport', !(await bar.evaluate((b) => b.hidden)));
  ok('Sticky bar is the clarity call', (await bar.locator('a').getAttribute('data-cta-id')) === 'sticky_book_clarity');
  await p.evaluate(() => scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(600);
  ok('Sticky bar stays hidden from the closing CTA band to the footer', await bar.evaluate((b) => b.hidden));

  await p.goto(base + '/launch-ready', { waitUntil: 'networkidle' });
  ok('/launch-ready sticky bar is the Review', (await p.locator('[data-bottom-bar] a').getAttribute('data-cta-id')) === 'sticky_book_review');

  for (const r of ['/book', '/book/confirmed', '/launch-check', '/privacy', '/terms', '/this-is-a-404']) {
    await p.goto(base + r, { waitUntil: 'networkidle' }); await p.evaluate(() => scrollTo(0, 1200)); await p.waitForTimeout(300);
    const visible = await p.evaluate(() => { const b = document.querySelector('[data-bottom-bar]'); return !!b && !b.hidden; });
    ok(`No sticky bar on ${r}`, !visible);
  }
  await p.close();
}

// ---- /book type preselection + fallback without Cal configured
{
  const p = await desktop.newPage();
  for (const [q, want, partnerTab] of [['?type=review', 'review', false], ['?type=clarity', 'clarity', false], ['?type=partner', 'partner', true], ['?type=bogus', 'clarity', false], ['', 'clarity', false]]) {
    await p.goto(`${base}/book${q}`, { waitUntil: 'networkidle' });
    const cur = await p.locator('[data-opt][aria-current="true"]').getAttribute('data-opt');
    const tabShown = await p.locator('[data-opt="partner"]').isVisible();
    const panel = await p.locator(`[data-panel="${want}"]`).isVisible();
    ok(`/book${q || ' (no type)'} preselects ${want}`, cur === want && panel && tabShown === partnerTab, `current=${cur} partnerTab=${tabShown}`);
  }
  await p.goto(`${base}/book?type=clarity`, { waitUntil: 'networkidle' }); await p.waitForTimeout(500);
  const fallback = await p.evaluate(() => ({ failed: !document.querySelector('[data-cal-failed]')?.hidden, email: !!document.querySelector('main a[href^="mailto:"]') }));
  ok('/book without a Cal account shows the fallback and email', fallback.failed && fallback.email, JSON.stringify(fallback));
  const res = await p.goto(`${base}/this-is-a-404`);
  ok('Unknown URL returns HTTP 404 with the 404 page', res.status() === 404 && (await p.locator('h1').innerText()).length > 0, String(res.status()));
  await p.close();
}

await browser.close();
const failed = results.filter((r) => !r.pass);
for (const r of results) console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}${r.pass ? '' : `  -> ${r.detail}`}`);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
