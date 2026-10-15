// Shared helpers for the CI gates (07 §15): read built pages from dist/ and map them to clean routes.
// Dependency-free on purpose (same as qa/check-dist.mjs): the markup is ours and predictable.
import fs from 'node:fs';
import path from 'node:path';

export const DIST = path.resolve(process.argv.find((a) => a.startsWith('--dist='))?.slice(7) ?? 'dist');

/** Every built HTML page as { route, file, html }. `build.format: 'file'` → /about = about.html. */
export function pages() {
  if (!fs.existsSync(DIST)) fail(`No build at ${DIST}. Run npm run build first.`);
  const out = [];
  (function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const file = path.join(dir, name);
      if (fs.statSync(file).isDirectory()) { if (name !== '_astro') walk(file); continue; }
      if (!name.endsWith('.html')) continue;
      const rel = path.relative(DIST, file).split(path.sep).join('/').replace(/\.html$/, '');
      const route = rel === 'index' ? '/' : '/' + rel.replace(/\/index$/, '');
      out.push({ route, file, html: fs.readFileSync(file, 'utf8') });
    }
  })(DIST);
  return out.sort((a, b) => a.route.localeCompare(b.route));
}

/** Routes listed in the sitemap (the indexable set). */
export function sitemapRoutes() {
  const files = fs.readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  return files.flatMap((f) => [...fs.readFileSync(path.join(DIST, f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname.replace(/\/$/, '') || '/'));
}

/** Old-URL sources from public/_redirects (dist copy). */
export function redirectSources() {
  const f = path.join(DIST, '_redirects');
  if (!fs.existsSync(f)) return [];
  return fs.readFileSync(f, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).map((l) => l.split(/\s+/));
}

export const mainOf = (html) => html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? '';
export const stripScripts = (html) => html.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<style\b[\s\S]*?<\/style>/g, '');
export const visibleText = (html) => stripScripts(html).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, '’').replace(/\s+/g, ' ');

/** Internal hrefs in a fragment, normalised to clean routes (no query/hash/trailing slash). */
export function internalLinks(fragment) {
  return [...fragment.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => m[1])
    .filter((h) => h.startsWith('/') && !h.startsWith('//'))
    .map((h) => h.split('#')[0].split('?')[0].replace(/\/$/, '') || '/');
}

export function report(name, problems) {
  if (problems.length) {
    console.error(`${name}: ${problems.length} problem(s)`);
    for (const p of problems) console.error('  - ' + p);
    process.exit(1);
  }
  console.log(`${name}: OK`);
}

export function fail(msg) { console.error(msg); process.exit(2); }
