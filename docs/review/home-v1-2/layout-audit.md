# Home page layout audit (v1.2, Oct 18 evening build)

Method: Playwright + Chrome on the built `dist/` at http://localhost:4321/, widths 320, 360, 390, 430, 768, 1024, 1280, 1440, 1536, 1920 (height 800, DPR 1), plus 390 with reduced motion. Raw data: `data/m-*.json`, `data/extra.json`; scripts: `measure.mjs`, `data/*.mjs`. No source files were edited. Screenshots: `shots/`.
Caveat: the local static server (`qa/serve.mjs`) returned a 404 for `/` once during the run (transient); affected shots were retaken.

## 1. Per-width pass/fail

| Check | 320 | 360 | 390 | 430 | 768 | 1024 | 1280 | 1440 | 1536 | 1920 |
|---|---|---|---|---|---|---|---|---|---|---|
| Horizontal overflow (unclipped) | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Body text >= 14px, nothing < 12px | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Non-badge text at 13px (rule: small >= 14px) | fail | fail | fail | fail | fail | fail | fail | fail | fail | fail |
| Tap targets >= 44 (standalone) | fail | fail | fail | fail | fail | fail | fail | fail | fail | fail |
| Heading hierarchy H1 > H2 > H3 | fail | fail | fail | fail | fail | fail | fail | fail | fail | fail |
| Orphan single word in headings | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Measure 45-75ch (FAQ answers 79-83 at 1440+) | pass | pass | pass | pass | pass | pass | pass | fail | fail | fail |
| Equal card heights in grids | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Images with width/height (14 of 14 set) | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| CLS (budget 0.1) | 0.016 | 0.001 | 0.002 | 0.000 | 0.010 | 0.010 | 0.010 | 0.008 | 0.008 | 0.006 |
| Section padding on one rhythm | partial | partial | partial | partial | partial | partial | partial | partial | partial | partial |
| Content not stretched or lost | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Hero not clipped | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Anchor landing (heading clear of header) | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| Mobile menu opens without shift | n/t | n/t | pass | n/t | pass | n/a | n/a | n/a | n/a | n/a |

n/t = not tested; n/a = desktop nav. The 1280 run once showed CLS 0.135 while six browsers ran in parallel; a clean rerun gave 0.010 (source: hero, 0.01 at 768 and 1280).

Other measured facts:
- Header 65px (64 + border) below 1024, 73px from 1024; sticky. The mobile bottom bar is 65px (button 48px), 8% of an 800px viewport; with the header back on scroll-up it is 130px, 16%. Passes the under-68px target.
- In-page anchors land with the heading at 81px (390 and 768) and 89px (1440, 1920) from the top. The header hides on jump, so nothing is covered. `scroll-padding-block-start` is 80px (mobile) and 88px (desktop), with a negative `scroll-margin` that places the heading, not the section edge. Stream 3 fix verified: no doubled offsets.
- Hero height: 1497 (320), 1336 (390), 1294 (430), 1165 (768), 749 (1024), 720 (1280 to 1920). At 1536 and 1920 the hero is not clipped (`overflow: clip` hides only the 1088px-wide glow at 1024 to 1440, which is intentional); content stays in the 1216px container and is centred.
- Mobile menu: dialog is 100% x 100dvh, no layout shift (scrollWidth, document height, H1 position unchanged; `html` gets `overflow: hidden`).
- Horizontal bleed (the NJWAR device art, 1455px wide box at 1440 and 1723 at 1920) is clipped by its parent: no page scroll.

## 2. Section rhythm (padding-block, px)

