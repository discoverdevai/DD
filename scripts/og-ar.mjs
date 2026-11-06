// Arabic share images (03 §16b.47; SEO-AEO spec audit Nov 6, §20.2 / §21.3). The build-time card generator (satori, in
// src/pages/og/[...slug].png.ts) cannot shape Arabic, so these cards are rendered by Chromium from the built Arabic pages and
// saved as files in public/og/ar/. Same card as the English ones: logo, eyebrow, the page's H1, rating line, domain.
// Run again whenever an Arabic H1 or eyebrow changes (check-dist fails if a card is missing):
//   npm run build && node qa/serve.mjs   (or the `site` preview on :4321), then:   node scripts/og-ar.mjs [base]
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { AR_OG } from '../src/data/og-ar.mjs';

const base = (process.argv[2] || 'http://localhost:4321').replace(/\/$/, '');
const ui = JSON.parse(fs.readFileSync('src/i18n/ui/ar.json', 'utf8'));
// The home card's eyebrow is share-only copy (not on the page): read it from the Arabic home module.
const homeEyebrow = (fs.readFileSync('src/content/copy/ar/home.ts', 'utf8').match(/ogEyebrow:\s*'([^']+)'/) || [])[1];
if (!homeEyebrow) throw new Error('og-ar: ogEyebrow not found in src/content/copy/ar/home.ts');

const out = 'public/og/ar';
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, bypassCSP: true });
const page = await ctx.newPage();
for (const route of AR_OG) {
  const url = `${base}${route === '/' ? '/ar' : `/ar${route}`}`;
  const res = await page.goto(url, { waitUntil: 'networkidle' });
  if (!res || res.status() !== 200) throw new Error(`og-ar: ${url} returned ${res?.status()}`);
  const title = (await page.locator('h1').first().innerText()).replace(/\s+/g, ' ').trim();
  const pill = await page.locator('.phero__pill').first().innerText().catch(() => '');
  const eyebrow = route === '/' ? homeEyebrow : route === '/book' ? ui['footer.book'] : pill.trim();
  await page.evaluate(({ eyebrow, title, rating }) => {
    const size = title.length > 40 ? 62 : 70;
    document.body.innerHTML = `
      <div class="og" dir="rtl" lang="ar">
        <img src="/brand/logo-horizontal-for-dark.svg" alt="" height="46">
        <div class="mid"><p class="eb">${eyebrow}</p><h1 style="font-size:${size}px">${title}</h1></div>
        <div class="foot"><span class="r"><i></i>${rating}</span><span class="d" dir="ltr">discoverdev.ai</span></div>
      </div>`;
    const s = document.createElement('style');
    s.textContent = `
      html, body { margin: 0; background: #01082D; }
      .og { position: fixed; inset: 0; width: 1200px; height: 630px; box-sizing: border-box; padding: 64px 72px; display: flex; flex-direction: column; justify-content: space-between;
        color: #FEFEFE; font-family: var(--font-arabic, "IBM Plex Sans Arabic"), sans-serif;
        background: radial-gradient(60% 80% at 12% 110%, rgba(33,82,209,.95) 0%, rgba(18,64,190,.45) 40%, rgba(1,8,45,0) 75%), linear-gradient(180deg, #02103E 0%, #01082D 60%); }
      .og img { align-self: flex-start; height: 46px; width: auto; }
      .mid { display: flex; flex-direction: column; gap: 18px; }
      .eb { margin: 0; font-size: 26px; color: #C9DBFF; }
      h1 { margin: 0; color: #FEFEFE; font-weight: 700; line-height: 1.3; max-width: 980px; text-wrap: balance; letter-spacing: 0; }
      .foot { display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid rgba(162,193,254,.22); font-size: 24px; color: #C9DBFF; }
      .r { display: flex; align-items: center; gap: 12px; } .r i { width: 10px; height: 10px; border-radius: 5px; background: #7FD8A6; }
      .d { font-family: var(--font-mono, monospace); color: #FEFEFE; font-size: 22px; }`;
    document.head.append(s);
  }, { eyebrow, title, rating: ui['proof.rating'] });
  await page.evaluate(() => document.fonts.ready);
  const file = path.join(out, `${route === '/' ? 'home' : route.slice(1)}.png`);
  await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log(`og-ar: ${file}  ${title}`);
}
await browser.close();
