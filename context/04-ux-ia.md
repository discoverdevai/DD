# 04 · UX + Information Architecture

Status: build-ready · Owner: Mohamed · Updated: 2026-10-15
Read with: `03-copy.md` (all words on the page), `05-seo-aeo.md` (titles, metas, H1s, schema, links), `07-tech-spec.md` (implementation, events), `11-open-decisions.md` (blocked items, prefixed `D-xx`).

## 0. Rules for the builder
- [ ] Do not write copy. Every visible string comes from `03-copy.md`, section name = blueprint section name below. Missing copy → render nothing in prod, log a TODO in the PR.
- [ ] Ship no placeholder pages, "coming soon" cards, lorem ipsum, stock team photos, or unconsented client names/logos/quotes.
- [ ] One page, one primary action. One filled button per screen. Everything else = outline button or text link.
- [ ] Mobile first at 375 px. Hero H1 + sub-line + primary CTA + risk microcopy fit in the first mobile viewport.
- [ ] WCAG 2.2 AA on every template (checklist in `10-launch-checklist.md` §4.4).
- [ ] Logical CSS properties only. RTL-safe from day one (§10).
- [ ] Every CTA is a `CtaLink` with a `ctaId` (§6.3). It fires `cta_clicked` (spec in `07-tech-spec.md` §9).

## 1. Sitemap (all routes)

Legend: `idx` = indexable + in sitemap · `noidx` = `<meta name="robots" content="noindex, follow">`, excluded from sitemap · `gate` = ships only when the gate is met.

```
/                                         Home                         idx   v1
├─ /launch-ready                          Offer: Launch-Ready Review   idx   v1  (money page)
├─ /validate                              Service                      idx   v1
├─ /build                                 Service                      idx   v1
├─ /scale                                 Service                      idx   v1
├─ /partners                              Partners (software houses)   idx   v1
├─ /work                                  Collection: case studies     idx   v1
│  ├─ /work/edulens                       Case study                   idx   v1  gate: client consent (D-06)
│  └─ /work/rushr                         Case study                   idx   gate: metrics + consent (D-07); Nov if ready, else Dec
├─ /insights                              Hub: collection              idx   v1
│  ├─ /insights/ai-app-to-production      Pillar                       idx   v1
│  ├─ /insights/ai-built-app-security-holes     C1                     idx   v1
│  ├─ /insights/lovable-launch-checklist        C2                     idx   v1
│  ├─ /insights/fix-or-rebuild-ai-app           C3                     idx   v1 (by Nov 30 at latest)
│  ├─ /insights/vibe-code-audit-cost            C4                     idx   Dec
│  ├─ /insights/reduce-llm-api-costs            C9                     idx   Dec
│  ├─ /insights/supabase-rls-ai-apps            C5                     idx   Q1 2027
│  ├─ /insights/who-owns-your-app-code          C6                     idx   Q1 2027
│  ├─ /insights/developer-left-half-built-app   C7                     idx   Q1 2027
│  ├─ /insights/lovable-vs-bolt-vs-cursor       C8                     idx   Q1 2027
│  ├─ /insights/hire-lovable-developer          C10                    idx   Q1 2027
│  └─ /insights/rss.xml                   RSS feed                     —     v1
├─ /about                                 About                        idx   v1
├─ /launch-check                          Quiz (lead magnet)           idx   v1
├─ /book                                  Booking (Cal.com inline)     idx   v1
│  └─ /book/confirmed                     Booking confirmation         noidx v1
├─ /privacy                               Privacy notice               idx   v1  (footer only)
├─ /terms                                 Website terms                idx   v1  (footer only)
├─ /404                                   Not found (HTTP 404)         noidx v1
├─ /ar/…                                  Arabic mirrors               —     Q1 2027 (not built in v1, see §1.2)
└─ system: /robots.txt  /sitemap-index.xml  /llms.txt  /og/[...slug].png  /.well-known/security.txt  /favicon.svg
```

### 1.1 Launch scope (Nov 24)
- [ ] Required: `/`, `/launch-ready`, `/validate`, `/build`, `/scale`, `/partners`, `/work`, `/insights`, pillar, C1, C2, `/about`, `/launch-check`, `/book`, `/book/confirmed`, `/privacy`, `/terms`, `/404`, system files.
- [ ] Required unless gate fails: `/work/edulens` (consent). If consent is missing at T-7, publish it anonymized (`anonymizedAs: "EdTech AI platform, Egypt"`) with no quote.
- [ ] Optional by Nov 30: C3, `/work/rushr`.
- [ ] `/work` must list ≥1 published case. If 0 → hide `Work` from nav and footer; keep route out of build.

