# DiscoverDev website copy deck (fresh, Oct 2026)

Status: draft for review · Written 2026-10-15 · Go-live target Nov 24, 2026
Sources: `context/11-open-decisions.md` §0 (locked decisions), `context/09-proof.md` (only source of facts, reviews, history; extract of the master source doc), `research/market-voc.md`, `research/cro-ux.md`, `research/seo-aeo.md`. No text reused from "Website Copy v1".

---

## 0. Read this first

### 0.1 Voice rules

1. Founder to founder. Write to one person who built something and is stuck. Use "you". Use "we" only when saying what we do.
2. Plain and specific. Name the tools (Lovable, Bolt, v0, Cursor), the failure (data rules off, keys in the browser, payments not checked) and the number (5 working days, 8–12 weeks).
3. Short sentences. One idea each. Target grade 7 reading level.
4. No hype. No "revolutionary", "seamless", "cutting-edge", "world-class", "empower". No exclamation marks.
5. No em-dashes in headlines, buttons, cards or microcopy. Use a full stop or a colon. En-dash only for ranges (8–12).
6. Cost is never the hook. Price and IP ownership appear as quiet reassurance near CTAs and in FAQs, never in a headline.
7. Proof sits next to the claim it supports. Every number traces to `context/09-proof.md`.
8. Same label for the same action everywhere (see 0.3). Never "Get started", "Contact us", "Learn more", "Submit".
9. Translation-friendly: no idioms, puns or sports metaphors. Keep "ship" (core idea) but translators may render it as "launch". No text inside images. Keep tool names (Lovable, Supabase, Stripe) in Latin script, wrapped in `<bdi>` on /ar.
10. The `$` and `// .config` code motif is decoration only. Never carry meaning in it.

### 0.2 Message hierarchy (strategy v2, 2026-10-16; full reasoning in `docs/strategy-v2.md`)

DiscoverDev is sold as a product and engineering company that builds the DiscoverDev Way (renamed from Agile v2, Oct 16). The Launch-Ready Review is one service ("Already built something?"), no longer the front door.

1. **Core idea (repeat on every page, verbatim):** "Most teams just build what you ask for. We help you build the right thing, then ship it fast, and you own all of it."
2. **Headline (home H1, Mohamed Oct 16):** Turn your idea into a live product in weeks. (Jobs to be Done + "Now you can" test; 09: Build = live in 8–12 weeks.) "Build the right thing, then ship it fast" stays as the promise in the core idea and the meta.
3. **Method (the sell):** The DiscoverDev Way. Discover first. Build with AI. Seniors sign off. A person is responsible for every line that reaches your users.
4. **Lifecycle:** Discover → Plan → Build → Ship & Stay. One team, no handoff gaps.
5. **Engagements:** Validate (1–2 weeks) · Build (8–12 weeks, fixed price) · Scale (dedicated squad). Other ways in: Launch-Ready Review (already built something) · Partners (software houses).
6. **Three pillars:** Product-first · Senior teams, AI-accelerated · We stay, you own it.
7. **Quiet reassurance (never a headline):** you own everything (full IP, no lock-in, clear contract from day one) · fixed price on Build · Arabic and English · presence in Texas, USA.
8. **Proof:** 5.0 across 11 reviews · clients on 4 continents · AI in production across multiple clients · 60–90% lower AI cost (EdTech AI platform, Egypt) · four clients expanded scope with us.

### 0.3 CTA system (fixed strings)

| Tier | Button label | Microcopy under button | Destination |
|---|---|---|---|
| Primary | Book a Launch-Ready Review | About 5 working days · From $1,490, credited to your fix · No useful findings, no charge | /book?type=review |
| Primary (short: nav, mobile bar) | Book a Review | (none in nav) · mobile bar: No useful findings, no charge | /book?type=review |
| Secondary | Book a free clarity call | 30 minutes · No pitch · Leave with a next step | /book?type=clarity |
| Partner | Book a partner call | 30 minutes · NDA on request [VERIFY: V5] | /book?type=partner |
| Low commitment (text link) | Take the 3-minute launch check | 10 questions · Instant result · No email needed to see it | /launch-check |
| Utility | WhatsApp us · Email us | Replies within 1 business day [VERIFY: V7] | wa.me/[WHATSAPP] · mailto:hello@discoverdev.ai |

**Strategy v2 (2026-10-16):** the site-wide primary is now **Book a free clarity call** (microcopy "30 minutes · No pitch · Leave with a next step"). Short form for the nav and mobile bar: **Book a call** → /book?type=clarity; mobile bar line: "30 minutes · No pitch". "Book a Launch-Ready Review" is the primary only on /launch-ready, quiz results and prototype-to-launch articles. New low-commitment link on the home hero: **See how we work** → #agile-v2.

Rules: one filled button per screen. All CTAs fire `cta_clicked` (properties per `07-tech-spec.md` §9.3) and carry UTMs to Cal.com.
Booking a Review starts with a free 30-minute scoping call; the paid Review starts only after you accept the quote [VERIFY: V19]. Say this on /book and /launch-ready so no one is surprised.

### 0.4 Proof bank (use only these, in this wording)

| Proof | Approved wording | Status | Use on |
|---|---|---|---|
| Rating | "5.0 across 11 reviews" + "(Clutch, Upwork, Fiverr and direct)" + link "Read our reviews on Clutch" → https://clutch.co/profile/discoverdev | Confirmed. Do not write "11 reviews on Clutch". No star markup. | Hero chips, footer, /book, /about |
| Reach | "Clients on 4 continents" | Confirmed | Home, /about |
| AI in production | "AI in production across multiple clients" | Confirmed | Home, /about |
| EduLens | "60–90% lower AI cost across three AI agents" | Confirmed metric · baseline and period [VERIFY: V12] · name [CONSENT: EduLens] | Home, /launch-ready, /scale, /work |
| EduLens quote | "They focused on building solutions that were practical, scalable, and aligned with our users' needs." Youssef, CEO, EduLens | [CONSENT: EduLens quote] | Home, /work/edulens |
| Rushr | "US home-services marketplace, built from zero in 16 weeks: dispatch, Stripe Connect escrow, messaging, admin" | Confirmed facts · metrics [METRIC] · name [CONSENT: Rushr] · publish in Nov | /build, /work |
| Upscend | "UK B2B learning platform: 12-month embedded team owning roadmap, backlog and sprints" | [CONSENT: Upscend] | /scale, /about |
| Pyramakerz | "Egypt EdTech, 20,000+ students: data, ML and automation" | [CONSENT: Pyramakerz] · case study is a stub, do not publish one | /scale (one line) |
| Arheb | "Embedded data and ML team for the first Saudi smart ride-sharing platform" | [CONSENT: Arheb] | /scale |
| Athkado | "KSA furniture e-commerce: discovery, design, build, AI recommendations, AR" + "rapid feasibility sprints: build, pivot or shelve decisions" | [CONSENT: Athkado] | /validate, /build |
| Amstadd | "UK software house partner: white-label websites and mobile apps" | [CONSENT: Amstadd] | /partners |
| Jumlaty | "ML engineer placed for 3 months, restaurant procurement" | [CONSENT: Jumlaty] | /partners |
| Retention | "Athkado, Upscend, Arheb and Pyramakerz expanded scope with us" | [CONSENT: all four] | /about, /scale |
| Quote: Roberto | "Perfect timing, always available for any questions or concerns, great professionalism. The job was done perfectly, and it was on point, giving us the info we needed. 100% recommendable." Roberto, Fantacalcio, Italy | [CONSENT: Fantacalcio] | /validate |
| Quote: Nojoud | "Professional work and great communication." Nojoud Alarfaj, Athkado, Saudi Arabia | [CONSENT: Athkado] | Home, /build |
| Quote: Nile Support | "The quality of their work is top-notch." CEO, Nile Support, USA | [CONSENT: Nile Support] | Home, /launch-ready, /partners |
| Quote: Andrei | "I will become a regular customer going forward now." Andrei Chejneanu, entrepreneur, UK | [CONSENT: Andrei] | /validate, /book |
| Quote: Farah | "Thank you for going above and beyond." Farah Alkhaldi, consulting firm, Kuwait | [CONSENT: Farah] | /validate |
| Method | "AI does the heavy lifting. Senior engineers own the quality." · "A person is responsible for every line that reaches your users." · "One team, no handoff gaps." · Discover → Plan → Build → Ship & Stay · "Results every week" | Confirmed | Home, /build, /about |
| Ownership | "You own everything: full IP, no lock-in, clear contract from day one." | Confirmed | Everywhere, small |

Not used on purpose: Michelle Boehm and Lea Nechitailo quotes (they contain exclamation marks; quotes are never edited). "10+ countries", "up to ~60% cost savings", "co-authored academic AI papers" (all marked verify in master). NurViD-MAE metrics (venue and consent unverified). CTC (clinician consent needed). Any client logo until consent is on file.

### 0.5 Placeholders and claims needing verification

Tag format in the copy: `[VERIFY: Vn]`, `[PRICE: Pn]`, `[CONSENT: name]`, `[METRIC]`, `[TEAM]`, `[WHATSAPP]`, `[ASSET]`, `[DECISION: Dn]`.

| ID | What to confirm before publishing | Pages |
|---|---|---|
| V1 | Founding year 2024 | /about |
| V2 | Review scope: the 6 areas in "What we check" | /launch-ready, home |
| V3 | Review deliverables (findings call, written report, ranked fix list, keep/fix/replace verdict, fixed quote) and the Day 0–5 timeline | /launch-ready, home, /book/confirmed |
| V4 | Exact definition of "useful finding" behind the guarantee | /launch-ready |
| V5 | Read-only repo access is enough; NDA signed before code access when asked | /launch-ready, /partners, /book |
| V6 | Client code lives in the client's own repo and accounts from day one; handover docs at each stage | Home, /build, /scale |
| V7 | Reply-time promise (draft: 1 business day) and quote turnaround after the scoping call (draft: within [X] hours) | Global, /book, /book/confirmed |
| V8 | Call slots offered in US and Gulf hours | Home FAQ, /book, /about |
| V9 | Legal entity name, Texas entity, which entity contracts with US clients and under which law | Footer, /about, /launch-ready FAQ |
| V10 | Fast-track option when launch is under 2 weeks away | /launch-ready FAQ |
| V11 | Review experience with Supabase, Firebase and Stripe webhooks (Stripe Connect is proven via Rushr; Supabase and Firebase are not in master) | /launch-ready, quiz |
| V12 | EduLens: cost baseline, measurement period, which agents the 60–90% covers, project timeline, team shape, ongoing work, and the caption-first mechanism as described | /work/edulens, home |
| V13 | Partner terms: white-label minimum, no direct client contact unless allowed, non-solicit, engineer replacement | /partners |
| V14 | Public cost comparison with agencies ("a fraction of typical agency cost") | /build FAQ, /partners |
| V15 | No cookie banner needed: PostHog cookieless + Cloudflare Web Analytics; check whether the Cal.com embed sets cookies | Footer, /book |
| V16 | Who visitors meet on calls, and whether people are named (see D1) | /book, /about |
| V17 | OK to mention Yawmy Care before its 2027 launch, and academic collaborations (Ireland, USA, Switzerland, KSA) | /about |
| V18 | Quiz scoring thresholds (starting values; tune after the first 50 completions) | /launch-check |
| V19 | Booking a Review = free 30-minute scoping call first (cro-ux open decision 2) | /book, /launch-ready |
| V20 | Review payment terms (upfront, or 50/50) | /launch-ready |
| V21 | Build change-request process (price the change before doing it) | /build |
| V22 | Squad start time and resizing terms for Scale and staff augmentation | /scale, /partners |
| P1 | Review price cue ("from $X" or "$X–$Y") | /launch-ready, home, /book |
| P2 | Validate fee | /validate |
| P3 | Build price range or "typical" band | /build |
| P4 | Scale retainer cue ("from $X/month") or decision to hide | /scale |
| P5 | Partner rate cue ("from $X/month per engineer") or decision to hide | /partners |
| [TEAM] | Team photos, names, roles, years of experience | Home, /about, /book |
| [WHATSAPP] | WhatsApp business number | Global |
| [METRIC] | Rushr results | /work/rushr |

### 0.6 Decisions and conflicts flagged

- **D1 Founder profiles.** Master (Oct 2026 note) says marketing is company-led with no founder profiles. cro-ux recommends naming the founder on /book and a founder story on /about. This deck follows master: company voice, a team section with [TEAM] placeholders, and "a senior member of our product team" on /book. If you approve named people, swap in at the [TEAM] tags.
- **D2 Home H1.** seo-aeo proposed "We help founders build the right product, then ship it fast". Changed to a specific launch-stuck problem line (cro-ux 5-second test). The core idea still appears verbatim on the page and the title and meta keep the search terms.
- **D3 Rushr.** Shell only. Not linked from nav or home until metrics and consent are in (cro-ux rule: no placeholders live).
- **D4 Arabic before /ar.** market-voc suggests a short Arabic summary block on /launch-ready and /book before Q1 2027. Not written here (English-only brief). Add if you want it; needs a native reviewer.
- **D5 External facts.** No external statistics (CVE counts, leak stories) are used in page copy, because the brief limits facts to master. They belong in /insights articles with citations.

### 0.7 Launch resolution of every tag (weekend launch, applied Oct 16; source `11` §0b)
How the build treats each tag in this deck. "Keep" = render the tagged text without the tag. "Omit" = the tagged sentence, bullet or FAQ is not built. "Replace" = use the text given here. Change a row here first to change the site.

