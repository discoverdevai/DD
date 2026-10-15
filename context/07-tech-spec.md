# 07 · Tech Spec

Status: build-ready · Owner: Mohamed (operator) · Builder: Claude Code · Updated: 2026-10-15
Read with: `04-ux-ia.md` (routes, flows), `05-seo-aeo.md` (SEO plumbing, schema, redirects), `10-launch-checklist.md` (milestones, QA), `11-open-decisions.md` (`D-xx`).

## 1. Changes from the original brief (flag in PRs that touch these)
| # | Brief said | Spec says | Why |
|---|---|---|---|
| 1 | Cloudflare **Pages** | Cloudflare **Workers static assets** (`wrangler.jsonc` with `assets`, no `main`) | Cloudflare recommends Workers for new projects; static asset requests are free and unlimited; `_headers`/`_redirects`, previews, rollback all supported (https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) |
| 2 | DNS anywhere | DNS **must** move to Cloudflare nameservers | Workers custom domains require Cloudflare-managed nameservers (https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) |
| 3 | (open) | Plain CSS tokens + logical properties, no Tailwind | No toolchain churn; RTL via logical properties; readable diffs |
| 4 | (open) | Native CSS `@view-transition`, no `<ClientRouter />` | `<ClientRouter />` is incompatible with Astro CSP |
| 5 | GA4 / CF Web Analytics | CF Web Analytics (traffic + RUM) **+ PostHog Cloud EU cookieless** (events) | CF Web Analytics has no custom events; no cookies → no banner |
| 6 | Cal.com everywhere | Cal script only on `/book` (+ `/launch-ready#book` if budget passes, §10.3) | Protects LCP/INP |

## 2. Verified versions (checked 2026-10-15)
Re-verify on day 1 of build: `npm view <pkg> version` and pin exact versions in `package.json`. Dependabot proposes updates.

| Item | Version / fact | Source |
|---|---|---|
| astro | **7.3.8** (released 2026-10-08); engines `node >=22.12.0` | https://registry.npmjs.org/astro · https://github.com/withastro/astro/releases |
| Astro 7.0 | Released 2026-06-22. Vite 8 (Rolldown), Rust `.astro` compiler (stricter on invalid HTML), Sätteri default MD/MDX processor | https://astro.build/blog/astro-7/ · https://docs.astro.build/en/guides/upgrade-to/v7/ |
| Node | Astro needs ≥ 22.12.0, even majors only. LTS lines v24.22.0, v22.23.3. Workers Builds default image Node 24.18.0. **Pin `24` in `.nvmrc`** | https://docs.astro.build/en/install-and-setup/ · https://nodejs.org/en/about/previous-releases · https://developers.cloudflare.com/workers/ci-cd/builds/build-image/ |
| Content Layer | Legacy collections removed in v6. `src/content.config.ts`; `glob`/`file` from `astro/loaders`; `z` from `astro/zod` (Zod 4) | https://docs.astro.build/en/guides/content-collections/ |
| i18n routing | Built in (`locales`, `defaultLocale`, `prefixDefaultLocale`, `astro:i18n`). `domains` needs SSR (not used) | https://docs.astro.build/en/guides/internationalization/ |
| Fonts API | Stable since v6: `fonts: [...]`, `fontProviders.fontsource()`, `<Font cssVariable preload />`; files served from `/_astro/fonts`; metric-matched fallbacks on by default | https://docs.astro.build/en/guides/fonts/ |
| CSP | Stable since v6 (`security.csp`): `<meta>` CSP with hashes of Astro-emitted scripts/styles. Not compatible with `<ClientRouter />`; Shiki inline styles need `'unsafe-inline'` in `style-src`. Not active in `astro dev` | https://docs.astro.build/en/reference/configuration-reference/ |
| View transitions | `<ViewTransitions />` removed in v6. Use CSS `@view-transition { navigation: auto }` (Chrome/Edge 126+, Safari 18.2+; Firefox = normal load) | https://developer.chrome.com/docs/web-platform/view-transitions/cross-document |
| @astrojs/mdx | 8.0.3 | npm |
| @astrojs/sitemap | 3.7.4 (needs `site`; `i18n` option; outputs `sitemap-index.xml`) | npm · https://docs.astro.build/en/guides/integrations-guide/sitemap/ |
| @astrojs/rss | 4.0.19 | npm |
| @astrojs/cloudflare | 14.3.4 — **not used** (only for on-demand rendering) | npm · https://docs.astro.build/en/guides/deploy/cloudflare/ |
| @astrojs/check / typescript | 0.9.10 / 7.0.2. If `astro check` rejects TS 7, pin the TS version allowed by `npm view @astrojs/check peerDependencies` | npm |
| wrangler | 4.151.0 (node ≥ 22) | npm |
| sharp | 0.35.5 | npm |
| satori | 0.57.2 (OG images; takes `.woff`/`.ttf`, not `.woff2`) | npm |
| posthog-js | 1.438.10 | npm |
| Fonts | `@fontsource-variable/manrope` 5.3.0 (200–800, no Arabic) · `@fontsource-variable/rubik` 5.3.0 (300–900, has `arabic` subset) · `@fontsource/ibm-plex-sans-arabic` 5.3.0 (static 100–700; arabic/latin/latin-ext/cyrillic-ext). All OFL-1.1 | npm · https://api.fontsource.org/v1/fonts/ibm-plex-sans-arabic |
| QA tooling | @playwright/test 1.64.1 · @axe-core/playwright 4.13.0 · @lhci/cli 0.15.1 · linkinator 8.1.0 · prettier 3.9.10 + prettier-plugin-astro 1.1.1 | npm |
| Workers free plan | 100k Worker requests/day; **static asset requests free + unlimited**; 20,000 files, 25 MiB/file per version; `_headers` 100 rules (2,000 chars/line); `_redirects` 2,000 static + 100 dynamic | https://developers.cloudflare.com/workers/platform/limits/ · https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/ · https://developers.cloudflare.com/workers/static-assets/headers/ · https://developers.cloudflare.com/workers/static-assets/redirects/ |
| Workers Builds (free) | 3,000 build min/month, 1 concurrent, 20-min timeout; Git builds; preview builds for non-prod branches; `WORKERS_CI_BRANCH` env | https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/ · https://developers.cloudflare.com/workers/ci-cd/builds/configuration/ |
| CF Web Analytics | Free; no personal data; **no custom events**; raw 7 days then ~10% sample up to 6 months; some ad blockers block it. CSP: script `https://static.cloudflareinsights.com`, connect `https://cloudflareinsights.com` | https://developers.cloudflare.com/web-analytics/about/ · https://developers.cloudflare.com/web-analytics/faq/ |
| PostHog Cloud free | 1M events/month; 5K replays; 1-year retention; EU (Frankfurt); `cookieless_mode: "always" \| "on_reject"` + project setting "Cookieless server hash mode". CSP `https://*.posthog.com` | https://posthog.com/pricing · https://posthog.com/tutorials/cookieless-tracking · https://posthog.com/docs/advanced/content-security-policy |
| Plausible | No free hosted plan | https://plausible.io/docs/subscription-plans |
| Cal.com embed | Events `bookingSuccessfulV2`, `bookerViewed`, `bookerReady`, `linkReady`, `linkFailed`, `dryRun*`; `Cal("on",{action,callback})`; `Cal("preload",{calLink})` | https://cal.com/help/embedding/embed-events · https://cal.com/help/embedding/embed-instructions |
| Turnstile free | 20 widgets, 10 hostnames/widget, unlimited challenges | https://developers.cloudflare.com/turnstile/plans/ |
| Web3Forms free | 250 submissions/month; hCaptcha; Turnstile/webhooks are Pro | https://web3forms.com/pricing |
| Core Web Vitals | LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at p75 | https://web.dev/articles/vitals |
| GitHub Pages DNS | Apex A 185.199.108.153–185.199.111.153; AAAA 2606:50c0:8000::153–2606:50c0:8003::153; `www` CNAME `<user>.github.io`. Disabled site with custom domain set = takeover risk | https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site |

