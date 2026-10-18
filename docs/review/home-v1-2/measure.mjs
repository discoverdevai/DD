import fs from 'node:fs';
import { chromium } from 'playwright';
const base = 'http://localhost:4321';
const widths = (process.argv[2] || '320').split(',').map(x => x === '390rm' ? x : +x);
const exe = process.env.CHROME_PATH || chromium.executablePath();
const browser = await chromium.launch({ executablePath: exe });
const out = {};
const pageFn = () => {
  const vw = innerWidth;
  const sel = (el) => { if (!el) return ''; let s = el.tagName.toLowerCase(); if (el.id) s += '#' + el.id; const c = [...el.classList].slice(0, 2).join('.'); if (c) s += '.' + c; return s; };
  const path = (el) => { const p = []; let e = el; for (let i = 0; i < 3 && e && e.tagName !== 'MAIN' && e.tagName !== 'BODY'; i++, e = e.parentElement) p.unshift(sel(e)); return p.join(' > '); };
  const R = (el) => el.getBoundingClientRect();
  const sy = scrollY;
  const top = (el) => R(el).top + sy;
  const px = (v) => parseFloat(v);
  const visible = (el) => { const cs = getComputedStyle(el); const r = R(el); return cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
  const res = { vw, docW: document.documentElement.scrollWidth, docH: document.documentElement.scrollHeight };
  const probe = document.createElement('div'); document.body.appendChild(probe);
  const tok = {};
  for (const t of ['--section-y', '--section-y-sm', '--stack-lg', '--gutter', '--grid-gap', '--header-h', '--bottom-bar-h', '--container']) { probe.style.inlineSize = 'var(' + t + ',0px)'; probe.style.position = 'absolute'; tok[t] = probe.getBoundingClientRect().width; }
  probe.remove(); res.tok = tok;
  const main = document.querySelector('main');
  const blocks = [...main.children].filter(e => e.tagName === 'SECTION' || e.id === 'work');
  const secs = [];
  const flat = [];
  blocks.forEach(b => { if (b.id === 'work') [...b.children].forEach(c => flat.push(c)); else flat.push(b); });
  flat.forEach((s, i) => {
    const cs = getComputedStyle(s), r = R(s);
    const next = flat[i + 1]; const gap = next ? top(next) - (top(s) + r.height) : null;
    let cont = s.querySelector(':scope > .container, :scope > div') || s;
    const cr = R(cont);
    let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9, area = 0;
    s.querySelectorAll('p,h1,h2,h3,h4,li,a,img,svg,button,span,summary,blockquote,figure,dt,dd').forEach(e => {
      if (!visible(e)) return; const rr = R(e);
      if (e.tagName === 'svg' || e.tagName === 'IMG' || (e.children.length === 0 && e.textContent.trim())) { minX = Math.min(minX, rr.left); maxX = Math.max(maxX, rr.right); minY = Math.min(minY, rr.top); maxY = Math.max(maxY, rr.bottom); area += Math.min(rr.width, vw) * rr.height; }
    });
    secs.push({ i, sel: sel(s), id: s.id, h: Math.round(r.height), top: Math.round(top(s)), padT: px(cs.paddingBlockStart), padB: px(cs.paddingBlockEnd), gapNext: gap === null ? null : Math.round(gap), contW: Math.round(cr.width), contL: Math.round(cr.left), secW: Math.round(r.width), bboxW: Math.round(maxX - minX), leafAreaPct: Math.round(100 * area / (r.width * r.height)), minH: cs.minBlockSize });
  });
  res.secs = secs;
  const texts = [];
  main.querySelectorAll('h1,h2,h3,h4,p,li,summary,blockquote,dd,figcaption').forEach(el => {
    if (!visible(el)) return;
    if (el.tagName === 'LI' && el.querySelector('p,h3,h4')) return;
    const cs = getComputedStyle(el); const txt = el.textContent.trim().replace(/\s+/g, ' ');
    if (!txt) return;
    const lh = cs.lineHeight === 'normal' ? px(cs.fontSize) * 1.2 : px(cs.lineHeight);
    const lines = Math.max(1, Math.round((R(el).height - px(cs.paddingBlockStart) - px(cs.paddingBlockEnd)) / lh));
    let lastWords = null;
    if (/^H[1-4]$/.test(el.tagName) && lines > 1) {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); const words = [];
      let n; while (n = walker.nextNode()) { const t = n.textContent; const re = /\S+/g; let m; while (m = re.exec(t)) { const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length); const rr = rg.getClientRects()[0]; if (rr) words.push({ w: m[0], top: rr.top }); } }
      if (words.length) { const lastTop = Math.max(...words.map(w => w.top)); lastWords = words.filter(w => Math.abs(w.top - lastTop) < 4).map(w => w.w); }
    }
    texts.push({ sel: path(el), tag: el.tagName, fs: +px(cs.fontSize).toFixed(1), lh: +lh.toFixed(1), w: Math.round(R(el).width), h: Math.round(R(el).height), lines, cpl: Math.round(txt.length / lines), len: txt.length, last: lastWords, txt: txt.slice(0, 50), ta: cs.textAlign, fw: cs.fontWeight });
  });
  res.texts = texts;
  const over = [];
  document.querySelectorAll('body *').forEach(el => {
    if (!visible(el)) return; const r = R(el);
    if (r.right > vw + 1 || r.left < -1) {
      let a = el.parentElement, clipped = null;
      while (a && a !== document.body) { const c = getComputedStyle(a); if (/(hidden|auto|scroll|clip)/.test(c.overflowX)) { const ar = R(a); if (ar.right <= vw + 1 && ar.left >= -1) { clipped = sel(a); break; } } a = a.parentElement; }
      over.push({ sel: path(el), l: Math.round(r.left), r: Math.round(r.right), clippedBy: clipped });
    }
  });
  res.overflowAll = over.length; res.overflow = over.filter(o => !o.clippedBy).slice(0, 15);
  const taps = [];
  document.querySelectorAll('a[href],button,summary,input,select,textarea,[role=button],[tabindex="0"]').forEach(el => {
    if (!visible(el)) return; const r = R(el);
    const par = el.closest('p,li,dd,blockquote,figcaption');
    const inPara = el.tagName === 'A' && getComputedStyle(el).display === 'inline' && par && par.textContent.trim().length > el.textContent.trim().length + 10;
    if (r.width < 43.5 || r.height < 43.5) taps.push({ sel: path(el), tag: el.tagName, w: +r.width.toFixed(1), h: +r.height.toFixed(1), inline: !!inPara, txt: (el.getAttribute('aria-label') || el.textContent.trim()).slice(0, 30), disp: getComputedStyle(el).display, inHeader: !!el.closest('header'), inFooter: !!el.closest('footer') });
  });
  res.taps = taps;
  res.imgs = [...document.images].filter(visible).map(i => ({ src: (i.currentSrc || i.src).slice(-40), wAttr: i.getAttribute('width'), hAttr: i.getAttribute('height'), ar: getComputedStyle(i).aspectRatio, w: Math.round(R(i).width), h: Math.round(R(i).height) })).filter(i => !i.wAttr || !i.hAttr);
  res.imgCount = document.images.length;
  const hdr = document.querySelector('header'); const bb = document.querySelector('.bottom-bar'); const hcs = hdr && getComputedStyle(hdr);
  res.header = hdr ? { h: Math.round(R(hdr).height), pos: hcs.position } : null;
  res.bbar = bb && visible(bb) ? { h: Math.round(R(bb).height), pos: getComputedStyle(bb).position, top: Math.round(R(bb).top) } : null;
  res.scrollPad = getComputedStyle(document.documentElement).scrollPaddingBlockStart;
  const uneq = [];
  document.querySelectorAll('main *').forEach(el => {
    const cs = getComputedStyle(el); if (!(cs.display === 'grid' || cs.display === 'flex')) return; if (!visible(el)) return;
    const kids = [...el.children].filter(visible); if (kids.length < 2) return;
    const rows = {}; kids.forEach(k => { const r = R(k); (rows[Math.round(r.top / 8)] ||= []).push(r); });
    Object.values(rows).forEach(rs => { if (rs.length >= 2) { const hs = rs.map(r => r.height), ws = rs.map(r => r.width); if (Math.max(...hs) - Math.min(...hs) > 2 && Math.min(...ws) > 120 && Math.max(...ws) - Math.min(...ws) < 12) uneq.push({ sel: path(el), n: rs.length, hs: hs.map(Math.round), ws: ws.map(Math.round) }); } });
  });
  res.uneq = uneq.slice(0, 12);
  const scale = new Set([0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, ...Object.values(tok).map(v => Math.round(v))]);
  const off = {};
  main.querySelectorAll('section, section > *, h1,h2,h3,p,ul,li,a,button,article,figure').forEach(el => {
    if (!visible(el)) return; const cs = getComputedStyle(el);
    for (const p of ['paddingBlockStart', 'paddingBlockEnd', 'marginBlockStart', 'marginBlockEnd', 'rowGap', 'columnGap']) { const v = px(cs[p]); if (!v || isNaN(v)) continue; if (!scale.has(Math.round(v)) && v % 4 > 0.6 && v % 4 < 3.4) { const k = sel(el) + ' ' + p + '=' + (Math.round(v * 2) / 2); off[k] = (off[k] || 0) + 1; } }
  });
  res.offScale = Object.entries(off).slice(0, 60);
  const hero = document.querySelector('main > section');
  if (hero) {
    const hr = R(hero); const h = hero.querySelector('h1'); const r = R(h);
    const links = [...hero.querySelectorAll('a')].filter(visible);
    res.hero = { h: Math.round(hr.height), ovf: getComputedStyle(hero).overflow, sh: hero.scrollHeight, ch: hero.clientHeight, sw: hero.scrollWidth, cw: hero.clientWidth, h1: { top: Math.round(r.top + sy), bottom: Math.round(r.bottom + sy), w: Math.round(r.width), fs: px(getComputedStyle(h).fontSize) }, ctaBottom: links.length ? Math.round(Math.max(...links.map(x => R(x).bottom)) + sy) : null };
  }
  return res;
};
async function settle(page) {
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2800);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 500) { await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(120); }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(800);
}
for (const w of widths) {
  const rm = w === '390rm'; const width = rm ? 390 : w;
  const ctx = await browser.newContext({ viewport: { width, height: 800 }, deviceScaleFactor: 1, reducedMotion: rm ? 'reduce' : 'no-preference' });
  const page = await ctx.newPage();
  await page.addInitScript(() => { window.__cls = 0; new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true }); });
  await settle(page);
  const data = await page.evaluate(pageFn);
  data.cls = await page.evaluate(() => window.__cls);
  if (width === 390 && !rm || width === 1440) await page.screenshot({ path: 'docs/review/home-v1-2/shots/full-' + width + '.png', fullPage: true });
  data.anchors = [];
  const hrefs = await page.evaluate(() => [...new Set([...document.querySelectorAll('a[href^="#"],a[href^="/#"]')].map(a => a.getAttribute('href').replace(/^\//, '')).filter(h => h.length > 1))]);
  for (const h of hrefs) {
    await page.goto(base + '/' + h, { waitUntil: 'load' }).catch(() => { }); await page.waitForTimeout(1200);
    const a = await page.evaluate((h) => { const t = document.querySelector(h); if (!t) return { h, missing: true }; const hd = document.querySelector('header'); const hb = hd.getBoundingClientRect().bottom; const hh = t.querySelector('h1,h2,h3'); const r = t.getBoundingClientRect(); const hr = hh ? hh.getBoundingClientRect() : null; return { h, secTop: Math.round(r.top), headerBottom: Math.round(hb), headingTop: hr ? Math.round(hr.top) : null, headingHidden: hr ? hr.top < hb : null, scrollY: Math.round(scrollY) }; }, h);
    data.anchors.push(a);
  }
  if (width < 1024 && width !== 320 && width !== 430 && width !== 360) {
    await page.goto(base + '/', { waitUntil: 'networkidle' }); await page.waitForTimeout(1500);
    const btn = page.locator('button[aria-label="Open menu"], button[aria-label*="menu" i]').first();
    if (await btn.count()) {
      const snap = () => page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, sh: document.documentElement.scrollHeight, y: scrollY, hdr: document.querySelector('header').getBoundingClientRect().height, h1top: document.querySelector('h1').getBoundingClientRect().top, bodyOv: getComputedStyle(document.body).overflow, htmlOv: getComputedStyle(document.documentElement).overflow, innerW: innerWidth }));
      const before = await snap(); const bb = await btn.boundingBox();
      await btn.click(); await page.waitForTimeout(700);
      const after = await snap();
      data.menu = { btn: bb, before, after };
      if (width === 390 && !rm) await page.screenshot({ path: 'docs/review/home-v1-2/shots/menu-open-390.png' });
    } else data.menu = 'no button found';
  }
  out[w] = data;
  await ctx.close();
}
await browser.close();
fs.writeFileSync('docs/review/home-v1-2/data/m-' + process.argv[2] + '.json', JSON.stringify(out, null, 1));
console.log('done');
