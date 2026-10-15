# 06 · Design system and visual direction

DiscoverDev marketing site. Astro 7 static, plain CSS custom properties, logical properties only, no Tailwind. WCAG 2.2 AA. English live Nov 2026, `/ar` RTL in Q1 2027.
Status: v1.1 spec (Signal), 2026-10-15. v1 spec, 2026-10-15. Inputs: source brief (locked decisions), `research/cro-ux.md`, `research/tech-stack.md`, `research/market-voc.md`, logo JPG.
**[needed]** = asset or decision the build cannot invent.

---

## 0. Signal amendments (v1.1, approved by Mohamed 2026-10-15)

**These rules supersede the sections below wherever they conflict:** §1 (visual direction: the concept is now *machine speed, human sign-off* with the workshop (ink) and the report (paper)), §2 (tokens: added below and in the §2 CSS block), §4 (mono font), §5 (surface map), §9.6/§9.11/§9.16 (signature, hero surface, blade). Everything else in this file still applies. Background: `docs/design-critique-round2.md`, `docs/creative-brief-signal.md`.

### 0.1 What changes, and what doesn't
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

### 0.2 Tokens (diff to `tokens.css`)
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

### 0.3 Type (06 §4 additions)
| Role | Font | Size | Weight | Use |
|---|---|---|---|---|
| Machine | JetBrains Mono | `--text-sm` (14→15) | 400/500 | RunPanel rows, file names, eyebrows (≤ 2 per page), `CommandLine` (≤ 1 per page) |
| Machine label | JetBrains Mono | `--text-xs` (13) | 500 | "AI", "Senior engineer" row labels, layer chips |
| Display (ink) | Manrope | `--text-4xl` | 800, tracking −0.035em | Home hero only (was −0.025em; tighter reads more precise on dark) |
- Astro Fonts API: add `{ provider: fontsource(), name: 'JetBrains Mono', cssVariable: '--font-mono', weights: ['400 500'], subsets: ['latin'] }`. Not preloaded. First view: Manrope (preload), Rubik and JetBrains Mono, so 3 files.

### 0.4 Surface map (home), replaces 06 §5 table
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

**v3 amendment (approved by Mohamed 2026-10-16, "roll the home v3 look across the service, About, Partners and Work pages"):** the table above is superseded by the home v3 build (`03` §2A, `docs/strategy-v2.md`). Home, `/validate`, `/build`, `/scale`, `/partners`, `/about`, `/work`, `/work/*` and `/launch-ready` are **all-ink** ("workshop"): sections separate with a 1px hairline, alternate sections may use the `raised` variant (ink with a faint blue-975 → surface gradient), and the closing band is the ink "horizon" (brand-blue radial light from below) instead of the navy blade. Paper appears inside ink only as a document (the Review report). The footer is ink too, separated by a hairline (the blue-950 footer read as a different system under an all-ink page); footer link rows use a 32px target (WCAG 2.5.8 needs 24px). Reading templates keep paper. Section titles: Manrope semibold, `clamp(1.75rem, 1.2rem + 2.2vw, 3rem)`, tracking −0.035em; hero H1s bold, tracking −0.045em. Cards: radius-lg, hairline border, ink-to-blue-800 gradient, pointer spotlight on fine pointers.

### 0.5 New components (spec per `design-systems` template)

#### RunPanel (organism)
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

#### LayerChip (atom)
- **Purpose:** mark which layer does a step: `AI-accelerated` (machine) or `Senior sign-off` (human).
- **Anatomy:** inline element: 6px mark + mono label (`--text-xs` 500), padding 2px 8px, `--radius-xs`.
- **Variants:** `machine`, `human`. Max 2 per card.
- **States:** static, not interactive.
- **A11y:** text always present; mark `aria-hidden`.
- **Tokens:** `--color-machine-text` / `--color-human-text` on a 12% tint of the same token (`color-mix(in oklab, token 12%, transparent)`).

#### Blade (decor atom), refines 06 §9.16
- **Anatomy:** the logo's lower blade polygon, cropped off the inline-end edge, `aria-hidden`.
- **Fill:** linear `--blue-800 → --blue-700` (same hue, tonal). No blur, no glow. Opacity 0.5 on ink, 1 on navy.
- **Where:** home hero, CTA band, OG. At most 1 per viewport. Mirrors in RTL.

#### HairlineGrid (decor)
- 1px lines in `--color-hairline` at 80px, masked by a radial fade to 0 by 85%. Ink heroes only.

### 0.6 Contrast table additions (computed, WCAG 2.x)
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

### 0.7 Lint and governance
- `css-logical-lint` unchanged. Add `scripts/token-lint.mjs`: fail on raw hex in `src/components/**` (06 "semantic tokens only").
- Changelog: record this as 06 v1.1 (2026-10-16) with "Signal" and link to `docs/creative-brief-signal.md`.

---

## 1. Visual direction

### Concept: "the review on the desk"
The front door is a senior review of a founder's app. The site looks like the work itself: a calm, bright room with an engineer's findings laid out, plainly ranked, with a fix and a price beside each. Evidence objects (findings, timelines, screenshots, verified metrics, real faces) carry the pages. Nothing abstract stands in for proof.

Mood words: precise, candid, calm, bright, specific.

### Principles
1. **Show the work, not the promise.** Every major section carries an evidence object: a findings list, a Day 0–5 timeline, a product screenshot, a verified metric, a named quote. No illustration stands in for evidence.
2. **One door per screen.** One filled button per viewport. Everything else is an outline button or a text link. Hierarchy serves the booking, not decoration.
3. **Engineer's precision, founder's warmth.** Exact grid, tight Manrope headings, crisp small radii. Warmth comes from Rubik body copy, generous space, real people and plain words, not from colour gimmicks.
4. **Blue is earned.** Colour budget per page: about 85% white and neutrals, 10% navy (chapters and the closing band), 5% brand blue for actions, links, focus and finding states. Blue never decorates.
5. **Built for both directions.** Every layout is written in logical properties and checked mirrored. Nothing depends on left or right.

### Signature (spend the boldness here only)
**ReviewSnapshot**: a findings panel styled like a page of the Launch-Ready Review report (severity, finding, area, status, verdict). It appears in the home hero and on `/launch-ready`. Its one-time load sequence (statuses flip from open to planned to fixed) is the site's only orchestrated motion. Everything around it stays quiet. Spec in §9.6.

### Avoid
- Purple or violet gradients, mesh gradients, glassmorphism, glows, 3D blobs, isometric scenes.
- Stock photos: handshakes, over-the-shoulder laptops, dark rooms with green code, rockets (despite "launch"), robots, glowing brains, AI sparkle icons, world maps with dots.
- AI-generated people. Never.
- Stat-counter bars, animated number roll-ups, logo marquees, carousels.
- Cream backgrounds, tinted near-black stand-ins, all-caps tracked labels, a label above every heading, metadata strings joined with middle dots, arrows appended to link or button text.
- Fade-and-slide on every section. Hover-lift on every card.
- One accent word coloured inside a headline.
- Heavy terminal aesthetic. The `$` and `// .config` motif is an accent, used at most twice per page (§9.22).

### Standing apart from the field
What the research recorded, and the visual answer. Goji's and TrianglZ's visual styles were not audited, only their copy, proof and CTAs.

| Competitor (research) | Their pattern | DiscoverDev visual answer |
|---|---|---|
| Robusta (RTG) | Enterprise scale: "AI-native future" hero, 6-stat bar, 42-logo wall, 2 competing CTAs, no process, team, price or booking, no Arabic | A founder's specific problem as the hero, with an evidence panel instead of a stat bar. One CTA. A visible process strip, real team faces, a price cue, inline booking, RTL-ready from day one. No logo wall until consented logos exist, and then at most 6, static. |
| Goji Labs | Strategy-first product agency, award and volume proof (91 Clutch reviews), "Get Started" | Don't compete on volume. Show depth: findings, a fix-or-rebuild verdict, named senior people. Same "think before build" story told through the review artifact. |
| TrianglZ (same city) | Playful, clever tone, many engagement modes (choice overload), Clutch badges | Plain and calm. One front door, then 4 paths in a single card row. Clutch shown as text plus a link, never a badge wall. |
| Rescue specialists (RapidDev, metacto, Valletta) | Second-person hero, "send us the repo", scanner-report look | The same directness plus a product lens (verdict and scope), the guarantee beside the button, and an Arabic and English team. |

---

## 2. Tokens: `src/styles/tokens.css`

Rules:
- Components read **semantic** tokens only. Primitives are referenced only inside this file.
- Surfaces remap semantic tokens through `data-surface`, so one component works on white, alt, navy and footer without variants.
- **Light theme only in v1** (`color-scheme: light`). Navy sections are the dark expression. A `prefers-color-scheme: dark` theme is deferred and would only remap the semantic block.
- Blue and navy share one hue (OKLCH h≈264), so they form **one ramp**: brand blue `#1240BE` = `blue-700`, brand navy `#032993` = `blue-800`. Tints and shades were derived in OKLCH, with chroma reduced to stay in gamut. Brand values are pinned exactly.

