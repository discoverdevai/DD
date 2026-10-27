# Lean R1 review: Build, Scale, How we work (Oct 26)

Branch `site-r1-lean`. Lenses: taste and design (taste-frontend inspector at 1440/768/390, design-critique), SEO (05 rules), GEO (geo-content, research report), CRO (mkt-cro, research report), UX writing (copy rules in CLAUDE.md, 03). Facts only from 09. "Do" = fixed in this pass.

## What works
- One theme with home (dark ink), one action everywhere (clarity call), terms under every button.
- Each page answers one buyer question; the signature sections (decision board, week track, squad loop) carry real content, not decoration.
- axe clean at three widths in both languages; Lighthouse mobile 99/100/100/100, LCP about 1.8 s.

## Findings
| # | Lens | Page | Finding | Fix | Status |
|---|---|---|---|---|---|
| 1 | Taste | All | No picture or chart anywhere: every section is text in boxes, so the pages read thinner than home. The inspector counts 0 visuals. | One honest visual per page that proves a claim: a sample Review report on Build (exists as ReviewSnapshot, labelled "Example"), the EduLens AI-cost result as a range chart on Build. | Do |
| 2 | CRO | Build | Proof is two anonymized lines, no number and no named voice, far from the button. Buyers rate specific, attributed proof highest. | A case card: EduLens, 60–90% lower AI cost (chart), the five changes that did it, Youssef's quote; plus Nojoud's quote (Athkado, Saudi Arabia). | Do |
| 3 | CRO | Scale | The partner section has no voice from a partner. | Amstadd team lead quote under the comparison table. | Do |
| 4 | SEO | Scale | H1 "Scale: a team that stays" lacks the primary keyword (05 rule: keyword pages keep the keyword or a close variant in the H1). | "Scale: a dedicated team that stays". | Do |
| 5 | SEO | How we work | Primary keyword "software development process" is only in the title. | Lead opens with "Our software development process is the same for every project". | Do |
| 6 | GEO | Build | No definition for "what is an MVP", a real query in English and Arabic (ما هو MVP); answer engines cite definitions. | FAQ "What is an MVP?" with a 45-word answer-first definition. | Do |
| 7 | GEO | All | `llms.txt` Arabic section lists only home and booking. | Add /ar/build, /ar/scale, /ar/how-we-work. | Do |
| 8 | UX writing | Build | Pill "From idea to launch" repeats the H1 ("from idea to a live MVP"). | Pill in the persona voice used on other pages: "I have an idea, or a prototype." | Do |
| 9 | UX writing | Build | "Products we've taken from idea to launch" lists research work for entrepreneurs, which is not a product. | "Work from idea to launch". | Do |
| 10 | UX writing | How we work | The story paragraph and the entity line say the same thing twice, one under the other. | Keep the entity line (it is the GEO sentence), drop the story paragraph. | Do |
| 11 | UX writing | How we work | Track record items: one ends with a full stop, the others do not. | No full stops in the list. | Do |
| 12 | Taste | Build | The page is long (10 bands). "What you get" and the price document both describe the offer. | Keep for now: each answers a different question (what, then price/team/ownership). Revisit after Mohamed's read. | Open |
| 13 | Taste | All | Inspector flags house-style items the approved design system uses on purpose: monospace labels, the hero glow, hairlines, small caps-free tags. | Not changed: these are the site's approved look (06, Oct 16 decisions). | Won't do |
| 14 | CRO | Build | The Review CTA is the clarity call, not a Review booking: there is no Review event in Cal.com yet. | Keep one call type; the call agrees scope and a fixed fee. Add a Review event in Cal.com later. | Open (Mohamed) |
| 15 | Consent | Build, Scale | The 8 quotes were approved for the home page (D-05, Oct 16). This pass shows three of them on service pages too. | Confirm with Mohamed that the same quotes may appear on service pages. | Open (Mohamed) |

## Build page design QA (Oct 26, journey version)
Measured every section at 1440, 1024, 768 and 390 px, in English and Arabic, then fixed:
- "Your path" window: bars now sit in time order (Validate, then Build with the sign-off marks, then a short Live marker); labels 12px, not 11px.
- Review heading ran to 3 lines on desktop: now "Built it with AI? We check it first." in a wider column; every heading is 2 lines or fewer at every width, both languages.
- EduLens chart: fixed label and value columns, so bars and numbers line up.
- Phones (under 640px): the journey line and its dots touched the headings, so they are hidden there; the deepening background carries the flow.
- Checked: no horizontal overflow, axe clean at all widths, text 12px or larger, inline links are the only targets under 24px (allowed for links inside text).

