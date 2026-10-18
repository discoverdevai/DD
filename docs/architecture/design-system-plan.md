# Design system and code clean-up plan (Oct 18, 2026)

**Goal:** one source of truth for how discoverdev.ai looks and is built, so new pages are faster and consistent, and duplicated code goes away. **No visible change** to the live site during the clean-up; every step is checked against the current build.

**Builds on:** `docs/architecture/cleanup-plan.md` (Oct 16 architecture review). This plan adds the design-system layer and what changed since (reviews, guides, showcase, chapters, /how-we-work).

**Skills used:** design-skills:design-systems (inventory, tokens, specs, governance), agent-protocols:code-simplification and code-review (safe refactors), taste-frontend house rules, accessibility-audit (axe per step).

## Where we are (inventory, Oct 18)
- **Tokens:** `context/06` → `scripts/build-tokens.mjs` → `src/styles/tokens.css` (294 lines). Good base: reference colours, semantic roles per surface, spacing, type, radii, motion. Gaps: no tokens for cards, tags, device frames, section light; some raw colours in components.
- **Components:** 67 `.astro` files. Two are unused (`home/CaseMetric`, `home/WorkGrid`, replaced by Showcase and Chapters).
- **Repeated code (counts across components):**
  - Section shell (`padding-block: section-y` + top hairline): 12
  - Section title size `clamp(1.75rem, 1.2rem + 2.2vw, 3rem)`: 11
  - Section label (heading font, bold, small, blue): 6+ (`rv__label`, `sc__label`, `gd__label`, `hw__label`, `stmt__label`, `tl__eyebrow`…)
  - Stretched-link card (`a::after { inset: 0 }` + focus ring on the card): 8
  - Pill/tag styles: 16 files, 4 slightly different looks
  - Card surface (raised ink, hairline border, radius): ~10 variants
  - Device frames: laptop/phone/browser/tablet in `Chapters` and `ProjectVisual`, window chrome in `DeliveryScene` and `ServiceGlance`
  - Plus everything in the Oct 16 list (horizon glow band, play-once script, JSON-LD builders, shared types).

**Maturity:** level 2 ("emerging": shared tokens, no documented component library). Target: level 3 by end of this work.

## The design system (what we will have)
1. **Tokens (3 tiers), still generated from 06:** reference (palette, scale) → semantic (text, surface, action, hairline per surface) → component tokens for the new shared patterns (`--card-*`, `--tag-*`, `--device-*`, `--section-light`). No raw hex or magic numbers in components (enforced by `token-lint`).
2. **Shared patterns, each one component or one class, with a spec in 06:**
   - `SectionHead` (label + title + optional lead + optional action link) — replaces 11 copies
   - `Section` shell already exists; every section uses it (id, surface, labelledby)
   - `Card` + `.card-link` (stretched link, focus on card, hover) — replaces 8 copies
   - `Tag` (one style, variants: stage / neutral / mono) — replaces 4 looks
   - `Device` (laptop, phone, browser, tablet) — one component for Chapters, ProjectVisual, DeliveryScene, ServiceGlance
   - `CtaBand` absorbs `Closer` and the /launch-ready booking band
   - `lib/play-once.ts`, `faqPage()` / `service()` JSON-LD helpers
3. **Folder structure** from the Oct 16 plan: `layout/ ui/ blocks/ sections/ scenes/` + feature folders.
4. **Living reference page** `/design-system` (noindex, not in nav or sitemap): renders every token and pattern from the real components, with do / don't notes. Built from code, so it cannot drift.
5. **Docs:** `context/06` rewritten as the spec (purpose, anatomy, variants, states, accessibility, tokens used) for each pattern; `docs/MEMORY.md` + PLAN updated.
6. **Governance (light, for a two-person team):** new UI starts from an existing pattern; a pattern is added only when used in 2+ places; `token-lint` + `dist-diff` gates in `npm run qa`; quarterly check of the reference page against the site.

## Phases (each = one commit, each passes QA, functional, events, axe; visual phases also screenshot compare at 1440 and 390)
| # | Phase | Visible change? | Gate |
|---|---|---|---|
| 0 | Baseline: copy of `dist`, screenshots of all 21 pages, `scripts/dist-diff.mjs` (text, headings, ids, CTA ids, JSON-LD) | No | — |
| 1 | Dead code: delete CaseMetric, WorkGrid, unused props/icons/styles; i18n leaks; shared types; JSON-LD helpers; play-once | No | dist-diff identical |
| 2 | Folder moves + merge the two Breadcrumbs | No | dist-diff identical |
| 3 | Tokens: add component tokens in 06, rebuild tokens.css, replace raw colours, add `token-lint` | No (same values) | screenshots identical |
| 4 | Shared patterns one at a time: SectionHead → Card/card-link → Tag → Device → CtaBand | Pixel-level only | screenshot compare, axe |
| 5 | Section contract (id, surface, labelledby) and naming (HeroV2 → HomeHero) | No | dist-diff |
| 6 | `/design-system` reference page + 06 specs | New private page only | QA, axe |
| 7 | QA tooling dedupe, `utm.test.ts`, docs and memory | No | full QA |

**Never changes in a clean-up:** copy wording, CTA ids and `data-*` hooks, routes and redirects, JSON-LD output, anchors, heading levels, `_headers`, classes QA scripts rely on.

## Decisions for Mohamed
1. Start with phases 0–3 (safe, invisible), then show the reference page before phase 4.
2. Reference page private at `/design-system` (noindex) — or only as a local preview page.
3. Figma library: later, once a designer joins (tokens can be exported then).
