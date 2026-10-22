# 11 · Open Decisions + Inputs

Status: open · Owner of every decision: **Mohamed** · Updated: 2026-10-15 (weekend launch: dates below are superseded by `00`)
How to use: close a row by writing the answer in **Decision** and the date. Claude Code reads this file before each milestone; a row marked `BLOCKS` must be closed before that page/milestone ships. Due dates map to batches in `10-launch-checklist.md` §1.2.

## 0. Already decided (do not reopen)
Full site map v1 · English live, Arabic-ready, `/ar` Q1 2027 · fresh copy (no "Website Copy v1") · Astro 7 static · Cloudflare Workers static assets (not Pages) · plain CSS tokens, logical properties · Astro Fonts API (Manrope, Rubik; Arabic TBC) · Cal.com inline on `/book` (+ `/launch-ready` if budget) · 4–6 booking fields incl. "How did you hear about us?" · PostHog EU cookieless + CF Web Analytics · no AggregateRating · FAQ markup optional · WCAG 2.2 AA · grey `#858585` large/decor only, small muted `#6B6B6B` · go-live Nov 24, deadline Nov 30 · old routes 301 · `/launch-check` 10-question quiz · primary CTA "Book a Launch-Ready Review" + guarantee line; secondary "Book a free clarity call".

## 0b. Launch defaults applied Oct 15 (weekend launch, Sat Oct 17). Swap any after launch
| ID | Default in force |
|---|---|
| D-01 | ~~No price number~~ Resolved Oct 16: "From $1,490" |
| D-02 | Payment terms stated only in the quote, not on site |
| D-03 | "No useful findings, no charge"; useful = at least one issue rated medium or higher |
| D-04 | Free 30-min `review-intro` call, then quote |
| D-05/D-06 | Logos approved by Mohamed Oct 16 (10 clients, home logo row); the 8 review quotes in 09 approved Oct 16 for the home page with names and roles. Case studies stay anonymized; Clutch 5.0 as text + link; EduLens anonymized "EdTech AI platform, Egypt" (metric kept, no name, no quote). Oct 18 decision A3(a): Youssef's quote stays with name and role (approved), but its card carries no result line, so the named CEO and logo are not tied to the 60–90% metric; Continuum Therapy Collective hidden until the therapist consents (A2); NJWAR shown without country or AI claims (A4); Ireland removed from the map (A5) |
| D-07 | Rushr: logo only on the home client row (Mohamed Oct 18, decision A1); no descriptor, no case, no metrics until consent + metrics (D-07 below) |
| D-08 | "Texas, USA" presence only; no address; no legal-recourse FAQ |
| D-09/D-10/D-40 | WhatsApp, reply-time and quote-time promises omitted |
| D-11 | Web3Forms to hello@; result never gated |
| D-16/D-17 | Company voice; no team section; articles by Organization |
| D-18/D-19 | Model only, no numbers |
| D-20 | FAQ: "Tell us your date. We review critical paths first." |
| D-21 | No founding year |
| D-22 | security.txt uses hello@ until security@ exists |
| D-24 | Cookieless PostHog, no banner |
| D-25 | Claude drafts privacy + terms from `07` §9.6; Mohamed reads before go/no-go |
| D-26 | Sample report image from a demo app, labelled "Sample from a demo app", or omit |
| D-28 | FAQ omitted |
| D-29 | sameAs: Clutch + LinkedIn company only |
| D-34 | "5.0 across 11 reviews" |
| D-36 | Claude drafts pillar, C1, C2 Fri; Mohamed reviews by 18:00 |
| D-37 | "Arabic-speaking team" line, no GCC logos |
| D-39 | Quiz scoring v1 as in `03` |
| D-41 | Drop `includeSubDomains` until the zone is checked |
| D-42 | Mon–Thu 12:00–20:00, Sun 12:00–17:00 Cairo |
| D-43 | Option (c) |
| D-12 | IBM Plex Sans Arabic (not loaded until /ar) |
Still needed from Mohamed tonight: D-14 DNS/registrar access, D-15 old routes, D-23 Cal.com account, D-33 logo SVGs.

## 1. Batch A — due Wed Oct 21