### 1.2 `/ar` reserved paths (Q1 2027)
- [ ] Do not build `/ar` routes in v1. Locale registry marks `ar` as `status: 'hidden'` (`07-tech-spec.md` §8).
- [ ] Reserved, in order: `/ar`, `/ar/launch-ready`, `/ar/book`, `/ar/insights/ai-app-to-production`, `/ar/insights/ai-built-app-security-holes`, `/ar/insights/fix-or-rebuild-ai-app`, then the rest.
- [ ] Rule: an `/ar/x` URL exists only when its Arabic translation passed native review. No machine-translated or empty pages. Untranslated pages have no `/ar` URL and no hreflang.
- [ ] Optional before Q1 2027: Arabic summary block on `/launch-ready` and `/book` (D-13).

## 2. URL + slug rules
- [ ] Lowercase, hyphen-separated, ASCII, English words. Arabic pages reuse the English slug under `/ar`.
- [ ] No trailing slash, no `.html`, no dates, no IDs. Canonical form: `https://discoverdev.ai/launch-ready`.
- [ ] Max depth 2 (`/section/slug`). Insights are flat under `/insights/`; pillar relationship shows in breadcrumbs, not URL.
- [ ] Slug ≤ 5 words, ≤ 60 chars path. Contains the primary keyword naturally (see `05-seo-aeo.md` §1).
- [ ] Case studies: `/work/[client-slug]`. Anonymized case: descriptive slug (e.g. `/work/edtech-ai-agents`).
- [ ] URLs never change after launch without a 301 in `public/_redirects` and an internal-link update.
- [ ] Query params allowed only for state, never for content: `/book?type=review|clarity|partner`, `quiz_segment`, UTMs. Canonical strips all queries.
- [ ] UTMs: lowercase, external links only. Never on internal links.
- [ ] In-page anchors: kebab-case, stable: `#how-it-works`, `#what-we-check`, `#pricing`, `#guarantee`, `#faq`, `#book`, `#contact`.

## 3. Navigation

### 3.1 Primary nav (desktop)
| Order | Label | Target | Notes |
|---|---|---|---|
| 1 | Review | `/launch-ready` | |
| 2 | Services ▾ | disclosure `<button aria-expanded>` | Submenu links in DOM (crawlable): Validate `/validate`, Build `/build`, Scale `/scale`, Partners `/partners`. Each item: label + 1-line "who it's for" (copy) |
| 3 | Work | `/work` | Hidden if 0 published cases |
| 4 | Insights | `/insights` | |
| 5 | About | `/about` | |
| btn | Book a Review | `/book?type=review` | Filled button. `ctaId: nav_book_review` |

- [ ] Header: small, opaque, sticky. Hide on scroll down, show on scroll up (300–400 ms transition, reduced-motion = no animation, instant show).
- [ ] `aria-current="page"` on the active item (and on Services when on a child page).
- [ ] Labels fixed. Never use "Solutions", "Resources", "Portfolio", "Contact us", "Get started".
- [ ] Submenu: opens on click/Enter/Space, closes on Esc and outside click, focus returns to the button. No hover-only menus.

### 3.2 Mobile nav (< 64rem / 1024 px, per `06-design-system.md` §9.1)
- [ ] Bar: Logo · `Book a Review` button (`/book?type=review`, `ctaId: navm_book_review`) · menu button (`aria-expanded`, label "Menu").
- [ ] Menu = full-height `<dialog>` sheet: 5 items (Services expanded inline as a list), then primary CTA, then email + WhatsApp (same order as footer).
- [ ] Focus trapped in the dialog, Esc closes, focus returns to the menu button. Body scroll locked while open.

### 3.3 Sticky mobile CTA bar
- [ ] Shows after the hero leaves the viewport (IntersectionObserver). Label "Book a Review" → `/book?type=review`, `ctaId: sticky_book_review`.
- [ ] Hidden on `/book`, `/book/confirmed`, `/launch-check`, `/404`, legal pages, and while any input/select has focus.
- [ ] One CTA only. Never covers the focused element: set `scroll-padding-block-end` ≥ bar height and `scroll-padding-block-start` ≥ header height.

### 3.4 Footer nav (≤ 15 internal links)
| Column | Links |
|---|---|
| Services | Launch-Ready Review · Validate · Build · Scale · Partners |
| Work | EduLens (if live) · Rushr (if live) · All work |
| Insights | AI-built app to production (pillar) · All insights · Launch check |
| Company | About · Book a call (`/book`) · Privacy · Terms |
| Contact block | `hello@discoverdev.ai` · WhatsApp (if D-09) · "Texas, USA · Alexandria, Egypt" · Clutch profile link (outbound) · Language switcher (hidden until `/ar` live) |

- [ ] Contact block order is identical on every page, including `/book` and `/book/confirmed` (WCAG 3.2.6 Consistent Help).
- [ ] No social icon wall. LinkedIn link only if company page exists (D-29).

