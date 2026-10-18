#!/usr/bin/env node
// DiscoverDev static-build checker. Zero dependencies. Node >= 20.
// Usage: node qa/check-dist.mjs [distDir=dist] [--report qa/reports/<name>.md]
// Exit code 1 if any BLOCKER is found.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const dist = path.resolve(args.find(a => !a.startsWith('--')) || 'dist');
const reportIdx = args.indexOf('--report');
const reportPath = reportIdx > -1 ? args[reportIdx + 1] : null;
// fileURLToPath decodes %20, so folders with spaces (e.g. "Discoverdev Landing Page") still find routes.txt.
const here = path.dirname(fileURLToPath(import.meta.url));

const findings = []; // {sev, page, rule, msg}
const add = (sev, page, rule, msg) => findings.push({ sev, page, rule, msg });

if (!fs.existsSync(dist)) { console.error(`No build at ${dist}. Run npm run build first.`); process.exit(2); }

// ---------- collect files ----------
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
const files = walk(dist);
const rel = f => '/' + path.relative(dist, f).split(path.sep).join('/');
const htmlFiles = files.filter(f => f.endsWith('.html'));
const fileSet = new Set(files.map(rel));

const routeFor = f => {
  let r = rel(f).replace(/\.html$/, '');
  if (r.endsWith('/index')) r = r.slice(0, -6) || '/';
  return r === '' ? '/' : r;
};
const resolves = href => {
  let p = href.split('#')[0].split('?')[0];
  if (p === '' ) return true;
  try { p = decodeURI(p); } catch {}
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
  if (p === '/' ) return fileSet.has('/index.html');
  return fileSet.has(p) || fileSet.has(p + '.html') || fileSet.has(p + '/index.html');
};