Not verified (verify before relying): current DNS host + records (D-14); old SPA route list (D-15); Cal.com embed script/iframe origins (expected `app.cal.com`, confirm in Embed Snippet Generator); whether Cal stores UTM metadata on bookings (dry run); `bookingSuccessfulV2` payload keys (log in dry run); Satori Arabic shaping; UAE PDPL executive regulations status.

## 3. Stack decisions
| Area | Decision | Rejected |
|---|---|---|
| Framework | Astro 7.3.x, `output: 'static'`, no client framework (no React) | Next.js; keeping the SPA |
| Host | Cloudflare Workers static assets, no adapter, no Worker script | Pages; GitHub Pages |
| CI/CD | Workers Builds (push `main` → prod; other branches → preview URL) + GitHub Actions QA gates on PRs | Laptop `wrangler deploy` |
| URLs | `build.format: 'file'`, `trailingSlash: 'never'`, `html_handling: 'auto-trailing-slash'` | Trailing-slash URLs |
| Styling | `tokens.css` custom properties + Astro scoped `<style>` + logical properties only | Tailwind 4.3.3 (reconsider if > 40 components) |
| Fonts | Astro Fonts API + Fontsource, self-hosted, subset, preload heading font only | Google Fonts CDN |
| Images | `astro:assets` `<Image>`/`<Picture>` (AVIF + WebP); LCP image `fetchpriority="high"`, never lazy | Cloudflare Images (paid) |
| Content | MDX (services, work, insights) + JSON `file()` loaders (testimonials, clients, authors, faqs) | Headless CMS |
| Markdown plugins | None at launch | remark/rehype stack |
| Code blocks | Shiki (default) + `style-src 'unsafe-inline'` | Prism |
| Transitions | CSS `@view-transition` inside `prefers-reduced-motion: no-preference` | `<ClientRouter />` |
| Analytics | CF Web Analytics + PostHog EU cookieless `always`; GSC + Bing WMT | GA4 (cookies → banner); Plausible (paid); Microsoft Clarity (D-31) |
| Booking | Cal.com inline embed on `/book` (+ gated on `/launch-ready`); everything else links to `/book` | Sitewide popup script |
| Forms | None at launch except optional quiz email (Web3Forms, D-11) | Formspree (50/mo); Worker + Turnstile (phase 2) |
| Interactivity | Vanilla TS in Astro `<script>` modules (nav, sticky bar, quiz, Cal, analytics) | Islands with a framework |

## 4. Commands + boundaries

### 4.1 Commands
```
nvm use                         # Node 24 from .nvmrc
npm ci
npm run dev                     # astro dev (no CSP, no _headers/_redirects)
npm run build                   # astro build → dist/
npm run preview                 # astro preview (CSP meta active)
npm run preview:cf              # npm run build && npx wrangler dev   (applies _headers + _redirects locally)
npm run check                   # astro check
npm run lint                    # node scripts/css-logical-lint.mjs && node scripts/i18n-gate.mjs && prettier --check .
npm run test:unit               # node --test tests/unit/   (Node 24 strips TS types natively)
npm run test:e2e                # playwright test   (smoke, a11y, analytics, booking, quiz)
npm run test:links              # node scripts/inbound-links.mjs && linkinator ./dist --recurse --skip "^https?://(?!discoverdev\.ai)"
npm run test:redirects          # node scripts/redirects-test.mjs --base http://localhost:8787
npm run lhci                    # lhci autorun (lighthouserc.json)
npm run qa                      # check + lint + build + test:unit + test:links + test:e2e + lhci
npx wrangler deployments list   # list versions (rollback)
npx wrangler rollback <version-id>
```

### 4.2 Boundaries (for Claude Code)
- Always: use tokens (no raw hex in components); logical CSS; `CtaLink` with `ctaId`; copy from `03-copy.md`; run `npm run qa` before marking a task done; update `05-seo-aeo.md` §2.3 when adding an article; add a `_redirects` row when changing any URL.
- Ask first: adding a dependency; adding any third-party origin (CSP change); changing URL structure; adding events or properties; publishing a client name, logo, quote or metric; enabling Cal on any page other than `/book`.
- Never: commit `.env` or secrets; add cookies or `localStorage` analytics IDs; add `AggregateRating`/`Review` schema; ship placeholder pages or lorem; use `left`/`right`/`margin-left` etc.; use `'unsafe-inline'` in `script-src`; auto-redirect by language; publish `status !== 'published'` content.

## 5. Repo structure
```
discoverdev-site/
├─ .nvmrc                          # 24
├─ .env.example                    # PUBLIC_* names only (§19)
├─ astro.config.mjs
├─ wrangler.jsonc
├─ package.json                    # exact pins
├─ tsconfig.json                   # extends astro/tsconfigs/strict
├─ lighthouserc.json
├─ playwright.config.ts
├─ CLAUDE.md                       # build rules (this pack); repeats §4.2 boundaries
├─ context/  research/  .agents/  .claude/  assets/   # this pack, kept at repo root as-is
├─ docs/                           # dns-export-2026-11.txt (§18.2) and other ops notes
├─ public/
│  ├─ _headers  _redirects  robots.txt  llms.txt
│  ├─ favicon.svg  apple-touch-icon.png  logo-512.png
│  └─ .well-known/security.txt
├─ src/
│  ├─ content.config.ts
│  ├─ config.ts                    # feature flags, e.g. CAL_ON_OFFER (§10.3)
│  ├─ content/
│  │  ├─ services/en/{launch-ready,validate,build,scale,partners}.mdx
│  │  ├─ work/en/{edulens,rushr}.mdx
│  │  ├─ insights/en/{ai-app-to-production,ai-built-app-security-holes,lovable-launch-checklist,fix-or-rebuild-ai-app}.mdx
│  │  ├─ testimonials.json  clients.json  authors.json  faqs.json  team.json
│  ├─ data/quiz.ts                 # question + scoring config (04-ux-ia.md §8)
│  ├─ i18n/  locales.ts  t.ts  ui/en.json  ui/ar.json
│  ├─ lib/
│  │  ├─ content.ts                # only allowed collection getters (§6 rules)
│  │  ├─ analytics.ts              # track(), EventName enum, PostHog lazy init, common props
│  │  ├─ utm.ts                    # first-touch UTMs + referrer → channel (sessionStorage); decorate /book links
│  │  ├─ cal.ts                    # Cal loader, inline render, event wiring
│  │  ├─ quiz-score.ts             # pure scoring fn (unit-tested)
│  │  └─ seo.ts                    # canonical, hreflang, OG, JSON-LD builders (05-seo-aeo.md §4)
│  ├─ layouts/  BaseLayout.astro  PageLayout.astro  ArticleLayout.astro  CaseStudyLayout.astro  MinimalLayout.astro
│  ├─ components/                  # §16
│  ├─ styles/  tokens.css  base.css  prose.css
│  ├─ assets/  images/  logos/  og/        # og/ holds .woff/.ttf for satori
│  └─ pages/
│     ├─ index.astro  launch-ready.astro  validate.astro  build.astro  scale.astro  partners.astro
│     ├─ work/index.astro  work/[slug].astro
│     ├─ insights/index.astro  insights/[slug].astro  insights/rss.xml.ts
│     ├─ about.astro  launch-check.astro  book.astro  book/confirmed.astro
│     ├─ privacy.astro  terms.astro  404.astro
│     └─ og/[...slug].png.ts       # prerendered OG images
├─ scripts/  css-logical-lint.mjs  i18n-gate.mjs  redirects-test.mjs  inbound-links.mjs  cta-ids.mjs  consent-gate.mjs  jsonld-check.mjs
└─ tests/
   ├─ unit/  quiz-score.test.ts  utm.test.ts
   └─ e2e/   smoke.spec.ts  a11y.spec.ts  analytics.spec.ts  booking.spec.ts  quiz.spec.ts  rtl.spec.ts (Q1)
```
`/ar/…` pages are added in Q1 2027 under `src/pages/ar/` mirroring EN paths.

