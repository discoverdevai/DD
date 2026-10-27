# 10 · Build Plan + Launch Checklist

> **Schedule override (Oct 15):** go-live is **Sat Oct 17, 2026, 09:00 Cairo** (fallback Sun Oct 18). Use the schedule in `00-master-plan.md`. Milestone IDs, definition of done, QA list (§4) and runbook steps (§3) still apply; ignore the Nov dates in §1.

Status: build-ready · Launch lead + operator: Mohamed · Builder/QA automation: Claude Code · Updated: 2026-10-15
Go-live: **Tue 2026-11-24** · Hard deadline: **Mon 2026-11-30**
Read with: `04-ux-ia.md`, `05-seo-aeo.md`, `07-tech-spec.md` (§ refs = 07 unless noted), `11-open-decisions.md` (`D-xx`).

## 0. Roles
| Role | Who | Responsibility |
|---|---|---|
| Launch lead | Mohamed | Go/no-go, rollback call, decisions in `11-open-decisions.md` |
| Deploy operator | Mohamed | DNS, Cloudflare, Cal.com, PostHog, GSC/Bing accounts |
| Builder | Claude Code | Code, content integration, scripts, CI |
| QA | Claude Code (automated) + Mohamed (manual devices, keyboard, screen reader) | §4 |
| Comms | Mohamed | Launch announcement, Clutch/LinkedIn profile updates |
- Single-person risk: no deputy. If Mohamed is unavailable on T-0, postpone to the next slot (§1.3). Never cut over unattended.

## 1. Phased build plan

### 1.1 Milestones
| ID | Window | Milestone | Exit criteria | Depends on |
|---|---|---|---|---|
| M0 | Thu Oct 15 – Wed Oct 21 | Decisions + access | Batch A decisions closed (§1.2); consent requests sent; DNS + registrar access confirmed; Cal.com account ready; logo SVG/PNG received | `11-open-decisions.md` |
| M1 | Mon Oct 19 – Sun Oct 25 | Foundation | Repo per §5; `astro.config.mjs`, `wrangler.jsonc`, tokens, `BaseLayout`, header/nav/footer, 404, robots, `_headers`, `_redirects` stub; CI (§15) green; Workers Builds preview URL live with `X-Robots-Tag: noindex` | M0 (D-14 not needed yet) |
| M2 | Mon Oct 26 – Sun Nov 1 | Components + templates | All §16 components; all page templates render with dev fixtures (`draft: true`, never in prod build); axe 0 serious/critical; LH budgets met on templates | M1 |
| M3 | by **Tue Nov 3** (T-21) | DNS on Cloudflare | §18.2 steps 1–7 done; email verified both ways; GSC + Bing verified; AI-bot settings allowed | D-14 |
| M4 | Mon Nov 2 – Sun Nov 8 | Copy + core pages | Home, `/launch-ready`, `/validate`, `/build`, `/scale`, `/partners`, `/about`, `/book`, `/book/confirmed`, `/launch-check`, `/privacy`, `/terms` complete on preview with final `03-copy.md`; Cal embed working (§10); quiz complete (`04-ux-ia.md` §8) | M2; `03-copy.md` final; Batch A + B decisions |
| M5 | Mon Nov 9 – Fri Nov 13 | Content + SEO | Pillar, C1, C2 published on preview; `/work` + `/work/edulens` (or anonymized); `/insights`; JSON-LD per `05-seo-aeo.md` §4; OG images; sitemap; RSS; `llms.txt`; inbound-link check green | M4; article drafts; D-06 |
| M6 | by **Tue Nov 10** (T-14) → Mon Nov 16 | Wiring + hardening | All events (§9) verified on preview; CSP zero violations; redirects test green; Cal dry run (§10.4) passed; security headers grade A | M4, M5 |
| M7 | **Tue Nov 17** (T-7) – Fri Nov 20 | Freeze + full QA | Content freeze; §4 full QA done on preview; all criticals fixed; rollback rehearsed; zone export saved | M6 |
| GNG | **Mon Nov 23** | Go/no-go | §3.1 all checked | M7 |
| LIVE | **Tue Nov 24** | Cutover | §3.2 runbook complete; §3.3 verification green | GNG |
| B | Wed Nov 25 – Mon Nov 30 | Buffer + fast-follow | C3 published; `/work/rushr` if D-07 met; non-critical fixes | LIVE |
| AAR | Fri Dec 4 (T+10) | After-action report | Short write-up: what broke, what to change | LIVE |

