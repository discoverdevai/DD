# Art-direction critique with tasteskill v2 (Oct 16, 2026)

This critique used the skill's `references/critique.md` rubric and `tells.md`, applied to screenshots of the live build at 1440×900 and 390×844. The skill's scripts (`lint.mjs`, `inspect.mjs`) were **not** run; they need Mohamed's OK. The scores are an honest juror's view: real Awwwards "Sites of the Day" land around 7.5–8.0.

## Home — round 1
- **Seen in one second:** the headline "Build the right thing. Ship it fast."
- **Idea:** an AI lane and a senior lane on a sprint board. It's a category device: any AI studio, TrianglZ included, could show it.
- **Live thing:** none. The sprint board plays once and you can't interact with it.
- **Layout by section:** hero=centred stack + window / proof=band / method=statement + 2 boxed cards / lifecycle=timeline / engagements=3-card grid / capabilities=4-tile grid / case=split / why=statement + 3 columns / faq=split / closer=band.
- **Scores:**
  - Design 6.5
  - Usability 8
  - Creativity 6
  - Content 7.5
  - Overall 6.95, capped at **6.5**
- **Caps applied:**
  - Eyebrow pill and "//" labels, monospace labels, 01/02/03 numbering, decorative gradients, hairline boxes: overall ≤ 6.5.
  - Zero real pictures: design ≤ 6.5.
  - The competitor test fails: creativity ≤ 6.
- **Top three problems:**
  1. **No idea that only we own.** Fix: carry the new brand story (The DiscoverDev Way, the keystone, senior sign-off) into the hero and every section.
  2. **No real pictures** (the floor is 4). Fix: real interface fragments from shipped products (needs consent), team and hub photos (D-16), or archival Alexandria imagery from open collections (`assets.mjs`, network, needs approval).
  3. **Template devices stacked up.** Engagements and Capabilities are card grids in a row, and there are index numbers, mono labels and boxed cards everywhere. Fix: drop the index numbers, keep mono only inside real UI fragments (`data-ui`), and recompose Capabilities as a list or index.

## Build — round 1
- **Seen in one second:** the headline and the "How a Build runs" window.
- **Positives:** the navy statement band is the strongest screen, a full field of colour with one action.
- **Problems:**
  - The H1 runs to 3 lines at 1440, against the house rule of 2 lines at most.
  - The pill eyebrow, 01–04 numbering and mono labels all appear on the first screen.
  - Still no real pictures.

## Conflict with the approved brand (decision for Mohamed)
The skill bans devices our Signal system uses on purpose: mono for the AI layer, numbered steps, the blueprint grid, the hero pill, gradients and glows. Our brand guidelines already say "no busy gradients", and they win wherever the two disagree.

**Options:**
- **(a) Adopt the compatible rules now:**
  - Headlines at 2 lines or fewer.
  - No index numbers where order doesn't matter.
  - Mono only inside UI fragments.
  - No "//" labels.
  - No two card grids in a row.
  - One live thing.
- **(b) A full tasteskill redesign after launch:** real pictures, a dealt direction, the inspector gate.
- **(c) Keep everything as it is.**

**Recommended:** (a) before go-live, (b) after it.
