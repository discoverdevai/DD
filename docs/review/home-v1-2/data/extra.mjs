import fs from 'node:fs';
import { chromium } from 'playwright';
const base = 'http://localhost:4321';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH });
const out = {};
async function settle(page) {
  await page.goto(base + '/', { waitUntil: 'networkidle' }); await page.waitForTimeout(2800);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 500) { await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(100); }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(600);
}
for (const width of [390, 768, 1280]) {
  const ctx = await browser.newContext({ viewport: { width, height: 800 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.addInitScript(() => { window.__cls = []; new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls.push({ v: e.value, t: Math.round(e.startTime), src: (e.sources || []).map(s => (s.node && (s.node.className || s.node.nodeName)) + '').slice(0, 2) }); }).observe({ type: 'layout-shift', buffered: true }); });
  await page.goto(base + '/', { waitUntil: 'networkidle' }); await page.waitForTimeout(3000);
  const cls0 = await page.evaluate(() => window.__cls);
  await settle(page);
  const o = { clsLoad: cls0 };
  o.clsAll = await page.evaluate(() => window.__cls);
  // tap detail
  o.tapLinks = await page.evaluate(() => [...document.querySelectorAll('main a')].filter(a => { const r = a.getBoundingClientRect(); return r.width > 0 && (r.height < 44) && !a.closest('p:not(.proof-chip)') ; }).map(a => ({ t: a.textContent.trim().slice(0, 40), w: Math.round(a.getBoundingClientRect().width), h: Math.round(a.getBoundingClientRect().height), cls: a.className.replace(/astro-\w+/g, '').trim(), par: a.parentElement.tagName + '.' + a.parentElement.className.replace(/astro-\w+/g, '').trim() })));
  // bottom bar
  await page.evaluate(() => scrollTo(0, 1800)); await page.waitForTimeout(1200);
  o.bar = await page.evaluate(() => { const b = document.querySelector('.bottom-bar'); if (!b || b.hidden) return null; const r = b.getBoundingClientRect(); const h = document.querySelector('header'); return { h: Math.round(r.height), vh: innerHeight, headerH: Math.round(h.getBoundingClientRect().height), headerTop: Math.round(h.getBoundingClientRect().top), btnH: Math.round(b.querySelector('a,button').getBoundingClientRect().height) }; });
  if (o.bar && width === 390) await page.screenshot({ path: 'docs/review/home-v1-2/shots/sticky-bar-390.png' });
  // scroll up to show header
  await page.evaluate(() => scrollBy(0, -200)); await page.waitForTimeout(900);
  o.barUp = await page.evaluate(() => { const b = document.querySelector('.bottom-bar'); const h = document.querySelector('header'); return { bar: b && !b.hidden ? Math.round(b.getBoundingClientRect().height) : 0, header: Math.round(h.getBoundingClientRect().bottom), vh: innerHeight }; });
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500);
  if (width < 1024) {
    const btn = page.locator('.site-header__menu');
    const snap = () => page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, sh: document.documentElement.scrollHeight, y: scrollY, h1: Math.round(document.querySelector('h1').getBoundingClientRect().top), hdr: Math.round(document.querySelector('header').getBoundingClientRect().height), bodyOv: getComputedStyle(document.body).overflow, htmlOv: getComputedStyle(document.documentElement).overflow, sbw: innerWidth - document.documentElement.clientWidth }));
    o.menuBtn = await btn.boundingBox();
    const before = await snap();
    await page.evaluate(() => { window.__cls = []; });
    await btn.click(); await page.waitForTimeout(900);
    const after = await snap();
    const sheet = await page.evaluate(() => { const m = document.querySelector('#menu-sheet'); const r = m.getBoundingClientRect(); const items = [...m.querySelectorAll('a,button')].map(a => { const q = a.getBoundingClientRect(); return { t: a.textContent.trim().slice(0, 20), w: Math.round(q.width), h: Math.round(q.height), bottom: Math.round(q.bottom) }; }); return { open: m.open, w: Math.round(r.width), h: Math.round(r.height), scrollH: m.scrollHeight, clientH: m.clientHeight, small: items.filter(i => i.h < 44 || i.w < 44), lastBottom: Math.max(...items.map(i => i.bottom)) }; });
    o.menu = { before, after, shiftCls: await page.evaluate(() => window.__cls), sheet };
    if (width === 390) await page.screenshot({ path: 'docs/review/home-v1-2/shots/menu-open-390.png' });
  }
  out[width] = o;
  await ctx.close();
}
await browser.close();
fs.writeFileSync('docs/review/home-v1-2/data/extra.json', JSON.stringify(out, null, 1));
console.log('ok');
