// @ts-check
import { defineConfig, fontProviders, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { readdirSync, readFileSync } from 'node:fs';

// Pages that must never appear in the sitemap (07 §7.1, 05 §6).
const NOT_IN_SITEMAP = /\/(404|book\/confirmed|design-system)$|\/og\//;

// Article lastmod for the sitemap (05 §6, 07 §7.1): each insight's `updatedAt` from its frontmatter, keyed by URL path.
// Only articles get lastmod; it must stay accurate (Google ignores lastmod it can't trust).
const INSIGHTS_DIR = new URL('./src/content/insights/en/', import.meta.url);
const LASTMOD = Object.fromEntries(readdirSync(INSIGHTS_DIR).filter((f) => /\.mdx?$/.test(f)).map((f) => {
  const fm = readFileSync(new URL(f, INSIGHTS_DIR), 'utf8').split(/^---$/m)[1] ?? '';
  const date = fm.match(/^updatedAt:\s*(\S+)/m)?.[1] ?? fm.match(/^publishedAt:\s*(\S+)/m)?.[1];
  return [`/insights/${f.replace(/\.mdx?$/, '')}`, date];
}).filter(([, d]) => d));

export default defineConfig({
  site: 'https://discoverdev.ai',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Scope component CSS with a class instead of a data attribute: same specificity, ~7 KB less HTML on the home page.
  scopedStyleStrategy: 'class',
  // Shiki writes inline styles, which the meta CSP blocks (docs/PLAN.md A6). Code blocks are decided in M5.
  markdown: { syntaxHighlight: false },
  // Add 'ar' only when the first native-reviewed Arabic page ships (Q1 2027).
  i18n: { locales: ['en'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !NOT_IN_SITEMAP.test(new URL(page).pathname.replace(/\/$/, '')),
      serialize: (item) => {
        const d = LASTMOD[new URL(item.url).pathname.replace(/\/$/, '')];
        return d ? { ...item, lastmod: new Date(d).toISOString() } : item;
      },
    }),
  ],
  fonts: [
    // Heading: the LCP element on most pages, so it is the one preloaded font (06 §4).
    { provider: fontProviders.fontsource(), name: 'Manrope', cssVariable: '--font-heading',
      weights: ['600 800'], styles: ['normal'], subsets: ['latin'], fallbacks: ['system-ui', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'Rubik', cssVariable: '--font-body',
      weights: ['400 600'], styles: ['normal'], subsets: ['latin'], fallbacks: ['system-ui', 'sans-serif'] },
    // Signal machine voice (06 §0.3). Not preloaded.
    { provider: fontProviders.fontsource(), name: 'JetBrains Mono', cssVariable: '--font-mono',
      weights: ['400 500'], styles: ['normal'], subsets: ['latin'], fallbacks: ['monospace'] },
  ],
  env: {
    schema: {
      PUBLIC_POSTHOG_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_POSTHOG_HOST: envField.string({ context: 'client', access: 'public', default: 'https://eu.i.posthog.com' }),
      PUBLIC_CF_BEACON_TOKEN: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_CAL_USERNAME: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
  security: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://*.posthog.com",
        "font-src 'self'",
        "connect-src 'self' https://*.posthog.com https://cloudflareinsights.com https://app.cal.com https://api.web3forms.com",
        "frame-src https://app.cal.com https://cal.com",
      ],
      scriptDirective: { resources: ["'self'", 'https://app.cal.com', 'https://static.cloudflareinsights.com', 'https://*.posthog.com'] },
      // No 'unsafe-inline': Astro adds style hashes, which make browsers ignore it anyway.
      // The site uses no inline style attributes (docs/PLAN.md A6). Cal.com styling is checked in M6.
      styleDirective: { resources: ["'self'"] },
    },
  },
});