### 3.5 Breadcrumbs
- [ ] Visible breadcrumbs + `BreadcrumbList` on depth-2 pages only: `/work/*`, `/insights/*`. Depth-1 pages: none (Home › Page adds nothing). This overrides the "every non-home page" note in research.
- [ ] Patterns:
  - Case study: `Home › Work › {Client}`
  - Pillar: `Home › Insights › {Pillar short title}`
  - Cluster: `Home › Insights › AI-built app to production › {Article short title}`
- [ ] Every segment except the last is a link. Last = `aria-current="page"`, not a link. `<nav aria-label="Breadcrumb">` + `<ol>`.
- [ ] Separator `›` is CSS-generated and mirrors in RTL.

## 4. Page-type blueprints
Format: `#. Section (component) → purpose`. Copy lives in `03-copy.md` under the same page + section name. CTA ids follow §6.3.

### 4.1 Home `/`
1. Header (`Header`) → fast wayfinding.
2. Hero (`Hero`) → founder problem + outcome; primary CTA "Book a Launch-Ready Review" + risk microcopy; text link "Take the 3-minute launch check"; proof chip "5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct)" + link "Read our reviews on Clutch" (rules §11). Must pass a 5-second test.
3. Proof strip (`ProofStrip`, `ClientLogos`) → "Clients on 4 continents" + consented logos only. 0 consented logos → text only.
4. Problem (3 cards) → security holes · payments and data · code that won't scale, in founder words.
5. Offer spotlight (`OfferCard`) → what you get, about 5 working days, price cue (D-01), credit toward the fix, guarantee, CTA.
6. How it works (`ProcessSteps`, 4 steps) → Book → Review (~5 days) → Findings call → Fix or Build.
7. Choose your path (`OfferGrid`) → Validate · Build · Scale · Partners cards, each with "who it's for"; card = text link to page.
8. Case highlight (`CaseStudyCard`) → EduLens "60–90% lower AI cost" + quote (if consent) → `/work/edulens`.
9. Why DiscoverDev (`PillarTrio`) → Discover first · Senior teams that stay · AI that pays for itself; small ownership line (copy: `03-copy.md` §0.4 "Ownership")
10. Team preview → real faces, names, roles (D-16, D-17) + "Texas · Alexandria · overlaps US and Gulf hours". Skip section if no photos.
11. Testimonials (`TestimonialRow`, 3 static, no carousel) → consented quotes with name, role, country; link to Clutch.
12. FAQ (`FAQ`, 5–7) → cost, timeline, code ownership, rebuild fear, tools we work with, time zones.
13. Final CTA (`CtaBand`) → primary CTA + "Not ready? Take the 3-minute launch check".
14. Footer.

