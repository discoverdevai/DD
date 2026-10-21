# Accessibility and frontend audit (home, /book, /privacy)

Date: 2026-10-21. Target: WCAG 2.2 AA plus CLAUDE.md hard rules. Method: axe (A, AA, 2.2, best-practice) on `/`, `/book`, `/privacy` at 1280 and 390; scripted keyboard walks; pixel-sampled contrast of every text node (about 270 per page, text hidden and background sampled, so gradients are measured); reduced-motion, forced-colors, 640x400 and 320x256 reflow, text-spacing override, `dir=rtl` smoke test; source review of `src/styles` and `src/components`. No source changed.

Summary: no launch blockers. axe is clean, contrast passes, focus is never obscured, reflow and RTL hold. Three fixes are worth doing before launch (P1), each small.

## P1

1. **Slider arrows drop keyboard focus at the ends.**
   - Where: `Showcase.astro:103-104`, `Chapters.astro:153-154`, styled in `SliderArrows.astro:28`.
   - What: pressing Next with Enter on the last step sets `next.disabled = true` on the focused button. Measured: `document.activeElement` becomes `BODY`, so the next Tab restarts from the top of the page. Same for Previous at the start.
   - Criterion: 2.4.3 Focus Order, 2.4.7.
   - Fix: use `aria-disabled="true"` instead of `disabled`, keep the button focusable, and ignore the click when at an end. Restyle with `[aria-disabled="true"]`. The forced-colors rule already has the right shape.
   - Effort: S.

2. **The client marquee has no discoverable Pause control.**
   - Where: `ProofBand.astro:117` (clip-pathed until `:focus-visible`), `:199` (tap-to-toggle).
   - What: the row loops forever (`pband-run ... infinite`). The only visible-state mechanisms are hover pause and an undiscoverable tap. The Pause button exists only for keyboard focus. Touch screen-reader users get neither hover nor a labelled control that is reachable by swipe order in a discoverable way.
   - Criterion: 2.2.2 Pause, Stop, Hide (A).
   - Fix: show a small visible "Pause" icon button at `:hover` and `:focus-within` of the strip and always on touch (`@media (hover: none)`); or run the loop for at most 5 seconds. Moving it out of the 1px clip is enough.
   - Effort: S.

3. **Logo wordmark disappears in light forced-colors themes.**
   - Where: `Logo.astro:17` (`forced-color-adjust: none` keeps the white "Discover" on a Canvas that is now light).
   - What: confirmed in a forced-colors screenshot, header shows the mark and "Dev" only. The link has `aria-label`, so screen readers are fine, but the brand name is invisible.
   - Criterion: 1.4.11 Non-text Contrast, 1.4.3.
   - Fix: render `<picture>` with `<source media="(forced-colors: active) and (prefers-color-scheme: light)" srcset="/brand/logo-horizontal-dark-text.svg">`. Same asset already exists.
   - Effort: S.

## P2

4. **Card heading link labels override the visible heading.** `Engagements.astro:32`: `<h3><a aria-label="Book a call about Validate">`. Heading list reads "Book a call about Validate", not "Validate, Product discovery". Name contains the visible word but not first. Fix: drop `aria-label`; keep the title as link text and add `<span class="sr-only">, book a call</span>`. 2.5.3, 1.3.1. S.
5. **Decorative `<li class="en__credit">` inside the `<ol>` of cards.** `Engagements.astro:25`. On desktop it shows as list item 1 of 4 to assistive tech. Give it `aria-hidden="true"` or move it outside the list. 1.3.1. S.
6. **`aria-pressed` plus changing label on the marquee button.** `ProofBand.astro:195`. Screen readers announce "Play, pressed". Pick one: keep the label fixed ("Pause marquee") and use `aria-pressed`. 4.1.2. S.
7. **Reduced motion is read once at load.** `ProofBand.astro` (`reduced.matches` at start) never reacts to a later OS change. Add a `change` listener to tear down `data-loop`. 2.2.2 best practice. S.
8. **Token lint does not cover `src/styles`.** `scripts/token-lint.mjs` scans components, layouts and pages only, so `base.css:15,181,196,202,205` carry raw `rgb(...)` literals (hairline, mark gradient, seam, section glows) that CLAUDE.md says should be tokens. Add `src/styles` to `ROOTS` (excluding `tokens.css`) and move the five colours to `--color-hairline-ink`, `--glow-*` tokens. Design-system consistency. S.
9. **Selector monster for ink bands.** `base.css:191-205`: `main > section[data-surface="ink"]:not(:first-child):not([data-cta-band])` repeated three times plus `:not([data-raised])` variants. Replace with one opt-in class (`.band`) set by `Section`/page markup; keeps specificity flat and removes dependence on DOM position. M.

## P3

