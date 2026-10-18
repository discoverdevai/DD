# Reviews: moving component, options (Oct 18, 2026)

Brief (Mohamed): keep all 8 reviews and make them move, like a slider, with motion. Then: "rethink the components and research the best ideas".

Mocks (open in a browser while `node qa/serve.mjs . 4325` runs, or double-click the HTML):
- Round 1: `reviews-slider-mock.html` (A quote river, B one at a time, C moving track)
- Round 2: `reviews-v2-mock.html` (D anchor + wall, E anchor + river, F river by stage)

## What the research says
| Finding | Source | What it means here |
|---|---|---|
| Auto-rotating one-panel carousels fail: users read them as ads, only one panel is visible, slides change before people finish reading, motor-impaired users cannot click in time. Rule: change panels only when the user asks. | [NN/g, auto-forwarding carousels](https://www.nngroup.com/articles/auto-forwarding/) | Round 1 option B (one quote every 7 s) is the weakest: it shows 1 of 8 at a time. Do not use it. |
| Moving content that lasts more than 5 s needs a pause, stop or hide control (Level A). | [W3C, WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | Every moving option needs a visible control. The earlier "hidden until focus" pause button is not enough on its own. |
| Pause button is the first tab stop; motion stops while the mouse is over it and when keyboard focus enters it, and resumes only when the user asks; the label names the next action; slide picker is one tab stop. | [W3C ARIA Authoring Practices, carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) | Built into D, E and F (a real checkbox styled as a button, so it also works with no script). |
| Strongest quote with a concrete result belongs next to the primary button; credibility needs a verifiable name, role and company, a specific outcome with a number, and a quote long enough to sound human. Numbers like "25% to 68% lift" come from vendor blogs, not controlled studies. | vendor and practitioner guides (e.g. [Pravin Kumar](https://www.pravinkumar.co/blog/webflow-testimonial-wall-skeptical-founders-2026), [Thrive](https://thrivethemes.com/testimonial-marketing/)) | Anchor the EduLens quote with its result and the button. Only 1 of our 8 quotes has a number; the rest are short and generic (real, but weak). |
| Marquee fits homepage rows; a masonry "wall" fits a dedicated page. Vertical columns at different speeds, fade masks and pause on hover are the common pattern. | [Framer marketplace components](https://www.framer.com/marketplace/components/testimonials-marquee/), [Famewall](https://famewall.io/testimonial-widgets-showcase/) | D (vertical wall) and E (one row) are the two homepage patterns; keep a full wall for `/work` or a reviews page. |
| Match proof to the visitor (industry or role filters). | same guides | F filters by the visitor's stage, in the words Engagements already uses. |
| Testimonials are a case where a static list or grid often beats a carousel. | [A11y with Diana](https://a11ywithdiana.substack.com/p/your-carousel-isnt-showing-more-content), [U-Mich accessibility guide](https://sites.lsa.umich.edu/wordpress-accessibility/testimonials-block/) | Always keep the content reachable without motion (reduced motion shows everything still). |

## The rethink: four rules for the component
1. **One quote never moves.** The best one (EduLens, with its number) is the anchor, with the button beside it. The proof that matters is always visible.
2. **Motion shows several quotes at once, slowly** (about 17 to 20 px a second), never one at a time. All 8 stay in the page text.
3. **Control is built in.** A real checkbox styled as a button (works without script), hover and focus stop it, reduced motion shows a still version with nothing hidden.
4. **Motion is CSS, not script.** No carousel library; zero JavaScript for the movement (F adds about 20 lines for the filter chips only).

## Options
| | A river (r1) | B one at a time (r1) | C track (r1) | **D anchor + wall** (r2) | **E anchor + river** (r2) | **F river by stage** (r2) |
|---|---|---|---|---|---|---|
| What moves | 1 row, all 8 | 1 quote, 7 s | 3 cards step every 5 s | 2 columns, up and down | 1 row of 7 | 1 row of 7, filtered |
| Quotes visible at once | 3 to 4 | 1 | 3 | 5 to 6 | 4 to 5 + anchor | 4 to 5 + anchor |
| Best quote beside button | no | no | no | yes | yes | yes |
| Script for motion | none | yes | yes | none | none | filter only |
| Pause control | hidden until focus | visible | visible | visible, works without script | same | same |
| Height on desktop (est.) | 420 px | 640 px | 460 px | 560 px | 700 px | 760 px |
| Verdict | ok, but the best quote is lost in the row | drop (NN/g) | ok; script, steps | strongest on desktop, most to build | **simplest and strongest overall** | E plus a real "why this matters to me" |

## Live scenarios (each option tested in the mock where marked ✓)
| Scenario | What should happen | D | E | F |
|---|---|---|---|---|
| Visitor with a mouse hovers a quote to read it | Motion stops, resumes on leave | ✓ | ✓ | ✓ |
| Visitor uses the keyboard only | First tab stop is the pause switch; Tab into the moving area stops it; chips and button do not freeze it (bug found and fixed in testing) | ✓ | ✓ | ✓ |
| Screen reader | The duplicate loop copy is `aria-hidden` and `inert`; each quote is a figure with blockquote and caption; the anchor is read first | ✓ | ✓ | ✓ |
| Reduced motion set in the OS | Nothing moves; D becomes a still 2-column wall, E and F a still scrollable row | ✓ | ✓ | ✓ |
| No JavaScript | Motion still runs and the pause switch still works (CSS only); F filters need script, the page then shows "All" | ✓ | ✓ | partial |
| Phone | Same order: anchor, pause, then the moving quotes (D: one column, E and F: one row). Tap to pause is native through the switch. No horizontal page scroll | ✓ | ✓ | ✓ |
| Visitor filters to a stage with few reviews | Fewer than 4 matches: row stops and just shows them; pause control hides | n/a | n/a | ✓ |
| Tab in the background / off screen | CSS animations are throttled by the browser; no timer running | ✓ | ✓ | ✓ |
| Arabic (`/ar`, RTL) | Row direction flips (`:dir(rtl)` keyframes); D columns need the same check | to check | ✓ | ✓ |
| A 9th, 10th review is added | Loops get longer; speed is per pixel, so it stays readable; no layout change | ✓ | ✓ | ✓ |
| Very long or very short quotes | Card height follows the tallest in its column or row; short cards show space | ok | ok | ok |
| Ultra-wide screen (2560 px) | Row is full-bleed with fade edges; D keeps its 76 rem container | ok | ok | ok |
| SEO and AI search | All 8 quotes in the HTML once (the loop copy is duplicated text, marked `aria-hidden`; keep it out of the JSON-LD) | ok | ok | ok |
| Speed (LCP, INP) | Below the fold, transform animation only, no script for E; no new risk | ok | ok | ok |
| Print or screenshot | Static, shows the first view | ok | ok | ok |

## What the quotes can and cannot carry
Seven of the eight quotes are short and generic. Motion makes them look like a crowd, which is fine, but the research says specific outcomes convert. Nothing in `09` supports adding numbers to the others. The best fix is outside the page: ask the three repeat clients (Nile Support, Athkado, Fantacalcio) for one outcome sentence each, then put those on the anchor rotation or in the wall.

## Recommendation
Build **E** (anchor + river): one still anchor quote with the result and the button, one slow row of the other 7 beneath, a visible pause switch, reduced motion showing a still row. It works the same on a phone, needs no script, is the smallest change to the page, and follows the pause and focus rules. Add **F's two filters** later, once there are enough reviews per stage for the filter to matter (today "ready to build" has only 2 beyond the anchor). Keep **D** as the layout for a full reviews wall on `/work` or a reviews page.

## Open points
- Wording: "Verified reviews" over a row that includes Upwork, Fiverr and direct reviews (see REPORT.md).
- Which quote is the anchor: EduLens is the only one with a number. Nile Support's CEO is unnamed.
- Width of the moving cards (19 rem in the mock) and speed (about 17 px a second): easy to tune in the browser.

## Round 3 research (Oct 18): what leading sites do, and what we take
Sources are practitioner blogs and design galleries, not controlled studies; treat the rules of thumb as opinion.
| Finding | Source | What we take |
|---|---|---|
| Style the quotes in the product's own visual language (Miro uses sticky notes and a canvas; Postcards makes the cards native to its UI; Basecamp splits "before" and "after" into dark and light). | [Prismic](https://prismic.io/blog/website-testimonials), [Really Good Designs](https://reallygooddesigns.com/testimonial-page-examples/), [Framer](https://www.framer.com/blog/testimonials-on-website-examples/) | Our product language is the sign-off: paper sheets, a signature, a green "Signed off" stamp. That is concept G. |
| Put each quote beside the claim it supports; prefer a few substantial quotes over a carousel; avoid three-across grids that force short quotes. | [Pravin Kumar](https://www.pravinkumar.co/blog/believable-testimonial-section-b2b-website-2026) | Anchor the EduLens quote with its result and the button. Later option (L): place the Validate quotes inside the Validate card and the Build quotes beside the work. |
| Give attribution real weight (full name, role, company); about two sentences per quote; never polish or composite. | same | Name and role larger than in the current cards. Quotes stay verbatim. |
| Typography is a design tool (Focus Lab, Monday.com highlight the key phrase). | Really Good Designs, Prismic | Mark the key phrase of each quote with a blue highlighter stroke. No change to the words. |
| Fewer, stronger quotes, each with a path to deeper proof (Cartesia, Kierkegaard: "Read case study"). | Framer | "Read the case study" on the EduLens anchor. Athkado and NJWAR stay unlinked until D-05 confirms they are the same client. |
| Segment proof by use case or industry (Vercel, Shopify). | Prismic, Really Good Designs | Stage filter (concept F) when there are more reviews per stage. |
| Point to a bigger wall ("Read what 60 customers say"). | Prismic | "5.0 across 11 reviews. Read all on Clutch" in the section head. |
| Faces (Frame.io, PandaPay) and video (Slack, Haptic) are common. | Really Good Designs | We have neither. Do not use stock or AI faces. Ask the three repeat clients for a short video or photo. |
Refined mock: anchor sign-off sheet plus a slow row of 7 sheets, key phrases highlighted, larger attribution, case-study link, "Read all on Clutch".
