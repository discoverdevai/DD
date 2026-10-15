# CRO review with UX laws (Oct 16, 2026)

From a read-only review of the screenshots in `docs/review/pages/`, the live HTML, and 2026 agency research covering TrianglZ, Thoughtbot, Netguru, STRV, Brainhub and Monterail. Severity runs from 1 (cosmetic) to 4 (blocks conversion). Proof comes only from `09`. New wording goes into `03` first.

## Research patterns
- **Hero:** an outcome headline, one primary CTA and a "see our work" secondary, with low-commitment microcopy near the CTA. We already match this.
- **Proof without logos:** a card with a category tag, an outcome headline with a number, and one line of context. The anonymized EdTech card fits.
- **Risk reversal:** our guarantee ("no useful findings, no charge") is stronger than any of the six agencies offer, but it is underused outside /launch-ready.
- **Pricing:** none of the six agencies show a number. Safe middle ground is to state what sets the price, the engagement model and minimum terms (D-01).
- **Booking:** an inline scheduler is an edge over a contact form. Chili Piper vendor data (directional) puts form-to-meeting at about 30% without instant booking and about 67% with it. Don't copy TrianglZ's three tracks that all lead to one link.
- **Remote-team trust:** offices, regions, registration details and named people (D-16).

## Page findings
| Page | Issue | Law / heuristic | Sev | Fix |
|---|---|---|---|---|
| Home | No CTA in the ~7 screens between the hero and the closer | Goal-Gradient, Serial Position | 3 | Mid-page filled CTA after the case and after Engagements |
| Home | The launch-check link under the hero CTA is missing (spec `home_hero_launch_check`) | Hick, Von Restorff | 3 | Add the existing link |
| Home (mobile) | The sprint mock (~900px) pushes the proof strip down | Serial Position | 2 | Shorter mock on phones |
| Validate | The verdict options look like buttons, but only Build links | Jakob, H4 | 2 | Make them static, non-button styling |
| Validate | Statement band has no CTA | Goal-Gradient | 2 | Add a button |
| Validate | Cost FAQ gives no anchor | H2 | 3 | "What sets the fee" (D-19) |
| Build | Weak proof for the biggest offer | Aesthetic-Usability | 3 | Add the EdTech metric and "four clients expanded scope" (09) |
| Build | Discover/Plan bars are empty outlines and look like they're loading | H1 | 2 | Fill them |
| Build | The price comparison is FAQ #5 | Serial Position | 2 | Surface it in Terms |
| Scale | Squad tiles look like buttons | Jakob | 2 | Flatter styling |
| Scale | A 6-month ask from a team with no faces | Trust | 3 | D-16 |
| Launch-Ready | The CTA says "Book a Review", but the first step is a free scoping call | H4 | 3 | Microcopy under the CTA (03) |
| Launch-Ready | No price anchor | | 3 | D-01 |
| Launch-Ready | Sample report sits 2 screens down | Serial Position | 2 | Move it up |
| Partners | Hero cards look clickable but go nowhere | Jakob | 2 | Anchor links to the table |
| Partners | "Partners we work with" items have no links | | 3 | Link to /work |
| About | No faces | Trust | 3 | D-16 |
| About | Core line repeated 3 times | Miller | 2 | Cut the repeats (03) |
| Work | "What clients say" H2 above a single rating line | Expectation | 3 | Retitle (03) |
| Work | Only 2 of ~8 rows are links, in mixed styles | Affordance | 2 | Card rows |
| Case study | Metric shown 3 times; hero half empty | Proximity | 2 | Snapshot in the hero |
| Insights | Two link targets per card | Fitts | 1 | Whole card clickable |
| Article | No in-body launch-check CTA (03 spec); sticky bar shows clarity, not Review | Spec, 04 §5 | 2 | Add both |
| Launch check | Full footer on a focused funnel page | Hick | 1 | Leave as is (low impact) |
| Book | Calendar not configured (`data-cal-configured="false"`) | H5 | 4 | Cal.com username (D-23); collapse the frame on failure |
| Book | The H1 leads with the Review although most traffic is clarity | | 2 | Neutral H1 (03) |

## Priorities
- **P0:**
  - Cal.com live (D-23) plus collapse the frame on failure.
  - Retitle "What clients say".
  - Scoping-call microcopy under Review buttons.
  - Hero launch-check link plus article in-body check and Review sticky bar.
- **P1:**
  - Mid-page CTAs.
  - Remove false affordances.
  - A reusable proof module from `09` facts.
  - D-01 and D-16.
  - Book page H1, selected-tab state and mobile order.
  - Move the Review sample report up.
- **P2:**
  - About repeats and numerals.
  - Case-study snapshot in the hero.
  - Shorter mobile mock, filled timeline bars, Work card rows.
  - Funnel reporting from `data-cta-id`.
