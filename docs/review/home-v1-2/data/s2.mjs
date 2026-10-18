import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH });
for (const [w,h] of [[1920,1080],[1536,864]]) {
const c = await b.newContext({ viewport: { width: w, height: h } }); const p = await c.newPage();
for (let i=0;i<5;i++){ const r = await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' }); if (r.status()===200) break; await p.waitForTimeout(500); }
await p.waitForTimeout(3000);
await p.screenshot({ path: `docs/review/home-v1-2/shots/tmp-hero-${w}.png` });
await p.evaluate(()=>scrollTo(0,0));
await c.close(); }
await b.close();
