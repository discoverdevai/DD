#!/usr/bin/env node
// Analytics event check (07 §9, 10 §4.7) against the DEV server, where track() logs `[track] name payload` to the console
// instead of sending (production only sends on discoverdev.ai). Drives real interactions and checks every event name,
// its properties, the common properties, no PII, and once-only rules. Booking events need Cal.com (dry run, 10 §3).
// Usage: npx astro dev --port 4400   then   node qa/events.mjs http://127.0.0.1:4400
import { chromium } from 'playwright';

const base = (process.argv[2] ?? 'http://127.0.0.1:4400').replace(/\/$/, '');
const COMMON = ['locale', 'page_path', 'page_type', 'channel', 'entry_referrer_host'];
const PII = /@|\bemail\b|\bphone\b|uid|\?/i; // no addresses, no booking uid, no query strings
const results = [];
const ok = (name, pass, detail = '') => results.push({ name, pass, detail });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
let events = [];
page.on('console', async (m) => {
  if (!m.text().startsWith('[track]')) return;
  const [, name, payload] = await Promise.all(m.args().map((a) => a.jsonValue().catch(() => null)));
  events.push({ name, payload });
});
// Never leave the site during the test: external clicks are fulfilled with an empty page.
await ctx.route((url) => !url.href.startsWith(base), (r) => r.fulfill({ status: 200, body: '' }));
const take = (n) => events.filter((e) => e.name === n);
const reset = () => { events = []; };
const settle = () => page.waitForTimeout(400);

function checkPayload(label, e, required = []) {
  if (!e) return ok(label, false, 'not fired');
  const missing = [...COMMON, ...required].filter((k) => e.payload?.[k] === undefined);
  const pii = Object.entries(e.payload ?? {}).filter(([k, v]) => typeof v === 'string' && k !== 'link_url' && k !== 'destination' && PII.test(v));
  const urlWithQuery = ['link_url', 'destination', 'page_path'].filter((k) => typeof e.payload?.[k] === 'string' && e.payload[k].includes('?'));
  ok(label, !missing.length && !pii.length && !urlWithQuery.length, [missing.length && `missing ${missing}`, pii.length && `PII-like ${JSON.stringify(pii)}`, urlWithQuery.length && `query in ${urlWithQuery}`].filter(Boolean).join('; ') || JSON.stringify(e.payload));
}

// 1. First touch + UTMs, cta_clicked, /book link decoration (07 §9.3, §9.5)
await page.goto(`${base}/?utm_source=test&utm_medium=qa&utm_campaign=launch`, { waitUntil: 'networkidle' });
reset();
const heroCta = page.locator('[data-cta-id="home_hero_clarity"]');
await heroCta.evaluate((a) => a.addEventListener('click', (e) => e.preventDefault(), { once: true }));
await heroCta.click(); await settle();
const cta = take('cta_clicked')[0];
checkPayload('cta_clicked (home hero)', cta, ['cta_id', 'cta_tier', 'cta_position', 'cta_target', 'destination']);
ok('cta_clicked carries first-touch UTMs', cta?.payload?.utm_source === 'test' && cta?.payload?.utm_medium === 'qa', JSON.stringify({ s: cta?.payload?.utm_source, m: cta?.payload?.utm_medium, channel: cta?.payload?.channel }));
const decorated = await heroCta.getAttribute('href');
ok('/book link gets UTMs + entry_cta at click time', /utm_source=test/.test(decorated) && /entry_cta=home_hero_clarity/.test(decorated), decorated);

// UTMs persist to a later page (first touch, sessionStorage)
await page.goto(`${base}/build`, { waitUntil: 'networkidle' }); reset();
const buildCta = page.locator('[data-cta-id="build_hero_clarity"]');
await buildCta.evaluate((a) => a.addEventListener('click', (e) => e.preventDefault(), { once: true }));
await buildCta.click(); await settle();
ok('first-touch UTMs persist across pages', take('cta_clicked')[0]?.payload?.utm_campaign === 'launch', JSON.stringify(take('cta_clicked')[0]?.payload));

// 2. outbound_clicked: Clutch (proof) and email (mailto)
await page.goto(`${base}/`, { waitUntil: 'networkidle' }); reset();
const clutch = page.locator('.hero__proof a[data-link-context="proof"]');
await clutch.evaluate((a) => a.addEventListener('click', (e) => e.preventDefault(), { once: true })); // stay on the page to read the log
await clutch.click(); await settle();
const out = take('outbound_clicked')[0];
checkPayload('outbound_clicked (Clutch)', out, ['link_host', 'link_url', 'link_context']);
ok('outbound link_context = proof', out?.payload?.link_context === 'proof', out?.payload?.link_context);
await page.goto(`${base}/`, { waitUntil: 'networkidle' }); reset();
await page.locator('footer a[href^="mailto:"]').evaluate((a) => a.addEventListener('click', (e) => e.preventDefault(), { once: true }));
await page.locator('footer a[href^="mailto:"]').click(); await settle();
const mail = take('outbound_clicked')[0];
ok('outbound_clicked (mailto) has host "mailto", no address', mail?.payload?.link_host === 'mailto' && !JSON.stringify(mail?.payload).includes('@'), JSON.stringify(mail?.payload));