| Tag | Resolution | Source |
|---|---|---|
| V1 founding year | Omit | D-21 |
| V2 six Review areas · V3 deliverables + Day 0–5 | Keep | `02` Offers ("~5 working days, read-only access, ranked findings + fix/refactor/rebuild verdict + fixed quote"); `09` Offer |
| V4 "useful" definition | Replace with: "A useful finding is an issue we rate medium severity or higher." | D-03 |
| V5 read-only access · NDA on request | Keep | `02` Offers (read-only); company profile deck trust slide ("NDA on every engagement", cleared external) |
| V6 your repo and accounts from day one | Keep | Company profile deck ("Your repositories, your infrastructure, from the first commit", cleared external) |
| V7 reply time · quote turnaround | Omit both promises | D-10, D-40 |
| V8 call slots in US and Gulf hours | Keep | D-42 availability (Mon–Thu 12:00–20:00, Sun 12:00–17:00 Cairo) |
| V9 entity name · US contract FAQ | Omit (footer © shows "DiscoverDev" only; the "Do you sign a contract with US clients?" FAQ is not built) | D-08 |
| V10 launch in under 2 weeks | Replace FAQ answer with the Phase 4 answer in §3 FAQ ("Tell us your launch date on the scoping call. We check the parts that matter most for launch first…"). No promise to send findings early. | D-20 |
| V11 Supabase, Firebase experience | Omit "Supabase" and "Firebase" from stack claims (FAQ lists). Keep Supabase RLS as an example of *what we check* (§3.4 area 1) and Stripe (Stripe Connect proven, `09` Rushr) | `09` has no Supabase/Firebase project |
| V12 EduLens | Anonymize as "EdTech AI platform, Egypt": metric and the five mechanisms kept (all in `09`); name, quote, timeline, team and "What's next" omitted; no baseline line | D-05/D-06 |
| V13 partner terms | Keep: white-label "your brand only" (deck: "our name never needs to appear"), "Per project", staff aug 3 months, NDA and IP to you. Omit: replacement terms, client-contact and non-solicit lines, start time | Deck trust slide; `09` engagement models |
| V14 cost vs agencies | Keep | `09` guardrails ("cost = fraction of agency cost, a consequence not a hook") |
| V15 cookieless, no banner | Keep (with the Cal.com cookie line) | D-24 |
| V16 who you'll meet | Keep "A senior member of our product team." No names or photos | D-16 |
| V17 Yawmy Care, academic collaborations | Omit §12.8 | D-32 |
| V18 quiz thresholds | Keep v1 | D-39 |
| V19 free scoping call first | Keep | D-04 |
| V20 payment terms | Omit | D-02 |
| V21 change pricing during Build | Omit that sentence; keep "We agree a clear scope before we start, then price that scope." | Not in `09` |
| V22 squad start, resize notice, month-to-month | Omit those FAQs and clauses | Not in `09` |
| P1 Review price | **Resolved Oct 16 (Mohamed): "From $1,490" (USD).** Use "Reviews start from $1,490." where a [PRICE: P1] tag stood; microcopy reads "From $1,490, credited to your fix". | D-01 |
| P2–P5 Validate, Build, Scale, Partner prices | Model only, no numbers (text already in each pricing section) | D-18, D-19 |
| [TEAM] | Omit team sections and grids | D-16, D-17 |
| [WHATSAPP] | Omit | D-09 |
| [CONSENT: client] | Omit names, logos and quotes. Use the anonymized descriptions from §9.3. Retention line becomes "Four clients expanded scope with us." | D-05 |
| [METRIC] Rushr | Rushr hidden everywhere | D-07 |
| V12 slug + /work meta | Anonymized case lives at `/work/edtech-ai-agents` (04 §2: anonymized case = descriptive slug; the client name stays out of the URL). Title: "EdTech AI Agents: Cutting AI Costs 60–90% \| DiscoverDev". `/work` meta drops the marketplace (G-07): "Products we took from idea or prototype to production: EdTech AI agents with 60–90% lower AI costs, AR e-commerce, embedded data and ML teams." | D-06, G-07 |
| [ASSET] sample report | ReviewSnapshot in HTML, labelled "Sample report, not a client" | D-26 |
| Testimonial sections | Omit; keep rating text + Clutch link | D-05, `04` §9 |
| Banned words (Oct 16 QA) | §6.10 "not on being cheap" removed; §10.4 "affordable" rewritten as "with running costs that stayed under control" | `01` words to avoid (cheap, affordable) |

---

### 0.8 Internal links for `05` §3 (added 2026-10-16)
The inbound-link gate (`07` §15: ≥ 3 links from the `<main>` of distinct pages) failed for /about, /partners, /validate, /build, /scale and /work. Fixes, in this order of preference:
1. **Existing words become links (no new copy):**
   - /validate §5.2 not-for: "Launch-Ready Review" → /launch-ready; "See Scale" → /scale.
   - /build §6.2 not-for: "see Validate" → /validate; "start with a Review" → /launch-ready; "see Scale" → /scale.
   - /scale §7.2 not-for: "see Build" → /build; "see Partners" → /partners.
   - /work §9.3: "White-label websites and mobile apps" (software-house item) → /partners.
2. **New link labels:**
   - /validate §5.7, /build §6.7, /scale §7.7 (Team shape), after the body: "About DiscoverDev and where we work" → /about.
   - Home §2A.8 case highlight, after "Read the case study": "See all our work" → /work (05 §3 rule 1).
   - Home §2A.10 FAQ "We already built something…", after the answer: "Read the guide to taking an AI-built app to production" → /insights/ai-app-to-production (05 §3 rule 1).
   - Case study (/work/edtech-ai-agents), end of Results: "How Scale works: a team that stays with your product" → /scale (05 §3 rule 6).
3. **Phase 4 links (added Oct 16, enhancement review: service pages had no links to guides; /about and /partners were dead ends):**
   - /launch-ready FAQ "Lovable or Claude can scan my app for free…", after the answer: "Read: the security holes AI-built apps ship with" → /insights/ai-built-app-security-holes.
   - /launch-ready FAQ "Which tools and stacks do you review?", after the answer: "Built with Lovable? Read the launch checklist" → /insights/lovable-launch-checklist.
   - /build FAQ "Can you take over my AI-built or freelancer-built prototype?", after the answer: "How to decide between fixing and rebuilding" → /insights/fix-or-rebuild-ai-app.
   - /about Track record, after the list: "See the products we helped ship" → /work.
   - /partners FAQ "Who owns the IP in a white-label project?", after the answer: "See the white-label work we've delivered" → /work.
   - /partners FAQ "What is the minimum term for staff augmentation?", after the answer: "Need a whole team instead? See Scale" → /scale.

## 1. Global elements

### 1.1 Header and navigation

- Logo alt text: "DiscoverDev home"
- Skip link: "Skip to content"
- Nav items (in order; strategy v2, 2026-10-16):
  - Services (menu button; `aria-expanded`). Menu items with one-line descriptors:
    - Validate: "Have an idea? Test it in 1–2 weeks."
    - Build: "Production-ready in 8–12 weeks, fixed price."
    - Scale: "A dedicated squad that stays with your product."
    - Launch-Ready Review: "Already built something? A senior review in about 5 working days."
    - Partners: "Senior capacity for software houses and agencies."
  - How we work → /#how-we-work
  - Work → /work
  - Insights → /insights
  - About → /about
  - Button: **Book a call** → /book?type=clarity
- Mobile: "Menu" / "Close menu". Menu sheet order: the items, the button, then "Email us" and "WhatsApp us".
- Mobile sticky bar (after hero scrolls away; hidden on /book, forms, keyboard open): button "Book a call" + line "30 minutes · No pitch". On /launch-ready the bar keeps "Book a Review" + "No useful findings, no charge".
- Breadcrumb labels: Home › Work › [Case name] · Home › Insights › [Article title]

### 1.2 Footer

- Core idea (large text): "Most teams just build what you ask for. We help you build the right thing, then ship it fast, and you own all of it."
- Entity line (same wording on Clutch, LinkedIn, Upwork): "DiscoverDev is a product and engineering company that helps founders and teams build the right product, then ship it fast. Senior teams, AI-accelerated, and you own everything."
- Columns:
  - **Services:** Validate · Build · Scale · Launch-Ready Review · Partners
  - **Work:** EdTech AI agents case study (anonymized, /work/edtech-ai-agents) · All work (add Rushr when live). Oct 16: link columns no longer wrap on desktop.
  - **Insights:** Guides · Take the launch check
  - **Company:** About · Book a call · Privacy · Terms
- Contact block (same order and place on every page, WCAG 3.2.6):
  - Email us: hello@discoverdev.ai
  - WhatsApp us: [WHATSAPP]
  - "We reply within 1 business day." [VERIFY: V7]
  - "Texas, USA · Alexandria, Egypt (engineering hub)"
  - "We work in Arabic and English."
- Proof line: "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct)." Link: "Read our reviews on Clutch"
- Legal line: "© 2026 DiscoverDev [VERIFY: V9 legal entity name]"
- Analytics line: "This site uses cookieless analytics. We don't use tracking cookies." [VERIFY: V15]
- Language switcher: hidden until /ar ships. Then label "العربية" / "English", linking to the same page in the other language.

### 1.3 Cookie and consent

- No cookie banner if V15 confirms cookieless analytics and no third-party cookies outside booking.
- Line beside every Cal.com embed: "Booking runs on Cal.com. Cal.com may set its own cookies when you book. Read our privacy policy." [VERIFY: V15]
- Email consent (quiz and newsletter): see 1.6.

### 1.4 Form labels, helper text and errors (shared)

| Field | Label | Helper text | Error |
|---|---|---|---|
| Name | Your name | | Enter your name. |
| Email | Email | We send your invite here. | Enter your email. / Check your email. It needs an @ and a domain, like name@company.com. |
| App link | App link (optional) | Paste the live or preview link. If it isn't live yet, leave this empty. | Check the link. It should start with https:// |
| Company website | Company website | | Check the link. It should start with https:// |
| Any required select | (see 1.5) | | Choose one option. |

System messages:
- Sending: "Sending…"
- Success: "Sent. Check your inbox in the next few minutes."
- Send failed: "We couldn't send that. Check your connection and try again, or email hello@discoverdev.ai."
- Bot check (Turnstile): "Checking you're not a bot. This takes a second."
- Calendar failed to load: "The calendar didn't load. Refresh the page, or email hello@discoverdev.ai and we'll send you times."
- Errors show on blur, clear on typing, and are linked with `aria-describedby`.

### 1.5 Booking form questions (Cal.com, 4–6 fields per event)

Do not ask for phone, budget, company size or free text. Prefill name, email and quiz data when known (never ask twice).

**Event: review-intro (Launch-Ready Review scoping call, 30 min, free) · 6 fields**
1. Your name
2. Email
3. App link (optional)
4. What did you build it with? · Lovable · Bolt · v0 · Cursor or another AI coding tool · A freelancer or agency · My own team · Other
5. What's blocking launch? · Security and data · Payments · Speed or scaling · Code quality · Not sure
6. How did you hear about us? · Google · ChatGPT or another AI assistant · LinkedIn · Clutch · Referral · Reddit · Other

**Event: clarity-call (30 min, free) · 5 fields**
1. Your name
2. Email
3. Where are you now? · I have an idea · I have a prototype or early MVP · My product is live · I run a software house or agency
4. What do you need most? · Test an idea · Get my app ready to launch · Build a product · Grow my team · Not sure yet
5. How did you hear about us? (same options)

**Event: partner-call (30 min, free) · 5 fields**
1. Your name
2. Email
3. Company website
4. Which model are you looking at? · White-label delivery · Staff augmentation · Not sure yet
5. How did you hear about us? (same options)

Hidden metadata: utm_source, utm_medium, utm_campaign, page, quiz_segment, target_launch (from quiz Q3).

### 1.6 Email capture microcopy

**Quiz report (on the /launch-check result screen)**
- Heading: "Get your full report by email"
- Body: "Your report explains each risky answer and how to fix it. It's free."
- Field: Email
- Button: Email me my report
- Consent line (G-03, D-11 Web3Forms + manual reply, Oct 16): "We'll email your report to this address. We won't add you to a mailing list." Checkbox label: "Email me my report" is the consent; required.
- Newsletter checkbox: omitted until an email provider exists (D-11 option c).
- Success (G-03): "Sent. We'll email your report within 1 business day." [VERIFY: V7] → §0.7 V7 omits reply-time promises, so build uses: "Sent. Your report is on its way to your inbox."
- Superseded Oct 16: "We'll send your report and 3 short emails…", "Also send me the monthly Insights email.", "Report sent. Check your inbox in the next few minutes."

**Insights newsletter (hub and article end)**
- Heading: "One practical email a month"
- Body: "Guides on taking AI-built apps to production. No spam."
- Field: Email
- Button: Get the monthly email
- Consent line: "Unsubscribe in one click. We never share your email." [VERIFY: V15 privacy policy]
- Success: "You're on the list. The next email arrives next month."

---

## 2A. Home v3 (/) · strategy v2, 2026-10-16

Supersedes §2.2 and §2.4–2.13 on the home page. Still used from §2: §2.3 proof strip, §2.8 case highlight (anonymized per §0.7). The Review copy in §2.2a, §2.2b, §2.5 and §2.6 moves to /launch-ready and is not shown on home. Facts trace to `09` (Method, Offer, Services catalog, Differentiators).

- **SEO title (56):** Product & Engineering Partner for Founders | DiscoverDev
- **Meta (145):** Build the right thing, then ship it fast. The DiscoverDev Way: discover first, build with AI, seniors sign off. Senior teams, and you own it all.
- **H1:** Turn your idea into a live product in weeks.
- **Primary CTA:** Book a free clarity call

### 2A.1 Hero
- Pill: AI drafts. Seniors sign off. (hero copy pass Oct 16, CRO/copy: replaces "The DiscoverDev Way · senior-signed"; plain words, mirrors the board)
- H1: Turn your idea into a live product in weeks. ("a live product" set in brand blue; Mohamed Oct 16, replaces "Build the right thing. Ship it fast.")
- Sub: DiscoverDev builds it with senior engineers and AI, in 8–12 weeks. You own everything.
  - Oct 16 hero copy pass (CRO/GEO/copy, chosen by Mohamed): short; names the entity so the line can be quoted on its own (05 §5); 09: Build = live deployment in 8–12 weeks; full IP. Trimmed when the H1 took "in weeks" (no repeat). Replaces "A product and engineering company … without cutting corners. And you own everything."
