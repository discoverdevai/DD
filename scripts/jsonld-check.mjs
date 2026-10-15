// 07 §15 / 05 §4: one JSON-LD block per page, it parses, it has an @graph, no review markup, and the
// properties each type needs are present. Organization is full on / and /about, a stub elsewhere.
import { pages, report } from './lib/dist.mjs';

const BANNED = new Set(['AggregateRating', 'Review', 'ReserveAction', 'HowTo']);
const REQUIRED = {
  Organization: ['@id', 'name', 'url'],
  WebSite: ['@id', 'name', 'url'],
  WebPage: ['@id', 'name', 'url'],
  AboutPage: ['@id', 'name', 'url'],
  CollectionPage: ['@id', 'name', 'url'],
  Service: ['@id', 'name', 'provider', 'url'],
  FAQPage: ['mainEntity'],
  Question: ['name', 'acceptedAnswer'],
  BlogPosting: ['headline', 'datePublished', 'dateModified', 'author', 'publisher', 'mainEntityOfPage', 'image'],
  Article: ['headline', 'datePublished', 'dateModified', 'author', 'publisher', 'image'],
  BreadcrumbList: ['itemListElement'],
  ListItem: ['position'],
  ItemList: ['itemListElement'],
};
const FULL_ORG = ['logo', 'sameAs', 'address', 'description'];
const NO_LD = new Set(['/404', '/book/confirmed']);
const problems = [];

function walk(node, route, visit) {
  if (Array.isArray(node)) return node.forEach((n) => walk(n, route, visit));
  if (node && typeof node === 'object') { visit(node); Object.values(node).forEach((v) => walk(v, route, visit)); }
}

for (const { route, html } of pages()) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (!blocks.length) { if (!NO_LD.has(route)) problems.push(`${route}: no JSON-LD`); continue; }
  if (blocks.length > 1) problems.push(`${route}: ${blocks.length} JSON-LD blocks (05 §4: one per page)`);
  let data;
  try { data = JSON.parse(blocks[0]); } catch (e) { problems.push(`${route}: JSON-LD does not parse (${e.message})`); continue; }
  if (!Array.isArray(data['@graph'])) problems.push(`${route}: no @graph`);
  walk(data, route, (n) => {
    const types = [].concat(n['@type'] ?? []);
    for (const t of types) {
      if (BANNED.has(t)) problems.push(`${route}: banned type ${t}`);
      for (const k of REQUIRED[t] ?? []) {
        if (n[k] === undefined) problems.push(`${route}: ${t} missing ${k}`);
      }
      if (t === 'Organization' && (route === '/' || route === '/about')) for (const k of FULL_ORG) if (n[k] === undefined && n.name) problems.push(`${route}: full Organization missing ${k}`);
    }
  });
}

report('jsonld-check', [...new Set(problems)]);
