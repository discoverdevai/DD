# Project memory: discoverdev.ai website

Shared memory for every Claude session working on this site. Read it first; update it when something durable changes.
Two sessions write here:
- **Claude Code** (Mohamed's PC): builds the site.
- **Claude, DiscoverDev project chat** (claude.ai): plans, researches, tests.

Last updated: Fri Oct 16, 2026, 17:30 Cairo · by Claude Code · site commit: see `docs/PLAN.md`.

## Where things live
| What | File |
|---|---|
| Durable decisions and facts (this file) | `docs/MEMORY.md` |
| Live build status and progress log | `docs/PLAN.md` ("Where we are now" + log) |
| Plan, dates, cut order | `context/00-master-plan.md` |
| Open decisions + launch defaults | `context/11-open-decisions.md` (§0b) |
| Facts allowed on the site | `context/09-proof.md` |
| Copy (change here first) | `context/03-copy.md` |
| QA results and fix lists | `qa/reports/` |
| Enhancement reviews | `docs/review/enhancement/` |
| Live plan doc (Mohamed's view) | https://claude.ai/code/artifact/e7e25cab-0bdb-4b6c-b53e-827d2454abd3 |
| Design canvas (directions A–D) | https://claude.ai/artifact/KPJqgis7TquCpaykozXsyF |

## Decisions (newest first)
| Date | Decision | Made in |
|---|---|---|
| Oct 18 | **Home review decisions A1–A5, A8** (Mohamed approved my recommendations): Rushr logo only, no descriptor; clinic card removed until the therapist consents; EduLens stays anonymous (Youssef's card has no result line); NJWAR without Saudi tag and AI line; Ireland off the map; `06` to allow glows and the dot map (A8, stream 3). Fix plan: `docs/plan/home-v1-review-plan.md`. A6 Cal.com username and A7 hosting still open | Claude Code (Mohamed) |
| Oct 18 | **V1.0 = one-page site** (Mohamed: focus, go live as soon as possible): `/`, `/book` (+confirmed), `/privacy`, `/terms`, `/404`. Services, Work, case, How we work, About in V1.1; Review, Partners, Launch check, Insights in V1.2; capabilities etc. later. Pages switch on per release via `routes.ts`; tags `v1.x.0`. Plan: `docs/plan/site-map-plan.md` §8–9 | Claude Code (Mohamed) |
| Oct 18 | **Design system and code clean-up** (plan `docs/architecture/design-system-plan.md`): phases 0–7 done and committed (private page `/design-system`, noindex) (gate `scripts/dist-diff.mjs`, folders layout/ui/blocks/sections/scenes, tokens + `token-lint`, shared patterns SectionHead, card-link, tag, Device, WindowBar, CtaBand). Reference page `/design-system` will be private (noindex, not in nav or sitemap). Clean-up plan closed. Working rule: new UI starts from an existing pattern (06 §9.25–9.27) and tokens; add a pattern only when used in two places | Claude Code (Mohamed) |
| Oct 16 | **Project chapters** (Fantasy-style, site theme): NJWAR (web store laptop + AR phone + "Try our AR prototype" → furniture-webar.pages.dev), Yawmy Care (admin dashboard + parent app), Rushr (3 mobile screens; preview only until D-07 lifted). Real screens exported from our Figma files (Yawmy Care DD, Rushr UI App DD, NJWAR-AR). On home above "More products we've helped build" and at the top of /work. Open: NJWAR = Athkado? confirm child photo in parent app is stock | Claude Code (Mohamed) |
| Oct 16 | **Hosting: Vercel** (Mohamed; overrides 07 Cloudflare Workers). `vercel.json` carries the headers, redirects, clean URLs and a noindex for *.vercel.app; `scripts/vercel-parity.mjs` (in test:gates) keeps it in step with `public/_headers` and `_redirects`, kept for a later Cloudflare move. Note: Vercel Hobby is for non-commercial use; a company site needs Pro (~$20/month), against the $0 budget. Repo: github.com/discoverdevai/Discoverdev-landing-page (private) | Claude Code (Mohamed) |
| Oct 16 | **Project showcase**: home = bento (featured EdTech case + 4 projects), replacing the case block and grid; /work = story rows (brief / what we did / result only where 09 states them, paired client quotes) with Validate/Build/Scale filters. One data file `projects.ts`. Drawings until real screens: Mohamed suggested Figma screens; they need each client's screen approval (D-05) before going live (`screen` field, `assets/projects/`). **Launch: drawings only** (Mohamed); real screens after launch, once clients approve | Claude Code (Mohamed) |
| Oct 16 | **Review quotes approved**: Mohamed approved all 8 quotes in 09 on the home page with names and roles (D-05; consent-gate updated). Case studies stay anonymized. Home adds Selected work (6 anonymized cards), client reviews (verbatim, no stars, no AggregateRating) and Guides + launch check, after a competitor home review (TrianglZ, Goji, thoughtbot, Robusta, Netguru) | Claude Code (Mohamed) |
| Oct 16 | **New page `/how-we-work`** (Mohamed approved URL and scope): two ways in (greenfield → Validate, brownfield → Launch-Ready Review), who does what (journey), four steps in depth with text-free framework drawings (E2 direction), FAQ, closer. Nav "How we work" → `/how-we-work`; home lifecycle simplified to four steps + time + "See how we work in detail"; Validate/Build/Scale journey bar links to it. Greenfield/brownfield line on home | Claude Code (Mohamed) |
| Oct 16 | **Home section review done (hero to footer).** Decisions: client cards (logo + name + one line) in one slow moving row (90s), no visible pause button (pause on hover, tap on touch, keyboard-only control for WCAG 2.2.2); facts beside a real dotted map (Natural Earth) with a marker per client country; frameworks per lifecycle stage confirmed by Mohamed (Discover: JTBD, Design Sprint · Plan: Story Mapping, Shape Up, RICE/MoSCoW, ADRs · Build: weekly sprints + demo, Definition of Done · Ship & Stay: DORA, continuous discovery, HEART/AARRR), shown with time, "You get" and one-line explanations; journey cards 3–4 redesigned on the dark theme; Why adds "You own it all"; FAQ adds MVP timeline and DiscoverDev Way. Inspiration: TrianglZ Agile V2.0 (metaphor, no stages), live studio process pages | Claude Code (Mohamed) |
| Oct 16 | **Client logos approved** by Mohamed for 10 clients (EduLens, Upscend, Arheb, Nile Support, BioBank, Jumlaty, Zest, Continuum Therapy Collective, Rushr, Yawmy Care): logo use only on the home band; quotes and case names still need consent. Band rule: logos OR project cards, never mixed, no motion. Unnamed old-site logos (AD, F, Darb, Beacon, resort, Orange) stay out until named and added to 09 | Claude Code (Mohamed) |
| Oct 16 | **Home hero refresh approved** (supersedes "no hero redesign" below): split layout from laptop width (copy left, compact sprint board right, both in the first screen; phones stacked). H1 **"Turn your idea into a live product in weeks."** (Jobs to be Done + "Now you can" test; Mohamed picked it over "Build the right thing. Ship it fast.", which stays as the promise in the core idea and meta). Sub "DiscoverDev builds it with senior engineers and AI, in 8–12 weeks. You own everything." Pill "AI drafts. Seniors sign off." Rating line moved from the proof band into the hero; "See how we work" is a text link; slow drifting brand-blue background. Same dark theme and colours | Claude Code (Mohamed) |
| Oct 16 | **How we work journey visual approved for launch** (Discover → AI drafts → A senior signs → Live, four compact cards on the dark theme, played once; `b67391c`, 06 §0.8). It is the only art piece; no hero redesign, keystone, white-led surfaces or other live components | Claude Code (Mohamed) |
| Oct 16 | **Scope cut:** keep the site's dark theme and existing colours exactly; no hero redesign. Only addition: the Discover → AI drafts → A senior signs → Live journey as the visual for the home "How we work" section | Claude Code (Mohamed) |
| Oct 16 | Theme stays **dark** (Mohamed overrode the brand guide's white-led rule for the site). Visual idea: **Sketch to Ship** (product window: sketch → AI draft dashed blue → senior-signed solid white + signature + green "Signed off" → live); keystone/arch dropped as unclear. One moving piece per page; official logo files only. Concept board: https://claude.ai/artifact/GYiLTgCjpHx6idPgQHwuhb (awaiting final OK) | Claude Code (Mohamed) |
| Oct 16 | Keystone-arch home pilot **rejected and reverted** ("it is too much bad"); home is back to the approved v3 look for launch. Earlier in the same review: keep the dark theme, header and hero ("the last theme was perfect"), so white-led colour is off too. `06` §0.8 kept only as notes; art direction to be rethought after go-live with Mohamed | Claude Code (Mohamed) |
| Oct 16 | Method renamed **The DiscoverDev Way**: "Discover first. Build with AI. Seniors sign off." Picture: "AI lays the bricks. A senior sets the keystone." Brand one-pager `docs/brand/discoverdev-way.md` | Claude Code (Mohamed) |
| Oct 16 | A senior engineer signs off every release (confirmed fact, in `09`) | Claude Code (Mohamed) |
| Oct 16 | (Superseded same day by Sketch to Ship, dark theme.) Art direction: keystone arch as the site-wide system, signed-release fragments in Build and case studies, drawing set on About. Brand-safe fixes before go-live; full art direction after launch. Review: `docs/review/design-review.html` | Claude Code (Mohamed) |
| Oct 16 | tasteskill v2 installed (`.claude/skills/taste-frontend`, `taste-redesign`); its scripts need Mohamed's OK; brand guide wins where its rules conflict | Claude Code (Mohamed) |
| Oct 16 | Launch-Ready Review price: **from $1,490 USD** (D-01 closed). Market middle for fixed-fee audits is ~$1,000; boutique reviews $1,500–10,000 | Claude Code (Mohamed) |
| Oct 16 | "Agile v2" will be renamed (clash with TrianglZ). Options researched in `docs/review/enhancement/naming.md`; Mohamed to pick | Claude Code (Mohamed) |
| Oct 16 | Named people (D-16), Cal.com (D-23) and dashboard settings: Mohamed will come back on these later | Claude Code (Mohamed) |
| Oct 16 | /book opens on the free clarity call by default (strategy v2 primary CTA); the Review is one tab. `04` §7.1 updated | Claude Code |
| Oct 16 | Body and mono fonts load with `display: optional` (no late font swap re-wrapping text); Manrope stays `swap` and preloaded | Claude Code |
| Oct 16 | One enhancement plan: `docs/review/enhancement/PLAN.md` (performance, tech, SEO/AEO/GEO, CRO + UX laws, competitors, content). Code-only phases done first; copy changes go through `03`; decisions listed for Mohamed | Claude Code |
| Oct 16 | Old-repo client logos and project screenshots are not used: filenames don't match the projects, 8 of 14 client names are unconfirmed, and all need written consent (D-05) | Claude Code |
| Oct 16 | Keep `docs/PLAN.md` "Where we are now" and this file in sync with every chat (steps below); Mohamed asked twice (Oct 15 and Oct 16) | both |
| Oct 16 | Enhancement program: research best practice (CRO, SEO/AEO, competitors, tech), then implement. Claude's QA reviews feed Claude Code's single enhancement plan | both |
| Oct 16 | Strategy v2: DiscoverDev = product and engineering company on Agile v2 (AI does the heavy lifting, senior engineers own the quality). Primary CTA = free clarity call. Launch-Ready Review = one service, not the front door. TrianglZ is the nearest reference; don't copy its words | Claude Code |
| Oct 16 | Design: Signal → home v3 (all-ink) → v4 service pattern (white ~60%, navy openers, blue to point) on /build, /validate, /scale. Brand guide wins: white content, navy #032993 for dark/openers | both |
| Oct 16 | Official logo SVGs in use (D-33 closed) | Claude Code |
| Oct 15 | Go-live **Sat Oct 17, 09:00 Cairo**, fallback Sun Oct 18. Full site map. Hosting Cloudflare (Workers static assets), DNS move Fri | project chat |
| Oct 15 | Open decisions use launch defaults (`11` §0b): no price number, no client names/quotes/logos until consent, EduLens anonymized with its metric, company voice, Rushr hidden | project chat |
| Oct 15 | Wants the site techie and AI-oriented, explaining DiscoverDev's own direction and goals, built with the brand guidelines and the installed skills | project chat |
| Oct 15 | Stack: Astro 7 static, plain CSS tokens, logical properties (RTL-ready), PostHog EU cookieless + CF Web Analytics, Cal.com booking. English live, `/ar` in Q1 2027 | project chat |
| Oct 15 | QA loop: after each milestone Claude runs the `qa/` kit and writes `qa/reports/`; Claude Code fixes before moving on | project chat |
| Oct 15 | 45 vetted project skills in `.claude/skills` (claude-seo, geo-seo-claude, marketingskills); Astro Docs MCP in `.mcp.json` | project chat |
| Oct 15 | Robusta Group and TrianglZ are the regional players to watch; Robusta = enterprise/government, no founder door | project chat |

## Brand rules (never drift)
- **Colours:**
  - Primary #1240BE · navy #032993 · white #FEFEFE · black #0F0F0F.
  - Grey #858585 is for large text only; small muted text uses #6B6B6B.
- **Fonts:** Manrope (headlines) · Rubik (body). Mono is an accent only.
- **Logo:** whole logo only, never recoloured; for-dark version on navy.
- **Voice:** plain, founder-to-founder, no hype, no exclamation marks. Cost is never the hook.

## Waiting on Mohamed (keep in sync with PLAN.md "Needed from Mohamed")
- **Accounts and keys:**
  - Cloudflare DNS and registrar.
  - Cal.com username.
  - PostHog EU key, CF beacon token, Web3Forms key, entered as Workers Builds build-time variables.
  - GitHub repo.
- **Cloudflare at cutover:**
  - AI Crawl Control allows Search, Agent and Training bots; managed robots.txt off.
  - Turn off Email Address Obfuscation, Rocket Loader, Bot Fight Mode (its script is blocked by our CSP) and Web Analytics auto-setup (the beacon is already in the code).
  - www → apex 301 Redirect Rule if a www record exists.
  - Confirm whether the old site registered a service worker.
  - HSTS `includeSubDomains` only after every subdomain serves HTTPS.
- **PostHog:** turn on cookieless mode in the project settings, or cookieless events are ignored.
- **Decisions:**
  - Brand rollout of v4 to home.
  - Content hubs B–D (Validate, Build, Scale guides) vs `05` §2 "wait 6 months".
  - Price cues for Validate/Build (D-18, D-19). Review price done (D-01).
  - Named people (D-16, D-17).
  - sameAs URLs (D-29).
  - Client consents (D-05, D-06).
  - "NDA on request" (V5).

## How to keep this in step with the chats
1. **Start of any session:** read this file, then `docs/PLAN.md` "Where we are now".
2. **Decision made in a chat** (approval, change of direction, "don't do X"):
   - Add one row at the top of *Decisions* with the date and which chat it was made in.
   - If it closes a D-number, also update `context/11-open-decisions.md`.
   - Copy changes go into `context/03-copy.md` first.
3. **New blocker or input needed from Mohamed:** add it under *Waiting on Mohamed*. Remove it when resolved, in the same commit as the fix.
4. **Progress:** goes in `docs/PLAN.md` (log rows), not here. This file holds only what stays true.
5. **End of session or milestone:**
   - Update "Last updated" (time, who, commit).
   - **Claude Code** also refreshes its local memory note `discoverdev-landing-page-project`.
   - **The project chat** copies the same durable state to claude.ai project memory (`areas/discoverdev-website.md`). A new chat on either side then starts from here.
6. **If the two sessions disagree:** the newest dated row wins. Note the conflict in *Decisions* and ask Mohamed.
7. **Commit** with `Docs: memory …`. Never put secrets or keys in this file.
8. **Shortcut:** Mohamed can say "sync memory" in either chat to run steps 5 and 6.

| Oct 18 | **Hosting: Cloudflare Workers (final, Mohamed)**, supersedes the Oct 16 Vercel row. Live: https://dd.mohamed-ali-aec.workers.dev/ (Worker `dd`). `vercel.json` stays as a fallback. Decision A7 closed. | Claude Code (Mohamed) |
| Oct 18 | **EduLens screens: keep the drawing for launch.** The public site edu-lens.com is an Arabic online academy (teachers, subjects, packages) and does not show the three AI agents we built (support chatbot, video-to-lesson and quiz generator, student assistant); they sit behind login. It also shows teachers' names (consent). Real screens only from Figma, screenshots or a recording from the EduLens team, after Youssef approves screens (D-05). Slot: `screens` in `projects.ts`, files in `assets/projects/` | Claude Code (Mohamed) |
| Oct 18 | **Fork outputs checked against main:** the How we work journey visual (`b67391c`, `3c74a66`, `7c07a42`) and the C3 guide "fix or rebuild" (`5845c69`) are in main. Both are built but off in V1.0 (`howWeWork` in V1.1, `guideFixRebuild` in V1.2). The C3 guide still needs a technical read of five claims before it goes live (outside prices re-checked on publish day; Lovable GitHub sync; React/Supabase line; Build 8-12 weeks fixed price depends on D-01; the rebuild advice is our view). Hosting fork: Worker `dd` on Cloudflare (final) | Claude Code (Mohamed) |
| Oct 18 | **Decisions (Mohamed):** EduLens named with the 60–90% result on home (D-06 closed; A3(b)); Yawmy Care stays as "our product"; privacy and terms trimmed to what is live (launch check, guides, Web3Forms removed until V1.2); US spelling everywhere | Claude Code (Mohamed) |
| Oct 21 | **Home chapters:** NJWAR, Yawmy Care and Rushr live on home (D-07 lifted for Rushr by Mohamed); Upscend chapter is a held preview (screen from upscend.com, needs Upscend's OK). Selected work also has a user-driven horizontal rail of 12 projects (no autoplay, no pause) | Claude Code (Mohamed) |
| Oct 21 | **Upscend chapter (held preview):** shows the AI tutor screen and says the platform has an AI tutor, quiz generator and video checkpoints (from upscend.com, now in 09); does not claim we built them. Goes live only after Upscend approves screens (D-05) | Claude Code (Mohamed) |
| Oct 21 | **Code clean-up plan round 2** written (`docs/architecture/cleanup-plan-v2.md`): scan result (30 of 63 components only for later releases, local clutter, config and QA-script duplication, 03-copy appendix), 6 phases, 5 decisions waiting on Mohamed | Claude Code (Mohamed) |
| Oct 21 | **Clean-up decisions (Mohamed):** drop `vercel.json` and its parity script; keep the ProofBand project-cards fallback; keep third-party skill data in the repo; add `knip`; archive `docs/review` images outside the repo | Claude Code (Mohamed) |
| Oct 21 | **/book and /book/confirmed use the dark site theme** with the official logo (Mohamed); Cal calendar in dark theme, starts on first intent or after 3 s (page perf 100). Audit script excludes the Cal iframe from axe and marks Cal's inline-style CSP messages as third-party | Claude Code (Mohamed) |
| Oct 21 | **Moving rows (Mohamed, reverses the Oct 18 no-motion rule):** client cards = one slow looping row (about 40px/s); Selected work = one drifting, still-swipeable row (about 34px/s) with arrows. Pause on hover, focus, tap; Pause button only for keyboard focus; reduced motion = still. Rules in 06 §0.9 | Claude Code (Mohamed) |
| Oct 21 | **Logo (Mohamed): original only.** Header, footer, menu and OG images use the kit's `logo-horizontal-for-dark.svg` unchanged; the lighter "for ink" variant is deleted. Brand colors checked: tokens match the guide (`#1240BE`, `#032993`, `#FEFEFE`, `#0F0F0F`, greys `#858585` / `#6B6B6B`, ink `#01082D`) | Claude Code (Mohamed) |
| Oct 21 | **Chapters (NJWAR, Yawmy Care, Rushr) are one sideways row** on home (Mohamed): scroll-snap, swipe, arrows, counter, no autoplay. Stays stacked on /work | Claude Code (Mohamed) |
| Oct 21 | **Motion trimmed (Mohamed: too much):** client cards 26 px/s, project row 18 px/s, chapters auto-turn every 10 s; all pause on hover, focus, tap, off screen; reduced motion = still | Claude Code (Mohamed) |
| Oct 21 | **Chapters row review (Mohamed):** pages turn by themselves every 10 s; on phones and tablets all pages share one title line and one device baseline (heights 730 px phone, 1020 px tablet, 591-616 px desktop); mouse clicks no longer stop the drift (only keyboard focus does) | Claude Code (Mohamed) |
| Oct 21 | **Chapters row (Mohamed): auto-turning, arrows only**: counter and Pause button removed; hover, keyboard focus, tap and manual moves still hold it | Claude Code (Mohamed) |
| Oct 21 | **Selected work sliders never pause (Mohamed):** chapters (every 10 s) and project row (18 px/s) ignore hover, focus and taps; no Pause buttons on them; they step aside only during a manual swipe or arrow. Accepted risk against WCAG 2.2.2 (logged in 06 §0.9); client cards keep their pause rules | Claude Code (Mohamed) |
| Oct 21 | **Slider arrows (Mohamed): new shared component `ui/SliderArrows.astro`** (joined pair, site button shape, brand blue hover, long arrows) on the chapters and the project row; researched: group arrows as a pair, make them prominent, point them the way they move | Claude Code (Mohamed) |
| Oct 21 | **Home performance fix:** sections below the first two use `content-visibility: auto` (base.css) so the first load skips their layout; loop copies are built when a row nears the screen. Lab result: Lighthouse mobile home 98-99, LCP 1.8-2.0 s, TBT 0 (was 0-1900 ms on a noisy run); anchors checked (headings land 16-120 px under the header) | Claude Code (Mohamed) |
| Oct 21 | **Final pre-deploy audit done** (`docs/review/final-audit/copy-facts.md` and `technical.md`; two agents, no P0). Fixed before deploy: no Review wording on /book and /book/confirmed (not rendered), Web3Forms removed from privacy and CSP, share image says clarity call, /book layout shift 0 (was 0.16-0.28 once Cal loads), WebSite node in every JSON-LD graph, CTA and FAQ sizes, hero at 1280x720, curly apostrophes, privacy date. Open P2: legal line length, redirects D-15, CSP breadth, 3 events to create in Cal for V1.2 | Claude Code (Mohamed) |
| Oct 21 | **Why DiscoverDev and Three ways, rethought (Mohamed):** interim redesign is in the build (two-column Why band with a 'Before any code' card; Services head with the definition set bright, side-by-side heading and lead, even card padding); hero board now scales to the screen height (0.7 to 1 by height steps). Eight mockups (4 per section) from thoughtbot, Netguru and Toptal patterns are in `docs/review/why-mock/index.html`, waiting for Mohamed's pick | Claude Code (Mohamed) |
| Oct 21 | **Picks made (Mohamed):** Why DiscoverDev = mockup 2b (one-color headline "Most teams just build what you ask for. We start with what proves the idea.", steps Test the idea / Sketch the product / Pick the first release, example scope card First release / After launch / Not needed yet; the "cut" wording is retired). Three ways = journey map 1a (dashed route through the stage nodes, desktop tag "Validate’s fee credits toward Build"). Built; copy in 03 §2V1 | Claude Code (Mohamed) |
| Oct 21 | **discoverdev.ai is live on Cloudflare:** nameservers moved from Namecheap to Cloudflare (kip/lina.ns.cloudflare.com), custom domains discoverdev.ai and www on Worker dd; Google mail records (MX, SPF, DKIM) kept in Cloudflare DNS; old GitHub Pages A/CNAME records removed. Open: PostHog key and CF beacon token build variables, Web Analytics auto-setup check, Cal.com event content, Search Console TXT, optional www to root redirect | Claude Code (Mohamed) |
| Oct 22 | **Arabic version planned:** `docs/plan/arabic-version.md` (scope = live EN scope; copy loader refactor; `context/03-copy-ar.md` as the only Arabic source; hreflang en/ar/x-default; Arabic entity line for GEO). Waiting on Mohamed: register, service names, transliteration, native reviewer, D-12, D-35, D-09, D-05 consents, target date (Jan 2027 proposed). Also done Oct 21-22: www to root 301 redirect rule and Always Use HTTPS in Cloudflare | Claude Code (Mohamed) |
| Oct 23 | **Gulf partner (D-44):** Saudi partner أذكي التطويرية (Azki), Dammam; UAE partner to be named. Plan: declared local-contracting partnership (they contract and invoice, we deliver), named only with written consent, lawyer check for Saudi anti-concealment rules; never their CR or address as ours. Waiting for Azki's full details. Arabic keyword volumes: Mohamed pulls one combined Keyword Planner export (SA + AE + KW together) | Claude Code (Mohamed) |
| Oct 23 | **Gulf-first (Mohamed):** target is Gulf companies fully. English home/SEO/schema/FAQ reworded Gulf-first (03 first); plan for landing page, SEO and blogs in `docs/plan/gulf-first.md`. Language switcher is a plain text link (hidden on live English until Arabic is reviewed). Reviews: no count ("Rated 5.0 on Clutch"), two Amstadd Clutch reviews added. Arabic home built on /ar (hidden, noindex) | Claude Code (Mohamed) |
| Oct 23 | **Prices stay in USD (Mohamed)**, English and Arabic; no riyal prices. No price number is on the site yet (D-01) | Claude Code (Mohamed) |
| Oct 23 | **Arabic is LIVE (Mohamed's decision):** /ar, /ar/book, /ar/book/confirmed, /ar/privacy, /ar/terms, /ar/404 are indexable, in the sitemap with hreflang en/ar/x-default, and the language link (العربية / English) shows on every page that has a twin. Native review still pending (recorded in `locales.ts` review); Arabic legal pages say the English text prevails | Claude Code (Mohamed) |
