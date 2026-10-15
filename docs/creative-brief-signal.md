# Art direction brief: Signal (brand-locked)

**Project type:** Mixed (web visual system, interface artifacts, diagrams, and later team photography)
**Channel(s):** discoverdev.ai (all v1 routes), OG images, and later Clutch, LinkedIn and Upwork profile visuals
**Date briefed:** 2026-10-15 · **Production:** M1–M2 build (Oct 19 – Nov 1)
**Director:** Claude Code (art direction) · **Approver:** Mohamed
**Budget:** $0 (in-house build; no stock, no paid assets)
**Inputs:** `context/01-brand.md`, `context/06-design-system.md`, company profile deck brand system, `docs/design-critique-round2.md`

---

## 1. Project context
**Why it exists:** Mohamed asked for a site that feels technical, AI-led and premium, and that shows DiscoverDev builds with AI and moves fast, without hype in the words. Round 2 found the idea. The critique found where it drifted off-brand. This brief locks the direction so every page, component and asset follows one system.
**What it must accomplish:** a launch-stuck founder understands in 5 seconds that a senior team uses AI to check their app fast and then tells them plainly what to do, and books a Launch-Ready Review.
**How it will be measured:** a 5-second test with 2 founders (10 §2.2); `cta_clicked` → `booking_completed` rate; Lighthouse budgets (07 §13); axe 0 serious.

## 2. Concept
**The big idea:** *Machine speed, human sign-off.* Every visual has two layers you can tell apart: the AI layer (fast, dense, monospace, signal blue) and the human layer (calm, large, Manrope, a green check that means "a person signed this off").
**Surface metaphor:** *The workshop and the report.*
- Dark ink surfaces are the workshop, where the machine works. They are used for heroes and process.
- Light paper surfaces are the report a human hands you, used for offers, FAQs, articles, legal pages and booking.

