# Proposed 06 extension: Signal (brand-locked)

Status: **approved 2026-10-15 and merged into `context/06-design-system.md` §0, `context/01-brand.md` and `context/03-copy.md` §2.2a.** On approval, this merges into `context/06-design-system.md` (§2 tokens, §4 type, §5 surfaces, §9 components) and `context/01-brand.md` (identity line). Built with the `design-skills:design-systems` method: three token tiers (reference → semantic → component), and components specified by purpose, anatomy, variants, states, a11y, tokens and RTL.

## 1. What changes, and what doesn't
| Area | 06 today | Signal | Why |
|---|---|---|---|
| Brand colours | #1240BE, #032993, #FEFEFE, #0F0F0F, #858585 | **Unchanged** | 01 identity is locked |
| Blue ramp | 50–950 | **+ `blue-925` #02103E, `blue-975` #01082D** | Derived at brand hue h 263.6 in OKLCH (06 §2 method). Gives a dark canvas that is still DiscoverDev blue |
| Default surface | light | **Marketing heroes and process sections = `ink`. Reading content = `paper` (today's light).** | Brief concept: workshop and report |
| Inverse limit | navy ≤ 2 sections per page | **Rewritten:** `ink` allowed on any section; `navy` chapter ≤ 1 + CTA band; `paper` required for FAQ, articles, legal, book, quiz | Keeps long reading light and keeps Cal.com on a light surface |
| Mono font | system stack, no webfont | **JetBrains Mono** (latin subset, 400–500, no preload) | Brand deck uses it; 3 font files total stays inside 07 §13 (≤ 3 files, ≤ 120 KB) |
| Glow, gradients | avoided | **Still avoided.** Only the blade's tonal fill and the 1px hero grid | Critique finding 4 |
| Sign-off colour | n/a | **`--green-300` on ink, `--green-700` on paper** (existing success tokens) | Critique finding 3: one token, one meaning |
| Signature | ReviewSnapshot | **RunPanel (ink) + ReviewSnapshot (paper)** | The two layers of the brand idea |

## 2. Tokens (diff to `tokens.css`)
```css
:root {
  /* Reference tier: ramp extension (OKLCH h≈263.6, chroma reduced to stay in gamut) */
  --blue-925: #02103E;   /* L 0.20, ink raised */
  --blue-975: #01082D;   /* L 0.16, ink canvas */

  /* Reference tier: type */
  --ff-mono: var(--font-mono, "JetBrains Mono", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace);

  /* Semantic tier: two-layer brand voice (new) */
  --color-machine-text:  var(--blue-700);   /* AI layer, small text on paper: 8.32:1 */
  --color-machine-mark:  var(--blue-600);   /* dots, bars on paper (decor) */
  --color-human-text:    var(--green-700);  /* human sign-off on paper: 6.53:1 */
  --color-human-mark:    var(--green-700);
  --color-hairline:      var(--color-border-subtle);
}

/* Surfaces (semantic remap). paper = today's :root defaults, named explicitly */
[data-surface="paper"] { /* inherits :root light semantics */ --color-bg: var(--neutral-0); }

[data-surface="ink"] {
  --color-bg:             var(--blue-975);
  --color-surface:        var(--blue-925);
  --color-surface-sunken: var(--blue-925);
  --color-text:           var(--neutral-0);      /* 19.39:1 */
  --color-heading:        var(--neutral-0);
  --color-text-muted:     var(--blue-200);       /* 14.02:1 */
  --color-text-subtle:    var(--blue-300);       /* 10.80:1 */
  --color-accent-text:    var(--blue-300);
  --color-link:           var(--blue-300);
  --color-link-hover:     var(--neutral-0);
  --color-border-subtle:  rgb(162 193 254 / 0.14);
  --color-border-accent:  var(--blue-800);
  --color-border-control: var(--blue-300);
  --color-border-interactive: var(--neutral-0);
  --color-focus:          var(--neutral-0);      /* 19.39:1 */
  --color-action-bg:        var(--blue-700);     /* brand blue stays the action colour; white text 8.32:1 */
  --color-action-bg-hover:  var(--blue-600);
  --color-action-bg-active: var(--blue-800);
  --color-action-text:      var(--neutral-0);
  --color-action-border:    rgb(162 193 254 / 0.40); /* edge on ink */
  --color-action-2-text:       var(--neutral-0);
  --color-action-2-text-hover: var(--neutral-0);
  --color-action-2-bg-hover:   var(--blue-925);
  --color-action-2-border:     rgb(162 193 254 / 0.40);
  --color-machine-text:   var(--blue-300);       /* 10.80:1 */
  --color-machine-mark:   var(--blue-400);       /* decor only */
  --color-human-text:     var(--green-300);      /* 11.43:1 */
  --color-human-mark:     var(--green-300);
  --color-success-text:   var(--green-300);
  --color-warning-text:   var(--amber-300);
  --color-error-text:     var(--red-300);
  --color-code-prompt:    var(--blue-300);
  --color-hairline:       rgb(162 193 254 / 0.14);
  color-scheme: dark;
}
/* inverse (navy chapter) and footer stay as in 06 §2 */
```
- Component code still reads **semantic tokens only** (06 rule). `--color-machine-*` and `--color-human-*` replace any literal blue or green in the RunPanel, layer chips and sign-off marks.
- **Never on ink:** `#1240BE` as text (2.2:1), `#858585` small text, `#6C9AFF` small text.

## 3. Type (06 §4 additions)
| Role | Font | Size | Weight | Use |
|---|---|---|---|---|
| Machine | JetBrains Mono | `--text-sm` (14→15) | 400/500 | RunPanel rows, file names, eyebrows (≤ 2 per page), `CommandLine` (≤ 1 per page) |
| Machine label | JetBrains Mono | `--text-xs` (13) | 500 | "AI", "Senior engineer" row labels, layer chips |
| Display (ink) | Manrope | `--text-4xl` | 800, tracking −0.035em | Home hero only (was −0.025em; tighter reads more precise on dark) |
- Astro Fonts API: add `{ provider: fontsource(), name: 'JetBrains Mono', cssVariable: '--font-mono', weights: ['400 500'], subsets: ['latin'] }`. Not preloaded. First view: Manrope (preload), Rubik and JetBrains Mono, so 3 files.

## 4. Surface map (home), replaces 06 §5 table
| # | Section | Surface |
|---|---|---|
| 2 | Hero + RunPanel + blade | ink (+ hairline grid) |
| 3 | Proof strip | ink (hairline top and bottom) |
| 4 | Problem | ink |
| 5 | Offer spotlight + ReviewSnapshot | **paper** (the report) |
| 6 | How it works (layer chips) | ink |
| 7 | Choose your path | paper alt (blue-50) |
| 8 | Case highlight (EduLens, gated) | paper |
| 9 | Why DiscoverDev | ink |
| 10–11 | Team, testimonials (gated) | paper |
| 12 | FAQ | paper |
| 13 | CTA band + blade | inverse (navy #032993) |
| 14 | Footer | footer (blue-950) |
- Rule: switch surface only when the topic changes. Ink → paper transitions are hard edges, no gradients.
- Reading templates (article, legal, `/book`, `/launch-check`): paper throughout, ink header only.

## 5. New components (spec per `design-systems` template)

### RunPanel (organism)
- **Purpose:** show how a Launch-Ready Review runs: AI does the checks, people sign off. The brand idea in one object.
- **Anatomy:** `<figure>` > header (title + "Example, not a client", laid out with gap) > `<ol>` of rows > footer (method line) + `<figcaption>`.
  - **AI row:** mark (8px dot, `--color-machine-mark`), label "AI" (machine label), task (machine), state "done", progress bar (decor).
  - **Human row:** mark (18px check, `--color-human-mark`), role label, decision (Manrope 700), state "Signed off" (`--color-human-text`).
- **Variants:** `full` (6 AI rows, the six Review areas from 03 §3.4, + 2 human rows; desktop), `compact` (3 AI + 2 human; < 64rem), `static` (no motion; used in OG and print).
- **States:** final (DOM truth, always present); playing (visual overlay: AI rows show "checking", human rows "waiting", both `aria-hidden`); done.
- **Behaviour:** plays once at 50% visibility. AI rows step at 320ms, human rows at 480ms, total ≤ 2.4s. Never loops. Reduced motion shows the final state.
- **Content:**
  - Row text ≤ 48 characters.
  - Strings come from `03-copy.md` §2.2 (to be added).
  - AI rows name the six Review areas.
  - Human rows use proof-bank method lines only:
    - "Senior engineers own the quality"
    - "Verdict: keep, fix or replace"
- **A11y:** `<figure>` + `<figcaption>` "Example of how a Launch-Ready Review runs". States are text, not colour alone. Animated overlays are `aria-hidden`.
- **Tokens:** `--color-surface`, `--color-hairline`, `--color-machine-*`, `--color-human-*`, `--ff-mono`, `--dur-fast`, `--dur-deliberate`, `--radius-lg`.
- **Responsive:** `@container (inline-size >= 30rem)` shows the full variant.
- **RTL:** rows mirror; progress fills from inline-start; mono strings in `<bdi dir="ltr">`.
- **Related:** ReviewSnapshot (paper, the output); ProcessSteps (layer chips).

### LayerChip (atom)
- **Purpose:** mark which layer does a step: `AI-accelerated` (machine) or `Senior sign-off` (human).
- **Anatomy:** inline element: 6px mark + mono label (`--text-xs` 500), padding 2px 8px, `--radius-xs`.
- **Variants:** `machine`, `human`. Max 2 per card.
- **States:** static, not interactive.
- **A11y:** text always present; mark `aria-hidden`.
- **Tokens:** `--color-machine-text` / `--color-human-text` on a 12% tint of the same token (`color-mix(in oklab, token 12%, transparent)`).

### Blade (decor atom), refines 06 §9.16
- **Anatomy:** the logo's lower blade polygon, cropped off the inline-end edge, `aria-hidden`.
- **Fill:** linear `--blue-800 → --blue-700` (same hue, tonal). No blur, no glow. Opacity 0.5 on ink, 1 on navy.
- **Where:** home hero, CTA band, OG. At most 1 per viewport. Mirrors in RTL.

### HairlineGrid (decor)
- 1px lines in `--color-hairline` at 80px, masked by a radial fade to 0 by 85%. Ink heroes only.

## 6. Contrast table additions (computed, WCAG 2.x)
| Foreground | Background | Ratio | Needs | Result |
|---|---|---|---|---|
| #FEFEFE | ink #01082D | 19.39 | 4.5 | Pass |
| #C9DBFF (muted) | ink | 14.02 | 4.5 | Pass |
| #A2C1FE (machine, link) | ink | 10.80 | 4.5 | Pass |
| #A2C1FE | raised #02103E | 10.12 | 4.5 | Pass |
| #7FD8A6 (human) | ink | 11.43 | 4.5 | Pass |
| #7FD8A6 | raised | 10.71 | 4.5 | Pass |
| #FEFEFE on action #1240BE | — | 8.32 | 4.5 | Pass |
| #6C9AFF | ink | 7.17 | — | Decor only (rule kept for navy, where it fails) |
| #858585 | ink | 5.30 | — | Do not use on ink (keep one rule: grey is light-surface decor) |

## 7. Lint and governance
- `css-logical-lint` unchanged. Add `scripts/token-lint.mjs`: fail on raw hex in `src/components/**` (06 "semantic tokens only").
- Changelog: record this as 06 v1.1 (2026-10-16) with "Signal" and link to `docs/creative-brief-signal.md`.
