# Code clean-up plan, round 2 (2026-10-21)

Goal (Mohamed, Oct 21): find unused, unnecessary and duplicated code and content, and leave a clean structure. **No behavior change**: every phase must leave the built site identical (same text, JSON-LD, CTA ids, outline) and pass `npm run qa`, the functional and events suites. Round 1 (`cleanup-plan.md`, done Oct 18) restructured the folders and merged duplicate components; this round starts from what V1.0 / V1.0.1 actually ships.

## What the scan found (Oct 21, measured, not guessed)
| Area | Finding |
|---|---|
| Components | 63 `.astro` components; 33 are used by pages that are live in V1.0, **30 are used only by switched-off pages** (about, build, scale, validate, partners, launch-ready, launch-check, how-we-work, work, insights). None is truly dead: every component has an importer. |
| Pages | 14 pages are off in V1.0 (`routes.ts`, removed from `dist/` by the `release` integration). They are the V1.1 and V1.2 releases, so they stay. |
| Copy files | 20 files in `src/content/copy/en/`; 4 are reached by no live page (`design-system.ts`, `journey.ts`, `run-panel.ts`, `snapshot.ts`), all used by off pages or the private design-system page. |
| Libraries | `lib/quiz-app.ts`, `lib/quiz-score.ts`, `ArticleLayout`, `content.config.ts`, 4 articles: only for V1.2. Keep. |
| Dependencies | All 14 dependencies are used (`@astrojs/check` and `typescript` are used through `astro check`). `posthog-js` appears once: check it is only on the analytics path. |
| Unreferenced assets | `assets/logo/` source variants (5 files), `assets/clients/mono/ctc.png` (CTC card is hidden), `assets/projects/.gitkeep`. |
| Local clutter (not in git) | `dist-wip/` 3.7 MB, `dist-mock/` 2.0 MB (preview builds), `docs/review/` **98 MB** of screenshots on disk (only 0.9 MB is tracked). |
| Tracked clutter | `.claude/skills/taste-frontend/library/*.json` about 1.3 MB of third-party skill data; `docs/review/home-v1-2/data/*.json` (layout audit raw data); `qa/reports/` old reports. |
| Config duplication | Headers and redirects exist three times: `public/_headers`, `public/_redirects`, `vercel.json` (kept in step by `scripts/vercel-parity.mjs`). Hosting is Cloudflare (final, Oct 18). |
| Script duplication | `qa/check-dist.mjs` re-implements parts of `scripts/lib/dist.mjs`; `scripts/move-components.mjs` is a one-time migration script; `scripts/brand-assets.mjs`, `build-tokens.mjs`, `screens.mjs`, `dist-diff.mjs` need a "who runs this and when" line. |
| Docs duplication | `context/03-copy.md` is 150 KB and has dated "Oct 18 / Oct 21 decision" sections appended at the end that restate or override earlier lines. `docs/MEMORY.md` and `docs/PLAN.md` repeat the same decisions. |
| Copy duplication | The same ideas repeat across sections (Way described in hero board, Way section, FAQ; "30 minutes, no pitch" in hero, /book, FAQ); CTA labels have three variants; the rating line appears in hero, reviews and footer. Some repetition is deliberate (CRO); the rest is listed in the copy audit (`docs/review/home-v1-2/copy-audit.md`). |
| Dead branches | `ProofBand` still contains the project-cards fallback (used only when fewer than 4 clients have consent); `Showcase` and `ProjectRows` both render project tiles; `Chapters` holds a preview-only `upscend` chapter and `hold` logic for preview builds. |
| Hints | `astro check` reports 73 hints (unused variables and imports). |

## Phases (each ends with `npm run check`, `npm run qa`, `node qa/functional.mjs`, `node qa/events.mjs`, and `node scripts/dist-diff.mjs` against a baseline copy of `dist/`; any difference is a bug, not an update)

### Phase 0: baseline (30 min)
- Copy `dist/` to `dist-baseline/` (ignored). Record screenshots at 390 and 1440 (`scripts/screens.mjs`).
- Work on a branch `cleanup-r2`; merge only when all gates are green.

### Phase 1: safe deletes and ignores (1 h, no code risk)
- Delete local `dist-wip/`, `dist-mock/`; add them to a `npm run clean` script.
- Move `docs/review/**` images out of the working folder into a zip kept outside the repo (or `docs/archive/`, git-ignored); keep the written reports.
- Remove unreferenced assets after checking each: `assets/logo/source/*`, `assets/clients/mono/ctc.png`, `.gitkeep`.
- Remove `scripts/move-components.mjs` (one-time). Remove raw JSON under `docs/review/home-v1-2/data/`.
- Fix the 73 `astro check` hints (unused imports and variables). Mechanical.

### Phase 2: dead branches (2 h)
- `ProofBand`: delete the project-cards fallback and its CSS once the client row is final (needs a go from Mohamed: it is the safety net if consent is withdrawn).
- `Chapters` / `projects.ts`: keep `hold` (it protects consent), but move the preview-only `upscend` chapter and the `SHOWCASE_MOCK` switch in `index.astro` into one helper (`lib/preview.ts`) so pages do not read `process.env` directly.
- Merge `Showcase` rail tiles and `ProjectRows` tile markup into one `ProjectCard` component (same data, two layouts).
- Remove unused icon names, props and CSS rules found by a pass with the CSS coverage run on `/` (Playwright `page.coverage`), checking each rule against the off pages before deleting.