```css
/* tokens.css — DiscoverDev v1 (2026-10-15). Semantic tokens only in components. */
:root {
  color-scheme: light;

  /* ---------- Primitives: blue ramp (navy = blue-800) ---------- */
  --blue-50:  #F3F7FE;
  --blue-100: #E5EDFE;
  --blue-200: #C9DBFF;
  --blue-300: #A2C1FE;
  --blue-400: #6C9AFF;  /* decor / large only */
  --blue-500: #396FF0;  /* decor only: 4.42:1 on white */
  --blue-600: #2152D1;
  --blue-700: #1240BE;  /* BRAND primary */
  --blue-800: #032993;  /* BRAND dark navy */
  --blue-900: #032177;
  --blue-950: #001155;
  --blue-975: #01082D;  /* Signal: ink canvas (L .16, h 263.6) */
  --blue-925: #02103E;  /* Signal: ink raised (L .20). Sits between 900 and 950 in darkness, kept as a named step */

  /* ---------- Primitives: neutrals (brand grey/black pinned) ---------- */
  --neutral-0:   #FEFEFE;  /* BRAND white */
  --neutral-50:  #F5F5F5;
  --neutral-100: #EBEBEB;
  --neutral-200: #DADADA;
  --neutral-300: #C2C2C2;
  --neutral-400: #A3A3A3;
  --neutral-500: #858585;  /* BRAND grey: large text, UI borders, decor ONLY */
  --neutral-600: #6B6B6B;  /* small muted text */
  --neutral-700: #4F4F4F;
  --neutral-800: #333333;
  --neutral-900: #1F1F1F;
  --neutral-950: #0F0F0F;  /* BRAND black */

  /* ---------- Primitives: status ---------- */
  --green-50: #E7F6EC;  --green-300: #7FD8A6;  --green-700: #106B3B;
  --amber-50: #FFF3DC;  --amber-300: #FFD58A;  --amber-700: #8A4B00;
  --red-50:   #FDECEA;  --red-300:   #FFB4AB;  --red-700:   #B3261E;

  /* ---------- Semantic: colour (default = light surface) ---------- */
  --color-bg:               var(--neutral-0);
  --color-surface:          var(--neutral-0);   /* cards, panels */
  --color-surface-alt:      var(--blue-50);     /* alternating sections */
  --color-surface-sunken:   var(--neutral-50);  /* code, table head, panel header */
  --color-text:             var(--neutral-950);
  --color-heading:          var(--blue-800);
  --color-text-muted:       var(--neutral-600);
  --color-text-subtle:      var(--neutral-500); /* >=24px, or >=18.66px bold. Never body. */
  --color-accent-text:      var(--blue-600);
  --color-link:             var(--blue-700);
  --color-link-hover:       var(--blue-800);
  --color-border-subtle:    var(--neutral-200); /* decor: dividers, card rest */
  --color-border-accent:    var(--blue-200);    /* decor: connectors, quote glyph */
  --color-border-control:   var(--neutral-500); /* inputs, radios, option cards: 3.66:1 */
  --color-border-interactive: var(--blue-700);  /* hover/selected */
  --color-focus:            var(--blue-700);

  --color-action-bg:            var(--blue-700);
  --color-action-bg-hover:      var(--blue-800);
  --color-action-bg-active:     var(--blue-900);
  --color-action-text:          var(--neutral-0);
  --color-action-2-text:        var(--blue-700);   /* secondary/outline */
  --color-action-2-text-hover:  var(--blue-800);
  --color-action-2-bg-hover:    var(--blue-50);
  --color-action-2-border:      var(--blue-700);
  --color-disabled-bg:          var(--neutral-100);
  --color-disabled-text:        var(--neutral-500); /* exempt from 1.4.3; still 3.18:1 */

  --color-success-text: var(--green-700);  --color-success-bg: var(--green-50);
  --color-warning-text: var(--amber-700);  --color-warning-bg: var(--amber-50);
  --color-error-text:   var(--red-700);    --color-error-bg:   var(--red-50);
  --color-info-text:    var(--blue-800);   --color-info-bg:    var(--blue-100);
  --color-neutral-badge-text: var(--neutral-700);
  --color-neutral-badge-bg:   var(--neutral-100);
  --color-progress-track: var(--blue-100);
  --color-progress-fill:  var(--blue-700);
  --color-code-prompt:    var(--blue-700);

  /* ---------- Typography ---------- */
  /* --font-heading / --font-body / --font-arabic are emitted by Astro <Font cssVariable> with fallbacks */
  --ff-heading: var(--font-heading, "Manrope", system-ui, sans-serif);
  --ff-body:    var(--font-body, "Rubik", system-ui, sans-serif);
  --ff-mono:    var(--font-mono, "JetBrains Mono", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace); /* Signal: JetBrains Mono via Astro Fonts */

  /* Fluid scale 375px -> 1440px. Min ratio 1.2, max ratio 1.333. Base 16 -> 18px. */
  --text-xs:   0.8125rem;                                         /* 13px: badges only */
  --text-sm:   clamp(0.875rem, 0.853rem + 0.094vw, 0.9375rem);    /* 14 -> 15 */
  --text-base: clamp(1rem, 0.956rem + 0.188vw, 1.125rem);         /* 16 -> 18 */
  --text-lg:   clamp(1.2rem, 1.095rem + 0.45vw, 1.5rem);          /* 19.2 -> 24 */
  --text-xl:   clamp(1.44rem, 1.243rem + 0.839vw, 2rem);          /* 23 -> 32 */
  --text-2xl:  clamp(1.728rem, 1.398rem + 1.407vw, 2.664rem);     /* 27.6 -> 42.6 */
  --text-3xl:  clamp(2.074rem, 1.553rem + 2.221vw, 3.552rem);     /* 33.2 -> 56.8 */
  --text-4xl:  clamp(2.488rem, 1.697rem + 3.376vw, 4.735rem);     /* 39.8 -> 75.8, home hero only */

  --leading-display: 1.08;
  --leading-tight:   1.15;
  --leading-snug:    1.3;
  --leading-ui:      1.25;
  --leading-body:    1.6;

  --tracking-display: -0.025em;
  --tracking-tight:   -0.02em;
  --tracking-snug:    -0.01em;
  --tracking-body:    0;

  --weight-regular: 400;  --weight-medium: 500;  --weight-semibold: 600;
  --weight-bold: 700;     --weight-extrabold: 800;

  --measure-prose: 68ch;
  --measure-lead:  56ch;
  --measure-display: 18ch;
  --measure-heading: 24ch;

  /* ---------- Space (4px base) ---------- */
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;  --space-4: 1rem;
  --space-5: 1.25rem;  --space-6: 1.5rem;   --space-8: 2rem;     --space-10: 2.5rem;
  --space-12: 3rem;    --space-16: 4rem;    --space-20: 5rem;    --space-24: 6rem;  --space-32: 8rem;
  --section-y:    clamp(3.5rem, 2.092rem + 6.009vw, 7.5rem);   /* 56 -> 120 */
  --section-y-sm: clamp(2.5rem, 1.796rem + 3.005vw, 4.5rem);   /* 40 -> 72 */
  --stack-lg:     clamp(2rem, 1.472rem + 2.254vw, 3.5rem);     /* section head -> content */
  --gutter:       clamp(1rem, 0.472rem + 2.254vw, 2.5rem);     /* 16 -> 40 */
  --grid-gap:     clamp(1rem, 0.648rem + 1.502vw, 2rem);       /* 16 -> 32 */

  /* ---------- Layout ---------- */
  --container-prose:  42rem;  /* 672px ≈ 68ch Rubik 18px */
  --container-narrow: 48rem;
  --container:        76rem;  /* 1216px content */
  --container-wide:   90rem;  /* full-bleed media cap */
  --header-h: 4rem;           /* 64px; 72px from 64rem (set in base.css) */
  --bottom-bar-h: 0px;        /* set to 4.5rem + safe-area when the mobile bar is visible */
  /* Breakpoints (custom properties can't be used in @media; use these literals):
     sm 40rem (640) · md 48rem (768) · lg 64rem (1024) · xl 80rem (1280)
     Syntax: @media (width >= 64rem). Prefer container queries for components. */

  /* ---------- Radii (grow with container size) ---------- */
  --radius-xs: 4px;    /* inline code, kbd */
  --radius-sm: 6px;    /* buttons, inputs, quiz options */
  --radius-md: 10px;   /* cards */
  --radius-lg: 16px;   /* panels, ReviewSnapshot, embed, media frames */
  --radius-pill: 999px;/* badges */

  --border-1: 1px;
  --border-2: 2px;

  /* ---------- Shadows (navy-tinted, used sparingly) ---------- */
  --shadow-xs: 0 1px 2px rgb(3 41 147 / 0.06);
  --shadow-sm: 0 1px 2px rgb(3 41 147 / 0.06), 0 2px 6px rgb(3 41 147 / 0.06);
  --shadow-md: 0 2px 4px rgb(3 41 147 / 0.06), 0 8px 24px rgb(3 41 147 / 0.10);
  --shadow-lg: 0 4px 8px rgb(3 41 147 / 0.08), 0 24px 48px rgb(3 41 147 / 0.16);
  --shadow-up: 0 -2px 12px rgb(3 41 147 / 0.10); /* mobile bottom bar */

  /* ---------- Focus ---------- */
  --focus-width: 2px;
  --focus-offset: 2px;

  /* ---------- Motion ---------- */
  --dur-color:      150ms;  /* colour/border changes; kept under reduced motion */
  --dur-fast:       150ms;
  --dur-base:       220ms;
  --dur-slow:       320ms;  /* header hide/show, menu sheet */
  --dur-deliberate: 480ms;  /* ReviewSnapshot row step */
  --ease-standard:  cubic-bezier(0.2, 0, 0, 1);
  --ease-enter:     cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-exit:      cubic-bezier(0.3, 0, 0.8, 0.15);
  --motion-distance: 8px;

  /* ---------- Z-index ---------- */
  --z-base: 0;
  --z-raised: 1;        /* stretched card link */
  --z-sticky: 100;      /* mobile bottom bar */
  --z-header: 200;
  --z-dropdown: 300;    /* services panel */
  --z-toast: 500;
  --z-skip: 600;
  /* <dialog> (mobile menu) renders in the top layer: no z-index needed */
}

/* ---------- Surfaces: remap semantics ---------- */
[data-surface="alt"]    { --color-bg: var(--color-surface-alt); }
[data-surface="sunken"] { --color-bg: var(--color-surface-sunken); }

[data-surface="inverse"],
[data-surface="footer"] {
  --color-bg:             var(--blue-800);
  --color-surface:        var(--blue-900);  /* raised panels on navy */
  --color-surface-sunken: var(--blue-900);
  --color-text:           var(--neutral-0);
  --color-heading:        var(--neutral-0);
  --color-text-muted:     var(--blue-200);
  --color-text-subtle:    var(--blue-300);
  --color-accent-text:    var(--blue-300);
  --color-link:           var(--blue-300);
  --color-link-hover:     var(--neutral-0);
  --color-border-subtle:  rgb(254 254 254 / 0.16);
  --color-border-accent:  var(--blue-700);  /* tonal decor */
  --color-border-control: var(--blue-300);
  --color-border-interactive: var(--neutral-0);
  --color-focus:          var(--neutral-0);
  --color-action-bg:        var(--neutral-0);
  --color-action-bg-hover:  var(--blue-100);
  --color-action-bg-active: var(--blue-200);
  --color-action-text:      var(--blue-800);
  --color-action-2-text:       var(--neutral-0);
  --color-action-2-text-hover: var(--neutral-0);
  --color-action-2-bg-hover:   var(--blue-900);
  --color-action-2-border:     var(--neutral-0);
  --color-success-text: var(--green-300);
  --color-warning-text: var(--amber-300);
  --color-error-text:   var(--red-300);
  --color-code-prompt:  var(--blue-300);
  color-scheme: dark;   /* native controls/scrollbars inside navy */
}
[data-surface="footer"] { --color-bg: var(--blue-950); }

/* ---------- Arabic ---------- */
:root:lang(ar) {
  --ff-heading: var(--font-arabic, "IBM Plex Sans Arabic", system-ui, sans-serif);
  --ff-body:    var(--font-arabic, "IBM Plex Sans Arabic", system-ui, sans-serif);
  --leading-display: 1.3;
  --leading-tight:   1.35;
  --leading-snug:    1.5;
  --leading-ui:      1.4;
  --leading-body:    1.8;
  --tracking-display: 0; --tracking-tight: 0; --tracking-snug: 0; --tracking-body: 0;
  --measure-display: 22ch; --measure-heading: 28ch;  /* Arabic runs ~20–30% longer */
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-fast: 1ms; --dur-base: 1ms; --dur-slow: 1ms; --dur-deliberate: 1ms;
    --motion-distance: 0px;
    /* --dur-color is kept: colour changes are not motion */
  }
}
```

