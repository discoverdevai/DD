# Copy audit: V1.0 pages (/, /book, /privacy, /terms, /404)

Audited 2026-10-18 against `dist/*.html`, `context/09-proof.md`, `03-copy.md` (§2V1, §2A, §13, §16), `01-brand.md`, `11-open-decisions.md`. Read-only. Rule for every fix: change `03-copy.md` first, then `src/content/copy/en/*`.

Already fixed since the earlier review (verified in dist): Rushr shows logo only; Continuum Therapy Collective gone; Ireland off the map; NJWAR has no country or AI line; Youssef card has no result line; header says "Book a free clarity call"; problem band has the support line; footer core-idea block gone on home; FAQ has "What happens on the clarity call?"; Way FAQ and "choose a call time" cut; Review FAQ points to the clarity call; /book title and meta are clarity-only.

| # | Page/section | Exact current text | Problem | Source/rule | Proposed replacement | Sev |
|---|---|---|---|---|---|---|
| 1 | Home: Way body, Way card 3, hero board checklist, FAQ "Is AI-written code safe to ship?"; `03` lines 370, 380, 472, 1298 | "A senior engineer reviews every change and signs off every release" / "Review of every change" / "Senior engineers make the decisions, review every change and sign off each release." | 09 confirms only: a senior engineer signs off every release; humans are responsible for every line that reaches users. "Reviews every change" is not in 09. Said 5 times. | CLAUDE.md Facts; 09 Method | Way body: "AI drafts the work, so it moves fast. A senior engineer signs off every release, so speed never costs you quality." Card 3: "A senior engineer signs off the release." Checklist: drop "Review of every change". FAQ: "Yes. AI drafts code, tests and documentation. Senior engineers make the decisions and sign off each release. A person is responsible for every line that reaches your users." | P0 |
| 2 | Home: Way illustration checklist | "Security, data and payments" | Names three review areas as if checked on every project. Not in 09. | Facts | Remove the line, or confirm with Mohamed and add to 09 first. | P1 |
| 3 | Home: client row | "Yawmy Care / Childcare platform · our product" under "Teams we've built for" | Not a client. V17 omits Yawmy Care; D-32 says skip until the 2027 launch. | 03 §0.7 V17, 11 D-32 | Remove the card (nine remain). | P1 |
| 4 | Home: client row heading | "Teams we've built for" | Upscend, Arheb, Jumlaty, Nile Support are embedded teams or placements, Zest a market study (09). "Built for" overstates. | Facts | "Teams we've worked with" | P2 |
| 5 | /book: "What you can count on" | "No useful findings, no charge (Launch-Ready Review)." | The Review is hidden in V1 (tab hidden, `?type=review` falls back). Visitor sees a guarantee for something unbookable; "useful" undefined. | 03 §2V1 | Delete the line in V1. Keep "No pitch." and "NDA on request." Restore in V1.2. | P1 |
| 6 | /book: "What happens on the call" | "You leave with a next step, and a fixed price if a Review or project fits." | "Review" is unexplained and unbookable on V1. | 03 §2V1 | "You leave with a next step, and a fixed price if a project fits." | P1 |
| 7 | /book privacy line vs /privacy | "We use your answers only to prepare for your call." | The privacy notice says answers are also used to stay in touch and to learn which pages lead to bookings. "Only" is wrong. | Consistency, legal accuracy | "We use your answers to prepare for your call and to see which pages lead to bookings." Edit 03 §13.7. | P1 |
| 8 | /privacy, /terms | "ask for your launch check result by email"; "dd_quiz_v1: your launch check answers"; "read our guides, take the launch check and book a call"; "Our guides, articles" | Launch check, guides and articles are not live in V1.0 (V1.2). Visitors read about features that do not exist; Web3Forms and quiz storage are listed. | 03 §2V1 | Mohamed decides: add one line "Some of these tools launch later", or trim to what is live ("You can browse the site and book a call for free."). | P1 |
| 9 | Home: hero H1 and sub | "Turn your idea into a live product in weeks." / "...in 8–12 weeks." | Idea to live is Validate (1–2 weeks) plus Build (8–12 weeks); 8–12 is Build only (09). "Weeks" repeats. | 09 Offer | Sub: "DiscoverDev builds it with senior engineers and AI. Build takes 8–12 weeks, against the usual 12–16. You own everything." | P1 |
| 10 | Home: hero board caption (screen reader text) | "Example of a sprint the DiscoverDev Way: AI drafts..." | Broken grammar. | Voice | "Example of a sprint run the DiscoverDev Way: AI drafts the work, then a senior engineer signs off the release." | P1 |
| 11 | Home: Way steps | "Discover / AI drafts / A senior signs / Live" | 09 stages are Discover, Plan, Build, Ship & Stay; /how-we-work uses those. Two vocabularies for one method. | Consistent terms | Label the picture "How a release runs", or rename steps to the 09 stages. | P2 |
| 12 | Home: tile and Youssef card | Tile "AI agents for an EdTech platform · Egypt · 60–90%"; next tag "Featured review · Build · AI agents · EdTech" | A3(a) is applied, but tile, tag and EduLens logo still point at one company. | 11 D-05/06 | Change the tag to "Featured review · Build". | P2 |
| 13 | Home: tile | "depending on cache hit rate and caption availability" | Jargon a founder will not follow. | Voice | "depending on how often content is reused" (09: cached and shared across users). | P2 |
| 14 | Home: review tags | Andrei "Saudi Arabia expansion"; Farah "Validate · Market research" | 09: "Auto Spare Parts & Trucking in Saudi Arabia"; Farah is under RESEARCH, not Validate. | Facts | Andrei: "Market research · Auto spare parts and trucking in Saudi Arabia". Farah: drop "Validate". | P2 |
| 15 | Home: NJWAR | "the demo places a chair in your room" | 09 says "a piece", not a chair. | Facts | "places a piece of furniture in your room" | P2 |
| 16 | Home: FAQ time zones | "Gulf time is 0–2 hours ahead" | Not in 09; offset shifts with clock changes. | Facts | Drop it; keep "Our day overlaps US mornings and Europe." | P2 |
| 17 | Home: Scale card | "A dedicated squad of developers, QA and a PM" | Insider words. | Voice | "A dedicated team of developers, testers and a project manager who runs the roadmap with you." | P2 |
| 18 | Home: CTAs | "Book a free clarity call" vs "Book a call" (mobile header, drawer, footer, bottom bar) vs "Book a call about X" | Three labels for one action. | CTA consistency | Use the full label wherever space allows; "Book a call" only in the phone bar. | P2 |
| 19 | Home: closing band and FAQ | "even if we're not the right fit" (twice) | Repeated. | Repetition | Keep in the closing band only. | P2 |
| 20 | Footer, all pages | Column "Company": Book a call, Privacy, Terms | Heading does not describe the links. | Clarity | Rename to "More". | P2 |
| 21 | 404, legal pages, footer analytics line | "We can't find that page", "We don't use tracking cookies." | Straight apostrophes; home and /book use curly. | Consistency | Curly everywhere. | P2 |
| 22 | /book | "30 minutes, no pitch." beside chips "30 minutes · No pitch..."; rating in trust strip and footer; "We work in Arabic and English." twice | Same idea twice on one screen. | Repetition | Cut the sentence tail; hide footer rating on /book; keep one language line. | P2 |
| 23 | /book header | "Back" | Unclear target. | Microcopy | aria-label "Back to home page". | P2 |
| 24 | Nav | aria-label "Main" / "Footer"; "Menu" as heading and button | Weak names. | a11y | "Main navigation" / "Footer navigation". | P2 |
| 25 | /privacy | "Our team works from Egypt and the United States." | D-08: Texas presence only. | 11 D-08 | "Our team works from Egypt, and we have a presence in Texas, USA." | P2 |
| 26 | /privacy | "We measure how the site is used: which pages are viewed, ... campaign tags in a link." (40+ words) | Over 25 words; more in legal text. | Voice | Split into three sentences. | P2 |
| 27 | Spelling | "colour", "unauthorised", "data centres" | UK spelling; US and GCC are target markets. | 01 markets | Pick one rule (US suggested). | P2 |
| 28 | `src/content/copy/en/projects.ts` line 19 | "AR furniture store with AI recommendations", Saudi Arabia | Stale entry; returns with /work. | Facts | Remove now. | P2 |

