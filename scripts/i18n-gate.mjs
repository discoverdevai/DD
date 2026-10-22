// 07 §8 / §15: UI string dictionaries in src/i18n/ui/*.json. Every value is non-empty; every non-EN locale has the
// same keys and the same {placeholders} as EN, and no value is copied from EN unless it is on the do-not-translate list.
// Today only EN ships, so this mostly guards empties and placeholder syntax until /ar lands (Q1 2027).
import fs from 'node:fs';
import path from 'node:path';
import { report } from './lib/dist.mjs';

const DIR = path.resolve('src/i18n/ui');
// LinkedIn and the copyright line (© {year} DiscoverDev) are the same in every language.
const DNT = ['DiscoverDev', 'LinkedIn', '© {year} DiscoverDev', 'Launch-Ready Review', 'Lovable', 'Bolt', 'v0', 'Cursor', 'Supabase', 'Stripe', 'Clutch', 'hello@discoverdev.ai'];
const placeholders = (v) => [...v.matchAll(/\{([a-zA-Z0-9_]+)\}/g)].map((m) => m[1]).sort().join(',');
const problems = [];

const dicts = Object.fromEntries(fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).map((f) => [f.replace('.json', ''), JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'))]));
const en = dicts.en;
if (!en) problems.push('en.json missing');

for (const [loc, dict] of Object.entries(dicts)) {
  for (const [k, v] of Object.entries(dict)) {
    if (typeof v !== 'string' || !v.trim()) problems.push(`${loc}: "${k}" is empty`);
    if (/\{[^}]*$|^[^{]*\}/.test(v)) problems.push(`${loc}: "${k}" has an unbalanced brace`);
  }
  if (loc === 'en' || !en) continue;
  for (const k of Object.keys(en)) if (!(k in dict)) problems.push(`${loc}: missing key "${k}"`);
  for (const k of Object.keys(dict)) if (!(k in en)) problems.push(`${loc}: extra key "${k}"`);
  for (const [k, v] of Object.entries(dict)) {
    if (k in en && placeholders(v) !== placeholders(en[k])) problems.push(`${loc}: "${k}" placeholders differ from en`);
    if (k in en && v === en[k] && !DNT.some((d) => v === d)) problems.push(`${loc}: "${k}" is identical to en (untranslated?)`);
  }
}

// Unused-key pass (clean-up round 2): every EN key must be used in src/, either as a quoted literal or through a template
// such as `terms.${kind}.${n}` (any key that starts with the template's fixed prefix counts as used).
if (en) {
  const files = [];
  (function walk(d) {
    for (const n of fs.readdirSync(d)) {
      if (n === 'node_modules' || n === '.astro') continue;
      const f = path.join(d, n);
      if (fs.statSync(f).isDirectory()) walk(f);
      else if (/\.(astro|ts|js|mjs)$/.test(n)) files.push(f);
    }
  })(path.resolve('src'));
  const source = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  const prefixes = [...source.matchAll(/[`'"]([a-zA-Z0-9_.]+\.)\$\{/g)].map((m) => m[1]);
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const k of Object.keys(en)) {
    const quoted = new RegExp('[`\'"]' + escape(k) + '[`\'"]');
    if (!quoted.test(source) && !prefixes.some((p) => k.startsWith(p))) problems.push(`en: "${k}" is not used anywhere in src/`);
  }
}

report('i18n-gate', problems);