| ID | Decision | Options | Recommendation | Blocks | Owner | Decision (date) |
|---|---|---|---|---|---|---|
| D-01 | Review price cue | (a) "From $X" (b) "Typically $X–$Y" (c) no number ("fixed fee quoted per client") | (a) "From $X", USD. Market observed Oct 15 2026: Valletta from $199, Upwork gigs $490–$1,290, RapidDev $1,000 fixed ~5 days, solo specialists $2–10K pre-launch review (`05-seo-aeo.md` C4 sources). Shown prices give fewer but better leads (HockeyStack: 17.5% vs 10.3% pipeline). Pick X; do not let the site invent it | `/launch-ready` §Price, home offer card, `llms.txt`, Service `Offer` schema, C4 · M4 | Mohamed | **Resolved Oct 16: "From $1,490" (USD), Mohamed. Shown on /launch-ready, Review microcopy, llms.txt, Offer schema.** |
| D-02 | Review payment terms | (a) 100% upfront (b) 50/50 (c) on delivery | (a) 100% upfront, full refund under the guarantee. Small fixed fee; refund keeps the guarantee credible | `/launch-ready` §Price + FAQ · M4 | Mohamed | |
| D-03 | Guarantee wording + definition of "useful" | Keep "No useful findings, no charge" + 1-line definition | Keep the line. Define concretely, e.g. "If the report has no issue we rate medium severity or higher, you pay nothing." Owner checks it is operationally safe | All primary CTA microcopy, `/launch-ready` §Guarantee, `llms.txt` · M4 | Mohamed | |
| D-04 | Is booking a Review a free scoping call or a paid booking? | (a) free 30-min `review-intro`, then quote + invoice (b) paid booking in Cal | (a). Lower friction; quote within 24 h after call | Cal event setup, `/book`, Permissions-Policy (`payment`) · M4 | Mohamed | |
| D-05 | Consent requests sent (names, logos, quotes, photos, metrics) | Per client: name · logo · quote · photo · metric | Send one short consent email per client now; record answers + date in `testimonials.json` / `clients.json`. List: EduLens (Youssef), Athkado (Nojoud Alarfaj), Nile Support (CEO), Fantacalcio (Roberto), Andrei Chejneanu (UK), Lea Nechitailo (ES), Farah Alkhaldi (KW), Michelle Boehm (CH), Upscend, Amstadd, Arheb, Pyramakerz, Rushr, CTC (clinician). Answers due Nov 13 (Batch C) | Home proof/testimonials, `/work`, service proof sections · M5 | Mohamed | |
| D-14 | DNS + registrar access | Registrar login, current DNS host, DNSSEC on/off, full zone export | Confirm access and export the zone this week. Required before Nov 3 nameserver move | M3 (T-21 Nov 3) → everything after | Mohamed | |
| D-15 | Old SPA route list | Router config, GSC Pages report, backlinks (Clutch/LinkedIn/Upwork); hash routes yes/no | Export all three; tell Claude if routes are `/#/…` (hash script needed) | `_redirects`, hash map (`07-tech-spec.md` §17) · M6 | Mohamed | |
| D-16 | Named people on the site | (a) company-only (master doc: "company-led, no founder profiles") (b) named team on `/about` + "You'll talk to {name}" on `/book`; company byline on articles (c) (b) + Person bylines on articles | (c). Research: named people reduce the top offshore fear ("hidden delivery team") and Person authors help AI citation. This is site trust, not founder social marketing. Default until decided: `03-copy.md` D1 (company voice, `[TEAM]` placeholders hidden, author = Organization) | `/about` team, `/book` "who you'll meet", article bylines + `author` schema, `authors.json` · M4/M5 | Mohamed | |
| D-23 | Cal.com account setup | Plan (free), username, event slugs `review-intro`/`clarity-call`/`partner-call`/`qa-test`, reminders, no-show emails, redirect setting | Free plan; slugs as listed; email reminders 24 h + 1 h; no-show emails manual if workflows are paid. Confirm embed origins in Snippet Generator | `/book`, `/launch-ready#book`, CSP · M4 | Mohamed | |
| D-33 | Logo + brand assets | Only `assets/logo/discoverdev-logo-light-500.jpg` exists | Provide: full logo SVG (light + dark), arrow mark SVG, `logo-512.png` (square), favicon SVG, 180 px apple-touch icon. Export from source file; do not trace the JPG | Header, footer, favicon, schema `logo`, OG template · M1/M2 | Mohamed | |

