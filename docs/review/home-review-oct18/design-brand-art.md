# Home review, Oct 18: art direction, design and brand

Method: every section screenshotted at 1440 and 390 (reduced-motion state, images loaded), read against `context/01-brand.md` and `context/06-design-system.md` (§0 Signal amendments, §1 Avoid list). Page height: about 13,200 px desktop (14.6 screens) and 19,000 px mobile (22 screens).

## Verdict
The home page has a real identity now: one ink canvas on the brand blue hue, one signature idea (machine speed, human sign-off) carried by the hero RunPanel, the chalk, AI draft, signed and live cards, the green sign-off marks, and the device chapters. It reads as a senior product studio, not a template. The weaknesses are rhythm and repetition, not taste: twelve dark sections in a row, five four-up card rows, two near-identical "four steps" sections back to back, and several places where the site and `06` now disagree.

| Dimension | Score | Why |
|---|---|---|
| Brand fit (colour, type, voice of visuals) | 8.5 / 10 | Tokens used consistently, mono only for the machine layer, green mostly for sign-off. |
| Art direction | 8 / 10 | Hero and chapters are strong; the rest is clean but quiet, and the two illustration styles (chalk sketches vs. chart drawings) do not match. |
| Layout and rhythm | 6.5 / 10 | One surface for 12 sections, five 4-up rows, ragged grids in two places. |
| Consistency with `06` | 6 / 10 | Documented rules and the built page have drifted (list below). |
| Responsive | 7.5 / 10 | Works at 390, but the proof band is about 900 px of stacked cards on phones. |
| Accessibility (visual) | 9 / 10 | axe clean, focus rings, reduced motion respected. Tags are 13 px mono: fine, but the smallest text on the page. |

## What works (keep)
- Hero: the RunPanel makes the offer visible in 5 seconds (AI rows "drafted", senior rows "approved", release "signed off by a senior engineer"). The H1 is large, with a short sub and one filled button.
- One filled button per viewport in most sections; secondary actions are text links.
- Chapters (NJWAR, Yawmy): real screens on 3D devices read as proof, unlike generic mockups.
- The navy "Why" band with the brand arrow watermark is the one rhythm break and the one place the brand mark appears as a graphic.
- Closing band: centred, one button, the terms line, a horizon glow. It ends the page cleanly.
- Real dotted map with client-country pins: memorable and honest (countries only).

