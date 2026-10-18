import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH });
const c = await b.newContext({ viewport: { width: 390, height: 800 } }); const p = await c.newPage();
for (let i=0;i<5;i++){ const r = await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' }); if (r.status()===200) break; await p.waitForTimeout(500); }
await p.waitForTimeout(2000);
for (const y of [0, 3000, 6000]) { await p.evaluate(y=>scrollTo(0,y), y); await p.waitForTimeout(800);
 console.log(y, JSON.stringify(await p.evaluate(()=>{const s=document.querySelector('.skip-link,a[href="#main"]'); const r=s.getBoundingClientRect(); const cs=getComputedStyle(s); return {top:Math.round(r.top),left:Math.round(r.left),w:Math.round(r.width),pos:cs.position,tr:cs.transform}}))); }
await b.close();
