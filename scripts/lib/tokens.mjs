// Reads src/styles/tokens.css (generated from 06) so the /design-system page and its swatch stylesheet always show
// the real tokens. Values come from the first definition of a name; the ink block is parsed separately.
import fs from 'node:fs';
import path from 'node:path';

const strip = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '');
const decls = (css) => [...strip(css).matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]);

export function readTokens(file = path.resolve('src/styles/tokens.css')) {
  const css = fs.readFileSync(file, 'utf8');
  const all = new Map();
  for (const [k, v] of decls(css)) if (!all.has(k)) all.set(k, v);
  const ink = css.match(/\[data-surface="ink"\]\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';
  const inkMap = new Map(decls(ink));
  const by = (re) => [...all].filter(([k]) => re.test(k) && !k.endsWith('-rgb'));
  return {
    ramps: Object.fromEntries(['blue', 'neutral', 'green', 'amber', 'red'].map((n) => [n, by(new RegExp('^' + n + '-[0-9]+$'))])),
    ink: inkMap,
    space: by(/^space-\d+$/), text: by(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl)$/), radius: by(/^radius-/),
    device: by(/^device-/),
  };
}