## Build page audit (Oct 26, UX, UI, design, content)
Looked at desktop, phone and Arabic, section by section.
- Works: one call to action everywhere with its terms; the two ways in under the hero button; the timeline puts the decision and every senior sign-off where they happen; the code finding is row 2 of the sample report, so the two visuals tell one story; client words sit at the stop they belong to; Arabic mirrors correctly (chart, arrows, timeline).
- Fixed: proof heading said "from idea to launch" but one card was market research, so that card moved off this page; "5 days / About, in working days" read oddly, now "About 5 / Working days"; sections followed by a quote end shorter, so the quote reads as part of its section (about 200px less empty space twice); the EduLens chart sits at the top of its box instead of floating in the middle.
- Kept on purpose: the plan shows timing in the chart and the words in the four cards (on phones the cards are the only view); four identical "Book a free clarity call" buttons (same action, same label, 04 §6).
- Open for Mohamed: quotes on service pages (consent scope, D-05); a Review booking type in Cal.com; native review of the Arabic.

## Build page spacing and "What you get" (Oct 26)
- What you get redesigned: a band of five deliverables with icons, then four tiles led by their answer (8–12 weeks · Fixed · A full squad · All yours). It now fits one screen on desktop (0.74 of a 1440×900 screen, was 1.2).
- Even rhythm: one section spacing for every stop of the journey (88px at 1440, 56px on phones); tighter heading-to-content gaps in the plan.
- Plan: compact phase cards and one-line chart labels ("Weekly demo", "Senior sign-off"); 1.15 screens at 1440×900 (was 1.29).
- Proof: the quote sits under the chart, beside the big number; 1.09 screens (was 1.21).
- Checked at 1920×1080, 1440×900, 1366×768, 1024×768, 768×1024 and 390×844, English and Arabic: no overflow, axe clean, QA 0 findings, functional 32/32.

## Build page "Built it with AI?" redesign (Oct 26)
- One section in three rows: the question, what we check (six chips) and one example finding being fixed; the five days as steps, Day 5 carrying the findings report you receive (dark theme, no white sheet); the offer as one bar (from $1,490, about 5 working days, no-charge guarantee, fee credited, clarity call).
- Desktop: Day 0 and Days 1–4 stack beside Day 5, so no card is left half empty; the offer bar is one row from 1280px, the call drops to its own row below that.
- Checked at 1920, 1440, 1366, 1024, 768 and 390 px, English and Arabic: no overflow, axe clean, QA 0 findings, functional 32/32. Height 1.26 screens at 1440×900.
- Spacing pass: one gap between every stop of the journey (88px at 1440, 56px on phones). Before, two sections back to back stacked both paddings (174px) and a quote added 48px more before the next heading. Each client quote stays 48px under its section. Inside Built with AI, the example finding sits level with the copy, and the days sit a step further from the intro (48px) than from the offer (32px). The page is about 340px shorter at 1440; checks pass at six sizes in EN and AR.

## Build page proof (Oct 26)
- The lone project card under the EduLens case left most of its row empty. It is now one slim bar: "Also from idea to launch", the AR furniture project (Saudi Arabia, no client name), its path as steps (Feasibility sprints → Discovery → UX and UI → Development → AI recommendations → AR to see furniture at home) and the Clutch rating with its link. Same facts as before (09).
- EduLens chart: the value column is wider so the Arabic "من 10 إلى 40" stays on one line.
- The section now fits one screen at 1440×900 (1.04 in Arabic); checks pass at six sizes in EN and AR.

## Build page FAQ (Oct 26)
- Kept: two columns, questions in buyer order (cost and time first), one call to action.
- Fixed: the FAQ button had no terms; it now shows "30 minutes · No pitch · Leave with a next step" like every other clarity-call button (all pages that use this FAQ layout with a button).
- On Build the first answer, "How much does an MVP cost?", is open on load, so the top buyer question is answered without a click.
- Checked at six sizes in EN and AR: no overflow, axe clean, QA 0 findings, functional 32/32.