// ---------- helpers ----------
const strip = s => s.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<!--[\s\S]*?-->/g, ' ');
const text = s => strip(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const attr = (tag, name) => { const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i')); return m ? (m[2] ?? m[3] ?? m[4]) : null; };
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(m => m[0]);
const meta = (html, key, val) => tags(html, 'meta').find(t => (attr(t, key) || '').toLowerCase() === val);
const decode = s => (s || '').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// ---------- site-level checks ----------
const must = ['/404.html', '/robots.txt', '/llms.txt'];
for (const f of must) if (!fileSet.has(f)) add('BLOCKER', '(site)', 'system-file', `${f} missing`);
if (![...fileSet].some(f => /^\/sitemap(-index)?\.xml$/.test(f))) add('BLOCKER', '(site)', 'system-file', 'sitemap-index.xml / sitemap.xml missing');
if (!fileSet.has('/_headers')) add('MAJOR', '(site)', 'system-file', '_headers missing (security headers)');
if (!fileSet.has('/_redirects')) add('MAJOR', '(site)', 'system-file', '_redirects missing (old routes)');
if (!fileSet.has('/.well-known/security.txt')) add('MINOR', '(site)', 'system-file', '.well-known/security.txt missing');
if (![...fileSet].some(f => /favicon\.(svg|ico)$/.test(f))) add('MAJOR', '(site)', 'system-file', 'favicon missing');
if (fileSet.has('/robots.txt')) {
  const r = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
  if (/Disallow:\s*\/\s*$/m.test(r) && !/Allow:/i.test(r)) add('BLOCKER', '/robots.txt', 'robots', 'robots.txt disallows the whole site');
  if (!/Sitemap:/i.test(r)) add('MINOR', '/robots.txt', 'robots', 'no Sitemap: line');
}

// expected routes
const routesFile = path.join(here, 'routes.txt');
const routes = fs.existsSync(routesFile) ? fs.readFileSync(routesFile, 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')) : [];
for (const r of routes) {
  const opt = r.startsWith('?'); const route = opt ? r.slice(1) : r;
  if (!resolves(route)) add(opt ? 'MINOR' : 'BLOCKER', route, 'route-missing', `expected route not built`);
}

// ---------- per-page checks ----------
const titles = new Map(), metas = new Map();
const placeholder = /\[(VERIFY|PRICE|CONSENT|METRIC|TEAM|WHATSAPP|ASSET|TODO|TBD)[^\]]*\]|\bTODO\b|lorem ipsum/i;
for (const f of htmlFiles) {
  const page = routeFor(f);
  const html = fs.readFileSync(f, 'utf8');
  const is404 = /\/404$/.test(page);
  const robots = (attr(meta(html, 'name', 'robots') || '', 'content') || '').toLowerCase();
  const noindex = robots.includes('noindex');
  const body = text(html.split(/<body[^>]*>/i)[1] || html);

  // lang + viewport
  const htmlTag = tags(html, 'html')[0] || '';
  if (!attr(htmlTag, 'lang')) add('MAJOR', page, 'lang', '<html> has no lang');
  if (!meta(html, 'name', 'viewport')) add('MAJOR', page, 'viewport', 'no meta viewport');

  // title + description
  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim();
  const desc = decode(attr(meta(html, 'name', 'description') || '', 'content') || '').trim();
  if (!title) add('BLOCKER', page, 'title', 'missing <title>');
  else if (title.length > 60) add('MINOR', page, 'title', `title ${title.length} chars (>60): "${title}"`);
  if (!is404) {
    if (!desc) add('MAJOR', page, 'meta-description', 'missing meta description');
    else if (desc.length > 155) add('MINOR', page, 'meta-description', `meta ${desc.length} chars (>155)`);
  }
  if (title && !noindex) { (titles.get(title) || titles.set(title, []).get(title)).push(page); }
  if (desc && !noindex) { (metas.get(desc) || metas.set(desc, []).get(desc)).push(page); }

  // H1
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1) add('MAJOR', page, 'h1', `${h1s.length} <h1> elements (need exactly 1)`);

  // canonical + OG (indexable pages)
  const canon = tags(html, 'link').find(t => (attr(t, 'rel') || '').toLowerCase() === 'canonical');
  if (!noindex && !is404) {
    if (!canon) add('MAJOR', page, 'canonical', 'no canonical');
    else {
      const href = attr(canon, 'href') || '';
      if (!/^https:\/\/discoverdev\.ai(\/|$)/.test(href)) add('MAJOR', page, 'canonical', `canonical not on https://discoverdev.ai: ${href}`);
      if (/\/$/.test(href) && page !== '/') add('MINOR', page, 'canonical', `canonical has trailing slash: ${href}`);
    }
    for (const k of ['og:title', 'og:description', 'og:image', 'og:url']) if (!meta(html, 'property', k)) add('MINOR', page, 'open-graph', `${k} missing`);
  }
  if (page === '/book/confirmed' && !noindex) add('MAJOR', page, 'robots', '/book/confirmed must be noindex');
  if (page === '/design-system' && !noindex) add('BLOCKER', page, 'robots', '/design-system must be noindex (private reference)');
  if (/noindex/.test(robots) && !is404 && !/\/(book\/confirmed|design-system)$/.test(page)) add('BLOCKER', page, 'robots', 'page is noindex (preview leak?)');

  // JSON-LD
  for (const m of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const j = JSON.parse(m[1]);
      const s = JSON.stringify(j);
      if (/"AggregateRating"|"aggregateRating"/.test(s)) add('BLOCKER', page, 'schema', 'AggregateRating present (not allowed: self-serving reviews)');
      if (/"@type"\s*:\s*"Review"/.test(s)) add('MAJOR', page, 'schema', 'Review markup present (self-serving)');
      if (placeholder.test(s)) add('BLOCKER', page, 'schema', 'placeholder inside JSON-LD');
    } catch (e) { add('BLOCKER', page, 'schema', `JSON-LD does not parse: ${e.message}`); }
  }

  // placeholders / copy rules (visible text only)
  const ph = body.match(placeholder);
  if (ph) add('BLOCKER', page, 'placeholder', `shipped placeholder: "${ph[0]}"`);
  // Voice rule covers our copy; client quotes in <blockquote> are verbatim (03 §2A.8c), so they are left out of this count.
  const ownCopy = text((html.split(/<body[^>]*>/i)[1] || html).replace(/<blockquote[\s\S]*?<\/blockquote>/gi, ' '));
  const bangs = (ownCopy.match(/[A-Za-z0-9)]!(\s|$)/g) || []).length;
  if (bangs) add('MINOR', page, 'voice', `${bangs} exclamation mark(s) in visible copy`);
  const forbidden = body.match(/\b(world-class|cutting-edge|synergy|cheap|affordable)\b/i);
  if (forbidden) add('MINOR', page, 'voice', `banned word: "${forbidden[0]}"`);

  // links
  for (const a of tags(strip(html), 'a')) {
    const href = attr(a, 'href');
    if (href == null) { add('MINOR', page, 'link', '<a> without href'); continue; }
    if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    if (/^https?:\/\/(www\.)?discoverdev\.ai/i.test(href)) { add('MINOR', page, 'link', `absolute internal link: ${href}`); continue; }
    if (/^https?:\/\//i.test(href)) {
      if ((attr(a, 'target') || '') === '_blank' && !/noopener|noreferrer/.test(attr(a, 'rel') || '')) add('MINOR', page, 'link', `target=_blank without rel=noopener: ${href}`);
      continue;
    }
    if (href.startsWith('#')) continue;
    const abs = href.startsWith('/') ? href : path.posix.join(path.posix.dirname(page), href);
    if (!resolves(abs)) add('BLOCKER', page, 'broken-link', `internal link not built: ${href}`);
    if (/[?&]utm_/i.test(href)) add('MINOR', page, 'link', `UTM on internal link: ${href}`);
  }

  // images
  for (const img of tags(strip(html), 'img')) {
    if (attr(img, 'alt') == null) add('MAJOR', page, 'img-alt', `img without alt: ${attr(img, 'src')}`);
    if (!attr(img, 'width') || !attr(img, 'height')) add('MINOR', page, 'img-size', `img without width/height (CLS): ${attr(img, 'src')}`);
    const src = attr(img, 'src') || '';
    if (src.startsWith('/') && !resolves(src)) add('BLOCKER', page, 'img-missing', `image not in build: ${src}`);
  }

  // third-party scripts
  for (const s of tags(html, 'script')) {
    const src = attr(s, 'src') || '';
    if (/^https?:\/\//.test(src) && !/(cal\.com|posthog\.com|cloudflareinsights\.com|web3forms\.com|challenges\.cloudflare\.com)/.test(src)) add('MAJOR', page, 'third-party', `unexpected external script: ${src}`);
    if (/cal\.com/.test(src) && !/^\/(book|launch-ready)$/.test(page)) add('MAJOR', page, 'third-party', 'Cal.com script outside /book or /launch-ready');
  }
  // forms
  for (const inp of tags(strip(html), 'input').filter(t => !/type=["']?(hidden|submit|button)/i.test(t))) {
    const id = attr(inp, 'id');
    const labelled = attr(inp, 'aria-label') || attr(inp, 'aria-labelledby') || (id && new RegExp(`<label[^>]+for=["']${id}["']`, 'i').test(html));
    if (!labelled) add('MAJOR', page, 'form-label', `input without label: ${attr(inp, 'name') || id || '(unnamed)'}`);
  }
}
for (const [t, ps] of titles) if (ps.length > 1) add('MINOR', ps.join(', '), 'duplicate-title', `"${t}"`);
for (const [d, ps] of metas) if (ps.length > 1) add('MINOR', ps.join(', '), 'duplicate-meta', d.slice(0, 60) + '…');

// ---------- report ----------
const order = { BLOCKER: 0, MAJOR: 1, MINOR: 2 };
findings.sort((a, b) => order[a.sev] - order[b.sev] || a.page.localeCompare(b.page));
const count = s => findings.filter(f => f.sev === s).length;
const lines = [
  `# QA report: ${path.basename(dist)} (${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC)`,
  '',
  `Pages: ${htmlFiles.length} · Blockers: ${count('BLOCKER')} · Major: ${count('MAJOR')} · Minor: ${count('MINOR')}`,
  '',
  '| Severity | Page | Rule | Detail |', '|---|---|---|---|',
  ...findings.map(f => `| ${f.sev} | ${f.page} | ${f.rule} | ${f.msg.replace(/\|/g, '\\|')} |`),
];
const out = lines.join('\n') + '\n';
if (reportPath) { fs.mkdirSync(path.dirname(reportPath), { recursive: true }); fs.writeFileSync(reportPath, out); }
console.log(out);
process.exit(count('BLOCKER') ? 1 : 0);
