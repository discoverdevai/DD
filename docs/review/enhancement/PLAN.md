# Enhancement plan (Oct 16, 2026)

This plan combines six read-only reviews: performance, tech best practice, SEO/AEO/GEO, CRO with UX laws, competitors, and content plus the old repo. The full reports are in this folder (`tech.md`, `cro.md`, `competitors.md`, `content.md`), and the SEO findings are summarised below.

Rules for every item: copy goes into `context/03-copy.md` first, every fact must trace to `context/09-proof.md`, nothing invented, nothing tagged `[PRICE]`/`[TEAM]`/`[CONSENT]` shown until resolved, and each step ships only after `npm run qa`, functional and axe/Lighthouse pass.

**Where we start:** Lighthouse mobile 97–100, LCP 1.5–1.8s, TBT 0, axe clean, all JSON-LD valid and matching the visible text, no AggregateRating. SEO score about 84/100 (technical 88, on-page 90, content 75, AEO 80, GEO 78).

## Phase 1: performance and platform (done, `719f54e`)
- **Layout shift:** /launch-check went from 0.077 to 0.003, and font-swap shift on slow connections from 0.147 to 0. Startup scripts no longer force a layout.
- **Delivery:** cache headers for unhashed files, CORP on hashed assets, prefetch rules.
- **Resilience and privacy:** the mobile menu works without JS; Global Privacy Control is honoured; exception capture is on.
- **CI:** npm audit, an axe + Lighthouse step and Dependabot.

## Phase 2: SEO / AEO / GEO, code only
| # | Fix | File |
|---|---|---|
| S1 | RSS item links without trailing slash, matching the canonicals | `src/pages/insights/rss.xml.ts` |
| S2 | llms.txt: `## Work` (anonymized EdTech case), descriptions on guide lines, Work and Insights under Company | `src/pages/llms.txt.ts` |
| S3 | No screen-reader suffixes inside headings ("Validate: See Validate") | `Engagements.astro`, `ArticleCard.astro` |
| S4 | Sitemap `lastmod` for articles from `updatedAt` | `astro.config.mjs` |
| S5 | Home WebPage `@id` set to `/#webpage`; Organization `hasOfferCatalog` linking the five services | `src/lib/seo.ts` |
| S6 | `/book/confirmed` gets its own description | `copy/en/book.ts` (via 03) |

## Phase 3: CRO, code only (copy already exists)
| # | Fix | Law |
|---|---|---|
| C1 | Home hero: add the specified launch-check text link under the CTA | Hick, spec `home_hero_launch_check` |
| C2 | Articles: in-body launch-check CTA (03 spec); sticky bar = Review on prototype-to-launch articles (04 §5) | Spec |
| C3 | Remove false affordances: Validate verdict options, Scale squad tiles, Partners hero cards (link them to the table) | Jakob, consistency |
| C4 | /book: collapse the empty calendar frame when the embed fails; reassurance above it on phones; stronger selected-tab state | Error prevention |
| C5 | /build timeline: fill the Discover/Plan bars | Visibility of status |
| C6 | Insights cards: one link target (whole card) | Fitts |

## Phase 4: copy through 03 (facts from 09 only)
| # | Fix | Source of facts |
|---|---|---|
| K1 | "What is Agile v2?" FAQ on home, a 40–60 word definition | 09 "Method" |
| K2 | Grow 5 short FAQ answers to 40–60 words (Validate cost, Review "5 days", Build price/code, Scale size) | 09 |
| K3 | /insights meta matches the four live guides | none needed |
| K4 | In-body links: service pages → guides; /about, /partners and service proof → /work; /partners → /scale | Existing pages |
| K5 | /work: retitle "What clients say" (there are no quotes until consent) | 11 §0b |
| K6 | Review buttons: microcopy saying the first step is a free scoping call, if 03/09 already describe that flow; align the final-band H2 and button | 03 Review flow |
| K7 | Mid-page clarity CTA on Home, Validate and Build | Existing CTA strings |
| K8 | /partners FAQ: NDA + IP for white-label, the 6-month minimum for dedicated teams | 09 |
| K9 | /build comparison table: typical agency vs DiscoverDev (timeline, fixed price, IP) | 09 |
| K10 | Article fixes: "How we wrote this" note, price-checked dates, visible FAQs on two articles | Articles |

## Decisions for Mohamed (blocking or high value)
1. **Method name.** TrianglZ markets "AI-Native Agile v2.0" and defines it in their llms.txt. Options: keep "Agile v2" with a clearly different definition, or rename it. Highest-risk item from the competitor review.
2. **Price cue** (D-01 Review "from", D-19 Validate). Every rescue rival shows a number.
3. **Named people** (D-16 / D-17): the top trust lever on /about, /book and articles.
4. **Cal.com username** (D-23): /book is the only conversion path, and it shows "calendar didn't load" until this is set.
5. **LinkedIn URL** (D-29) for `sameAs` and the footer.
6. **Client consent** (D-05) for logos and screenshots. The old repo's filenames are wrong, so each client and image needs confirming.
7. **New content hubs:** approve clusters B–D (Validate, Build, Scale). `05` §2 says to wait 6 months.
8. **Dashboard settings:**
   - Cloudflare: AI crawlers allowed, managed robots.txt off, Email Obfuscation, Rocket Loader and Bot Fight Mode off, Web Analytics auto-setup off.
   - PostHog: cookieless mode on.
   - www → apex redirect.
   - Old service worker check.
   - HSTS `includeSubDomains` after a subdomain check.

## Phase 5: after launch
- **Content:** the first six posts, one every two weeks, starting with "How Agile v2 works" (Oct 27). See `content.md`.
- **Platform:**
  - Font axes, inline page CSS, hero blur (measure first).
  - Desktop Services menu without JS.
  - Pin Actions to SHAs once the GitHub repo exists.
- **Measurement:** a funnel report from `data-cta-id` (page → /book → booked); test one change at a time for 2–3 weeks.
- **Arabic:** routes with hreflang and a regional FAQ (MENA/Gulf MVP searches are open ground).