**`base.css` essentials** (outside tokens, listed so nothing is forgotten):
```css
@media (width >= 64rem) { :root { --header-h: 4.5rem; } }
html { scroll-padding-block-start: calc(var(--header-h) + var(--space-4));
       scroll-padding-block-end: calc(var(--bottom-bar-h) + var(--space-4)); }
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
  @view-transition { navigation: auto; }
}
body { background: var(--color-bg); color: var(--color-text); font-family: var(--ff-body);
       font-size: var(--text-base); line-height: var(--leading-body);
       font-size-adjust: from-font; -webkit-text-size-adjust: 100%; }
:where([data-surface]) { background: var(--color-bg); color: var(--color-text); }
:focus-visible { outline: var(--focus-width) solid var(--color-focus); outline-offset: var(--focus-offset); }
h1, h2, h3, h4 { font-family: var(--ff-heading); color: var(--color-heading); text-wrap: balance; }
p, li, dd { text-wrap: pretty; }
```

---

## 3. Contrast table (computed)

Method: WCAG 2.x relative-luminance formula, run with a Python script kept in the session scratchpad, outside the project. It exits non-zero on any failure, and every required pair passes. Re-verify in CI with axe `color-contrast` on all templates.

Text needs 4.5:1. Large text (≥24px, or ≥18.66px bold) and UI or graphical parts need 3:1.

| Foreground token | Background token | Ratio | Needs | Result |
|---|---|---|---|---|
| `text` #0F0F0F | `bg` #FEFEFE | 19.01:1 | 4.5:1 | Pass |
| `text` #0F0F0F | `surface-alt` #F3F7FE | 17.84:1 | 4.5:1 | Pass |
| `text` #0F0F0F | `surface-sunken` #F5F5F5 | 17.58:1 | 4.5:1 | Pass |
| `heading` #032993 | `bg` #FEFEFE | 11.95:1 | 4.5:1 | Pass |
| `heading` #032993 | `surface-alt` #F3F7FE | 11.22:1 | 4.5:1 | Pass |
| `text-muted` #6B6B6B | `bg` #FEFEFE | 5.28:1 | 4.5:1 | Pass |
| `text-muted` #6B6B6B | `surface-alt` #F3F7FE | 4.96:1 | 4.5:1 | Pass |
| `text-muted` #6B6B6B | `surface-sunken` #F5F5F5 | 4.89:1 | 4.5:1 | Pass |
| `text-subtle` #858585 (large only) | `bg` #FEFEFE | 3.66:1 | 3:1 | Pass, large only |
| `text-subtle` #858585 (large only) | `surface-alt` #F3F7FE | 3.43:1 | 3:1 | Pass, large only |
| `link` #1240BE | `bg` #FEFEFE | 8.32:1 | 4.5:1 | Pass |
| `link` #1240BE | `surface-alt` #F3F7FE | 7.81:1 | 4.5:1 | Pass |
| `link` #1240BE | `surface-sunken` #F5F5F5 | 7.70:1 | 4.5:1 | Pass |
| `link-hover` #032993 | `bg` #FEFEFE | 11.95:1 | 4.5:1 | Pass |
| `accent-text` #2152D1 | `bg` #FEFEFE | 6.52:1 | 4.5:1 | Pass |
| `text` (inverse) #FEFEFE | `bg` inverse #032993 | 11.95:1 | 4.5:1 | Pass |
| `text-muted` (inverse) #C9DBFF | inverse #032993 | 8.64:1 | 4.5:1 | Pass |
| `link` (inverse) #A2C1FE | inverse #032993 | 6.65:1 | 4.5:1 | Pass |
| `text` (inverse) #FEFEFE | footer #001155 | 17.19:1 | 4.5:1 | Pass |
| `text-muted` (inverse) #C9DBFF | footer #001155 | 12.43:1 | 4.5:1 | Pass |
| `link` (inverse) #A2C1FE | footer #001155 | 9.57:1 | 4.5:1 | Pass |
| `text` (inverse) #FEFEFE | inverse raised #032177 | 14.00:1 | 4.5:1 | Pass |
| `text-muted` (inverse) #C9DBFF | inverse raised #032177 | 10.12:1 | 4.5:1 | Pass |
| `code-prompt` (inverse) #A2C1FE | inverse #032993 | 6.65:1 | 4.5:1 | Pass |
| `code-prompt` #1240BE | `surface-sunken` #F5F5F5 | 7.70:1 | 4.5:1 | Pass |
| code text #0F0F0F | `surface-sunken` #F5F5F5 | 17.58:1 | 4.5:1 | Pass |
| code text (inverse) #FEFEFE | inverse raised #032177 | 14.00:1 | 4.5:1 | Pass |
| `action-text` #FEFEFE | `action-bg` #1240BE | 8.32:1 | 4.5:1 | Pass |
| `action-text` #FEFEFE | `action-bg-hover` #032993 | 11.95:1 | 4.5:1 | Pass |
| `action-text` #FEFEFE | `action-bg-active` #032177 | 14.00:1 | 4.5:1 | Pass |
| `action-2-text` #1240BE | `bg` #FEFEFE | 8.32:1 | 4.5:1 | Pass |
| `action-2-text-hover` #032993 | `action-2-bg-hover` #F3F7FE | 11.22:1 | 4.5:1 | Pass |
| `action-text` (inverse) #032993 | `action-bg` (inverse) #FEFEFE | 11.95:1 | 4.5:1 | Pass |
| `action-text` (inverse) #032993 | `action-bg-hover` (inverse) #E5EDFE | 10.26:1 | 4.5:1 | Pass |
| `success-text` #106B3B | `bg` #FEFEFE | 6.53:1 | 4.5:1 | Pass |
| `success-text` #106B3B | `success-bg` #E7F6EC | 5.89:1 | 4.5:1 | Pass |
| `warning-text` #8A4B00 | `bg` #FEFEFE | 6.74:1 | 4.5:1 | Pass |
| `warning-text` #8A4B00 | `warning-bg` #FFF3DC | 6.19:1 | 4.5:1 | Pass |
| `error-text` #B3261E | `bg` #FEFEFE | 6.48:1 | 4.5:1 | Pass |
| `error-text` #B3261E | `error-bg` #FDECEA | 5.72:1 | 4.5:1 | Pass |
| `info-text` #032993 | `info-bg` #E5EDFE | 10.26:1 | 4.5:1 | Pass |
| `neutral-badge-text` #4F4F4F | `neutral-badge-bg` #EBEBEB | 6.87:1 | 4.5:1 | Pass |
| `success-text` (inverse) #7FD8A6 | inverse #032993 | 7.05:1 | 4.5:1 | Pass |
| `warning-text` (inverse) #FFD58A | inverse #032993 | 8.69:1 | 4.5:1 | Pass |
| `error-text` (inverse) #FFB4AB | inverse #032993 | 7.10:1 | 4.5:1 | Pass |
| **Non-text (1.4.11)** | | | | |
| `border-control` #858585 | `bg` #FEFEFE | 3.66:1 | 3:1 | Pass |
| `border-control` #858585 | `surface-alt` #F3F7FE | 3.43:1 | 3:1 | Pass |
| error border #B3261E | `bg` #FEFEFE | 6.48:1 | 3:1 | Pass |
| `focus` #1240BE | `bg` #FEFEFE | 8.32:1 | 3:1 | Pass |
| `focus` #1240BE | `surface-alt` #F3F7FE | 7.81:1 | 3:1 | Pass |
| `focus` (inverse) #FEFEFE | inverse #032993 | 11.95:1 | 3:1 | Pass |
| `focus` (inverse) #FEFEFE | footer #001155 | 17.19:1 | 3:1 | Pass |
| `border-control` (inverse) #A2C1FE | inverse #032993 | 6.65:1 | 3:1 | Pass |
| `progress-fill` #1240BE | `progress-track` #E5EDFE | 7.14:1 | 3:1 | Pass |
| `border-interactive` #1240BE | `bg` #FEFEFE | 8.32:1 | 3:1 | Pass |
| `border-subtle` #DADADA | `bg` #FEFEFE | 1.39:1 | — | Decor only |
| `border-accent` #C9DBFF | `bg` #FEFEFE | 1.38:1 | — | Decor only |
| Logo mark #1240BE | inverse #032993 | 1.44:1 | — | Never: use the reversed logo |

