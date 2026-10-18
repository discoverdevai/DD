import fs from 'node:fs';
const d = {};
for (const f of fs.readdirSync(new URL('.', import.meta.url))) if (f.startsWith('m-') && f.endsWith('.json')) Object.assign(d, JSON.parse(fs.readFileSync(new URL(f, import.meta.url))));
const order = ['320', '360', '390', '390rm', '430', '768', '1024', '1280', '1440', '1536', '1920'];
const mode = process.argv[2];
if (mode === 'overview') {
  for (const w of order) {
    const x = d[w]; if (!x) continue;
    const small = x.texts.filter(t => t.fs < 12 || (t.fs < 14 && !/^H/.test(t.tag) && t.fs >= 12)).length;
    console.log(w, 'docW', x.docW, 'vw', x.vw, 'docH', x.docH, 'cls', x.cls.toFixed(3), 'overflow', x.overflow.length, JSON.stringify(x.overflow.slice(0, 3)), 'taps<44', x.taps.length, 'nonInline', x.taps.filter(t => !t.inline).length, 'imgNoDim', x.imgs.length + '/' + x.imgCount, 'uneq', x.uneq.length, 'hdr', JSON.stringify(x.header), 'bbar', JSON.stringify(x.bbar), 'hero', JSON.stringify(x.hero));
  }
}
if (mode === 'secs') {
  for (const w of process.argv[3].split(',')) { console.log('== ' + w, JSON.stringify(d[w].tok)); d[w].secs.forEach(s => console.log(s.i, s.sel, s.id, 'h', s.h, 'pad', s.padT, s.padB, 'gap', s.gapNext, 'contW', s.contW, 'bboxW', s.bboxW, 'leaf%', s.leafAreaPct, 'minH', s.minH)); }
}
if (mode === 'text') {
  const w = process.argv[3]; const kind = process.argv[4] || 'all';
  d[w].texts.forEach(t => { if (kind === 'head' && !/^H/.test(t.tag)) return; if (kind === 'flag' && !(t.fs < 14 || t.cpl > 80 || (t.last && t.last.length === 1))) return; console.log(t.tag, t.sel, 'fs', t.fs, 'lines', t.lines, 'cpl', t.cpl, 'w', t.w, 'last', JSON.stringify(t.last), '|', t.txt); });
}
if (mode === 'taps') { const w = process.argv[3]; d[w].taps.filter(t => !t.inline).forEach(t => console.log(t.sel, t.tag, t.w + 'x' + t.h, t.disp, t.txt)); }
if (mode === 'misc') { const w = process.argv[3]; const x = d[w]; console.log(JSON.stringify({ uneq: x.uneq, off: x.offScale, imgs: x.imgs, anchors: x.anchors, menu: x.menu, scrollPad: x.scrollPad }, null, 0)); }
