import { chromium } from 'playwright';
const base = 'http://localhost:4321';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH });
const dir = 'docs/review/home-v1-2/shots/tmp-';
async function settle(page) {
  await page.goto(base + '/', { waitUntil: 'networkidle' }); await page.waitForTimeout(2800);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 500) { await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(100); }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(600);
}
for (const [w, h] of [[1440, 900], [1920, 1080], [390, 844]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  await settle(page);
  await page.screenshot({ path: `${dir}hero-${w}.png` });
  const ids = ['#why', '#services', '#how-we-work', '#work', '#selected-work', '#reviews', '#faq', '#cta', '.pband'];
  for (const id of ids) {
    const el = page.locator(id).first(); if (!(await el.count())) continue;
    await el.scrollIntoViewIfNeeded(); await page.waitForTimeout(500);
    await el.screenshot({ path: `${dir}${id.replace(/[#.]/g, '')}-${w}.png` });
  }
  await ctx.close();
}
await browser.close();
console.log('ok');