### 1.2 Decision batches (from `11-open-decisions.md`)
- Batch A, by **Wed Oct 21** (blocks M4 copy + M3): D-01 price cue · D-02 payment terms · D-03 guarantee wording · D-04 Review booking free/paid · D-14 DNS access · D-15 old routes · D-16 named people · D-23 Cal account · D-33 logo assets · D-05 consent requests **sent**.
- Batch B, by **Fri Oct 30** (blocks M4 completion): D-08 Texas entity wording · D-09 WhatsApp · D-10 reply-time promise · D-11 quiz email · D-17 team photos · D-18 rate cues · D-20 urgent triage · D-21 founding year · D-22 security mailbox · D-24 consent posture · D-19 Validate/Build price model · D-25 legal text · D-28 PDPL answer · D-34 Clutch-only review count · D-36 article drafts · D-37 GCC trust line · D-39 quiz scoring · D-40 quote-time promise · D-41 HSTS subdomains · D-42 availability · D-43 entity line.
- Batch C, by **Fri Nov 13** (blocks M5/M7): D-05 consent **answers** · D-06 EduLens · D-26 sample report · D-29 sameAs profiles.
- After launch: D-07 Rushr · D-12 Arabic font · D-13 Arabic summary · D-30 video · D-31 Clarity · D-32 Yawmy Care · D-35 Arabic digits · D-38 announcement date (decide by Nov 23) · D-27 GCC payments claims.

### 1.3 Slip rules
- [ ] A Batch A decision late by > 3 days → launch moves to the next slot; tell nobody externally until GNG.
- [ ] Go/no-go fails on Mon Nov 23 → retry slot **Wed Nov 25** (09:00 GMT+2). Second fail → **Mon Nov 30** (last allowed).
- [ ] Never cut over on Thu Nov 26 / Fri Nov 27 (US Thanksgiving, weekend in GCC/Egypt starts Fri).
- [ ] Scope cuts allowed to hit the date (in this order): C2 → `/launch-ready` inline Cal (link to `/book` instead) → quiz email step → team section → `/work/edulens` (then hide Work nav). Never cut: `/launch-ready`, `/book`, Cal booking, `/privacy`, 404, redirects, analytics core events.

## 2. Definition of done

### 2.1 Every page
- [ ] Copy from `03-copy.md` final; no TODO, lorem, or placeholder text; tone rules: no exclamation marks, no em-dashes in short copy.
- [ ] Title, meta, H1 per `05-seo-aeo.md` §1.1 (or approved `03-copy.md` H1); one H1; heading order valid.
- [ ] Canonical absolute, self-referencing, no trailing slash; OG/Twitter tags; OG image renders (LinkedIn Post Inspector).
- [ ] JSON-LD per template, parses, Rich Results Test shows no errors.
- [ ] ≥ 3 inbound `<main>` links (indexable pages, legal exempt); ≤ 3 clicks from home.
- [ ] All CTAs are `CtaLink` with unique `ctaId`; labels exact per `04-ux-ia.md` §6.
- [ ] axe: 0 serious/critical. Keyboard pass. Visible focus. Reflow at 320 px.
- [ ] Lighthouse mobile meets §13 budgets.
- [ ] Only consented names/logos/quotes; only verified metrics.
- [ ] Renders correctly at 320/375/768/1024/1440.
- [ ] Merged via PR with green CI.

