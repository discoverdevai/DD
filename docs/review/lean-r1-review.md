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