Not a problem: "Four clients expanded scope with us" and "Clients on 4 continents" trace to 09; the map lists USA, UK, Spain, Switzerland, Italy, Saudi Arabia, Kuwait, Egypt (four continents).

## Verified OK
- All 8 review quotes match 09 word for word; exclamation marks only inside Michelle's and Lea's quotes; no em-dashes; ranges use en-dashes consistently.
- Rating line matches D-34; prices, durations and offer names match 09; 404 and /book error copy follow 03.
- No banned words (utilize, leverage, seamless, robust, unlock); no hard-coded English found in components.

## Top 10
1. "Reviews every change" is not in 09 (said 5 times): keep "signs off every release".
2. "Security, data and payments" review claim has no source.
3. Yawmy Care card ("our product") breaks V17 and D-32.
4. /book shows the Review guarantee while the Review is unbookable.
5. /book "a Review or project" mentions a hidden offer.
6. /book "only to prepare for your call" contradicts the privacy notice.
7. Privacy and terms describe the launch check and guides, not live in V1.0.
8. Hero: "idea to live in 8–12 weeks" mixes Validate and Build timing.
9. Hero board caption is ungrammatical ("a sprint the DiscoverDev Way").
10. Tile and featured review tag still point at one EdTech company; "caption availability" is jargon.