### 2.2 Page-specific extras
| Page | Also done when |
|---|---|
| `/` | Hero H1 + sub + CTA + microcopy fit first 375 px viewport; 5-second test with 2 founders passes (they can say what we do + what to click) |
| `/launch-ready` | Price cue (D-01), terms (D-02), guarantee definition (D-03) visible; FAQ #1 answers "free scanners"; `#book` embed or link works; anchor links `#pricing`, `#guarantee`, `#book` work |
| `/validate`, `/build`, `/scale` | Timeline + pricing model stated with no invented numbers; ownership section present; `/build` links to `/launch-ready` |
| `/partners` | Models table correct (staff aug min 3 months, dedicated min 4 months); partner CTA → `/book?type=partner` preselects partner tab |
| `/work` | Lists only `published` cases; hides from nav if 0 |
| `/work/[slug]` | ≥ 1 verified metric with baseline + timeframe; consent or anonymized; matched CTA; `case_study_viewed` fires |
| `/insights` | Pillar featured; cards show Updated date; quiz banner after first row |
| Articles | Takeaways, question H2s with 40–60 word answers, ≥ 1 table, sources linked and live, byline + dates, pillar links, inline quiz CTA, end CTA; `article_read` fires once |
| `/about` | Entity line verbatim; locations wording per D-08; team only with consent |
| `/book` | All 3 types render (`?type=review|clarity|partner`), tab switch works, fallback links work with JS off and when Cal blocked, `booking_started` fires once |
| `/book/confirmed` | `noindex`; local time shown after a real booking; generic text on direct visit; no double `booking_completed` |
| `/launch-check` | All 4 segments reachable (unit tests); back/next/resume work; result focus + announcement; no-JS fallback; quiz events fire |
| `/privacy`, `/terms` | Owner-supplied text (D-25); processors + sessionStorage keys listed; Last updated date |
| `/404` | Returns HTTP 404; links work; `noindex` |

## 3. Go-live runbook

### 3.1 Go/no-go (Mon Nov 23, end of day GMT+2)
- [ ] §4 full QA: 0 open criticals, 0 open majors on core pages.
- [ ] Zone export saved; DNS on Cloudflare ≥ 14 days; email verified.
- [ ] Rollback rehearsed on preview (version id of last good preview noted).
- [ ] `qa-test` dry-run booking passed today.
- [ ] GitHub Pages fallback record set copied into this doc's notes (`07-tech-spec.md` §18.6).
- [ ] Remaining DNS-only TTLs = 300 s (set Sat Nov 21).
- [ ] Mohamed available 09:00–18:00 GMT+2 on T-0 and reachable T+24 h.
- [ ] Decision: GO / NO-GO (record time + reason).

### 3.2 T-0 runbook (Tue Nov 24; times GMT+2; 09:00 = 02:00 US Eastern = 10:00 Riyadh)
| Time | # | Step | Verify | Rollback if fails |
|---|---|---|---|---|
| 08:30 | 0 | Open: Cloudflare dashboard, Workers Builds log, PostHog live events, CF Web Analytics, Cal.com bookings, GSC, terminal | All logged in (2FA) | — |
| 08:45 | 1 | Final smoke on preview URL of the release commit (`npm run qa` green in CI) | CI green | Stop: NO-GO |
| 09:00 | 2 | Merge release PR → Workers Builds prod deploy | Build green; record version id | Revert merge |
| 09:10 | 3 | DNS: delete apex A/AAAA (GitHub) → Worker → Settings → Domains → add `discoverdev.ai` | Cert issued; `curl -I https://discoverdev.ai` → 200 from Cloudflare | Re-add GitHub A/AAAA (07 §18.6) |
| 09:20 | 4 | `www`: delete GH CNAME → proxied `AAAA 100::` → Redirect Rule `www.discoverdev.ai/*` → `https://discoverdev.ai/${1}` (301) | `curl -I https://www.discoverdev.ai/x` → 301 → apex | Restore GH CNAME (DNS-only) |
| 09:30 | 5 | Smoke on prod: all nav pages 200; `/sitemap-index.xml`, `/robots.txt`, `/llms.txt` 200; random path 404; `/about/` → `/about`; `npm run test:redirects -- --base https://discoverdev.ai` | Script green | `wrangler rollback` or §18.6 |
| 09:45 | 6 | Headers: `curl -I` on `/` shows HSTS, CSP, nosniff, XFO; `/book/confirmed` has `X-Robots-Tag: noindex` | Present | Fix `_headers`, redeploy |
| 09:50 | 7 | Analytics: open site in clean browser → CF WA shows visit; PostHog live shows `$pageview` + `cta_clicked` from a nav click | Seen | Fix, redeploy (non-blocking if CF WA lags) |
| 10:00 | 8 | Booking: `qa-test` booking on prod → `booking_started`, `booking_completed`, `/book/confirmed` OK, metadata in Cal; cancel booking | All OK | Automatic rollback trigger if booking fails |
| 10:15 | 9 | Quiz: complete once per segment path (4 runs) | Results + events OK | Hide quiz links (config) if broken; non-blocking |
| 10:30 | 10 | CSP: DevTools console on `/`, `/book`, `/launch-check`, pillar → 0 violations | 0 | `wrangler rollback` if `/book` blocked |
| 10:40 | 11 | GSC: submit sitemap; URL Inspection → request indexing (`05-seo-aeo.md` §8). Bing: submit sitemap; IndexNow on | Submitted | — |
| 10:50 | 12 | Cloudflare AI Crawl Control: Search/Agent/Training allowed; no managed robots.txt override; `curl -A "OAI-SearchBot" -I https://discoverdev.ai/` → 200 | OK | Fix setting |
| 11:00 | 13 | Update external links to new URLs: Clutch profile website + service lines, LinkedIn company, email signature | Done | — |
| 11:15 | 14 | Declare launch (internal note). Old GitHub Pages: keep deployed, unlinked | — | — |
| 12:00 | 15 | T+3 h check (§5) | Green | — |
| 17:00 | 16 | T+8 h check (§5) | Green | — |