- Buttons: Book a free clarity call (primary) · See how we work (text link with an arrow, → #how-we-work; hero batch Oct 16)
- Quiet line: 30 minutes · No pitch · Leave with a next step
- Proof line (hero batch Oct 16): the global rating line + Clutch link (§0 proof.rating / proof.clutch, from 09), under the quiet line.
- Visual: the delivery scene (2A.2). HTML only, labelled as an example. Layout (hero split, Oct 16): from laptop width the copy sits left and the board right, both in the first screen; phones stay stacked.

### 2A.2 Delivery scene strings (home hero visual; labelled as an example; three rows per lane since Oct 16, batch 2; phones show the first two rows per lane, hero batch Oct 16)
- Window path: your-product / sprint-board · Badge: Example
- Status: Build · Week 4 of 10
- Lane 1 title: AI does the heavy lifting · State labels: "drafting" (in progress) → "drafted"
  - Draft the booking API from the spec
  - Write tests for every endpoint
  - Draft migrations and seed data
- Lane 2 title: Senior engineers own the quality · State labels: "reviewing" (in progress) → "approved"
  - Architecture decision recorded
  - Code review: 2 changes requested
  - Payments tested end to end
- Release card: Release 0.4 · Shipped to staging · Signed off by a senior engineer · Weekly demo with you
- Footer line: A person is responsible for every line that reaches your users.
- Caption (screen readers): Example of a sprint the DiscoverDev Way: AI drafts the work, then senior engineers review and approve it before release.

### 2A.3 Proof band ("What we've built"; logos or projects, never mixed; Oct 16)
- Oct 16: Mohamed approved all ten logos (EduLens, Upscend, Arheb, Nile Support, BioBank, Jumlaty, Zest, Continuum Therapy Collective, Rushr, Yawmy Care), so the band shows the logo row.
- Rule: when 4 or more clients have written consent recorded in `src/data/clients.ts` (D-05), the band shows a still row of their logos (no motion). Until then it shows the four project cards below. Logo candidates (09): Upscend, Zest, Arheb, BioBank, EduLens, Jumlaty, Nile Support, Continuum Therapy Collective (client + clinician consent), Yawmy Care (own product; name to confirm). Rushr ("R" mark) stays hidden (D-07). Not candidates until named and added to 09: the "AD" and "F" marks, Darb, Beacon, the resort and Orange logos.
- Label (logos): Teams we've built for
- Logo style (Mohamed, Oct 16): client cards in one moving row (logo in its own colours + name + one line); pauses on hover, pause control hidden until keyboard focus ("Pause"; Mohamed, Oct 16: no visible button), tap the row to pause on touch, hover to pause with a mouse (WCAG 2.2.2); slower speed (90s loop), still and wrapped under reduced motion. Card lines (09): edulens: EdTech AI platform · Egypt; upscend: B2B learning platform · UK; arheb: Ride-sharing ML · Saudi Arabia; nile-support: AI call operations · USA; biobank: HealthTech app; jumlaty: Restaurant procurement · Saudi Arabia; rushr: Home-services marketplace · USA; zest: Market study; ctc: Speech therapy practice · USA; yawmy-care: Childcare platform · our product · Label (projects): What we've built
- Project cards (facts in 09; anonymized per §0.7; stage tag = service name, links to its page):
  1. Build · AI agents for an EdTech platform · Egypt · "Three AI agents in production. AI costs down 60–90%." (→ /work/edtech-ai-agents)
  2. Build · AR furniture store with AI recommendations · Saudi Arabia · "Market study, design, build, AI and AR in one team."
  3. Scale · Embedded product team for a B2B learning platform · UK · "12 months owning the roadmap, backlog and sprints."
  4. Scale · Data and ML for an EdTech platform with 20,000+ students · Egypt · "Data engineering, ML and automations."
- Then the §2.3 facts beside a small map (Oct 16, Mohamed: make the facts visual and on-brand): a real dotted map (Natural Earth land, Oct 16, Mohamed: real map with countries), countries we've worked in lit blue (09: USA, UK, Ireland, Spain, Switzerland, Italy, Saudi Arabia, Kuwait, Egypt), our two teams pulsing green (Texas, USA · Alexandria, Egypt) joined by an arc, plus one marker per client country (USA, United Kingdom, Ireland, Spain, Switzerland, Italy, Saudi Arabia, Kuwait, Egypt; country name on hover). Legend: "Countries we've worked in" · "Our teams: Texas and Alexandria". Screen-reader label: "Map of where we work: clients in North America, Europe, Africa and Asia, with teams in Texas, USA and Alexandria, Egypt." Previously: The rating line and Clutch link (§0.4) sit in the hero (Oct 16).
- Why (Oct 16 review): mixing logos and text in one moving strip read as noise; moving text can't be read and needs a pause control (WCAG 2.2.2). Each card names the product type, the work and the country, so search and AI answers can quote it.

### 2A.4 The DiscoverDev Way (id `how-we-work`; renamed from "Agile v2" Oct 16, see `docs/brand/discoverdev-way.md`)
- Label: The DiscoverDev Way
- H2: Discover first. Build with AI. Seniors sign off.
- Body: The DiscoverDev Way is how every project runs. We agree on what is worth building before any code. AI drafts the work, so it moves fast. A senior engineer reviews every change and signs off every release, so speed never costs you quality. You see progress every week.
  - Oct 16 copy pass: each sentence pairs what we do with what the client gets (speed, quality, visibility).
  - Oct 16 section review (GEO/copy): one defining sentence instead of 60 words that repeated the hero.
- Columns "What AI does" / "What senior engineers own": removed Oct 16 (batch 2; Mohamed: the hero board and the journey visual already say this). The journey visual (Discover → AI drafts → A senior signs → Live) sits between the body and the line.
- Line: removed from the home section Oct 16 (section review: it repeated the hero pill "AI drafts. Seniors sign off."). "AI drafts it. A senior engineer signs it." stays the brand line in 09 and elsewhere.
- **Journey visual (Oct 16, Mohamed: "from discovery to be live … like visuals for section"):** four cards side by side between the body and the two columns, played once on scroll. Illustration, not a client product; no text inside images.
  - 1 · Discover · Line: We test the idea and sketch the product before any code.
  - 2 · AI drafts · Card tag (mono): AI draft · Line: AI writes the first draft from the agreed spec.
  - 3 · A senior signs · Checklist: Review of every change · Security, data and payments · Sign-off on every release · Stamp: Signed off · Line: A senior engineer reviews it and signs it off.
  - 4 · Live · Chip: Live · Line: Your users get it, and we keep improving it.
  - Visual redesign Oct 16 (Mohamed): one screen in four states on the dark theme; card 3 = the draft made solid with a dark review panel (checks, signature, green stamp), card 4 = the finished screen in brand colour with a rising usage line (no numbers).
  - Oct 16 copy pass: lines say what happens at each step, in the client's terms.
  - Caption (screen readers): An illustration of the DiscoverDev Way: a rough sketch, an AI draft, a senior engineer's sign-off, then the live product.

### 2A.5 Lifecycle
- Label: How a project runs (Oct 16: the old label repeated the H2)
- H2: One team from idea to after launch
- Lead (Oct 16, Mohamed): New product or existing code, greenfield or brownfield, the same four steps apply. With existing code, Discover starts with a review of what you have. (09: greenfield builds such as the marketplace; take-overs, legacy modernization and the Launch-Ready Review for existing code.)
- Step 1 · Discover · Time: 1–2 weeks · Body: Market read, product scope and a clickable prototype. · You get: A tested prototype and a fixed build estimate. · Frameworks: Jobs to be Done: Find the job users hire the product to do. | Design Sprint: Test a clickable prototype with users early.
- Step 2 · Plan · Time: Before any code · Body: Roadmap, tech decisions and team, agreed before any code. · You get: A release plan and written tech decisions. · Frameworks: User Story Mapping: The user journey, split into releases. | Shape Up: Fixed time, flexible scope. | RICE: Rank features by reach, impact, confidence and effort. | ADRs: A written record of each tech decision.
- Step 3 · Build · Time: 8–12 weeks · Body: Weekly sprints, with a demo for you every week. · You get: A production-ready product, signed off by a senior engineer. · Frameworks: Weekly sprints: Plan, build and demo every week. | Definition of Done: A shared checklist before anything counts as done.
- Step 4 · Ship & Stay · Time: Ongoing · Body: Deploy, monitor and keep improving. The same team stays after launch. · You get: A live product that keeps improving, with the same team. · Frameworks: DORA metrics: How often and how safely we ship. | Continuous discovery: Keep talking to users after launch. | HEART metrics: Happiness, engagement, adoption, retention, task success.
- Home shows only the four steps as simple cards, each with one text-free framework drawing (Discover: Jobs to be Done · Plan: Shape Up hill chart · Build: weekly sprints · Ship & Stay: DORA), time and one line, plus a link "See how we work in detail" → /how-we-work (Oct 16, Mohamed: keep home simple). "You get" and frameworks render on /how-we-work.
- Oct 16 lifecycle upgrade (Mohamed: real frameworks, inspired by live studio process pages that name time and deliverable per stage; TrianglZ's Agile V2.0 page has neither): each stage shows time (09: Validate 1–2 weeks, Build 8–12 weeks, Scale ongoing), a "You get" line and each framework with a one-line explanation. Frameworks confirmed by Mohamed (09).
- Oct 16 section review: steps rewritten so they don't repeat §2A.4 (AI and senior sign-off chips removed); the section's own point is one team for the whole lifecycle. Facts: 09 Offer (Validate deliverables), Method (stages, weekly results, we stay).
- Line: One team, no handoff gaps.

### 2A.6 Engagements
- H2: Three ways to work with us
- Lead: Start where you are. Validate's fee credits toward Build.
- Card · Validate · "I have an idea." · Kind: Product discovery · Meta: 1–2 weeks · Fixed fee · Body: Market and competitor read, product scope, a clickable prototype and a fixed build estimate. · Link: See Validate
- Card · Build · "I'm ready to build." · Kind: MVP development · Meta: 8–12 weeks · Fixed price · Body: A live product with real users: design, build, QA and deployment, with a demo for you every week. · Link: See Build
- Card · Scale · "It's working. Grow it." · Kind: Dedicated product team · Meta: Ongoing · Monthly retainer · Body: A dedicated squad of developers, QA and a PM that owns the roadmap with you. You keep control. · Link: See Scale
- Oct 16 section review (SEO/GEO/CRO): each card names its service in the words founders search for (Kind line, matches 05 keywords: product discovery, MVP development, dedicated team); Build body says what you get each week (09: live deployment, weekly demo).
- Sub-heading: Other ways in
- Row · Launch-Ready Review · "Already built something?" · Your AI-built or freelancer-built app, reviewed by a senior team in about 5 working days. A ranked fix list and a plain verdict. · Link: See the Review
- Row · Partners · "I run a software house." · White-label delivery and staff augmentation under your brand. · Link: See Partners

### 2A.7 What we build
- H2: What we build
- Lead: Product, engineering, AI and data in one senior team, so nothing gets lost in a handoff. (Oct 16 section review: "Nine service lines" sat over 15 items in 4 groups and read as a mismatch; 09: one team, no handoff gaps)
- Group · Product · "Decide what to build before any code.": Product strategy and discovery · Product design (UX/UI) · Market and competitor studies
- Group · Engineering · "Tested, deployed and kept running.": Web and mobile apps · APIs and enterprise systems · E-commerce and marketplaces · Legacy modernization and cloud migration · Quality, DevOps and cloud
- Group · AI and data · "AI in production, in Arabic and English.": AI agents and chatbots in Arabic and English · Computer vision and NLP · Recommendations and document processing · Data engineering and analytics
- Group · Teams and advice · "Senior people on your team or a second opinion.":
- Taglines rewritten Oct 16 (swap test: the old ones fit any agency). Layout: four compact columns from 64rem. Architecture reviews and code audits · CTO advisory · Dedicated teams and staff augmentation

### 2A.8 Case highlight
- §2.8 (anonymized per §0.7), with the Oct 16 section review:
  - Label: Case study · EdTech · Egypt
  - Body (Oct 16 copy pass, problem first; 09 challenge and outcome): An EdTech platform in Egypt runs three AI agents: a support chatbot, a video-to-lesson and quiz generator, and a student learning assistant. Every request was processed from scratch, so AI costs rose with every new student. We changed that, and now cost grows slower than the user base.
  - Card: 60–90% · lower AI cost · results: Three AI agents in production · Cached content served at close to zero cost (09 outcomes) · stack row
  - The five changes, each with one line (from the case study, /work/edtech-ai-agents): Captions first: Free captions first. Paid transcription only when a video has none. | Reuse across users: Each video is processed once and shared, so repeat views cost close to nothing. | The right model for each task: Lower-cost models by default, larger ones only where they pay off. | Shorter prompts: Each request carries only what the model needs, so fewer tokens are billed. | Faster transcription: Long audio is split into 2-minute chunks and transcribed in parallel.

### 2A.8b Selected work: bento showcase (Oct 16, Mohamed; replaces the case block §2A.8 and the six-card grid on home)
- Label: Selected work · H2: Products we've helped build · Link: See all our work (→ /work)
- One featured tile (AI agents for an EdTech platform · EdTech · Egypt · 60–90% lower AI cost · Read the case study) and four tiles (AR furniture store, Embedded product team for a B2B learning platform, Health app that explains lab reports, Customer-support AI agent). Data from `src/content/copy/en/projects.ts` (all lines from 09).
- Each tile shows a text-free drawing of the product type; a real product screen replaces it once the client approves screens (Mohamed suggested Figma screens, Oct 16; D-05).

### 2A.8a Project chapters (Oct 16, Mohamed: Fantasy-style, one product per full screen, in the site theme; above Selected work on home, top of /work)
- Each chapter: tags · huge product name · one line · "View project" (→ /work#project-<id>) · real screens from our Figma on 3D devices. Facts from 09.
- NJWAR · tags Build, E-commerce, AR, Saudi Arabia · Line: An AR furniture store with AI recommendations: place a piece in your room at real size, change its colour and add more. · Second action: Try our AR prototype ↗ (→ https://furniture-webar.pages.dev/, new tab) · Note: Web store on the laptop, AR on the phone. On a phone, the demo places a chair in your room. · Screens: web AR home (laptop), AR view (phone).
- Yawmy Care · tags Build, Childcare, Our own product · Line: Our own nursery platform for management, teachers and parents, with billing and multiple locations. · Note: Admin dashboard on the web, parent app on the phone. · Screens: admin dashboard (laptop), parent home and daily logs (phones).
- Rushr · tags Build, Marketplace, USA · Line: A home-services marketplace: post a job, get matched with the nearest verified pro, pay through escrow. · Screens: searching, matched pro, request in progress (three phones). Hidden on the live site until D-07 is lifted.
- Selected work below them then shows the other projects (the EdTech case first).

### 2A.8c Client reviews (Oct 16; Mohamed approved all 8 quotes from 09 with names and roles, D-05)
- Order (Oct 16 psychology review: similarity and availability): product-build quotes first (EduLens CEO featured larger, beside the case it backs), then research, then Validate market research. Service tag starts with the stage (Build / Research / Validate). "Book a free clarity call" under the reviews (proof next to the CTA).
- Label: What clients say · H2: Verified reviews from founders and teams · Rating line + Clutch link (§0.4) under the heading. Quotes verbatim from 09 (no edits, exclamation marks kept as written by the client). No star graphics, no AggregateRating.
- "Perfect timing, always available for any questions or concerns, great professionalism. The job was done perfectly, and it was on point, giving us the info we needed. 100% recommendable." Roberto, Fantacalcio · Market research · Fantasy football
- "They focused on building solutions that were practical, scalable, and aligned with our users’ needs." Youssef, CEO, EduLens · AI agents · EdTech
- "The quality of their work is top-notch." CEO, Nile Support, USA · AI agents, website and staff augmentation
- "Thank you for going above and beyond." Farah Alkhaldi, Consulting firm, Kuwait · Market research · Tourism and hospitality
- "Professional work and great communication." Nojoud Alarfaj, Athkado, Saudi Arabia · White-label and e-commerce
- "Absolutely amazing! I am very, very pleased with the level of detail that was delivered!" Michelle Boehm, Academic researcher, Switzerland · ML algorithms and data analysis
- "I will become a regular customer going forward now." Andrei Chejneanu, Entrepreneur, UK · Market research · Saudi Arabia expansion
- "You are doing great, I highly appreciate it! Thankful for completing such work in such a short period of time." Lea Nechitailo, Entrepreneur, Spain · Market research · Brand expansion

### 2A.9b Guides and tools (Oct 16, before the FAQ)
- Label: Guides and tools · H2: Free guides and a launch check (Oct 16: "free" up front, zero-price effect) · launch check card first (lowest effort first step), then three guide cards (pillar first, then the security and fix-or-rebuild guides; title and description from each guide) with "Read the guide"
- Launch check card · Take the launch check · 10 questions about your AI-built or freelancer-built app. See what to fix before real users arrive. · Start the check (→ /launch-check)

### 2A.9 Why DiscoverDev
- Label: Why founders and teams choose DiscoverDev
- Two-tone lead: core idea (bright: "Most teams just build what you ask for." dim: the rest)
- Pillar 1 · Product-first: The "Discover" in our name is the point. Before any code, we check it's the right thing to build, and we tell you what to cut.
- Pillar 2 · Senior-led, AI-fast: Senior engineers lead every project and sign off every release. AI handles the routine work, so you get speed without the mess.
- Pillar 3 · We stay: One team from first call to launch and after, with no handoff gaps. Four clients expanded scope with us.
- Pillar 4 · You own it all: Full IP, no lock-in and a clear contract from day one.
- Oct 16 section review: ownership moved from small print to a pillar (top founder objection, 02: "IP/NDA?"); pillar 2 answers "offshore means juniors" instead of repeating §2A.4; small text removed.

### 2A.10 FAQ
- H2: Questions founders ask us

**How do you use AI? Is the code safe?**
Yes. AI drafts code, tests and documentation. Senior engineers make the decisions, review every change and sign off each release. A person is responsible for every line that reaches your users.

**How does pricing work?**
Validate is a fixed fee, credited toward Build. Build is a fixed price for an agreed scope. Scale is a monthly retainer. You get a number after a free 30-minute clarity call, before you commit to anything.

**How long does it take to build an MVP?**
Validate takes 1–2 weeks and ends with a clickable prototype and a fixed build estimate. Build takes 8–12 weeks to a production-ready product with real users, with a demo for you every week.

**What is the DiscoverDev Way?**
It is how every DiscoverDev project runs. We agree on the right product first, AI drafts the work, and a senior engineer reviews every change and signs off every release. You see progress every week.

(Oct 16 section review: timeline and method questions added (02 top questions; 05 §5 definitional answer for AI search); AI answer opens with "Yes."; a clarity-call button sits under the FAQ heading.)

**Who owns the code?**
You do. You own everything we build: full IP, no lock-in, and a clear contract from day one. Your code stays in your own repository and accounts. If you stop working with us, you keep everything, and your own team or another developer can carry on.

**We already built something with AI or a freelancer. Can you take it over?**
Yes. Start with a Launch-Ready Review. A senior team reviews it in about 5 working days and tells you what to keep, fix or replace, and why. Then we fix it or build it properly.

**Which tools and stacks do you work with?**
React, Next.js, Node.js, Python, Spring Boot, React Native, Flutter, PostgreSQL, AWS, GCP and Azure. For AI: OpenAI, LangChain, RAG, computer vision and NLP.

**Your team is in Egypt. Will time zones be a problem?**
§2.12 answer, verbatim.

### 2A.11 Final CTA
- H2: Tell us what you're building.
- Body: Bring an idea, a prototype or a product that needs a team. We'll tell you where to start, even if we're not the right fit. (Oct 16 section review: the old body repeated the microcopy under the button; this names the three entry points: Validate, Review, Scale.)
- Previous body (Proof check 2026-10-16: "with a senior person" removed; 09 does not say who takes the clarity call.)
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step

---

## 2. Home (/) · v1, superseded on the home page by §2A (kept as the source for /launch-ready reuse)

- **Slug:** /
- **SEO title (56):** Product & Engineering Partner for Founders | DiscoverDev
- **Meta (146):** Stuck with an AI-built prototype that can't launch? We review it, fix or rebuild it, and ship it to production. Senior team. You own all the code.
- **H1:** Your app works in the demo. We get it ready for real users.
- **Primary CTA:** Book a Launch-Ready Review

### 2.1 Header
- Purpose: get visitors around fast. Global header (1.1).

### 2.2 Hero
- Purpose: pass the 5-second test for a launch-stuck founder.
- Eyebrow: For founders with an AI-built or freelancer-built app
- H1: Your app works in the demo. We get it ready for real users.
- Body: Built it with Lovable, Bolt, v0, Cursor or a freelancer? A senior team reviews it in about 5 working days. You learn what will break, what to fix and what it costs. Then we fix it or build it properly, and you own all of it.
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Text link: Not sure yet? Take the 3-minute launch check
- Proof chip: 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct) · Read our reviews on Clutch
- Visual: the RunPanel (Signal direction, `06-design-system.md` §0). Strings in 2.2a. HTML only, no image.
- **v2 hero (visual rebuild, Oct 16, `docs/home-teardown.md`).** Supersedes Body and the stacked links above on the home hero only:
  - Sub-line: A senior team reviews your AI-built or freelancer-built app in about 5 working days. Then we fix it or build it properly, and you own all of it.
  - Buttons: Book a Launch-Ready Review (primary) · Take the 3-minute launch check (secondary, outline)
  - One quiet line under the buttons: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
  - Hero visual: the Review workspace scene (2.2b). The proof chip moves to the proof band directly under the hero.

### 2.2b Review workspace scene strings (home hero visual; labelled as an example)
- Window path: your-app / launch-ready-review · Badge: Example
- Sidebar title: Review areas · Items: Access and security · Data · Payments · Code quality · Scale and running costs · Ownership and handover
- Findings header: Findings · Filters: All · Critical · High · Medium
- Rows (severity · finding · area): Critical · Row-level security off on 3 tables · Data · Critical · Secret key readable in browser code · Access and security · High · Payment events not checked on the server · Payments · Medium · No error alerts or backups yet · Scale and running costs · Medium · Hosting account in a freelancer's name · Ownership and handover
- Row states: "AI flagged" (in progress) → "Verified" (final)
- Run column title: AI checks · Lines: checking data rules on every table · looking for secret keys in browser code · tracing payment events end to end · estimating hosting and AI costs
- Sign-off card: Verdict: fix, don't rebuild · Signed off by a senior engineer · Fixed quote with the report

### 2.2a Run panel strings (added 2026-10-15, Signal approved; reused on /launch-ready hero)
All wording comes from the proof bank (§0.4 Method) and the six Review areas (§3.4). It is labelled as an example.
- Header title: Launch-Ready Review
- Header meta: Example, not a client
- AI rows (label "AI", state "done"; in-progress state "checking"):
  1. check access and security
  2. check data and backups
  3. check payments end to end
  4. check code quality
  5. check scale and running costs
  6. check ownership and handover
- Human rows (state "Signed off"; in-progress state "waiting"):
  - Senior engineers · Own the quality
  - Product lead · Verdict: keep, fix or replace
- Footer line: A person is responsible for every line that reaches your users.
- Caption (screen readers): Example of how a Launch-Ready Review runs: AI checks six areas, then people sign off
- Layer chips (How it works, /launch-ready timeline): "AI-accelerated" on the review step · "Senior sign-off" on the findings step

### 2.3 Proof strip
- Purpose: trust in the first scroll.
- H2 (visually hidden): Who we work with
- Items: Clients on 4 continents · AI in production across multiple clients · Arabic and English · Texas, USA and Alexandria, Egypt
- Logos: only with consent. [CONSENT: logos]
- Visual: single row, grey logos, no carousel.

### 2.4 Problem
- Purpose: show we understand the founder's situation.
- H2: "It works" and "it's ready for strangers" are not the same thing
- Card 1 · Your data might be open: Can a signed-in user see someone else's records? Are secret keys sitting in code the browser can read? You may not know until someone else finds out.
- Card 2 · Payments that fail quietly: A payment that works in test mode can still drop or double-charge in real life. You find out from an angry customer.
- Card 3 · Code nobody can pick up: Every fix breaks something else. Your freelancer moved on. A new developer can't tell what's safe to change.
- Closing line: You don't need a rewrite by default. You need someone senior to look, and tell you plainly.
- Visual: three plain cards with simple line icons (lock, card, code bracket). No stock photos.

### 2.5 Offer spotlight: Launch-Ready Review
- Purpose: present the front-door offer with price cue and risk reversal.
- H2: What is a Launch-Ready Review?
- Answer-first body (52 words): A Launch-Ready Review is a fixed-fee check of your AI-built or freelancer-built app before real users, data and payments touch it. A senior team reviews security, data, payments, code quality, scale and ownership in about 5 working days. You get a ranked fix list, a keep, fix or replace verdict, and a fixed quote. [VERIFY: V2, V3]
- What you get (bullets):
  - A findings call where we walk you through every issue in plain words
  - A written report you keep, with each risk ranked
  - A clear verdict: keep, fix or replace, and why
  - A fixed quote for the fix work
- Price line: [PRICE: P1 "From $X."] The fee is credited toward the fix or a Build with us.
- Guarantee line: No useful findings, no charge.
- CTA: Book a Launch-Ready Review
- Microcopy: Starts with a free 30-minute scoping call [VERIFY: V19]
- Text link: See everything we check
- Visual: four-item checklist with check marks; a small "Day 0 → Day 5" bar.

### 2.6 How it works
- Purpose: make the process feel simple.
- H2: How it works
- Step 1 · Book a scoping call: 30 minutes, free. Tell us what you built and what worries you. You get a fixed fee before anything starts.
- Step 2 · We review your app: About 5 working days. Senior engineers and a product lead go through your code and your live app. [VERIFY: V5 read-only access, V16]
- Step 3 · Findings call: We walk you through the report. What's risky, what's fine, what to fix first.
- Step 4 · Fix or build: Hire us for the fix with the fee credited, or take the report to your own developer. It's yours.
- Visual: horizontal 4-step strip (mirrors in RTL), numbers as text.

### 2.7 Choose your path
- Purpose: route visitors who aren't launch-stuck.
- H2: Not at launch yet? Start where you are.
- Card · Validate · "I have an idea.": 1–2 weeks. Market read, scope, clickable prototype and a fixed build estimate. Link: See Validate
- Card · Build · "I'm ready to build.": 8–12 weeks to a live product with real users. Fixed price. Link: See Build
- Card · Scale · "It's working. Grow it.": A dedicated squad of developers, QA and a PM on a monthly retainer. You keep control. Link: See Scale
- Card · Partners · "I run a software house.": White-label delivery and staff augmentation under your brand. Link: See Partners
- Visual: 4 equal cards, one accent color each from the brand palette, no images.

### 2.8 Case highlight: EduLens
- Purpose: specific proof that AI can pay for itself.
- H2: How EduLens cut its AI costs by 60–90%
- Body: EduLens, an EdTech company in Egypt, runs three AI agents: a support chatbot, a video-to-lesson and quiz generator, and a student learning assistant. We changed how they read videos, reused answers across users and sent each task to the right model. AI costs fell by 60–90%. [VERIFY: V12] [CONSENT: EduLens]
- Quote: "They focused on building solutions that were practical, scalable, and aligned with our users' needs." Youssef, CEO, EduLens [CONSENT: EduLens quote]
- Link: Read the EduLens case study
- Visual: one large figure "60–90%" in HTML text with label "lower AI cost"; small stack row (Python, OpenAI, LangChain, Whisper).

### 2.9 Why DiscoverDev
- Purpose: differentiation through the three pillars.
- H2: Why founders choose DiscoverDev
- Lead: Most teams just build what you ask for. We help you build the right thing, then ship it fast, and you own all of it.
- Pillar 1 · Discover first: The "Discover" in our name is the point. Before we write code, we check it's the right thing to build, and we say what to cut.
- Pillar 2 · Senior teams that stay: AI does the heavy lifting. Senior engineers own the quality, and a person is responsible for every line that reaches your users. One team from first call to launch and after. No handoff gaps.
- Pillar 3 · AI that pays for itself: We have AI in production across multiple clients. For EduLens, we cut AI costs by 60–90%.
- Small text: You own everything: full IP, no lock-in, clear contract from day one.
- Visual: three columns; EduLens figure repeated as a small chip under pillar 3.

### 2.10 Team preview
- Purpose: real people build trust.
- H2: The people who work on your app
- Body: Our engineering hub is in Alexandria, Egypt, with a presence in Texas, USA. Engineers, product managers, designers and QA work in Arabic and English. Our day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead of us.
- Team grid: [TEAM: photo, name, role] × 4–6 · See [DECISION: D1]
- Link: Meet the team
- Visual: real photos only. No stock. Time-zone strip: US East · Alexandria · Riyadh · Dubai.

### 2.11 Testimonials
- Purpose: third-party proof.
- H2: What clients say
- Quote 1: "The quality of their work is top-notch." CEO, Nile Support, USA [CONSENT: Nile Support]
- Quote 2: "Professional work and great communication." Nojoud Alarfaj, Athkado, Saudi Arabia [CONSENT: Athkado]
- Quote 3: "They focused on building solutions that were practical, scalable, and aligned with our users' needs." Youssef, CEO, EduLens [CONSENT: EduLens quote] (swap for Roberto if EduLens is already shown above)
- Footer line: 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct). Link: Read our reviews on Clutch
- Visual: static list of 3, no carousel.

### 2.12 FAQ
- Purpose: handle cost, time, ownership and distance objections.
- H2: Questions founders ask us

**How much does a Launch-Ready Review cost?**
The Review is a fixed fee, quoted for your app before you commit. Most Reviews start from $1,490. The full fee is credited toward the fix or a Build with us. If the Review finds nothing useful, you pay nothing. You get your price on a free 30-minute scoping call.

**How long until my app is ready to launch?**
The Review takes about 5 working days. After that you get a fixed quote for the fixes, with a timeline. How long fixes take depends on what we find. If the right answer is a rebuild, that is a Build of 8–12 weeks. You know which one you need before you pay for any fix work.

**Who owns the code?**
You do. You own everything we build: full IP, no lock-in, and a clear contract from day one. Your code stays in your own repository and accounts. [VERIFY: V6] If you stop working with us, you keep everything, and your own team or another developer can carry on.

**Will you tell me to rebuild everything?**
Only if the evidence says so. The Review tells you what to keep, what to fix and what to replace, and why. A rebuild makes sense when the code can't be owned, changed or made safe at a fair cost. If that's the case, we scope it as a fixed-price Build. [VERIFY: V3]

**Which tools and stacks do you work with?**
We review apps built with Lovable, Bolt, v0, Cursor and other AI tools, and apps built by freelancers or agencies. Our team works with React, Next.js, Node.js, Python, Spring Boot, React Native, Flutter, PostgreSQL, AWS, GCP and Azure. [VERIFY: V11 for Supabase and Firebase]

**Your team is in Egypt. Will time zones be a problem?**
Our engineering hub is in Alexandria, Egypt (GMT+2). Our working day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English, and we have a presence in Texas, USA. You choose a call time that suits you. [VERIFY: V8]

### 2.13 Final CTA
- Purpose: the closer.
- H2: Find out what's between your app and launch day
- Body: A senior team, about 5 working days, and a plain answer.
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Text link: Not ready? Take the 3-minute launch check
- Visual: dark navy (#032993) band, white text, `$ launch --check` motif as decoration only.

### 2.14 Footer
- Global footer (1.2).

---

## 3. Launch-Ready Review (/launch-ready)

- **Slug:** /launch-ready
- **SEO title (56):** Vibe Code Audit for Lovable, Bolt & Cursor | DiscoverDev
- **Meta (155):** A 5-day Launch-Ready Review of your AI-built app: security, data rules, payments, scale. Fixed fee, credited toward the fix. No useful findings, no charge.
- **H1:** Launch-Ready Review (Phase 4b, "a vibe code audit before you go live" opens the lead; Oct 16: two-line headline rule from the design review; the full keyword phrase stays in the title tag and the lead.)
- **Primary CTA:** Book a Launch-Ready Review (inline Cal.com embed at the end)

### 3.1 Hero
- Purpose: instant match to the visitor's situation.
- Eyebrow: For apps built with Lovable, Bolt, v0, Cursor or a freelancer
- H1: Launch-Ready Review
- Body: A vibe code audit before you go live. Your app works in the demo. Before real users, real data and real payments touch it, a senior team checks what will break. In about 5 working days you get a ranked fix list, a plain verdict and a fixed quote. [VERIFY: V3]
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Text link: Take the 3-minute launch check first
- Visual: redacted report page (as on home). [ASSET]

### 3.2 Rating and proof chip
- Purpose: trust next to the first CTA.
- Copy: 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct) · Clients on 4 continents · Read our reviews on Clutch

### 3.3 Is this you?
- Purpose: let visitors qualify themselves.
- H2: Is this you?
- Checklist (founder's words):
  - You built it fast with an AI tool or a freelancer, and now you're scared to launch.
  - You're not sure each user can see only their own data.
  - Payments work in test mode, but you've never watched them under real use.
  - Every fix seems to break something else.
  - You couldn't hand the code to a new developer tomorrow.
  - An investor or partner asked "Is it secure?" and you didn't have an answer.
- Line under list: If two or more sound familiar, book a Review before you launch.

### 3.4 What we check
- Purpose: make the scope concrete. [VERIFY: V2]
- H2: What does the Review check?
- Answer-first (45 words): We check six areas before your app meets real users: who can see what, your data, your payments, the code, how it behaves as usage and costs grow, and whether you truly own it. Each finding is ranked by risk, so you know what to fix first.
- Area 1 · Access and security: sign-up, sign-in, user roles, and whether data rules (like Supabase Row Level Security) stop users from reading each other's records. Secret keys in browser code. [VERIFY: V11]
- Area 2 · Data: what you store, where, who can reach it, and whether you have backups.
- Area 3 · Payments: whether payment events are checked on the server, and what happens when a payment fails or repeats. [VERIFY: V11 Stripe webhooks]
- Area 4 · Code quality: whether a new developer could understand it and change it safely.
- Area 5 · Scale and running costs: what breaks first as users grow, and what your hosting and AI bills will look like.
- Area 6 · Ownership and handover: whether the code, accounts and keys are in your name.
- Visual: 6 tiles in a 2×3 grid (1 column on mobile), icon + title + one line.

### 3.5 What you get
- Purpose: show the deliverable. [VERIFY: V3]
- H2: What you get at the end
- Bullets:
  - **A written report.** Every finding in plain words: what can go wrong, who it affects, how to fix it.
  - **A ranked fix list.** What must be fixed before launch, and what can wait.
  - **A verdict.** Keep, fix or replace, part by part, and why.
  - **A fixed quote.** The price and timeline for the fixes, with your Review fee credited.
  - **A findings call.** We go through it together. Bring your co-founder or developer.
- Visual: redacted sample report page with one finding visible. Caption (HTML): "Sample finding, client details removed." [ASSET]

### 3.6 Timeline
- Purpose: set expectations. [VERIFY: V3]
- H2: How the 5 days work
- Day 0 · Scoping call: Free, 30 minutes. We agree scope and a fixed fee. You share access. [VERIFY: V5]
- Days 1–4 · Review: We go through your code and your live or preview app. We ask questions as we go.
- Day 5 · Findings: Written report, findings call and a fixed quote for the fixes.
- Visual: 3-step horizontal timeline.

### 3.7 Price and terms
- Purpose: survive the shortlist with an honest price cue.
- H2: What does a Launch-Ready Review cost?
- Answer-first (53 words): The Review is a fixed fee that depends on the size of your app. Reviews start from $1,490. You get the exact fee on the scoping call, before you commit. The full fee is credited toward the fix or a Build with us. [VERIFY: V20 payment terms]
- Small text: You own the report either way. Take it to any developer you like.

### 3.8 Guarantee
- Purpose: remove the risk of paying for nothing.
- H2: No useful findings, no charge
- Body: If the Review doesn't find anything that puts your users, data, payments or launch at risk, you don't pay. A useful finding is one that names a real risk and tells you how to fix it. [VERIFY: V4]
- Visual: simple boxed statement, no badge graphics.

### 3.9 Proof
- Purpose: show this team ships and stays.
- H2: Proof from work we've shipped
- Card · EduLens: Three AI agents in production. 60–90% lower AI cost. Link: Read the EduLens case study [CONSENT: EduLens]
- Card · Rushr (add in November): US home-services marketplace, built from zero in 16 weeks. Link: Read the Rushr case study [CONSENT: Rushr] [METRIC]
- Quote: "The quality of their work is top-notch." CEO, Nile Support, USA [CONSENT: Nile Support]

### 3.10 Who it's not for
- Purpose: filter poor fits and signal honesty.
- H2: When the Review isn't the right fit
- Bullets:
  - **You only want an automated scan.** Run one first. Some are free. Come back when you need judgement and a fix plan.
  - **You only have an idea.** Start with Validate: 1–2 weeks to test it before you build. Link: See Validate
  - **Your product is live and growing, and you need a team.** See Scale: a dedicated squad on a monthly retainer. Link: See Scale

### 3.11 FAQ
- Purpose: handle the remaining objections.
- H2: Questions about the Review

**Lovable or Claude can scan my app for free. Why pay for a Review?**
Run the free scan first. It catches common patterns. It can't tell you whether a signed-in user can read another customer's data, whether payments fail quietly, or whether to fix or rebuild. That judgement is what you pay for. If we find nothing useful, you pay nothing.

**What access do you need?**
Usually read-only access to your code repository, plus a walkthrough of your live or preview app. We don't change anything during the Review. If you want an NDA first, we sign it before we see your code. [VERIFY: V5]

**I'm not technical. Will I understand the report?**
Yes. Each finding says in plain words what can go wrong, who it affects and how to fix it. On the findings call we go through it together, and you can bring your developer or co-founder. [VERIFY: V3]

**What happens after the Review?**
You get a fixed quote for the fixes. You can hire us to do them, with the Review fee credited, or give the report to your own developer. If the code needs replacing, we scope it as a fixed-price Build. The report is yours either way.

**I launch in less than two weeks. Is 5 days too slow?**
Tell us your launch date on the scoping call. We check the parts that matter most for launch first: who can see which data, sign-up and payments. The full Review takes about 5 working days, and every finding is ranked by risk, so you know exactly what to fix before your users arrive. (Phase 4, Oct 16: answer grown to 40–60 words for AEO; facts from 09 and §3 of this page.)

**Which tools and stacks do you review?**
Apps built with Lovable, Bolt, v0, Cursor and other AI coding tools, and apps built by freelancers or agencies. Common stacks include React, Next.js, Node.js, Python and PostgreSQL, with Supabase, Firebase and Stripe. [VERIFY: V11]

**Who will review my app?**
Senior engineers and a product lead from our team in Alexandria, Egypt. The people on your findings call are the people who reviewed your code. [VERIFY: V16]

**Do you sign a contract with US clients?**
Yes. Every engagement starts with a clear contract, and you own the report and any code we write. [VERIFY: V9 entity and governing law]

### 3.12 Book inline
- Purpose: book without leaving the page.
- H2: Book your scoping call
- Body: Pick a time. In 30 minutes we'll understand your app, agree scope and give you a fixed fee. The Review starts only when you say yes. [VERIFY: V19]
- Embed: Cal.com inline, event `review-intro` (fields in 1.5).
- Microcopy under embed: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Text link: Not sure yet? Take the 3-minute launch check
- Privacy line: Booking runs on Cal.com. Cal.com may set its own cookies when you book. [VERIFY: V15]
- Fallback: Can't use the calendar? Email hello@discoverdev.ai or WhatsApp us.

---

## 4. Launch check quiz (/launch-check)

- **Slug:** /launch-check
- **SEO title (60):** Is My AI-Built App Ready to Launch? Free Check | DiscoverDev
- **Meta (148):** Answer 10 quick questions about your Lovable, Bolt, v0 or Cursor app. See your launch risks in security, payments, code and operations in 3 minutes.
- **H1:** Is your AI-built app launch-ready?
- **Primary CTA:** Start the check (then the result-mapped CTA)

### 4.1 Intro screen
- Purpose: start the quiz with low effort.
- H1: Is your AI-built app launch-ready?
- Body: 10 questions. About 3 minutes. You see your result straight away, with no email needed. If you're not sure of an answer, pick "Not sure". That's useful too.
- CTA: Start the check
- Microcopy: Your answers stay in your browser unless you ask us to email your report.
- Visual: progress bar preview "1 of 10". No illustration needed.

### 4.2 Questions (one per screen, single select, progress "Question n of 10")

Buttons: "Next" · "Back" · last screen: "See my result". Each option is a radio button with a text label.

Scoring: each option has risk points (pts). Some options raise a flag: **CRIT** (critical risk) or **REBUILD** (ownership or architecture blocker). Q1–Q3 are context only (0 pts) and shape the result text and urgency.

**Q1. What did you build your app with?** (context)
- Lovable · 0
- Bolt · 0
- v0 · 0
- Cursor or another AI coding tool · 0
- A freelancer or agency · 0
- My own team · 0
- Something else · 0

**Q2. How many real people use it today?** (context)
- Nobody yet. It's a demo. · 0
- Testers or a waitlist · 0
- Up to 100 active users · 0
- More than 100 active users · 0

**Q3. When do you want to launch?** (context; passed to booking as target_launch)
- Within 2 weeks · 0
- Within a month · 0
- In 1–3 months · 0
- Just exploring · 0

**Q4. Can each signed-in user see only their own data?**
Helper: In Supabase this is called Row Level Security (RLS). In Firebase it's called Security Rules.
- Yes. Rules are on for every table, and we've tested them. · 0
- Rules are on for some tables. · 2
- No, or I haven't checked. · 3 · CRIT
- I'm not sure what this means. · 3 · CRIT

**Q5. Are any secret keys in the code that runs in the browser?**
Helper: For example a Stripe secret key, an OpenAI key or a Supabase service key.
- No. Secret keys live only on the server. · 0
- Maybe. I'm not sure. · 2
- Yes. · 3 · CRIT
- I don't know how to check. · 2

**Q6. Who can create an account?**
- Only people we invite. · 0
- Anyone, and they must confirm their email first. · 0
- Anyone, with no email check. · 1
- I'm not sure. · 2

**Q7. Does your app take payments?**
- Not yet. · 0
- Yes, and our server confirms each payment with the payment provider. · 0
- Yes, but I'm not sure how payments are confirmed. · 2
- Yes, and the app trusts the payment screen without checking. · 3 · CRIT

**Q8. Where does the code live, and who owns the accounts?**
- In a code repository and accounts I own (code, hosting, database). · 0
- Only inside the AI builder. I haven't exported it yet. · 1
- In my repository, but some accounts belong to a freelancer or agency. · 2
- I don't have access to the code. · 3 · REBUILD

**Q9. If you hired a new developer tomorrow, could they work on it within a day?**
- Yes. It's tidy and documented. · 0
- Probably, with some help. · 1
- Hard to say. Fixes often break other things. · 2
- No. Every change breaks something else. · 3 · REBUILD

**Q10. If something broke at 2 a.m., would you know, and could you undo it?**
Helper: Think of error alerts, backups and a separate test copy of the app.
- Yes. We have all three. · 0
- We have some of them. · 1
- None yet. · 2
- I'm not sure. · 2

Maximum score: 19.

### 4.3 Scoring rules [VERIFY: V18 starting thresholds]

Apply in this order. The first rule that matches sets the segment.
1. **Rebuild candidate:** any REBUILD flag (Q8 option 4 or Q9 option 4).
2. **High risk, don't launch yet:** 2 or more CRIT flags, or a total of 11 or more.
3. **Fix first:** 1 CRIT flag, or a total of 5–10.
4. **Launch-ready, polish only:** a total of 0–4 and no CRIT flag.

Urgency modifier: if Q3 = "Within 2 weeks" or "Within a month" and Q2 is not "Nobody yet", add the urgency line to the result.

Dimension bars (score shown as text label and bar, never color alone):
- Security and data: Q4 + Q5 + Q6 (max 8)
- Payments: Q7 (max 3)
- Code and ownership: Q8 + Q9 (max 6)
- Operations: Q10 (max 2)
- Label per bar: 0–33% of max = "Low risk" · 34–66% = "Some risk" · 67–100% = "High risk"

Top 3 risks: list the three highest-scoring answers (ties: Q4, Q5, Q7, Q8, Q9, Q6, Q10). Each uses the line below.

Risk lines (shown when that answer scores 2 or 3):
- Q4: "Users may be able to see each other's data. Turn on and test data rules for every table."
- Q5: "A secret key may be readable in the browser. Move it to the server and replace the key."
- Q6: "Anyone can sign up without confirming their email. Add email confirmation before launch."
- Q7: "Payments may not be confirmed on your server. Check each payment with your payment provider before you give access."
- Q8: "You don't fully control your code or accounts. Move them into your own name before you launch."
- Q9: "The code is hard to change safely. Get a second opinion on what to keep and what to replace."
- Q10: "You may not know when something breaks, or be able to undo it. Add error alerts, backups and a test copy."

Analytics: `quiz_started`, `quiz_question_answered`, `quiz_completed`, `quiz_lead_submitted` (names and properties per `07-tech-spec.md` §9.3).

### 4.4 Result screens (focus moves to the result H2; no live region, per `04-ux-ia.md` §8.4)

Shared layout: segment name (H2) → one-line meaning → dimension bars → "Your top risks" (up to 3 risk lines) → recommendation → CTA → email capture (1.6).

**Result A · Launch-ready, polish only**
- H2: Launch-ready, with some polish
- Meaning: Your answers show no critical risks.
- Body: Good work. Your basics look covered. Before launch, double-check the items below, and test them with a second account that isn't yours. If you want a senior team to confirm it before real money moves, a short call will tell you if a Review is worth it.
- Recommendation → offer: free report by email + Insights guide + clarity call (soft)
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Text link: Read the guide: How to take an AI-built app to production (show only when the pillar is live)

**Result B · Fix first**
- H2: Fix first, then launch
- Meaning: You have one or two gaps that could hurt you after launch.
- Body: Much of your app looks ready, but the risks below can hurt real users and real payments. A Launch-Ready Review confirms what's really there, ranks it, tells you whether it can be fixed without a rebuild, and gives you a fixed price for the fix.
- Recommendation → offer: Launch-Ready Review
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge

**Result C · High risk, don't launch yet**
- H2: High risk. Don't launch yet.
- Meaning: Your answers show several critical gaps, such as data that other users may see or keys the browser can read.
- Body: This doesn't mean starting over. It means the next step is to find exactly what's open and close it before real users arrive. Book a Review and tell us your launch date. We'll start with the checks that matter most.
- Urgency line (if modifier applies): "You plan to launch soon with real users. Book this week."
- Recommendation → offer: Launch-Ready Review, marked urgent; clarity call the same week
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Secondary text link: Talk it through first: book a free clarity call

**Result D · Rebuild candidate**
- H2: You may need to rebuild, or take back control first
- Meaning: Your answers point to an ownership or code-structure problem, not just a few fixes.
- Body: If you can't reach your code, or every change breaks something, fixing issues one by one gets expensive. The first step is a plain conversation: what you own, what's worth keeping, and whether to test the idea again or build it properly.
- Recommendation → offer: clarity call, then Validate or Build
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Text links: See Validate · See Build

Restart link (all results): Retake the check

---

## 5. Validate (/validate)

- **Slug:** /validate
- **SEO title (53):** Product Discovery Services for Startups | DiscoverDev
- **Meta (135):** Validate your idea in 1–2 weeks: market read, scope, clickable prototype and a fixed build estimate. The fee credits toward your build.
- **H1:** Validate: discovery before code (Phase 4b, Oct 16: two-line headline rule from the design review; the full keyword phrase stays in the title tag and the lead.)
- **Primary CTA:** Book a free clarity call

### 5.1 Hero
- Purpose: state outcome, timeline, model and CTA.
- Eyebrow: I have an idea.
- H1: Validate: discovery before code
- Body: In 1–2 weeks you learn if the idea is worth building, what to build first and what it will cost. You leave with a market read, a product scope, a clickable prototype and a fixed build estimate.
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Proof chip: 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct) · Read our reviews on Clutch
- Visual: a clickable-prototype screen next to a one-page scope sheet. [ASSET]

### 5.2 Who it's for, and not for
- Purpose: filter fit.
- H2: Is Validate right for you?
- For: You have an idea and some conviction, but no product yet. You want to know what to build before you spend on code. You need a real number for your build budget or your investors.
- Not for: You already have a working prototype. Start with a Launch-Ready Review. · You need a team on an existing product. See Scale.

### 5.3 Outcomes
- Purpose: benefits, not features.
- H2: What changes after Validate
- Outcome 1 · A clear decision: Build, change direction or stop, based on a market read, not a guess.
- Outcome 2 · A smaller, sharper first version: A scope that says what to build first and what to leave out.
- Outcome 3 · A number you can plan with: A fixed estimate for the Build, so your budget is real.

### 5.4 What's included
- Purpose: list deliverables.
- H2: What's included
- Market and competitor read
- Product scope
- Clickable prototype
- Fixed build estimate

### 5.5 Process and timeline
- Purpose: show the 1–2 week strip.
- H2: How the 1–2 weeks work
- Discover: We learn your idea, your users and your market. We read the competition.
- Plan: We agree what the first version must do, and what can wait.
- Prototype: We design a clickable prototype you can show to users and investors.
- Estimate: We give you a fixed price and timeline for the Build.
- Visual: 4-step strip labeled "Week 1" and "Week 2" (exact split per project).

### 5.6 Pricing model
- Purpose: reduce cost anxiety.
- H2: How much does Validate cost?
- Answer-first (40 words): Validate is a fixed fee, agreed before we start. [PRICE: P2] If you go on to build with us, the full fee credits toward your Build. You own the research, scope and prototype either way.

### 5.7 Team shape
- Purpose: answer "who does the work".
- H2: Who works on it
- Body: A product lead and a designer, with an engineer who checks that the scope can be built in time and on budget. [VERIFY: V16 Validate team shape] The same team can carry on into Build. No handoff gaps.

### 5.8 Proof
- Purpose: show discovery work that led to decisions.
- H2: Discovery work we've done
- Item · Athkado, Saudi Arabia: Rapid market studies and feasibility sprints that led to build, pivot or shelve decisions. [CONSENT: Athkado]
- Item · Fantacalcio, Italy: Market entry research for a move into Egypt. [CONSENT: Fantacalcio]
- Item · Entrepreneurs in Kuwait, Switzerland, the UK and Spain: Market research, go-to-market and discovery.
- Quote: "Perfect timing, always available for any questions or concerns, great professionalism. The job was done perfectly, and it was on point, giving us the info we needed. 100% recommendable." Roberto, Fantacalcio [CONSENT: Fantacalcio]
- Quote: "I will become a regular customer going forward now." Andrei Chejneanu, entrepreneur, UK [CONSENT: Andrei]

### 5.9 Ownership and handover
- Purpose: quiet reassurance.
- H2: You own what we make
- Body: The research, the scope and the prototype are yours. Full IP, no lock-in, clear contract from day one. Take them to any team you like.

### 5.10 FAQ
- H2: Questions about Validate

**What do I get at the end of Validate?**
Four things: a market and competitor read, a product scope, a clickable prototype and a fixed build estimate. Together they tell you what to build first, what to leave out and what it will cost. If you build with us, the Validate fee credits toward your Build.

**How long does Validate take?**
1–2 weeks. The length depends on how much research your market needs and how big the first version is. We agree the timeline on the clarity call, before you pay anything.

**What if the answer is "don't build it"?**
Then Validate did its job. Sometimes the right decision is to change direction or stop. It's much cheaper to learn that in 1–2 weeks than after months of building.

**Do I have to build with you afterwards?**
No. You own the scope, prototype and estimate. If you do build with us, the full Validate fee credits toward your Build.

**How much does Validate cost?**
A fixed fee, agreed before we start, so you know the full cost before you commit. It depends on how much research your market needs and how big the first version is. You get the number on a free 30-minute clarity call, and if you build with us, the full fee credits toward your Build. [PRICE: P2 still open: no number]

### 5.11 Final CTA
- H2: Test the idea before you pay for the build
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Text link: Already have a prototype? Start with a Launch-Ready Review

### 5.12 Validate v4 layout (2026-10-16, same pattern as §6.12, approved by Mohamed)
Order: Hero → Journey stepper → Decision board (signature) → Outcomes + What's included → Fit → Statement → Price, team and ownership (document) → Proof → FAQ → Final CTA. §5.3–5.7, §5.9 copy reused verbatim.
- **Decision board** (replaces the §5.5 step strip):
  - H2: 1–2 weeks to a clear decision.
  - Lead: §5.3 outcome 1 body ("Build, change direction or stop, based on a market read, not a guess.").
  - Inputs: the four §5.5 steps, each paired with its §5.4 deliverable (Discover → Market and competitor read · Plan → Product scope · Prototype → Clickable prototype · Estimate → Fixed build estimate).
  - Verdict panel label: "Your decision". Options: "Build" (link "See Build" → /build) · "Change direction" · "Stop".
- **Statement:** bright "It's much cheaper to learn that in 1–2 weeks" dim "than after months of building." (§5.10 FAQ wording).
- **Document:** "Price, team and ownership" · header "Validate" · "Agreed before we start" (§5.6 wording); columns §5.6, §5.7 (+ §0.8 About link), §5.9.

---

## 6. Build (/build)

- **Slug:** /build
- **SEO title (55):** Fixed-Price MVP Development in 8–12 Weeks | DiscoverDev
- **Meta (149):** A senior team takes your MVP from scope to production in 8–12 weeks at a fixed price. Or we rebuild your AI prototype properly. You own all the code.
- **H1:** Build: an MVP in 8–12 weeks (Phase 4b, Oct 16: two-line headline rule from the design review; the full keyword phrase stays in the title tag and the lead.)
- **Primary CTA:** Book a free clarity call (+ "Have a prototype? Start with a Review")

### 6.1 Hero
- Eyebrow: I'm ready to build.
- H1: Build: an MVP in 8–12 weeks
- Body: A senior team designs, builds, tests and deploys your product in 8–12 weeks, at a fixed price. You launch with real users on a live product, and you own all of it.
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Text link: Have a prototype already? Start with a Launch-Ready Review
- Visual: product screens across web and mobile, from a real project with consent. [ASSET] [CONSENT]

### 6.2 Who it's for, and not for
- H2: Is Build right for you?
- For: You know what you want to build, from Validate or your own research. You want a fixed price and a date. Or your AI-built prototype needs to be rebuilt properly.
- Not for: You're still testing the idea (see Validate). · Your app mostly works and needs fixes (start with a Review). · You need ongoing capacity on a live product (see Scale).

### 6.3 Outcomes
- H2: What you get from a Build
- Outcome 1 · A live product with real users: Not a demo. Deployed, tested and ready for real data and payments.
- Outcome 2 · A fixed price and a date: You know the cost and the timeline before we start.
- Outcome 3 · Code you own and can grow: Handed over so another developer can pick it up. Full IP, no lock-in. [VERIFY: V6]

### 6.4 What's included
- H2: What's included
- Product design (UX and UI)
- Development: web, mobile and APIs
- QA and testing
- Deployment to your cloud
- Weekly results you can see and use

### 6.5 Process and timeline
- Purpose: week-by-week strip.
- H2: How a Build runs
- Discover: Confirm the product is the right one. If you did Validate, this is already done.
- Plan: Roadmap, tech choices and team agreed before any code.
- Build: Sprints with results every week. AI does the heavy lifting. Senior engineers own the quality.
- Ship and stay: Deploy, monitor and keep improving. The same team stays after launch if you want it to.
- Visual: 8–12 week strip with phases; label "exact timeline set in your plan".

### 6.6 Pricing model
- H2: How is a Build priced?
- Answer-first (45 words): Every Build has a fixed price, agreed before we start. We set it from a clear scope, which comes from Validate, a Launch-Ready Review or our own scoping. If you did Validate or a Review with us, that fee credits toward the Build. [PRICE: P3]

### 6.7 Team shape
- H2: Who builds it
- Body: A full squad: a tech lead, developers, QA, a product manager and a designer. Senior engineers own the quality, and a person is responsible for every line that reaches your users. The team that scopes your product builds it. No handoff gaps.

### 6.8 Proof
- H2: Products we've built
- Case · Rushr (live in November): A US home-services marketplace, built from zero in 16 weeks. Post a job, get matched to the nearest verified contractor, pay through Stripe Connect escrow, message in real time. [METRIC] [CONSENT: Rushr] Link: Read the Rushr case study
- Case · Athkado, Saudi Arabia: Furniture e-commerce from market study to launch: discovery, UX and UI, development, an AI recommendation engine and AR to see furniture at home. [CONSENT: Athkado]
- Quote: "Professional work and great communication." Nojoud Alarfaj, Athkado [CONSENT: Athkado]
- Note: Rushr took 16 weeks with a full product team; the 8–12 week range is the standard Build. Don't place them side by side without that context.

### 6.9 Ownership and handover
- H2: You own all of it
- Body: Full IP, no lock-in and a clear contract from day one. Your code lives in your repository and your cloud accounts. [VERIFY: V6] When we hand over, another developer can pick it up.

### 6.10 FAQ
- H2: Questions about Build

**How long does it take to build an MVP?**
A Build takes 8–12 weeks from agreed scope to a live, production-ready product with real users. The exact timeline depends on the scope and is fixed in your plan before we start. You see working results every week, not only at the end.

**How do you keep the price fixed?**
We agree a clear scope before we start, then price that scope. Discover and Plan come first: we define the product, the roadmap, the tech and the team before any code, so the price rests on a scope we both understand. You see results every week, so progress against that scope is never a surprise. (Phase 4: replaces the V21 sentence, which stays omitted.)

**Can you take over my AI-built or freelancer-built prototype?**
Yes. Start with a Launch-Ready Review. It tells you what to keep and what to replace. If a rebuild is the right call, we scope it as a fixed-price Build and credit the Review fee.

**What happens after launch?**
We deploy, monitor and keep improving. If you want a team to stay, Scale gives you a dedicated squad on a monthly retainer. If you'd rather take it in-house, we hand over.

**How do your prices compare with US agencies?**
Our engineering hub is in Alexandria, Egypt, so a senior team costs a fraction of typical agency rates. [VERIFY: V14] We compete on seniority and a fixed price.

**Who owns the code?**
You do. Full IP, no lock-in and a clear contract from day one. Everything we build for you is yours, so you can keep working with us, bring in another team or take it in-house whenever you choose. We stay as long as you want us to, not because you're locked in.

### 6.11 Final CTA
- H2: Get a fixed price and a date for your product
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Text link: Have a prototype? Start with a Launch-Ready Review
- Related reading (when live): Fix or rebuild your AI app · Who owns your app's code

### 6.12 Build v4 layout (pilot, 2026-10-16; hooks approach approved by Mohamed, brand guidelines v4 colour rhythm)
Order: Hero → Journey stepper → Week-by-week track (signature) → Outcomes + What's included → Fit → Statement → Price, team and ownership (document) → Proof → FAQ → Final CTA. §6.5–6.7 and §6.9 copy is reused verbatim inside the new blocks.
- **Journey stepper** (shared by /validate, /build, /scale): label "Validate, Build, Scale" (screen readers: "Where this service fits"). Stages reuse §2A.6 (name, "who" line, duration). Current stage tag: "You are here". Other stages link to their page.
- **Week-by-week track** (replaces the §6.5 step strip):
  - H2: 8–12 weeks. Results every week.
  - Label: Example: a 10-week Build. Your exact timeline is set in your plan before we start.
  - Phases (titles and bodies = §6.5) with range labels: Discover "Week 1" · Plan "Week 2" · Build "Weeks 3–9" · Ship and stay "Week 10 and after".
  - Row labels: "Week" · "Weekly demo with you" (§2A.2) · end marker "Live with real users" (§6.3 outcome 1 wording).
- **Statement** (navy band): bright "Senior engineers own the quality," dim "and a person is responsible for every line that reaches your users." (§6.7 wording).
- **Price, team and ownership** (one white document replaces §6.6, §6.7, §6.9 sections):
  - H2: Price, team and ownership
  - Document header: "Build" · "Agreed before we start" (§6.6 wording)
  - Columns: §6.6 title + answer · §6.7 title + body + "About DiscoverDev and where we work" link (§0.8) · §6.9 title + body.

---

## 7. Scale (/scale)

- **Slug:** /scale
- **SEO title (52):** Dedicated Development Team on Retainer | DiscoverDev
- **Meta (149):** A dedicated squad of developers, QA and a PM that stays with your product. Monthly retainer. Engineering hub in Egypt, working in Arabic and English.
- **H1:** Scale: a team that stays (Phase 4b, Oct 16: two-line headline rule from the design review; the full keyword phrase stays in the title tag and the lead.)
- **Primary CTA:** Book a free clarity call

### 7.1 Hero
- Eyebrow: It's working. Grow it.
- H1: Scale: a team that stays
- Body: A dedicated squad of developers, QA and a product manager joins your product on a monthly retainer. They own the roadmap and sprints with you. You keep control.
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Visual: team photo from the Alexandria hub. [TEAM]

### 7.2 Who it's for, and not for
- H2: Is Scale right for you?
- For: Your product is live and growing. You need more capacity than your team has, without hiring one person at a time. You want a team that learns your product and stays.
- Not for: You need a single project with a fixed end (see Build). · You run a software house and need engineers under your brand (see Partners).

### 7.3 Outcomes
- H2: What a dedicated squad gives you
- Outcome 1 · Steady delivery: A team that plans, builds and ships, with results every week.
- Outcome 2 · Less management for you: The squad's PM runs the backlog and sprints with you.
- Outcome 3 · A team that stays: The people who learn your product keep working on it.

### 7.4 What's included
- H2: What's included
- Developers, QA and a product manager, sized to your roadmap
- Roadmap and sprint ownership, shared with you
- Data, ML and AI work when you need it
- Monthly reporting on what shipped [VERIFY: V22 reporting cadence]

### 7.5 Process
- H2: How it works month to month
- Month 1 · Join: The squad learns your product, code and goals.
- Every sprint · Ship: Plan, build, test, release. Results every week.
- Every month · Review: What shipped, what's next, and whether the team size is right.

### 7.6 Pricing model
- H2: How is Scale priced?
- Answer-first (38 words): Scale is a monthly retainer, based on the size of your squad. [PRICE: P4] Dedicated teams start with a 6-month minimum, so the team has time to learn your product and deliver.

### 7.7 Team shape
- H2: Who's on the squad
- Body: From one specialist to a full squad: a lead, developers, QA, a PM and a designer. Skills cover full-stack, mobile, AI and ML, computer vision, data and QA. Senior engineers own the quality.

### 7.8 Proof
- H2: Teams that stayed
- Item · Upscend, UK: A 12-month embedded partnership. A dedicated PM and engineering team owning roadmap, backlog and sprints, supporting growth with US and UK enterprise clients. [CONSENT: Upscend]
- Item · Pyramakerz, Egypt: Data analysis, ML, automation and data engineering for an EdTech platform with 20,000+ students. [CONSENT: Pyramakerz]
- Item · Arheb, Saudi Arabia: An embedded data and ML team for the first Saudi smart ride-sharing platform. [CONSENT: Arheb]
- Line: Athkado, Upscend, Arheb and Pyramakerz all expanded scope with us. [CONSENT: all four]
- Link: Read how EduLens cut AI costs by 60–90%

### 7.9 Ownership and handover
- H2: Your product, your control
- Body: You keep control of the roadmap, the code and the accounts. Full IP, no lock-in, clear contract from day one. [VERIFY: V6]

### 7.10 FAQ
- H2: Questions about Scale

**What is the minimum commitment for a dedicated team?**
Six months. That gives the squad time to learn your product and deliver steadily. After that, the retainer continues month to month on the terms in your contract.

Note: "continues month to month" needs [VERIFY: V22].

**Who manages the team?**
The squad's product manager runs the backlog and sprints together with you. You set priorities. You keep control of the roadmap.

**Can the squad grow or shrink?**
Yes. We review the team size with you every month. A squad can start with one specialist and grow to developers, QA, a product manager and a designer as your roadmap needs it. The minimum commitment is six months, which gives the squad time to learn your product and deliver steadily. [V22 notice period still omitted]

**How quickly can a squad start?**
[VERIFY: V22 start time]

**What hours and languages do you work in?**
Our hub is in Alexandria, Egypt (GMT+2). Our day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English.

### 7.11 Final CTA
- H2: Add a team that stays with your product
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Related reading (when live): Reduce LLM API costs · EduLens case study

### 7.12 Scale v4 layout (2026-10-16, same pattern as §6.12, approved by Mohamed)
Order: Hero → Journey stepper → Squad and loop (signature) → Outcomes + What's included → Fit → Statement → Price, team and ownership (document) → Proof (+ retention line, case link) → FAQ → Final CTA.
- **Squad and loop** (replaces the §7.5 step strip):
  - H2: Steady delivery. A team that stays. (§7.3 outcome titles)
  - Roster label: "From one specialist to a full squad" (§7.7 wording). Roles: Lead · Developers · QA · PM · Designer (§7.7 wording).
  - Loop: §7.5 steps with their meta ("Month 1 · Join", "Every sprint · Ship", "Every month · Review"); the sprint ring reads Plan · Build · Test · Release (§7.5 "Plan, build, test, release.").
- **Statement:** bright "A team that stays." dim "The people who learn your product keep working on it." (§7.3 outcome 3).
- **Document:** "Price, team and ownership" · header "Scale" · "Monthly retainer" (§7.6 wording); columns §7.6, §7.7 (+ §0.8 About link), §7.9.

---

## 7.13 How we work (/how-we-work; linked from the §6.12 journey stepper on Validate, Build and Scale: "See how every step works"; added Oct 16, Mohamed: simple home section + a detailed page)
- SEO title: How We Work: The DiscoverDev Way | DiscoverDev · Meta: How every DiscoverDev project runs: discover, plan, build, ship and stay. The frameworks we use and what you get, for new and existing products.
- Hero · Eyebrow: The DiscoverDev Way · H1: How we work · Lead: Every project runs the same way, whether you start from an idea or from code you already have. AI drafts the work, a senior engineer signs off every release, and you see progress every week. · CTA: Book a free clarity call
- Two ways in · Lead: Greenfield or brownfield, you join the same four steps. Only the start is different.
  - Greenfield · New product: Start with Validate: 1–2 weeks of discovery that ends with a tested prototype and a fixed build estimate. · Link: See Validate
  - Brownfield · Existing code: Start with a Launch-Ready Review: a senior team reviews your app in about 5 working days and gives you a ranked fix list and a plain verdict. · Link: See the Review
- Who does what · H2: AI drafts it. A senior engineer signs it. · Body: In every step, AI does the routine work so it moves fast. Senior engineers make the decisions, review every change and sign off every release, so speed never costs you quality. · Visual: the §2A.4 journey (Discover → AI drafts → A senior signs → Live).
- The four steps · H2: One team from idea to after launch · each step: time, body and "You get" from §2A.5, then "Frameworks we use": each framework with a text-free drawing of what it produces (E2 direction) and its one-line explanation (§2A.5).
- FAQ · H2: Questions about how we work
  - How long does each step take? Discover takes 1–2 weeks. Build takes 8–12 weeks to a production-ready product. Plan happens before any code, and Ship & Stay continues after launch with the same team.
  - Can you work on an existing codebase? Yes. Brownfield work starts with a Launch-Ready Review of what you have, then we fix it or build it properly. We also do legacy modernization and cloud migration.
  - Which frameworks do you use? Jobs to be Done and Design Sprints in Discover. User Story Mapping, Shape Up, RICE and Architecture Decision Records in Plan. Weekly sprints and a Definition of Done in Build. DORA metrics, continuous discovery and HEART metrics after launch.
  - How do I see progress? You get a demo every week, and every release is signed off by a senior engineer before it reaches your users.
  - Who owns the code? You do. You own everything we build: full IP, no lock-in, and a clear contract from day one.
- Closer: home §2A.11 band.

## 8. Partners (/partners)

- **Slug:** /partners
- **SEO title (58):** White-Label Development Partner for Agencies | DiscoverDev
- **Meta (146):** White-label delivery and staff augmentation for software houses. Senior engineers working under your brand, your process and your client contract.
- **H1:** Partners: white-label development (Phase 4b, Oct 16: two-line headline rule from the design review; the full keyword phrase stays in the title tag and the lead.)
- **Primary CTA:** Book a partner call

### 8.1 Hero
- Eyebrow: For software houses and agencies
- H1: Partners: white-label development
- Body: Your extra senior team, under your brand. Take on more projects with white-label delivery or add engineers to your team with staff augmentation. We work in your tools and your process.
- CTA: Book a partner call
- Microcopy: 30 minutes · NDA on request [VERIFY: V5]
- Visual: two-column graphic "White-label" / "Staff augmentation" (HTML labels). 

### 8.2 Why partners use us
- H2: Why software houses work with us
- Capacity: Say yes to more projects without hiring first.
- Seniority: Senior engineers own the quality. AI speeds up the work.
- Time overlap: GMT+2. Our day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead.
- Arabic and English: Useful for Gulf clients and bilingual products.
- Range: Web, mobile, APIs, AI and ML, data, e-commerce, QA, DevOps and cloud.

### 8.3 Engagement models compared
- H2: White-label or staff augmentation?
- Answer-first (44 words): Choose white-label when you want us to deliver a whole project under your brand. Choose staff augmentation when you want engineers working inside your team, managed by you. Both start with an NDA, and the IP goes to you. [VERIFY: V13 for staff augmentation]

| | White-label delivery | Staff augmentation |
|---|---|---|
| What you get | A project delivered under your brand | Engineers who join your team |
| Who manages day to day | We do, inside your process | You do |
| Who your client sees | Your brand only [VERIFY: V13] | Your team |
| Minimum term | Per project [VERIFY: V13] | 3 months |
| IP and confidentiality | NDA, IP to you | NDA, IP to you [VERIFY: V13] |
| Price | [PRICE: P5] | [PRICE: P5 "from $X per engineer per month"] |

Launch build (2026-10-16, G-04 default "add column, no price"; needs Mohamed's OK on the starred strings):
- Third column "Dedicated team": What you get "A dedicated squad of developers, QA and a PM" · Who manages "Our PM, together with you" · Who your client sees "Agreed on the partner call"* · Minimum term "6 months" · IP "NDA, IP to you" · Price "Monthly retainer".
- Price row (P5 → model only): "Quoted per project"* · "Monthly, per engineer"* · "Monthly retainer".
- Table caption (visually hidden)*: "White-label delivery, staff augmentation and dedicated team compared".
- Proof (§8.6, anonymized): adds "An ML engineer placed for 3 months on restaurant procurement", Saudi Arabia.

### 8.4 How we work inside your process
- H2: How we fit into your process
- Your tools: your repo, your tracker, your chat.
- Your process: your PM, your sprint rhythm, your code review rules.
- Your client: no direct client contact unless you allow it. [VERIFY: V13]
- Your people: non-solicit clause in the contract. [VERIFY: V13]

### 8.5 Vetting and quality
- H2: How we keep quality high
- Body: AI does the heavy lifting. Senior engineers own the quality, and a person is responsible for every line that reaches users. QA and code review are part of how we deliver. [VERIFY: V13 code review standard]

### 8.6 Proof
- H2: Partners we work with
- Item · Amstadd, UK: A software house partner. We deliver white-label websites and mobile apps. [CONSENT: Amstadd]
- Item · Jumlaty, Saudi Arabia: An ML engineer placed for 3 months on restaurant procurement. [CONSENT: Jumlaty]
- Item · Nile Support, USA: AI agents for call operations, a landing page and staff augmentation. [CONSENT: Nile Support]
- Quote: "The quality of their work is top-notch." CEO, Nile Support [CONSENT: Nile Support]

### 8.7 FAQ
- H2: Questions from partners

**Who owns the IP in a white-label project?**
You do. White-label work runs under an NDA, and the IP goes to you so you can pass it to your client. The details are in the contract from day one.

**What is the minimum term for staff augmentation?**
Three months. That gives the engineer time to learn your codebase and deliver. White-label work is scoped per project. [VERIFY: V13]

**What if an engineer isn't the right fit?**
[VERIFY: V13 replacement terms]

**How fast can engineers start?**
[VERIFY: V22]

**Will you contact my clients?**
Not unless you ask us to. You own the client relationship. [VERIFY: V13]

### 8.8 Final CTA
- H2: Add senior capacity under your brand
- CTA: Book a partner call
- Microcopy: 30 minutes · NDA on request [VERIFY: V5]

---

## 9. Work index (/work)

- **Slug:** /work
- **SEO title (56):** Case Studies: MVPs, Marketplaces & AI Apps | DiscoverDev
- **Meta (141):** Products we took from idea or prototype to production: EdTech AI agents with 60–90% lower AI costs, a US home-services marketplace, and more.
- **H1:** Products we helped ship
- Note: at launch only EduLens is a full case study. Add Rushr in November. Reorder the meta's list when Rushr goes live.

### 9.1 Intro
- Purpose: frame the work.
- H1: Products we helped ship
- Body: From AI agents to marketplaces, for founders and teams on 4 continents. Each case shows the problem, what we did and what changed.

### 9.2 Case cards
- Purpose: metric-led cards (pattern from Robusta, done honestly).
- Card · EduLens · EdTech · Egypt: "Three AI agents. 60–90% lower AI cost." Link: Read the EduLens case study
- Card · Rushr · Home services · USA (November): "A marketplace built from zero in 16 weeks." [METRIC] Link: Read the Rushr case study
- Card · Customer-support AI agent (anonymized, no client; added Oct 16) · tags: Support automation · AI agents · figure: "Once" / "per unique question" · summary: "When many users ask the same question at once, the agent answers it once and shares the result. LLM cost grows with unique questions, not total requests." No link (no case page yet). Source: 09 case studies.
- No filter until there are 6 or more cases.
- Visual: card with one figure in large HTML text, tags, 1-line summary. No "coming soon" cards.

### 9.3 Projects (Oct 16, Mohamed: story rows with Validate / Build / Scale filters; replaces the grouped list and the case cards)
- Filter (buttons, pressed state; without JS all rows show): All · Validate · Build · Scale. Group label for screen readers: Filter by stage.
- Each row: drawing (or approved screen), stage chip, industry, country, title, then "The brief" (only where 09 states it), "What we did", "Result" (only where 09 states one), the client's own review where that client gave one (approved quotes, §2A.8c), and a link where a page exists ("Read the case study" → /work/edtech-ai-agents; white-label → /partners).
- Rows and every line: `src/content/copy/en/projects.ts` (15 projects from 09 Portfolio and Case studies; titles anonymized). Not listed: the US home-services marketplace (D-07), the US therapy practice (clinician consent), research collaborations.

### 9.4 Reviews strip
- Section removed Oct 16 (design review: one line under a section heading reads as a hole; the rating already sits in the footer and on service pages). Was: H2 How clients rate us (Phase 4, Oct 16: no quotes until consent, so the heading promises a rating, not quotes; switch back to "What clients say" when quotes ship)
- Two quotes from the proof bank (not used elsewhere on the page) + "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct)" + link "Read our reviews on Clutch".

### 9.5 Final CTA
- H2: Want results like these for your product?
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step
- Text link: Have a prototype? Start with a Launch-Ready Review

---

## 10. Case study: EduLens (/work/edulens)

- **Slug:** /work/edulens
- **SEO title (48):** EduLens: Cutting AI Costs 60–90% Across 3 Agents
- **Meta (145):** Caption-first ingestion, cross-user caching, model routing and token trimming cut EduLens' AI costs by 60–90%. What we changed and why it worked.
- **H1:** EduLens: three AI agents, 60–90% lower AI cost
- **Anonymized H1 (live at /work/edtech-ai-agents, D-06; Oct 16 two-line rule, the metric stays the display stat):** Three AI agents for an EdTech platform
- **Primary CTA:** Book a free clarity call ("AI costs too high?")
- Publish condition: [CONSENT: EduLens name, quote and details] and [VERIFY: V12]. Show a visible "Updated" date.

### 10.1 Hero
- Purpose: lead with the result.
- Breadcrumb: Home › Work › EduLens
- H1: EduLens: three AI agents, 60–90% lower AI cost
- Body: EduLens is an EdTech company in Egypt. We built three AI agents for its learners and teams, then cut the cost of running them by 60–90%.
- Headline metric: 60–90% lower AI cost [VERIFY: V12 baseline and period]
- Visual: product screens of the three agents (client-approved) [ASSET] [CONSENT]

### 10.2 Snapshot
- Purpose: make the case scannable (sidebar on desktop, top on mobile).
- Client: EduLens
- Industry: EdTech
- Region: Egypt
- What we built: three AI agents
- Services: AI and ML, AI agents, software development
- Stack: Python, OpenAI, LangChain, RAG, Whisper, YouTube API, Node.js
- Timeline: [VERIFY: V12]
- Team: [VERIFY: V12]

### 10.3 Summary (answer-first for AEO)
- H2: How did EduLens cut its AI costs by 60–90%?
- Answer (58 words): We changed how the agents read and reuse content. They use video captions before paying for transcription, reuse results across users instead of recomputing them, send each task to the model and provider that fits it, and trim what goes into each prompt. Together these cut AI costs by 60–90%, and cached content now costs close to nothing. [VERIFY: V12]

### 10.4 Challenge
- Purpose: frame in the client's terms.
- H2: The challenge
- Body: EduLens wanted AI agents that help students learn and help the team support them: answer questions, turn videos into lessons and quizzes, and guide each learner. AI that does this well can also be expensive to run, because every video and every question calls a model. The agents had to be practical and scalable, with running costs that stayed under control as usage grew. [VERIFY: V12 client's own framing]

### 10.5 What we built
- Purpose: concrete evidence.
- H2: What we built
- **Support chatbot:** answers student and user questions using EduLens content (retrieval-augmented generation, or RAG: the model looks up the right content before it answers).
- **Video-to-lesson and quiz generator:** turns a video into a structured lesson and a quiz.
- **Student learning assistant:** helps each learner work through the material.
- Visual: simple architecture sketch: Video → captions or transcription → lesson + quiz → cache → agents. Labels in HTML, not in the image. [ASSET]

### 10.6 Approach: the decisions that cut cost
- Purpose: show how we think. All five descriptions to be confirmed by the EduLens tech lead [VERIFY: V12].
- H2: The five changes that cut cost
- **1. Captions first.** Many videos already have captions. The agents use those first, and only transcribe audio when there are none. Transcription is paid work, so skipping it where possible saves money on every video. [VERIFY: V12 mechanism]
- **2. Reuse across users.** When one student's request has already been processed, the next student gets the saved result instead of a new model call. Content that's already cached costs close to nothing to serve again.
- **3. The right model for each task.** Not every task needs the largest model. Each task goes to a model and provider that fits it, so the larger models are used where they are needed.
- **4. Shorter prompts.** AI providers charge by the amount of text sent and received. We trimmed what goes into each request to what the model actually needs.
- **5. Faster transcription.** When audio does need transcribing, long files are split into chunks and transcribed with Whisper in parallel. [VERIFY: V12 whether this cut cost, time or both]

### 10.7 Results
- Purpose: numbers with baseline and timeframe.
- H2: The results
- 60–90% lower AI cost [VERIFY: V12 baseline: cost per what, measured over which period, across which agents]
- Cached content served at close to zero marginal cost
- Three AI agents in production
- Visual: bar pair "Before" vs "After" only if V12 gives real figures; otherwise text only. Add a text summary for any chart.

### 10.8 Client quote
- H2 (visually hidden): What the client said
- Quote: "They focused on building solutions that were practical, scalable, and aligned with our users' needs."
- Attribution: Youssef, CEO, EduLens [CONSENT: EduLens quote; photo optional with consent]

### 10.9 What's next
- Purpose: "teams that stay" proof.
- H2: What's next
- Body: [VERIFY: V12 ongoing work, or remove this section]

### 10.10 CTA
- H2: AI costs too high?
- Body: If your AI bill grows faster than your users, we can look at where the cost goes and what to change.
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step

### 10.11 Related
- Rushr case study (when live)
- Guide: Reduce LLM API costs (when live)
- Service: Scale

---

## 11. Case study shell: Rushr (/work/rushr)

- **Slug:** /work/rushr
- **SEO title (50):** Rushr: Home-Services Marketplace Built in 16 Weeks
- **Meta (145):** How we built Rushr, a US home-services marketplace, from zero in 16 weeks: Uber-style dispatch, Stripe Connect escrow, messaging and admin tools.
- **H1:** Rushr: a home-services marketplace, built in 16 weeks
- **Primary CTA:** Book a free clarity call ("Building a marketplace?")
- Publish condition: do not publish until every [METRIC] has a real number with baseline and period, and [CONSENT: Rushr] is on file. Planned for November.

### 11.1 Hero
- Breadcrumb: Home › Work › Rushr
- H1: Rushr: a home-services marketplace, built in 16 weeks
- Body: Rushr is a US marketplace for home services. We built it from zero with a full product team in 16 weeks: post a job, get matched to the nearest verified contractor, pay through escrow.
- Headline metric: [METRIC: one outcome, e.g. jobs completed, match time or payment volume, with period]
- Visual: app screens (customer, contractor, admin). [ASSET] [CONSENT: Rushr]

### 11.2 Snapshot
- Client: Rushr
- Industry: Home services marketplace
- Region: USA
- Type: Greenfield (built from zero)
- Timeline: 16 weeks
- Team: Full product team [VERIFY: roles]
- Stack: Java Spring Boot, React Native, PostgreSQL, Stripe Connect, AWS, Docker, CI/CD

### 11.3 Summary (answer-first)
- H2: How long does it take to build a home-services marketplace?
- Answer: Rushr went from zero to a working marketplace in 16 weeks with a full product team. That covered customer and contractor apps, automatic matching to the nearest verified contractor, escrow payments with Stripe Connect, real-time messaging and admin tools. [METRIC: launch result]

### 11.4 Challenge
- H2: The challenge
- Body: [VERIFY: client's own framing of the problem, in 2–3 sentences]

### 11.5 What we built
- H2: What we built
- **Uber-style dispatch:** a customer posts a job and the app matches it to the nearest verified contractor.
- **Escrow payments:** money is held with Stripe Connect and released to the contractor when the job is done. [VERIFY: release rule]
- **Real-time messaging** between customers and contractors.
- **Admin operations** to run the marketplace day to day.

### 11.6 Approach
- H2: Key decisions
- [VERIFY: 2–4 decisions and why, e.g. matching logic, escrow flow, mobile stack choice]

### 11.7 Results
- H2: The results
- [METRIC: result 1 with baseline and period]
- [METRIC: result 2]
- [METRIC: result 3]

### 11.8 Client quote
- [CONSENT: Rushr quote, name, role]

### 11.9 What's next
- [VERIFY: ongoing work]

### 11.10 CTA
- H2: Building a marketplace?
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step

### 11.11 Related
- EduLens case study · Service: Build · Guide: Fix or rebuild your AI app (when live)

---

## 12. About (/about)

- **Slug:** /about
- **SEO title (50):** About DiscoverDev: Senior Product Team, Egypt & US
- **Meta (144):** A product and engineering company with a US presence and an engineering hub in Alexandria, Egypt. Senior teams that stay. 5.0 across 11 reviews.
- **H1:** About DiscoverDev
- **Primary CTA:** Book a free clarity call
- See [DECISION: D1]. Written in company voice, no founder profile.

### 12.1 Why we exist
- Purpose: the human reason, founder to founder.
- H1: About DiscoverDev
- Lead: Most teams just build what you ask for. We help you build the right thing, then ship it fast, and you own all of it.
- Body: DiscoverDev is a product and engineering company. [VERIFY: V1 "Founded in 2024."] The "Discover" in our name is how we work: before we write code, we make sure it's the right thing to build. Then a senior team builds it, ships it and stays. We have clients on 4 continents.
- Visual: team photo at the Alexandria hub. [TEAM]

### 12.2 What we believe
- Purpose: the three pillars, with one example each.
- H2: What we believe
- **Discover first.** Building the wrong thing fast is still waste. Example: feasibility sprints for Athkado in Saudi Arabia led to clear build, pivot or shelve decisions. [CONSENT: Athkado]
- **Senior teams that stay.** One team from first call to launch and after, with no handoff gaps. Example: a 12-month embedded team for Upscend in the UK. [CONSENT: Upscend]
- **AI that pays for itself.** AI does the heavy lifting, and senior engineers own the quality. Example: EduLens cut its AI costs by 60–90%. [CONSENT: EduLens]

### 12.3 Team
- Purpose: real people.
- H2: The team
- Body: In-house engineers, product managers and designers in Alexandria, Egypt, plus a network of specialists for research, design and prototyping. We work as single specialists or as full squads: a lead, developers, QA, a PM and a designer.
- Grid: [TEAM: photo, name, role, years of experience, LinkedIn] [VERIFY: V16]
- Note: "In-house engineers" is inferred from "Hub: Egypt. Full-stack, AI/ML…" in master. Confirm wording.

### 12.4 Where we are
- Purpose: answer "can I reach you?" for US and Gulf visitors.
- H2: Where we work
- Body: Our engineering hub is in Alexandria, Egypt, and we have a presence in Texas, USA. Alexandria is on GMT+2. Our working day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English. [VERIFY: V8 call hours] [VERIFY: V9 Texas entity wording]
- Visual: time-overlap strip: US East · UK · Alexandria · Riyadh · Dubai, with shared hours shaded and labeled in text.

### 12.5 Proof in numbers
- H2: Track record
- 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct) · Read our reviews on Clutch
- Clients on 4 continents
- AI in production across multiple clients
- Clients who expanded scope with us: Athkado, Upscend, Arheb, Pyramakerz [CONSENT: all four]

### 12.6 How we work
- Purpose: set expectations.
- H2: How we work
- **Discover:** define the right product.
- **Plan:** roadmap, tech and team before code.
- **Build:** short sprints with results every week. AI does the heavy lifting; senior engineers own the quality.
- **Ship and stay:** deploy, monitor and keep improving.
- Line: A person is responsible for every line that reaches your users. You own everything: full IP, no lock-in, clear contract from day one.

### 12.7 What we do
- H2: What we can build
- Product strategy and discovery · Product design (UX and UI) · Web, mobile and API development · AI and ML (agents, Arabic and English chatbots, document processing, computer vision, recommendations) · Data engineering and analytics · E-commerce and marketplaces · QA, DevOps and cloud · Technical consulting and code audits · Dedicated teams

### 12.8 Our own product (optional)
- H2: We build our own products too
- Body: Yawmy Care is our own platform for nurseries and childcare: parents, teachers and management in one place, with billing and multi-location support. It launches in 2027. [VERIFY: V17]

### 12.9 Final CTA
- H2: Talk to the team
- CTA: Book a free clarity call
- Microcopy: 30 minutes · No pitch · Leave with a next step

---

## 13. Book (/book)

- **Slug:** /book
- **SEO title (56):** Book a Launch-Ready Review or Clarity Call | DiscoverDev
- **Meta (143):** Book a 5-day Launch-Ready Review of your app, or a free 30-minute clarity call. No pitch. Pick a time that works for you in the US or the Gulf.
- **H1:** Book a review or a free clarity call
- Header: minimal (logo + "Back" link). No sticky bar.

### 13.1 Choice
- Purpose: pick the right call in one tap.
- H1: Book a review or a free clarity call
- Tab 1 (default) · Launch-Ready Review: "For an app that works in the demo but isn't ready to launch. Start with a free 30-minute scoping call. You get a fixed fee before anything starts." [VERIFY: V19]
  - Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Tab 2 · Clarity call: "For an idea, a new build, a growing product or anything else. 30 minutes, no pitch."
  - Microcopy: 30 minutes · No pitch · Leave with a next step
- Partner variant (?type=partner): heading "Book a partner call" · "For software houses and agencies looking at white-label delivery or staff augmentation." · Microcopy: 30 minutes · NDA on request [VERIFY: V5]

### 13.2 Calendar
- Embed: Cal.com inline (`review-intro`, `clarity-call` or `partner-call`). Fields in 1.5.
- iframe title: "Booking calendar"
- Time zone line: "Times show in your time zone."
- Loading: "Loading available times…"
- Error: see 1.4.

### 13.3 What happens on the call
- H2: What happens on the call
- We ask what you built, or plan to build, and what worries you.
- We tell you plainly what we'd do, and what we wouldn't.
- You leave with a next step, and a fixed price if a Review or project fits.
- Who you'll meet: "A senior member of our product team." [TEAM: photo, name] [VERIFY: V16]

### 13.4 Terms and risk reversal
- No pitch.
- No useful findings, no charge (Launch-Ready Review).
- NDA on request. [VERIFY: V5]

### 13.5 Trust strip
- 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct) · Read our reviews on Clutch
- Quote: "Professional work and great communication." Nojoud Alarfaj, Athkado, Saudi Arabia [CONSENT: Athkado]
- Quote: "I will become a regular customer going forward now." Andrei Chejneanu, entrepreneur, UK [CONSENT: Andrei]

### 13.6 Other ways to reach us
- H2: Prefer to write?
- Email us: hello@discoverdev.ai
- WhatsApp us: [WHATSAPP]
- "We reply within 1 business day." [VERIFY: V7]
- "We work in Arabic and English."

### 13.7 Privacy line
- "Booking runs on Cal.com. We use your answers only to prepare for your call. [VERIFY: V15] Cal.com may set its own cookies when you book. Read our privacy policy." [VERIFY: V15]

---

## 14. Booking confirmed (/book/confirmed)

- **Slug:** /book/confirmed (noindex, excluded from sitemap)
- **SEO title (27):** You're Booked | DiscoverDev
- **Meta:** not needed (noindex)
- **H1:** You're booked

### 14.1 Confirmation
- H1: You're booked
- Body: Your call is on [date and time, in your time zone]. We've emailed you the invite.
- Buttons: Add to Google Calendar · Add to Outlook · Download .ics
- Status message (`role="status"`): "Booking confirmed."

### 14.2 Before the call
- H2: Before the call (5 minutes)
- Have your app link ready, or "not live yet".
- If you can, prepare read-only access to your code. Optional. [VERIFY: V5]
- Write down the 3 things that worry you most about launch.
- Bring your co-founder or developer if you like.

### 14.3 What happens next
- H2: What happens next
- 1 · The call: 30 minutes. We listen, ask questions and tell you what we'd do.
- 2 · Your quote: a fixed fee and scope within [VERIFY: V7 X hours] of the call.
- 3 · The Review starts: when you say yes. About 5 working days to findings. [VERIFY: V3]
- (Clarity-call variant: step 2 = "Your next step: a written summary and, if it fits, a fixed quote.")

### 14.4 While you wait
- H2: While you wait
- Read the EduLens case study: how three AI agents got 60–90% cheaper to run
- Read the guide: How to take an AI-built app to production (when live)

### 14.5 Change of plans
- "Need a different time? Use the reschedule link in your email."
- "Questions before the call? WhatsApp us or email hello@discoverdev.ai."

---

## 15. Insights hub (/insights)

- **Slug:** /insights
- **SEO title (47):** Guides for Shipping AI-Built Apps | DiscoverDev
- **Meta (145):** Plain guides for founders with an AI-built app: taking it to production, the security holes to close, a Lovable launch checklist, fix or rebuild. (Phase 4: matches the four live guides; widen as new guides publish.)
- **H1:** Guides for shipping AI-built apps (Phase 4b, Oct 16: two-line headline rule from the design review; the full keyword phrase stays in the title tag and the lead.)

### 15.1 Intro
- Purpose: say what the hub covers.
- H1: Guides for shipping AI-built apps
- Body: Plain guides on taking an app built with Lovable, Bolt, v0, Cursor or a freelancer to production. What breaks, what to check, when to fix and when to rebuild, and what it costs.

### 15.2 Featured guide
- Card: **How to take an AI-built app to production.** The founder's guide: what breaks, what to check, fix or rebuild, real costs and timelines. Link: Read the guide (pillar: /insights/ai-app-to-production; publish in November)

### 15.3 Topic filters
- All · Security · Supabase · Payments · Fix or rebuild · Code ownership · AI costs
- Empty filter state: "No guides on this topic yet. Try another topic, or take the launch check."

### 15.4 Article cards
- Card format: title · 1-line summary · read time · "Updated [date]"
- Planned titles (show only when published):
  - The security holes AI-built apps ship with (C1)
  - Is Lovable production-ready? A launch checklist (C2)
  - Fix or rebuild your AI-built app? (C3)
  - What a vibe code audit costs (C4)
  - Supabase Row Level Security for AI-built apps (C5)
  - Who owns your app's code? (C6)

### 15.5 Quiz banner (after first row of cards)
- H2: Is your app launch-ready?
- Body: 10 questions, 3 minutes, an instant result.
- Link button (outline): Take the 3-minute launch check

### 15.6 Newsletter
- See 1.6 (Insights newsletter).

### 15.7 Final CTA
- H2: Want a senior team to check your app?
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge

### 15.8 Article template strings (for /insights/[slug])
- Byline: "By the DiscoverDev team" [DECISION: D1; switch to a named author if approved]
- Dates: "Published [Month D, YYYY] · Updated [Month D, YYYY]"
- Takeaways box heading: "Key takeaways"
- Contents heading: "On this page"
- In-body CTA (after the problem section): "Not sure where your app stands? Take the 3-minute launch check."
- End CTA card: "Want a senior team to check it? Book a Launch-Ready Review." + primary microcopy
- Related heading: "Read next"

---

## 16. 404 page

- **SEO title (28):** Page Not Found | DiscoverDev
- **Status:** returns HTTP 404. noindex.
- **H1:** We can't find that page
- Body: The link may be old or mistyped. Our site has a new layout, so some old links have moved.
- Links (as a short list):
  - Go to the home page
  - See the Launch-Ready Review
  - See our work
  - Read the guides
- CTA: Book a Launch-Ready Review
- Microcopy: About 5 working days · From $1,490, credited to your fix · No useful findings, no charge
- Help line: "Looking for something specific? Email hello@discoverdev.ai."
- Visual: `$ cd /page-not-found` motif in the code style, decorative only.

---

## 17. Proof-check log (run against the master source doc = `context/09-proof.md`, 2026-10-15)

- Client quotes: all 6 used quotes match master verbatim. Every one carries a [CONSENT] tag. Michelle and Lea quotes left out (exclamation marks).
- Numbers used: 5.0 across 11 reviews · 4 continents · 60–90% (EduLens) · 16 weeks (Rushr) · 20,000+ students (Pyramakerz) · 12 months (Upscend) · 3 months (Jumlaty, staff augmentation minimum) · 6 months (dedicated team minimum) · 1–2 weeks (Validate) · 8–12 weeks (Build) · about 5 working days (Review). All trace to master.
- Fixed in this pass: removed "most often stop" (Review scope), "most founders don't know", "usually fixable without a rebuild", "own every decision", "every engagement includes QA", "ships every sprint", "clean enough for any developer", "work with us today", "many scanners are free", "we'll say so" (not a stated policy), "pay safely". Validate proof H2 narrowed from "4 continents" to "Discovery work we've done". Tagged staff-aug NDA/IP and privacy promises.
- Checked: 0 em-dashes, 0 exclamation marks, all titles ≤60 and metas ≤155 characters.
- Still open: every [VERIFY], [PRICE], [CONSENT], [METRIC], [TEAM], [WHATSAPP] and [ASSET] tag in section 0.5. Nothing tagged should go live until resolved or cut.