## 2. Batch B — due Fri Oct 30

| ID | Decision | Options | Recommendation | Blocks | Owner | Decision (date) |
|---|---|---|---|---|---|---|
| D-08 | Texas entity | Legal name, registered or not, public address, which entity signs US contracts, governing law | Until confirmed: say "Texas, USA" presence only; no street address in schema; no "US contract / legal recourse" claims in FAQ | `/about`, footer locations, Organization `address`, `/terms`, FAQ "legal recourse" · M4 | Mohamed | |
| D-09 | WhatsApp | (a) WhatsApp Business number (b) none | (a) dedicated number, answered within the D-10 promise. 85% of UAE residents want businesses on WhatsApp (YouGov/Zbooni 2024) | Footer contact block, `/book#contact`, `/book/confirmed`, GCC journey · M4 | Mohamed | |
| D-10 | Reply-time promise | "Replies within 1 business day" / other / none | Only if sustainable every week; else omit | `/book` alternatives, confirmed page · M4 | Mohamed | |
| D-11 | Quiz email capture + provider | (a) no capture at launch (b) Web3Forms (free, 250/mo) → inbox; Mohamed replies with 1 of 4 segment templates (c) ESP + automated 4-email sequence (free tier not researched) | (b) at launch; (c) in Q1 once volume justifies it. Result is never gated. If (b): edit `03-copy.md` §1.6 consent line (drop "3 short emails" unless sent manually) and omit the Insights newsletter block until (c) | `/launch-check` email step, CSP `connect-src`, privacy notice, `quiz_lead_submitted` · M4 | Mohamed | |
| D-17 | Team photos | Real photos + names + roles + years + LinkedIn, with each person's consent | ≥ 3 people with real photos; else omit team sections (no stock) | `/about` team, home team preview, `/book` · M4 | Mohamed | |
| D-18 | Scale + partner rate cues | (a) "From $X/month" (b) "Monthly retainer, quoted after a call" | (b) at launch; revisit after 10 partner/Scale calls | `/scale` §Pricing, `/partners` §Proof · M4 | Mohamed | |
| D-19 | Validate / Build price cues | (a) numbers (b) model only | (b): Validate "fixed fee, credited to Build"; Build "fixed price after Validate or a Review" | `/validate`, `/build` §Pricing · M4 | Mohamed | |
| D-20 | Urgent case ("I launch next week") | (a) offer critical-path triage in N hours/days (b) no special offer | (a) only if operationally true; else FAQ: "Tell us your date. We review critical paths first." | `/launch-ready` FAQ · M4 | Mohamed | |
| D-21 | Founding year | 2024 (master doc says "verify") | Confirm; if unconfirmed omit `foundingDate` and any "since" copy | Organization schema, `/about` · M5 | Mohamed | |
| D-22 | Security contact mailbox | `security@discoverdev.ai` alias / use `hello@` | Create `security@` alias to Mohamed | `/.well-known/security.txt` · M6 | Mohamed | |
| D-24 | Analytics consent posture | (a) cookieless always, no banner (b) `on_reject` + 2-button banner | (a). Revisit if EU traffic grows or counsel advises (EDPB 2/2023 risk noted in `07-tech-spec.md` §9.6). Not legal advice | Privacy notice, analytics init · M4 | Mohamed | |
| D-25 | Privacy notice + website terms text | Owner-written / generator + edits / lawyer | Owner-supplied text covering items in `07-tech-spec.md` §9.6 (processors, transfers, sessionStorage keys, rights, contact). Lawyer review if budget allows. Launch blocker | `/privacy`, `/terms` · M4 | Mohamed | |
| D-28 | Data residency / PDPL FAQ answer | State actual practice | Only state what is true, e.g. "Your data stays in your cloud accounts and region." Confirm | `/launch-ready` FAQ, GCC journey · M4 | Mohamed | |
| D-34 | Clutch-only review count | How many of the 11 reviews are on Clutch | Use the approved wording in `03-copy.md` §0.4 everywhere: "5.0 across 11 reviews" + "Read our reviews on Clutch" | Hero proof chip, `/about`, `llms.txt` · M4 | Mohamed | |
| D-36 | Article drafts: owner + dates | Pillar, C1, C2 drafts; C3 by Nov 30 | Drafts (Claude) + technical review (Mohamed) for pillar, C1, C2 by **Fri Nov 6**; C3 by Nov 27 | `/insights`, pillar, C1, C2 · M5 | Mohamed | |
| D-37 | GCC trust line before `/ar` | "Arabic-speaking team" line in hero proof area + GCC proof strip (consent) | Yes. Add line to hero proof area and `/book`. GCC logos only with consent | Home hero, `/book` · M4 | Mohamed | |
| D-39 | Quiz scoring v1 sign-off | Approve `03-copy.md` §4.2–4.3 (points, flags, thresholds) or edit | Approve v1; retune after the first 50 completions | `/launch-check` · M4 | Mohamed | |
| D-40 | "Quote within 24 hours" after the call | Keep / change to 2 business days / omit | Keep only if sustainable | `/book/confirmed` "What happens next" · M4 | Mohamed | |
| D-41 | HSTS `includeSubDomains` | Keep / drop | Keep if every subdomain in the zone export serves HTTPS; else drop `includeSubDomains` | `_headers` · M6 | Mohamed | |
| D-43 | Entity line (one sentence set used verbatim on site, schema, `llms.txt`, Clutch and LinkedIn) | (a) `03-copy.md` §1.2 footer line (b) research line "…helps founders build the right product, ship it fast, and own all of it. Engineering hub in Alexandria, Egypt; clients in the US and the Gulf." (c) (a) + location sentence | (c), as written in `05-seo-aeo.md` §4. Location helps AI engines place the entity | Footer, `/about`, Organization `description`, `llms.txt`, external profiles · M5 | Mohamed | |
| D-44 | Local contracting partners (Gulf) | Name on site as declared partner / do not name | Saudi Arabia: أذكي التطويرية (Azki), Dammam; UAE: to be named. Declared partnership only, written consent, Saudi lawyer reviews the agreement; never use the partner's CR or address as ours | /ar, home FAQ, 09 | Mohamed | Oct 23: Mohamed sending Azki's full details |
| D-42 | Cal availability windows | Hours + days | Proposal (GMT+2): Mon–Thu 12:00–20:00 (covers Gulf afternoons + US East mornings 09:00–13:00 EST) and Sun 12:00–17:00 (Gulf workweek). Owner sets final | Cal setup, `/book` · M4 | Mohamed | |