**Never use these pairs** (they fail for normal text):
- `#858585` as small text on white: 3.66:1.
- `#858585` on navy: 3.27:1.
- `#1240BE` text on navy: 1.44:1.
- `#6B6B6B` on `neutral-100`: 4.47:1, so neutral badges use `neutral-700`.
- `#396FF0` (`blue-500`) text on white: 4.42:1.
- `#6C9AFF` (`blue-400`) small text on navy: 4.42:1.

The focus ring never relies on the button's own fill. It always sits 2px outside the element, against the page surface.

---

## 4. Typography

### Roles (EN)
| Role | Font | Size token | Weight | Leading | Tracking | Use |
|---|---|---|---|---|---|---|
| Display | Manrope | `--text-4xl` | 800 | display | display | Home hero H1 only |
| H1 | Manrope | `--text-3xl` | 800 | tight | tight | All other page H1s |
| H2 | Manrope | `--text-2xl` | 700 | tight | tight | Section titles |
| H3 | Manrope | `--text-xl` | 700 | snug | snug | Card titles, step titles |
| H4 | Manrope | `--text-lg` | 700 | snug | snug | Sub-blocks, FAQ group titles |
| Lead | Rubik | `--text-lg` | 400 | body | 0 | Hero sub-line, section intros (`--measure-lead`) |
| Body | Rubik | `--text-base` | 400 | body | 0 | Prose (`--measure-prose`) |
| Small | Rubik | `--text-sm` | 400 | 1.5 | 0 | Meta, captions, CTA terms (never below 14px) |
| Label/UI | Rubik | `--text-sm`/`--text-base` | 500 | ui | 0 | Form labels, nav items, summary text |
| Button | Manrope | `--text-base` | 700 | ui | 0 | Buttons |
| Badge | Rubik | `--text-xs` | 600 | 1 | 0.01em | Badges only (13px) |
| Metric | Manrope | `--text-2xl`/`--text-3xl` | 800 | tight | tight | Verified metrics, `tabular-nums` |
| Mono | system mono | 0.9em of context | 400 | 1.5 | 0 | Code, `$`/`//` motif |

Rules:
- Sentence case everywhere: headings, buttons, nav, badges. No all-caps, no `text-transform`.
- No colour or italic accent on one word in a headline. Emphasis in body uses weight 600, not italics (Arabic has no true italics).
- Headings: `max-inline-size: var(--measure-heading)`, display `--measure-display`, `text-wrap: balance`.
- Numbers in metrics and tables: `font-variant-numeric: tabular-nums` (verify Manrope `tnum` in the built font; Rubik has it).
- Heading colour is navy (`--color-heading`). Body is black. Muted is `#6B6B6B`.
- Fluid sizes keep max/min ≤ 1.9×, so 200% zoom still scales text (1.4.4).

### Arabic (`/ar`)
- IBM Plex Sans Arabic (proposed, **[needed] native reviewer to confirm**) for headings and body. Weights: 400 body, 600 emphasis and labels, 700 headings. Display H1 uses 700 (no 800 in the family).
- Option to test with the reviewer: Rubik's `arabic` subset for body, for brand continuity. Decide once, never mix per page.
- Leading +15–25% (tokens in §2). Letter-spacing always 0. No italics, no `text-transform`, no `font-synthesis` (`font-synthesis: none` on `:lang(ar)`).
- Size: start at the same tokens, and have the native reviewer check optical size. If Arabic reads small, add `--ar-scale` (e.g. 1.06) to body only.
- Mixed text: Latin brand and tool names (DiscoverDev, Lovable, Supabase) in `<bdi>`. Code, URLs, emails and phone numbers in `dir="ltr"`.
- Numerals: Latin digits by default (`ar-u-nu-latn`), to be confirmed by the reviewer.
- Allow 30% text expansion: no fixed-width buttons, nav items or badges.

### Font loading (Astro Fonts API, Fontsource provider)
| Font | Package | Files on first view | Preload | Notes |
|---|---|---|---|---|
| Manrope | `@fontsource-variable/manrope` 5.3.0, latin | 1 (variable, wght 600–800) | **Yes**: `<Font cssVariable="--font-heading" preload />`. The H1 is the LCP element. | EN only. No Arabic glyphs. |
| Rubik | `@fontsource-variable/rubik` 5.3.0, latin | 1 (variable, wght 400–600) | No | swap |
| IBM Plex Sans Arabic | `@fontsource/ibm-plex-sans-arabic` 5.3.0, arabic | up to 3 static (400/600/700), **AR layout only** | 700 only, on `/ar` | Never loaded on EN pages |
| Mono | system stack | 0 | — | No webfont |

- EN first view: 2 font files (budget ≤3, ≤120 KB).
- `font-display: swap` (the Astro default).
- Fallbacks: Astro generates metric-matched fallback `@font-face` rules (size-adjust, ascent and descent overrides) by default. In the built CSS, verify the fallback rule exists for Manrope and Rubik. If missing, set `fallbacks: ['Arial', 'sans-serif']` so a local metric base is available. Keep `font-size-adjust: from-font` on `body` as a second guard. Target CLS ≤0.05 (Lighthouse).
- Never `@import` Google Fonts. No third-party font origins (CSP `font-src 'self'`).

---

## 5. Layout grid and section rhythm

### Grid
| Viewport | Columns | Gap | Outer gutter |
|---|---|---|---|
| < 40rem | 4 | `--grid-gap` (16px) | `--gutter` (16px) |
| 40–64rem | 8 | `--grid-gap` | `--gutter` |
| ≥ 64rem | 12 | `--grid-gap` (→32px) | `--gutter` (→40px) |

- `Container`: `inline-size: min(100% - 2 * var(--gutter), var(--container)); margin-inline: auto`. Use the variants `prose`, `narrow` and `wide`.
- Layout uses CSS grid with logical placement only (`grid-column`, `justify-self: start`). Never `float`, `left` or `right`.
- Components respond to their container: grid cells use `container-type: inline-size`, and cards switch layout with `@container (inline-size >= 28rem)`.
- Alignment: text is start-aligned everywhere. Centred text only for the CTA band and the `/book/confirmed` heading.
- Reflow: no horizontal scroll at 320px or at 200% zoom. Tables scroll inside their own region (§9.19).

### Section rhythm
- Each `Section` owns `padding-block: var(--section-y)` (56→120px). Compact sections (proof strip, breadcrumbs plus hero) use `--section-y-sm`.
- Section head (H2 + optional lead) to content: `--stack-lg`. H2 to lead: `--space-4`. Lead `max-inline-size: var(--measure-lead)`.
- Paragraph spacing in prose: `margin-block-end: 1em`. Lists `0.5em` between items.
- Surfaces:
  - Alternate `default` and `alt` (blue-50) only when the topic changes.
  - Consecutive same-surface sections get `Section divider` (a 1px `--color-border-subtle` line at container width). Never zero out padding with sibling selectors.
  - **Inverse (navy) at most twice per page** (one chapter section plus the final CTA band), never adjacent. The footer uses `blue-950`, so a CTA band directly above it stays distinct.
- Home surface map, from the CRO blueprint:

| # | Section | Surface | Padding |
|---|---|---|---|
| 1 | Header | default | — |
| 2 | Hero + ReviewSnapshot | default | top clamp(2.5→6rem), bottom section-y |
| 3 | ProofBar strip | alt | section-y-sm |
| 4 | Problem (3 items) | default | section-y |
| 5 | Offer spotlight (Launch-Ready Review) | **inverse** | section-y |
| 6 | How it works (ProcessSteps) | default | section-y |
| 7 | Choose your path (4 service cards) | alt | section-y |
| 8 | Case highlight (EduLens) | default | section-y |
| 9 | Why DiscoverDev | alt | section-y |
| 10 | Team preview | default | section-y |
| 11 | Testimonials | alt | section-y |
| 12 | FAQ | default | section-y |
| 13 | CTA band | **inverse** | section-y |
| 14 | Footer | footer | section-y-sm |

- Mobile first viewport (375×667, header 64px): H1, lead, primary CTA, CTA terms, quiz link and the inline proof line must all fit. ReviewSnapshot sits below the fold on mobile.

---

