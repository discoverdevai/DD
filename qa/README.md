# QA kit (run by Claude after each milestone)

Verified Oct 15 on a fixture build: both scripts catch missing routes, broken links, AggregateRating, placeholders, missing lang/alt/labels and contrast; Lighthouse runs.

Mohamed says "test M#" to Claude in the DiscoverDev project. Claude then:

1. **Build** in this folder: `npm ci && npm run build` (on Mohamed's computer, via the linked folder).
2. **Static checks:** `node qa/check-dist.mjs dist --report qa/reports/M#-static.md`
   - Covers system files, expected routes (`routes.txt`), title/meta/H1/canonical/OG, JSON-LD (parses, no AggregateRating), shipped placeholders, voice (exclamation marks, banned words), broken internal links, images (alt, size), unexpected third-party scripts, form labels, duplicates.
2b. **CI gates (07 §15):** `npm run test:gates` runs `scripts/cta-ids.mjs`, `inbound-links.mjs` (≥ 3 inbound `<main>` links per indexable page), `jsonld-check.mjs`, `consent-gate.mjs` (no unconsented client or reviewer names) and `redirects-test.mjs --static`. `npm run lint` also runs `i18n-gate.mjs`. All are part of `npm run qa`.
   - Redirects, 404 and headers on the Workers runtime: `npx wrangler dev`, then `npm run test:redirects` (runs in CI on Linux; workerd crashes on this Windows machine until the Visual C++ Redistributable is updated).
2c. **Analytics events (07 §9.3):** `npx astro dev --port 4400`, then `npm run qa:events`. Drives real clicks, the full quiz, an article read (fake clock) and the `/book/confirmed` backup, and checks every event, its properties, first-touch UTMs, `/book` link decoration, no PII and once-only rules. Booking events from the Cal.com embed still need the dry run (10 §3).
3. **Browser checks:** `node qa/serve.mjs dist 4321` (clean URLs, real 404), then run `node qa/browser-audit.mjs http://localhost:4321 --report qa/reports/M#-browser.md`
   - axe WCAG 2.2 AA on every route, mobile and desktop.
   - Horizontal overflow and console/CSP errors.
   - Lighthouse mobile on key pages. Budgets: perf ≥ 90, LCP ≤ 2.0 s, CLS ≤ 0.1, TBT ≤ 200 ms.
4. **Copy and proof:** copywriting-kit:copy-proof-check of built pages against `context/09-proof.md` and `context/03-copy.md`.
5. **Preview or live:** `bash qa/smoke.sh <preview-or-live-url>` checks:
   - Routes return 200.
   - Old routes 301 in one hop.
   - Unknown URLs return 404.
   - System files and security headers are present.
   - No noindex on production, plus http→https and www→apex.
6. **Manual (with Mohamed):**
   - Keyboard path home → /book.
   - Screen reader spot check.
   - Dry-run booking on Cal.com `qa-test`.
   - PostHog shows `cta_clicked`, `booking_started`, `booking_completed`.
   - Quiz submit reaches the inbox.
7. **Report and fix:**
   - Small fixes (copy, meta, alt, tokens) Claude makes directly.
   - The rest goes to `qa/reports/M#.md` as a ranked list for Claude Code.
   - Retest until **0 blockers**.

**Severity:**
- **BLOCKER:** stops the milestone or launch.
- **MAJOR:** fix before go-live.
- **MINOR:** fix in week 1.

**Gate per milestone:**
- **M1:** static checks on the shell.
- **M4/M5:** everything except live.
- **Go/no-go:** everything, on preview.
- **Launch:** smoke on discoverdev.ai.