| Section | 390 | 768 | 1440 | Token | Note |
|---|---|---|---|---|---|
| hero | 48 / 0 | 70 / 0 | 16 / 64 | custom | text centred vertically in 720px |
| pband (clients + map) | 48 / 40 | 48 / 40 | 48 / 40 | `--space-12` / `--space-10` | exception; not `--section-y-sm` (40 / 52 / 72) |
| why | 57 / 57 | 80 / 80 | 120 / 120 | `--section-y` | |
| services | 57 / 57 | 80 / 80 | 120 / 120 | `--section-y` | |
| how-we-work | 57 / 57 | 80 / 80 | 120 / 120 | `--section-y` | |
| work head (`.wh`) | 57 / 0 | 80 / 0 | 120 / 0 | `--section-y` top only | NJWAR chapter has 0 padding, so work is 120 + 616 + 120 + 662 |
| selected-work (EdTech) | 57 / 57 | 80 / 80 | 120 / 120 | `--section-y` | 120 + 420 card + 120 around the card |
| reviews | 57 / 57 | 80 / 80 | 120 / 120 | `--section-y` | |
| faq | 57 / 57 | 80 / 80 | 120 / 120 | `--section-y` | |
| cta | 80 / 80 | 111 / 111 | 168 / 168 | `--section-y * 1.3` | deliberate exception |

Gaps between sections are 0 (hairline borders only). Rhythm is consistent except hero, pband and the closer, which are deliberate. Section heights at 1440: hero 720, pband 709, why 496, services 918, way 766, work 174 + 616 + 662, reviews 1267, faq 851, cta 705.
Heading to content: `--stack-lg` (56 at 1440) holds on Services, Work, Reviews, FAQ.

Type scale at 1440 (H1 / H2 / H3): H1 59; H2 48 (Services, Work, Reviews, FAQ), 56 (Way), 36 (Why), 72 (closer); H3 32 (cards), 44 (NJWAR), 28 (EdTech). At 390: H1 41; H2 28, 28, 24, 36 (closer); H3 24, 32, 22.

Off-scale spacing found (few): hero grid gap 59px at 1440 (`.hero__wrap` row/column gap), hero padding-top 70px at 768, engagement card padding-top 31.5px at 768, FAQ/e-mail link padding 10.5px. Everything else is on tokens.

## 3. Findings (sorted by severity)

