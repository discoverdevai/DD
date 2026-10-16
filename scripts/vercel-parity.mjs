// Vercel hosting (Oct 16, Mohamed): vercel.json must carry the same redirects and headers as public/_redirects and
// public/_headers (the Cloudflare files, kept for a later move). Fails when the two drift apart.
import fs from 'node:fs';

const problems = [];
const v = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

// Redirects: "from to code" lines; a trailing /* becomes /:path+.
const redirects = fs.readFileSync('public/_redirects', 'utf8').split('\n')
  .map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  .map((l) => { const [from, to, code] = l.split(/\s+/); return { from: from.replace(/\/\*$/, '/:path+'), to, code: Number(code) }; });
for (const r of redirects) {
  const m = v.redirects.find((x) => x.source === r.from);
  if (!m) problems.push(`redirect missing in vercel.json: ${r.from}`);
  else if (m.destination !== r.to || m.statusCode !== r.code) problems.push(`redirect differs: ${r.from} (${m.destination} ${m.statusCode} vs ${r.to} ${r.code})`);
}
if (v.redirects.length !== redirects.length) problems.push(`redirect count ${v.redirects.length} vs ${redirects.length}`);

// Headers: every "Key: value" under a path block in _headers must exist for the matching Vercel source.
const toSource = (p) => (p === '/*' ? '/(.*)' : p.replace(/\*$/, '(.*)'));
let path = null;
for (const raw of fs.readFileSync('public/_headers', 'utf8').split('\n')) {
  if (!raw.trim() || raw.trim().startsWith('#')) continue;
  if (!/^\s/.test(raw)) { path = raw.trim(); continue; }
  if (path.startsWith('https://')) continue; // workers.dev noindex: covered by the vercel.app host rule
  const i = raw.indexOf(':'); const key = raw.slice(0, i).trim(); const value = raw.slice(i + 1).trim();
  const src = toSource(path);
  const ok = v.headers.some((h) => h.source === src && !h.has && h.headers.some((x) => x.key === key && x.value === value));
  if (!ok) problems.push(`header missing in vercel.json: ${path} ${key}`);
}
if (!v.headers.some((h) => h.has?.some((c) => c.type === 'host' && String(c.value).includes('vercel')) && h.headers.some((x) => x.key === 'X-Robots-Tag'))) problems.push('noindex for *.vercel.app missing');
if (v.cleanUrls !== true || v.trailingSlash !== false || v.outputDirectory !== 'dist') problems.push('cleanUrls/trailingSlash/outputDirectory not set for the file-format build');

if (problems.length) { console.log(`vercel-parity: ${problems.length} problem(s)`); for (const p of problems) console.log(`  - ${p}`); process.exit(1); }
console.log(`vercel-parity: OK (${redirects.length} redirects, headers match)`);
