// Section contract (06 §5): every <section> in <main> has a data-surface and an accessible name that points at a real
// heading (aria-labelledby -> an id on the page), so the page outline and skip navigation stay meaningful.
// Only top-level sections count: a <section> nested in another (legal clauses, sub-groups) just structures its parent.
import { pages, mainOf, report } from './lib/dist.mjs';

const SURFACES = new Set(['ink', 'paper', 'alt', 'inverse']);
const problems = [];
for (const { route, html } of pages()) {
  if (route === '/404' || route === '/privacy' || route === '/terms') continue; // legal documents: clauses are sections of one document
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  let depth = 0;
  for (const m of mainOf(html).matchAll(/<(\/?)section\b([^>]*)>/g)) {
    if (m[1]) { depth--; continue; }
    if (depth++ > 0) continue;
    const attrs = m[2];
    const label = attrs.match(/aria-labelledby="([^"]+)"/)?.[1];
    const name = attrs.match(/\sid="([^"]+)"/)?.[1] ?? label ?? '(no id)';
    const surface = attrs.match(/data-surface="([^"]+)"/)?.[1];
    if (!surface) problems.push(`${route}: section "${name}" has no data-surface`);
    else if (!SURFACES.has(surface)) problems.push(`${route}: section "${name}" has unknown surface "${surface}"`);
    if (!label && !/aria-label="/.test(attrs)) problems.push(`${route}: section "${name}" has no aria-labelledby`);
    else if (label && !ids.has(label)) problems.push(`${route}: section "${name}" is labelled by missing id "${label}"`);
  }
}
report('section-contract', problems);