The site literally moves from workshop to report as you read.
**Why now:** Every rival either sells AI hype (Robusta's "AI-native future") or human craft (Goji, TrianglZ). The proof bank's method line, "AI does the heavy lifting. Senior engineers own the quality.", lets DiscoverDev show both, truthfully.
**What it rejects:**
- AI as magic: glowing brains, robots, sparkles, purple.
- AI as threat: cold, faceless.
- "Agency glam": logo walls, stock handshakes.

## 3. Audience
**Primary:** a pre-seed or self-funded founder in the US or GCC. They built an MVP with Lovable, Bolt, v0, Cursor or a freelancer, it works in the demo, and they are scared to launch.
**What they feel now:** dread and fog. "I don't know what I don't know." Wary of offshore juniors and of being told to rebuild.
**What we want them to feel:** "These people are technical, fast and serious, and a real senior person will look at my app and tell me straight."

## 4. Subjects
- **People:** real team only, after D-16/D-17. Head-and-shoulders portraits per 06 §10, cool white balance, plain light background. Shown on paper surfaces, never on the dark canvas with a glow. No AI-generated people, ever.
- **Product artifacts (the hero subjects):**
  1. **Run panel:** an example Review run. AI rows check the six areas, then human rows sign off. Labelled as an example.
  2. **Findings report:** ranked findings with a verdict (06 §9.6), on paper.
  3. **Client product screens:** only with consent, in a neutral frame (06 §10).
  4. **Diagrams:** EduLens model routing, the fix-or-rebuild tree, the time-overlap band (06 §10 diagram style).
- **Objects:** the logo blade (06 §9.16) is the only graphic device. **Forbidden:** robots, brains, circuit boards, binary rain, globes with dots, rockets, padlock clip-art, 3D blobs.

## 5. Composition
| Surface / channel | Ratio | Notes |
|---|---|---|
| Home hero (desktop ≥ 1024) | content 6.2 : 5.8 | Copy at inline-start, run panel at inline-end; blade crops off the inline-end top corner |
| Home hero (375) | stacked | H1, lead, CTA, terms, quiz link and proof fit the first viewport; the run panel starts below the fold with 4 rows |
| OG image | 1200×630 | Ink canvas, reversed logo, Manrope 800 title, blade bottom inline-end (06 §12, re-coloured to Signal tokens) |
| Case and article covers | 16:10 | Paper frame, neutral chrome |

**Framing:**
- Generous negative space around the H1.
- One focal device per viewport: the run panel or the blade, never both at full strength. The blade sits behind the panel at 60% opacity in the hero.
- Hairline grid only behind heroes, fading out by 85%.

## 6. Lighting (interface light)
- No glows, bloom or blur.
- "Light" comes only from surface steps on one hue: canvas `#01082D` → raised `#02103E` → navy `#032993` → brand blue `#1240BE`.
- Shadows: navy-tinted, used on paper only (06 shadows). On ink, depth is a 1px hairline (`rgb(162 193 254 / .14)`), not a shadow.
- Team photography: soft daylight, cool-neutral, light background (06 §10).

## 7. Colour and treatment
| Role | Token | Hex | Source |
|---|---|---|---|
| Ink canvas | `--blue-975` (new ramp step) | #01082D | Derived at brand hue 263.6 (L 0.16) per 06 §2 OKLCH method |
| Ink raised | `--blue-925` (new) | #02103E | Same method (L 0.20) |
| Chapter navy | `--blue-800` | #032993 | Brand navy (01) |
| Action | `--blue-700` | #1240BE | Brand primary (01) |
| Machine voice (small text) | `--blue-300` | #A2C1FE | 06 (10.80:1 on ink) |
| Machine marks (dots, bars, blade light) | `--blue-400` | #6C9AFF | 06, decor only |
| Human sign-off | `--green-300` (on ink) / `--green-700` (on paper) | #7FD8A6 / #106B3B | 06 success tokens (11.43:1 / 6.53:1) |
| Text on ink | `--neutral-0` / `--blue-200` | #FEFEFE / #C9DBFF | 06 |
| Paper | `--neutral-0` / `--blue-50` | #FEFEFE / #F3F7FE | 06 |
| Body on paper | `--neutral-950` / muted `--neutral-600` | #0F0F0F / #6B6B6B | 01, 06 |

**Treatment:**
- Saturation is true to brand.
- Contrast is high.
- No gradients except two:
  - the blade's tonal fill (`blue-800 → blue-700`, same hue)
  - the 1px hairline grid.

## 8. Tone
- **Precise**, not cold.
- **Fast**, not frantic. Motion is one 2.4s sequence, once.
- **Premium**, not flashy. The quality is in the type, spacing and real artifacts.
- **Technical**, not cryptic. Mono carries data; sentences stay plain English (03 voice rules).

**Type:**
- **Manrope 800** for display, tracking −0.035em.
- **Manrope 700** for H2 and H3.
- **Rubik 400/500** for body.
- **JetBrains Mono 400/500** for the machine voice: run rows, eyebrows (at most 2 per page), file names and `$` lines (at most 1 per page).

**Motion:** the run panel plays once at 50% visibility, ≤ 2.4s:
- AI rows fill their bars (320ms steps).
- Human rows flip to "Signed off" (480ms steps).

Reduced motion shows the final state. Nothing loops.

## 9. Reference moodboard (what we take from each, never competitors in our category)
| Reference | What we take | What we leave |
|---|---|---|
| Linear (linear.app) | Dark canvas restraint, tight display type, product UI as hero | Their purple, gradient headline text |
| Vercel (vercel.com) | Hairline grid, mono metadata, precision | Pure black-and-white neutrality (we stay blue) |
| Stripe docs (stripe.com/docs) | Paper surfaces for reading, calm code blocks | — |
| Factory (factory.ai) | Engineering-document feel, labelled figures | Their grey palette |
| Swiss technical manuals | Numbered steps, strict grid, captions | Ornament |
| DiscoverDev company profile deck | JetBrains Mono eyebrows, chevron recurring, ink impact slides | Rubik headings (06 sets Manrope) |

## 10. What to avoid
- **Category clichés:** glowing brains and robots, binary rain, neon cyan streaks (the Figma's), purple-to-blue gradients, sparkle "AI" icons, glassmorphism, logo marquees, stat counters.
- **Treatments:** glows, blur, gradient text, centred body copy, a `//` label on every section, middle-dot metadata, arrows appended to buttons, chips inside buttons.
- **People:** stock photos, AI-generated faces, posed handshakes.
- **Brand:** recolouring the logo outside 06 §11, setting the wordmark in Manrope, blue text on navy (1.44:1).

## 11. Deliverables
| Asset | Format | Count | Spec |
|---|---|---|---|
| Token update | CSS (`tokens.css`) | 1 | 06 §2 plus `--blue-975`, `--blue-925`, `--ff-mono` JetBrains, `[data-surface="ink"]` and `[data-surface="paper"]` |
| Component specimens | Astro | §16 inventory | Run panel (new), ReviewSnapshot (paper), layer chips (new), blade |
| Logo set | SVG | 4 lockups | **[needed] D-33** from the source file: colour on paper, reversed (mark and Dev #A2C1FE, Discover #FEFEFE) on ink |
| OG template | PNG via satori | per page | Signal palette |
| Diagrams | inline SVG | 3 | EduLens routing, fix-or-rebuild, time overlap |

## 12. Timeline
| Milestone | Date | Owner |
|---|---|---|
| Direction approved | Oct 16 | Mohamed |
| 01/06 updated, tokens built | Oct 19–21 (M1) | Claude Code |
| Components on fixtures | Oct 26 – Nov 1 (M2) | Claude Code |
| Visual QA (contrast, motion, RTL mirror) | Nov 1 | Claude Code |

## 13. Approvals
1. Mohamed: the direction (this brief plus the sample page).
2. Mohamed: the 01/06 diffs before the build uses them.

**Rounds:** 2. **Hard stop:** Nov 1 (end of M2).

## 15. Open questions
- [ ] D-33: official SVG logo set. Until then the interim mark is tinted per 06 §11 and the wordmark is a raster crop of the official PNG.
- [ ] Mint `#7EF0C0` from the deck vs 06 `#7FD8A6`: this brief uses the 06 token. Confirm, or approve mint as a brand accent in 01.
- [ ] Run-panel strings go into `03-copy.md` §2.2 before build (CLAUDE.md copy rule).
