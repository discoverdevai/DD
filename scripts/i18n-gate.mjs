// 07 §8 / §15: UI string dictionaries in src/i18n/ui/*.json. Every value is non-empty; every non-EN locale has the
// same keys and the same {placeholders} as EN, and no value is copied from EN unless it is on the do-not-translate list.
// Today only EN ships, so this mostly guards empties and placeholder syntax until /ar lands (Q1 2027).
import fs from 'node:fs';
import path from 'node:path';
import { report } from './lib/dist.mjs';

const DIR = path.resolve('src/i18n/ui');
const DNT = ['DiscoverDev', 'Launch-Ready Review', 'Lovable', 'Bolt', 'v0', 'Cursor', 'Supabase', 'Stripe', 'Clutch', 'hello@discoverdev.ai'];
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

report('i18n-gate', problems);