## 6. Interaction and motion rules
- **One orchestrated moment:** the ReviewSnapshot sequence (§9.6). No section entrance animations.
- Hover styles only under `@media (hover: hover)`. Hover is a colour or border change at `--dur-color`. No lift, scale or shadow growth.
- Press: `:active` darkens (`--color-action-bg-active`). No transform.
- Disclosure (FAQ, services panel, mobile menu): open and close at `--dur-base` with `--ease-enter` / `--ease-exit`. Chevrons rotate 180°.
- Cross-document view transitions: root crossfade only, inside `prefers-reduced-motion: no-preference`.
- Never: parallax, scroll-jacking, autoplay video, counters, marquees. Nothing loops (2.2.2).
- Feedback within 100ms on every click. Embed loading shows a fallback immediately (§9.17).
- Forced colours (Windows High Contrast): buttons keep `border: 1px solid transparent`, focus uses `outline`, icons use `currentColor`, and no meaning lives in a `background-image`.

---

## 7. Accessibility baseline (applies to every component)
- Landmarks: `header`, `nav` (labelled when there is more than one), `main#main`, `footer`. One H1. Headings in order.
- Skip link is the first focusable element, visible on focus at inline-start top, `z-index: var(--z-skip)`.
- Focus ring: 2px `--color-focus`, 2px offset, on every interactive element. Never `outline: none` without a replacement.
- Targets ≥44×44px on touch (2.5.8 needs 24px minimum, and the project rule is 44px). Inline text links are exempt, with line-height ≥1.5.
- Focus not obscured (2.4.11): `scroll-padding` covers the header and bottom bar, and the header never hides while focus is inside it.
- Colour is never the only signal. Every status has text.
- Status messages use `role="status"`. Errors pair `aria-invalid` with `aria-describedby`.
- Consistent help (3.2.6): email then WhatsApp, in that order, in the mobile menu, footer and `/book`.
- `lang` and `dir` are set on `<html>` from the locale registry, never by CSS.

## 8. RTL rules (applies to every component)
- Logical properties only, enforced by `css-logical-lint` (`margin-inline-*`, `padding-inline-*`, `inset-inline-*`, `border-inline-*`, `text-align: start/end`).
- **Mirror:** layout, nav order, directional icons (`.icon--dir` → `:dir(rtl) { scale: -1 1 }`), process and step connectors, progress fill direction, Back and Next order, breadcrumb separators, and the decorative blade in the CTA band and OG.
- **Never mirror:** the logo, check marks, media controls, numbers, code, URLs, phone numbers, charts and diagrams, screenshots, photos, or the `$` and `//` motif.
- Grid order follows `dir` automatically. Never use `order` or `flex-direction: row-reverse` to fake it.
- Every component spec below adds only its exceptions.

---

## 9. Component specs

Format: **Anatomy · Variants · States · A11y · RTL.** Tokens are referenced by name. Analytics attributes follow `07-tech-spec.md` §9.3 (`data-cta-id`, `data-cta-tier`, `data-cta-position`, `data-cta-target`). All visible strings come from `03-copy.md`; strings quoted here are illustrative, and 03 wins on conflict.

### 9.1 Header and nav
- **Anatomy:**
  - Skip link, then the logo (horizontal lockup, `<a href="/" aria-label="DiscoverDev home">`, 28px tall mobile, 32px desktop).
  - `nav[aria-label="Main"]` holding the list: Review, Services ▾, Work, Insights, About.
  - Primary button `Book a Review` (size sm).
  - Mobile: Book button, then menu button.
  - Height `--header-h`. Background `--color-bg`, opaque.
- **Variants:**
  - `default`.
  - `minimal` (`/book`, `/launch-check`): logo plus a "Back" text link. No nav and no Book button.
- **States:**
  - At top: no border.
  - Scrolled past 8px: `border-block-end: 1px solid var(--color-border-subtle)` plus `--shadow-xs`.
  - Scrolling down past 400px: hides (`translate: 0 -100%`, `--dur-slow`, `--ease-exit`).
  - Scrolling up: shows (`--ease-enter`).
  - Never hides while focus is inside it or a panel is open. Under reduced motion it never hides.
  - Nav item: hover gives `--color-link` and an underline. `aria-current="page"` gives a 2px `--color-border-interactive` bar at block-end plus weight 500.
  - Focus-visible: the ring.
- **Services panel:**
  - `<button aria-expanded aria-controls>` with a chevron (16px).
  - The panel is a plain list of 4 links (Validate, Build, Scale, Partners), each with a one-line "who it's for" in muted text.
  - Surface white, `--radius-md`, `--shadow-md`, `--z-dropdown`, min-inline-size 20rem.
  - Opens on click or tap only (no hover-open). Closes on Esc (focus returns to the button), outside click, or focus leaving.
  - Not `role="menu"`: it is a disclosure.
- **Responsive:**
  - Below 64rem: desktop nav hidden; menu button (44×44, `aria-label="Open menu"`) shown.
  - Book button hidden below 22.5rem (360px), because the bottom bar covers it.
- **A11y:** one `nav` labelled "Main". The logo link has an accessible name. The header is a landmark.
- **RTL:** logo at inline-start, menu button at inline-end. The chevron points down and is not mirrored.

### 9.2 Mobile menu
- **Anatomy:**
  - `<dialog class="menu-sheet">` opened with `showModal()`. Full viewport, `--color-bg`.
  - Top row: logo, then the close button (44×44, inline-end, `aria-label="Close menu"`).
  - Nav list rows: 56px, `--text-xl` Manrope 700. Services shown expanded as an indented sub-list (no nested disclosure).
  - Full-width primary `Book a Review` with the CTA terms.
  - Contact row: Email, then WhatsApp (utility links with icons).
- **States:**
  - Opening: opacity 0→1 plus `translate: 0 var(--motion-distance)` at `--dur-slow` (instant under reduced motion).
  - Closing: reverse.
  - Body scroll is locked with `html:has(dialog[open]) { overflow: hidden }`.
- **A11y:**
  - The native modal gives a focus trap and Esc close. Focus starts on the close button and returns to the menu button on close.
  - `aria-labelledby` points to a visually hidden "Menu" heading.
  - Link targets are ≥44px.
- **RTL:** list aligned to start. The sheet doesn't slide sideways, so there is no direction issue.

### 9.3 Mobile bottom bar (sticky CTA)
- **Anatomy:** `<div class="bottom-bar">` with one full-width primary button `Book a Review`. Padding `--space-3`, plus `env(safe-area-inset-bottom)`. `--shadow-up`, `--z-sticky`.
- **Show/hide:**
  - Shown below 64rem once the hero CTA leaves the viewport (IntersectionObserver).
  - Hidden on `/book*`, on `/launch-check`, while a text field has focus (keyboard open), and while the final CTA band is in view.
  - Set `--bottom-bar-h` on `:root` while it is visible, and add matching `padding-block-end` to `body`.
- **Motion:** slide up at `--dur-base` (fade only under reduced motion).
- **A11y:** the same accessible name as the other primary CTAs. It never covers focus (scroll-padding).

### 9.4 Footer
- **Anatomy** (`data-surface="footer"`, blue-950):
  1. Reversed logo, a one-line positioning statement (`--color-text-muted`), then contact: Email, WhatsApp.
  2. Link columns per `03-copy.md` §1.2: Services, Work, Insights, Company (About, Book a call, Privacy, Terms). Each has an `h2` styled `--text-sm` 600 in `--color-text-muted`, sentence case.
  3. Locations: "Texas, USA" and "Alexandria, Egypt (engineering hub)", plus the overlap line.
  4. Proof: "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct)" and a link "Read our reviews on Clutch" (`03-copy.md` §0.4).
  5. Bottom row: ©, then the language switcher (hidden until `/ar` is live; endonyms "English" and "العربية", each with its `lang`).
- **Layout:**
  - Below 40rem: 1 column.
  - 40–64rem: 2 columns.
  - From 64rem: brand block spanning 4 columns, then the 4 link columns.
- **States:**
  - Links: `--color-text` at rest with no underline (nav-list context).
  - Hover and focus: underline plus `--color-link-hover`.
  - Focus ring is white.
- **A11y:** `<footer>` with `nav[aria-label="Footer"]`. Outbound Clutch link uses the same tab, no `target="_blank"`. The switcher links to the equivalent page.
- **RTL:** columns mirror. Email, phone and URLs sit in `dir="ltr"`.

### 9.5 Button
- **Anatomy:**
  - `<a>` for navigation (most CTAs); `<button>` for in-page actions (quiz Next, menu).
  - Optional leading icon, only for utility actions (WhatsApp, Email).
  - Label is required. No trailing arrow.
- **Variants** (max 5):

| Variant | Use | Rest | Hover | Active |
|---|---|---|---|---|
| `primary` | The one filled action per viewport | bg `--color-action-bg`, text `--color-action-text` | bg `--color-action-bg-hover` | bg `--color-action-bg-active` |
| `secondary` | Second action (e.g. clarity call next to a Review) | transparent, 1px border `--color-action-2-border`, text `--color-action-2-text` | bg `--color-action-2-bg-hover`, text `--color-action-2-text-hover` | border 2px |
| `text` | Tertiary ("Take the 3-minute launch check") | Link style, underlined, 44px min hit area | thicker underline | — |
| on inverse | Same variants. Semantic remap gives a white fill with navy text, or a white outline | — | — | — |

- **Sizes:** `md` is 48px tall, padding-inline `--space-6`, the default. `sm` is 40px tall, padding-inline `--space-4`, header only, and gets a 44px hit area via `::after` inset.
- **Shape and type:** `--radius-sm`, Manrope 700 `--text-base`, `--leading-ui`. Below 40rem the hero primary is full-width.
- **States:**
  - Focus-visible: the ring.
  - Disabled: avoid. If it is unavoidable, use `--color-disabled-bg` and `--color-disabled-text`, plus `aria-disabled="true"` on links.
  - Loading (form submit only): spinner plus a label like "Sending", the width held, `aria-busy="true"`.
