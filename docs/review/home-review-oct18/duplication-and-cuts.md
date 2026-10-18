# Home page: duplication and low-value content (Oct 18, 2026)

Goal: every section does one job, says one thing, and says it once. Counts below were measured on the built `dist/index.html` (main content plus footer, hidden FAQ answers included). Page and word figures marked "est." are estimates, not measurements.

## 1. The page in numbers
- About 1,950 words in `<main>` (the FAQ alone is 371), 29 links, 15 sections, 14,600 px tall on desktop, 22 screens on a phone.
- The same ideas repeat 15+ times, each in different words. That is the real length problem, not the word count.

## 2. One job per section (the target)
| Job | Section | One message |
|---|---|---|
| Promise | Hero | Idea to live product, senior engineers and AI, you own it. |
| Proof | Logos and map, one case with a number, three reviews | Real clients, a real result, real people saying so. |
| How | One section (merge How we work and Lifecycle) | Discover, Plan, Build, Ship and stay. AI drafts, a senior signs off. |
| Paths | Engagements | Pick where you are: idea, ready to build, growing. Plus Review and Partners. |
| Reassure | FAQ | The five objections that stop a call. |
| Act | Closing band | Book the call. |

Everything else either supports one of these or goes.

## 3. Repeated messages (measured)
| Message | Times | Where | Keep in | Remove from |
|---|---|---|---|---|
| "Senior engineers sign off / own the quality" | 10+ ("senior" 16) | Hero pill, hero board (3 lines), Way H2, Way body, journey card 3, Why pillar, FAQ x2 | Hero (pill or board, not both) and the merged How section | Why, Way body repeat, FAQ "What is the DiscoverDev Way?" |
| "Before any code" | 6 | Way body, Way card 1, Lifecycle Plan (title and body), Capabilities, Why | Merged How section, once | Lifecycle Plan duplicate, Capabilities, Why |
| Weekly demo / "you see progress every week" | 5 | Way, Lifecycle Build, Engagements Build, FAQ x2 | Engagements Build | Way, Lifecycle (merged), one FAQ |
| "No handoff gaps / one team" | 3 | Lifecycle line, Capabilities lead, Why | The merged How section | Capabilities, Why |
| "You own it all / full IP, no lock-in" | 6 | Hero, Why (headline and pillar), FAQ, footer (twice) | Hero and FAQ | Why |
| "30 minutes · No pitch · Leave with a next step" | 3 | Under hero buttons, after Reviews, closing band | Hero and closing band | After Reviews |
| "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct)" | 3 | Hero, Reviews heading area, footer | Reviews (the proof) with a short form in the hero | Footer |
| "Book a free clarity call" button | 5 in main (+ header, footer, sticky bar) | Hero, Way, Reviews, FAQ, closing band | Hero, after Reviews, closing band | Way (it asks before showing any work), FAQ column |
| Durations "8–12 weeks" / "1–2 weeks" | 3 and 3 (+ hero) | Hero, Lifecycle, Engagements, FAQ | Engagements | Lifecycle cards (after merge); keep one FAQ answer |
| Texas and Alexandria | 4 | Proof band facts, map legend, FAQ, footer | Map legend and footer | Proof-band fact line |
| "Arabic and English" | 4+ | Proof band, Capabilities (twice), FAQ, footer | Footer and the AI service line | Proof-band fact line |
| Same projects shown three ways | 3 | Logo band (10 clients), Chapters (NJWAR, Yawmy), Selected work (5 tiles) | Logo band, one case with a number | See section 4 |
| Two names for one journey | 2 | Discover, Plan, Build, Ship and Stay (Lifecycle) vs Validate, Build, Scale (Engagements) | One vocabulary | Say "Discover (Validate)" once or rename |

