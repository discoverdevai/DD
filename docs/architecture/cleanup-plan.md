# Clean-up and restructure plan (architecture review, 2026-10-16)

Source: read-only architecture review (Plan agent) of `src/`, `scripts/`, `qa/`, checked against CLAUDE.md, 07 §5/§16 and 06 §0. Status: proposed. Phases 0–1 are safe any time; Phases 2–4 move files and shared CSS, so each needs a dist diff and screenshots.

## Target folder structure
```
components/
  layout/    Header, MobileMenu, Footer, StickyBookBar
  ui/        CtaLink, CtaTerms, Icon, Logo, Eyebrow, LayerChip, InlineLink, ProofChip, Breadcrumbs (merged), Window, SectionHead
  blocks/    CardGrid, CheckList, FitList, Steps, Faq, ProofList, AgileSplit, Pillars
  sections/  Section, PageHero, HomeHero (was HeroV2), ProofBand, Statement, ProcessTimeline, Engagements, Capabilities,
             CaseMetric, FaqSplit, CtaBand (absorbs Closer and the /launch-ready #book band), JourneyStepper, WeekTrack,
             DecisionBoard, SquadLoop, TermsDoc
  scenes/    DeliveryScene, RunPanel, ServiceGlance, ReviewSnapshot
  insights/ book/ quiz/ legal/ partners/ about/   feature folders
```
Why: `home/` holds components six inner pages use (FaqSplit, Statement); `ui/` mixes primitives, blocks and full sections; `services/` mixes sections, a block and a hero figure; Breadcrumbs exists twice (the work copy hard-codes its aria-label).

## Duplication to remove
| Pattern | Where | Fix |
|---|---|---|
| Dark card gradient + paper override | Engagements, ProofList, CardGrid, launch-ready, work/index, case study | per-surface `--card-bg/--card-border/--card-rule` tokens + `.card` |
| Section title clamp | 5 components besides `.section-title` | `.section-title` + `ui/SectionHead` (replaces `.cap__head`, `.en__head`) |
| `//` mono eyebrow | 6 places | `<Eyebrow size="xs">` |
| Hero grid + radial light | HeroV2, PageHero, case study | `.bg-lines` with a colour variable + `.hero-light` |
| Horizon glow band | Closer, CtaBand, /launch-ready #book | CtaBand with `size`/`position` + slot; delete Closer |
| Window chrome | DeliveryScene, ServiceGlance | `ui/Window` |
| Mono tag, pill, live dot, track node, mono label | 8 / 2 / 8 / 3 / 40 | `.tag`, `.pill`, `.dot-live`, `.node`, `.label` in `styles/patterns.css` |
| Stretched-link card | Engagements, ArticleCard, work/index | `.card-link` |
| One-time sequence script | DeliveryScene, RunPanel, ServiceGlance | `lib/play-once.ts` |
| FAQPage + Service JSON-LD | 6 pages | `faqPage()` and `service()` in `lib/seo.ts` (byte-identical output) |
| Chip type, link type | 5 + 5 redefinitions | export from LayerChip and `data/routes.ts` |
| Chip labels, service UI labels | repeated in 5 copy files | shared `layers` and `serviceUi` copy objects (body copy stays verbatim) |

## Dead code and leaks
- ProcessTimeline: unused `chip` prop, default `vigs`/`id`, the `sign` vignette, a dangling `counter-reset`.
- CardGrid: `cols` 2/4, `headingLevel`, `index`, the `icon` branch unused; `base.css` reaches into `.item__body`.
- Icon: `lock`, `credit-card`, `label` prop unused. `base.css` `.display` unused. `WEBSITE_ID` export unused; `deriveChannel` has no test (07 §5 lists `tests/unit/utm.test.ts`).
- QA: `qa/check-dist.mjs` re-implements `scripts/lib/dist.mjs` and overlaps jsonld-check and inbound-links; `scripts/token-lint.mjs` (06 §0.7) is missing; i18n-gate has no unused-key pass.
- Hard-coded strings outside the copy layer: `work/index.astro` "Case studies", `launch-ready.astro` "day 0 to day 5", `work/Breadcrumbs`, TermsDoc "DiscoverDev".
- Raw colours 06 §0.7 forbids: `#2C59C1` (WeekTrack), `rgb(254 254 254 / x)` (JourneyStepper), `rgb(3 41 147 / .25)` (TermsDoc); add `--color-title` and `--color-line-tint` tokens.

## Consistency rules
- Every section component takes `id` and `surface`, renders through `Section`, and uses `${id}-title` (add a `labelledby` prop).
- Sections and blocks take props from the page; scenes may import their own copy.
- One surface vocabulary (`ink | raised | paper | alt | inverse`); Statement's `navy` becomes `inverse`; TermsDoc becomes `alt`.
- Readable block prefixes (`.journey`, `.week-track`, `.terms-doc`…), `HeroV2` → `HomeHero`, one `idx()` helper (no "010").

## Phases (each passes `npm run qa`; from Phase 3 also functional suite + axe)
0. Prep: baseline `dist` copy, screenshots, `scripts/dist-diff.mjs` (JSON-LD, CTA ids, text, outline, ids; ignores Astro hash classes).
1. Zero-visual: dead code, stale comments, i18n leaks, builders, `play-once.ts`, shared types and labels.
2. Moves (one PR per folder), merge Breadcrumbs. dist-diff must be identical.
3. Shared CSS patterns, one per PR, with screenshot compare.
4. Surface tokens via 06 → `build-tokens.mjs`; add `token-lint.mjs`.
5. Section contract and naming.
6. QA tooling dedupe, `utm.test.ts`.

**Never change in a clean-up:** copy wording, `ctaId`/`data-cta-*`, routes and `_redirects`, JSON-LD output, anchors (`#agile-v2`, `#faq-*`, `#book`, `#pricing`, `#cta`), heading levels, script hooks (`data-*` used by scripts), classes used by QA scripts (`.pband`, `.site-header__menu`, `.services-panel__label`), `tokens.css` by hand, `_headers`.