## 6. Content collections (`src/content.config.ts`, Zod 4)
```ts
import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const locale = z.enum(['en', 'ar']);
const i18nFields = { locale, translationKey: z.string() };          // links EN ↔ AR versions
const seo = { title: z.string().max(60), description: z.string().min(120).max(155) };

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.mdx' }),
  schema: z.object({
    ...seo, ...i18nFields,
    key: z.enum(['launch-ready', 'validate', 'build', 'scale', 'partners']),
    tier: z.enum(['front-door', 'core', 'partner']),
    h1: z.string(),
    duration: z.string(),                              // "~5 working days"
    pricing: z.enum(['quoted-fixed', 'fixed', 'retainer', 'custom']),
    priceCue: z.string().optional(),                   // visible text only, from D-01/D-18
    creditsToward: z.array(reference('services')).default([]),
    guarantee: z.string().optional(),                  // "No useful findings, no charge"
    deliverables: z.array(z.string()).min(1),
    primaryCta: z.enum(['review', 'clarity', 'partner']),
    faqs: z.array(reference('faqs')).default([]),
    order: z.number().int(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.mdx' }),
  schema: ({ image }) => z.object({
    ...seo, ...i18nFields,
    h1: z.string(),
    client: z.string(),
    clientConsent: z.boolean(),                        // false → must set anonymizedAs
    anonymizedAs: z.string().optional(),
    clientUrl: z.url().optional(),
    region: z.enum(['US', 'GCC', 'UK', 'EU', 'MENA', 'Other']),
    industry: z.string(),
    services: z.array(reference('services')).min(1),
    timelineWeeks: z.number().int().positive().optional(),
    team: z.array(z.string()).default([]),
    stack: z.array(z.string()),
    outcome: z.string(),                               // 1-line hero outcome
    metrics: z.array(z.object({ label: z.string(), value: z.string(), baseline: z.string().optional(),
      timeframe: z.string().optional(), verified: z.boolean() })).default([]),
    cover: image(), coverAlt: z.string(),
    testimonial: reference('testimonials').optional(),
    related: z.array(reference('work')).max(2).default([]),
    relatedInsight: reference('insights').optional(),
    publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(),
    status: z.enum(['draft', 'pending-metrics', 'published']),
  }).refine((d) => d.clientConsent || !!d.anonymizedAs, { message: 'No consent: set anonymizedAs' })
    .refine((d) => d.status !== 'published' || d.metrics.some((m) => m.verified), { message: 'Published case needs ≥1 verified metric' }),
});

const insights = defineCollection({
  loader: glob({ base: './src/content/insights', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    ...seo, ...i18nFields,
    h1: z.string(),
    shortTitle: z.string().max(40),                    // breadcrumb + cards
    pillar: z.enum(['prototype-to-launch', 'ai-cost', 'product-discovery']),
    role: z.enum(['pillar', 'cluster']),
    parent: reference('insights').optional(),          // clusters → pillar
    primaryKeyword: z.string(),
    author: reference('authors'),
    takeaways: z.array(z.string()).min(3).max(5),
    tags: z.array(z.enum(['security', 'supabase', 'payments', 'fix-or-rebuild', 'code-ownership', 'ai-costs'])).max(3).default([]),
    hero: image().optional(), heroAlt: z.string().optional(),
    sources: z.array(z.url()).default([]),             // → BlogPosting.citation
    publishedAt: z.coerce.date(), updatedAt: z.coerce.date(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    relatedService: reference('services'),             // decides end CTA (review vs clarity)
    related: z.array(reference('insights')).max(3).default([]),
    draft: z.boolean().default(false),
  }).refine((d) => d.role === 'pillar' || !!d.parent, { message: 'Cluster needs parent' }),
});

const testimonials = defineCollection({
  loader: file('src/content/testimonials.json'),
  schema: z.object({
    id: z.string(), quote: z.string().max(280),
    name: z.string(), role: z.string().optional(), company: z.string().optional(), country: z.string(),
    service: z.string().optional(),
    source: z.enum(['clutch', 'upwork', 'fiverr', 'direct']), sourceUrl: z.url().optional(),
    photo: z.string().optional(),
    consentToPublish: z.boolean(), consentRecordedAt: z.coerce.date().optional(),
    locale,
  }),
});

const clients = defineCollection({
  loader: file('src/content/clients.json'),
  schema: z.object({ id: z.string(), name: z.string(), country: z.string(), logo: z.string().optional(),
    consentToShowName: z.boolean(), consentToShowLogo: z.boolean(), url: z.url().optional() }),
});

const authors = defineCollection({
  loader: file('src/content/authors.json'),
  schema: z.object({ id: z.string(), type: z.enum(['person', 'organization']), name: z.string(),
    role: z.string().optional(), bio: z.string(), photo: z.string().optional(), linkedin: z.url().optional() }),
});

const team = defineCollection({
  loader: file('src/content/team.json'),
  schema: z.object({ id: z.string(), name: z.string(), role: z.string(), years: z.number().int().optional(),
    photo: z.string(), linkedin: z.url().optional(), consentToPublish: z.boolean(), order: z.number().int() }),
});

const faqs = defineCollection({
  loader: file('src/content/faqs.json'),
  schema: z.object({ id: z.string(), q: z.string(), a: z.string(), locale }),
});

export const collections = { services, work, insights, testimonials, clients, authors, team, faqs };
```
Rules
- [ ] `src/lib/content.ts` exports the only allowed getters: `publishedWork()`, `publishedInsights()`, `consentedTestimonials()`, `consentedLogos()`, `publishedTeam()`. Filters: `draft`, `status !== 'published'`, `consentToPublish/ShowLogo/ShowName === false`. Pages never call `getCollection` directly.
- [ ] Rushr stays `status: 'pending-metrics'` until D-07.
- [ ] Entry ids include locale (`en/rushr`); routes strip the prefix.
- [ ] `scripts/consent-gate.mjs` fails the build if any published page references an unconsented testimonial/client.

