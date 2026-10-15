// @ts-check
import { defineConfig, fontProviders, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that must never appear in the sitemap (07 §7.1, 05 §6).
const NOT_IN_SITEMAP = /\/(404|book\/confirmed)$|\/og\//;

export default defineConfig({
  site: 'https://discoverdev.ai',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Shiki writes inline styles, which the meta CSP blocks (docs/PLAN.md A6). Code blocks are decided in M5.
  markdown: { syntaxHighlight: false },
  // Add 'ar' only when the first native-reviewed Arabic page ships (Q1 2027).
  i18n: { locales: ['en'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  integrations: [
    sitemap({ filter: (page) => !NOT_IN_SITEMAP.test(new URL(page).pathname.replace(/\/$/, '')) }),
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