## Findings by section
| # | Section | Finding | Severity | Fix |
|---|---|---|---|---|
| 1 | Hero | "a live product" is a tinted word inside the H1. `06` §1 lists "one accent word coloured inside a headline" under Avoid. Hero aurora and grid glow are also on the old Avoid list ("Glow: still avoided", §0.1). | Low | Decide: keep the accent and update `06`, or set the H1 in one colour. I would keep it and update `06`. |
| 2 | Hero (mobile) | The product scene sits below the CTA and trust line, about 640 px down; first screen shows copy only. | Low | Fine for LCP; consider a 3-row peek of the scene above the fold. |
| 3 | Proof band, desktop | Client cards sit in an uneven 4 / 3 / 2 grid with orphan cards (in the static state). One subtitle is cut with an ellipsis ("Restaurant procurement • Saudi Ar…"). | Medium | Use a 5 + 5 grid or a single slow row; shorten "Saudi Arabia" to fit or let the line wrap. |
| 4 | Proof band, mobile | Ten cards stacked, about 900 px, before the facts and map. It is the longest single block on the phone page. | Medium | Two-column grid of logo plus name only, or one swipe row with a visible edge. |
| 5 | Proof band | Logo discs have inconsistent internal padding (filled logos such as Jumlaty and Zest vs. line logos on white). Rushr appears as a client while its project is held (D-07). | Low | Normalise inner padding; confirm that showing the Rushr logo is intended (logo approved, screens not). |
| 6 | How we work + Lifecycle (sections 3 and 4) | Two consecutive four-step card rows: "Discover, AI drafts, A senior signs, Live" and then "Discover, Plan, Build, Ship & Stay". Different illustration styles (chalk drawings vs. chart graphs), same content idea, back to back. This is the biggest repetition on the page. | High | Merge into one section: keep the chalk/draft/sign/live visual as the single "how", move frameworks and timings to /how-we-work. Saves about 1,100 px. |
| 7 | Engagements | Three path cards plus two "other ways in" cards. Clear, but the two lower cards have uneven vertical alignment of the link (the Partners card text and link sit lower than the Review card). | Low | Align link baselines; same card height. |
| 8 | Capabilities | One bordered panel with four columns of lists. Dense but tidy; no visual relief, no evidence object. | Low | Fine. If shortening the page, this is the safest section to cut to a single line plus link. |
| 9 | Chapters | About 1,800 px for two projects (the third, Rushr, is hidden). The NJWAR laptop and the Yawmy third phone bleed off the right edge, so the Arabic headline on the NJWAR screen is clipped. | Medium | Keep the bleed (it is the Fantasy look) but pull the scene in about 6% so the key screen text is whole; show one chapter on home, link to /work for the rest. |
| 10 | Selected work | The two bottom tiles use the same chat-bubble drawing (support agent and call operations). The featured tile has a large empty band above its drawing. The drawings are the weakest visuals on the page. | Medium | Different drawing per tile or a text-only row; vertically centre or crop the featured drawing. |
| 11 | Reviews | Masonry columns end at different heights; mono tags wrap mid-word ("e-commerce" splits across lines); the headline says "Verified" while sources include Upwork, Fiverr and direct. | Medium | Equal-height cards or a 2-row grid; shorten tags; see the copy review on "Verified". |
| 12 | Why | Heading is two tones, the second half tinted. Same accent-in-headline note as the hero. | Low | As in finding 1. |
| 13 | Guides | "Start the check" link is green. Brand rule: green only at sign-off and live moments. | Low | Make it the normal link colour; keep the card's green edge if wanted. |
| 14 | FAQ | Home FAQ is on ink. `06` §0.1 says paper is required for FAQ (reading content). | Low | Either move the FAQ to paper (also a rhythm break) or amend the rule. I would move it to paper: it fixes the 12-dark-sections problem. |
| 15 | Closing band | Strong. | None | Keep. |
| 16 | Header | The nav button says "Book a call"; every other button says "Book a free clarity call". | Low | Keep the short label for width, but confirm it in `03` (same action, same label rule). |

## Cross-cutting
1. **Rhythm.** Sections 1 to 12 are all on `ink`, with navy once. A single paper section (FAQ or Reviews) would give the page a breath and follow `06`'s workshop/report idea.
2. **Pattern fatigue.** Four-up rows: how we work, lifecycle, capabilities, why, guides. Vary the grid (2 + 1, a list, a horizontal row) in at least two.
3. **Illustration consistency.** Three different drawing languages: chalk strokes, chart graphs, chat bubbles. Pick one (the chalk-and-sign-off set is the most ownable).
4. **Documentation drift.** `06` §1 still bans logo marquees, dotted world maps, appended arrows and glows, all of which the site now uses on Mohamed's direction. Update the Avoid list so `token-lint`-style reviews are not arguing with the spec.
5. **Length.** 22 mobile screens. Merging sections 3 and 4, trimming the proof band on phones and showing one chapter would bring it to about 15 without losing a message.

## Top actions (design)
1. Merge How we work and Lifecycle into one section (High, M).
2. Move the FAQ (or Reviews) to paper for rhythm and to follow `06` (Medium, S).
3. Fix the proof-band grid and the phone version (Medium, S).
4. Replace duplicated drawings in Selected work and fix the empty featured tile (Medium, S).
5. Equalise review cards and tag wrapping (Medium, S).
6. Update `06` §1 Avoid list to match the approved site (Low, S).
7. Pull the chapter scenes in so the Arabic headline is whole; one chapter on home (Medium, S).
8. Un-green the "Start the check" link (Low, S).
