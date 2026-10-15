// Dev helper: full-page screenshots of built routes at the 06 breakpoints (320/375/768/1024/1440).
// Usage: node scripts/screens.mjs <outDir> [baseUrl=http://localhost:4321] [routes=/] [widths=375,1440]
import { chromium } from 'playwright';
import fs from 'node:fs';
const [outDir = 'screens', base = 'http://localhost:4321', routesArg = '/', widthsArg = '375,1440'] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
for (const w of widthsArg.split(',').map(Number)) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const r of routesArg.split(',')) {
    const res = await page.goto(base + r, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    const file = `${outDir}/${(r.replace(/\//g, '_') || '_') }-${w}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(res?.status(), w, r, overflow > 1 ? `OVERFLOW ${overflow}px` : 'ok', file);
  }
  await ctx.close();
}
await browser.close();