## 7. Config sketches

### 7.1 `astro.config.mjs`
```js
import { defineConfig, fontProviders, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const NOT_IN_SITEMAP = /\/(404|book\/confirmed)$|\/og\//;

export default defineConfig({
  site: 'https://discoverdev.ai',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Add 'ar' to locales only when the first Arabic page ships (Q1 2027).
  i18n: { locales: ['en'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !NOT_IN_SITEMAP.test(page),
      // Q1 2027: i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    }),
  ],
  fonts: [
    { provider: fontProviders.fontsource(), name: 'Manrope', cssVariable: '--font-heading',
      weights: ['600 800'], styles: ['normal'], subsets: ['latin'], fallbacks: ['system-ui', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'Rubik', cssVariable: '--font-body',
      weights: ['400 600'], styles: ['normal'], subsets: ['latin'], fallbacks: ['system-ui', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'IBM Plex Sans Arabic', cssVariable: '--font-arabic',
      weights: [400, 600, 700], styles: ['normal'], subsets: ['arabic'], fallbacks: ['sans-serif'] }, // used only by AR layout (D-12)
  ],
  env: {
    schema: {
      PUBLIC_POSTHOG_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_POSTHOG_HOST: envField.string({ context: 'client', access: 'public', default: 'https://eu.i.posthog.com' }),
      PUBLIC_CF_BEACON_TOKEN: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_CAL_USERNAME: envField.string({ context: 'client', access: 'public', optional: true }), // set before M4 (D-23); CalEmbed shows fallback links if missing
      PUBLIC_WHATSAPP_E164: envField.string({ context: 'client', access: 'public', optional: true }),
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
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },   // Shiki + Cal-injected styles; scripts stay strict
    },
  },
});
```
- Remove `https://api.web3forms.com` if D-11 ships without Web3Forms. Confirm Cal origins in the Embed Snippet Generator before launch.
- `sitemap` `lastmod`: optional phase 2 (prebuild script writes `src/data/lastmod.json` from frontmatter; `serialize()` reads it).

### 7.2 `wrangler.jsonc`
```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "discoverdev-site",
  "compatibility_date": "2026-10-15",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page",          // serves dist/404.html with HTTP 404
    "html_handling": "auto-trailing-slash"     // /about → about.html; /about/ → redirect to /about
  },
  "workers_dev": true,                         // preview hostname; noindexed via _headers
  "preview_urls": true                         // per-version preview URLs for branch builds
  // T-0 (or via dashboard → Settings → Domains): attach the apex as a Custom Domain
  // ,"routes": [{ "pattern": "discoverdev.ai", "custom_domain": true }]
}
```

### 7.3 Tokens
- [ ] `src/styles/tokens.css` is defined in `06-design-system.md` §2 (source of truth for colors, type scale, spacing, surfaces, motion). Do not redefine tokens here.
- Non-negotiables (also in 06): brand primary `#1240BE`, navy `#032993`, white `#FEFEFE`, black `#0F0F0F`; `#858585` only ≥ 24 px (≥ 18.66 px bold) or decorative; small muted text `#6B6B6B`; font vars `--font-heading` / `--font-body` / `--font-arabic` come from Astro `<Font>`; `@view-transition` only inside `prefers-reduced-motion: no-preference`.

## 8. i18n / RTL implementation
- [ ] `src/i18n/locales.ts` is the single registry. Config, sitemap, switcher, hreflang, layouts and the gate import it.
```ts
export const LOCALES = {
  en: { code: 'en', endonym: 'English', dir: 'ltr', status: 'live',   ogLocale: 'en_US', fontVar: '--font-body' },
  ar: { code: 'ar', endonym: 'العربية', dir: 'rtl', status: 'hidden', ogLocale: 'ar_AR', fontVar: '--font-arabic',
        review: null /* { reviewer, date } required before status: 'live' */ },
} as const;
export type Locale = keyof typeof LOCALES;
```
- [ ] `BaseLayout` sets `<html lang={code} dir={dir}>` from the registry using `Astro.currentLocale`. Never set direction in CSS.
- [ ] UI strings: `src/i18n/ui/{en,ar}.json`, looked up via `t(key, locale, args?)`. Whole-sentence keys with named args; no concatenation. Missing key: throw in dev, fall back to `en` + `console.error` in prod build log.
- [ ] Content translations: separate MDX files sharing `translationKey`. `seo.ts#hreflang(entry)` emits `en`, `ar`, `x-default` (→ EN) only when both exist.
- [ ] `LangSwitcher` renders only when `LOCALES.ar.status === 'live'` and the current page has a pair; links to the pair, not home.
- [ ] `scripts/css-logical-lint.mjs` fails on `margin-(left|right)`, `padding-(left|right)`, `border-(left|right)`, `\bleft:`, `\bright:`, `text-align:\s*(left|right)`, `float:\s*(left|right)` in `src/**/*.{css,astro}`.
- [ ] Directional icons: `Icon directional` → class `icon--dir`; CSS `:dir(rtl) .icon--dir { scale: -1 1; }`.
- [ ] Wrap Latin brand names, code, URLs, phone numbers in `<bdi>` or `dir="ltr"` inside Arabic text. Inputs: `dir="auto"`.
- [ ] Formatting via `Intl.*` with explicit locale; AR default `ar-u-nu-latn` (D-35).
- [ ] `scripts/i18n-gate.mjs` (CI): key parity; no empty values; placeholder parity; no value identical to EN except do-not-translate list (DiscoverDev, Launch-Ready Review, Lovable, Bolt, v0, Cursor, Supabase, Stripe, Clutch); Arabic-script ratio ≥ 50%; every `live` locale has `review`. Prove it fails once (delete a key → red).
- [ ] Q1 2027 additions: add `'ar'` to `i18n.locales` and sitemap `i18n`; `tests/e2e/rtl.spec.ts` sweeps every `/ar` route (no horizontal overflow, mirrored chevrons, focus order); pseudo-locale sweep before AR launch.

## 9. Analytics event spec

### 9.1 Setup
- CF Web Analytics: manual beacon in `BaseLayout` (turn off automatic injection in the dashboard so CSP stays deterministic):
  `<script is:inline defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={JSON.stringify({ token: PUBLIC_CF_BEACON_TOKEN })}></script>`
- PostHog (EU), loaded by `lib/analytics.ts` via dynamic `import('posthog-js')` after `load` + `requestIdleCallback`:
```ts
posthog.init(PUBLIC_POSTHOG_KEY, {
  api_host: 'https://eu.i.posthog.com',
  cookieless_mode: 'always',
  person_profiles: 'never',
  autocapture: false,
  capture_pageview: true,
  capture_pageleave: false,
  disable_session_recording: true,
});
```
- [ ] Enable "Cookieless server hash mode" in PostHog project settings.
- [ ] Init only when `location.hostname === 'discoverdev.ai'` (no preview/dev pollution). Dev: `track()` logs to console.
- [ ] `track()` queues calls until PostHog loads; drops silently if blocked. No errors when blocked.
- [ ] No PII in any property: no names, emails, booking uid, free text, full URLs with queries.
- [ ] GSC + Bing WMT: verified via DNS TXT on the Cloudflare zone.
- [ ] North Star source of truth: Cal.com bookings list. PostHog = attribution. Phase 2 (optional): Cal webhook → Worker → PostHog capture API (server-side, ad-blocker-proof).

