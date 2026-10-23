// 07 §15 / 05 §3: every sitemap URL has ≥ 3 inbound links from the <main> of distinct pages (legal pages exempt),
// and no internal link points at a missing page or at a redirect source (links must go straight to the final URL).
import { pages, sitemapRoutes, redirectSources, mainOf, internalLinks, report } from './lib/dist.mjs';

const MIN = 3;
// /book is exempt while V1.0 is a one-page site (03 §2V1): only home and the 404 page have a <main> to link from.
// The Arabic pages link to each other through the header and footer (the English twins' main links come from the same few pages), so they get the same exemption.
const EXEMPT = new Set(['/privacy', '/terms', '/book', '/ar', '/ar/book', '/ar/privacy', '/ar/terms']);
const all = pages();
const routes = new Set(all.map((p) => p.route));
const isFile = (r) => /\.[a-z0-9]+$/i.test(r); // /insights/rss.xml, /llms.txt, assets
const redirects = redirectSources().map(([from]) => from.replace(/\/\*$/, ''));
const isRedirect = (r) => redirects.some((f) => r === f || r.startsWith(f + '/'));
const problems = [];
const inbound = new Map();

for (const { route, html } of all) {
  for (const target of internalLinks(html)) {
    if (isRedirect(target)) problems.push(`${route}: links to redirect source ${target}`);
    else if (!routes.has(target) && !isFile(target)) problems.push(`${route}: links to missing page ${target}`);
  }
  for (const target of new Set(internalLinks(mainOf(html)))) {
    if (target === route) continue;
    if (!inbound.has(target)) inbound.set(target, new Set());
    inbound.get(target).add(route);
  }
}

for (const r of sitemapRoutes()) {
  if (EXEMPT.has(r) || r === '/') continue;
  const n = inbound.get(r)?.size ?? 0;
  if (n < MIN) problems.push(`${r}: ${n} inbound <main> link(s) from distinct pages (need ${MIN}): ${[...(inbound.get(r) ?? [])].join(', ') || 'none'}`);
}

report('inbound-links', [...new Set(problems)]);
