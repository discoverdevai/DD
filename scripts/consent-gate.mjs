// 07 §6/§15, 10 §4.2: no unconsented client, reviewer or partner name in any built page or text file.
// Names come from context/09-proof.md. Launch default (11 §0b): nothing is consented yet, so every name is blocked.
// To publish one, add it to CONSENTED with the D-05 reference, after written consent.
import fs from 'node:fs';
import path from 'node:path';
import { DIST, pages, visibleText, report } from './lib/dist.mjs';

const NAMES = [
  // clients and products (09 Portfolio)
  'EduLens', 'Rushr', 'Upscend', 'Pyramakerz', 'Arheb', 'Athkado', 'Amstadd', 'Nile Support', 'Fantacalcio', 'Jumlaty', 'NOMU',
  'BioBank', 'Continuum Therapy Collective', 'Zest',
  // reviewers (09 All reviews)
  'Roberto', 'Youssef', 'Nojoud', 'Alarfaj', 'Michelle Boehm', 'Boehm', 'Andrei', 'Chejneanu', 'Lea Nechitailo', 'Nechitailo', 'Farah Alkhaldi', 'Alkhaldi',
];
// D-05: logos approved by Mohamed in chat, 2026-10-16 (names appear as logo alt text on home).
const CONSENTED = new Set(['EduLens', 'Upscend', 'Arheb', 'Nile Support', 'BioBank', 'Jumlaty', 'Zest', 'Continuum Therapy Collective', 'Rushr']);
const blocked = NAMES.filter((n) => !CONSENTED.has(n));
const re = new RegExp(`\\b(${blocked.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'g');
const problems = [];

const scan = (label, text) => { for (const m of new Set(text.match(re) ?? [])) problems.push(`${label}: "${m}"`); };
for (const { route, html } of pages()) {
  scan(route, visibleText(html));
  // Names can also leak through attributes and structured data.
  for (const m of html.matchAll(/(?:alt|title|content|aria-label)="([^"]*)"/g)) scan(`${route} (attribute)`, m[1]);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) scan(`${route} (JSON-LD)`, m[1]);
}
for (const f of ['llms.txt', 'robots.txt', 'insights/rss.xml']) {
  const p = path.join(DIST, f);
  if (fs.existsSync(p)) scan(`/${f}`, fs.readFileSync(p, 'utf8'));
}

report('consent-gate', [...new Set(problems)]);
