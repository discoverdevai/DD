// Regenerates src/styles/tokens.css from context/06-design-system.md (§2 block + §0.2 Signal block).
// 06 is the source of truth; edit it, then run: node scripts/build-tokens.mjs
import fs from 'node:fs';
const md = fs.readFileSync('context/06-design-system.md', 'utf8').replace(/\r\n/g, '\n');
const block = (after) => {
  const i = md.indexOf(after);
  if (i < 0) throw new Error(`Section not found: ${after}`);
  const m = md.slice(i).match(/```css\n([\s\S]*?)```/);
  if (!m) throw new Error(`No css block after: ${after}`);
  return m[1].trim();
};
const base = block('## 2. Tokens');
const signal = block('### 0.2 Tokens');
const out = `/* GENERATED from context/06-design-system.md by scripts/build-tokens.mjs. Do not edit by hand. */\n\n${base}\n\n/* ===== 06 §0.2 Signal (v1.1) ===== */\n${signal}\n`;
fs.writeFileSync('src/styles/tokens.css', out);
console.log(`tokens.css: ${out.split('\n').length} lines`);
