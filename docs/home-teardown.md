# Home page teardown (Oct 16) and rebuild brief

Mohamed's verdict on build v1: "one of the worst landing pages I've seen". This is the honest review behind the rebuild. References were captured as full-page screenshots on Oct 16: Linear, Vercel, Resend, Railway, Metalab, Ramotion and Basement, plus Behance searches for "software agency landing page" and "AI development studio website".

## What the references do that v1 does not
| Pattern in the references | v1 home | Rebuild |
|---|---|---|
| **One huge crafted visual owns the first screen.** Linear and Railway use a full product UI; Vercel, Resend and Metalab use a 3D object or art | Small run-log panel beside a paragraph | A wide "Review workspace" product scene under a centred headline: sidebar with the six areas, findings table, AI run column, senior sign-off card. Brand-blue horizon light behind it |
| **Very short hero copy.** Headline, one sentence, two buttons | 43-word paragraph, 3 terms, a quiz link and a rating line | H1 + one sentence + two buttons + one quiet line of terms |
| **Two-tone statement typography** as a section in its own right | None | Core idea set as a large statement: first sentence bright, the rest dim |
| **Figures, not cards.** Linear's "FIG 0.1" line art and Vercel's UI vignettes | Three identical bordered text cards per section | Problem section with three line-art SVG figures. Process steps each get a mini UI vignette |
| **Depth and light.** Glows, gradients, soft shadows and layered windows | Flat navy and white blocks | Restrained light: one horizon glow per screen, layered windows, 1px highlights on top edges |
| **Rhythm.** Every section has a different structure | Every section: H2 at the start, then a grid | Varied compositions: centred hero, statement, figure row, split mockup, timeline, path tiles, big metric, two-column FAQ, glowing closer |
| **Smaller, quieter body text; big headings** | Body at 18px, blue headings on white (corporate) | Dark canvas throughout the home page; body 16–17px in muted grey; display headings in Manrope 600, tight |
| **Light sections feel designed** | Plain white with blue H2s, which reads as documentation | Home stays dark (the "workshop"). Light paper is kept for long reading: articles, legal and booking |

## What stays
- All copy comes from `03` (the hero body is shortened in `03` first), and every fact comes from `09`.
- Brand blue and navy ramp, Manrope, Rubik and JetBrains Mono, logo colourways.
- WCAG 2.2 AA (contrast is measured, not assumed), no JS frameworks, logical CSS, and the performance budgets.
- No fake logos, people, photos or metrics.

## Spec changes this implies (recorded in 06 §0 after approval)
- A restrained glow is allowed: one radial "horizon light" per viewport, brand hue only. This replaces 06 §1's blanket "no glows" rule. User direction (Oct 16) wins.
- The home page uses the ink surface for every section. Paper is limited to reading templates.
