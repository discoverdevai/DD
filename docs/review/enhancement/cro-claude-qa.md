# DiscoverDev site: CRO and competitive audit (built site, 2026-10-16)

Scope: the built Astro site (copy in `src/content/copy/en`, pages, components) and the screenshots in `shots/`. The audit was read-only, so no site file was changed.
Applied: rampstack `cro-optimization`, project `mkt-cro`, `marketing-psychology`, `copy-diagnose`, `competitor-experience-audit` and `sales-objections`.
Facts come only from `context/09-proof.md`, with the `11` §0b launch defaults in force. That means no client names, quotes, prices or team names on the site until Mohamed decides.
Traffic is too low for A/B tests. Treat every change as a hypothesis. Check it with 5-second tests, founder calls and month-over-month `cta_clicked` and `booking_completed` counts.

## Verdict: home first screen
The first screen passes the "what is it" test. The sub names the category and the buyer ("a product and engineering company for founders and teams"). There is one filled CTA with clear risk terms ("30 minutes · No pitch · Leave with a next step"), and the Example sprint board shows the method instead of only claiming it.

It fails the "why you, not TrianglZ" test:
- **No proof.** The 5.0 rating sits below a sprint board about 600px tall. That is about y≈1,400 at 1440×900 and 3+ screens down on a 390px phone. /build and /launch-ready already put the rating in their heroes.
- **The pill copies TrianglZ's method name.** The pill reads "Agile v2". TrianglZ, a firm in the same city, sells its "New Agile V2.0 Method" behind the same "AI speed + human quality" promise.
- **The H1 claims speed we can't win on.** "Ship it fast" is a speed claim, while TrianglZ advertises MVPs in 4–8 weeks against our Build's 8–12.

Our real differentiators are missing from the first screen: a fixed price on Build, product-first scoping, and a person signing off every release.

## Verdict: brand fit
The brand says white #FEFEFE does most of the work, with navy #032993 for dark backgrounds and section openers. Home and 8 other pages are instead "all-ink" #01082D (`--blue-975`, `tokens.css:18`), which is darker than the brand navy and appears nowhere in the brand palette.
- Home uses no white anywhere. All 10 sections and the footer are `data-surface="ink"`.
- The conversion step is a jarring jump. /book, /launch-check, /insights and the legal pages are white paper, so a visitor goes from a near-black site to a white booking page exactly at the call booking.
- The fix is already built and approved in principle. The /build page is the "v4 pilot" (`06-design-system.md:115`): ink hero, navy opener, white and blue-50 content, one navy statement band and an ink closer. It matches the brand guide and reads better for long copy.
- Light would also stand out in the field. TrianglZ (`theme-color #0a0e27`) and Robusta (`#0a0a0a`) both appear to run dark sites. That is inferred from their meta theme colours, not confirmed visually.

**Recommendation:** roll v4 to home first, then the other all-ink pages (item 6).

## Ranked changes (max 15)

Effort: S = under 2 h · M = half a day · L = 1–2 days. "Decision" = needs Mohamed. "Fact" = needs a fact or consent that is not yet in `09`.

### 1. /book defaults to the Review, not the clarity call (primary CTA mismatch)
- **Where:** `/book` (whole page) and `/book/confirmed`.
- **Current:**
  - Unknown or missing `type` falls back to Review: `book.astro:2` ("unknown → review") and `:70` (`: 'review'`).
  - The static HTML marks Review as current with Review first (`book.astro:20–21`).
  - H1 "Book a review or a free clarity call" (`book.ts:7`). SEO title "Book a Launch-Ready Review or Clarity Call" (`book.ts:4`).
  - The confirmed page "Before the call" list is launch-only ("Write down the 3 things that worry you most about launch", `book.ts:48–51`) and is shown to clarity bookers too.
  - Partner bookings fall back to the Review next steps (`confirmed.astro:56`).
