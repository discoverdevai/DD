# 00 · Master Plan: DiscoverDev website (weekend launch)

Updated 2026-10-15 · Owner: Mohamed · Builder: Claude Code · Tester: Claude (DiscoverDev project)
**Go-live Sat Oct 17, 2026, 09:00 Cairo. Fallback Sun Oct 18.** These dates supersede every Nov date elsewhere in the pack. The milestone IDs, QA list and runbook in `10` still apply, compressed into this schedule.
Live plan doc: https://claude.ai/code/artifact/e7e25cab-0bdb-4b6c-b53e-827d2454abd3

## Scope
- **Ships Saturday:** the full site map. `04` lists every route.
- **Hidden:** Rushr case study (until metrics and consent).
- **English only;** the code is RTL-ready.
- **Launch defaults:** applied for every open decision, listed in `11` §0b. Each can be swapped after launch without a rebuild.

## Schedule (Cairo time)
| When | Who | What | Done when |
|---|---|---|---|
| Thu Oct 15, tonight | Mohamed | Cloudflare account, registrar login, DNS zone export, Cal.com events (`review-intro`, `clarity-call`, `partner-call`, `qa-test`), PostHog EU, Web3Forms key, GitHub repo, logo SVGs | Access confirmed |
| Thu Oct 15, tonight | Claude Code | **M1** scaffold, tokens, fonts, BaseLayout, header, footer, 404, robots, `_headers`, `_redirects`, CI, preview URL (noindex) | Preview loads, build green → Claude tests |
| Fri Oct 16, 09:00 | Mohamed | Copy all DNS records to Cloudflare, switch nameservers | Email works both ways |
| Fri Oct 16, 09:00–14:00 | Claude Code | **M2** components + **M4** every page from `03` | All routes render → Claude tests |
| Fri Oct 16, 09:00–16:00 | Claude Code | **M5** pillar, C1, C2 drafts; /work/edulens anonymized; JSON-LD, OG, sitemap, RSS, llms.txt | Mohamed reviews articles by 18:00 |
| Fri Oct 16, 14:00–18:00 | Claude Code | **M6** PostHog events, Cal.com embed, quiz + Web3Forms, CSP, redirects | Dry-run booking passes |
| Fri Oct 16, 18:00–24:00 | Claude (tester) | Full QA (`qa/README.md`), fixes, retest | Zero blockers |
| Sat Oct 17, 08:00 | Mohamed | Go/no-go (`10` §3.1) | All green |
| Sat Oct 17, 09:00 | Mohamed + Claude Code | Cutover: custom domain on Worker, AI bots allowed, sitemaps to GSC + Bing | `qa/smoke.sh` green on live |
| Sun Oct 18 – Thu Oct 22 | Both | Fast-follow fixes; swap in named proof as consent arrives | — |

## Fallbacks
- DNS not on Cloudflare by Fri 14:00 → launch Sat on GitHub Pages with the same static build (no `_headers`; meta-refresh redirects) and move to Cloudflare next week.
- No-go Sat 08:00 → Sun Oct 18 09:00. Never cut over unattended.
- **Friday cut order, decided at 18:00:**
  1. C2
  2. C1
  3. Pillar
  4. Quiz email step
  5. /work/edulens
- **Never cut:**
  - Home, /launch-ready, /book + Cal.com
  - /privacy, /terms
  - The 404 page and redirects
  - Core analytics events

## Test loop (each milestone)
1. Claude Code finishes a milestone and runs `npm run build`.
2. Mohamed tells Claude in the DiscoverDev project: "test M#".
3. Claude runs the `qa/` kit on the folder:
   - `check-dist.mjs`
   - axe and Lighthouse
   - copy proof-check
4. Claude fixes small issues directly. Everything else goes to Claude Code as a ranked list in `qa/reports/M#.md`.
5. Retest. Next milestone only with zero blockers.

## Skills by milestone
| Milestone | Skills |
|---|---|
| M1 | modern-web-guidance, frontend-design, agent-protocols:frontend-ui-engineering, rampstack-skills:security-baseline |
| M2 | design-skills:design-systems, rampstack-skills:accessibility-audit, agent-protocols:performance-optimization |
| M4 | copywriting-kit:copy-proof-check, mkt-cro, rampstack-skills:scheduler-and-booking-design, rampstack-skills:quiz-and-assessment-design |
| M5 | cseo-schema, geo-llmstxt, geo-citability, searchfit-seo:internal-linking, rampstack-skills:long-form-content-frameworks |
| M6 | rampstack-skills:product-analytics-setup, rampstack-skills:security-baseline |
| QA | rampstack-skills:qa-testing, cseo-audit, geo-audit, aeotester:audit, agent-protocols:browser-testing-with-devtools |

## After launch
| When | Work |
|---|---|
| Week 1 | GSC/Bing indexing, 404 log, event sanity, Clutch review asks |
| Week 2 | Price cue (D-01), team section (D-16), named EduLens (D-06) once decided or consented |
| Monthly | AI-visibility prompt check, GSC review, 1 article every 2 weeks |
| Dec | Rushr case study when ready; GoodFirms/DesignRush profiles |
| Q1 2027 | `/ar` (D-12 Arabic font), Yawmy Care page |
