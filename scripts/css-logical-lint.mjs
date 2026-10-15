// Fails on physical CSS properties so every layout mirrors for /ar (07 §8, CLAUDE.md RTL rule).
// Scans src/**/*.{css,astro}. Allowed exceptions: none.
import fs from 'node:fs';
import path from 'node:path';

const RULES = [
  /\b(margin|padding|border)-(left|right)\b/,
  /(^|[\s;{])(left|right)\s*:/,
  /text-align\s*:\s*(left|right)\b/,
  /float\s*:\s*(left|right)\b/,
  /\b(border-(top|bottom)-(left|right)-radius)\b/,
];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : /\.(css|astro)$/.test(e.name) ? [p] : [];
});
let bad = 0;
for (const file of walk('src')) {
  const text = fs.readFileSync(file, 'utf8');
  // Only check CSS: <style> blocks in .astro files, whole .css files.
  const css = file.endsWith('.css') ? text : [...text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  css.split('\n').forEach((line, i) => {
    const code = line.replace(/\/\*.*?\*\//g, '');
    for (const r of RULES) if (r.test(code)) { console.error(`${file}:${i + 1}: physical property: ${line.trim()}`); bad++; }
  });
}
if (bad) { console.error(`\n${bad} physical propert${bad === 1 ? 'y' : 'ies'} found. Use logical properties (margin-inline-start, inset-inline-end, text-align: start).`); process.exit(1); }
console.log('css-logical-lint: OK');
