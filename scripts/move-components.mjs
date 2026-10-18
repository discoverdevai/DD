// One-off refactor helper (design-system phase 2): moves components with git mv and rewrites every relative import
// in src/ to match. Usage: node scripts/move-components.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const SRC = path.resolve('src');
const C = (p) => path.join(SRC, 'components', p);
const moves = {
  'insights/Breadcrumbs.astro': 'ui/Breadcrumbs.astro',
  'ui/CardGrid.astro': 'blocks/CardGrid.astro', 'ui/CheckList.astro': 'blocks/CheckList.astro', 'ui/FitList.astro': 'blocks/FitList.astro',
  'ui/Steps.astro': 'blocks/Steps.astro', 'ui/Faq.astro': 'blocks/Faq.astro', 'services/ProofList.astro': 'blocks/ProofList.astro',
  'home/AgileSplit.astro': 'blocks/AgileSplit.astro', 'home/Pillars.astro': 'blocks/Pillars.astro',
  'ui/Section.astro': 'sections/Section.astro', 'ui/CtaBand.astro': 'sections/CtaBand.astro',
  ...Object.fromEntries(['Capabilities', 'Closer', 'Engagements', 'FaqSplit', 'Guides', 'HeroV2', 'ProofBand', 'Reviews', 'Showcase', 'Statement', 'ProcessTimeline'].map((n) => [`home/${n}.astro`, `sections/${n}.astro`])),
  ...Object.fromEntries(['JourneyStepper', 'WeekTrack', 'DecisionBoard', 'SquadLoop', 'TermsDoc'].map((n) => [`services/${n}.astro`, `sections/${n}.astro`])),
  'home/DeliveryScene.astro': 'scenes/DeliveryScene.astro', 'home/WayFlow.astro': 'scenes/WayFlow.astro', 'sections/RunPanel.astro': 'scenes/RunPanel.astro',
  'services/ServiceGlance.astro': 'scenes/ServiceGlance.astro', 'ui/ReviewSnapshot.astro': 'scenes/ReviewSnapshot.astro',
};
const map = new Map(Object.entries(moves).map(([a, b]) => [C(a), C(b)]));
const dry = process.argv.includes('--dry');

const files = [];
(function walk(d) { for (const n of fs.readdirSync(d)) { const f = path.join(d, n); if (fs.statSync(f).isDirectory()) walk(f); else if (/\.(astro|ts|mjs|tsx)$/.test(n)) files.push(f); } })(SRC);

const rel = (from, to) => { let r = path.relative(path.dirname(from), to).split(path.sep).join('/'); if (!r.startsWith('.')) r = './' + r; return r; };
const re = /(from\s+|import\s*\(\s*|import\s+)(['"])(\.{1,2}\/[^'"]+)\2/g;
const edits = [];
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const newSelf = map.get(f) ?? f;
  const out = src.replace(re, (m, pre, q, spec) => {
    const target = path.resolve(path.dirname(f), spec);
    const newTarget = map.get(target) ?? target;
    if (newTarget === target && newSelf === f) return m;
    return `${pre}${q}${rel(newSelf, newTarget)}${q}`;
  });
  if (out !== src) edits.push([f, out]);
}
console.log(`${map.size} moves, ${edits.length} files with rewritten imports`);
if (dry) process.exit(0);
for (const [f, out] of edits) fs.writeFileSync(f, out);
for (const [a, b] of map) { fs.mkdirSync(path.dirname(b), { recursive: true }); execSync(`git mv "${a}" "${b}"`); }