- **Change:**
  - Default `type` to `clarity`. Put the Clarity call tab first with `aria-current` in the markup.
  - H1: "Book a free clarity call". Keep the tabs.
  - SEO title: "Book a Free Clarity Call | DiscoverDev".
  - Description: "Book a free 30-minute clarity call about your product. No pitch. Or book a Launch-Ready Review of an app you already built."
  - Add `confirmed.before.clarity` items:
    - "A line on what you're building, or the idea."
    - "Any links: a deck, a prototype or your current app."
    - "Your rough timeline."
    - "Bring your co-founder or developer if you like."
  - Select the list by `type`, and add a `partner` next-steps branch.
- **Why:** strategy-v2 §7 makes the clarity call the site-wide primary action. Direct, email, Clutch-profile and no-JS visits currently land on the secondary offer, which breaks message match (mkt-cro §2) at the highest-intent step.
- **Effort:** S. **Decision:** no (implements approved v2). **Fact:** no.

### 2. Put the rating in the home hero
- **Where:** home hero.
- **Current:** `HeroV2.astro:18–22` has the buttons and terms only. The rating lives in `ProofBand.astro:14–17`, below the 600px delivery scene.
- **Change:** render `<ProofChip />` (already used on /build, /launch-ready and /book) directly under `<CtaTerms>` in `HeroV2.astro:22`. Text stays the approved D-34 wording: "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct) · Read our reviews on Clutch".
- **Why:**
  - cro-ux §1.4 says rating and review count belong in the hero.
  - 74% of B2B tech buyers consult reviews (TrustRadius 2026).
  - Credible proof near the CTA lifts conversion 12–34% (CXL, cited by Dupple 2026; directional).
  - Psychology: social proof placed at the decision point.
- **Effort:** S. **Decision:** no. **Fact:** no.

### 3. Hero sub: say what TrianglZ can't (fixed price, product-first)
- **Where:** home hero sub.
- **Current:** "A product and engineering company for founders and teams. Senior people, AI-accelerated, without cutting corners. And you own everything." (`home.ts:12`)
- **Change:** "A product and engineering company for founders and teams. We check it's the right thing to build, then a senior, AI-accelerated team builds it for a fixed price and timeline. You own everything."
  - Every part traces to `09`: product-first, the Build fixed price, the plan's fixed timeline (`build.ts:117`), and ownership.
  - Keep weeks out of the hero so we don't invite an 8–12 vs 4–8 week comparison.
- **Why:**
  - copy-diagnose check 1: the first screen must show how we differ. "Without cutting corners" is stock phrasing.
  - TrianglZ publishes timelines but no fixed price (only a $30K–90K audit range). Robusta shows no price model.
  - A fixed price is risk reversal (loss aversion) that the field doesn't offer.
- **Effort:** S. **Decision:** yes, it edits the approved strategy-v2 §5 sub. **Fact:** no.
- **Test idea:** H1 "Build the right thing. Ship it fast." vs "Build the right thing. At a fixed price." Judge by 5-second recall with 5 founders.

### 4. Hero pill: stop leading with a name TrianglZ already owns
- **Where:** home hero pill.
- **Current:** "Agile v2 · AI-accelerated, senior-owned" (`home.ts:10`). TrianglZ, also in Alexandria, sells the "New Agile V2.0 Method" on its homepage (fetched 2026-10-16).
- **Change:**
  - Pill: "AI-accelerated · A senior engineer signs off every release". The sign-off is already site copy (`home.ts:27`, `delivery.ts:22`) and `09`.
  - Keep "Agile v2" only as the method's name inside the How-we-work section, where it is explained.
- **Why:**
  - Same city, same label and same promise means a buyer comparing the two can read the later entrant as the copy.
  - strategy-v2 §3 itself says "must not copy its words". Lead with the mechanism nobody else names: a person responsible for every line.
- **Effort:** S. **Decision:** yes (naming). **Fact:** no.

