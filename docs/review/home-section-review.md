# Home page: section-by-section review and fixes

Date: 2026-10-16 · Scope: `/` (header, 10 sections, footer) · Status: **awaiting Mohamed's approval**, then a dedicated clean-up commit.

## Method
- Each section captured and measured at **320, 375, 768, 1024 and 1440px** with a scripted audit: section height, padding, container offset, unclipped overflow, text under 13px (06 `--text-xs` floor), tap targets under 24px (WCAG 2.5.8).
- Each finding reviewed against the design-critique skill's frameworks (Nielsen heuristics, Laws of UX: Prägnanz, Similarity, Proximity, Fitts) and 06 design-system tokens.
- Fix, re-capture at the same widths, then one commit per section.
- Final pass: every section re-audited (0 findings), 320/768 overflow on 14 pages (0), axe on 8 pages at 1440/768/375 with and without reduced motion (0 violations, 0 console errors), `npm run qa` (0 errors, 0 blockers, 0 minor), Lighthouse mobile (perf 99, a11y/SEO/best practices 100, LCP ≤ 1.81s, CLS ≤ 0.032).

## Findings and fixes

| # | Section | Finding (where) | Principle | Fix | Commit |
|---|---|---|---|---|---|
| 1 | Hero / delivery scene | Base `.ds__items { display: grid }` came after the wide-container `display: contents` rule and won, so the subgrid rows never applied: lanes lined up by coincidence and 4 empty grid rows left ~44px dead space under the board (≥1024) | Code correctness, Prägnanz | Base rule moved above the override; rows now truly shared | acf4559 |
| 2 | Hero / delivery scene | Mock-UI labels at 11–12px (all widths) | 06 type floor 13px | `--text-xs` everywhere | acf4559 |
| 3 | Hero / delivery scene | Task text wrapped to 3 lines on phones; release status orphaned | Prägnanz | State words hidden <34rem (tick and progress show state); release stacks; seal spans card | acf4559 |
| 4 | Hero / delivery scene | "Signed off by a senior engineer" broke at 768 | Visual hierarchy | One-row release bar only from 52rem | acf4559 |
| 5 | Hero | Pill broke as two-line pill at 320; sub-line split "AI-/accelerated" at 768; buttons ragged widths on phones | Similarity, Fitts | Balanced rounded pill; sub capped 38rem + balance; equal full-width buttons <30rem | acf4559 |
| 6 | Proof band | Code sliced the 4 facts to 3, dropping "Texas, USA and Alexandria, Egypt" | Copy rule (03 §2.3) | All four rendered | 793ac2c |
| 7 | Proof band | Single row squeezed facts to 4–5 lines at 1024/1440 | Prägnanz | 2×2 facts; rating beside the grid from 64rem | 793ac2c |
| 8 | Proof band, footer | Clutch link 22px tall | WCAG 2.5.8 | 24px minimum target | 793ac2c, 96d43b5 |
| 9 | Agile v2 | AI rows (mono 14px) and senior rows (sans 16px) drifted 2–15px apart across panels | Similarity, alignment | Fixed 3.25rem row rhythm | f923ec2 |
| 10 | Agile v2 | 32px panel padding on 320–375 | Proximity | `clamp(20px, 1rem + 2vw, 32px)` | f923ec2 |
| 11 | Lifecycle | Four 9rem plates stacked → 1,640px section on phones | Prägnanz | 6.5rem plates <48rem (1,480px) | 5e3c3f7 |
| 12 | Lifecycle, Agile, Why | Two section-label styles ("//" muted vs blue text) | Nielsen H4 | One style: mono, muted, blue "//" | 5e3c3f7 |
| 13 | Engagements | 22rem min height on stacked cards left ~120px empty bands at 768 | Prägnanz | Min height only when side by side (≥56rem) | 28ed8a5 |
| 14 | Engagements | ~90-character lines in single-column cards at 768; "Other ways in" links on different baselines | Readability, alignment | Body 52ch; links pinned to row bottom | 28ed8a5 |
| 15 | Capabilities | Long service names wrapped into two-line pills on phones; loose header spacing | Similarity | Ruled list <48rem, pills above; tighter header, 40px glyphs on phones | 0cf105a |
| 16 | Case metric | Metric card centred against a taller copy column at 1024+ | Alignment | Top-aligned; sticky under the header from 64rem | 0cf105a |
| 17 | Why | No top hairline (every other section has one) | H4 consistency | Statement sections get the hairline; proof band drops its bottom border to avoid a double line | 96d43b5 |
| 18 | FAQ | One-word last lines ("safe?", "over?") at 375 | Readability | `text-wrap: pretty` on questions | 96d43b5 |
| 19 | Footer | Blue-950 footer read as a different system; 48px link pitch; 3 + 1 column wrap at 1024; star alone on a line on phones | H4, Proximity | Ink footer (06 amended first); 32px rows; 2×2 then 4 columns at 80rem; inline star | 96d43b5 |
| — | Header, closer | No issues at any width | — | — | — |

## Not changed (deliberate)
- Copy: no wording changes; every string still comes from `03-copy.md`.
- Header: the "Book a call" button hides below 360px (logo + menu only), as specified in 04 §3.2.
- Skip link: visible in some element screenshots only because of how full-element captures resize the viewport; it stays hidden until focused.

## Next, after approval
A dedicated clean-up commit: remove unused v1 home components (ProblemFigures, OfferSplit, PathTiles, WorkspaceScene and its copy file, PathCards if unused), unused UI strings and CSS, and scan for leftover console logs. Then `npm run qa` and the browser audit again.
