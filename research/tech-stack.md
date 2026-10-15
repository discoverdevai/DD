# DiscoverDev website: tech stack spec

Checked 2026-10-15. Scope: static multi-page marketing site, built by Mohamed + Claude Code, $0 budget. Decided: Astro + Cloudflare, English first, Arabic-ready.

**Changes to the brief:**
1. **Cloudflare Workers (static assets), not Pages.** Cloudflare recommends Workers for new projects, and Workers static-asset requests are free and unlimited.
2. **DNS must move to Cloudflare nameservers.** A Workers custom domain only works when Cloudflare manages the nameservers.
3. **Plain CSS tokens, not Tailwind.** Rationale is in §2.
4. **Native CSS view transitions, not `<ClientRouter />`.** Astro's CSP does not support `<ClientRouter />`.
5. **Cloudflare Web Analytics cannot track custom events.** The 6 events go to PostHog in cookieless mode.

---

## 1. Verified versions

Source of all npm rows: `registry.npmjs.org/<pkg>`, checked 2026-10-15. Pin exact versions in `package.json`, and let Renovate or Dependabot propose updates.

| Item | Version / fact | Source | Checked |
|---|---|---|---|
| astro | **7.3.8** (2026-10-08). engines `node >=22.12.0` | npm; [Astro releases](https://github.com/withastro/astro/releases) | 2026-10-15 |
| Astro 7.0 | Released 2026-06-22. Vite 8 (Rolldown), Rust `.astro` compiler that is stricter on invalid HTML, Sätteri as the default MD/MDX processor, `compressHTML: 'jsx'` whitespace | [astro.build/blog/astro-7](https://astro.build/blog/astro-7/), [v7 upgrade](https://docs.astro.build/en/guides/upgrade-to/v7/) | 2026-10-15 |
| Node | Astro requires **≥22.12.0, even majors only**. Node LTS lines: v24.22.0 and v22.23.3 (v26 is Current). Workers Builds default image: **24.18.0**. **Pin `24` in `.nvmrc`** | [Astro install](https://docs.astro.build/en/install-and-setup/), [Node releases](https://nodejs.org/en/about/previous-releases), [Workers build image](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/) | 2026-10-15 |
| Content Layer | Legacy collections were removed in v6. Config lives in `src/content.config.ts`. `glob`/`file` come from `astro/loaders`, `z` from `astro/zod` (**Zod 4**) | [Collections](https://docs.astro.build/en/guides/content-collections/), [v6 upgrade](https://docs.astro.build/en/guides/upgrade-to/v6/) | 2026-10-15 |
| i18n routing | Built in: `locales`, `defaultLocale`, `prefixDefaultLocale` (default false), `fallback`, helpers in `astro:i18n`. `Astro.currentLocale` works on static pages. `domains` needs SSR, so it is not used here | [i18n guide](https://docs.astro.build/en/guides/internationalization/) | 2026-10-15 |
| Fonts API | **Stable since v6.** `fonts: [...]` with `fontProviders.fontsource()`, plus `<Font cssVariable preload />`. Files are downloaded at build time and served from `/_astro/fonts`. Optimized fallbacks are on by default | [Fonts guide](https://docs.astro.build/en/guides/fonts/), [v6 upgrade](https://docs.astro.build/en/guides/upgrade-to/v6/) | 2026-10-15 |
| CSP | **Stable since v6** (`security.csp`). Writes a `<meta>` CSP with hashes of the scripts and styles Astro emits. **Not compatible** with `<ClientRouter />` or Shiki inline styles, unless `style-src` includes `'unsafe-inline'`. Does not work in dev, so test with build + preview | [Config ref](https://docs.astro.build/en/reference/configuration-reference/) | 2026-10-15 |
| View transitions | `<ViewTransitions />` was removed in v6. Use **native CSS `@view-transition { navigation: auto }`**: Chrome/Edge 126+, Safari 18.2+; Firefox gets a normal page load | [Chrome docs](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document); modern-web-guidance `cross-document-transitions` | 2026-10-15 |
| @astrojs/mdx | **8.0.3** (node ≥22.12.0) | npm | 2026-10-15 |
| @astrojs/sitemap | **3.7.4**. Needs `site`. Has an `i18n` option. Outputs `sitemap-index.xml` | npm; [Sitemap docs](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | 2026-10-15 |
| @astrojs/rss | 4.0.19 | npm | 2026-10-15 |
| @astrojs/cloudflare | 14.3.4. **Not needed**: the adapter is only for on-demand rendering | npm; [Astro→Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/) | 2026-10-15 |
| @astrojs/check / typescript | 0.9.10 / 7.0.2 | npm | 2026-10-15 |
| wrangler | **4.151.0** (node ≥22) | npm | 2026-10-15 |
| sharp (astro:assets) | 0.35.5 | npm | 2026-10-15 |
| satori (OG images) | 0.57.2 | npm | 2026-10-15 |
| Fonts | `@fontsource-variable/manrope` 5.3.0: variable 200–800, **no Arabic subset**. `@fontsource-variable/rubik` 5.3.0: variable 300–900, **has an `arabic` subset**. `@fontsource/ibm-plex-sans-arabic` 5.3.0: **static** 100–700, subsets arabic/latin/latin-ext/cyrillic-ext. All OFL-1.1 | npm; api.fontsource.org/v1/fonts/{id} | 2026-10-15 |
| Cloudflare Workers free plan | 100k Worker requests/day. **Static asset requests are free and unlimited.** 20,000 files and 25 MiB per file per version. `_headers` (100 rules, 2,000 chars/line) and `_redirects` (2,000 static + 100 dynamic) | [Limits](https://developers.cloudflare.com/workers/platform/limits/), [Billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/), [Headers](https://developers.cloudflare.com/workers/static-assets/headers/), [Redirects](https://developers.cloudflare.com/workers/static-assets/redirects/) | 2026-10-15 |
| Workers Builds (free) | 3,000 build minutes/month, 1 concurrent build, 20-minute timeout. Git (GitHub) builds with preview builds for non-production branches. `WORKERS_CI_BRANCH` is available as an env var | [Limits](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/), [Config](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/) | 2026-10-15 |
| Workers vs Pages | Both support `_headers`, `_redirects`, preview URLs and custom domains. **Workers cannot use a domain whose nameservers are not on Cloudflare**; Pages can. Pages is not marked deprecated | [Pages→Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/), [Custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) | 2026-10-15 |
| CF Web Analytics | Free. "Does not collect personal data." **No custom events.** Raw data is kept 7 days, then sampled (~10%) for up to 6 months. Blocked by some ad blockers. CSP: `script-src https://static.cloudflareinsights.com`, `connect-src https://cloudflareinsights.com` (manual snippet) | [About](https://developers.cloudflare.com/web-analytics/about/), [FAQ](https://developers.cloudflare.com/web-analytics/faq/) | 2026-10-15 |
| PostHog Cloud free | 1M events/month, 5K replays. 1-year retention. EU (Frankfurt) region. `cookieless_mode: "always" \| "on_reject"`; requires project setting "Cookieless server hash mode". CSP: `https://*.posthog.com` | [Pricing](https://posthog.com/pricing), [Cookieless](https://posthog.com/tutorials/cookieless-tracking), [CSP](https://posthog.com/docs/advanced/content-security-policy) | 2026-10-15 |
| posthog-js | 1.438.10 | npm | 2026-10-15 |
| Plausible | **No free hosted plan** (30-day trial only) | [Plausible docs](https://plausible.io/docs/subscription-plans) | 2026-10-15 |
| Cal.com embed events | `bookingSuccessfulV2` (may not be confirmed yet), `bookerViewed`, `bookerReady`, `linkReady`, `linkFailed`, `dryRun*`. Listen with `Cal("on",{action,callback})`. `Cal("preload",{calLink})` opens the popup instantly | [Embed events](https://cal.com/help/embedding/embed-events), [Embed instructions](https://cal.com/help/embedding/embed-instructions) | 2026-10-15 |
| Turnstile free | 20 widgets, 10 hostnames per widget, unlimited challenges | [Turnstile plans](https://developers.cloudflare.com/turnstile/plans/) | 2026-10-15 |
| Web3Forms free | 250 submissions/month, unlimited forms, hCaptcha. Turnstile, webhooks and uploads are Pro | [web3forms.com/pricing](https://web3forms.com/pricing) | 2026-10-15 |
| Formspree free | 50 submissions/month, 30-day archive | [formspree.io/plans](https://formspree.io/plans) | 2026-10-15 |
| Core Web Vitals | LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1, measured at p75 for mobile and desktop. No 2026 threshold change found (page last updated 2024-10-31) | [web.dev/articles/vitals](https://web.dev/articles/vitals) | 2026-10-15 |
| GitHub Pages DNS | Apex `A` 185.199.108–111.153. `AAAA` 2606:50c0:8000–8003::153. `www` CNAME `<user>.github.io`. A disabled site that still has a custom domain set is a **domain-takeover risk** | [GH Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) | 2026-10-15 |
| QA tooling | @playwright/test 1.64.1, @axe-core/playwright 4.13.0, @lhci/cli 0.15.1, linkinator 8.1.0, prettier 3.9.10 + prettier-plugin-astro 1.1.1 | npm | 2026-10-15 |

**Not verified:**
- **Current DNS host and records for discoverdev.ai, and the old SPA's route list.** The sandbox blocked DNS and site requests. Needed before cutover (§13).
- **Cal.com embed script and iframe origins.** Expected: `app.cal.com`. Confirm in the Embed Snippet Generator.
- **Whether Cal.com stores UTM query params on the booking.** Test with a dry run.
- **UAE PDPL executive regulations.** Still "pending" in a December 2025 source; no 2026 status found.
- **Satori Arabic/RTL shaping quality.** Test before relying on it for Arabic OG images.

---

## 2. Stack decisions

| Area | Decision | Why | Rejected |
|---|---|---|---|
| Framework | Astro 7.3.x, `output: 'static'`, zero client framework (no React) | HTML-first, very little JS. Content collections fit services, work and insights | Next.js (heavier, SSR-oriented); keeping the SPA (SEO is broken) |
| Host | **Cloudflare Workers, static assets only** (`wrangler.jsonc` with `assets`, no `main`) | Cloudflare's recommendation for new projects. Free, unlimited asset requests. Version rollback via `wrangler rollback`. `_headers`/`_redirects` work natively | Pages (still works, but not the recommended path); GitHub Pages (no headers or redirects, SPA 404s) |
| Adapter | None | The adapter is only needed for on-demand rendering | `@astrojs/cloudflare` |
| CI/CD | Workers Builds (Git push to `main` deploys to prod; other branches get preview builds) + GitHub Actions for QA gates | $0. 3,000 minutes/month is plenty | Manual `wrangler deploy` from a laptop |
| URL format | `build.format: 'file'`, `trailingSlash: 'never'`, Workers `html_handling: 'auto-trailing-slash'` (default) | Clean `/launch-ready` URLs as in the brief. One canonical form per page | Trailing-slash URLs (no clear benefit, and the old links probably have no slash) |
| Styling | **Plain CSS:** `tokens.css` (custom properties) + Astro scoped `<style>` + logical properties only | No dependency or major-version churn. Tokens are native. RTL works through logical properties. Diffs are readable for a non-engineer reviewer | **Tailwind 4.3.3**: viable (CSS-first `@theme`, logical utilities), but adds a toolchain, puts the design system in class strings, and needs RTL discipline anyway. Reconsider if component count passes ~40 |
| Fonts | Astro Fonts API + Fontsource provider, self-hosted, subset, preload only the heading font | Built in and stable. No third-party font requests. Automatic metric-matched fallbacks reduce CLS | Google Fonts CDN (extra origin, privacy); hand-written `@font-face` |
| Images | `astro:assets` `<Image>`/`<Picture>` (sharp, AVIF+WebP). LCP image gets `fetchpriority="high"`; never lazy-load it | Build-time optimization at $0 | Cloudflare Images (paid) |
| Content | MDX for insights and case studies; JSON/YAML (`file()` loader) for testimonials and clients | Typed and validated at build | Headless CMS (cost, overhead for 1 author) |
| Markdown plugins | None at launch. Sätteri is the default; remark/rehype plugins would force `unified()` | Fewer moving parts | — |
| Code blocks | Shiki (default), with `style-src 'unsafe-inline'` | Insights need code (Supabase RLS). Styles-only inline is a low risk | Prism swap (more config) |
| Transitions | CSS `@view-transition` inside `prefers-reduced-motion: no-preference` | Zero JS, CSP-safe, progressive enhancement | `<ClientRouter />` (incompatible with Astro CSP) |
| Analytics | **CF Web Analytics** (traffic + RUM Web Vitals) **+ PostHog Cloud EU, cookieless "always"** (6 events, funnels, UTMs) + Google Search Console + Bing Webmaster Tools | $0. No cookies, so no banner. Custom events and funnels. 1M events/month free | GA4 (cookies → consent banner + Consent Mode v2 for EEA, and GCC consent-default laws; heavier); Plausible (paid); CF Web Analytics alone (no custom events) |
| Booking | Cal.com inline embed on `/book` only. Every CTA elsewhere is a plain link to `/book` with UTMs passed through | No third-party JS outside `/book`; protects LCP/INP | Sitewide popup script |
| Forms | **None at launch**: Cal.com covers all intake, including a "Partner intro" event type. Add **Web3Forms** (free, 250/month, hCaptcha + honeypot) only if a form is needed | Fewer moving parts and less PII | Formspree (50/month); Worker + Turnstile + Email (more code; keep as phase 2) |
| Security | `_headers` (HSTS, nosniff, referrer, permissions, frame-ancestors) + Astro `security.csp` meta (hashed scripts) | Meta CSP cannot set `frame-ancestors`, so the header supplies it. Script hashes come from Astro | `'unsafe-inline'` scripts |

---

## 3. Repo structure

```
discoverdev-site/
├─ .nvmrc                      # 24
├─ astro.config.mjs
├─ wrangler.jsonc
├─ package.json                # exact pins; scripts: dev, build, preview, check, test, qa
├─ tsconfig.json               # extends astro/tsconfigs/strict
├─ CLAUDE.md                   # rules: tokens only, logical CSS, no literals in UI, event spec, CSP domains
├─ public/
│  ├─ _headers  _redirects  robots.txt
│  ├─ favicon.svg  apple-touch-icon.png
│  └─ .well-known/security.txt
├─ src/
│  ├─ content.config.ts
│  ├─ content/
│  │  ├─ services/en/{launch-ready,validate,build,scale,partners}.mdx
│  │  ├─ work/en/{rushr,edulens}.mdx
│  │  ├─ insights/en/ai-app-to-production.mdx + clusters
│  │  ├─ testimonials.json  clients.json  authors.json  faqs.json
│  ├─ i18n/
│  │  ├─ locales.ts            # single registry: code, endonym, dir, status, ogLocale, fontSet
│  │  ├─ ui/en.json  ui/ar.json
│  │  └─ t.ts                  # t(key, locale); loud in dev, fallback+report in prod
│  ├─ lib/
│  │  ├─ analytics.ts          # track(), event enum, PostHog lazy init
│  │  ├─ seo.ts                # canonical, hreflang, JSON-LD builders
│  │  └─ utm.ts                # read/persist UTMs (sessionStorage), append to /book + Cal link
│  ├─ layouts/  BaseLayout.astro  PageLayout.astro  ArticleLayout.astro  CaseStudyLayout.astro
│  ├─ components/  (see §5)
│  ├─ styles/  tokens.css  base.css  prose.css
│  ├─ assets/  images/  logos/  og/            # og font files (woff/ttf for satori)
│  └─ pages/
│     ├─ index.astro  launch-ready.astro  validate.astro  build.astro  scale.astro  partners.astro
│     ├─ work/index.astro  work/[slug].astro
│     ├─ insights/index.astro  insights/[...slug].astro
│     ├─ about.astro  book.astro  privacy.astro  404.astro
│     ├─ og/[...slug].png.ts   # prerendered OG images
│     ├─ rss.xml.ts
│     └─ ar/ …                 # Q1 2027, mirrors EN paths
├─ scripts/  i18n-gate.mjs  redirects-test.mjs  css-logical-lint.mjs
└─ tests/  smoke.spec.ts  a11y.spec.ts  analytics.spec.ts  rtl.spec.ts
   lighthouserc.json
```

**Key config:**

```js
// astro.config.mjs (sketch)
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://discoverdev.ai',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: { locales: ['en', 'ar'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  integrations: [mdx(), sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    filter: (u) => !/\/(404|og\/)/.test(u),
  })],
  fonts: [
    { name: 'Manrope', cssVariable: '--font-heading', provider: fontProviders.fontsource(),
      weights: ['600 800'], subsets: ['latin'], fallbacks: ['system-ui', 'sans-serif'] },
    { name: 'Rubik', cssVariable: '--font-body', provider: fontProviders.fontsource(),
      weights: ['400 600'], subsets: ['latin'], fallbacks: ['system-ui', 'sans-serif'] },
    { name: 'IBM Plex Sans Arabic', cssVariable: '--font-arabic', provider: fontProviders.fontsource(),
      weights: [400, 600, 700], subsets: ['arabic'], fallbacks: ['sans-serif'] },
  ],
  security: { csp: { /* see §11 */ } },
});
```

Add `'ar'` to `i18n.locales` only when the first Arabic page ships. Until then, the registry marks it `status: 'hidden'`.

```jsonc
// wrangler.jsonc
{
  "name": "discoverdev-site",
  "compatibility_date": "2026-10-15",
  "assets": { "directory": "./dist", "not_found_handling": "404-page", "html_handling": "auto-trailing-slash" }
}
```

---

## 4. Collection schemas (Zod 4 sketch)

```ts
// src/content.config.ts
import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const locale = z.enum(['en', 'ar']);
const i18nFields = { locale, translationKey: z.string() };   // links EN↔AR versions
const seo = { title: z.string().max(60), description: z.string().min(70).max(160) };

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.mdx' }),
  schema: z.object({
    ...seo, ...i18nFields,
    key: z.enum(['launch-ready', 'validate', 'build', 'scale', 'partners']),
    tier: z.enum(['front-door', 'core', 'referral', 'partner']),
    headline: z.string(),
    duration: z.string(),                       // "~5 working days"
    pricing: z.enum(['quoted-fixed', 'fixed', 'retainer', 'custom']),
    creditsToward: z.array(reference('services')).default([]),
    guarantee: z.string().optional(),           // "No useful findings, no charge"
    deliverables: z.array(z.string()).min(1),
    cta: z.object({ label: z.string(), href: z.string(), ctaId: z.string() }),
    faqs: z.array(reference('faqs')).default([]),
    order: z.number().int(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.mdx' }),
  schema: ({ image }) => z.object({
    ...seo, ...i18nFields,
    client: z.string(),
    clientConsent: z.boolean(),                 // build fails the page if false and not anonymized
    anonymizedAs: z.string().optional(),
    region: z.enum(['US', 'GCC', 'UK', 'EU', 'MENA', 'Other']),
    industry: z.string(),
    services: z.array(reference('services')),
    timelineWeeks: z.number().int().positive().optional(),
    stack: z.array(z.string()),
    problem: z.string(), approach: z.string(),
    metrics: z.array(z.object({ label: z.string(), value: z.string(), verified: z.boolean() })).default([]),
    cover: image(), coverAlt: z.string(),
    testimonial: reference('testimonials').optional(),
    publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(),
    status: z.enum(['draft', 'pending-metrics', 'published']),
  }),
});

const insights = defineCollection({
  loader: glob({ base: './src/content/insights', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    ...seo, ...i18nFields,
    pillar: z.enum(['prototype-to-launch', 'ai-cost', 'product-discovery']),
    role: z.enum(['pillar', 'cluster']),
    parent: reference('insights').optional(),   // clusters point to their pillar
    author: reference('authors'),
    tags: z.array(z.string()).max(6).default([]),
    hero: image().optional(), heroAlt: z.string().optional(),
    publishedAt: z.coerce.date(), updatedAt: z.coerce.date().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    relatedService: reference('services').optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: file('src/content/testimonials.json'),
  schema: z.object({
    id: z.string(), quote: z.string().max(280),
    name: z.string(), role: z.string().optional(), company: z.string(),
    source: z.enum(['clutch', 'upwork', 'fiverr', 'direct']), sourceUrl: z.url().optional(),
    rating: z.number().min(1).max(5).optional(),
    consentToPublish: z.boolean(), consentRecordedAt: z.coerce.date().optional(),
    locale,
  }),
});

const clients = defineCollection({
  loader: file('src/content/clients.json'),
  schema: z.object({ id: z.string(), name: z.string(), country: z.string(),
    logo: z.string().optional(), consentToShowLogo: z.boolean(), url: z.url().optional() }),
});
const authors = defineCollection({ loader: file('src/content/authors.json'),
  schema: z.object({ id: z.string(), name: z.string(), role: z.string(), bio: z.string(), linkedin: z.url().optional() }) });
const faqs = defineCollection({ loader: file('src/content/faqs.json'),
  schema: z.object({ id: z.string(), q: z.string(), a: z.string(), locale }) });

export const collections = { services, work, insights, testimonials, clients, authors, faqs };
```

**Rules:**
- **Production queries exclude unpublished and unconsented items:** `draft`, `status !== 'published'`, `consentToPublish === false` and `consentToShowLogo === false`.
- **Rushr stays `pending-metrics`** until its November metrics land.
- **Entry ids carry the locale path** (`en/rushr`); routes strip the locale prefix.

---

## 5. Component inventory

| Group | Components |
|---|---|
| Shell | `BaseLayout` (sets `<html lang dir>` from the registry; `<Font>`; SEO; analytics), `PageLayout`, `ArticleLayout`, `CaseStudyLayout`, `SkipLink`, `Header`, `NavDesktop`, `NavMobile` (`<dialog>` or popover), `Footer`, `LangSwitcher` (endonyms; hidden until AR goes live), `Logo` |
| SEO | `Seo` (title, description, canonical, hreflang, OG/Twitter), `JsonLd`, `Breadcrumbs` |
| Primitives | `Container`, `Section` (light/navy), `Button`/`CtaLink` (requires `ctaId`; emits `data-cta-*`), `Icon` (inline SVG; `directional` prop mirrors in RTL), `Badge`, `Eyebrow` (`// .config` motif), `CommandLine` (`$` motif) |
| Marketing | `Hero`, `OfferCard`, `OfferGrid`, `ProcessSteps` (Discover → Build → Own), `PillarTrio`, `GuaranteeCallout`, `ProofStrip` (5.0/11 reviews → Clutch link), `ClientLogos` (consent-filtered), `Testimonial`, `TestimonialRow`, `ComparisonTable` (fix vs rebuild), `FAQ` (`<details>`), `CtaBand` (Review + clarity call) |
| Work | `CaseStudyCard`, `MetricGrid` (shows only `verified` metrics), `StackList`, `CaseStudyMeta` |
| Insights | `ArticleCard`, `ArticleMeta`, `Toc`, `Prose` (MDX wrapper), MDX components `Callout`, `Figure`, `CodeBlock`, `PillarNav` (pillar ↔ clusters), `RelatedService` |
| Booking | `CalEmbed` (inline, lazy, reserves height, emits booking events), `BookOptions` (Review vs clarity call) |
| Ops | `Analytics` (CF beacon + PostHog lazy loader), `OgImage` endpoint, `404` |

---

## 6. i18n / RTL approach

- **URLs:** EN at root (`prefixDefaultLocale: false`), AR under `/ar/…` mirroring the EN slugs. Content follows a subset pattern: only translated pages get an `/ar` URL and hreflang. No auto-redirect by browser language. Any locale suggestion is a dismissible banner.
- **One registry** (`src/i18n/locales.ts`) holds code, endonym, `dir`, `status` (`live`/`hidden`/`pseudo`), `ogLocale` (`en_US`, `ar_AR`), `fontVar`, and review record. Config, sitemap, switcher, hreflang and the gate all import it.
- **UI strings** live in `ui/{en,ar}.json`, looked up through `t()`. No call-site fallbacks. No string concatenation; use whole-sentence keys with named arguments.
- **Content translations** are separate MDX files sharing a `translationKey`.
- **Gate (`scripts/i18n-gate.mjs`, runs in CI):**
  - key parity
  - no empty values
  - placeholder parity
  - no value identical to the English source (except a do-not-translate list: DiscoverDev, Launch-Ready Review, Lovable, Supabase…)
  - Arabic-script ratio ≥50%
  - every `live` locale has a review record
  - prove it can fail: delete a key and confirm the gate goes red
- **CSS:** logical properties only (`margin-inline-start`, `padding-block`, `inset-inline-end`, `text-align: start`). `scripts/css-logical-lint.mjs` fails on `margin-left|right`, `padding-left|right`, `left:`, `right:`, `text-align: left|right` in `src/`. Mirror only directional icons (`:dir(rtl) .icon--dir { scale: -1 1 }`). Wrap phone numbers, code, URLs and Latin brand names in `dir="ltr"` or `<bdi>`.
- **Fonts:**
  - EN: Manrope for headings, Rubik for body.
  - AR: IBM Plex Sans Arabic for headings and body. Manrope has no Arabic, so this is required.
  - Option to test: Rubik has an `arabic` subset, so it could set AR body text for brand continuity. Decide with a native reviewer.
  - Load `--font-arabic` only in the AR layout, and preload one weight (headings).
- **Formatting:** use `Intl.*` with an explicit locale. Arabic digits are a decision for the native reviewer; the default proposal is `ar-u-nu-latn` (Latin digits, common in GCC business copy). No currency on the site; fees are quoted per client.
- **Typography:** Arabic needs line-height ≥1.7 and no letter-spacing. Allow 30% text expansion; no fixed-width buttons.
- **Verify:** an RTL Playwright sweep of every `/ar` route (overflow, mirrored chevrons, focus order), plus a pseudo-locale sweep before AR launch.

---

## 7. Analytics + event spec

**Stack:**
- **Cloudflare Web Analytics:** manual beacon snippet; turn automatic injection off so the CSP stays deterministic.
- **PostHog Cloud EU:**
  - Init:
    ```js
    posthog.init(KEY, {
      api_host: 'https://eu.i.posthog.com',
      cookieless_mode: 'always',
      person_profiles: 'never',
      autocapture: false,
      capture_pageview: true,
      disable_session_recording: true,
    })
    ```
  - Enable "Cookieless server hash mode" in project settings.
  - Load it via `import()` after `load` + `requestIdleCallback`. Queue `track()` calls until it loads.
- **Google Search Console + Bing Webmaster Tools:** verify by DNS TXT on the Cloudflare zone.
- **Source of truth for the North Star (clarity calls booked/month):** the Cal.com bookings list. PostHog `booking_completed` handles attribution. Optional phase 2: a Cal.com webhook to a Worker that forwards to the PostHog capture API, so bookings are recorded server-side (ad-blocker-proof).

**Naming:** snake_case, object_action, past tense (names fixed by the brief). No PII in properties.

**Common properties** on every event: `locale`, `page_path`, `page_type` (`home|service|work|insight|about|book|other`), and the session's first-touch UTMs (`utm_source|medium|campaign|content|term`; PostHog captures `$utm_*` on pageview automatically).

| Event | Fires when | Properties | Implementation |
|---|---|---|---|
| `cta_clicked` | Click on any `CtaLink`/`Button` with `ctaId` | `cta_id` (e.g. `hero_book_review`), `cta_location` (`hero\|nav\|band\|card\|footer\|inline`), `cta_target` (`launch_ready\|clarity_call\|validate\|build\|scale\|partners`), `destination` | Delegated click listener on `[data-cta-id]` |
| `booking_started` | Cal booker is visible with slots loaded (first time per page view) | `event_type` (`launch_ready_review\|clarity_call\|partner_intro`), `entry_cta_id` (from sessionStorage) | `Cal("on",{action:"bookerViewed"})` with `slotsLoaded === true` |
| `booking_completed` | Booking succeeds (not dry run) | `event_type`, `is_recurring`, `payment_required`, `entry_cta_id`. No booking `uid` or attendee data | `Cal("on",{action:"bookingSuccessfulV2"})`; ignore `dryRun*` |
| `article_read` | `/insights/*`: ≥60% scroll depth **and** ≥30 s visible time, once per page view | `article_slug`, `pillar`, `role` (`pillar\|cluster`), `read_seconds` | IntersectionObserver on an end-of-article sentinel at 60% + visibility timer |
| `case_study_viewed` | `/work/*` page view (not the index) | `case_study_slug`, `industry`, `region` | On load, once |
| `outbound_clicked` | Click on an `<a>` whose host ≠ discoverdev.ai | `link_host`, `link_url` (no query string), `link_context` (`proof\|footer\|article\|other`) | Delegated listener |

**Funnels:**
- Visit service page → `cta_clicked(cta_target=launch_ready)` → `booking_started` → `booking_completed`, within 1 day. A same-day window suits cookieless daily-hash identity.
- Insight → `article_read` → `cta_clicked` → `booking_completed`.

**UTMs:**
- Lowercase only. Never on internal links.
- `lib/utm.ts` stores first-touch UTMs in sessionStorage and appends them to the `/book` link and the Cal link query. Verify Cal records them on a dry-run booking.

**Consent minimum** (not legal advice):

| Regime | Minimum with this setup |
|---|---|
| EU/UK GDPR + ePrivacy (inbound only) | Nothing is stored on the device by analytics (CF WA: no cookies; PostHog cookieless). Basis: legitimate interest. **No banner** + privacy notice. Residual risk: EDPB Guidelines 2/2023 read Art. 5(3) broadly, so JS beacons can count as "access". If that risk is unacceptable, switch PostHog to `cookieless_mode: 'on_reject'` with a two-button banner |
| KSA PDPL (in force; consent is the default basis) | Privacy notice (EN + AR at `/ar` launch) covering purposes, processors (Cloudflare, PostHog EU, Cal.com) and cross-border transfer. Analytics collects no personal data at rest (hashed). Cal.com booking form: consent line + privacy link |
| UAE PDPL (executive regulations pending per a December 2025 source; 2026 status unverified) | Same as KSA |
| Cal.com iframe | Cal.com sets its own cookies inside the iframe on `/book`, after user intent. Disclose it in the privacy notice |

---

## 8. Forms / booking

- **`/book`:**
  - Two choices, Launch-Ready Review and 30-minute clarity call, each a Cal.com event type. Add a `partner_intro` type for `/partners`.
  - Inline embed: load `app.cal.com/embed/embed.js` from a bundled module (no inline snippet, so it stays CSP-hashable) when the container is ≤600 px from the viewport. Use IntersectionObserver; on `/book` it fires immediately after first paint.
  - Reserve `min-block-size` on the container to prevent CLS. Show a static fallback (event list + direct `cal.com/<user>/<event>` link) until `linkReady`; on `linkFailed`, keep the link.
  - Theme the embed with brand colors and pass `locale`.
- **Everywhere else:** CTAs are plain `<a href="/book?type=…">`. No Cal script.
- **Optional:** popup-on-click for the "Book a Review" header button with `Cal("preload")` on pointerenter. Only add it if the `/book` drop-off data justifies the extra JS.
- **Forms:** none at launch. If needed:
  - Web3Forms: action `https://api.web3forms.com/submit`, hCaptcha, honeypot field, and `form-action` + `frame-src` for hCaptcha in the CSP.
  - Phase 2 alternative: a Worker endpoint + Turnstile (free, siteverify server-side), with Cloudflare Email Routing to the inbox.

---

## 9. Performance budget

These are targets, not measurements. Enforce them with Lighthouse CI (`lighthouserc.json`) on `/`, `/launch-ready`, `/work/edulens`, `/insights/ai-app-to-production` and `/book`.

| Metric | Budget (mobile, LH simulated 4G) | Field target (CrUX / CF RUM, p75) |
|---|---|---|
| LCP | ≤2.0 s | ≤2.5 s |
| INP | TBT ≤150 ms | ≤200 ms |
| CLS | ≤0.05 | ≤0.1 |
| Lighthouse | Perf ≥95; A11y, Best Practices, SEO = 100 | — |
| First-party JS per page (gz) | ≤25 KB, excluding PostHog (lazy, post-load) | — |
| Third-party JS before `load` | 0 KB (Cal only on `/book`, after paint) | — |
| CSS (gz) | ≤30 KB | — |
| Fonts on first view | ≤3 files, ≤120 KB total. Preload 1 (heading) | — |
| Hero/LCP image | ≤120 KB AVIF, `fetchpriority="high"`, explicit size | — |
| HTML (gz) | ≤40 KB | — |
| Requests on first view | ≤20 | — |

**Rules:**
- No client framework islands without a measured reason.
- Use `font-size-adjust: from-font` on text containers as a second guard against font-swap CLS.
- Below-the-fold images use `loading="lazy"`.
- Cache `/_astro/*` immutable for 1 year (§11).

---

## 10. SEO plumbing

- **Canonical:** absolute, self-referential, built from `Astro.site` + path, no trailing slash, query stripped. One `<h1>` per page.
- **hreflang:** only when a translation exists. Each page lists itself + its pair + `x-default` (pointing to EN), reciprocal on both sides, from `translationKey`. The sitemap `i18n` option also emits alternates.
- **Sitemap:** `@astrojs/sitemap` → `/sitemap-index.xml`. Filter out 404, OG and draft pages. Set `lastmod` via `serialize()` from `updatedAt`. Submit in GSC and Bing.
- **robots.txt (prod):**
  ```
  User-agent: *
  Allow: /
  Sitemap: https://discoverdev.ai/sitemap-index.xml
  ```
  AI crawlers are allowed, which supports AEO. Preview hosts get `X-Robots-Tag: noindex` via `_headers` (§11).
- **Meta:** title ≤60 chars, description 120–160 chars, `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:locale` (+ `og:locale:alternate`), `twitter:card=summary_large_image`.
- **OG images:** a prerendered endpoint `src/pages/og/[...slug].png.ts` (satori → SVG → sharp → PNG, brand template, Manrope from a `.woff` or `.ttf`, since satori does not take woff2). AR: test satori RTL shaping first; fall back to static designed PNGs.
- **JSON-LD:**
  - `Organization` + `WebSite` sitewide (logo, `sameAs`: Clutch, LinkedIn).
  - `Service` on offer pages.
  - `BlogPosting` + `BreadcrumbList` on insights; `BreadcrumbList` on work.
  - `FAQPage` where FAQs exist (rich results are limited; it is for AEO).
  - **Do not mark up the 5.0/11 rating**: Google does not show self-serving review markup.
- **Old URLs:** every old SPA route gets a 301 to its new equivalent in `_redirects` (§13). The 404 page returns a real 404 (`not_found_handling: "404-page"`).
- **RSS** at `/insights/rss.xml` for distribution.

---

## 11. Security headers

**`public/_headers`** (static asset responses):

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

https://:version.:subdomain.workers.dev/*
  X-Robots-Tag: noindex
https://:subdomain.workers.dev/*
  X-Robots-Tag: noindex
```

The header CSP holds only the directives a meta CSP cannot carry (`frame-ancestors`, plus base and object hardening). The browser enforces both policies, and since this one has no `script-src` or `default-src`, it does not block the hashed scripts. Add HSTS `preload` only after 3+ months of stable HTTPS on all subdomains.

**Astro meta CSP** (`astro.config.mjs` → `security.csp`):

```js
csp: {
  algorithm: 'SHA-256',
  directives: [
    "default-src 'self'",
    "img-src 'self' data: https://*.posthog.com",
    "font-src 'self'",
    "connect-src 'self' https://*.posthog.com https://cloudflareinsights.com https://app.cal.com",
    "frame-src https://app.cal.com https://cal.com",
  ],
  scriptDirective: { resources: ["'self'", 'https://app.cal.com', 'https://static.cloudflareinsights.com', 'https://*.posthog.com'] },
  styleDirective:  { resources: ["'self'", "'unsafe-inline'"] },   // Shiki + Cal-injected styles; scripts stay strict
},
```

**Verify:**
- Run `astro build && astro preview` and check for zero CSP console errors on `/`, `/book` (complete a Cal dry-run booking) and an insight with code.
- Then run MDN HTTP Observatory and securityheaders.com on the preview URL. Target A or better.
- Confirm Cal origins against the Embed Snippet Generator.
- If Web3Forms is added: `form-action 'self' https://api.web3forms.com` plus the hCaptcha hosts.

**Operations:**
- 2FA on registrar, Cloudflare, GitHub, Cal.com and PostHog.
- `/.well-known/security.txt` with `Contact: mailto:security@discoverdev.ai` and `Expires:`.
- Dependabot for npm.

---

## 12. Deploy + DNS cutover + rollback runbook

Owner: Mohamed (launch lead + operator). Claude does prep and QA. Target: launch on **Tue 2026-11-24**, a week before the Nov 30 deadline. Avoid Fridays.

**T-21 (by 2026-11-03): DNS to Cloudflare, no visible change**
1. Export the full zone from the current DNS host: A/AAAA/CNAME/MX/TXT (SPF, DKIM, DMARC, Google or other verification), CAA, and any subdomains. Screenshot it as the rollback reference.
2. Add discoverdev.ai to Cloudflare (Free plan). Compare the imported records line by line with the export. Keep the GitHub Pages A/AAAA and `www` CNAME **DNS-only (grey)** so GitHub's certificate keeps renewing.
3. If DNSSEC is on at the registrar, turn it off. Change the nameservers at the registrar to Cloudflare's pair. Wait for the zone to show Active.
4. Verify: the site still loads from GitHub Pages; email sends and receives (test both ways); MX/SPF/DKIM/DMARC resolve. Then re-enable DNSSEC with Cloudflare's DS record.
5. Verify the domain in the GitHub org's Pages settings, which prevents takeover later.

**T-14: Build on Workers**
6. Create the Worker from the repo (Workers Builds; build `npm run build`, deploy `npx wrangler deploy`, root `/`, `.nvmrc` 24). Every push gives a `*.workers.dev` preview with noindex.
7. **Redirect map:** list every old URL (GSC → Pages report + the old SPA router + backlinks). Write `_redirects` with `301`s. `scripts/redirects-test.mjs` asserts that each old URL returns 301 → 200 on the preview.
8. Set up CF Web Analytics (manual snippet), the PostHog EU project (cookieless mode on), and Cal.com event types + embed settings.

**T-7: Freeze + QA**
9. Content freeze. Run the full QA (§13) on the preview. Fix all criticals.
10. Rehearse the rollback on preview: `npx wrangler deployments list` → `npx wrangler rollback <version-id>`.

**T-0 cutover (morning GMT+2 = night US, low traffic)**

| # | Step | Verify | Time |
|---|---|---|---|
| 1 | Final prod deploy from `main` | Build green; version id noted | 10 min |
| 2 | Cloudflare: delete apex A/AAAA (GitHub Pages) → Worker → Settings → Domains → add custom domain `discoverdev.ai` | Cloudflare creates the record + certificate. `https://discoverdev.ai` serves the new site | 10 min |
| 3 | `www`: delete the GH CNAME → proxied `AAAA 100::` → Redirect Rule `www.discoverdev.ai/*` → `https://discoverdev.ai/${1}` 301 | `curl -I https://www.discoverdev.ai/x` → 301 to apex | 10 min |
| 4 | Smoke: every nav page 200, `/sitemap-index.xml`, `/robots.txt`, a 404 returns 404, redirect test against prod | Script all green | 15 min |
| 5 | Analytics: the CF beacon shows the visit; the PostHog live feed shows `$pageview` + a `cta_clicked` test; Cal dry run fires `booking_*` | Seen in both tools | 15 min |
| 6 | GSC: submit the sitemap, then URL Inspection → request indexing for `/`, `/launch-ready`, `/book` | Submitted | 10 min |
| 7 | GitHub Pages: **keep the old repo deployed but unlinked**. Remove the custom domain from the GH repo only after T+7, and keep the domain verified in GitHub | — | — |

Because the records are proxied, IPs stay on Cloudflare anycast and the switch is near-instant. Even so, lower the TTLs of any remaining DNS-only records to 300 s at T-3.

**Rollback**

| Trigger | Action |
|---|---|
| A bad deploy (broken page, CSP blocking Cal, wrong content) | `npx wrangler rollback` to the previous version (seconds), or revert the commit and push |
| Platform-level failure (custom domain or certificate won't issue, widespread 5xx) | Remove the Worker custom domain → re-add the apex A/AAAA 185.199.108–111.153 + 2606:50c0:8000–8003::153 and `www` CNAME `<user>.github.io` as DNS-only → the GitHub Pages site serves again. Keep this exact record set in the runbook |
| Email breaks | Restore the MX/TXT records from the T-21 export. Nameserver changes are not rolled back casually |

**Automatic triggers:** any primary nav page non-200, `/book` cannot book, or the site is unreachable from 2 regions.

**Discretionary triggers:** LCP field >4 s, or CSP errors on key flows.

**T+1h / T+24h / T+7d:**
- Recheck smoke and analytics.
- Watch GSC Coverage (soft 404s, redirect errors) and CF RUM Web Vitals.
- Check that the PostHog funnel has data and that booking counts match the Cal.com bookings list.
- Write the after-action report at T+10.

---

## 13. QA / launch checklist

**CI on every PR** (GitHub Actions; the Workers Builds preview runs alongside):
- [ ] `astro check` (types and schemas) + `astro build`. The Rust compiler fails on invalid HTML.
- [ ] `scripts/css-logical-lint.mjs` (no physical properties) and `scripts/i18n-gate.mjs`
- [ ] Playwright smoke on all routes: one `h1`, title 30–60 chars, canonical on the prod domain, no missing `alt`, JSON-LD parses, `lang` and `dir` set
- [ ] `@axe-core/playwright`: zero serious or critical issues
- [ ] Lighthouse CI against the §9 budgets
- [ ] linkinator: no broken internal links

**Pre-launch full QA** (on preview, then prod):
- [ ] Viewports 320 / 375 / 768 / 1024 / 1440. Chrome, Safari (iOS + macOS), Firefox, Edge.
- [ ] Keyboard-only pass: skip link, nav dialog focus trap, visible focus, Cal embed reachable.
- [ ] Contrast:
  - Grey `#858585` on `#FEFEFE` is **3.66:1**, which fails body text. Use it only at ≥24 px (or ≥18.66 px bold); muted body text uses `#6B6B6B` (5.28:1).
  - Grey on navy `#032993` is 3.27:1: large text only.
  - Blue `#1240BE` on white is 8.32:1: OK.
- [ ] Every `cta_clicked` id is unique. All 6 events verified in the PostHog live feed with correct properties and no PII. The Cal dry run does not fire `booking_completed`.
- [ ] CSP: zero violations on key flows. Observatory/securityheaders grade A or better. HTTPS-only, no mixed content.
- [ ] SEO:
  - sitemap 200 with canonical URLs only
  - robots correct
  - preview hosts send noindex
  - 404 returns a real 404
  - all old URLs 301 → 200
  - Rich Results Test passes on home, a service page and an article
  - OG previews correct (LinkedIn Post Inspector)
- [ ] Content:
  - no unconsented client names or logos
  - only verified metrics
  - tone rules: no exclamation marks, no em-dashes in short copy
  - privacy page live
  - `security.txt` live
- [ ] PageSpeed Insights mobile on 5 key pages meets §9.
- [ ] Rollback rehearsed. Zone export saved. Email tested after the nameserver move.

**AR launch (Q1 2027) adds:**
- [ ] i18n gate green, native review recorded
- [ ] RTL Playwright sweep
- [ ] hreflang reciprocity check
- [ ] AR privacy notice
- [ ] AR OG images
- [ ] Arabic font subset loads only on `/ar`

---

## Sources

- Astro: [releases](https://github.com/withastro/astro/releases) · [blog index](https://astro.build/blog/) · [Astro 7](https://astro.build/blog/astro-7/) · [install](https://docs.astro.build/en/install-and-setup/) · [v6 upgrade](https://docs.astro.build/en/guides/upgrade-to/v6/) · [v7 upgrade](https://docs.astro.build/en/guides/upgrade-to/v7/) · [content collections](https://docs.astro.build/en/guides/content-collections/) · [i18n](https://docs.astro.build/en/guides/internationalization/) · [fonts](https://docs.astro.build/en/guides/fonts/) · [config reference / CSP](https://docs.astro.build/en/reference/configuration-reference/) · [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) · [styling/Tailwind](https://docs.astro.build/en/guides/styling/) · [deploy to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- npm registry (`registry.npmjs.org`) for every package version · [Fontsource API](https://api.fontsource.org/v1/fonts/ibm-plex-sans-arabic) · [Fontsource IBM Plex Sans Arabic](https://fontsource.org/fonts/ibm-plex-sans-arabic)
- Node: [previous releases](https://nodejs.org/en/about/previous-releases)
- Cloudflare: [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) · [static assets billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) · [_headers](https://developers.cloudflare.com/workers/static-assets/headers/) · [_redirects](https://developers.cloudflare.com/workers/static-assets/redirects/) · [SSG routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/) · [Pages→Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) · [custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) · [Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) · [Builds config](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/) · [Builds limits](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/) · [build image](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/) · [Web Analytics about](https://developers.cloudflare.com/web-analytics/about/) · [Web Analytics FAQ](https://developers.cloudflare.com/web-analytics/faq/) · [Web Analytics setup](https://developers.cloudflare.com/web-analytics/get-started/) · [Turnstile plans](https://developers.cloudflare.com/turnstile/plans/)
- PostHog: [pricing](https://posthog.com/pricing) · [cookieless tracking](https://posthog.com/tutorials/cookieless-tracking) · [persistence](https://posthog.com/docs/libraries/js/persistence) · [CSP](https://posthog.com/docs/advanced/content-security-policy)
- Cal.com: [embed events](https://cal.com/help/embedding/embed-events) · [embed instructions](https://cal.com/help/embedding/embed-instructions) · [adding an embed](https://cal.com/help/embedding/adding-embed)
- Forms: [Web3Forms pricing](https://web3forms.com/pricing) · [Formspree plans](https://formspree.io/plans)
- Analytics alternatives: [Plausible plans](https://plausible.io/docs/subscription-plans) · [Google consent mode](https://developers.google.com/tag-platform/security/guides/consent)
- Web platform: [web.dev Web Vitals](https://web.dev/articles/vitals) · [cross-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document) · modern-web-guidance guides `cross-document-transitions`, `visually-stable-font-fallbacks`, `optimize-image-priority`
- Privacy (secondary sources, not legal advice): [EDPB Guidelines 2/2023](https://www.edpb.europa.eu/documents/guideline/guidelines-22023-on-technical-scope-of-art-53-of-eprivacy-directive_en) · [CookieYes KSA PDPL](https://www.cookieyes.com/saudi-arabia-pdpl-compliance.md) · [CookieYes UAE PDPL](https://www.cookieyes.com/blog/uae-data-protection-law-pdpl/)
- Migration: [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