### 5. Proof band: swap a location fact for retention proof
- **Where:** home proof band.
- **Current:** items are "Clients on 4 continents · AI in production across multiple clients · Arabic and English · Texas, USA and Alexandria, Egypt" (`home.ts:16–21`). Location is reassurance, not proof. It is also repeated in the FAQ and footer.
- **Change:** replace the `map-pin` item with `{ icon: 'repeat', text: 'Four clients expanded scope with us' }`. The fact is in `09` Differentiators and `home.ts:90`. Keep "Arabic and English" for GCC visitors (D-37).
- **Why:**
  - The strongest buyer fear for a nearshore team is "will they stay and deliver" (market-voc §6 #7–9).
  - Repeat purchase is proof of quality you can't fake.
  - It backs the "We stay" pillar early. TrianglZ and Robusta lead with size counts we can't match (`02`: don't fight on size).
- **Effort:** S (add the icon if missing). **Decision:** no. **Fact:** no.

### 6. Roll the v4 white-led surface map to home (brand + readability)
- **Where:** home, all sections.
- **Current:** every section is `data-surface="ink"` (`index.astro:24–37` and each component). The canvas is #01082D.
- **Change (keep the ink hero and the delivery scene):**

| Section | Surface |
|---|---|
| Proof band | `paper` #FEFEFE |
| Agile v2 statement | `inverse` navy #032993, the section opener |
| Lifecycle and Engagements | `paper`, cards with a 4px #1240BE top rule as on /build |
| Capabilities | `alt` #F3F7FE |
| Case metric | `paper` |
| Why | navy statement band |
| FAQ | `paper` (the original 06 rule) |
| Closer | ink horizon or navy |

  - Section titles on white: Manrope 700, #0F0F0F.
- **Why:**
  - Brand rule: white for content, navy for openers.
  - Long text reads better dark-on-light.
  - It removes the ink → white jump at /book.
  - It sets us apart from two dark-themed regional rivals. The rivals' themes are inferred, not seen.
  - /build already proves the pattern in this codebase.
- **Effort:** L (then repeat per page). **Decision:** yes, `06:115` says roll out "only after Mohamed approves". **Fact:** no.

### 7. Add one mid-page clarity-call CTA on home
- **Where:** home, right after Engagements.
- **Current:** about 10 screens with a filled primary CTA only in the hero and the closer.
  - The desktop header button hides on scroll down (`Header.astro:122–123`).
  - Engagements offers five doors as text links only (`Engagements.astro:23, 37`).
