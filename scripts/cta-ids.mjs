// 07 §15 / 04 §6.3: every [data-cta-id] is unique per page and matches {page}_{position}_{target}.
// Also checks the analytics attributes that travel with it (07 §9.3 enums).
import { pages, report } from './lib/dist.mjs';

const ID = /^[a-z0-9]+(_[a-z0-9]+){2,}$/;
const TIER = new Set(['primary', 'secondary', 'partner', 'low_commitment', 'utility']);
const POSITION = new Set(['hero', 'mid', 'band', 'card', 'inline', 'end', 'faq', 'result', 'nav', 'sticky', 'footer']);
const problems = [];

for (const { route, html } of pages()) {
  const seen = new Map();
  for (const m of html.matchAll(/<[a-z]+\b[^>]*\sdata-cta-id="([^"]*)"[^>]*>/g)) {
    const [tag, id] = m;
    if (!ID.test(id)) problems.push(`${route}: bad ctaId "${id}"`);
    seen.set(id, (seen.get(id) ?? 0) + 1);
    const tier = tag.match(/data-cta-tier="([^"]*)"/)?.[1];
    const pos = tag.match(/data-cta-position="([^"]*)"/)?.[1];
    if (!TIER.has(tier)) problems.push(`${route}: "${id}" has tier "${tier}"`);
    if (!POSITION.has(pos)) problems.push(`${route}: "${id}" has position "${pos}"`);
    if (!/data-cta-target="[^"]+"/.test(tag)) problems.push(`${route}: "${id}" has no target`);
  }
  for (const [id, n] of seen) if (n > 1) problems.push(`${route}: ctaId "${id}" used ${n} times`);
}

report('cta-ids', problems);