Rollback triggers (07 §18.6): automatic → any nav page non-200, `/book` cannot book, site unreachable from 2 regions. Discretionary → field LCP > 4 s, CSP errors on key flows. Launch lead decides within 15 min of detection.

### 3.3 Announcement
- [ ] Soft launch Nov 24. Public announcement (LinkedIn company post, email to past clients) on **Wed Nov 25** after the T+24 h check, or **Mon Nov 30**. Not Nov 26–27.

## 4. QA checklist (run on preview at T-7, re-run smoke on prod at T-0)

### 4.1 Functional
- [ ] Nav: desktop Services disclosure (click, Enter, Space, Esc, outside click); mobile `<dialog>` menu (open, trap, Esc, focus return, scroll lock).
- [ ] Header hide/show on scroll; sticky mobile bar shows after hero, hidden on `/book`, `/book/confirmed`, `/launch-check`, `/404`, legal, and while an input is focused.
- [ ] Every CTA lands on the right destination; `/book?type=` preselects the tab; unknown type → review.
- [ ] `/book` embed: loads, month view ≥ 768 px, column view < 768 px, time zone auto, booking succeeds (`qa-test`), redirect to `/book/confirmed`, local time shown.
- [ ] Cal fallback: block `app.cal.com` in DevTools → fallback links + email/WhatsApp shown within 10 s; JS disabled → `<noscript>` links.
- [ ] `/launch-ready#book` embed lazy-loads only near viewport (if §10.3 ON).
- [ ] Quiz: start, next/back, resume after reload, start over, all 4 segments (unit tests cover every rule in `03-copy.md` §4.3), result CTA URLs carry `quiz_segment`, retake clears state, email step (if D-11) success/error/offline states.
- [ ] UTMs: land with `?utm_source=test&utm_medium=qa` → click CTA → `/book` link carries UTMs → Cal booking metadata shows them.
- [ ] 404 for unknown paths; old routes 301 → 200 in one hop.
- [ ] RSS validates (https://validator.w3.org/feed/).
- [ ] External links open in same tab unless file/booking; any `target="_blank"` has `rel="noopener noreferrer"`.

### 4.2 Content
- [ ] All copy matches `03-copy.md`; spelling; no exclamation marks; no em-dashes in short copy; "DiscoverDev" spelled correctly everywhere.
- [ ] Rating text "Rated 5.0 on Clutch" + "Read our reviews on Clutch"; never "11 reviews on Clutch".
- [ ] No unconsented client names, logos, quotes, photos (consent-gate green + manual scan of home, `/work`, `/about`, `/build`, `/scale`, `/partners`).
- [ ] Metrics only `verified: true`; EduLens 60–90% stated with context; Rushr "16 weeks" only on Rushr page.
- [ ] No claims needing verification without D-xx resolved: "founded 2024", "10+ countries", "~60% cost savings", co-authored papers, GCC offices, Texas address, reply-time promise.
- [ ] Price cue, terms and guarantee wording identical on home, `/launch-ready`, `/book`, microcopy, `llms.txt`, schema `Offer.description`.
- [ ] Articles: sources live (HTTP 200), dates correct, byline per D-16.
- [ ] Privacy notice lists processors (Cloudflare, PostHog EU, Cal.com, Web3Forms if used) + sessionStorage keys.

### 4.3 SEO
- [ ] Titles ≤ 60, metas 120–155, unique; one H1 per page.
- [ ] Canonicals absolute on production domain, no trailing slash, query stripped (check a UTM URL).
- [ ] `/sitemap-index.xml` 200, lists only indexable canonical URLs (no `/book/confirmed`, `/404`, `/og/`, drafts).
- [ ] `robots.txt` = `05-seo-aeo.md` §5.1; `llms.txt` lists only live pages.
- [ ] Preview hosts send `X-Robots-Tag: noindex`; prod does not.
- [ ] `noindex` meta on `/book/confirmed`, `/404`.
- [ ] Rich Results Test: `/`, `/launch-ready`, `/work/edulens`, pillar, C1 → no errors; validator.schema.org clean; no `AggregateRating`/`Review`.
- [ ] Breadcrumbs visible + markup on `/work/*`, `/insights/*`.
- [ ] Inbound-link check green; no internal links to redirects.
- [ ] OG previews correct (LinkedIn Post Inspector) for home, `/launch-ready`, pillar.
- [ ] `/about/` → `/about`; `www` → apex; `http` → `https`.
- [ ] `/favicon.svg`, `/apple-touch-icon.png`, `/logo-512.png`, `/insights/rss.xml`, `/.well-known/security.txt` return 200; favicon shows in a tab; no JPG logo shipped.

### 4.4 Accessibility (WCAG 2.2 AA)
Perceivable
- [ ] Contrast: body text ≥ 4.5:1; large ≥ 3:1; UI + focus rings ≥ 3:1. `#858585` only ≥ 24 px (or ≥ 18.66 px bold) or decorative; small muted text `#6B6B6B`. On navy: text `#FEFEFE` only.
- [ ] Meaningful images have alt; decorative `alt=""`. Charts/graphics (TimeOverlap, SampleReport, case figures) have a text equivalent.
- [ ] No autoplay media; any video has captions + transcript.
- [ ] Landmarks `header`, `nav`, `main`, `footer`; one H1; no skipped heading levels.
- [ ] Color never the only signal (quiz bars have text labels; required fields marked in text).
- [ ] Reflow at 320 px and 200% zoom, no horizontal scroll.
Operable
- [ ] Skip link to `main` works. Full keyboard pass: no traps (mobile menu, Services menu, Cal iframe, quiz).
- [ ] Visible focus on every interactive element.
- [ ] 2.4.11 Focus Not Obscured: sticky header/bar never hide focused element (`scroll-padding` set). Tab through a long page to verify.
- [ ] 2.5.8 Target Size: ≥ 24×24 px (design target 44×44).
- [ ] 2.5.7 Dragging: no drag-only controls.
- [ ] Nothing flashes > 3/s; no auto-moving content (or pause control).
- [ ] Page titles descriptive; link text descriptive.
- [ ] Animations only under `prefers-reduced-motion: no-preference` (test with OS setting on).
Understandable
- [ ] `lang` on `<html>`; `lang` on inline foreign phrases.
- [ ] 3.2.6 Consistent Help: contact block same order on every page.
- [ ] 3.3.7 Redundant Entry: quiz email prefilled into Cal (if D-11).
- [ ] 3.3.8 Accessible Authentication: no CAPTCHA puzzles.
- [ ] Form labels visible above fields; errors specific, linked via `aria-describedby`, `aria-invalid`; validate on blur, clear on input.
- [ ] 3.2.2 On Input: quiz does not auto-advance.
Robust
- [ ] Custom widgets expose name/role/value (disclosure `aria-expanded`, dialog, FAQ `<details>`, quiz radio groups in `<fieldset>`/`<legend>`).
- [ ] Status messages announced (`role="status"` / `aria-live`): quiz result, email success, booking confirmed.
Testing
- [ ] axe (Playwright) on all templates: 0 serious/critical.
- [ ] Keyboard-only pass: home, `/launch-ready`, `/book` (incl. booking), `/launch-check`, an article.
- [ ] Screen readers: VoiceOver + Safari (macOS and iOS), NVDA + Firefox on home, `/book`, quiz.
- [ ] Cal iframe has a `title`; keyboard can reach slots and submit.

### 4.5 Performance
- [ ] Lighthouse CI budgets (§13) green on the 6 pages.
- [ ] PageSpeed Insights mobile on `/`, `/launch-ready`, `/book`, pillar, `/launch-check` after launch (lab); CF RUM field data watched from T+1.
- [ ] No third-party JS before `load` on any page; Cal only on `/book` (and gated `/launch-ready`).
- [ ] LCP image has `fetchpriority="high"`, not lazy; other images lazy with width/height.
- [ ] Fonts: ≤ 3 files first view, 1 preload, no FOIT; CLS ≤ 0.05.
- [ ] `/_astro/*` returns `Cache-Control: public, max-age=31536000, immutable`.

### 4.6 Security
- [ ] HTTPS only; no mixed content; HSTS present.
- [ ] Headers per §14.1 present on prod (`curl -I`); MDN HTTP Observatory + securityheaders.com grade ≥ A.
- [ ] Meta CSP: zero violations on key flows; `script-src` has no `'unsafe-inline'`.
- [ ] `/.well-known/security.txt` 200, valid `Expires`.
- [ ] No secrets in repo (`git grep -nE "(sk_|secret|api[_-]?key)"` review); `.env` ignored.
- [ ] 2FA on all accounts (§19).
- [ ] GitHub Pages domain verified in GitHub org (takeover guard).
- [ ] Quiz email endpoint: honeypot works (bot submission rejected), consent required.

### 4.7 Analytics
- [ ] PostHog live feed shows each event with correct properties: `cta_clicked`, `booking_started`, `booking_completed`, `article_read`, `case_study_viewed`, `outbound_clicked`, `quiz_started`, `quiz_question_answered`, `quiz_completed`, `quiz_lead_submitted` (if D-11).
- [ ] Common properties present: `locale`, `page_path`, `page_type`, `channel`, `entry_referrer_host`, first-touch `utm_*`.
- [ ] No PII in any event (inspect payloads).
- [ ] `booking_completed` fires once per booking (embed + confirmed backup dedup).
- [ ] Dry run / `qa-test` cancelled bookings excluded from reporting (filter `event_type` values; `qa-test` maps to none).
- [ ] No analytics on preview/dev hosts.
- [ ] Analytics blocked (uBlock) → site works, no console errors.
- [ ] Funnels + insights built (§9.4). Cal "How did you hear about us?" required on all events.
- [ ] CF Web Analytics shows visits (manual beacon, auto-injection off).

### 4.8 Cross-browser + devices
| Browser / device | Pages to test |
|---|---|
| Chrome (latest) Windows/macOS | All templates |
| Safari macOS (latest) | Home, `/launch-ready`, `/book` (booking), quiz, article |
| Safari iOS (iPhone, 375–390 px) | Home, `/launch-ready`, `/book` (booking), quiz, mobile menu, sticky bar |
| Chrome Android (360–412 px) | Home, `/book`, quiz |
| Firefox (latest) | Home, `/book`, quiz, article (no view transitions = normal load) |
| Edge (latest) | Home, `/book` |
- [ ] Viewports 320 / 375 / 768 / 1024 / 1440 on all templates.
- [ ] Zoom 200%; OS dark mode does not break contrast (site is light theme; ensure no forced inversion issues).
- [ ] Slow 4G throttle: `/book` fallback appears if Cal > 10 s.

## 5. Post-launch checks
| When | Check |
|---|---|
| T+1 h, T+3 h, T+8 h | Smoke (all nav pages 200, 404 works); PostHog events flowing; CF WA visits; no CSP errors; Cal bookings list vs `booking_completed` |
| T+24 h (Wed Nov 25) | GSC: sitemap read, no Coverage errors, inspected URLs indexed or queued; Bing sitemap processed; CF RUM Web Vitals; redirect test on prod; AI Crawl Control shows Googlebot/Bingbot/OAI-SearchBot 200s; announce if green |
| T+48 h | GSC Pages report: soft 404s, redirect errors, "Crawled – not indexed"; fix and request re-index |
| Daily to T+7 | Bookings vs PostHog count; quiz completion + segment mix; top `cta_id`s; any JS errors reported by users; Cal no-show handling |
| T+7 (Tue Dec 1) | Remove custom domain from old GitHub Pages repo (keep domain verified); GSC Enhancements (breadcrumbs); Rich Results re-check; first PostHog funnel read; record baseline numbers (sessions, `cta_clicked` rate, `booking_started` → `booking_completed`) |
| T+10 (Fri Dec 4) | After-action report: issues, fixes, decisions to revisit |
| T+28 (Tue Dec 22) | 4-week GSC baseline → set 90-day targets (`05-seo-aeo.md` §8); first monthly AI prompt check |
