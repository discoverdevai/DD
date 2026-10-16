# Home: section-by-section enhancement plan (Oct 16, 2026)

**Brief from Mohamed:** gradients between sections, a background with motion, clear sections. Keep the dark theme and the existing colours.

**Inspiration:** the taste skill's guidance (`motion.md`, `colour.md`) and real award-winning dark sites from its library:
- **Hildén & Kaira** (8.3): alternating dark and light bands, with one accent filling key tiles.
- **PX PUSH** (8.2): every section is a full colour field, including one royal-blue chapter.
- **The New Industrials** (8.3): the background changes as you read, so you can feel your progress.
- **White Desert** (8.4): opens near-black, then turns navy.

The shared move is **colour by chapter**: each section is its own field, there is one bold chapter, and sections arrive in different ways rather than with one fade-up everywhere.

## Already done (built, not committed)
- Dark sections alternate two shades of the same ink, so each one reads as its own band.
- Each section opens with a brand-blue light that alternates sides and fades in on scroll, then drifts slowly. It is still under reduced motion.
- The seams between sections fade out at both ends.

## Section by section
| # | Section | What works | What to improve | Field | Motion |
|---|---|---|---|---|---|
| 1 | Hero | Strong headline, clear action | The sprint board is long and repeats sections 3 and 4 | Ink + horizon light (keep) | Keep the one-time board sequence (signature moment) |
| 2 | Proof band | Four honest facts | Thin; it blends into the hero | Raised ink band | Facts arrive one by one; "5.0" settles in once |
| 3 | How we work | The journey cards (new, approved) | The AI and senior panels repeat the hero board and the journey | Ink + light | The journey plays once (done) |
| 4 | Lifecycle | Clear four steps | Grey placeholder thumbnails (the "fake dashboard" tell); overlaps section 3 | Raised ink | **A progress track** draws across the four steps as you scroll, and each step lights up in turn. The thumbnails go |
| 5 | Three ways to work | Clear choice | Same card entrance as everything else | Ink + light | Cards arrive left to right, the Build card last and highlighted |
| 6 | What we build | Good grouping | Long tiles | Raised ink | Chips cascade in per tile |
| 7 | Case highlight | A strong number | Empty space under the number card | Ink + light | The number scales in once; the five changes arrive row by row |
| 8 | Why DiscoverDev | The core message | Same look as every other section | **Brand navy (#032993): the one bold chapter** | The statement rises line by line |
| 9 | FAQ | Clear | n/a | Ink + light | Questions arrive row by row |
| 10 | Closing band | Horizon light | n/a | Ink + horizon (keep) | Keep |

## Batches
1. **Batch 1, look and motion only, no content removed (doing now):**
   - Section 8 as the navy chapter.
   - Section 4 progress track replacing the grey thumbnails.
   - Varied entrances in sections 2, 5, 7 and 9.
2. **Batch 2, needs Mohamed's OK (removes repetition):**
   - Drop the "What AI does / What senior engineers own" panels under the journey.
   - Shorten the hero sprint board to the release card and four rows.

**Rules:**
- Transform and opacity only; everything plays once except the slow background drift.
- Reduced motion shows the finished state.
- No new colours.
- QA, functional and axe/Lighthouse checks pass before every commit.
