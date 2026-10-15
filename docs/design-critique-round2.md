# Design critique: brand direction round 2 (D Signal, E Lab, F Blueprint)

## Context
- **Design:** `docs/brand-direction.html` (home hero, How it works, CTA band; desktop and 375px)
- **Reviewer:** Claude Code, using the `design-skills:design-critique` framework
- **Date:** 2026-10-15
- **Fidelity:** High-fi mockup (so brand alignment, contrast and visual design are in scope)
- **Persona:** Launch-stuck founder, US or GCC, with a Lovable/Bolt/Cursor or freelancer-built MVP (`context/02-icp-offer.md`)
- **Primary task:** Understand in 5 seconds what DiscoverDev does for them, then book a Launch-Ready Review
- **Brief from Mohamed:** techie, AI, premium; show that DiscoverDev builds with AI and moves fast; keep the plain founder-to-founder voice; follow the brand guidelines
- **Brand sources checked, in precedence order (CLAUDE.md):** `context/01-brand.md`, `context/06-design-system.md`, then the company profile deck brand system (`scratchpad.md` in the brand-profile handoff)

## First impression (5-second scan)
| | D Signal | E Lab | F Blueprint |
|---|---|---|---|
| What is this about? | Getting an AI-built app ready, by a technical team | Same, reads calmer and more "tool maker" | Same, reads "engineering firm" |
| Primary action | Clear, but the beam, grid, panel border glow and button glow all compete | Clear | Clear |
| Says "AI, fast, humans check"? | Yes, the run panel says it in the hero | Partly: dot texture plus sign-off card need a second look | Weakly: says "engineering", not "AI" |
| Overall | Mostly clear | Clear | Clear |

## Findings

### 1. Dark canvas is off-brand
**Severity:** 3 · **Principle:** brand consistency (06 §2 "one ramp, h≈264"; 01 identity colours) · **Location:** D canvas `#050A1F`, panels `#0B1438`, `#070E28`
- **Wrong:** Measured in OKLCH, `#050A1F` sits at hue 268.5 with chroma 0.046. The brand ramp sits at 263.6–264.0. It is a generic "AI dark", not DiscoverDev navy.
- **Why it matters:** The brand's recognisable asset is its blue. A neutral-ish dark makes D look like every dark AI site, which is the opposite of the goal.
- **Fix:** Extend the 06 ramp at the brand hue, the same way 06 derived it: `--blue-975 #01082D` (canvas, L 0.16) and `--blue-925 #02103E` (raised panels, L 0.20). Navy `#032993` stays for chapters, brand blue `#1240BE` for actions. Measured: white 19.39:1 and blue-300 10.80:1 on `#01082D`.

### 2. Small text in a decor-only blue
**Severity:** 3 · **Principle:** 06 §2–3 (`blue-400 #6C9AFF` is "decor / large only"); WCAG 1.4.3 · **Location:** D run-panel "AI" labels (11px mono), D step numbers, D eyebrow `#8FB0FF`
- **Wrong:** It passes on the new dark (7.17:1), but it breaks the brand rule that keeps the system consistent on navy, where it fails (4.42:1).
- **Fix:** All small mono text uses `--blue-300 #A2C1FE`. Keep `#6C9AFF` for dots, progress bars and the beam only.

### 3. Sign-off colour is not a brand token
**Severity:** 2 · **Principle:** consistency, semantic colour (colour = meaning) · **Location:** D/F mint `#7EF0C0`
- **Wrong:** Mint comes from the 2026 company profile deck, but 06 (newer, takes precedence) already defines the success colour on dark: `--green-300 #7FD8A6`.
- **Fix:** Human sign-off = `--color-success-text` on inverse (`#7FD8A6`, 11.43:1 on canvas). Sign-off then means the same thing as "Fixed" and "In production" everywhere. One token, one meaning.

### 4. Too many focal points in the D hero
**Severity:** 3 · **Principle:** visual hierarchy, Von Restorff effect, H8 (minimalist design), 06 §1 "Avoid glows" · **Location:** D hero
- **Wrong:** The squint test shows five bright things: the beam, the grid, the panel's border and shadow, the button glow, and the "5 days" chip inside the button. The H1 and CTA should win, and the run panel should come second.
- **Fix:**
  - Beam becomes the **06 §9.16 blade**: the logo's lower blade, flat tonal fill (`blue-800 → blue-700`, same hue), no blur. 06 already sanctions this device for the CTA band and OG image.
  - Remove the button glow.
  - Remove the chip inside the button: 06 §9.5 says the label carries nothing appended, and the same action must have the same label everywhere.
  - Keep one 1px panel border.

### 5. Motion runs too long
**Severity:** 2 · **Principle:** 06 §9.6 (the one orchestrated moment, ≤2.4s total); Doherty threshold · **Location:** D run panel
- **Wrong:** Human rows step at 700ms, so the sequence runs about 3.9s.
- **Fix:** Steps at 320ms (AI) and 480ms (human, `--dur-deliberate`), total ≤ 2.4s. Play once. Final state stays in the DOM. Reduced motion shows the final state.