10. **13px mono text beyond "badges only".** `tokens.css:87` says `--text-xs` is for badges, yet it is used for body-like text: `.pband__legend`, `.pband__where`, `.ds__lane-title`, `.en__start` (16px mono), hero board copy. Contrast passes (sampled), but 1.4.4 readability suffers in mono. Raise to `--text-sm` for informational strings. S.
11. **External link with arrow glyph.** `Chapters.astro:56` `.ch__try` has `target="_blank"` and a literal "↗" in the link text. Announced as "north east arrow", no new-tab notice. Wrap the glyph in `aria-hidden` and append sr-only "(opens in new tab)". G201 best practice. S.
12. **Header JS ships dead code on V1.0.** `Header.astro` script wires the Services disclosure, but `SERVICES` is empty in V1.0 so `toggle` is null. Native `popover` would replace it when pages return. Hide-on-scroll also fights 400% zoom (header is 65px of 256px viewport); tested OK because focus re-shows it. Consider dropping hide-on-scroll. M.
13. **Mobile menu duplicates native behaviour.** `MobileMenu.astro` script: invoker `commandfor` already opens and closes, `<dialog>` already returns focus. Keep only the `aria-expanded` sync; add `closedby="any"` for light dismiss. axe also reports `aria-valid-attr-value` as incomplete on `.site-header__menu` at 390 (no `aria-expanded` until first open). Set `aria-expanded="false"` in markup. S.
14. **Height-based `zoom:` on the hero scene.** `HomeHero.astro:101-104`: `zoom: .7 to .94` keyed to `height`. Browser zoom shrinks viewport height, so on large monitors at 150-200% the board text gets smaller while the user is trying to enlarge it (applies only at width >= 64rem). Use container-based sizing (`cqi`) instead. 1.4.4. M.
15. **Hero ambient drift runs 22-32s.** `HomeHero.astro:49-56`, finite and decorative, but over 5s; reduced motion removes it and it is not looping. Cap to 5s or add to the pause story. 2.2.2 (borderline). S.
16. **Hero H1 entrance uses `filter: blur(8px)`.** `HomeHero.astro:112`. Animating blur on the LCP element can delay LCP against the 2.0s budget; measure with the existing lab runs. S.
17. **Dead CSS.** Unmatched selectors: `.pmodels__n` (`PartnerModels.astro:21`), `.td__n` (`TermsDoc.astro:44`), `.tz__slashes` (`TimeOverlap.astro:28`), `.eyebrow__slashes` (`Eyebrow.astro:9`). My scan flagged 66 candidates; the rest are dynamic classes or `:global` hooks. Cross-component coupling: `Statement.astro:43-46` styles `.ag__body`, `.ag__more`, `.wf` owned by other components via `:global`. S.
18. **Duplicated patterns.**
   - `.section-title` (`base.css:108`) and `.section-heading` (`patterns.css:6`) share the same clamp, weight, tracking and line-height. Merge.
   - Visually hidden code is re-implemented in `.bottom-bar__line` and `.pband__pause` instead of reusing `.sr-only`.
   - `1px solid var(--color-hairline)` appears 59 times and `color-mix(in oklab, var(--blue-300) N%, transparent)` 124 times with ad hoc N. Add 3 to 4 named tokens (`--line`, `--line-strong`, `--tint-1/2`).
   - `SliderArrows.astro` uses fallback values (`var(--dur-base, 160ms)`) that never apply.
   S to M.
19. **Magic numbers vs tokens.** About 47 raw `ms` durations, raw `z-index: 1/2/3` (`Chapters.astro:102-126`, `WayFlow.astro`), radii `18px/10px/4px` (`ProjectVisual.astro:42-47`, `ProjectRows.astro:74`), 6 raw `font-size` values. Map to `--dur-*`, `--z-*`, `--radius-*`. S.
20. **Modern replacements (progressive, mostly not Baseline).** CSS `::scroll-button()` and `::scroll-marker` could replace the arrow JS in `Showcase`/`Chapters` as an enhancement (keep JS fallback); `@container scroll-state(stuck: top)` could replace `data-scrolled`; scroll-driven `animation-timeline` could replace the sticky-bar IntersectionObserver. Do not do before launch.
21. **Small standalone targets.** `/book` email links are 21px tall (`CalEmbed.astro:22`, `book.astro:53`). They pass 2.5.8 through the spacing exception but miss the 44px preference. Add `min-block-size: 2.75rem; display: inline-flex; align-items: center`. S.

## Verified fine

- axe: 0 violations on `/`, `/book`, `/privacy` at 1280 and 390, including best-practice. Remaining "incomplete" items are gradient contrast (measured by hand below) and the third-party Cal iframe.
- Contrast: sampled 275 and 264 text nodes on home at 1280 and 390; none fail 4.5:1 (3:1 large). Muted text is `#6B6B6B` on paper and `blue-200` on ink; `#858585` appears only as large text and borders. Gradient cards and chapter slides read correctly in screenshots.
- Keyboard: skip link is first, visible and lands on `main`; tab order matches visual order on home (43 stops) and `/book` (20); no traps; every stop has a visible ring (card links show it on the card via `:has`); focus is never covered by the sticky header or bottom bar at 320, 390 and 1280 (2.4.11).
- Mobile menu: native modal `<dialog>`, focus starts on Close, Esc closes, focus returns to the Menu button.
- FAQ `<details>`: Space and Enter toggle; names are real summaries. Scroll rails are focusable regions with names and respond to arrow keys.
- Landmarks and headings: one H1, no skipped levels, banner, labelled navs, main, contentinfo, every section labelled; images have meaningful alt or `alt=""`; map has `role="img"` with a label.
- Targets: every visible interactive control is at least 44px except the three flagged (marquee Pause when hidden, two email links).
- Reduced motion: zero running animations on home; scroll reveals, view transitions and smooth scroll are all inside `no-preference`; `playOnce` skips under reduce.
- Forced colors: borders, buttons, map and cards stay visible except the logo (P1-3).
- Reflow: no horizontal scroll or clipped text at 640x400 (200%) and 320x256 (400%) on `/` and `/book`; the text-spacing override produced no clipping.
- RTL: `dir=rtl` on home and the NJWAR slide mirrors correctly (arrows, rails, copy, marquee direction); the only physical-axis CSS left is `translate` centring, with `:dir(rtl)` overrides where it matters. No physical `left/right/margin-left` found in `src`.
- No `outline: none` without a replacement ring; no third-party scripts run beyond the allowed beacon; JS is limited to small inline modules.