- **CTA terms** (microcopy under primary CTAs):
  - `<ul class="cta-terms">` inline-wrapping list, `--text-sm`, `--color-text-muted`.
  - Each item carries a 16px check icon (`aria-hidden`).
  - Items are separated by gap. No middle dots.
- **A11y:**
  - The same action always has the same label: "Book a Launch-Ready Review" or "Book a Review", and "Book a free clarity call".
  - Icon-only buttons need `aria-label`.
  - `data-cta-id` is required on CTAs.
- **RTL:** a leading icon flips sides automatically (flex plus gap). WhatsApp and email icons are not mirrored.

### 9.6 ReviewSnapshot (signature)
- **Purpose:** show what a Review produces. Home hero and the `/launch-ready` hero.
- **Anatomy:**
  - Panel: `--color-surface`, 1px `--color-border-subtle`, `--radius-lg`, `--shadow-md`.
  - Header strip (`--color-surface-sunken`): title "Example findings", meta "Sample report, not a client".
  - `<ol>` of 3 (mobile) to 5 (desktop) findings. Each row has:
    - a severity Badge (Critical = error, High = warning, Medium = neutral)
    - a finding title (Rubik 500, e.g. "Row-level security off on 3 tables")
    - an area (muted, e.g. "Data and auth")
    - a status (Badge: "Fix planned" = info, "Fixed" = success).
  - Footer row: "Verdict: fix, don't rebuild" (Manrope 700), then "Fixed quote with the report" (muted).
- **Content rule:** illustrative findings must stay generic and be labelled as an example. No client names, no invented metrics.
- **Motion** (`prefers-reduced-motion: no-preference` only):
  - Plays once, when 50% of the panel is visible.
  - Each row's status cross-fades from "Open" to its final status, one row every `--dur-deliberate` (≤2.4s total).
  - Never loops; there is no replay control because nothing moves after 2.4s.
  - Under reduced motion, render the final state.
- **A11y:**
  - The DOM always holds the final text. The animated "Open" badge is a visual-only overlay (`aria-hidden="true"`).
  - The panel is a `<figure>` with `<figcaption>` "Example of findings from a Launch-Ready Review".
- **Responsive:** hero columns 8–12 from 64rem; below the hero copy under that.
- **RTL:** rows mirror. Badges keep their colours. Finding titles may contain Latin terms in `<bdi>`.

### 9.7 Link
- **Inline (prose):**
  - `--color-link`, always underlined: `text-decoration-thickness: 1px`, `text-underline-offset: 0.2em`.
  - Hover: 2px thickness plus `--color-link-hover`.
  - Visited: same as rest.
  - Focus: the ring.
- **Standalone link:** Rubik 500, underlined. The text describes the destination ("Read the EduLens story"). Never "Read more" or "Learn more".
- **External:** same tab. No icon by default. If an icon is used (`external-link`, 14px), add visually hidden text "(external site)".
- **A11y:** never colour alone to mark a link in body text. `outbound_clicked` fires on host ≠ discoverdev.ai.
- **RTL:** underline is direction-neutral. The external icon is mirrored.

### 9.8 Card: service ("path card")
- **Anatomy:**
  - `<article>`. H3 title as the link: `<a class="card-link">`, with a `::after` covering the card (`inset: 0`, `--z-raised`).
  - "Who it's for" line (muted).
  - `<dl>` meta: Duration ("8–12 weeks"), Model ("Fixed price").
  - Optional badge "Start here" (info) on Launch-Ready only.
- **Visual:** `--color-surface`, 1px `--color-border-subtle`, `--radius-md`, padding `--space-6`. No shadow.
- **Layout:** 1 column below 40rem, 2 at 40–64rem, 4 from 64rem.
- **States:**
  - Hover: border `--color-border-interactive` plus title underline.
  - Focus-visible: ring on the card via `article:has(.card-link:focus-visible)`, with the outline suppressed on the link itself.
  - Active: border 2px.
- **A11y:** only one link per card (the title). Other text stays selectable via `position: relative; z-index: 2` on any nested interactive element (avoid nesting).

### 9.9 Card: case study
- **Anatomy:**
  - Cover: a product screenshot, 16:10, `--radius-md`, `loading="lazy"`.
  - Client and region (muted `--text-sm`, region as a neutral Badge).
  - Metric: Manrope 800 `--text-2xl`, `--color-heading`, `tabular-nums`, with a label underneath.
  - One-line summary.
  - Title link: "Read the EduLens story".
- **Rule:** only `verified: true` metrics. No metric and no consent means no card (schema-enforced).
- **Layout:**
  - Below 48rem: stacked.
  - Container ≥36rem: media at inline-start (5/12), text at inline-end.
- **States:** same as the service card.
- **A11y:** the cover `alt` describes the screen ("EduLens tutor chat with captions panel"). The metric is plain text, not an image.

### 9.10 Card: insight
- **Anatomy:**
  - Topic badge (neutral).
  - H3 title link.
  - One-line summary (2 lines max, `line-clamp` only as a visual safety net).
  - Meta: read time, plus "Updated" with `<time datetime>`, laid out with gap (no dot).
  - No image by default. An optional diagram thumbnail, never stock.
- **Layout:** 1, then 2, then 3 columns. The quiz banner is inserted after the first row on the hub.
- **States:** as the service card.