### 9.2 Naming + common properties
- snake_case, `object_action` past tense. Names and properties below are final and canonical; 03, 04 and 06 defer to this section.
- Common properties (added by `track()` to every custom event):

| Property | Type | Values |
|---|---|---|
| `locale` | string | `en` \| `ar` |
| `page_path` | string | path only, no query |
| `page_type` | string | `home` \| `offer` \| `service` \| `partners` \| `work_index` \| `case_study` \| `insights_hub` \| `article` \| `about` \| `book` \| `book_confirmed` \| `quiz` \| `legal` \| `404` |
| `channel` | string | `ai_assistant` \| `search` \| `social` \| `email` \| `referral` \| `direct` (rules: `05-seo-aeo.md` §8) |
| `entry_referrer_host` | string | first-touch referrer host or `none` |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` | string | first-touch, lowercase; omitted if absent |

`page_type` comes from `<body data-page-type>` set by each layout.

### 9.3 Events
| Event | Trigger | Properties (besides common) | Implementation |
|---|---|---|---|
| `cta_clicked` | Click on any element with `data-cta-id` | `cta_id` (per `04-ux-ia.md` §6.3), `cta_tier` (`primary\|secondary\|partner\|low_commitment\|utility`), `cta_position` (`hero\|mid\|band\|card\|inline\|end\|faq\|result\|nav\|sticky\|footer`), `cta_target` (`review\|clarity\|partner\|launch_check\|validate\|build\|scale\|partners\|case\|article`), `destination` (path) | Delegated click listener in `analytics.ts`; also writes `entry_cta` to sessionStorage |
| `booking_started` | Cal booker visible with slots loaded, first time per page view | `event_type` (`review_intro\|clarity_call\|partner_call`), `entry_cta` (sessionStorage or `none`), `embed_page` (`book\|launch_ready`) | `Cal.ns[ns]("on",{action:"bookerViewed"})`, require `slotsLoaded === true` in payload |
| `booking_completed` | Booking succeeded (not dry run) | `event_type`, `entry_cta`, `embed_page`, `quiz_segment` (if any) | `Cal.ns[ns]("on",{action:"bookingSuccessfulV2"})`; ignore `dryRun*`; send with `{ transport: 'sendBeacon' }`; set `dd_booking.tracked = true` |
| `booking_completed` (backup) | `/book/confirmed` load with `dd_booking` present and `tracked !== true` | same, from sessionStorage + `backup: true` | Prevents double count |
| `article_read` | `/insights/*`: end-of-article sentinel at 60% depth intersected **and** ≥ 30 s visible time; once per page view | `article_slug`, `pillar`, `role` (`pillar\|cluster`), `read_seconds` | IntersectionObserver + `visibilitychange`-aware timer |
| `case_study_viewed` | `/work/[slug]` load (not index), once | `case_study_slug`, `industry`, `region` | On load |
| `outbound_clicked` | Click on `<a>` whose host ≠ `discoverdev.ai` (incl. `wa.me`, `mailto:`) | `link_host` (`mailto` for email), `link_url` (no query string; omit for mailto), `link_context` (`proof\|footer\|article\|contact\|other` from nearest `data-link-context`) | Delegated listener |
| `quiz_started` | Click "Start" on `/launch-check` (or resume) | `resumed` (bool) | Quiz script |
| `quiz_question_answered` | "Next" on each question | `question_id`, `question_index` (1–10) | Quiz script. Answer values not sent |
| `quiz_completed` | Result rendered | `segment` (`ready_polish\|fix_first\|high_risk\|rebuild_candidate`), `points_total` (0–19), `flags_crit`, `flags_rebuild`, `built_with` (option value), `urgent` (bool, per `03-copy.md` §4.3 modifier) | Quiz script. Option values only, never text |
| `quiz_lead_submitted` | Email step success (only if D-11 ships) | `segment`, `newsletter_opt_in` (bool) | Quiz script, after 2xx |

Rules for `article_read`: research offered 75%/60 s (CRO) and 60%/30 s (tech). Spec uses 60% **and** 30 s.

### 9.4 Funnels + dashboards (PostHog)
- Booking funnel (1-day window, cookieless daily hash): `$pageview(page_type in offer,service,partners)` → `cta_clicked(cta_target in review,clarity,partner)` → `booking_started` → `booking_completed`.
- Content funnel: `$pageview(article)` → `article_read` → `cta_clicked` → `booking_completed`.
- Quiz funnel: `quiz_started` → `quiz_question_answered(question_index=10)` → `quiz_completed` → `booking_completed`; breakdown by `segment`; drop-off by `question_index`.
- Insights: bookings by `channel`; `cta_clicked` by `cta_id`; `booking_completed` by `event_type`.
- Monthly review: reconcile `booking_completed` count with Cal bookings list (gap = blocked analytics).

### 9.5 UTMs
- [ ] `lib/utm.ts` reads `utm_*` on first page view of the session, lowercases, stores in sessionStorage (`dd_utm`), with `entry_referrer_host` + `channel`.
- [ ] On click of any `/book` link: append stored UTMs + `entry_cta` to the href (not in static HTML).
- [ ] `/book` passes them to Cal as `metadata[...]` (§10.2). Verify on a `qa-test` booking that metadata shows in the Cal booking.

### 9.6 Consent posture (not legal advice; D-24)
| Regime | Minimum with this setup |
|---|---|
| EU/UK GDPR + ePrivacy (inbound only) | No device storage by analytics (CF WA no cookies; PostHog cookieless). Legitimate interest; privacy notice; no banner. Residual risk: EDPB Guidelines 2/2023 read Art. 5(3) broadly. Fallback: `cookieless_mode: 'on_reject'` + two-button banner |
| KSA PDPL | Privacy notice (EN now, AR with `/ar`): purposes, processors (Cloudflare, PostHog EU, Cal.com, Web3Forms if used), cross-border transfer. Cal booking form: consent line + privacy link |
| UAE PDPL | Same as KSA (exec regs status unverified) |
| Cal.com iframe | Sets its own cookies inside the iframe on `/book` after user intent. Disclose in privacy notice |
- `sessionStorage` keys (`dd_utm`, `dd_booking`, `dd_quiz_v1`, `entry_cta`) are first-party, session-only, functional. List them in the privacy notice.

## 10. Cal.com integration

### 10.1 Account setup (owner, by Oct 25 per `00-master-plan.md` P2 / D-23; verified at T-14)
- [ ] Event types (slugs exact): `review-intro`, `clarity-call`, `partner-call` (30 min, free per D-04), `qa-test` (15 min, hidden).
- [ ] Booking questions per `04-ux-ia.md` §7.3. "How did you hear about us?" required on all three.
- [ ] Confirmation email + reminders 24 h and 1 h (email). Booking answers in invite description.
- [ ] Availability windows overlapping US mornings + Gulf afternoons (D-42). Minimum notice and buffers set.
- [ ] Brand color `#1240BE`. Event descriptions include consent line + privacy link.
- [ ] "Redirect on booking": decide in dry run (§10.4 step 6).

### 10.2 `CalEmbed.astro` + `lib/cal.ts`
- Props: `type: 'review'|'clarity'|'partner'`, `embedPage: 'book'|'launch_ready'`, `eager: boolean`. Container visuals: `06-design-system.md` §9.17. Copy (loading, failure, cookie line): `03-copy.md` §1.3–1.4.
- Markup: `<section id="book" aria-labelledby>` → `<div class="cal-inline">` with `min-block-size` from `06-design-system.md` §9.17 (measured values; set via scoped CSS, not inline style) + skeleton text + `<ul class="cal-fallback">` with direct links `https://cal.com/${PUBLIC_CAL_USERNAME}/${slug}` (visible until `linkReady`).
- Loader: copy the official loader from Cal's Embed Snippet Generator into `lib/cal.ts` (bundled module → `'self'`; no inline snippet). It loads `https://app.cal.com/embed/embed.js`.
- Load timing: `/book` → after first paint (`requestAnimationFrame` ×2). `/launch-ready` → IntersectionObserver when container ≤ 600 px from viewport, after `load`.
- Render (namespace per type, e.g. `review`):
```ts
Cal('init', ns, { origin: 'https://app.cal.com' });
Cal.ns[ns]('inline', {
  elementOrSelector: '#cal-inline',
  calLink: `${CAL_USERNAME}/${SLUG[type]}`,
  config: {
    layout: matchMedia('(min-width: 768px)').matches ? 'month_view' : 'column_view',
    theme: 'light',
    ...(prefill.name && { name: prefill.name }),
    ...(prefill.email && { email: prefill.email }),
    'metadata[utm_source]': utm.utm_source ?? '',
    'metadata[utm_medium]': utm.utm_medium ?? '',
    'metadata[utm_campaign]': utm.utm_campaign ?? '',
    'metadata[entry_cta]': entryCta ?? '',
    'metadata[quiz_segment]': quizSegment ?? '',
    'metadata[target_launch]': targetLaunch ?? '',          // quiz Q3 option value
    'metadata[page]': embedPage,
  },
});
Cal.ns[ns]('ui', { theme: 'light', cssVarsPerTheme: { light: { 'cal-brand': '#1240BE' } }, layout: '...' });
Cal.ns[ns]('on', { action: 'linkReady', callback: hideFallbackSkeleton });
Cal.ns[ns]('on', { action: 'linkFailed', callback: showFallback });
Cal.ns[ns]('on', { action: 'bookerViewed', callback: (e) => e.detail.data?.slotsLoaded && trackOnce('booking_started', …) });
Cal.ns[ns]('on', { action: 'bookingSuccessfulV2', callback: onBooked });
```
- Prefill/metadata keys: verify against https://cal.com/help/embedding/prefill-booking-form-embed.md before launch; adjust syntax if the docs differ.
- `onBooked(e)`: read `startTime` (verify key name by logging `e.detail` on a `qa-test` booking) → `sessionStorage.dd_booking = {event_type, start_time, quiz_segment, tracked:true}` → `track('booking_completed', …, {transport:'sendBeacon'})` → `setTimeout(() => location.assign('/book/confirmed?type=' + type), 300)`.
- Tab switch (`BookOptions`): destroy/replace the inline container, re-run render for the new namespace, `history.replaceState` `?type=`.
- 10 s without `linkReady` → `showFallback()`. Fallback also covers JS disabled (`<noscript>` shows links).
- Accessibility: Cal iframe must have a `title` (set via `iframe.title = 'Booking calendar'` on `linkReady` if missing). Keyboard pass required (`10-launch-checklist.md` §4.4).

### 10.3 Cal on `/launch-ready#book` (budget-gated)
- [ ] Build behind `const CAL_ON_OFFER = true` in `src/config.ts`.
- [ ] Ship ON only if Lighthouse mobile on `/launch-ready` meets §13 budgets (Perf ≥ 95, TBT ≤ 150 ms, CLS ≤ 0.05) with the lazy embed. Else set `false` → section shows CTA to `/book?type=review`.

### 10.4 Dry-run verification (T-7)
1. Book `qa-test` from `/book?type=review&utm_source=test&utm_medium=qa` (temporarily map `review` → `qa-test` via `?cal_test=1`, dev-only flag stripped in prod builds or guarded by hostname).
2. Check PostHog live feed: `booking_started`, `booking_completed` with correct props, no PII.
3. Check Cal booking shows metadata (utm, entry_cta, page).
4. Check `/book/confirmed` shows the time in local time zone and does not double-fire.
5. Check zero CSP violations in console.
6. Toggle Cal "Redirect on booking" → `https://discoverdev.ai/book/confirmed`: keep ON only if the embed still fires `bookingSuccessfulV2` before navigation and the direct-link fallback lands on `/book/confirmed`; otherwise OFF.
7. Cancel the test booking.

## 11. Forms
- [ ] No contact form at launch. All intake through Cal.com.
- [ ] Quiz email step (only if D-11 = Web3Forms):
  - `fetch('https://api.web3forms.com/submit', { method: 'POST', headers: {'Content-Type':'application/json', Accept:'application/json'}, body: JSON.stringify({ access_key: PUBLIC_WEB3FORMS_KEY, subject: 'Launch check result', email, segment, points_total, consent: true, botcheck: '' }) })`.
  - Honeypot `botcheck` hidden field (visually hidden + `tabindex="-1"` + `autocomplete="off"`). No hCaptcha at launch (WCAG 3.3.8); add only if spam appears.
  - Visible label, consent checkbox (required) linking `/privacy`, inline validation on blur, specific errors with `aria-describedby`, success `role="status"`.
  - Store email in `sessionStorage.dd_prefill` for Cal prefill (WCAG 3.3.7). Clear on tab close (session).
- [ ] Phase 2 alternative: Worker endpoint + Turnstile (siteverify server-side) + ESP for the 4-email sequence.

## 12. Fonts
- [ ] `BaseLayout`: `<Font cssVariable="--font-heading" preload />` and `<Font cssVariable="--font-body" />` (no preload). AR layout (Q1): `<Font cssVariable="--font-arabic" preload />` only on `/ar/*`.
- [ ] Preload max 1 file (heading). First view ≤ 3 font files, ≤ 120 KB total.
- [ ] Rely on Astro's metric-matched fallbacks + `font-size-adjust: from-font` to keep CLS ≤ 0.05.
- [ ] OG images (satori): add `Manrope` `.ttf`/`.woff` to `src/assets/og/` (satori rejects woff2).
- [ ] Arabic: IBM Plex Sans Arabic (static weights 400/600/700), line-height ≥ 1.7, no letter-spacing. Rubik `arabic` subset is the alternative to test for body (D-12).

## 13. Performance budget
Enforced by Lighthouse CI on `/`, `/launch-ready`, `/work/edulens`, `/insights/ai-app-to-production`, `/book`, `/launch-check`. Where research differed, the stricter value is used.

| Metric | Lab budget (LH mobile, simulated 4G) | Field target (p75, CF RUM / CrUX) |
|---|---|---|
| LCP | ≤ 2.0 s | ≤ 2.5 s |
| TBT / INP | TBT ≤ 150 ms | INP ≤ 200 ms |
| CLS | ≤ 0.05 | ≤ 0.1 |
| Lighthouse | Perf ≥ 95 · A11y 100 · Best Practices 100 · SEO 100 (`/book`: Perf ≥ 90, BP ≥ 90 due to Cal iframe) | — |
| First-party JS / page (gz) | ≤ 25 KB (excl. PostHog, loaded post-`load`) | — |
| Third-party JS before `load` | 0 KB | — |
| CSS (gz) | ≤ 30 KB | — |
| Fonts on first view | ≤ 3 files, ≤ 120 KB, preload 1 | — |
| LCP image | ≤ 120 KB AVIF, `fetchpriority="high"`, width/height set | — |
| HTML (gz) | ≤ 40 KB | — |
| Page weight | ≤ 500 KB home, ≤ 350 KB article (excl. Cal) | — |
| Requests on first view | ≤ 20 | — |
- [ ] No framework islands. Below-fold images `loading="lazy"`. `/_astro/*` cached immutable 1 year.

## 14. Security headers

### 14.1 `public/_headers`
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()
  Cross-Origin-Opener-Policy: same-origin-allow-popups
  X-Frame-Options: DENY
  Content-Security-Policy: frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'; upgrade-insecure-requests

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/book/confirmed
  X-Robots-Tag: noindex

https://:subdomain.workers.dev/*
  X-Robots-Tag: noindex
https://:version.:subdomain.workers.dev/*
  X-Robots-Tag: noindex
```
- Header CSP carries only what a meta CSP cannot (`frame-ancestors`) plus base/object/form hardening. It has no `script-src`/`default-src`, so it does not block Astro's hashed scripts. Browser enforces both policies.
- If D-04 makes the Review booking paid inside Cal: re-check whether the Cal iframe needs `payment` in Permissions-Policy.
- HSTS `preload`: only after 3+ months stable HTTPS on all subdomains.
- Verify the `workers.dev` host patterns on the first preview URL (`curl -I`); adjust syntax per https://developers.cloudflare.com/workers/static-assets/headers/ if not applied.

### 14.2 Meta CSP
- Defined in `astro.config.mjs` §7.1. Astro hashes its own scripts/styles.
- [ ] Verify with `npm run preview`: zero CSP console errors on `/`, `/book` (complete a `qa-test` booking), `/launch-check`, an article with code.
- [ ] Then MDN HTTP Observatory + securityheaders.com on the preview URL: grade A or better.

### 14.3 Ops security
- [ ] 2FA on registrar, Cloudflare, GitHub, Cal.com, PostHog, Web3Forms.
- [ ] `public/.well-known/security.txt`:
```
Contact: mailto:{{SECURITY_EMAIL}}
Expires: 2027-11-24T00:00:00.000Z
Preferred-Languages: en, ar
Canonical: https://discoverdev.ai/.well-known/security.txt
```
- [ ] Dependabot for npm (weekly).

## 15. CI / QA automation
GitHub Actions on every PR (Workers Builds preview runs alongside):
- [ ] `npm ci` → `astro check` → `astro build` (Rust compiler fails on invalid HTML).
- [ ] `css-logical-lint.mjs`, `i18n-gate.mjs`, `prettier --check`.
- [ ] `consent-gate.mjs`: no unconsented testimonial/client/logo/team member in `dist/`.
- [ ] `cta-ids.mjs`: every `[data-cta-id]` unique per page and matches `^[a-z0-9]+(_[a-z0-9]+){2,}$`.
- [ ] `inbound-links.mjs`: every sitemap URL has ≥ 3 inbound links from `<main>` of distinct pages (exempt `/privacy`, `/terms`); no internal link to a 404 or redirect.
- [ ] `jsonld-check.mjs`: every JSON-LD block parses; no `AggregateRating`/`Review`; required props present per type (`05-seo-aeo.md` §4).
- [ ] `node --test tests/unit/` (quiz scoring, channel derivation).
- [ ] Playwright smoke on all routes: one `h1`; title 30–60 chars (`/privacy`, `/terms`, `/404`, `/book/confirmed` exempt from min); canonical = `https://discoverdev.ai{path}`; meta description present; no `img` without `alt`; `lang` + `dir` set; `noindex` on `/book/confirmed`, `/404`.
- [ ] `@axe-core/playwright`: 0 serious/critical on all templates.
- [ ] Lighthouse CI against §13.
- [ ] `linkinator` internal links.
- [ ] `redirects-test.mjs` against `wrangler dev` (each old URL → one 301 → 200).

## 16. Component inventory
Visual specs and final component names: `06-design-system.md` §9 (e.g. `ReviewSnapshot`, `ProofBar`). Where names differ, 06 wins; behavior below still applies.

| Group | Component | Key props / behavior |
|---|---|---|
| Shell | `BaseLayout` | `title`, `description`, `pageType`, `jsonLd`, `noindex?`, `ogImage?`; sets `lang`/`dir`, fonts, SEO, analytics, skip link |
| | `PageLayout`, `ArticleLayout`, `CaseStudyLayout`, `MinimalLayout` (book, confirmed) | Section slots |
| | `SkipLink`, `Header`, `NavDesktop` (Services disclosure), `NavMobile` (`<dialog>`), `StickyBookBar`, `Footer`, `ContactBlock` (fixed order), `LangSwitcher` (hidden until AR live), `Logo` | |
| SEO | `Seo`, `JsonLd`, `Breadcrumbs` | `items[]`; renders visible nav + BreadcrumbList |
| Primitives | `Container`, `Section` (`tone: light\|navy`), `CtaLink` (required `ctaId`, `tier`, `target`; emits `data-cta-*`), `Button`, `Icon` (`directional?`), `Badge`, `Eyebrow` (`// .config` motif), `CommandLine` (`$` motif, `<bdi dir="ltr">`) | |
| Marketing | `Hero`, `ProofChip` (rating text + Clutch link), `ProofStrip`, `ClientLogos` (consent-filtered), `ProblemCards`, `OfferCard`, `OfferGrid`, `ProcessSteps` (`steps[]`, `orientation`), `PillarTrio`, `GuaranteeCallout`, `SymptomChecklist`, `CheckAreas`, `SampleReport` (figure + text summary), `PriceTerms`, `NotForList`, `TeamGrid`, `TimeOverlap` (graphic + text equivalent), `Testimonial`, `TestimonialRow` (max 3, static), `ComparisonTable`, `FAQ` (`<details>`), `CtaBand` | |
| Work | `CaseStudyCard`, `CaseStudyMeta` (snapshot), `MetricGrid` (verified only), `StackList` | |
| Insights | `ArticleCard`, `ArticleMeta` (author, dates), `KeyTakeaways`, `Toc` (> 1,200 words), `Prose`, MDX: `Callout`, `Figure`, `CodeBlock`, `Table`; `PillarNav`, `QuizBanner`, `EndCta` (by `relatedService`), `RelatedArticles` | |
| Booking | `BookOptions` (tabs, `?type=`), `CalEmbed` (§10.2), `CallExpectations`, `ConfirmedSummary` (reads sessionStorage), `PrepChecklist` | |
| Quiz | `QuizApp` (state machine, sessionStorage), `QuizQuestion` (fieldset/radios), `QuizProgress`, `QuizResult` (segment, `ScoreBar` ×4 with text labels, top risks, CTA), `QuizEmail` (D-11) | |
| Ops | `Analytics` (CF beacon + PostHog loader), OG endpoint, `404` | |

## 17. `public/_redirects` + hash-route map
```
# Old SPA → new site. Always write the status code (default is 302).
# Verify each row against the real old route list (05-seo-aeo.md §7, D-15).
/home             /            301
/staff            /scale       301
/staff/*          /scale       301
/services         /build       301
/services/*       /build       301
/launch           /build       301
/contact          /book        301
/consultation     /book        301
/about-us         /about       301
/team             /about       301
/portfolio        /work        301
/portfolio/*      /work        301
/case-studies     /work        301
/case-studies/*   /work        301
/blog             /insights    301
/blog/*           /insights    301
```
Hash routes (only if the old SPA used `/#/…`; D-15): bundled script on `/` only:
```ts
const MAP: Record<string, string> = { '#/staff': '/scale', '#/services': '/build', '#/contact': '/book', '#/about': '/about', '#/build': '/build' };
const target = MAP[location.hash.split('?')[0]];
if (target) location.replace(target);
```

## 18. Deploy, DNS cutover, rollback
Owner: Mohamed (launch lead + operator). Claude Code: prep + QA. Dates: T-0 = Tue 2026-11-24.

### 18.1 Pipeline
- [ ] Workers Builds connected to the GitHub repo. Production branch `main`. Build command `npm run build`. Deploy command `npx wrangler deploy`. Non-production branches: `npx wrangler versions upload` (preview URL per version). Root `/`. Node from `.nvmrc` (24).
- [ ] Build variables (dashboard → Settings → Build → Variables): all `PUBLIC_*` from §19.
- [ ] Branch protection on `main`: PR + green CI required.

### 18.2 T-21 (by Tue Nov 3): DNS to Cloudflare, no visible change
1. Export the full zone at the current DNS host (A/AAAA/CNAME/MX/TXT incl. SPF, DKIM, DMARC, verifications; CAA; subdomains). Save as `docs/dns-export-2026-11.txt` + screenshot (rollback reference).
2. Add `discoverdev.ai` to Cloudflare (Free). Compare imported records line by line with the export. Keep GitHub Pages A/AAAA and `www` CNAME **DNS-only (grey cloud)**.
3. If DNSSEC is on at the registrar: turn it off. Change nameservers to Cloudflare's pair. Wait for zone "Active".
4. Verify: old site loads; email sends + receives (both directions); MX/SPF/DKIM/DMARC resolve (`dig`). Re-enable DNSSEC with Cloudflare's DS record.
5. Verify the domain in GitHub org Pages settings (takeover guard).
6. Add GSC Domain property + Bing WMT via DNS TXT.
7. Cloudflare AI-bot settings per `05-seo-aeo.md` §5.3.

### 18.3 T-14 (Tue Nov 10): build on Workers
8. Worker live on `*.workers.dev` with noindex; every PR gets a preview URL.
9. Redirect map final; `redirects-test.mjs` green on preview.
10. Confirm (accounts created in P2): CF Web Analytics site (manual snippet, auto-injection off), PostHog EU project (cookieless server hash mode on), Cal event types (§10.1).

### 18.4 T-7 (Tue Nov 17): freeze + QA
11. Content freeze. Full QA (`10-launch-checklist.md` §4) on preview. Fix all criticals.
12. Rehearse rollback on preview: `npx wrangler deployments list` → `npx wrangler rollback <version-id>` → confirm previous version serves.
13. T-3 (Sat Nov 21): lower TTL of remaining DNS-only records to 300 s.

### 18.5 T-0 cutover (Tue Nov 24, 09:00 GMT+2 = 02:00 US Eastern)
| # | Step | Verify | Time |
|---|---|---|---|
| 1 | Merge release PR → prod deploy from `main` | Build green; note version id | 10 min |
| 2 | Cloudflare DNS: delete apex A/AAAA (GitHub Pages) → Worker → Settings → Domains → add `discoverdev.ai` | Record + cert created; `https://discoverdev.ai` serves new site | 10 min |
| 3 | `www`: delete GH CNAME → proxied `AAAA 100::` → Redirect Rule `www.discoverdev.ai/*` → `https://discoverdev.ai/${1}` 301 | `curl -I https://www.discoverdev.ai/x` → 301 to apex | 10 min |
| 4 | Smoke: every nav page 200; `/sitemap-index.xml`, `/robots.txt`, `/llms.txt` 200; random path 404; `npm run test:redirects -- --base https://discoverdev.ai` | All green | 15 min |
| 5 | Analytics: CF beacon visit visible; PostHog live `$pageview` + test `cta_clicked`; `qa-test` booking fires `booking_*` | Seen in both tools | 15 min |
| 6 | GSC: submit sitemap; request indexing (list in `05-seo-aeo.md` §8). Bing: submit sitemap | Submitted | 10 min |
| 7 | GitHub Pages: keep old repo deployed but unlinked. Remove its custom domain at T+7. Keep domain verified | — | — |

### 18.6 Rollback
| Trigger | Action |
|---|---|
| Bad deploy (broken page, CSP blocks Cal, wrong content) | `npx wrangler rollback <previous-version-id>` (seconds) or revert commit + push |
| Platform failure (custom domain/cert won't issue, widespread 5xx) | Remove Worker custom domain → re-add apex A `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; AAAA `2606:50c0:8000::153` … `2606:50c0:8003::153`; `www` CNAME `<user>.github.io` — all DNS-only → GitHub Pages serves again |
| Email breaks | Restore MX/TXT from the T-21 export. Do not roll back nameservers casually |
- Automatic triggers: any primary-nav page non-200; `/book` cannot book; site unreachable from 2 regions.
- Discretionary: field LCP > 4 s; CSP errors on key flows.

## 19. Environment + secrets
| Name | Used by | Where set | Secret? |
|---|---|---|---|
| `PUBLIC_POSTHOG_KEY` | `lib/analytics.ts` | `.env` (local), Workers Builds variable | No (public project key) |
| `PUBLIC_POSTHOG_HOST` | analytics | same | No (`https://eu.i.posthog.com`) |
| `PUBLIC_CF_BEACON_TOKEN` | CF Web Analytics | same | No |
| `PUBLIC_CAL_USERNAME` | `lib/cal.ts` | same | No |
| `PUBLIC_WHATSAPP_E164` | `ContactBlock` (D-09) | same | No (digits only, no `+`) |
| `PUBLIC_WEB3FORMS_KEY` | `QuizEmail` (D-11) | same | No (public by design) |
| `LHCI_GITHUB_APP_TOKEN` | Lighthouse CI status checks (optional) | GitHub Actions secret | Yes |
| `CLOUDFLARE_API_TOKEN` | only if deploying from Actions (not planned) | GitHub Actions secret | Yes |
- [ ] Commit `.env.example` with names only. Never commit `.env`.
- Accounts (owner holds; 2FA on all): registrar, Cloudflare, GitHub, Cal.com, PostHog, Web3Forms, Google Search Console, Bing Webmaster Tools, Clutch.