| # | Section / selector | Width(s) | Measured | Expected | Exact CSS fix (logical properties) | Sev |
|---|---|---|---|---|---|---|
| 1 | Reviews `.rv__proof a` ("Read our reviews on Clutch", `ProofChip.astro`) | all | 183x17 (390), 194x18 (1280+); standalone, so not an inline exempt | 24px minimum (WCAG 2.5.8), project rule 44px; Stream 3 fix #20 not applied here | `ProofChip.astro` `.proof-chip a`: add `display: inline-block; padding-block: var(--space-3); margin-block: calc(var(--space-3) * -1)` (44px hit area, no visual change) | P1 |
| 2 | Closer `.band--large .band__title` (`CtaBand.astro` L38) | >= 768 | H2 = 72px at 1440 vs H1 59px (64 at 1920); 36px vs 41px H1 at 390 | One dominant H1; H2 <= `--text-3xl` and below the H1 | Change to `font-size: clamp(2rem, 1.3rem + 2.6vw, 3.5rem)` (max 56) | P1 |
| 3 | Clients row `.pband__client span` (`ProofBand.astro`) | 1440, 1920 | "Restaurant procurement · Saudi Ar…" truncated with ellipsis (Jumlaty) | No lost content | `.pband__client span { white-space: normal; overflow: visible; text-overflow: clip }` and `.pband__client { flex: 0 1 21rem }` (the card then grows; keep 2 lines max) | P1 |
| 4 | Clients row alignment `.pband__clients` | >= 768 | Label "Teams we've worked with" starts at x=112 (container edge); cards start at x=240 (centred 3 x 312) and map facts return to x=112 | Left edges aligned on one grid | `.pband__clients { justify-content: flex-start; margin-inline: 0; max-inline-size: none }` or `display: grid; grid-template-columns: repeat(3, minmax(0, 1fr))` from 48rem | P1 |
| 5 | Why `.stmt__text` (id `why`, `Statement.astro` L28) | >= 1024 | 496px band, content in left 45% (right 55% empty; leaf area 24%); H2 36px is smaller than H3 NJWAR 44 | H2 not below H3; use the width (same as previous finding #15, still open) | `.stmt__text { font-size: clamp(1.75rem, 1.1rem + 2.1vw, 3rem); max-inline-size: 26ch }`; optionally `.stmt:not(.stmt__split) .container { display: grid; grid-template-columns: 7fr 5fr; column-gap: var(--space-16); align-items: end }` with support text in column 2 | P1 |
| 6 | Heading scale, Way `.stmt__text--display` | >= 1024 | H2 56px (Way) vs 48px (other sections) vs H1 59px | One H2 size (48) with the Way allowed one step up at most | `.stmt__text--display { font-size: clamp(1.75rem, 1.1rem + 2.1vw, 3rem) }` | P2 |
| 7 | Work heads: `.wh h2` 48px vs `.ch__name` 44px (`Chapters.astro` L87) | >= 1024 | ratio 1.09 | H3 about 0.67 x H2 (`--text-xl` 32) | `.ch__name { font-size: clamp(1.75rem, 1.3rem + 1.2vw, 2.25rem) }` | P2 |
| 8 | Footer links `.site-footer__nav a` (`Footer.astro` L82) | all | Work 31x44, FAQ 26x44, Terms 40x44 (390); 35, 29, 42 wide at 1440 | 44x44 (project rule) | `.site-footer__nav a { min-inline-size: 2.75rem; justify-content: center }` or add `padding-inline: var(--space-2)` | P2 |
| 9 | Header CTA `.site-header__actions .cta` | all | 95x40 (390), 178x40 (1440) | 44 hit area (`sm` rule: `::after` inset) | Verify `.cta--sm::after { content: ''; position: absolute; inset-block: -2px }` exists; the box measured 40 | P2 |
| 10 | Mobile menu logo `.menu-sheet__top a` (`MobileMenu.astro` L16) | < 1024 | 141x30 | 44px high | `.menu-sheet__top > a { display: inline-flex; align-items: center; min-block-size: 2.75rem }` | P2 |
| 11 | 13px text that is not a badge: `.ds__lane-title`, `.ds__rel-by`, `.ds__rel-demo`, `.ds__foot`, `.pband__legend`, `.sc__meta`, `.rv__label`, `.wf__checks li` | all | 13px (12 text blocks); tags/chips are badges and exempt | Small text >= 14px (`--text-sm`), 13px for badges only | Replace `--text-xs` with `--text-sm` in those rules (`HomeHero`/`DeliveryScene`, `ProofBand.astro` `.pband__legend`, `Showcase.astro` `.sc__meta`, `Reviews.astro` `.rv__label`, `WayFlow.astro`) | P2 |
| 12 | FAQ answers `.faq__a p` (`FaqSplit.astro`) | >= 1280 | 733px wide, 63-83 characters per line at 18px | `--measure-prose` (about 68ch) | `.faq__a p { max-inline-size: var(--measure-prose, 68ch) }` | P2 |
| 13 | Hero sub `.hero__sub` | 390 | "Build takes 8-" / "12 weeks" splits the number range | No break inside a range | Wrap "8–12" in `white-space: nowrap` (copy file `home.ts`, markup span) or add `text-wrap: pretty` | P2 |
| 14 | Hero height `.hero` | 320-430 | 1497 / 1336 / 1294px (1.6 to 1.9 screens); CTA ends at 618px | Previous finding #19; still about the same | `HomeHero.astro`: from < 40rem hide the second AI row and `.ds__foot`, or `.ds__item:nth-child(n+3) { display: none }` below 40rem (saves about 150px) | P2 |
| 15 | Hero board title `.ds__bar` ("your-product / sprint-bo…") | 390 | filename ellipsis | Fits or wraps | `.ds__file { overflow-wrap: anywhere; white-space: normal }` or shorten to "sprint-board" | P2 |
| 16 | Clients grid, 2 columns | < 768 | 9 cards: 4 rows of 2 plus "Yawmy Care" alone; pband 861px tall at 390 | No lone item | `.pband__client:last-child:nth-child(odd) { grid-column: 1 / -1 }` | P2 |
| 17 | Work, NJWAR `.ch__art` laptop | 390, 1440, 1920 | Laptop cut at the right edge; Arabic hero text clipped; 100px blank below the art at 390 (previous #18) | Balanced composition | `Chapters.astro`: `.ch--web1 .ch__laptop { inset-inline-end: 0; inline-size: min(100%, 56rem) }` below 64rem; from 90rem cap with `max-inline-size: calc(var(--container) / 2 + 12rem)` | P2 |
| 18 | Services head `.en__head` | >= 1024 | `align-items: end` puts the H2 baseline 13px below the lead's last line; lead 4 lines vs H2 2 lines | Shared baseline | `.en__head { align-items: start }` or `align-items: last baseline` | P2 |
| 19 | Reviews `.rv__featured` | >= 1024 | sticky `inset-block-start: 6rem` (96px) hard-coded; empty 700px under the card until the notes end; proof chip sits under column 1 of notes only | Token: `calc(var(--header-h) + var(--space-4))` (88) | `.rv__featured { inset-block-start: calc(var(--header-h) + var(--space-4)) }`; move `.rv__proof` into the first column (`.rv__grid` row 2) | P2 |
| 20 | Header + bottom bar | 390 | 65 + 65 = 130px of 800 (16%) on scroll-up; 8% bar alone | under 68px bar (met) | Optional: hide the bar while `header` is visible | P2 |
| 21 | Hero grid `.hero__wrap` | 1440 | `gap: 59px` (not on scale) | `--space-16` (64) or `--grid-gap` | `.hero__wrap { column-gap: var(--space-16) }` | P2 |
| 22 | Hero/Engagement paddings | 768 | hero padding-top 70px; `.en__card` padding-top 31.5px | `--space-16` / `--space-8` | `.hero { padding-block-start: var(--space-16) }`; `.en__card { padding-block-start: var(--space-8) }` | P2 |
| 23 | Scrollbar on menu open | classic scrollbar devices | `html { overflow: hidden }` on open; headless has overlay scrollbars so no shift measured | No shift with a 15px scrollbar | `html { scrollbar-gutter: stable }` in `base.css` | P2 |
| 24 | Hero H1 comment vs result | 1440, 1920 | Source comment says capped at 56px; measured 59.2 (1440) and 64 (1920) | Match the documented cap | Confirm the intended cap in `HomeHero.astro` L61/L85 and fix the comment or the clamp | P2 |
| 25 | Engagement card H3 links | all | link box 32-42px high; stretched `::after` covers the card | ok | none (stretched link, whole card is the hit area) | pass |
| 26 | Pband `border-block-start` / reviews | all | Notes columns end 210px apart at 1440 (balanced columns) | none | none | pass |

No P0 found: no horizontal overflow at any width, no clipped hero, no overlap with the header after anchor jumps, no layout shift on menu open, all images have width and height, no card height mismatches.

## 4. Screenshots (`docs/review/home-v1-2/shots/`)

- `full-390.png`, `full-1440.png` (full page)
- `hero-1920.png` (hero at 1920x1080, not clipped; clients label vs cards alignment visible)
- `hero-390.png` (long hero, ellipsis in board title, range break)
- `pband-1440.png` (findings 3, 4)
- `why-1440.png` (finding 5), `services-1440.png` (finding 18), `work-1440.png` (findings 7, 17), `reviews-1440.png` (finding 19), `cta-1440.png` (finding 2)
- `menu-open-390.png`, `sticky-bar-390.png`

Note: in element screenshots the "Skip to content" link looked visible mid-page at 390; this is a capture artefact (it is `position: fixed` at top -91px in the real viewport at every scroll position).
