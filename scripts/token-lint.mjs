// Token lint (06 §0.7): components, layouts and pages use tokens, never raw colours. Fails on a hex colour or a
// numeric rgb()/rgba()/hsl() in <style> blocks and in colour attributes. Allowed: tokens.css itself, and a line carrying
// "token-lint-ignore" (reason required) for values CSS variables cannot reach, e.g. the <meta name="theme-color"> attribute.
// Usage: node scripts/token-lint.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['src/components', 'src/layouts', 'src/pages'];
const HEX = /#[0-9a-fA-F]{3,8}\b/;
const FN = /\b(?:rgba?|hsla?|hwb|oklch|oklab|lab|lch)\(\s*[\d.]/;
const ATTR = /\b(?:fill|stroke|stop-color|flood-color|color|content)="#[0-9a-fA-F]{3,8}"/;
const problems = [];

function* walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const f = path.join(dir, n);
    if (fs.statSync(f).isDirectory()) yield* walk(f); else if (f.endsWith('.astro')) yield f;
  }
}
for (const root of ROOTS) for (const file of walk(root)) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  let inStyle = false;
  lines.forEach((line, i) => {
    if (/<style\b/.test(line)) inStyle = true;
    const css = inStyle;
    if (/<\/style>/.test(line)) inStyle = false;
    if (line.includes('token-lint-ignore')) return;
    const bad = (css && (HEX.test(line) || FN.test(line))) || ATTR.test(line) || (!css && /style="[^"]*(?:#[0-9a-fA-F]{3,8}|rgba?\()/.test(line));
    if (bad) problems.push(`${file.split(path.sep).join('/')}:${i + 1}  ${line.trim().slice(0, 110)}`);
  });
}
if (problems.length) {
  console.error(`token-lint: ${problems.length} raw colour(s). Use a token from src/styles/tokens.css (spec: 06 §0.2).`);
  problems.forEach((p) => console.error('  ' + p));
  process.exit(1);
}
console.log('token-lint: OK');