### 4.2 Offer `/launch-ready` (money page)
1. Hero → "Launch-Ready Review", who it's for (AI-built or freelancer-built MVPs), primary microcopy (`03-copy.md` §0.3), CTA → `#book`.
2. Proof chip → rating text + Clutch link.
3. Is this you? (checklist, 5–6 symptoms) → self-qualification (e.g. RLS off, Stripe in test mode, can't hand code to a dev).
4. What we check (5–6 areas) → security · data and auth · payments · code quality · scalability and costs · ownership and handover.
5. What you get → redacted sample report image (D-26; omit image if not ready, keep list), prioritized fix list, fix-or-rebuild verdict, fixed quote for the fix.
6. Timeline Day 0–5 (`ProcessSteps` horizontal) → expectations.
7. Price and terms `#pricing` → price cue (D-01), credit rule, payment terms (D-02).
8. Guarantee `#guarantee` (`GuaranteeCallout`) → "No useful findings, no charge" + 1 sentence defining "useful" (D-03).
9. Proof → EduLens card + 2 relevant reviews; Rushr card when live.
10. Who it's not for → idea stage → `/validate`; funded team needing a squad → `/scale`.
11. FAQ (6–8) → free scanners vs review (FAQ #1), access needed (read-only repo), NDA, stacks covered, "launching next week" (D-20), refunds, data residency/PDPL (D-28).
12. Book `#book` → inline Cal.com `review-intro` (lazy, budget-gated; `07-tech-spec.md` §10.3). Fallback: link to `/book?type=review`. Below: "or take the launch check".

### 4.3 Service `/validate`, `/build`, `/scale`
1. Hero → outcome, timeline (Validate 1–2 weeks · Build 8–12 weeks · Scale monthly), engagement model, CTA "Book a free clarity call".
2. Who it's for / not for → fit filter.
3. Outcomes (3) → benefits, not features.
4. What's included → deliverables list.
5. Process + timeline → week strip (Validate, Build) or monthly cadence (Scale).
6. Pricing model → Validate: fixed fee, credits to Build · Build: fixed price after Validate or Review · Scale: monthly retainer (rate cue D-18). No invented numbers.
7. Team shape → roles + seniority (devs, QA, PM, designer).
8. Proof → Build: Rushr (when live) or Athkado (consent) · Scale: Upscend 12-month embedded (consent) · Validate: Athkado discovery or Fantacalcio review (consent). No consent → omit section.
9. Ownership + handover → full IP, your repo, your accounts, no lock-in.
10. FAQ (4–6).
11. Final CTA → clarity call. `/build` adds text link "Have a prototype? Start with a Launch-Ready Review" → `/launch-ready`.

### 4.4 Partners `/partners`
1. Hero → "Your extra senior team, under your brand"; 2 models; CTA "Book a partner call" → `/book?type=partner`.
2. Why partners use us → capacity, seniority, GMT+2 overlap, Arabic + English.
3. Models compared (`ComparisonTable`) → white-label vs staff augmentation: who manages, billing, minimum term (staff aug min 3 months; dedicated team min 6 months per master doc).
4. How we work inside your process → your tools, your PM, NDA, no client contact unless allowed, non-solicit.
5. Vetting + quality → seniority, QA, code review standards.
6. Proof → Amstadd (consent), partner quote, rate cue (D-18).
7. FAQ → IP assignment, replacement guarantee, ramp-up time, time zones.
8. Final CTA → partner call.

### 4.5 Work index `/work`
1. H1 + 1-line promise.
2. Case cards grid (`CaseStudyCard`: client or anonymized name, 1-line outcome, headline metric, tags region/industry) → only `status: 'published'`.
3. No filters until ≥ 6 cases.
4. Reviews block → 2 consented quotes + rating text + Clutch link (`03-copy.md` §9.4).
5. Final CTA → clarity call + text link to the Review (`03-copy.md` §9.5).

### 4.6 Case study `/work/[slug]`
1. Breadcrumbs.
2. Hero → client, 1-line outcome, headline metric (verified only).
3. Snapshot (`CaseStudyMeta`; sidebar desktop, top on mobile) → industry, region, timeline, team, services, stack.
4. Challenge → client's language.
5. Approach → 2–4 decisions and why.
6. What we built → screens/architecture figure with text summary.
7. Results (`MetricGrid`) → numbers with baseline + timeframe; `verified: true` only.
8. Client quote → name, role, photo only with consent.
9. What's next → ongoing work ("teams that stay").
10. CTA (matched) → EduLens: "AI costs too high? Book a clarity call" · Rushr: "Building a marketplace? Book a clarity call".
11. Related cases (≤ 2) + 1 related insight.
- [ ] Publish rule: challenge + approach + ≥1 verified metric + consent (or anonymized). Otherwise the page does not build.

### 4.7 Insights hub `/insights`
1. H1 + 1-line promise ("Taking AI-built apps to production").
2. Featured pillar card → `/insights/ai-app-to-production`.
3. Topic filter → none until ≥ 8 articles. Then client-side buttons (no URL change, no indexable filter URLs). Topics (fixed list): Security · Supabase · Payments · Fix or rebuild · Code ownership · AI costs.
4. Article cards (`ArticleCard`) → title, 1-line summary, read time, Updated date.
5. Quiz banner → after first row of cards → `/launch-check`.
6. Newsletter block (`03-copy.md` §1.6) → only if D-11 = ESP; else omit.
7. Final CTA → primary (Review).

### 4.8 Article `/insights/[slug]` (pillar + cluster)
1. Breadcrumbs.
2. H1, author box (name, role, photo, LinkedIn per D-16), "Published" + "Updated" dates visible.
3. Key takeaways (3–5 bullets) → skimmers + answer engines. Pillar: 150–200 word TL;DR.
4. Table of contents (`Toc`) → only if > 1,200 words.
5. Body (`Prose`) → question-phrased H2s, each opens with a 40–60 word direct answer.
6. Inline CTA after the problem section → launch check banner.
7. Clusters only: `PillarNav` link to pillar in first 200 words (in copy) and in closing paragraph.
8. End CTA → Review card (prototype-to-launch topics) or clarity call card (AI cost, discovery topics). Set via `relatedService`.
9. Related (3) → pillar + 2 siblings. No "related posts" dump beyond 3.
10. Newsletter block → only if D-11 = ESP.
- [ ] `article_read` fires per `07-tech-spec.md` §9.

### 4.9 About `/about`
1. Story → why DiscoverDev exists, founder-to-founder (company voice per D-16).
2. What we believe → 3 pillars + "build the right thing", one example each.
3. Team (`TeamGrid`) → real photos, names, roles, LinkedIn (D-17). No photos → omit section.
4. Where we are (`TimeOverlap`) → Texas presence + Alexandria hub; overlap graphic (US mornings, Gulf afternoons) with text equivalent.
5. Proof numbers → 5.0 across 11 reviews, 4 continents, consented client list. True numbers only.
6. How we work → cadence, tools, ownership.
7. Final CTA → clarity call.

### 4.10 Book `/book`
1. Minimal header → logo + "Back" link (`history.back()` if same-origin referrer, else `/`). No nav, no sticky bar.
2. H1 + choice (`BookOptions`, 2 tabs) → Launch-Ready Review intro (default) · Clarity call. Partner tab appears only with `?type=partner`.
3. Inline Cal.com embed (`CalEmbed`) → booking on this page. Reserved height. Fallback links visible until `linkReady`.
4. What happens on the call (3 bullets) + who you'll meet (photo, name; D-16).
5. Risk reversal + terms → guarantee line, no pitch, NDA on request.
6. Trust strip → rating text + 2 short consented quotes.
7. Alternatives `#contact` → email + WhatsApp (D-09) + reply-time promise only if true (D-10).
8. Privacy line → "We use your answers only to prepare the call. Privacy notice." → `/privacy`.
9. Minimal footer → contact block (same order as main footer) + Privacy + Terms.

### 4.11 Booking confirmed `/book/confirmed` (noindex)
1. Confirmation `role="status"` → "You're booked" + time in visitor time zone (from sessionStorage; if missing, "Check your email for the invite").
2. Before the call → prep checklist: app URL, optional read-only repo access, your 3 biggest worries.
3. What happens next → call → quote within 24 hours (ops promise; confirm D-40) → Review starts.
4. Optional reading → EduLens case + pillar article (2 cards).
5. Reschedule/cancel → "Use the link in your confirmation email" + WhatsApp/email.
6. Minimal footer.

### 4.12 Launch check `/launch-check`
1. Intro → H1, what you get (risk level + top fixes), "10 questions · about 3 minutes · no sign-up to see your result", Start button.
2. Quiz (`QuizApp` island) → §8.
3. Result → §8.4.
4. Below quiz (static, always visible) → 3 bullets on what we check + link to pillar. Gives crawlers and no-JS users real content.

### 4.13 Legal `/privacy`, `/terms`
1. H1, "Last updated" date, plain-language sections. Text supplied by owner (D-25). Privacy must name processors: Cloudflare, PostHog (EU), Cal.com, Web3Forms (if D-11), and cross-border transfer.
2. No CTA band. Normal header + footer.

### 4.14 404
1. H1, body, links and CTA per `03-copy.md` §16. HTTP status 404.
2. Fire no custom events. `$pageview` carries `page_type: '404'`.

## 5. Key user journeys (step flows)

### J1 · Launch-stuck founder, US
Entry: Google / AI assistant / Reddit answer / LinkedIn.
1. Lands on cluster (e.g. C2 "Is Lovable production ready") → reads key takeaways.
2. Inline CTA → `/launch-check` (`ctaId: article_c2_inline_launch_check`).
3. Completes 10 questions → result "Fix first" (top 3 risks shown).
4. Result CTA → `/book?type=review&quiz_segment=fix_first`.
5. Picks a US-morning slot in inline Cal → fills 6 fields (§7.3) → booking succeeds.
6. Redirect `/book/confirmed` → prep checklist → confirmation email.
7. Call → quote within 24 hours → paid Review.
Alt path: AI answer cites `/launch-ready` → reads price + guarantee → books in the page embed `#book`.
Success events: `article_read` → `cta_clicked` → `quiz_started` → `quiz_completed` → `booking_started` → `booking_completed`.
Risks: no price cue (D-01) → exits; mitigate with `#pricing` above the fold link in hero microcopy.

### J2 · GCC founder (KSA / UAE / KW)
Entry: referral on WhatsApp/LinkedIn, AI assistant, Google (EN).
1. Lands on `/` → sees "Arabic-speaking team" line in hero area and GCC proof (Athkado/Arheb, consent D-05).
2. → `/launch-ready` → FAQ: data residency / PDPL (D-28), time zones.
3. Two exits, both valid: WhatsApp (footer / `#contact`, `outbound_clicked`) or `/book?type=review` with Gulf-afternoon slots.
4. `/book/confirmed` → WhatsApp link shown for questions.
Success: `booking_completed` or `outbound_clicked{link_host: wa.me}`.
Risks: no WhatsApp (D-09); no Arabic (D-13). Mitigate with "Arabic-speaking team" + named person.

### J3 · Software-house partner
Entry: search "white label development partner", Clutch, referral.
1. `/partners` → models table → vetting → Amstadd proof (consent).
2. CTA "Book a partner call" → `/book?type=partner` (partner tab preselected).
3. Fields §7.3 partner → `/book/confirmed`.
Success: `booking_completed{event_type: partner_call}`.

### J4 · Referral or funded founder (Validate / Scale)
Entry: direct referral link with UTMs (`utm_source=referral&utm_medium=partner&utm_campaign={referrer}`).
1a. Idea stage → `/validate` → who it's for → process → clarity call.
1b. Funded, needs squad → `/scale` → team shape → Upscend proof → clarity call.
2. `/book?type=clarity` → fields §7.3 clarity → `/book/confirmed`.
Success: `booking_completed{event_type: clarity_call}`.

## 6. CTA system

### 6.1 Tiers
| Tier | Label (exact) | Destination | Used on | Style |
|---|---|---|---|---|
| Primary | Book a Launch-Ready Review | `/book?type=review` (or `#book` on `/launch-ready`) | Home, `/launch-ready`, prototype-to-launch articles, `/insights`, 404 | Filled |
| Primary (short) | Book a Review | `/book?type=review` | Nav button, mobile bar, sticky bar only | Filled |
| Secondary | Book a free clarity call | `/book?type=clarity` | `/validate`, `/build`, `/scale`, `/about`, `/work`, case studies, AI-cost articles | Filled on those pages (it is their primary); outline elsewhere |
| Partner | Book a partner call | `/book?type=partner` | `/partners` only | Filled |
| Low-commitment | Take the 3-minute launch check | `/launch-check` | Under hero CTA, mid-article, insights hub, final CTA bands | Text link |
| Utility | WhatsApp us · Email us | `https://wa.me/{{WHATSAPP}}` · `mailto:hello@discoverdev.ai` | Footer, `/book#contact`, `/book/confirmed` | Text link |

### 6.2 Rules
- [ ] Same action = same label everywhere. Never "Get started", "Contact us", "Learn more", "Read more".
- [ ] Microcopy under every button: exact strings in `03-copy.md` §0.3 (primary: "About 5 working days · Fixed fee, credited to your fix · No useful findings, no charge"; clarity call: "30 minutes · No pitch · Leave with a next step").
- [ ] Placement: hero, after proof/offer, final section. Pages > 4 screens: one extra mid-page CTA.
- [ ] Links: descriptive text ("Read the EduLens case study").
- [ ] All `/book` links carry state via `type` only. `lib/utm.ts` appends stored UTMs + `entry_cta` at click time (not in HTML).

### 6.3 `ctaId` convention
`{page}_{position}_{target}`; snake_case; unique per page.
- page: `home|offer|validate|build|scale|partners|work|case_{slug}|insights|article_{slug}|about|book|confirmed|quiz|nav|navm|sticky|footer`
- position: `hero|mid|band|card|inline|end|faq|result|nav|sticky|footer` (same enum as `cta_position`, `07-tech-spec.md` §9.3)
- target: `review|clarity|partner|launch_check|validate|build|scale|partners|case|article`
- Examples: `home_hero_review`, `home_hero_launch_check`, `offer_band_review`, `build_end_clarity`, `article_c2_inline_launch_check`, `quiz_result_review`.
- [ ] CI check: duplicate `ctaId` on one page = build failure (`07-tech-spec.md` §15).

## 7. Booking flow (UX)

### 7.1 Event types (Cal.com)
| `?type=` | Cal slug | Length | Purpose | Default tab |
|---|---|---|---|---|
| `review` (default) | `review-intro` | 30 min, free (D-04) | Scoping call for the paid Review | Yes |
| `clarity` | `clarity-call` | 30 min, free | General clarity call | — |
| `partner` | `partner-call` | 30 min, free | Software-house intro | Only via param |
| — | `qa-test` | 15 min, hidden | QA only, never linked | — |

### 7.2 Flow
1. Visitor clicks any booking CTA → `/book?type=x`. Unknown/missing `type` → `review`.
2. Tab matching `type` is selected. Switching tab: updates `?type=` via `history.replaceState`, re-renders the embed for that event, keeps scroll position.
3. Embed renders: desktop `month_view`, mobile (< 768 px) `column_view`. Visitor's time zone shown automatically.
4. Prefill: name/email if known from the quiz email step (D-11) — never ask twice (WCAG 3.3.7). Metadata: `utm_*`, `entry_cta`, `quiz_segment`, `page`.
5. Slot pick → form → submit → `bookingSuccessfulV2` → store `{event_type, start_time}` in sessionStorage → navigate to `/book/confirmed?type=x`.
6. Confirmation email (Cal) immediately: time, agenda, prep checklist, reschedule link. Reminders 24 h + 1 h by email. Booking answers go into the calendar invite.
7. No-show: 1 rebooking email after 1 h, 1 after 3 days, then stop (manual or Cal workflow if free; D-23).
- Availability: slots overlapping US mornings and Gulf afternoons/evenings (owner sets in Cal; D-42).

### 7.3 Booking form fields (4–6 per event, incl. "How did you hear about us?")
Exact questions and options: `03-copy.md` §1.5 (source of truth). Summary:
| Event | Fields |
|---|---|
| `review-intro` (6) | Your name* · Email* · App link (optional) · What did you build it with?* · What's blocking launch?* · How did you hear about us?* |
| `clarity-call` (5) | Your name* · Email* · Where are you now?* · What do you need most?* · How did you hear about us?* |
| `partner-call` (5) | Your name* · Email* · Company website* · Which model are you looking at?* · How did you hear about us?* |

- "How did you hear about us?" options (all events): Google · ChatGPT or another AI assistant · LinkedIn · Clutch · Referral · Reddit · Other.
- Hidden metadata (not fields): `utm_source`, `utm_medium`, `utm_campaign`, `entry_cta`, `page`, `quiz_segment`, `target_launch` (quiz Q3).
- [ ] Do not ask: phone, budget, company size, free-text boxes.
- [ ] Labels visible above fields (Cal default). Required marked. Consent line + privacy link in the Cal event description; Cal cookie line beside every embed (`03-copy.md` §1.3).

## 8. Quiz flow `/launch-check`

### 8.1 States
`intro → q1 … q10 → result → (optional) email step → CTA`
- [ ] One question per screen on all viewports. Progress: text "Question 3 of 10" + decorative bar (`aria-hidden`, mirrors in RTL; `06-design-system.md` §9.23).
- [ ] Each question = `<fieldset>` + `<legend>` + native radio group. "Next" always enabled; with no choice it shows the inline error "Choose an answer to continue" (`06` §9.23). No auto-advance (WCAG 3.2.2). "Back" button from q2 on.
- [ ] Enter submits the current step. Focus moves to the next `<legend>` on step change.
- [ ] Answers saved to sessionStorage `dd_quiz_v1` after each step. On reload with saved answers: "Continue where you left off" + "Start over".
- [ ] `quiz_started` on first "Start" click. `quiz_question_answered` per step. `quiz_completed` on result render. `quiz_lead_submitted` on email success (only if D-11 ships).
- [ ] No-JS: `<noscript>` message + links to `/book?type=review` and the pillar. The static block (§4.12 item 4) stays visible.

### 8.2 Questions, points, flags, thresholds
Source of truth: `03-copy.md` §4.2 (questions, options, points, CRIT/REBUILD flags), §4.3 (scoring order, dimension maxes, bar labels, top-3 risk lines), §4.4 (result screens). Do not re-derive. Store as typed config in `src/data/quiz.ts`; scoring in `src/lib/quiz-score.ts` (pure, unit-tested against every rule in §4.3).
Implementation ids (fixed; used in analytics and sessionStorage):
| Q | id | Q | id |
|---|---|---|---|
| 1 | `built_with` | 6 | `signup` |
| 2 | `real_users` | 7 | `payments` |
| 3 | `launch_when` | 8 | `code_access` |
| 4 | `data_rules` | 9 | `handover` |
| 5 | `keys_browser` | 10 | `operations` |
- Option values: `o1`…`oN` in the order listed in `03-copy.md`. Never send option text to analytics.

### 8.3 Segments → CTA
| Segment id | `03-copy.md` result | Filled CTA | Secondary |
|---|---|---|---|
| `rebuild_candidate` | D | Book a free clarity call → `/book?type=clarity&quiz_segment=rebuild_candidate` | Links: Validate, Build |
| `high_risk` | C | Book a Launch-Ready Review → `/book?type=review&quiz_segment=high_risk` | Text link: clarity call |
| `fix_first` | B | Book a Launch-Ready Review → `/book?type=review&quiz_segment=fix_first` | — |
| `ready_polish` | A | Book a free clarity call → `/book?type=clarity&quiz_segment=ready_polish` | Pillar link (only when live) |
- `target_launch` (Q3 option value) is stored in sessionStorage and passed to Cal metadata.
- Thresholds are v1 starting values; retune after the first 50 completions (D-39).

### 8.4 Result screen
1. Segment name (H2) + 1-line meaning. Move focus to the result H2 (`tabindex="-1"`). Do not also wrap it in a live region (double announcement); this overrides the `role="status"` note in `03-copy.md` §4.4.
2. 4 dimension bars with text labels ("Low risk" / "Some risk" / "High risk").
3. "Your top risks": up to 3 risk lines per `03-copy.md` §4.3, each + link to the matching article section where one exists.
4. Recommendation + one filled CTA (§8.3) + urgency line when the `03-copy.md` §4.3 modifier applies.
5. Optional email step (D-11): copy in `03-copy.md` §1.6. 1 field (email) + consent line + optional newsletter checkbox + honeypot. Result is never gated.
6. "Retake" text link (clears sessionStorage).

## 9. Empty, loading and error states
| Where | State | Behavior |
|---|---|---|
| `/book`, `/launch-ready#book` | Cal loading | Reserved height skeleton with text "Loading calendar…"; fallback link list visible below |
| Same | Cal `linkFailed` / timeout 10 s / JS off | Replace skeleton with: direct links `https://cal.com/{{CAL_USERNAME}}/{slug}` (open same tab) + email + WhatsApp. No error jargon |
| Same | Third-party blocked by extension | Same as `linkFailed` |
| `/book/confirmed` | No sessionStorage data (direct visit, new tab) | Generic "You're booked. Check your email for the invite." No time shown. Do not fire `booking_completed` |
| `/launch-check` | JS off | `<noscript>` + static block |
| `/launch-check` | Saved partial answers | Resume prompt (§8.1) |
| Quiz email step | Invalid email | Inline error under field, `aria-invalid="true"`, `aria-describedby`; validate on blur, clear on input |
| Quiz email step | Submit fails / offline | "Couldn't send. Your result is still on this page." + retry button + mailto link. Keep the typed email |
| Quiz email step | Success | `role="status"` "Sent. Check your inbox." |
| `/work` | 0 published cases | Route not built; nav/footer hide Work |
| `/work` | 1 case | Single card full-width + reviews block |
| `/insights` | < 8 articles | No filter UI |
| Testimonials | 0 consented | Omit section; keep rating text + Clutch link |
| Team sections | No photos | Omit section |
| Images | Fail to load | `alt` text describes content; layout keeps dimensions (width/height set) |
| Analytics blocked | — | Site works identically; no console errors |
| Unknown URL | — | 404 page, HTTP 404 |

## 10. Mobile + RTL rules

### 10.1 Mobile
- [ ] Design at 375 px first; verify 320 px reflow (no horizontal scroll at 320 px and 200% zoom).
- [ ] Body ≥ 16 px; line length 45–75 characters.
- [ ] Tap targets ≥ 44×44 px (WCAG minimum 24×24).
- [ ] Single column. Case snapshot above the story.
- [ ] No carousels. No autoplay. No hero video.
- [ ] Sticky bar rules §3.3. Header + bar never hide focus (`scroll-padding`).
- [ ] Cal embed: `column_view` below 768 px.
- [ ] Animations only inside `@media (prefers-reduced-motion: no-preference)`.

### 10.2 RTL (build now, ship `/ar` Q1 2027)
- [ ] `<html lang dir>` set in markup from the locale registry. Never via CSS. Never inferred.
- [ ] Logical properties only: `margin-inline-*`, `padding-inline-*`, `inset-inline-*`, `border-inline-*`, `text-align: start|end`. Lint blocks physical ones.
- [ ] Mirror: layout, nav order, arrows (next/back), chevrons, breadcrumb separator, progress bars, step sequences, pagination.
- [ ] Do not mirror: logo, media controls, check marks, numbers, phone numbers, URLs, emails, code blocks, charts, images, the `$` and `// .config` motif (wrap in `<bdi dir="ltr">`).
- [ ] Inputs and user text: `dir="auto"`. Latin brand/tool names inside Arabic text: `<bdi>` (DiscoverDev, Lovable, Supabase, Stripe).
- [ ] Arabic type: IBM Plex Sans Arabic (D-12), line-height ≥ 1.7, no letter-spacing, no italics for emphasis (use weight). Allow 30% text expansion; no fixed-width buttons.
- [ ] Digits: Western (0–9) for prices and metrics (`ar-u-nu-latn`), pending native review (D-35).
- [ ] Language switcher links to the equivalent page, not home. Shown only when the pair exists. No auto-redirect by IP or Accept-Language.
- [ ] Cal.com: verify RTL/locale support before `/ar`; fallback = EN widget with Arabic surrounding copy.

## 11. Proof display rules
- [ ] Rating text (approved, `03-copy.md` §0.4): "5.0 across 11 reviews" + "(Clutch, Upwork, Fiverr and direct)" + link "Read our reviews on Clutch" → `https://clutch.co/profile/discoverdev`. Never write "11 reviews on Clutch" (D-34).
- [ ] No star widgets, no `AggregateRating`/`Review` markup (`05-seo-aeo.md` §4).
- [ ] Testimonials render only when `consentToPublish: true`. Attribution: name, role, company or country. Photo only with consent.
- [ ] Logos render only when `consentToShowLogo: true`.
- [ ] Metrics render only when `verified: true`, with baseline + timeframe on case pages.
- [ ] Proof sits next to the claim it supports: EduLens metric beside "AI that pays for itself"; rating + quotes beside primary CTAs.
- [ ] Show "Updated" dates on articles and the year on case studies.
- [ ] Never claim GCC offices. Locations = "Texas, USA" (pending D-08 wording) and "Alexandria, Egypt (engineering hub)".