### Phase 3: duplication (half a day)
1. **Config:** generate `vercel.json` from `_headers` and `_redirects` with a script, or drop `vercel.json` and `scripts/vercel-parity.mjs` (decision for Mohamed: Cloudflare is final).
2. **QA scripts:** one shared `scripts/lib/dist.mjs` used by `check-dist`, `jsonld-check`, `inbound-links`, `cta-ids`.
3. **Copy constants:** one `shared` copy object for the repeated strings (clarity-call terms line, rating line, CTA labels, "Book a call about X"); body copy stays verbatim, edit `03` first.
4. **CSS:** only the patterns still repeated after round 1 (card gradient, section padding, meta chip) go into `styles/patterns.css`; no new tokens.
5. **i18n:** add the missing "unused key" pass to `scripts/i18n-gate.mjs` (stale keys like the removed `strip.pause` should fail the gate).

### Phase 4: structure (half a day, after Phase 3)
- Group by release so the shipped surface is obvious without moving files around randomly: keep folders by role (`layout`, `ui`, `blocks`, `sections`, `scenes`) and add `scripts/release-map.mjs` that prints, from `routes.ts`, which components and copy files each release needs (so nobody deletes a V1.1 component by mistake). Write the output to `docs/architecture/release-map.md`.
- `src/pages/design-system.astro` and `styles/ds-swatches.css` into a `src/dev/` area that the build excludes by default (already removed from `dist/`).
- `src/content/copy/en/`: one file per page stays; move shared strings to `shared.ts`; add a header comment to each file naming its `03` section.
- Name check: one prefix per block, one `id`/`labelledby` convention (already in the round-1 rules); list exceptions.

### Phase 5: docs and content (2 h)
- `context/03-copy.md`: fold the appended dated decision sections into the sections they change (one pass, then delete the appendix); keep a short "Decision log" table with date, change and section.
- `docs/PLAN.md` and `docs/MEMORY.md`: the plan has status only, the memory has decisions only; remove repeated rows.
- `docs/architecture/`: mark `cleanup-plan.md` done and link this plan.
- `.claude/skills/*/library/*.json` (3.3 MB, third-party data): decide whether to keep in the repo or install per machine (Mohamed's call; the skills README lists them).

### Phase 6: guard rails (1 h)
- Add `knip` (unused files, exports, dependencies) as a dev dependency **after Mohamed approves a new dependency**, run in CI as a warning first.
- Add `npm run clean` and `npm run release-map` to the README. Unit tests for `deriveChannel` and the rail script's `step` logic.

## Order and effort
Phase 0 → 1 → 2 → 3 → 4 → 5 → 6. About 2 working days in total. Phases 0 to 2 can start now; Phases 3 and 4 touch many files, so they go on the branch and are merged once, after a full QA run (functional, events, axe, Lighthouse, and the 10-width layout check).

## Decisions needed from Mohamed
1. Drop `vercel.json` (Cloudflare is final) or keep generating it?
2. Keep the project-cards fallback in `ProofBand`, or delete it?
3. Keep third-party skill data in the repo (`.claude/skills/*/library`)?
4. OK to add `knip` as a dev dependency?
5. OK to archive `docs/review/**` images outside the repo?

## Risks
- Deleting code used only by a later release: mitigated by the release map and by never deleting a component with an importer without checking `routes.ts`.
- Text drift while merging copy constants: mitigated by `dist-diff` (text, JSON-LD, outline, CTA ids) which must report no difference.
- Visual regressions in CSS clean-up: mitigated by screenshots at 390 and 1440 before and after.

## Progress (Oct 21, branch `cleanup-r2`)
Decisions (Mohamed): 1 drop `vercel.json`; 2 keep the ProofBand fallback; 3 keep skill data in the repo; 4 add knip; 5 archive `docs/review` images.
- **Phase 0 done:** baseline build kept outside the repo (`Desktop/Discoverdev-archive/dist-baseline`); every phase is checked with `node scripts/dist-diff.mjs <baseline> dist` (result after each step: 6 pages identical).
- **Phase 1 done:** `vercel.json`, `scripts/vercel-parity.mjs` (and its test gate), `scripts/move-components.mjs`, raw layout-audit JSON removed; `dist-wip`, `dist-mock` deleted; 364 review images (97 MB) archived to `Desktop/Discoverdev-archive/docs-review-images-2026-10-21.zip` (note in `docs/review/ARCHIVE.md`); the 73 `astro check` hints are gone (they came from preview builds inside the repo folder; the 2 real ones in `ProofBand` are fixed: unused import and a leftover loop wrapper). `astro check`: 0 errors, 0 warnings, 0 hints.
- **Phase 2 partly done:** preview switches (`SHOWCASE_MOCK`, `LOGO_MOCK`) now live in one file, `src/lib/preview.ts` (also holds the home chapter list). The ProofBand fallback stays (decision 2). Not done yet: merging `Showcase` and `ProjectRows` tile markup into one `ProjectCard` (the work page is off in V1.0, so it needs a V1.1 preview build to check).
- **Phase 6 started:** `knip` added (`npm run knip`, report only, config in `knip.json`). First run found one unused file (`Guides.astro`, kept on purpose: it returns on home in V1.2, so it is listed in `knip.json`), 4 unused exports and 9 unused exported types; the exports were made private. Knip is clean now.
- **Left for later:** Phase 3 (shared copy constants, QA script merge, i18n unused-key pass), Phase 4 (release map, `src/dev/`), Phase 5 (fold the appended decision sections in `03-copy.md`, trim PLAN/MEMORY repeats).

