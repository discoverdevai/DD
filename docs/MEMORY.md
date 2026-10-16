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