// 3. case_study_viewed, once
reset(); await page.goto(`${base}/work/edtech-ai-agents`, { waitUntil: 'networkidle' }); await settle();
checkPayload('case_study_viewed', take('case_study_viewed')[0], ['case_study_slug', 'industry', 'region']);
ok('case_study_viewed fires once', take('case_study_viewed').length === 1, String(take('case_study_viewed').length));
reset(); await page.goto(`${base}/work`, { waitUntil: 'networkidle' }); await settle();
ok('no case_study_viewed on /work index', take('case_study_viewed').length === 0);

// 4. Quiz: started, question_answered x10, completed (option values only)
await page.goto(`${base}/launch-check`, { waitUntil: 'networkidle' });
await page.evaluate(() => sessionStorage.clear()); await page.reload({ waitUntil: 'networkidle' }); reset();
await page.locator('[data-start]').click(); await settle();
for (let i = 0; i < 10; i++) {
  const step = page.locator('form[data-qid]:visible');
  await step.locator('input[type=radio] + label, label:has(input[type=radio])').first().click(); // users click the styled label
  await step.locator('button[type=submit]').click(); await settle();
}
checkPayload('quiz_started', take('quiz_started')[0], ['resumed']);
const answered = take('quiz_question_answered');
ok('quiz_question_answered fires 10 times, index 1–10, no answer values', answered.length === 10 && answered.every((e, i) => e.payload.question_index === i + 1 && !('answer' in e.payload)), `${answered.length} events`);
const done = take('quiz_completed')[0];
checkPayload('quiz_completed', done, ['segment', 'points_total', 'flags_crit', 'flags_rebuild', 'built_with', 'urgent']);
ok('quiz segment is one of the 4', ['ready_polish', 'fix_first', 'high_risk', 'rebuild_candidate'].includes(done?.payload?.segment), done?.payload?.segment);
reset(); await page.reload({ waitUntil: 'networkidle' });
const resume = page.locator('[data-resume-go]');
if (await resume.isVisible()) { await resume.click(); await settle(); ok('quiz resume fires quiz_started {resumed: true}', take('quiz_started')[0]?.payload?.resumed === true); }
else ok('quiz resume offered after reload', false, 'no resume button');

// 5. article_read: 60% sentinel seen AND >= 30 s visible, once (fake clock)
const p2 = await ctx.newPage();
const ev2 = []; p2.on('console', async (m) => { if (m.text().startsWith('[track]')) { const a = await Promise.all(m.args().map((x) => x.jsonValue().catch(() => null))); ev2.push({ name: a[1], payload: a[2] }); } });
await p2.clock.install();
await p2.goto(`${base}/insights/ai-app-to-production`, { waitUntil: 'networkidle' });
await p2.clock.runFor(31000);
ok('no article_read before scrolling to the sentinel', !ev2.some((e) => e.name === 'article_read'));
await p2.locator('[data-article-sentinel]').scrollIntoViewIfNeeded(); await p2.waitForTimeout(300);
await p2.clock.runFor(6000); await p2.waitForTimeout(300);
const reads = ev2.filter((e) => e.name === 'article_read');
checkPayload('article_read', reads[0], ['article_slug', 'pillar', 'role', 'read_seconds']);
await p2.clock.runFor(30000); await p2.waitForTimeout(200);
ok('article_read fires once', ev2.filter((e) => e.name === 'article_read').length === 1, String(ev2.filter((e) => e.name === 'article_read').length));
await p2.close();

// 6. booking_completed backup on /book/confirmed, deduplicated (07 §9.3)
await page.goto(`${base}/book/confirmed`, { waitUntil: 'networkidle' });
reset(); await page.goto(`${base}/book/confirmed`, { waitUntil: 'networkidle' }); await settle();
ok('direct visit to /book/confirmed sends nothing', take('booking_completed').length === 0);
await page.evaluate(() => { sessionStorage.setItem('dd_booking', JSON.stringify({ event_type: 'clarity_call', start_time: new Date(Date.now() + 864e5).toISOString() })); sessionStorage.setItem('entry_cta', 'home_hero_clarity'); });
reset(); await page.reload({ waitUntil: 'networkidle' }); await settle();
const bc = take('booking_completed')[0];
checkPayload('booking_completed (backup)', bc, ['event_type', 'entry_cta', 'embed_page', 'backup']);
reset(); await page.reload({ waitUntil: 'networkidle' }); await settle();
ok('booking_completed not sent twice', take('booking_completed').length === 0);

await browser.close();
const failed = results.filter((r) => !r.pass);
for (const r of results) console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}${r.pass ? '' : `  -> ${r.detail}`}`);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
