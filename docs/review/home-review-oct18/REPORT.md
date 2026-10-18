# Home page review: full report (Oct 18, 2026)

Three reviews, one report. Detail per area: `design-brand-art.md`, `seo-geo-technical.md`, `copy-content-cro.md` (same folder). Nothing on the site was changed. Everything below that says "measured" was measured on the Oct 18 build (Lighthouse mobile, axe, QA suite); everything else is a reading of the page, the markup and the context files.

## 1. Verdict

The page is honest, on-brand and technically sound. It has a real idea (machine speed, human sign-off), one clear call to action, almost no unbacked claims, and it scores 98 on mobile Lighthouse with clean accessibility. It is not yet as persuasive as it could be, for four reasons that all three reviews found independently:

1. **It repeats itself.** Two four-step sections back to back (How we work, Lifecycle), and the same four ideas ("before any code", weekly demo, senior sign-off, no handoff gaps) appear 15+ times. The page is 22 phone screens long.
2. **Proof comes late and is thin.** Five explanation sections come before the work, and seven of the eight review quotes are short and generic. The one strong proof (EduLens, 60–90%) is shown without its qualifier.
3. **Search and AI engines cannot quote who you are from the top of the page.** The "who, where, for whom" sentence is only in the footer, and there is no price anywhere on the page even though `llms.txt` publishes one.
4. **One fact is wrong today:** the FAQ says Alexandria is "GMT+2". Egypt is on GMT+3 until Oct 29.

## 2. Scorecard (out of 10)

| Area | Score | Source | Note |
|---|---|---|---|
| Brand fit | 8.5 | design | Tokens, type and the human/machine layers are consistent. |
| Art direction | 8 | design | Hero and chapters are strong; three illustration styles do not match. |
| Layout and rhythm | 6.5 | design | 12 dark sections in a row, five four-up rows, two ragged grids. |
| Consistency with `06` | 6 | design | Site and spec disagree in 6 places (section 4). |
| Clarity | 7 | copy | Discover/Validate and Ship and Stay/Scale are two names for one journey. |
| Specificity | 6 | copy | EduLens, 8–12 weeks, 5 days are concrete; capabilities and facts band are generic. |
| Voice | 7.5 | copy | Plain, no em-dashes; a few jingle lines and heavy repetition. |
| Proof integrity | 8.5 | copy | No invention; 6 claims stronger than the evidence, 1 wrong. |
| CRO | 6.5 | copy | One clear primary CTA; proof late, no price, no team, call undefined. |
| Differentiation | 6 | copy | "AI plus human" is close to TrianglZ's line; real edges are not the headline. |
| SEO on-page | 7 | seo | Title, meta, H1 match `05`; brand-only H2s, generic link text. |
| Structured data | 8 | seo | One clean graph, nothing banned. LinkedIn missing from sameAs. |
| AEO / GEO (AI search) | 6 | seo | FAQ is crawlable; entity line buried, "Yes." openers, no numbers. |
| Technical / speed | 8 | measured + seo | Lighthouse mobile 98, CLS 0, TBT 0. LCP 1.99 s is right at the 2.0 s budget, so there is no headroom. |
| Internal links | 6 | seo | Four of five "Selected work" links go to bare `/work`; one guide unlinked. |
| E-E-A-T (trust) | 6 | seo | Clutch and reviews are real; no named person, "Verified" overstates. |
| Accessibility | 9 | measured | axe 0 violations; reduced motion respected. |

## 3. Section by section (all three views merged)

| # | Section | What works | Main issues | Fix |
|---|---|---|---|---|
| 1 | Hero | Clear H1, one button, rating line, RunPanel shows the offer in 5 seconds. | The promise serves idea-stage founders only; "weeks" then "8–12 weeks" leaves out the 1–2 week Validate step; no entity sentence; the fake sprint board is real text in the first 200 words. | Add one entity sentence under the sub (D-43 wording); reword the timeline; add "Already have an app or a team? See your options."; mark the sprint board decorative. |
| 2 | Proof band | Ten named logos with role and country are the best early trust signal. | Label "Teams we've built for" overreaches (Zest was a study, Yawmy is your own product); ragged 4/3/2 grid; one subtitle truncated; ten stacked cards on phones (900 px); Rushr shown while its case is held. | Rename to "Teams we've worked with"; regular grid or one row; shorten the phone version; add a visible country list under the map. |
| 3 | How we work (the DiscoverDev Way) | Clear definition paragraph; the chalk → draft → sign → live visual is ownable. | Duplicates the hero board and the Lifecycle section; the CTA comes before any work is shown; "Security, data and payments" has no evidence in `09`. | Merge with Lifecycle (one section); move the CTA after the proof; confirm or cut that line. |
| 4 | Lifecycle | Four cards with timings. | Same four-step idea again, with different names and a different illustration style; "greenfield or brownfield" is jargon. | Merge into section 3; keep frameworks on `/how-we-work`. |
| 5 | Engagements | Best copy on the page ("I have an idea." / "It's working. Grow it."); price decision exists. | No price or risk line on the Review row; single-word link text ("See Build"). | Add "From $1,490. No useful findings, no charge."; use descriptive link text. |
| 6 | What we build | Complete and tidy. | 15 items that fail the swap test; interrupts the story between offers and proof. | Cut to four one-line groups, or move below the work. |
| 7 | Project chapters | Real screens on devices are real proof; NJWAR demo link. | About 1,800 px for two projects; NJWAR headline clipped on the right; no result line; NJWAR client link and location tag need consent (D-05); bare H2s. | Pull scenes in about 6%; one chapter on home; add a result line when backed; descriptive H2s. |
| 8 | Selected work | The EduLens tile with a real number is the best proof. | 60–90% shown without "depending on cache hits and caption availability"; two tiles reuse the same drawing; empty band in the featured tile; four links go to bare `/work`. | Restore the qualifier; distinct drawings; link to `/work#project-…`. |
| 9 | Reviews | Names and roles shown; Clutch link; CTA placed right after. | Heading says "Verified" while sources include Upwork, Fiverr and direct; most quotes generic; four of eight are market-research jobs; uneven masonry, tags wrap mid-word. | "Reviews from founders and teams"; feature EduLens with its result; collapse the rest; ask for outcome-led quotes. |
| 10 | Why | Only navy section: the one rhythm break. | All four pillars restate earlier sections; two-tone heading. | Merge to three; move "four clients expanded scope" up to the proof band. |
| 11 | Guides | Strong titles, serves the AI-built-app segment. | Lovable guide and `/insights` not linked; "Start the check" is green (green means sign-off). | Add both links; normal link colour. |
| 12 | FAQ | Eight real questions, server-rendered, matching schema. | "GMT+2" wrong; "Is the code safe? Yes." and "AI drafts code, tests and documentation" overreach; "Yes." openers lose the subject; pricing answer has no number; on ink although `06` says FAQ is paper. | Fix the time zone; subject-first answers; add price; add "What happens on the call?", "Will juniors work on my project?"; move to paper. |
| 13 | Closing band | Best CTA copy on the page. | None. | Keep; add "30 minutes. We tell you where to start." |
| 14 | Header and footer | Clear nav; footer carries the entity line and Clutch link. | Nav says "Book a call", everywhere else says "Book a free clarity call"; no LinkedIn; two `nav aria-label="Main"`; "Menu" is an h2. | Align or document the short label; add LinkedIn (D-29); label the mobile nav. |

