// Stream 3 measurement: anchor landing, bottom bar height, screenshots. Usage: node measure.mjs <base> <outDir-suffix>
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = process.argv[2] ?? 'http://127.0.0.1:4401';
const tag = process.argv[3] ?? 'after';
const out = path.join(path.dirname(fileURLToPath(import.meta.url)), tag);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const anchors = ['why', 'services', 'how-we-work', 'work', 'reviews', 'faq'];
for (const [name, vp] of [['desktop', { width: 1440, height: 900 }], ['phone', { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  const res = {};
  for (const id of anchors) {
    const exists = await page.evaluate((i) => !!document.getElementById(i), id);
    if (!exists) { res[id] = 'missing'; continue; }
    await page.evaluate((i) => { document.documentElement.style.scrollBehavior = 'auto'; location.hash = ''; window.scrollTo(0, 0); location.hash = i; }, id);
    await page.waitForTimeout(400);
    res[id] = await page.evaluate((i) => {
      const el = document.getElementById(i);
      const h = el.querySelector('h1,h2,h3');
      const hh = document.querySelector('header')?.getBoundingClientRect().height;
      return { top: Math.round(el.getBoundingClientRect().top), headerH: Math.round(hh), firstHeadingTop: h ? Math.round(h.getBoundingClientRect().top) : null, headingGapUnderHeader: h ? Math.round(h.getBoundingClientRect().top - hh) : null };
    }, id);
    if (['services', 'work'].includes(id)) await page.screenshot({ path: path.join(out, `${name}-${id}.png`) });
  }
  console.log(name, JSON.stringify(res, null, 1));
  if (name === 'phone') {
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 1600); });
    await page.waitForTimeout(800);
    const bar = await page.evaluate(() => { const b = document.querySelector('[data-bottom-bar]'); return b && !b.hidden ? Math.round(b.getBoundingClientRect().height) : 'hidden'; });
    console.log('bottom bar height', bar);
    await page.screenshot({ path: path.join(out, 'phone-bottom-bar.png') });
  }
  await ctx.close();
}
await browser.close();