### 9.11 Hero variants (max 5)
| Variant | Page | Layout | Contents |
|---|---|---|---|
| `home` | / | From 64rem: copy in columns 1–7, ReviewSnapshot in 8–12. Stacked below that. | H1 display, lead, primary CTA plus terms, text link to the quiz, inline ProofBar |
| `offer` | /launch-ready | Same split | H1, "who it's for" line, price cue line (**[needed]** figure), primary CTA plus terms, ReviewSnapshot or a Day 0–5 timeline |
| `service` | /validate, /build, /scale, /partners | Copy only, `--container-narrow` | H1, lead, `<dl>` meta row (Timeline, Model, Team), clarity or partner CTA (filled, it is the page's primary), proof line |
| `case` | /work/[slug] | Copy, then a full-width cover screenshot in a media frame | Breadcrumbs, client plus region badges, H1 = outcome, MetricGrid (verified only), cover |
| `article` | /insights/[slug] | Copy only, `--container-prose` | Breadcrumbs, H1 (`--text-3xl`), summary, author row (40px round photo, name, role), Published and Updated `<time>` |

- Surface is `default` (white) for all. Navy is reserved for chapters and the closing band.
- The LCP element is the H1 text: no hero image above the fold on mobile. Any hero media uses `fetchpriority="high"` with explicit dimensions.
- **A11y:** one H1. The CTA terms list sits after the button in DOM order.

### 9.12 ProofBar
- **Anatomy:**
  - Star icon (`aria-hidden`), then "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct)", then the link "Read our reviews on Clutch" (https://clutch.co/profile/discoverdev). Wording per `03-copy.md` §0.4.
  - Optional items: "Clients on 4 continents", "Arabic and English team".
  - Items separated by `border-inline-start: 1px solid var(--color-border-subtle)` plus padding, not by dots.
- **Variants:**
  - `inline`: in the hero, `--text-sm`.
  - `strip`: its own compact section on `alt`, `--text-base`. Consented client logos are allowed only here: max 6, monochrome `neutral-700`, 24–32px tall, static.
- **Rules:**
  - No `AggregateRating` schema. No star-rating graphic (5 stars).
  - Numbers update only from verified sources.
- **A11y:** a list (`<ul>`). The link text names the destination.
- **RTL:** items mirror. "5.0" stays a Latin numeral.

### 9.13 Testimonial
- **Anatomy:**
  - `<figure>`: `<blockquote><p>` quote (Rubik 400 `--text-lg`, `--color-text`).
  - Decorative opening quote glyph: Manrope 800, 4rem, `--color-border-accent`, `aria-hidden`.
  - `<figcaption>`: name (500), role and company or country (muted), and the source link "Review on Clutch" when applicable.
  - Optional 48px round photo (consent only, `alt=""` because the name is adjacent).
- **Layout:** 3 across from 64rem, stacked below. Never a carousel.
- **Rules:** only `consentToPublish: true`. Quotes ≤280 characters. Outcome quotes first.
- **RTL:** the glyph comes from `quotes` per locale (`:lang(ar) { quotes: "”" "“"; }`, **[needed]** reviewer confirm). Text is start-aligned.

### 9.14 Process steps
- **Anatomy:**
  - `<ol role="list">` (role restores list semantics with `list-style: none` in Safari).
  - Each `<li>`: step number (Manrope 800 `--text-2xl`, `--color-accent-text`), H3 title, body, duration meta ("Day 0", "5 working days").
  - Numbering is valid here: it is a real sequence.
- **Layout:**
  - From 64rem: horizontal, with a connector `border-block-start: 2px solid var(--color-border-accent)` running across from each marker.
  - Below 64rem: vertical, with the connector as `border-inline-start`.
- **Variants:** `steps` (Book → Review → Findings call → Fix or Build), `timeline` (Day 0–5, week strips for Build).
- **A11y:** no interactive parts. The duration is text, not only a position.
- **RTL:** order and connector mirror automatically (logical). Arrow icons, if any, use `.icon--dir`.

### 9.15 FAQ accordion
- **Anatomy:**
  - Section H2, then a list of `<details>`. `<summary>` holds the question text (Rubik 500 `--text-lg`, min block-size 56px, padding-block `--space-5`) and a 20px chevron at inline-end.
  - Answer: `--measure-prose`, padding-block-end `--space-5`.
  - Rows separated by 1px `--color-border-subtle`.
  - No headings inside `summary` (screen readers can drop the button role).
- **States:**
  - Hover: summary text `--color-link`.
  - Focus-visible: ring on the summary.
  - Open: chevron rotates 180° (`--dur-base`). Content height animates with `::details-content` plus `interpolate-size: allow-keywords`, only under no-preference (progressive enhancement; instant elsewhere).
- **Behaviour:** several items can be open at once (no `name` grouping). Deep links open the matching item (`#faq-ownership`).
- **CSS:** `summary { list-style: none } summary::-webkit-details-marker { display: none }`.
- **A11y:** native semantics, no ARIA needed. `FAQPage` JSON-LD is optional (for AEO, not for rich results).
- **RTL:** the chevron sits at inline-end. Vertical chevrons are not mirrored.

### 9.16 CTA band
- **Anatomy** (`data-surface="inverse"`):
  - H2 (`--text-3xl`, white), one support line (`--color-text-muted`).
  - Primary button (white fill, navy text after remap): the only filled button in view.
  - CTA terms (blue-200 text, blue-300 check icons).
  - Text link "Not ready? Take the 3-minute launch check" (`--color-link`, underlined).
  - Decorative blade: the logo's lower blade shape at about 40vw, cropped off the inline-end edge, fill `--blue-700` (tonal), `aria-hidden`.
- **Layout:** centred column, `--container-narrow`. Padding `--section-y`.
- **Variants:** `review` (default), `clarity` (service pages), `partner`.
- **RTL:** the blade mirrors (it signals forward). The logo itself never mirrors.

### 9.17 Booking embed container (`CalEmbed`)
- **Anatomy:**
  - Option switch: two links with `aria-current="true"` on the active one ("Launch-Ready Review intro", "Clarity call"). These are links to `?type=`, not tabs, so the switch works with no JS.
  - Container: `--color-surface`, 1px `--color-border-subtle`, `--radius-lg`, padding `--space-2`.
  - Fallback block (visible until `linkReady`): a list of direct Cal.com event links, plus Email and WhatsApp.
  - Below the container: "What happens on the call" (3 items) and "Who you'll meet" (`03-copy.md` §13.3; named person + photo only if D-16/D-17 approve).
- **Size:** reserve `min-block-size` to stop CLS. Measure the Cal layouts (column view at 375px, month view at 1280px) and set the values. Starting guesses, not measured: 720px mobile, 640px desktop. (Source of truth for these values; `07` §10.2 defers here.)
- **States:**
  - Loading: fallback shown.
  - Ready: fallback hidden and the iframe shown.
  - Failed (`linkFailed`) or 10s timeout: fallback stays, with a `role="status"` message using the "Calendar failed to load" string in `03-copy.md` §1.4.
- **Theme:** Cal brand colour `#1240BE`, light theme, `locale` passed.
- **A11y:**
  - The iframe gets a `title`: "Booking calendar" (`03-copy.md` §13.2). Set it after `linkReady` if Cal omits one.
  - Never autofocus the iframe. Run a keyboard pass through the iframe before launch.
- **RTL:** the container mirrors. Check Cal's RTL before `/ar`; if it isn't supported, use the EN widget inside Arabic surrounding copy.

### 9.18 Form fields and errors
- **Anatomy:**
  - Label above (Rubik 500 `--text-sm`→`--text-base`, `--color-text`). Mark optional fields "(optional)". Required is the default.
  - Helper text (muted `--text-sm`).
  - Input: 48px tall, font ≥16px (prevents iOS zoom), padding-inline `--space-4`, 1px `--color-border-control`, `--radius-sm`, bg `--color-surface`.
  - Error message: icon plus text in `--color-error-text`.
- **States:**

| State | Visual |
|---|---|
| Hover | border `--neutral-700` |
| Focus-visible | ring 2px `--color-focus`, offset 2px |
| Invalid | border 2px `--color-error-text` (inset via `box-shadow`, so size doesn't shift), plus the message |
| Disabled | bg `--neutral-50`, text `--neutral-500`, border `--neutral-200` (exempt) |
| Success (form) | `role="status"` message, success colours, focus moves to it |

- **Validation:** on blur. Clear the error on input once the value is valid. On submit with more than 3 fields: an error summary at the top (focused, with links to fields). For a single field: inline only.
- **Error copy:** specific and actionable ("Enter an email like name@company.com"). No apology, no blame.
- **Radio and checkbox:** native, `accent-color: var(--color-action-bg)`, 20px, the whole label clickable, rows ≥44px. Groups use `fieldset`/`legend`.
- **Spam:** honeypot only at launch (visually hidden, `tabindex="-1"`, `autocomplete="off"`). Turnstile is phase 2 (`07-tech-spec.md` §11). No image CAPTCHA (3.3.8).
- **A11y:** `<label for>`, `aria-describedby` = helper id plus error id, `aria-invalid="true"` only when invalid, `autocomplete` tokens (`name`, `email`). Never re-ask data the quiz already holds (3.3.7).
- **RTL:** `dir="auto"` on text inputs. Email and URL inputs use `dir="ltr"`. Labels and messages are start-aligned.

### 9.19 Table
- **Anatomy:**
  - Wrapper `<div role="region" aria-labelledby="cap-id" tabindex="0">` with `overflow-x: auto`.
  - `<table>` with a `<caption>` (H3 style or visually hidden), `<th scope>`.
  - Header row bg `--color-surface-sunken`, 600 weight. Rows separated by 1px `--color-border-subtle`. Cell padding `--space-3` `--space-4`.
- **Rules:**
  - Numbers `tabular-nums`, end-aligned.
  - Yes/No cells: icon plus visually hidden text ("Included", "Not included").
  - The first column stays sticky at inline-start below 48rem, with a solid bg.
- **Uses:** fix vs rebuild, partner models (white-label vs staff aug), what's included.
- **States:** the scroll region shows a focus ring when focused. No row hover.
- **RTL:** columns mirror and the sticky column follows inline-start.

### 9.20 Breadcrumbs
- **Anatomy:**
  - `nav[aria-label="Breadcrumb"] > ol`. Items: links, then the last item as `<span aria-current="page">` (muted).
  - Separator: a CSS `::before` on `li + li`, a 14px chevron via `mask-image`, `--color-text-muted`.
  - `--text-sm`. Wraps. No truncation.
- **Where:** `/work/*` and `/insights/*`, with `BreadcrumbList` JSON-LD.
- **States:** links follow §9.7.
- **RTL:** the separator chevron mirrors (`:dir(rtl) li + li::before { scale: -1 1 }`).

### 9.21 Badge
- **Anatomy:** `<span class="badge">`, `--text-xs` 600, padding `2px 10px`, `--radius-pill`, min block-size 22px. Optional 12px leading icon. Text is always present.
- **Variants:** `neutral` (topics, region), `info`, `success`, `warning`, `error`. All use soft `*-bg` with `*-text` (passes are in §3).
- **Not interactive.** Topic filters on `/insights` are a separate pattern: `<button aria-pressed>` chips, 40px tall with a 44px hit area.
- **RTL:** the icon flips sides automatically.

### 9.22 Code and command motif
- **`Eyebrow` (`// comment`):**
  - Optional label above at most 2 section headings per page, never on consecutive sections.
  - Mono `--text-sm`, `--color-text-muted`, with `//` in `--color-code-prompt` (`aria-hidden`).
  - Lowercase sentence ("// what we check"). Never all caps, never a substitute for the H2.
- **`CommandLine` (`$`):**
  - Max 1 per page, decorative: the whole element is `aria-hidden="true"`, and the same meaning lives in nearby real copy.
  - On light: bg `--color-surface-sunken`, 1px `--color-border-subtle`, `--radius-sm`, padding `--space-3` `--space-4`, mono `--text-sm`, `$` in `--color-code-prompt`.
  - On inverse: bg `--color-surface` (blue-900), text white, `$` blue-300.
  - Content must not look like a real tool's command a reader might try to run (e.g. `$ launch-ready --read-only --days 5`).
- **Code blocks (insights):**
  - Shiki light theme with background overridden to `--color-surface-sunken`, `--radius-md`.
  - `<pre tabindex="0">` for scroll. Optional language label at top inline-end (muted).
  - Long lines scroll, never wrap mid-token.
- **Inline code:** `--radius-xs`, bg `--color-surface-sunken`, 0.9em.
- **RTL:** all code is `dir="ltr"` and isolated (`<bdi dir="ltr">` inline). Never mirrored.

### 9.23 Quiz UI (`/launch-check`)
- **Anatomy, one question per screen:**
  - Progress: the text "Question 3 of 10" (live in DOM), plus a bar (`aria-hidden`, 6px, `--color-progress-track` / `--color-progress-fill`, `--radius-pill`).
  - `<form>` > `<fieldset>` > `<legend>`: question as H2 (`--text-2xl`, `tabindex="-1"` for focus).
  - Optional "Why we ask" `<details>`.
  - Options: native radios styled as option cards. The full-width label has min block-size 56px, padding `--space-4`, 1px `--color-border-control`, `--radius-sm`, and the radio visible at inline-start.
  - Actions row: `Back` (secondary), then `Next` (primary).
  - Container: `--container-prose`, centred column.
- **Option states:**
  - Hover: border `--color-border-interactive`.
  - Checked: 2px `--color-border-interactive`, bg `--color-surface-alt`, check icon.
  - Focus-visible: ring on the card via `label:has(:focus-visible)`.
- **Behaviour:**
  - No auto-advance (3.2.2). `Next` is always enabled. With no selection it shows an inline error ("Choose an answer to continue").
  - Enter submits. Arrow keys move within the radio group (native).
  - On a new question, focus moves to the legend heading. Swap with a 150ms crossfade (instant under reduced motion).
  - Answers persist in `sessionStorage`, so back and refresh are safe.
- **Result screen:**
  - H2 segment name plus a one-line meaning (`04-ux-ia.md` §8.4).
  - 4 dimension rows, each: label, text score ("2 of 4 checks passed"), bar (`aria-hidden`).
  - Top 3 risks with severity Badges.
  - A recommendation card with its CTA (Cal prefilled: name, email, `quiz_segment`).
  - Email capture for the report, only if D-11 ships (§9.18).
  - Focus moves to the result H2.
- **Events:** `quiz_started`, `quiz_question_answered`, `quiz_completed`, `quiz_lead_submitted` (`07-tech-spec.md` §9.3).
- **RTL:** progress fills from inline-start. Back and Next mirror. Chevrons are `.icon--dir`.

### 9.24 Logo (component)
- `Logo` props: `lockup` (`horizontal` | `stacked` | `mark`), `tone` (`color` | `reversed`). Inline SVG with `<title>DiscoverDev</title>` when standalone. Inside a link, the link carries the name and the SVG is `aria-hidden`.
- Never mirrored, never recoloured outside §11.

---

## 10. Iconography and imagery

### Icons
- One set: **Lucide** (ISC licence). Copy only the needed SVGs into `src/assets/icons/` and render them inline via `Icon`. No icon font, no runtime package.
- 24px grid. Stroke 1.75 at 24px, 2 at 16–20px. `currentColor`. Sizes 16, 20, 24.
- Decorative: `aria-hidden="true" focusable="false"`. Meaningful standalone icons need an accessible name on the parent control.
- Directional (`.icon--dir`, mirrored in RTL): `chevron-left`/`right`, `arrow-left`/`right`, `external-link`, `corner-*`, `undo`/`redo`.
- Not mirrored: `check`, `x`, `star`, `clock`, `mail`, `search`, `play`, brand icons (WhatsApp).
- No icons as decoration beside every heading. Icons label actions, statuses and list items only.

### Diagrams (preferred over illustration)
- Inline SVG, `viewBox`-sized, no fixed width.
- Strokes 1.5px in `--blue-800`. Nodes are `--neutral-0` fill with a 1px `--neutral-300` border and `--radius-sm`. The highlighted node is a `--blue-700` fill with white text. Arrows in `--blue-700`. Labels Rubik 14px `--neutral-700`. Annotations in mono `//` style, `--neutral-600`.
- Uses: architecture sketches (EduLens model routing, Rushr dispatch), the fix-vs-rebuild decision tree, the About time-overlap band (24h strips for US Central, Alexandria, Riyadh, with overlap shaded `--blue-100`, plus an equivalent text table; account for Egypt's summer DST).
- A11y: `role="img"` with `<title>` and `<desc>`, or `aria-hidden` plus an adjacent text summary.
- Technical diagrams are not mirrored in RTL. Their labels are translated.

### Product screenshots
- Real client products, with consent (`clientConsent`). PII redacted or replaced with sample data.
- Frame: minimal browser chrome (a 28px top bar in `--neutral-50` with 3 neutral dots, no URL), `--radius-lg`, 1px `--color-border-subtle`, `--shadow-md`. No 3D tilt, no device mockups, no floating UI fragments.
- Crop to the meaningful region. Aspect 16:10 for cards, free for case-study bodies.
- `astro:assets` `<Picture>`, AVIF plus WebP, `loading="lazy"` below the fold. The alt text says what the screen shows.

### Photography (team) **[needed]**
- **Story:** real senior people who stay; "the people on the call are the people in the code".
- **Portraits:**
  - Head and shoulders, eye level, 4:5, ≥1000px tall.
  - Plain light background (light grey wall, or `--neutral-50` matched in post).
  - Soft daylight, true colour with a slightly cool white balance.
  - Same framing and crop for everyone.
- **Working shots:** Alexandria workspace, candid (pairing at a screen, scoping on a whiteboard, a client call with consent). Real screens with no sensitive data. No posed handshakes or high fives.
- **Founder (only if D-16 approves named people):** one portrait for `/book` and `/about`, plus an optional 60–90s intro video with captions, transcript and poster, never autoplay.
- **Avoid:** stock, AI-generated people, dark moody grading, heavy filters, glamour lighting.
- **Variants:** square 1:1 crop for avatars (48px testimonial, 40px author) from the same files.

### Required assets list
1. Official logo SVGs: stacked, horizontal, mark, reversed (§11).
2. Team portraits plus working shots.
3. Founder portrait.
4. Redacted sample Review report screenshot.
5. EduLens screens (consent).
6. Rushr screens (November, consent).
7. Consented client logos as SVG.
8. Architecture sketches (to draw in the diagram style above).

---

## 11. Logo usage

Measured from `assets/logo/discoverdev-logo-light-500.jpg`, the only source file:
- Mark: about 117×135px, w:h ≈ 0.87.
- Wordmark: about 356px wide, cap height of "D" ≈ 47px.
- Mark-to-wordmark gap: about 12px.
- Sampled colours: mark ≈ `#1240BE` and "Dev" ≈ `#1240BE` (JPEG noise); "Discover" ≈ `#1A1A1A`.

**[needed]** Confirm whether "Discover" is brand black `#0F0F0F` in the official SVG.

### Lockups needed (**[needed]**: official SVG for each; the JPG must not ship)
| Lockup | Use | Exists? |
|---|---|---|
| Stacked (mark above wordmark) | About page, OG (optional), print | JPG only |
| Horizontal (mark at inline-start of wordmark) | Header, footer, OG, email signature | **No**. Must be drawn and approved. |
| Mark only | Favicon (SVG plus 180px apple-touch on white), social avatars | No |
| Reversed (for navy and photos) | Footer, CTA band, OG | No |

### Colourways
- **On white / light surfaces:** mark `#1240BE`, "Discover" `#0F0F0F`, "Dev" `#1240BE`.
- **On navy (proposal, needs approval):** mark `#A2C1FE` (blue-300), "Discover" `#FEFEFE`, "Dev" `#A2C1FE`. This keeps the two-tone logic at 6.65:1. The full-colour logo on navy fails (1.44:1 for the mark).
- **One-colour:** all `#032993` (navy) on light, or all `#FEFEFE` on dark.

### Clear space and size
- **Clear space:** ≥ 1 × cap height of the "D" on all sides (≈ 0.13 × wordmark width). For the mark alone: ≥ 0.25 × mark height.
- **Minimum size (digital):** stacked ≥96px wide; horizontal ≥112px wide or 20px tall; mark ≥16px (favicon) or ≥24px elsewhere.
- **Header:** horizontal at 28px tall (mobile), 32px (desktop).

### Don't
- Recolour outside the colourways, or use gradients or effects.
- Stretch, rotate or outline the logo.
- Separate "Dev" from "Discover", or set the wordmark in Manrope or Rubik.
- Place it on photos without a solid navy area behind it.
- Mirror it in RTL.
- Use the mark as a bullet or arrow icon.
- Use the decorative blade (CTA band, OG) at a size or position where it reads as the logo. Keep it cropped and tonal.

---

## 12. OG image template

- **Generation:** prerendered endpoint `src/pages/og/[...slug].png.ts` (satori → sharp → PNG). Fonts are static instances: Manrope 800 and Rubik 500, as `.woff` or `.ttf` (satori takes neither woff2 nor variable files).
- **Size:** 1200×630 PNG. Keep text inside a 72px safe margin. Target ≤150 KB.
- **Layout** (`data-surface="inverse"` palette):
  - Background `#032993`.
  - Top inline-start: reversed horizontal logo, 40px tall (**[needed]** SVG).
  - Type label: Rubik 500, 28px, `#C9DBFF`, sentence case ("Insights", "Case study", "Launch-Ready Review").
  - Title: Manrope 800, white, line-height 1.1, max 3 lines, max width 900px. 64px for titles of 45 characters or fewer; 56px above that. Truncate with an ellipsis only as a fallback.
  - Bottom inline-start: "discoverdev.ai", Rubik 500, 24px, `#A2C1FE`.
  - Decor: the blade shape cropped off the bottom inline-end corner, `#1240BE` (tonal).
- **Variants:**
  - `default` (pages, articles).
  - `case`: the verified metric replaces the second title line (Manrope 800, 96px, white, plus a 28px label in `#C9DBFF`).
  - `home`: the stacked logo centred plus a one-line positioning statement.
- **Meta:** `og:image:width`/`height`, `og:image:alt` = page title, `twitter:card=summary_large_image`.
- **Arabic:** test satori's Arabic shaping and RTL first. The fallback is hand-made static PNGs per page, mirrored layout (logo still unmirrored).
- **QA:** LinkedIn Post Inspector plus an X card preview on 3 page types.

---

## 13. Open items
| # | Item | Owner |
|---|---|---|
| 1 | Official SVG logo set: horizontal lockup drawn, reversed colourway approved, "Discover" colour confirmed | Mohamed / designer |
| 2 | Arabic font confirmed (IBM Plex Sans Arabic vs Rubik Arabic for body), quote marks, numerals, optical size | Native reviewer |
| 3 | Team portraits, founder portrait, working shots | Mohamed |
| 4 | Redacted sample report screenshot for `/launch-ready` | Mohamed |
| 5 | Measured Cal.com embed heights for `min-block-size` | Build |
| 6 | Review price cue figure (hero `offer`) | Mohamed (CRO §13) |
| 7 | Dark theme: deferred past v1. Revisit with analytics. | — |
