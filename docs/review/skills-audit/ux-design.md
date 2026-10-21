# UX and visual design audit (skills pass)

Date: 2026-10-21. Reviewed the built site at localhost:4321 at 390, 768, 1280 and 1920 widths (home) and 390 and 1280 (/book, /privacy, /terms, 404). Lenses: design-critique (Nielsen, UX laws, Krug), design-elevation, ux-writing, mkt-cro. No source changed. Copy changes need a `context/03-copy.md` edit first; those are marked **[03]**.

Limits: Cal.com did not load in the audit browser, so the embedded booking state is unverified. Animations were captured after scroll; one chapters frame caught mid-reveal and is not a finding.

## P1 (fix before or at launch)

**P1-1. Book page: the one conversion step is a blank 750px frame with competing fallbacks.**
- Where: `/book`, `src/components/book/*`, left column.
- What: at 1280 and 390 the embed area shows "Loading available times…", two fallback links and a small spinner inside a tall empty panel, all at once. If Cal is slow or blocked, the visitor sees a dead box with no timeout message. On 390 the reassurance ("What happens on the call", "Who you'll meet") sits about 1,400px down, below the empty frame.
- Principle: H1 system status, H9 recovery, Doherty threshold, Krug "goodwill".
- Fix: (a) show the fallback links only after a 4s timeout, replacing the "Loading…" text, so loading and failure are distinct states. (b) Give the frame a skeleton (date strip plus time slots in `--color-surface`) at the same min-height to hold CLS. (c) On under 64rem, render a 3-line version of "What happens on the call" above the frame, collapsed `<details>` for the rest. No new copy: reuse the existing three bullets.
- Effort: M.

**P1-2. Review the "Book a call" duplication on mobile (header button plus sticky bar).**
- Where: `Header.astro`, `StickyBookBar.astro`, 390 and 768.
- What: from the first scroll, two identical "Book a call" buttons are on screen: header top-right and a full-width bar at the bottom. The bar covers about 72px (8.5% of an 844px viewport) and overlaps card content in Three ways, Selected work and reviews (visible in the 390 captures).
- Principle: H8 minimalist design, Von Restorff (nothing stands out when everything does), Fitts is already satisfied by the bar.
- Fix: below 64rem, hide the header CTA while the sticky bar is shown (`[data-sticky-on] .site-header .cta { display:none }`), keep the menu button. Add `padding-block-end` equal to the bar height on `main` so the final CTA and footer are never covered.
- Effort: S.

## P2 (clear wins, schedule soon)

**P2-1. Selected work: two stacked carousels, and the first hides 2 of 3 items with no position cue.**
- Where: `#work` (`Chapters` NJWAR/YAWMY/Rushr, then "More products we've helped build").
- What: the first block has prev/next arrows but no "1 of 3" or dots; the three chapters share one slot, so visitors see one and may never press the arrows. The second carousel repeats the same arrow pair directly below, plus "Swipe or use the arrows" (a how-to instruction, H8). Two identical controls in sequence read as one broken control.
- Principle: H1 visibility, H6 recognition, Hick, Law of Similarity.
- Fix: add an `aria-live` counter and dots to the first block ("1 of 3" as a `t()` string, mono, `--text-xs`), differentiate the second carousel (smaller arrows, or drop the instruction line). Alternatively show chapter names as tabs (Build / E-commerce / AR). **[03]** only if you change the "Swipe or use the arrows" line.
- Effort: M.

**P2-2. Three ways: the "Validate's fee credits toward Build" pill overhangs the Validate card and is hidden from assistive tech.**
- Where: `Engagements.astro` `.en__credit` (about line 84), 1024 to 1440.
- What: measured at 1280, the pill spans x 148 to 432 while the Validate card ends at x 424, so it pokes about 8px into the gap and floats beside the card's status dot. It is `aria-hidden="true"` yet carries a pricing fact. Wide tablets near 1024 are the risk for collision with the dot and mono tagline.
- Principle: Common Region, WCAG 1.3.1 (info must not be visual only).
- Fix: put the credit inside the Validate card as a visible line under the tags (inline `<p>`), and use the connector arrow on desktop as decoration only. If the overhang stays by design, remove `aria-hidden` and set `inset-inline-end: calc(100% - var(--space-5)/3)` with `translate: 0` so it sits inside the card edge.
- Effort: S.

**P2-3. Three ways lead paragraph is a company definition, not a choice aid.**
- Where: home `#services`, right of the heading.
- What: "DiscoverDev is a product and engineering company…" repeats the footer and hero. The decision the visitor must make ("which one am I?") is only the mono line "Start where you are." below it, which is the weakest-styled text in the block. The cards' mono lines ("I have an idea.") are the real hook and are small.
- Principle: Krug satisficing, H2 match real world, mkt-cro "will this work for my situation".
- Fix: promote "Start where you are." into the lead line (`--text-lg`, heading colour), demote the definition to a caption or move it to the "What we build" row. **[03]** for any rewording; styling-only change needs no copy edit. Also raise the three persona lines (`I have an idea.`) to `--text-base`.
- Effort: S.

**P2-4. No conversion point between the reviews and the final CTA.**
- Where: after `#reviews` (reviews end at the rating line, FAQ follows).
- What: strongest proof (11 reviews, featured EduLens quote) is followed by a long FAQ before any button. On mobile only the sticky bar helps.
- Principle: goal-gradient, CTA repeat "at decision points".
- Fix: add the existing `cta.clarity` button under the rating line in `Reviews.astro` (tier `low_commitment`, `ctaId="home_reviews_clarity"`). No new copy.
- Effort: S.

