// SEO drift guard (SEO-AEO spec audit Nov 6, §18 / §32.1). Compares each indexable page's search essentials in dist/
// with the saved snapshot in qa/seo-baseline.json, so a release cannot silently lose them.
//   node scripts/seo-baseline.mjs          compare (part of `npm run test:gates`): fails on lost pages, a changed canonical,
//                                          robots or hreflang set, a missing H1, or a JSON-LD type that disappeared
//   node scripts/seo-baseline.mjs --write  save the current build as the new snapshot (after an intended change)
// Title and description changes are reported but do not fail: copy changes are normal and reviewed through 03.
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const file = 'qa/seo-baseline.json';
const write = process.argv.includes('--write');

const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, 'i')) || [])[1];
const metaContent = (html, key, val) => {
  const t = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]).find((m) => (attr(m, key) || '').toLowerCase() === val);
  return t ? attr(t, 'content') || '' : null;
};

function snapshot() {
  const out = {};
  (function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const f = path.join(dir, name);
      if (fs.statSync(f).isDirectory()) { if (name !== '_astro') walk(f); continue; }
      if (!name.endsWith('.html')) continue;
      const html = fs.readFileSync(f, 'utf8');
      const robots = (metaContent(html, 'name', 'robots') || '').toLowerCase();
      const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
      const canon = links.find((l) => (attr(l, 'rel') || '').toLowerCase() === 'canonical');
      if (!canon || robots.includes('noindex')) continue; // indexable pages only
      const types = new Set();
      for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
        for (const t of JSON.stringify(JSON.parse(m[1])).matchAll(/"@type":"([^"]+)"/g)) types.add(t[1]);
      }
      out[attr(canon, 'href')] = {
        title: (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim() || '',
        description: metaContent(html, 'name', 'description') || '',
        robots,
        h1: (html.match(/<h1\b/gi) || []).length,
        hreflang: links.filter((l) => attr(l, 'hreflang')).map((l) => `${attr(l, 'hreflang')} ${attr(l, 'href')}`).sort(),
        jsonld: [...types].sort(),
      };
    }
  })(dist);
  return Object.fromEntries(Object.entries(out).sort());
}

const now = snapshot();
if (write) {
  fs.writeFileSync(file, JSON.stringify(now, null, 2) + '\n');
  console.log(`seo-baseline: saved ${Object.keys(now).length} pages to ${file}`);
  process.exit(0);
}
if (!fs.existsSync(file)) { console.error(`seo-baseline: no ${file}; run with --write first`); process.exit(1); }
const base = JSON.parse(fs.readFileSync(file, 'utf8'));
const fail = [], note = [];
for (const [url, b] of Object.entries(base)) {
  const n = now[url];
  if (!n) { fail.push(`${url}: page is gone from the build (or became noindex / lost its canonical)`); continue; }
  if (n.robots !== b.robots) fail.push(`${url}: robots changed "${b.robots}" -> "${n.robots}"`);
  if (n.h1 !== 1) fail.push(`${url}: ${n.h1} <h1> elements`);
  if (n.hreflang.join() !== b.hreflang.join()) fail.push(`${url}: hreflang set changed`);
  const lost = b.jsonld.filter((t) => !n.jsonld.includes(t));
  if (lost.length) fail.push(`${url}: JSON-LD lost ${lost.join(', ')}`);
  if (n.title !== b.title) note.push(`${url}: title "${b.title}" -> "${n.title}"`);
  if (n.description !== b.description) note.push(`${url}: description changed`);
}
for (const url of Object.keys(now)) if (!base[url]) note.push(`${url}: new indexable page`);
for (const n of note) console.log(`seo-baseline note: ${n}`);
if (fail.length) {
  console.error(`seo-baseline: ${fail.length} problem(s)\n- ${fail.join('\n- ')}\nIf the change is intended: node scripts/seo-baseline.mjs --write`);
  process.exit(1);
}
console.log(`seo-baseline: OK (${Object.keys(base).length} pages)${note.length ? `, ${note.length} note(s); refresh with --write when intended` : ''}`);
