# Site map and release plan, from Oct 26, 2026

Builds on `docs/plan/site-map-plan.md` (§3 hierarchy, §4 URL map, §8 releases) and `docs/plan/gulf-first.md`. Nothing here changes a live URL.

## 1. Where we are
- **Live in code:** `/`, `/book`, `/book/confirmed`, `/privacy`, `/terms`, `/404`, and their Arabic twins under `/ar`.
- **Built but switched off (`live: false` in `src/data/routes.ts`):** `/validate`, `/build`, `/scale`, `/how-we-work`, `/work`, `/work/edtech-ai-agents`, `/about`, `/launch-ready`, `/partners`, `/launch-check`, `/insights` + 4 guides. English only.
- **Arabic twins exist only for the 5 live pages** (`AR_PAGES` in `src/i18n/t.ts`). Every page we switch on needs its Arabic twin in the same release, otherwise the language link would point nowhere.

## 2. The map we are moving toward

```
/                       Home (EN) · /ar
├── /validate           Discovery           ┐
├── /build              Fixed-price MVP     ├─ R1  services (search intent, Gulf titles)
├── /scale              Dedicated team      │
├── /how-we-work        The DiscoverDev Way ┘
├── /work               Projects            ┐
│   └── /work/edtech-ai-agents              ├─ R2  proof (needs consents)
├── /about                                  ┘
├── /launch-ready       Launch-Ready Review ┐
├── /partners           White-label         ├─ R3  other doors and guides
├── /launch-check       Free check          │
├── /insights + 4 guides                    ┘
├── /book  /privacy  /terms                 live
└── later: capabilities, industries, Saudi Arabia page, Gulf guides (R4)
Every page: EN at /x, Arabic at /ar/x, hreflang pair, one sitemap entry with alternates.
```

## 3. Releases, in order

| Release | Pages | Why this order | Needs from Mohamed first |
|---|---|---|---|
| **R0 now** | none (ops) | The live site still shows old tab titles | Deploy Worker `dd`; resubmit sitemap in Search Console; rename the Cal event to "Clarity call"; add `PUBLIC_POSTHOG_KEY` and `PUBLIC_CF_BEACON_TOKEN` build variables |
| **R1 services** | `/validate` `/build` `/scale` `/how-we-work` + Arabic | These carry the search intent ("MVP development", "dedicated team") and give the home cards a real page to link to. No client consent needed. Titles follow the Gulf pattern: `X for Gulf Startups \| DiscoverDev` | Validate "from" price in USD (D-01), or keep "no price number" |
| **R1b Gulf page** | `/software-development-saudi-arabia` + Arabic | Moved up from R4 (Oct 26, `sitemap-additions.md`): the target market gets its own page right after the services | Athkado link consent; hosting and PDPL answer; local contracting block only after D-44 |
| **R2 proof** | `/work` `/work/edtech-ai-agents` `/about` + Arabic | Strongest trust pages, but gated by consent | Client consents (D-05), Upscend OK, NJWAR-Athkado link; Azki wording only after D-44 |
| **R3 doors and guides** | `/launch-ready` `/partners` `/launch-check` `/insights` + guides + Arabic | Second offer and content; guides need five technical claims checked first | Check the five claims in the C3 guide; decide if Launch-Ready Review goes live now |
| **R4 Gulf growth** | Gulf guides (cost of an app like Haraj or Mrsool, what is an MVP, freelancer vs company), local-contracting section | Needs facts we do not have yet | D-44 (Azki), hosting and PDPL answer, cost ranges |

## 4. How every release runs (same routine each time)
1. **Copy first:** English in `context/03-copy.md`, Arabic in `context/03-copy-ar.md`, title and meta in `context/05-seo-aeo.md` (titles within 60 characters in English, about 45-50 in Arabic).
2. **Build the Arabic twin:** `src/content/copy/ar/*`, `src/pages/ar/*`, add the path to `AR_PAGES` and `PAIRED`.
3. **Flip `live: true`** for the release pages in `src/data/routes.ts`.
4. **Gates:** `npm run qa`, `node qa/functional.mjs`, `node qa/events.mjs`, axe and Lighthouse on the new pages (add them to `qa/routes.txt`).
5. **Review with Mohamed** on a local build (screenshots, desktop and phone, English and Arabic).
6. **Push, tag** (`v1.1.0`, ...), CHANGELOG line, **Deploy** Worker `dd`.
7. **After deploy:** check live titles and `/sitemap-index.xml`, resubmit in Search Console, update `docs/PLAN.md` and `docs/MEMORY.md`.

## 5. Navigation and linking per release
- Header grows only when pages go live: R1 adds Services (Validate, Build, Scale) and How we work; R2 adds Work and About; Launch-Ready Review stays a button-level offer until R3.
- Hub and spoke: home cards link to the service pages; each service page links to `/how-we-work`, its guide (R3) and `/book?type=clarity`; guides link back to the pillar and to one service page.
- No orphan pages: the `inbound-links` gate already enforces this.

## 6. Risks
- Arabic twins double the copy and review work per page; ship fewer pages per release rather than skip the twin.
- Do not switch a page on while its blocking decision is open (`context/11-open-decisions.md`); use the documented default.
- Redeploy is manual: every release ends with a Deploy and a live check.