### 6. Middle dots in metadata
**Severity:** 1 · **Principle:** 06 §1 "Avoid: metadata strings joined with middle dots" · **Location:** run-panel header, F eyebrows
- **Fix:** Lay metadata out with `gap` (flex). No separator characters.

### 7. Eyebrow on every section
**Severity:** 2 · **Principle:** 06 §9.22 (`//` motif at most twice per page, never on consecutive sections); 06 §1 "a label above every heading" · **Location:** E and F put an eyebrow on every section
- **Fix:** At most two per page. D uses one in the hero (machine voice) and one on How it works.

### 8. Primary button colour in E
**Severity:** 3 · **Principle:** H4 consistency, colour hierarchy (06 §9.5 primary = `--color-action-bg` brand blue) · **Location:** E black buttons
- **Wrong:** It breaks "blue = action" across the brand. On a grey canvas, a black button also reads as neutral rather than primary.
- **Fix:** If E were chosen, the primary stays `#1240BE`.

### 9. Too much navy in F
**Severity:** 2 · **Principle:** 06 §5 (inverse at most twice per page, never adjacent) · **Location:** F, where every section is navy
- **Fix:** Not fixable without losing the blueprint idea. F stays a reference, not a candidate.

### 10. Logo colourway on dark
**Severity:** 2 · **Principle:** 06 §11 colourways · **Location:** D/F headers
- **Wrong:** Uses the white mark PNG with "Dev" in `#8FB0FF`.
- **Fix:** On dark, the mark is `#A2C1FE`, "Discover" is `#FEFEFE` and "Dev" is `#A2C1FE` (06 §11). The interim build tints the PNG with a CSS mask. The wordmark must come from the official SVG (D-33), not typed in Manrope (06 §11 "Don't").

### 11. Run-panel strings are not in the copy deck
**Severity:** 2 · **Principle:** CLAUDE.md hard rule (copy from `03-copy.md` only; facts trace to `09-proof.md`) · **Location:** D run panel ("drops false alarms" etc.)
- **Wrong:** "Drops false alarms" is not a stated practice in `09-proof.md`.
- **Fix:**
  - Human rows use approved wording:
    - "Senior engineers own the quality"
    - "A person is responsible for every line that reaches your users"
    - "Verdict: keep, fix or replace"
  - AI rows name the six Review areas from 03 §3.4.
  - Add the panel's strings to `03-copy.md` (§2.2 visual), then build.

### 12. Monospace font choice
**Severity:** 1 · **Principle:** brand consistency vs performance budget · **Location:** all three use JetBrains Mono; 06 says "system mono, no webfont"
- **Wrong:** The deck (brand guideline) uses JetBrains Mono for eyebrows and the terminal motif; 06 chose the system mono for speed.
- **Fix:** Adopt JetBrains Mono as the brand's machine voice. Latin subset, weights 400–500, no preload. That makes 3 font files in total, inside the 07 §13 budget (≤ 3 files, ≤ 120 KB). Record it in 06 §4.

## What's working well
- The brand idea "machine speed, human sign-off" maps directly onto the proof bank's method line, "AI does the heavy lifting. Senior engineers own the quality." It is truthful, not decoration.
- D shows the offer in the first screen. That is the cro-ux "show the deliverable" rule, and it is the strongest Von Restorff element on the page.
- Copy is verbatim and the voice is intact: no hype words, no exclamation marks.
- All text pairs measured pass AA. The lowest was `#7F8BAA` at 5.27:1, which is replaced anyway.
- Layer chips ("AI-accelerated", "Senior sign-off") make the method visible on the process steps (H6: recognition over recall).

## Missing states check (for the build)
| State | Present? | Notes |
|---|---|---|
| Default / hover / focus | Partly | Focus ring on dark must be white (06 inverse `--color-focus`); define a hover for the run panel's link rows |
| Reduced motion | Yes | Final state shown |
| Loading | n/a | Cal embed states come in M4 |
| Empty (gated content hidden) | No | The design must still hold when proof is gated: hero and run panel need no client data. Good. |

## Summary
| Severity | Count |
|---|---|
| 3 Major | 4 (findings 1, 2, 4, 8) |
| 2 Moderate | 6 |
| 1 Minor | 2 |

### Top 3 priorities
1. Put D on the brand ramp: `#01082D` / `#02103E`, blue-300 for small text, green-300 for sign-off (findings 1–3).
2. One focal device: the 06 blade, flat and tonal, with no glows (finding 4).
3. Run-panel copy in `03-copy.md` and timing ≤ 2.4s (findings 5, 11).

### Decision
D, with these fixes, becomes **"Signal, brand-locked"**: the only direction that meets the brief and the guidelines at once. E is the fallback if a light site is preferred. F is out.
