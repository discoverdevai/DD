# DiscoverDev site rebuild: CRO / UX research

Date: 2026-10-15. Scope: full multi-page site. Goal: clarity calls and Launch-Ready Reviews booked through Cal.com (North Star).
Skills applied: cro-optimization, information-architecture, journey-mapping, form-strategy, scheduler-and-booking-design, landing-page-copy, landing-page-generator, ux-strategy, interaction-design, lead-magnet-design, quiz-and-assessment-design, accessibility-audit.
Sources are tagged [S#] and listed at the end. **Gap** marks a claim with no primary data behind it.

---

## 0. Context that drives every decision

- **Low traffic, so no A/B testing at launch.** Reliable tests need thousands of conversions per variant (cro-optimization). Use 5-second tests, Microsoft Clarity session replay (free), and calls with founders. Change one thing at a time and compare month over month.
- **Buyers research on their own first.** 61% of B2B buyers prefer a buying process with no sales rep [S3]. 69% see differences between what the website says and what sellers say [S3]. The site has to answer price, process and proof before a call happens.
- **Most traffic is mobile, and mobile converts worse.** About 81% of professional-services landing-page visits are on mobile, which converts at 8.3% against 11.6% on desktop [S1]. Design for mobile first.
- **Simple copy converts better.** Pages written at a grade 5–7 reading level converted at 12.9%, against 6.6% at grade 8–9 [S1]. Target grade 7 or lower for non-technical founders.

---

## 1. Principles (ranked, each sourced)

1. **One page, one primary action.** Every page has one primary CTA, repeated 2–3 times. Everything else is a text link [landing-page-generator; S6].
2. **Value and the CTA above the fold, short pages after that.** 57% of viewing time is above the fold and 74% is in the first two screens [S6]. The headline, offer, risk reversal and primary CTA must fit in the first mobile viewport.
3. **Show a price cue.** Buyers want rough costs early so they can make a shortlist [S5]. 81% want to find pricing themselves, and 71% are more likely to buy when pricing is shown [S4]. Transparent pricing produced fewer submissions (2.8% vs 4.6%) but leads that converted to pipeline 1.7x more often (17.5% vs 10.3%) [S2]. Use "from $X" or "typically $X–$Y" for the Review, with the fee crediting toward a fix or Build. *Decision for Mohamed: the actual number.*
4. **Proof early and specific.** A rating and the review count go in the hero, and a case card with a metric goes in the first 2–3 screens. Buyers rate challenge-to-solution framing highest (31.8%), then benchmarks and metrics (28.8%) [S23]. Readers of case studies who then submit a form are 18% more likely to become an opportunity [S2]. Upfront disclosure and current, correct content are core trust factors [S30].
5. **Let people book on the spot, without a modal.** Booking right after the form roughly doubled conversion in Chili Piper's data (about 30% to 66.7%) [S13]. Embedded (static) forms beat modal forms, 45.5% vs 26.0% [S9]. Use an inline Cal.com embed on /book and /launch-ready [S14].
6. **Ask 4–6 meaningful booking fields, no more.** Form success follows a bell curve: about 41% with 1–3 required fields, about 51% with 4–6, and 30.6% with 7 or more [S9]. The scheduler skill's five-field rule agrees: each field must route the lead or prepare the call.
7. **State the risk reversal at every CTA.** "No useful findings, no charge" plus "fee credits toward the fix" sits as microcopy under each primary button [landing-page-copy]. **Gap:** no controlled data on guarantees for service businesses. Treat it as a hypothesis and log objections heard on calls.
8. **Plain, specific, founder-to-founder copy.** Name the tools (Lovable, Bolt, v0, Cursor) and the failures (Supabase RLS, Stripe webhooks, exposed secrets). There is a real 2025 example: CVE-2025-48757 (Lovable RLS, CVSS 9.3), with about 170 of 1,645 scanned apps reported exposed [S28]. The reading-level data in [S1] supports plain wording.
9. **A low-commitment path for people not ready to book.** Offer the launch-readiness quiz. Service-provider quizzes average 47.3% completion and 42.2% start-to-lead [S17]. This catches visitors who are not ready for a call.
10. **Sticky header only, kept small and opaque.** Hide it on scroll down and show it on scroll up (300–400 ms). It must never cover the focused element [S7, S8, S19 2.4.11].
11. **Accessibility is part of conversion.** Meet WCAG 2.2 AA: 24×24 px minimum targets, focus never obscured, no forced re-entry of data [S19]. Respect reduced motion [S20].
12. **Build for Arabic from day one.** Use logical CSS properties, `dir` set in markup, and a mirroring policy, so /ar in Q1 2027 is a translation job, not a rebuild [S21, S22].

---

## 2. Robusta Group benchmark (fetched 2026-10-15) [S27]

**What they do**
- Hero: "Building MEA's AI-Native Future", with 2 CTAs ("Get In Touch" and "Explore Our Ecosystem").
- Nav: Group, Capabilities, Industries, About Us, Careers, Get In Touch.
- Proof: 6 stats (500+ projects, 250+ clients, 7+ countries, and others), a large enterprise logo wall (Vodafone, PepsiCo, GM), and 6 named testimonials with company.
- 8 service tiles, 3 in-house products, 2 case studies, a newsroom, and events.
- No process section, no team section, no pricing, no booking tool, no on-page form.
- Contact page: email plus cities (Cairo, Riyadh, Dubai, London, Berlin). No phone, no WhatsApp, no response-time promise.
- No visible Arabic or RTL version.
- /industries: filter tabs, case cards (tags, client, 1–2 line summary, sometimes a metric, "Read Full Story"), and some "coming soon" placeholders.

**Copy**
- Named testimonials attributed with company.
- Case cards that put the metric in the summary ("112% YoY revenue growth").
- Industry filter on Work, once there are 6 or more cases.
- City-level presence listed on the contact page. This is a GCC trust signal.

**Avoid (DiscoverDev can win here)**
- A vague, enterprise-scale hero ("AI-native future"). Use a specific founder problem instead.
- Two competing hero CTAs and a "Get In Touch" dead end. Use one bookable offer with a price cue.
- No process, team or price. These are three gaps a boutique firm can own.
- "Coming soon" placeholders. Ship only finished case studies; keep Rushr out until November.
- Duplicated logo walls, and stat inflation DiscoverDev can't match. Don't compete on scale. Compete on seniority and speed.
- No Arabic version despite KSA/UAE offices. Ship an RTL-ready /ar.

---

## 3. Information architecture and navigation

- **Primary nav (5 + button):** Review · Services ▾ (Validate, Build, Scale, Partners) · Work · Insights · About · **[Book a Review]**. Five items is within the 5–7 limit (information-architecture).
- **Mobile nav:** logo, a "Book" button that stays visible, and a hamburger. The menu opens as a full-height sheet: the 5 items, then the CTA, then email and WhatsApp.
- **Labels:** use founder language. Use "Review", not "Audit Services". Use "Work", not "Portfolio". Avoid "Solutions" and "Resources".
- **URLs:** /launch-ready, /validate, /build, /scale, /partners, /work/[slug], /insights/[pillar], /insights/[slug], /book, /book/confirmed, /launch-check (quiz), /ar/... with the same paths mirrored.
- **Breadcrumbs:** on /work/* and /insights/*, with BreadcrumbList schema.
- **Footer:** Services, Work, Insights, Company (About, Partners, Contact, Privacy, Terms), Clutch link, Texas + Alexandria, email, WhatsApp, and a language switcher (once /ar exists).
- **Consistent help (WCAG 3.2.6):** contact links (email and WhatsApp) stay in the same order and place on every page [S19].

---

## 4. Journey (launch-stuck founder, condensed)

| Stage | Visitor thinks | Touchpoint | Site job | Main risk |
|---|---|---|---|---|
| Trigger | "My Lovable app works, but I'm scared to launch" | Google, AI answer, LinkedIn, referral | Insights article that answers the exact problem | Generic content |
| Evaluate | "Can they fix it, and what will it cost?" | /launch-ready, /work | Scope, price cue, guarantee, proof | No price, so they leave |
| Self-check | "Am I really at risk?" | /launch-check quiz | Segment plus a recommendation | A result with no next step |
| Decide | "Is a call worth 30 minutes?" | /book | Inline Cal.com, 4–6 fields, who they'll meet | Long form or a modal |
| Confirmed | "What happens now?" | /book/confirmed + email | Prep checklist, what to expect | A dead-end thank-you page |
| Call → Review | — | Clarity call | Quote within 24 hours | Slow follow-up |

Moment to design hardest: the confirmation page and the Review report delivery (the peak-end rule from interaction-design).

---

## 5. CTA system

| Tier | Label | Destination | Where |
|---|---|---|---|
| **Primary** | Book a Launch-Ready Review | /book (Review event) | Nav button, home, /launch-ready, case studies, articles about prototype-to-launch |
| **Secondary (service)** | Book a free 30-min clarity call | /book?type=clarity | /validate, /build, /scale, /about |
| **Partner** | Book a partner call | /book?type=partner | /partners only |
| **Low-commitment** | Take the 3-minute launch check | /launch-check | Text link under the hero CTA, middle of articles, insights hub |
| **Utility** | WhatsApp us / Email us | wa.me / mailto | Footer, /book, confirmation page (mainly for GCC visitors) |

**Rules**
- **One filled button per screen.** Secondary actions are outline buttons or text links.
- **The same label everywhere** for the same action. Never use "Get started" or "Contact us".
- **Microcopy under the primary button:** "~5 working days · Fixed fee, credited to your fix · No useful findings, no charge".
- **Microcopy under the clarity call button:** "30 minutes · No pitch · Leave with a next step".
- **Place the CTA in three spots:** hero, after proof or the offer, and the final section. On pages longer than 4 screens, add one mid-page CTA.
- **Sticky behavior:**
  - Desktop: the header keeps the [Book a Review] button.
  - Mobile: a compact bottom bar ("Book a Review") appears after the hero scrolls out of view. It hides on /book, on forms, and while the keyboard is open [S8].
  - It must never cover focus (2.4.11), and anchor targets use `scroll-padding` [S8, S19].
- **Analytics:** every CTA fires `cta_clicked` with `{cta_id, tier, page, position}`. All CTAs carry the UTMs through to Cal.com via metadata [S15].

---

## 6. Page-type blueprints (ordered sections → purpose)

### Home (/)
1. **Header:** gets visitors around fast. Keep it small and opaque.
2. **Hero:** headline (the founder's problem plus the outcome: launch the app you already built, safely), a sub-line on how it works (senior review in about 5 days, then fix or build), the primary CTA plus the risk microcopy, a quiz text link, and "★ 5.0 · 11 reviews (Clutch)". This passes the 5-second clarity test.
3. **Proof strip:** "Clients on 4 continents" plus logos (only with consent). This adds trust right away.
4. **Problem (3 cards):** security holes, payments and data, code that won't scale, in the founder's words. This tells the visitor "they get it".
5. **Offer spotlight (Launch-Ready Review):** what you get, the 5-day timeline, the price cue, the credit toward the fix, the guarantee, and the CTA. This is the front door.
6. **How it works (3–4 steps):** Book → Review (5 days) → Findings call → Fix or Build. This makes the process feel simple.
7. **Choose your path (cards):** Validate (idea), Build (8–12 weeks), Scale (squad), Partners (agencies). Each card has a "who it's for" line. This routes visitors who aren't launch-stuck.
8. **Case highlight:** EduLens, "60–90% AI cost reduction", the quote, and a link to the story. This is specific proof.
9. **Why DiscoverDev:** Discover first · Senior teams that stay · AI that pays for itself, plus "you own all of it, no lock-in" in smaller text. This is the differentiation.
10. **Team preview:** faces, names, roles; "Texas · Alexandria, overlaps US and GCC hours". Real people build trust.
11. **Testimonials:** 3 named quotes (role, country), linked to Clutch. This is third-party proof.
12. **FAQ (5–7 questions):** cost, timeline, who owns the code, what if it needs a rebuild, the tools we work with, time zones. This handles objections.
13. **Final CTA:** repeat the primary CTA, plus "Not ready? Take the 3-minute launch check". This is the closer.
14. **Footer.**

### Offer page (/launch-ready), the money page
1. **Hero:** "Launch-Ready Review". Say who it's for (AI-built or freelancer-built MVPs), give the 5-day, fixed-fee and guarantee microcopy, and the CTA. The visitor should see the match to their situation immediately.
2. **Rating and proof chip.**
3. **"Is this you?":** a checklist of 5–6 symptoms ("Supabase RLS off?", "Stripe in test mode?", "Can't hand the code to a dev?"). This lets the visitor qualify themselves.
4. **What we check:** 5–6 areas (security, data and auth, payments, code quality, scalability and costs, ownership and handover). These make the scope concrete.
5. **What you get:** a redacted sample report screenshot, a prioritized fix list, a fix-or-rebuild verdict, and a fixed quote. This shows the deliverable.
6. **Timeline (Day 0–5):** sets expectations.
7. **Price and terms:** "From $X" (or a range), credited to a fix or Build, invoiced up front or 50/50 (decide). This survives the shortlist stage [S4, S5].
8. **Guarantee block:** "No useful findings, no charge", with one sentence on what counts as useful. This removes risk.
9. **Proof:** the EduLens card, plus relevant reviews. Rushr can be added in November.
10. **Who it's not for:** idea stage goes to Validate; funded teams that need a squad go to Scale. Filtering out poor fits signals honesty.
11. **FAQ (6–8 questions):** access needed (repo read-only), NDA, what stacks, the "we're mid-launch" case, refunds. This handles objections.
12. **Inline Cal.com embed** (Review event) and an "or take the launch check" link. Visitors book without leaving the page.

### Service page (/validate, /build, /scale)
1. **Hero:** outcome, timeline, engagement model, and the clarity call CTA.
2. **Who it's for, and not for:** filters fit.
3. **Outcomes (3):** benefits, not features.
4. **What's included:** the deliverables list.
5. **Process and timeline:** a week-by-week strip. Validate is 1–2 weeks, Build is 8–12 weeks, Scale is monthly.
6. **Pricing model:** "Fixed price after Validate" or "Monthly retainer from $X" (decide). Reduces anxiety about cost.
7. **Team shape:** who is on the squad (devs, QA, PM) and what seniority. Answers the "senior teams that stay" question.
8. **Proof:** a relevant case (Build → Rushr; Scale → Upscend, 12-month embedded, with consent).
9. **Ownership and handover:** full IP, no lock-in, your repo, your accounts. Quiet reassurance.
10. **FAQ.**
11. **Final CTA:** the clarity call. For Build, add "Have a prototype? Start with a Review".

### Partners page (/partners), for software houses and agencies
1. **Hero:** "Your extra senior team, under your brand". Two models: white-label and staff augmentation. CTA: Book a partner call.
2. **Why partners use us:** capacity, seniority, GMT+2 overlap, Arabic and English.
3. **Engagement models compared:** a table of white-label vs staff aug (who manages, billing, minimum term).
4. **How we work inside your process:** your tools, your PM, NDAs, no client contact unless allowed, a non-solicit clause.
5. **Vetting and quality:** seniority, QA, code review standards.
6. **Proof:** Amstadd (UK white-label partner, with consent), a partner quote, and the rate card cue ("from $X/month per engineer"; decide).
7. **FAQ:** IP assignment, replacement guarantee, ramp-up time, time zones.
8. **CTA:** partner call (a separate Cal event and routing).

### Case study (/work/[slug])
1. **Hero:** client, one-line outcome, headline metric. Lead with the result.
2. **Snapshot sidebar** (top on mobile): industry, region, timeline, team, services, stack. Makes the page scannable.
3. **Challenge:** in the client's language. Buyers rank challenge-to-solution framing first [S23].
4. **Approach:** 2–4 key decisions and why (e.g. caption-first ingestion, model routing). Shows how DiscoverDev thinks.
5. **What we built:** screens, architecture sketch. Concrete evidence.
6. **Results:** numbers with baseline and timeframe. Benchmarks and metrics are buyers' second priority [S23].
7. **Client quote:** name, role, photo (with consent). Third-party voice.
8. **What's next / ongoing work:** the "teams that stay" proof.
9. **CTA:** matched to the case. EduLens leads to "AI costs too high? Book a clarity call". Rushr leads to "Building a marketplace? Book a clarity call".
10. **Related cases (2).**
- Rule: publish no case without a metric or client consent. No placeholders.

### About (/about)
1. **Founder story:** why DiscoverDev exists, founder-to-founder. Shows the human behind the firm.
2. **What we believe:** the 3 pillars, plus "we build the right thing", with one example each.
3. **Team:** real photos, names, roles, years of experience, LinkedIn. Real people build credibility; Robusta has no team section.
4. **Where we are:** Texas presence and the Alexandria hub, plus a time-overlap graphic (US mornings, GCC afternoons). Answers the US and GCC "are you reachable?" question.
5. **Proof numbers:** 5.0 from 11 reviews, 4 continents, client list (with consent). Use only true, verifiable numbers.
6. **How we work:** communication cadence, tools, ownership. Sets expectations.
7. **CTA:** clarity call.

### Book (/book)
1. **Minimal header:** logo and a back link. Fewer exits.
2. **H1 and choice:** "Book your call". Two cards or tabs: **Launch-Ready Review intro** (default) and **Clarity call**. Partner calls arrive through ?type=partner.
3. **Inline Cal.com embed:** month view on desktop, column view on mobile. Booking happens on this page [S9, S13, S16].
4. **What happens on the call (3 bullets) and who you'll meet** (photo and name). Reduces anxiety.
5. **Risk reversal and terms:** the guarantee line, no pitch, NDA on request.
6. **Trust strip:** rating, 2 short quotes.
7. **Alternatives:** email and WhatsApp, with "replies within 1 business day" (only if true). Serves GCC visitors who prefer WhatsApp [S24, S25].
8. **Privacy line.**

### Book confirmation (/book/confirmed)
1. **Confirmation:** "You're booked", with the time in the visitor's time zone and an add-to-calendar link.
2. **Before the call:** a prep checklist (app URL, repo access read-only optional, the 3 biggest worries).
3. **What happens next:** call → quote within X hours → Review starts.
4. **Optional reading:** the EduLens case and one pillar article. Gives a next step instead of a dead end.
5. **Reschedule link and WhatsApp.**

### Insights article (/insights/[slug])
1. **Breadcrumb, H1, author** (photo, role, credentials), published and updated dates. Supports E-E-A-T and trust [S30].
2. **Key takeaways (3–5 bullets):** for skimmers and AI answer engines.
3. **Table of contents** (for pages longer than 1,200 words).
4. **Body:** short sections, code and screens where useful.
5. **In-line CTA after the "problem" section:** the launch check quiz. This is the main conversion for top-of-funnel readers.
6. **End CTA:** a Review card (for prototype-to-launch topics) or a clarity call card (others).
7. **Related articles (3) and a link to the pillar.**
8. Fire `article_read` at 75% scroll or after 60 seconds of active reading.

### Insights hub (/insights)
1. **H1 and a one-line promise:** "Taking AI-built apps to production". Says what the hub covers.
2. **Featured pillar:** /insights/ai-app-to-production. Anchors the topic.
3. **Topic filters (5–7 categories):** security, Supabase, payments, fix vs rebuild, ownership, AI costs. Topics must not overlap.
4. **Article cards:** title, 1-line summary, read time, updated date.
5. **Quiz banner** after the first row of cards.
6. **Final CTA:** Review.

---

## 7. Booking flow spec (Cal.com)

- **Embed type:** **inline** on /book and /launch-ready. Use the element-click popup only where inline is impossible (e.g. a mobile sticky bar opens /book instead; no popup) [S14]. Modal forms underperform [S9].
- **Event types:**
  - `review-intro` (30 min, free). This is the scoping call for the paid Review.
  - `clarity-call` (30 min).
  - `partner-call` (30 min).
  - Optional: a Cal.com routing form in front of /book when unsure, but test it as a separate step. Each extra screen costs completions [S9].
- **Fields (4–6 total, including Cal defaults):**

  | # | Field | Type | Why |
  |---|---|---|---|
  | 1 | Name | text (prefilled) | Cal default |
  | 2 | Email | email (prefilled) | Cal default |
  | 3 | App URL or "not live yet" | url/text, optional | Prep |
  | 4 | Built with | select: Lovable / Bolt / v0 / Cursor / Freelancer or agency / Other | Prep and segmentation |
  | 5 | Biggest blocker | select: Security / Payments / Scaling / Code quality / Not sure | Prep |
  | 6 | Target launch | select: <2 wks / 1 month / 1–3 months / Exploring | Urgency and priority |

  - **Do not ask** for phone, budget, company size or a free-text box. Region comes from the time zone. Budget is handled on the call.
- **Prefill and metadata:**
  - Pass `name` and `email` (from the quiz), plus `metadata[utm_source|medium|campaign]`, `metadata[quiz_segment]` and `metadata[page]`.
  - These show up in the webhook payload [S15, S16].
  - Never ask again for data the quiz already collected (WCAG 3.3.7) [S19].
- **Events → analytics:**
  - `booking_started` fires on `bookerReady` and the first slot click.
  - `booking_completed` fires on `bookingSuccessfulV2` [S16].
  - Also fire on the /book/confirmed page view as a backup.
- **Confirmation:**
  - Redirect to /book/confirmed (verify the setting in Cal event settings).
  - Send a confirmation email immediately: time, agenda, prep checklist, reschedule link.
  - Prep automation: the booking answers go into the calendar invite description, so Mohamed starts the call informed (scheduler skill).
- **Reminders:** 24 hours and 1 hour before (scheduler skill). Use email for $0. WhatsApp reminders only if a free Cal.com workflow allows it (verify).
- **No-shows:** one polite rebooking email after 1 hour, one more after 3 days, then stop ("respect the no").
- **Display:**
  - Show the visitor's own time zone automatically.
  - Offer slots that overlap US mornings and GCC afternoons and evenings.
  - Use month view on desktop and column view on mobile (`layout`) [S16].
  - Match the brand color via theme or `ui` settings.
- **Accessibility:** check the Cal.com iframe for keyboard flow and focus; check it has a `title`. Provide the email and WhatsApp fallback link for anyone who can't use the widget.
- **Targets:** see section 12. Measure booked to held (show rate) and held to Review purchased; booking rate alone is not enough.

---

## 8. Quiz / lead magnet spec: "Is your AI-built app launch-ready?" (/launch-check)

- **Why a quiz:** it categorizes a real decision (launch, fix, review, rebuild), and each category maps to a different DiscoverDev offer (quiz-and-assessment-design). It passes the "would they pay for this" test if the result names specific risks.
- **Format:** 10 single-select questions with weighted scoring across 4 dimensions. Interact's benchmark is about 13 questions for standard quizzes and about 7 for branching ones [S18]. Use a progress bar. One question per screen on mobile.
- **Dimensions and example questions (no leading wording):**
  - **Context:** What did you build it with? How many real users today? When do you need to launch?
  - **Security and data:** Is row-level security enabled on every table (Supabase/Firebase rules)? [S28] Are any API keys in front-end code? Who can sign up, and is email verified?
  - **Payments:** Are payments live, and are webhooks verified server-side?
  - **Code and ownership:** Is the code in a repo and accounts you own? Could another developer pick it up in a day?
  - **Operations:** Are there backups, error monitoring, or a staging environment?
- **Result segments (4) and matching recommendations:**

  | Segment | Meaning | Recommendation |
  |---|---|---|
  | Launch-ready, polish only | Low risk | Free checklist PDF and pillar article; soft clarity call |
  | Fix first | 1–2 high-risk gaps | Launch-Ready Review (primary) |
  | High risk, don't launch yet | Several critical gaps (e.g. RLS off plus keys exposed) | Review, marked urgent; clarity call same week |
  | Rebuild candidate | Ownership or architecture blockers | Clarity call, then the Validate or Build path |

- **Lead capture:** show the result for free. The email unlocks a personalized PDF report (each "no" answer explained plus a fix) and a 4-email sequence. This is the honest pattern (B) from quiz-and-assessment-design. Expect a lower opt-in rate than gating the result, but higher lead quality. Service-provider benchmark: 47.3% completion, 42.2% start-to-lead [S17].
- **Result page:**
  - Segment name and a 1-line meaning.
  - Score per dimension, as bars with text labels (not color only).
  - The top 3 risks found.
  - The recommendation and its CTA.
  - "Book a Review" with Cal.com prefilled with name, email and `quiz_segment` [S15].
- **Email sequence (lead-magnet-design):**
  - Day 0: the report.
  - Day 2: a "fix it yourself" guide for the top risk.
  - Day 5: the EduLens or Rushr story.
  - Day 9: the Review offer and guarantee.
  - Then monthly insights only if they opted in.
- **Build:** a static Astro island with scoring in JS, no paid tool. Send the email through the existing provider (decide). Add a honeypot and Turnstile to the email step.
- **Tracking:** `quiz_started`, `quiz_q_answered{n}`, `quiz_completed{segment}`, `quiz_lead{segment}`. Track drop-off per question, and Reviews booked per segment (section 12 of the quiz skill).

---

## 9. Trust and proof rules

- **Only verifiable proof:** 5.0 from 11 reviews with a link to Clutch. No inflated stats. No logos or names without written consent (per the brief).
- **Every testimonial has attribution:** name, role, company or country, and a photo if allowed. Prefer outcome quotes over "great team".
- **Proof sits next to the claim it supports:** the EduLens metric goes next to "AI that pays for itself", and Clutch reviews go next to the CTA.
- **Case study minimum:** challenge, approach, results with numbers and timeframe, a named quote. Otherwise it doesn't go live [S23].
- **Real team faces,** not stock photos. Name the founder on /book ("You'll talk to Mohamed").
- **Upfront disclosure:** price cue, timeline, what's included, who owns the IP [S30, S4].
- **Freshness:** show "Updated" dates on articles and the year on case studies [S30].
- **Robusta contrast:** they win on scale (logo walls). DiscoverDev wins on specificity, seniority, transparency and booking speed.

**US visitors:**
- Clutch reviews.
- A US presence (Texas), with a US-style contract, NDA and IP assignment mentioned.
- A fixed price.
- A response-time promise.
- Calendar slots in US hours.

**GCC (KSA, UAE, KW) visitors:**
- Name regional clients (Athkado, Arheb; consent needed).
- An "Arabic-speaking team" line now, and /ar later.
- WhatsApp as a contact path. 85% of UAE residents want businesses to offer WhatsApp; 87% prefer a human over a bot [S24].
- Human contact: a named person, not a chatbot.
- Show the actual locations and don't claim GCC offices you don't have.
- Trust signals placed above the fold helped in UAE examples; this is directional only, not controlled tests [S25].
- **Gap:** no primary research on GCC B2B buyer trust. Validate it through calls.

**Video:** optional. A 60–90 second founder intro on /about and /book could help the human connection. **Gap:** the evidence for video lift is vendor-biased and self-reported [S26]. Don't autoplay. Add captions, a transcript and a static poster image. Keep it off the critical rendering path.

---

## 10. Mobile and RTL rules

**Mobile**
- Design at 375 px first. The hero headline, sub-line, CTA and risk microcopy all fit in the first viewport (landing-page-generator).
- Body text at least 16 px. Line length 45–75 characters.
- Tap targets ≥44×44 px (above the WCAG 2.5.8 minimum of 24×24) [S19].
- Single-column layouts. The case snapshot sits above the story.
- Bottom sticky bar: one CTA only, hidden on /book, on forms and when the keyboard is open [S8].
- Performance (web.dev Core Web Vitals, from prior knowledge; the source page was not re-fetched): LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1.
  - Reserve space for the Cal iframe.
  - Lazy-load the embed below the fold, but preload it on /book.
  - No hero video. Use AVIF/WebP. Self-host Manrope, Rubik and IBM Plex Sans Arabic as subset fonts with `font-display: swap`.
- No carousels for proof. Use a static list of 3 quotes.

**RTL-ready (build now, ship /ar Q1 2027)**
- Set `<html lang="ar" dir="rtl">` in markup, never via CSS. Don't infer direction from language [S21].
- Use only CSS logical properties: `margin-inline-start`, `padding-inline`, `inset-inline-end`, `text-align: start`. No `left`/`right` in components.
- Use `dir="auto"` on form inputs and user-generated text. Wrap mixed Latin text (e.g. "Supabase", "Lovable") in `<bdi>` [S21].
- **Mirror:** layout, nav order, arrows (next/back), progress bars, step sequences, pagination, sliders [S22].
- **Don't mirror:** logos, media controls, check marks, numbers, phone numbers, URLs, emails, code blocks, charts, images [S22]. The `$`/`// .config` code motif stays LTR inside `<bdi dir="ltr">`.
- Typography: IBM Plex Sans Arabic for Arabic. Line-height +10–20% versus Latin. Never letter-space Arabic. Don't use italics for Arabic emphasis.
- Use `hreflang` pairs (en/ar) plus x-default. The language switcher links to the equivalent page, not the home page.
- Cal.com embed: check its RTL and locale support before launching /ar. The fallback is the EN widget with Arabic surrounding copy.
- Numbers: use Western Arabic numerals (0–9) for prices and metrics in the GCC B2B context. Confirm with a native reviewer.

---

## 11. WCAG 2.2 AA checklist (marketing-site must-haves)

**Perceivable**
- [ ] Text contrast ≥4.5:1 (large text ≥3:1). UI components and focus rings ≥3:1. Computed ratios: #858585 grey on #FEFEFE is 3.66:1, which **fails** for body text (use it only for ≥18.66 px bold or ≥24 px text, or darken it). #1240BE on #FEFEFE is 8.32:1 (passes). #FEFEFE on #032993 is 11.95:1 (passes).
- [ ] Alt text on meaningful images; `alt=""` on decorative ones. Charts on case studies get a text summary.
- [ ] Video has captions and a transcript. Nothing autoplays with sound.
- [ ] Semantic landmarks (`header`, `nav`, `main`, `footer`). One H1. Headings in order.
- [ ] Color is never the only signal (quiz score bars carry text labels).
- [ ] Reflow at 320 px and 200% zoom with no horizontal scroll.

**Operable**
- [ ] A skip link to `main`. Everything works by keyboard. No traps, including the Cal.com iframe and the mobile menu.
- [ ] A visible focus indicator everywhere.
- [ ] **2.4.11 Focus Not Obscured (AA):** sticky header and bottom bar never fully hide the focused element. Use `scroll-padding-top` [S19].
- [ ] **2.5.8 Target Size (AA):** ≥24×24 px or enough spacing [S19].
- [ ] **2.5.7 Dragging (AA):** no drag-only controls (sliders in the quiz must have tap alternatives) [S19].
- [ ] No content flashes more than 3 times per second. Any auto-moving content (logo marquee) has pause/stop (2.2.2).
- [ ] Descriptive page titles and link text ("Read the EduLens case study", not "Read more").
- [ ] **Reduced motion:** wrap all non-essential animation in `@media (prefers-reduced-motion: no-preference)` [S20].

**Understandable**
- [ ] `lang` on `<html>` (and on inline foreign phrases).
- [ ] **3.2.6 Consistent Help (A):** contact links in the same place on every page [S19].
- [ ] **3.3.7 Redundant Entry (A):** don't re-ask quiz data in booking; use prefill [S19].
- [ ] **3.3.8 Accessible Authentication (AA):** no cognitive puzzles. Use Turnstile, not image CAPTCHAs [S19].
- [ ] Forms have visible labels above fields, not placeholder-only [S11].
- [ ] Validate on blur and clear errors on keystroke [S10].
- [ ] Errors are specific and linked with `aria-describedby` and `aria-invalid`.

**Robust**
- [ ] Name, role and value are exposed for custom widgets (menu, FAQ accordion using `<details>`/`<summary>` or `button aria-expanded`, quiz options as a radio group).
- [ ] Status messages are announced (quiz result, form success) with `role="status"`.

**Testing**
- [ ] Automated scan with axe or Lighthouse on all templates.
- [ ] Keyboard pass on home, /launch-ready, /book, the quiz and an article.
- [ ] Screen reader pass with VoiceOver + Safari and NVDA + Firefox.
- [ ] RTL screen reader spot-check before /ar.

---

## 12. Benchmarks (for targets and sanity checks)

| Metric | Benchmark | Source | Use for DiscoverDev |
|---|---|---|---|
| Landing page CVR, commercial and professional services (median) | 6.1% (all-industry 6.6%) | [S1] | /launch-ready visitor → CTA click target ≥6% |
| CVR by device (professional services) | Desktop 11.6% · Mobile 8.3% · about 81% of visits on mobile | [S1] | Watch the mobile gap |
| CVR by reading level | Grade 5–7: 12.9% · Grade 8–9: 6.6% | [S1] | Copy at grade 7 or lower |
| Recommended page length | About 500 words (275–745 best band) | [S1] | Offer page body copy |
| B2B SaaS site-wide form CVR per unique visitor | 1.1% | [S2] | Site-wide sanity floor |
| Demo page CVR | 5.5% (bounce 70%) | [S2] | /book page target |
| Transparent vs hidden pricing | Form CVR 2.8% vs 4.6%; submit → pipeline 17.5% vs 10.3% | [S2] | Expect fewer, better calls with a price cue |
| Form fields vs success | 1–3: ~41% · 4–6: ~51% · 7+: 30.6%; static 45.5% vs modal 26.0% | [S9] | 4–6 fields, inline |
| Form-to-meeting (mid-market) | 36% volume-weighted; median company 42 per 100 (IQR 26–58) | [S12] | Quiz lead → booked |
| Instant scheduling after form | about 30% → 66.7% booked | [S13] (Chili Piper, vendor data) | Inline Cal.com, no "we'll get back to you" |
| Quiz completion, service providers | 47.3% (portfolio average 65%) | [S17] | /launch-check |
| Quiz start → lead, service providers | 42.2% (portfolio 40.1%) | [S17] | /launch-check |
| Buyers preferring a rep-free buying process | 61% | [S3] | Self-serve price and process content |
| Buyers more likely to buy when pricing is shown | 71% | [S4] (2022) | Price cue |

- **Gap:** no published benchmark for visitor → booked call on boutique dev-shop sites, and no show-rate data from a primary study [S13].
- **Set a baseline in the first 60 days.** Proposed working targets (assumptions, not benchmarks): visitor → `cta_clicked` 4–6%, `booking_started` → `booking_completed` ≥35%, show rate ≥75%.

---

## 13. Open decisions for Mohamed
1. The Review price cue: "from $X" or a range, plus the payment terms.
2. Whether booking a "Review" is a free scoping call (recommended) or a paid booking.
3. Retainer and partner rate cues: show them or not.
4. WhatsApp number and a response-time promise you can keep.
5. Consent list for client names, logos and quotes (Athkado, Arheb, Upscend, Amstadd, Nile Support, Pyramakerz).
6. The email provider for the quiz report and sequence ($0 tier).

---

## Sources
- [S1] Unbounce, Conversion Benchmark Report, Commercial & Professional Services (2024 data): https://unbounce.com/conversion-benchmark-report/professional-services-conversion-rate/
- [S2] HockeyStack Labs, "The State of Pricing, Demo, and Case Study Pages" (Dec 15, 2025; 80 B2B SaaS companies, 31M visitors): https://hockeystack.com/lab-blog-posts/state-of-pricing-demo-case-study-pages
- [S3] Gartner, "61% of B2B Buyers Prefer a Rep-Free Buying Experience" (Jun 25, 2025; n=632): https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience
- [S4] TrustRadius, "Tech buyers demand honest and up-front pricing info" (Jun 2022): https://solutions.trustradius.com/vendor-blog/tech-buyers-demand-honest-and-up-front-pricing-info/
- [S5] Nielsen Norman Group, "Show Prices for Common Scenarios" (2006; principle still applies): https://www.nngroup.com/articles/show-prices-for-common-scenarios/
- [S6] NN/g, "Scrolling and Attention" (Apr 2018): https://www.nngroup.com/articles/scrolling-and-attention/
- [S7] NN/g, "Sticky Headers: 5 Ways to Make Them Better" (Apr 2021): https://www.nngroup.com/articles/sticky-headers/
- [S8] Smashing Magazine, "Designing Sticky Menus: UX Guidelines" (May 2023): https://www.smashingmagazine.com/2023/05/sticky-menus-ux-guidelines/
- [S9] Factors.ai Labs, "What's the right number of demo form fields" (Sep 30, 2025; 50K+ sessions): https://www.factors.ai/labs/whats-the-right-number-of-demo-form-fields
- [S10] Baymard Institute, "Usability Testing of Inline Form Validation" (Jan 9, 2024): https://baymard.com/research-articles/inline-form-validation
- [S11] Baymard, "Placement of form field labels" guideline (preview only; full text behind a paywall): https://baymard.com/guidelines/685-placement-of-form-field-labels
- [S12] Chili Piper, 2026 Web Conversion Benchmark (Mid-Market; 2.93M form submissions, Jul 2025–Jun 2026): https://www.chilipiper.com/reports/mid-market-conversion-benchmark
- [S13] Ainora, "B2B Meeting Booking Rate: Every Study" (2026; compiles Chili Piper 2025, RevenueHero, Default): https://ainora.lt/blog/b2b-meeting-booking-rate-every-study-2026
- [S14] Cal.com Docs, "Adding embed to your webpage": https://cal.com/docs/core-features/embed/adding-embed-to-your-webpage
- [S15] Cal.com Help, "Prefill booking form in embed": https://cal.com/help/embedding/prefill-booking-form-embed.md
- [S16] Cal.com React embed reference (events `bookingSuccessfulV2` and `bookerReady`; `layout` config), via the Mintlify mirror: https://mintlify.wiki/calcom/cal.com/embed/embed-react
- [S17] Interact, Quiz Conversion Rate Report (Sep 8, 2026): https://www.tryinteract.com/blog/quiz-conversion-rate-report/
- [S18] Interact Help, "How many questions should my quiz have": https://help.tryinteract.com/en/articles/10752954-how-many-questions-should-my-quiz-have-to-maximize-conversions
- [S19] W3C WAI, "What's New in WCAG 2.2": https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- [S20] W3C, Technique C39 "Using the CSS prefers-reduced-motion query": https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html
- [S21] W3C Internationalization, "Structural markup and right-to-left text in HTML": https://www.w3.org/International/questions/qa-html-dir.en.html
- [S22] Wikimedia Codex, "Bidirectionality" style guide: https://doc.wikimedia.org/codex/main/style-guide/bidirectionality.html
- [S23] BlueWhale Research, "Are Your Case Studies Effective?" (Jun 9, 2025; 2025 Tech Buyer Preferences Survey): https://bluewhaleresearch.com/blog/are-your-case-studies-effective/
- [S24] Zbooni / YouGov via Communicate Online (Feb 2024; n=1,000 UAE): https://communicateonline.me/category/industry-insights/post-details/85-percent-of-uae-residents-want-businesses-to-use-whatsapp
- [S25] The Impulse Digital, "CRO for UAE Websites" (agency blog; single examples, lift ranges unsourced, directional only): https://www.theimpulsedigital.com/ae/blog/?p=11893
- [S26] Wyzowl, "The Explainer Video Effect" (Jan 2026; vendor-biased, self-reported): https://www.wyzowl.com/explainer-video-conversion-rate
- [S27] Robusta Group: homepage https://www.robustagroup.com/, /industries, /contact (all fetched 2026-10-15)
- [S28] CVE-2025-48757 (Lovable RLS, CVSS 9.3, May 30, 2025): https://cvemon.intruder.io/cves/CVE-2025-48757
- [S29] Google Search Central, "Changes to HowTo and FAQ rich results" (Aug 2023): https://developers.google.com/search/blog/2023/08/howto-faq-changes. The body was not readable when fetched. From prior knowledge, FAQ rich results are now limited to authoritative government and health sites, so mark up FAQs for clarity and AI answers, not for rich-result clicks.
- [S30] NN/g, "Trustworthiness in Web Design: 4 Credibility Factors": https://nngroup.com/articles/trustworthy-design/. The fetch was rate-limited (HTTP 429). The factors are cited from prior knowledge: design quality, upfront disclosure, comprehensive and current content, connection to the rest of the web.

**Not obtained:**
- The NN/g B2B Website Usability report (3rd ed.) is paywalled; only its scope was visible.
- Baymard's full label guideline is paywalled.
- No primary GCC B2B trust study was found.
- No controlled study on service guarantees was found.
- CXL has no fetched source here.