**P2-5. Reviews layout is unbalanced and leads with an unnamed reviewer.**
- Where: `Reviews.astro`, 1280.
- What: the featured card ends ~330px above the end of the right masonry, leaving an empty block under it. The first small review (top-left of masonry) is "CEO, Nile Support" with no person name, the weakest trust position. Quotes are short and similar in weight, so nothing scans.
- Principle: Law of Proximity/Prägnanz, Serial Position Effect, social-proof specificity.
- Fix: order named reviewers first (data order only, no content change), make the featured card `position: sticky; inset-block-start: var(--space-24)` on desktop so it travels with the list, or set `align-self: stretch` with the Clutch rating line moved into its lower area.
- Effort: S.

**P2-6. Hero proof line sends visitors off-site at peak intent.**
- Where: `HomeHero.astro` (rating plus "See our Clutch profile"), also repeated on `/book` and under reviews.
- What: the rating is the right proof next to the CTA, but the underlined external link is the brightest text under the primary button and competes with it. The same line appears three times.
- Principle: single primary action (mkt-cro), Selective Attention.
- Fix: keep the link in reviews only; in hero and `/book` render the rating as text with the link at `--color-text-muted` plus `target="_blank" rel="noopener"` and an external-link icon (or drop the link). No copy change if you only restyle.
- Effort: S.

**P2-7. Repetition of "30 minutes / No pitch" on /book and hero.**
- Where: `/book` shows "30 minutes, no pitch." in the sub-line, again as three ticks, and "No pitch." again under "What you can count on".
- What: three repeats in one viewport read as defensive (ux-writing: every word has a job).
- Fix: keep the ticks, trim the sub-line to the first half ("For an idea, a new build, a growing product or anything else."), and drop the duplicate tick. **[03]**.
- Effort: S.

**P2-8. Legal pages flip to a white page under the dark header.**
- Where: `/privacy`, `/terms` (`TermsDoc.astro`, legal layout).
- What: the body is white with deep-blue headings; the dark header and footer remain. It is readable and accessible, but it is the only light page and reads as a different site, and the heading colour is far from the brand blue used elsewhere.
- Principle: H4 consistency, Aesthetic-Usability.
- Fix: either keep and add a soft transition (a 1px hairline plus `--color-surface` header strip) or move legal to the dark theme with `max-inline-size: 70ch`, `--text-base`, `line-height: 1.7` and `--color-text` (#E6EAF5-range) on `--color-bg`. Re-check contrast either way.
- Effort: M.

## P3 (polish)

- **P3-1. Dead space around section content.** At 1280 about 340px sits under the DiscoverDev Way strip and about 130px above the proof-band stat column; the map's left stat block hugs the bottom with an empty top. Reduce `--section-y` max from 7.5rem to 6.5rem at ≥ 64rem (`tokens.css` line 119) and set `align-items: center` on the proof map row. Effort S.
- **P3-2. Eyebrows are inconsistent.** "Why DiscoverDev" and "The DiscoverDev Way" have blue eyebrows; Three ways, Selected work, Reviews and FAQ have none, and mono lines ("Before any code", "Start where you are.") use a third style. Pick one eyebrow pattern per section or none. Effort S.
- **P3-3. "More products we've helped build" is the same size as "Selected work".** Two H2s of equal weight inside one section. Make it an H3 style (`--text-2xl`). Effort S.
- **P3-4. Secondary tap targets under 44px.** On mobile the "Book a call about Validate/Build/Scale" links are 32px tall (42px on desktop). They pass WCAG 2.2 AA (24px) but miss the 44px comfort target; add `min-block-size: 2.75rem; display: inline-flex; align-items: center`. Effort S.
- **P3-5. Hero text centres on mobile and tablet, the rest left-aligns.** Acceptable for a hero; check the `Why` heading and cards read as the same system at 768. Effort S.
- **P3-6. Footers differ.** The 404 footer shows a tagline ("Most teams just build what you ask for…") that the home footer omits. Use one footer. Effort S.
- **P3-7. 404 hierarchy.** "Go to the home page" (text link) sits above the primary button and wins the eye first. Swap the order or make the home link a secondary button; add the four section links (Services, How we work, Work, FAQ) as a short row. **[03]** only if new link labels are invented; reuse nav labels. Effort S.
- **P3-8. "Back" on /book is ambiguous** (history or home?). Label it from the destination ("Back to home"), or use `history.back()` with a home fallback. **[03]** for the string. Effort S.
- **P3-9. Reveal-on-scroll hides content until JS runs.** Verify the no-JS and fast-scroll case shows content (the `reveal` class). Effort S.

## What is already strong

- First-screen clarity: headline, one-line promise, a single blue primary CTA above the fold at 390, 768, 1280 and 1920, with a low-commitment secondary and three objection-killers (30 minutes, no pitch, next step) right under it.
- The hero "sprint board" artifact shows the offer (AI drafts, seniors sign off, weekly demo) instead of a stock photo; labelled "Example", so it is honest.
- Dark v3 theme is cohesive: restrained palette, hairline separators, radial glows used sparingly, no text baked into images, mono used as a labelling voice.
- Typographic scale is consistent: tight, large H2s, 16 to 18px body, no body or link text under 13px (measured at 1280 and 390).
- Why section: three-step "Before any code" list beside a scope card is a concrete demonstration of the claim ("start with what proves the idea").
- Proof is specific and honest: named client cards with country and sector, quoted results, no star widgets, clear sample-brand caveat on NJWAR.
- Accessibility craft: keyboard-only Pause control for the marquee, visible focus, reduced-motion handling, 44px nav targets.
- Closing section and FAQ answer the real objections (price, time, ownership, time zones, AI safety) in founder language; the final CTA repeats the three ticks.
- 404 is on-brand ("$ cd /page-not-found"), returns real next actions and does not blame the user.
