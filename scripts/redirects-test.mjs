// 05 §7 / 07 §15: every row in public/_redirects returns one 301 straight to a URL that answers 200.
//   node scripts/redirects-test.mjs --static                     rules only (no server): runs anywhere, part of `npm run qa`
//   node scripts/redirects-test.mjs --base http://localhost:8787  against `npx wrangler dev` (CI) or a preview URL
import fs from 'node:fs';
import { pages, report } from './lib/dist.mjs';

const arg = (name) => { const i = process.argv.findIndex((a) => a === name || a.startsWith(name + '=')); if (i < 0) return undefined; const a = process.argv[i]; return a.includes('=') ? a.split('=')[1] : process.argv[i + 1] ?? ''; };
const rows = fs.readFileSync('public/_redirects', 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).map((l) => l.split(/\s+/));
const problems = [];

if (process.argv.includes('--static')) {
  const live = new Set(pages().map((p) => p.route));
  const sources = new Set();
  let splatSeen = false;
  for (const [from, to, code] of rows) {
    if (code !== '301') problems.push(`${from}: status ${code ?? '(none, defaults to 302)'}; write 301`);
    if (!live.has(to)) problems.push(`${from}: target ${to} is not a built page`);
    if (live.has(from)) problems.push(`${from}: source is a live page and would be shadowed`);
    if (sources.has(from)) problems.push(`${from}: duplicate source`);
    sources.add(from);
    if (from.includes('*')) splatSeen = true; else if (splatSeen) problems.push(`${from}: exact rule below a splat (slower on Workers)`);
  }
  report(`redirects-test --static (${rows.length} rules)`, problems);
} else {
  const base = (arg('--base') || 'http://localhost:8787').replace(/\/$/, '');
  for (const [from, to, code] of rows) {
    const probe = from.endsWith('/*') ? from.replace(/\*$/, 'example-old-page') : from;
    let res;
    try { res = await fetch(base + probe, { redirect: 'manual' }); } catch (e) { problems.push(`${probe}: request failed (${e.message}). Is wrangler dev running on ${base}?`); break; }
    if (String(res.status) !== (code ?? '302')) { problems.push(`${probe}: expected ${code}, got ${res.status}`); continue; }
    const loc = new URL(res.headers.get('location') ?? '', base + probe);
    if (loc.pathname !== new URL(to, base).pathname) problems.push(`${probe}: redirects to ${loc.pathname}, expected ${to}`);
    const final = await fetch(loc, { redirect: 'manual' });
    if (final.status !== 200) problems.push(`${probe} → ${loc.pathname}: final status ${final.status} (must be 200 in one hop)`);
  }
  // Unknown URLs must 404 (wrangler.jsonc not_found_handling: "404-page"), never fall back to the home page.
  const nf = await fetch(base + '/this-page-does-not-exist', { redirect: 'manual' }).catch(() => null);
  if (nf && nf.status !== 404) problems.push(`/this-page-does-not-exist: expected 404, got ${nf.status}`);
  // Security headers from public/_headers (07 §14.1).
  const home = await fetch(base + '/').catch(() => null);
  for (const h of ['strict-transport-security', 'x-content-type-options', 'referrer-policy', 'permissions-policy', 'x-frame-options', 'content-security-policy']) {
    if (home && !home.headers.get(h)) problems.push(`/: missing header ${h}`);
  }
  report(`redirects-test (${rows.length} rules, ${base})`, problems);
}
