// Clean-up gate (docs/architecture/design-system-plan.md, phase 0): compares two builds page by page on what a
// refactor must not change: visible text, heading outline, element ids, CTA ids/data-cta-*, internal links, image alts,
// JSON-LD, title/meta. Ignores Astro's hashed class names and asset file names.
// Usage: node scripts/dist-diff.mjs <baseline dir> [<new dir, default dist>]
import fs from 'node:fs';
import path from 'node:path';

const [baseDir, newDir = 'dist'] = process.argv.slice(2);
if (!baseDir) { console.error('usage: node scripts/dist-diff.mjs <baseline> [dist]'); process.exit(2); }

function pages(root) {
  const out = new Map();
  (function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const file = path.join(dir, name);
      if (fs.statSync(file).isDirectory()) { if (name !== '_astro') walk(file); continue; }
      if (name.endsWith('.html')) out.set(path.relative(root, file).split(path.sep).join('/'), fs.readFileSync(file, 'utf8'));
    }
  })(root);
  return out;
}

const strip = (h) => h.replace(/<script(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
const text = (h) => strip(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const all = (h, re) => [...h.matchAll(re)].map((m) => m.slice(1).join('|'));
function facts(html) {
  const h = strip(html);
  return {
    title: all(h, /<title>([^<]*)<\/title>/g).join(),
    meta: all(h, /<meta (?:name|property)="([^"]+)" content="([^"]*)"/g).sort().join('\n'),
    text: text(h.replace(/<script[^>]*application\/ld\+json[\s\S]*?<\/script>/g, '')),
    headings: all(h, /<(h[1-6])\b[^>]*>([\s\S]*?)<\/h[1-6]>/g).map((s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).join('\n'),
    ids: all(h, /\sid="([^"]+)"/g).join(' '),
    cta: all(h, /data-cta-(id|tier|position|target)="([^"]+)"/g).join(' '),
    links: all(h, /<a\b[^>]*\shref="([^"]+)"/g).join(' '),
    alts: all(h, /<img\b[^>]*\salt="([^"]*)"/g).join(' | '),
    jsonld: all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g).join('\n'),
  };
}

const a = pages(baseDir), b = pages(newDir);
const problems = [];
for (const f of new Set([...a.keys(), ...b.keys()])) {
  if (!a.has(f)) { problems.push(`${f}: new page`); continue; }
  if (!b.has(f)) { problems.push(`${f}: page removed`); continue; }
  const fa = facts(a.get(f)), fb = facts(b.get(f));
  for (const k of Object.keys(fa)) if (fa[k] !== fb[k]) {
    let i = 0; while (i < fa[k].length && fa[k][i] === fb[k][i]) i++;
    problems.push(`${f}: ${k} differs near "…${fa[k].slice(Math.max(0, i - 40), i + 40)}…" vs "…${fb[k].slice(Math.max(0, i - 40), i + 40)}…"`);
  }
}
if (problems.length) { console.error(`dist-diff: ${problems.length} difference(s)`); problems.slice(0, 40).forEach((p) => console.error('  - ' + p)); process.exit(1); }
console.log(`dist-diff: OK (${a.size} pages identical in content)`);