## 4. Where the site and the spec disagree (documentation drift)

`06` §1 still bans logo marquees, dotted world maps, appended arrows, glows and a tinted word inside a headline. The site uses all five, on your direction. `06` §0.1 says the FAQ must be paper; the home FAQ is ink. Green is reserved for sign-off but is used on a guide link. Decide once: update `06` to match the site (my recommendation for the first five), and either move the FAQ to paper or amend the rule.

## 5. Claims that need a decision from you

| Claim | Status | Options |
|---|---|---|
| "Idea to live product in 8–12 weeks" | Stronger than evidence (Build is 8–12; Validate adds 1–2) | Reword, or say "after a 1–2 week Validate". |
| "Security, data and payments" (journey card) | Not in `09` | Add evidence to `09`, or cut. |
| "AI drafts code, tests and documentation" (FAQ) | Not in `09` | Add evidence, or use "AI drafts the work". |
| "Is the code safe? Yes." | Stronger than evidence | Talk about the process (review, sign-off), not a guarantee. |
| 60–90% without its qualifier | Stronger than evidence | Restore the `09` wording. |
| Andrei's tag "Saudi Arabia expansion" | Stronger than evidence | "Market research · Saudi Arabia". |
| NJWAR name, "Saudi Arabia" tag, link to Athkado | Needs consent (D-05) | Confirm, or shorten to "An AR furniture store with AI recommendations". |
| Zest, Jumlaty, Arheb, Yawmy under "built for" | Weaker than the label | Rename the row. |
| "Verified reviews" | Mixed sources | Drop "Verified" or limit it to Clutch. |
| "GMT+2" | Wrong until Oct 29 | "Cairo time" (change `03` first). |

## 6. Action plan

**Do first (small, safe, one pass; about half a day):**
1. Fix "GMT+2" → "Cairo time" (`03` first).
2. Rename "Verified reviews" and the logo-row label.
3. Restore the 60–90% qualifier; fix Andrei's tag.
4. Show "From $1,490. No useful findings, no charge." on the Review row and in the pricing FAQ.
5. Add the entity sentence under the hero sub; mark the sprint board decorative.
6. FAQ answers subject-first; add the three missing questions.
7. Link Selected work to the project anchors; link the Lovable guide and `/insights`; add LinkedIn to the footer and `sameAs`.
8. Resolve the three unbacked claims (section 5).
9. Un-green the "Start the check" link; label the mobile nav; make the root canonical consistent.

**Do next (structure; about one to two days):**
10. Merge How we work and Lifecycle into one section; merge Why to three pillars; cut Capabilities to four lines. Expect about 2,000 px less on desktop.
11. Rework Reviews: feature the EduLens quote with its result, collapse the generic ones, request outcome-led quotes from clients.
12. Fix the proof-band grid and phone version; distinct drawings in Selected work; one chapter on home.
13. Move the FAQ to paper to break the 12 dark sections.
14. Update `06` §1 to match the approved site.

**Later (needs input or evidence):**
15. A second quantified case (only EduLens has a number).
16. People and seniority proof (D-16/D-17 hold it).
17. A lighter first step for idea founders than a call (D-11 allows a form to hello@).
18. A Lighthouse run with the analytics script timing and the four render-blocking stylesheets; LCP has no headroom.

## 7. Open questions
- Which of the unbacked claims can you evidence, and which should be cut?
- Is showing the Rushr logo while its case is held (D-07) intended?
- Should the FAQ move to paper?
- Do you want me to start with the "do first" list?

## 8. Added: duplication and low-value content
See `duplication-and-cuts.md` (same folder): measured repeats, a one-job-per-section message map, 12 cut/merge decisions, and the effect (about 15 sections to 9–10, about 1,950 words to about 1,300, 22 phone screens to about 14, est.). It supersedes action 10 and parts of 12 in section 6 above.