- **Change:** after the "Other ways in" rows, add one line plus a button: "Not sure which fits? [Book a free clarity call]" with `<CtaTerms kind="clarity">`, and `ctaId="home_engagements_clarity"`.
- **Why:**
  - cro-ux §5: pages longer than 4 screens get one mid-page CTA.
  - Five options at once invite choice paralysis (Hick's law), so the call is the "help me choose" route.
  - The new `cta_id` measures it separately.
- **Effort:** S. **Decision:** no. **Fact:** no.

### 8. Match the header button to the page's primary offer
- **Where:** `/launch-ready` and `/partners` headers.
- **Current:** the header always shows "Book a call" → clarity (`Header.astro:50`). On /launch-ready the hero primary is "Book a Launch-Ready Review", so two different filled buttons sit in the first screen. /partners has the same problem with "Book a partner call".
- **Change:** add a `primary?: 'clarity' | 'review' | 'partner'` prop to `Header`. /launch-ready gets "Book a Review" → `bookHref('review')`. /partners gets "Book a partner call" → `bookHref('partner')`. This mirrors `StickyBookBar`'s existing `kind` prop.
- **Why:** one page, one primary action (cro-ux §1.1). Two filled buttons split clicks and the message.
- **Effort:** S. **Decision:** no. **Fact:** no.

### 9. Home FAQ: answer the offshore and status-quo objections
- **Where:** home FAQ.
- **Current:** six questions (`home.ts:96–103`). None answers "who actually does the work", the top offshore fear (market-voc §6 #7), or the do-nothing alternative ("hire freelancers or in-house"). /launch-ready already has a good "Who will review my app?" answer (`launch-ready.ts:96`).
- **Change:** add these two questions, and move "Who owns the code?" to second place:
  - **"Who will actually work on my product?"** "A senior team led from our engineering hub in Alexandria, Egypt: product, design, engineering and QA. The team that scopes your product builds it and stays after launch. No handoff gaps."
  - **"Why not hire freelancers or build in-house?"** "You can. The difference is one senior team covering product, design, engineering and QA, a fixed price for the Build, and code you own from day one, so you can take it in-house whenever you're ready."
- **Why:** sales-objections ABC framing (acknowledge, then bridge). The FAQ is the self-serve sales call: 61% of buyers prefer no rep (cro-ux S3), and the answers also feed the FAQ schema.
- **Effort:** S. **Decision:** no. **Fact:** no. These are `09` Team plus "one team, no handoff gaps"; the copy avoids "in-house" because `09` lists a freelancer network.

### 10. /work: remove the empty "What clients say" section until quotes exist
- **Where:** `/work`, reviews section.
- **Current:** the H2 "What clients say" holds only the rating chip (`work.ts:22`, `work/index.astro:40–42`; screenshot `d_work.png`). The heading promises voices and shows none.
- **Change:**
  - **Now:** delete the section and move `<ProofChip />` into the /work hero under the intro.
  - **Later:** restore the section with quotes once consent lands.
- **Why:** an unfulfilled heading costs credibility (copy-diagnose: claims must be delivered). Proof should sit next to the claim (cro-ux §9).
- **Effort:** S. **Decision:** no. **Fact:** no for the interim fix; consent for the later version (item 11).

### 11. Chase two consents first: EduLens (Youssef, CEO) and Athkado (Nojoud Alarfaj)
- **Where:** the home case metric, /work, /build proof and the GCC trust line.
- **Current:**
  - D-05/D-06 defaults mean there are zero quotes and zero names on the site.
  - The only metric case is anonymized ("EdTech AI platform, Egypt").
  - TrianglZ shows 14 logos plus 6 Clutch-verified quotes. Robusta shows 42 logos plus 6 named quotes.
- **Change, once consent arrives:**
  - Name EduLens on the case and the home metric. Add the `09` quote "They focused on building solutions that were practical, scalable, and aligned with our users' needs." (Youssef, CEO, EduLens).
  - Add Nojoud's quote "Professional work and great communication." (Athkado, Saudi Arabia) as GCC proof near the /book side column.
- **Why:**
  - Named, attributed quotes are the proof type we can match the field on without competing on volume.
  - EduLens pairs a quote with our only metric, and Athkado gives GCC proof (market-voc §7).
  - 53% of buyers talk to a peer user, so named clients make that check possible.
- **Effort:** M. **Decision:** yes. **Fact:** yes, written consent (D-05). Never publish without it.

### 12. Name the person on /book
- **Where:** `/book` side column (later /about too).
- **Current:** "Who you'll meet: a senior member of our product team." (`book.ts:31`)
- **Change:** "You'll talk to {name}, {role}." Add a real photo if D-17 allows.
- **Why:**
  - "Hidden delivery team" is the top offshore red flag (market-voc §3 gap 5).
  - A named human lowers anxiety at the commitment moment (psychology: liking, authority, reduced uncertainty).
  - Neither TrianglZ nor Robusta names who you meet.
- **Effort:** S. **Decision:** yes (D-16/D-17; current default is company voice). **Fact:** yes, name, role and consent.

### 13. Add a price cue for Build (and Validate)
- **Where:** `/build` §Price, `/validate` §Pricing, home Engagements cards and the FAQ "How does pricing work?" (`home.ts:98`).
- **Current:** model only ("Fixed price", "Fixed fee"), per D-18/D-19.
- **Change:** add one line, "Most Builds are priced between $X and $Y. Your fixed price comes after a free 30-minute clarity call.", and a Validate "From $X, credited to your Build."
- **Why:**
  - Transparent pricing is buyers' top wish for the 4th year running (45%, TrustRadius 2026).
  - Shown prices bring fewer but better leads: 17.5% vs 10.3% to pipeline (HockeyStack, cro-ux S2).
  - No regional studio shows a Build price (TrianglZ: audits only; Robusta: none), so this would stand out in the field.
- **Effort:** S once the numbers exist. **Decision:** yes. **Fact:** yes, the numbers. Never invent them.

### 14. Put proof next to the "What we build" claims
- **Where:** home Capabilities.
- **Current:** four groups of chips with no links and no proof ("Nine service lines. One delivery team.", `home.ts:63–72`). It is the most generic section, a strategy-v2 §9 "generic-agency risk", and sits two screens above the only metric.
- **Change:** add one evidence line plus a link per group, all from `09`/site copy:
  - **AI and data:** "60–90% lower AI cost for an EdTech AI platform" → case study.
  - **Product:** "Feasibility sprints that led to build, pivot or shelve decisions (Saudi Arabia)" → /validate.
  - **Teams and advice:** "A 12-month embedded team for a UK B2B learning platform" → /scale.
  - **Engineering:** "AR furniture e-commerce with AI recommendations (Saudi Arabia)" → /work.
- **Why:** proof should sit next to the claim it supports (cro-ux §9). Specific beats generic (specificity bias). The links also give each section an exit to a converting page.
- **Effort:** S–M. **Decision:** no. **Fact:** no.

### 15. Trim the delivery scene on phones
- **Where:** home hero scene on mobile.
- **Current:** about 900px of the 390px-wide screenshot `m_home_top.png` is the scene, with 3 AI and 3 human rows plus the release card. That pushes proof and the method statement 3+ screens down. About 81% of professional-services visits are mobile (cro-ux S1).
- **Change:** below 30rem, show 2 AI rows and 2 human rows plus the release card, by hiding `:nth-child(n+3)` rows in `DeliveryScene`. Keep the "Example" badge.
- **Why:** 74% of viewing time is in the first two screens (cro-ux S6). The scene should support the CTA, not stand between the CTA and the proof.
- **Effort:** S. **Decision:** no. **Fact:** no.

## Field check (fresh, 2026-10-16) vs `research/`
- **TrianglZ, now:**
  - H1: "Automated Speed. Human Taste. That's TrianglZ."
  - Hero stats: 130+ engineers, 10+ yrs, 100+ products.
  - Primary CTA: "Book a Free Consultation", in a booking modal with service-specific consults.
  - Proof: 14 logos, Clutch 5.0 (27), 6 quotes.
  - Modes M1 MVP 4–8 wks / M2 3–6 mo / M3 ongoing / YOLO discovery 2–4 wks. Price: only the $30K–90K audit range.
  - A 2-minute quiz.
  - **New since `research/`:** "New Agile V2.0 Method" and the "Maestro Method" are explicit on the page, plus a promo for their "Venroll AI" product builder. Their "AI builder" move overlaps our AI-acceleration story. Watch it monthly.
- **Robusta:** unchanged from `research/`.
  - H1: "Building MEA's AI-Native Future". CTA: "Get In Touch" (contact page only).
  - No booking, no prices, no MVP or founder door.
  - 42 logos, 6 named quotes, case studies without metrics.
- **2026 patterns:**
  - 63% of B2B tech buyers use AI in research, but 94% fact-check it. 83% shortlist three or fewer vendors, and 79% knew their winner before research (TrustRadius 2026). The site must be the fact-check source: proof, price model, ownership and who does the work, all stated plainly.
  - Proof above the fold and one repeated primary CTA remain the consensus (Dupple 2026 playbook; directional, unsourced lift figures).
- **Field gaps we can own:**
  - No regional studio offers instant booking with a fixed-price Build and a named person.
  - None has a guarantee. Ours is on the Review.

## Sources
- Site: `docs/strategy-v2.md`, `context/09-proof.md`, `context/11-open-decisions.md`, `context/06-design-system.md`, `research/cro-ux.md`, `research/market-voc.md`
- [TrustRadius 2026 B2B buying disconnect (via Agile Brand Guide)](https://agilebrandguide.com/trustradius-bridging-the-b2b-buying-disconnect-ai-trust-and-go-to-market-strategies-for-2026/)
- [Dupple, B2B CRO 2026 playbook](https://dupple.com/learn/b2b-conversion-rate-optimization)
- [trianglz.com](https://trianglz.com) (fetched 2026-10-16)
- [robustagroup.com](https://robustagroup.com) (fetched 2026-10-16)