## 4. Content with little or no value (cut, merge or shrink)
| # | Content | Words (measured) | Why it adds little | Decision |
|---|---|---|---|---|
| 1 | **Lifecycle** (four step cards, 4 drawings) directly after **How we work** (four step cards, 4 drawings) | 111 + 150 | Same story twice, in two drawing styles. Durations repeat Engagements. | **Merge** into one How section of about 120 words. Frameworks and timings live on `/how-we-work`. |
| 2 | **Why founders and teams choose DiscoverDev** (four pillars) | 118 | Every pillar restates another section: product-first (Way), senior-led (Way), we stay (Lifecycle), you own it (hero, FAQ). Only two items are new. | **Cut.** Move "we tell you what to cut" into the Discover step and "four clients expanded scope" into the proof band. Keep the core sentence once (hero or footer). |
| 3 | **What we build** (15 list items) | 118 | Generic list, fails the swap test, interrupts the story between offers and proof. | **Shrink** to one line under Engagements. Keyword detail already lives on the service pages. |
| 4 | **Proof band fact list** ("Clients on 4 continents", "AI in production across multiple clients", "Arabic and English", "Texas, USA and Alexandria, Egypt") | about 25 | The map already shows the continents and the places; "AI in production across multiple clients" has no specifics. | **Cut** the list, keep the map and one caption. |
| 5 | **Chapters** (NJWAR, Yawmy) plus **Selected work** (5 tiles) | 90 + 122 | Three presentations of the same work; chapters take about 1,800 px for two projects, Selected work reuses one drawing twice. Only the EdTech tile has a result. | **Shrink**: one chapter (NJWAR, with the live demo) and the EdTech tile with its number and qualifier, then "See all our work". Other projects live on `/work`. |
| 6 | **Eight review quotes** | 240 | Seven are short and generic; four are market-research jobs; tag lines ("Validate · Market research · Fantasy football") add noise. | **Shrink** to three: EduLens (with its result), Nile Support CEO, one on speed or communication. Link "Read all 11 on Clutch". |
| 7 | **Section labels above self-explanatory headings** ("Selected work", "What clients say", "Guides and tools", "How a project runs", "The DiscoverDev Way") | about 5 each | Each restates the heading below it. `06` also says avoid a label above every heading. | **Cut** four of five; keep only where it adds information. |
| 8 | **Guides** (4 cards) | 145 | Useful for the AI-built-app segment but the page's fourth "four-up" row and the third guide adds little. | **Keep, trim to three** (launch check, production guide, security holes); link `/insights`. |
| 9 | **FAQ "What is the DiscoverDev Way?"** | about 50 | Repeats the Way section nearly word for word. | **Replace** with a one-line answer and a link, or cut. |
| 10 | **Hero pill "AI drafts. Seniors sign off."** next to the hero board that says the same | about 5 | Same message, twice, in the same viewport. | **Cut** the pill (the board shows it better). |
| 11 | **Footer rating line** | about 12 | Third time the rating appears. | **Cut**; keep the Clutch link. |
| 12 | **"Four clients expanded scope"** | 5 | Strong proof buried in a pillar nobody reads. | **Move** to the proof band. |

Keep as is (they earn their place): hero and RunPanel, logo strip, the map, Engagements, the EduLens tile, closing band, FAQ answers (repeating facts in the FAQ is deliberate: AI engines lift each answer on its own).

## 5. Link duplication
- Five links go to `/work` (the "see all" link plus four project tiles). Point the tiles to their own `/work#project-…` anchors or remove them with the tiles.
- `/insights/ai-app-to-production` is linked twice; Clutch is linked twice (hero and reviews); five links to book. Keep one each per job.

## 6. Effect (est.)
| | Now | After cuts (est.) |
|---|---|---|
| Sections in main | 15 | 9 or 10 |
| Words in main | about 1,950 | about 1,300 |
| Desktop height | about 14,600 px | about 9,500 px |
| Phone screens | 22 | about 14 |
| "Book a free clarity call" in main | 5 | 3 |
| Times the sign-off idea is stated | 10+ | 3 |

Estimates come from the measured section heights (merging the two step sections, removing Why and Capabilities, trimming chapters, work and reviews). Nothing was changed on the site.

## 7. Order of work
1. Message map (section 2) approved by you; edit `context/03-copy.md` first (CLAUDE.md rule).
2. Remove pure duplicates that need no new copy: hero pill, footer rating, Way CTA, FAQ CTA, "after Reviews" microcopy, proof-band fact list, section labels.
3. Merge How we work + Lifecycle; remove Why; shrink Capabilities.
4. Shrink chapters and Selected work; reduce reviews to three.
5. Screenshots, `dist-diff` review of the text removed, full QA (the inbound-links gate needs 3 inbound links per page, so check the pages whose links disappear).

## 8. Risks to check before cutting
- SEO keywords in Capabilities and Why must exist on the service pages first (`/validate`, `/build`, `/scale`).
- The inbound-links gate: removing home links to a guide or project may drop a page under 3 inbound links.
- Some claims lose their only home if cut (for example "four clients expanded scope", D-05 logos); move, do not delete.
- Reviews and projects removed from home need to stay visible on `/work` and Clutch.