## Build page close (Oct 26)
- Kept: the large centred headline, one button with its terms, the journey line ending at its "Launch" dot.
- Fixed: the body line said "Tell us on a free 30-minute call", with no object, and repeated the terms under the button. Now: "Tell us about your idea or your prototype. If it is a fit, you get a fixed price before you commit to anything." (AR mirrored). Checked at six sizes in EN and AR.

## Build page final review, top to bottom (Oct 26)
- Checked at 1440, 1024 and 390 px in English, and at 1440 px in Arabic. No horizontal overflow, no text under 12px, axe clean on the whole page.
- Lighthouse mobile: 99 / 100 / 100 / 100, LCP 1.8 s, CLS 0.002, TBT 0 ms.
- SEO: one H1 ("Build: from idea to a live MVP"), title, meta description, canonical, and JSON-LD (Organization, Service, WebPage, FAQPage, WebSite).
- Fixed: hero to first stop was about 190px (the hero padding plus the first stop padding). It is now the same 88px gap as every other stop.
- Section heights at 1440×900: plan 1.15, Built with AI 1.19, What you get 0.74, proof 1.00, FAQ 0.81, close 0.62 screens.
- Still open for Mohamed: quotes on service pages (D-05), a Review booking type in Cal.com, and a native review of the Arabic.

## Build page proof: named products (Oct 27)
- Mohamed OK'd client names on project cards (D-05, logged in 11 and docs/MEMORY.md).
- Under the EduLens case: "More products we've built", four named cards, each with its real screen or the product drawing: NJWAR (web store), Rushr (two phone screens, 16-week build), Yawmy Care (dashboard, our own product) and BioBank (drawing). Facts from 09. NJWAR keeps A4 (no country, no AI line); CTC stays hidden.
- These replace the anonymous AR furniture bar, which would have shown NJWAR twice. Phones get one swipe row (1.78 screens, was 3.26 stacked).
- New phone frame in ProjectVisual. Two check fixes: the QA alt check now accepts Astro's bare `alt` (a valid empty alt), and the consent gate no longer matches everything once every name is cleared.
- Checked at six sizes in EN and AR: no overflow, axe clean, QA 0 findings, functional 32/32.

## Client names on home and Work (Oct 27)
- Project titles in `projects.ts` (home rail, /work rows, EN + AR) now name the client from 09: Athkado (AR furniture store; feasibility sprints), Rushr, BioBank, Nile Support, Amstadd, Upscend, Pyramakerz, Arheb, Jumlaty, Fantacalcio and Zest. EduLens and Yawmy Care were already named. The support agent, individual founders and the Kuwait tourism research stay unnamed, because 09 names no client for them.
- Athkado's store card now uses the drawing instead of the NJWAR screen, so it doesn't claim NJWAR is Athkado's store (A4: unconfirmed).
- Rushr's card and row show its two real phone screens (home rail and Work).
- /work has no Arabic page yet (it already had none before this change).
- Checked: QA 0 findings, functional 32/32, axe clean on home (EN, AR, phone) and Work.

## NJWAR = Athkado (Oct 27)
- Mohamed confirmed NJWAR is the store we built for Athkado. Recorded in 09, 11 and docs/MEMORY.md; A4 is lifted.
- Work: "NJWAR, Athkado's AR furniture store with AI recommendations" (Saudi Arabia), with the NJWAR product screen and Nojoud Alarfaj's quote. Home NJWAR chapter: Saudi Arabia tag. Build card: "Athkado · Saudi Arabia". EN + AR.
- Checked: QA 0 findings, functional 32/32, axe clean.

## Project pictures that show the idea (Oct 27)
- Mohamed asked for better pictures. Each card now shows what makes its product different:
  - NJWAR: the web store with the AR phone view in front (an armchair placed in a real room).
  - Yawmy Care: the nursery dashboard with the parent app's daily log in front (mood, meals, nap).
  - Rushr: kept "A pro has been found near you" over the map search.
- New "combo" frame in ProjectVisual (browser window plus a phone in front, mirrored in Arabic). Used on Build cards, the home rail and Work rows.
- BioBank and EduLens keep their drawings until we get real screens from them.
- Checked: QA 0 findings, functional 32/32, axe clean.