## 3. Batch C — due Fri Nov 13

| ID | Decision | Options | Recommendation | Blocks | Owner | Decision (date) |
|---|---|---|---|---|---|---|
| D-05 (answers) | Consent answers received | — | Publish only approved items; record `consentRecordedAt` | Proof sections · M7 | Mohamed | |
| D-06 | EduLens case study at launch | (a) named, with quote + metric (b) anonymized "EdTech AI platform, Egypt" (c) hold to Dec (master doc plan) | (a) if consent by Nov 13; else (b). Do not hold: it is the only metric-led proof at launch | `/work/edulens`, home case highlight, `/scale` proof, C9 · M5 | Mohamed | |
| D-26 | Sample report image for `/launch-ready` | (a) redacted real report (client permission) (b) review of a demo app, labeled "Sample from a demo app" (c) none | (b) honest and fast; (a) if permission exists | `/launch-ready` §What you get · M5 | Mohamed | |
| D-29 | `sameAs` profiles | RESOLVED Oct 21 (Mohamed): Clutch and LinkedIn (https://www.linkedin.com/company/discoverdev) only; no Upwork, GitHub or Fiverr. Was: which are live | List live URLs; include only those; create GoodFirms/DesignRush in Dec | Organization schema, footer LinkedIn link · M5 | Mohamed | |

## 4. After launch (not blocking Nov 24)

| ID | Decision | Options | Recommendation | Blocks | Owner | Decision (date) |
|---|---|---|---|---|---|---|
| D-07 | Rushr case study | Publish when metrics + consent exist | Target Dec; publish in buffer week only if both land by Nov 20 | `/work/rushr`, `/build` proof | Mohamed | |
| D-12 | Arabic font | (a) IBM Plex Sans Arabic for all AR text (b) Plex headings + Rubik `arabic` subset body | (a) default; test (b) with a native reviewer | `/ar` (Q1 2027) | Mohamed | |
| D-13 | Arabic summary block before `/ar` | Yes (native-reviewed) / no | Yes on `/launch-ready` and `/book` once native-reviewed text exists | `/launch-ready`, `/book` | Mohamed | |
| D-27 | GCC payments experience claims (Mada, Apple Pay, Tabby/Tamara) | Claim / omit | Omit unless delivered in a real project | Service pages, `/ar` | Mohamed | |
| D-30 | Founder intro video (60–90 s) | Add on `/about` + `/book` / skip | Defer; evidence for lift is vendor-biased. If added: no autoplay, captions, transcript, poster | `/about`, `/book` | Mohamed | |
| D-31 | Microsoft Clarity session replay | Add / skip | Skip at launch (cookies → banner, CSP + perf cost). Use 5-second tests + founder calls | Analytics, CSP | Mohamed | |
| D-32 | Yawmy Care mention | Mention on `/about` / skip | Skip until its 2027 launch | `/about` | Mohamed | |
| D-35 | Arabic digits | Western 0–9 (`ar-u-nu-latn`) / Arabic-Indic | Western default; confirm with native reviewer | `/ar` | Mohamed | |
| D-38 | Public announcement date | Wed Nov 25 / Mon Nov 30 | Wed Nov 25 after T+24 h check; never Nov 26–27 | Comms | Mohamed | |

## 5. Unverified facts to confirm before use (not decisions, but blockers for specific copy)
| Fact | Status | Used where | Rule |
|---|---|---|---|
| "Founded 2024" | verify (D-21) | `/about`, schema | Omit until confirmed |
| "10+ countries" | verify | — | Do not use; "clients on 4 continents" is confirmed |
| "Up to ~60% cost savings" | verify | — | Do not use; EduLens 60–90% AI cost reduction is a case metric, not a general claim |
| Co-authored academic AI papers / NurViD-MAE venue | verify | — | Not on v1 site |
| Texas address / entity | D-08 | footer, schema | "Texas, USA" only |
| Cal.com embed origins, prefill keys, `bookingSuccessfulV2` payload | verify in dry run | `07-tech-spec.md` §10 | Adjust code to docs |
| Egypt DST alignment with Riyadh in summer | verify | Time-zone copy | Copy says "GMT+2, overlaps US and Gulf hours" without seasonal claims |

## 6. Copy gaps found in review (Oct 15). Claude fills these once the linked decision closes
| ID | Gap | Depends on | Default |
|---|---|---|---|
| G-01 | `/privacy` + `/terms` text missing | D-25 | Claude drafts from `07` §9.6 for owner/lawyer review; launch blocker |
| G-02 | `/launch-ready` FAQ: refunds question + data residency/PDPL question | D-02, D-28 | Add after decisions; omit if undecided |
| G-03 | Quiz email copy (`03` §1.6) assumes an ESP sequence | D-11 | Rewrite for Web3Forms + manual reply |
| G-04 | `/partners` comparison lacks "dedicated team (min 6 months)" column | D-18 | Add column, no price |
| G-05 | `/book/confirmed` "Add to calendar" buttons unspecified | none | Drop; Cal.com confirmation email carries calendar links |
| G-06 | Article author schema defaults to Person | D-16 | Use Organization until D-16 closes |
| G-07 | `/work` meta mentions the home-services marketplace (Rushr) | D-07 | Remove until Rushr is published |
| G-08 | Pillar, C1, C2 are briefs only | D-36 | Claude drafts by Nov 6; Mohamed reviews technically |

| Oct 18 | **D-06 resolved:** EduLens is named on home with the 60–90% result (Mohamed, Oct 18). Yawmy Care stays as "our product". Privacy and terms trimmed to what is live. US spelling. | Mohamed |

| Oct 21 | **D-07 lifted for Rushr (Mohamed):** the Rushr chapter (3 phone screens), the client-row role line and the rail card are live on home. Upscend screens stay held (needs Upscend's OK, D-05). | Mohamed |
