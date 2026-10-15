# Build plan: discoverdev.ai v1

Updated after every step (Mohamed's instruction, Oct 15). Strategy and dates: `context/00-master-plan.md`. Decisions: `context/11-open-decisions.md` §0b (launch defaults). QA kit: `qa/README.md`.

**Go-live: Sat Oct 17, 2026, 09:00 Cairo** (fallback Sun Oct 18).
**Design:** Signal, approved Oct 15 (`context/06-design-system.md` §0, `context/01-brand.md`, `context/03-copy.md` §2.2a).

## Architecture decisions
| # | Decision | Why |
|---|---|---|
| A1 | Astro 7.3.8 static, no client framework, plain CSS tokens with logical properties | `07` §3 |
| A2 | **Launch defaults instead of gates.** The `11` §0b default is the content: no price number, EduLens anonymized with its metric, no client names, quotes or logos, no team, no WhatsApp or reply-time promises. Items still unresolved are left out of the code entirely, never rendered as placeholders. | `11` §0b; CLAUDE.md "keep tagged items hidden"; `qa/check-dist.mjs` blocks any `[VERIFY]`-style text |
| A3 | Page copy in typed per-locale modules `src/content/copy/en/*.ts`; every UI string through `t()` | CLAUDE.md "every string goes through the i18n layer"; `/ar` = add `copy/ar` |
| A4 | Signal surfaces: `data-surface="ink"` (workshop) and `"paper"` (report); components read semantic tokens only | `06` §0 |
| A5 | Interim logo: official mark PNG tinted by CSS mask per the `06` §11 colourways; wordmark cropped from the official reversed PNG (not traced, not typed). D-33 still open. | No SVG exists yet |
| A6 | No inline `style=""` attributes anywhere | Astro's CSP adds style hashes, so `'unsafe-inline'` would be ignored and inline styles blocked (verified in Astro docs, Oct 15) |
| A7 | Third-party services env-driven and inert when unset (Cal.com, PostHog, CF beacon, Web3Forms) | `07` §19 |

## Milestones and steps
Status: ✅ done · 🔄 in progress · ⏳ next

### M1 Foundation (Thu Oct 15, night). Skills: modern-web-guidance, agent-protocols:frontend-ui-engineering, rampstack-skills:security-baseline
- ✅ S1 Signal merged into context 06/01/03
- ✅ S2 `package.json` exact pins (astro 7.3.8, sitemap 3.7.4, check 0.9.10, TS 6.0.3 per check's peer range, wrangler 4.151.0, sharp 0.35.5), `.nvmrc` 24, `.gitignore`; install OK (esbuild and workerd install scripts approved)
- ✅ S3 `astro.config.mjs`, `wrangler.jsonc`, `tsconfig`, `.env.example`
- ✅ S4 `tokens.css` (06 §2 + §0), `base.css`, fonts (Manrope, Rubik, JetBrains Mono)
- ✅ S5 i18n registry + `t()`, `lib/seo.ts`
- ✅ S6 Brand assets: interim mark and wordmark, favicon, apple-touch, `logo-512`
- ✅ S7 BaseLayout, SkipLink, Header (Services disclosure, mobile `<dialog>`), Footer, Logo, CtaLink, Icon
- ✅ S8 Home hero with RunPanel (the token proof), 404
- ✅ S9 System files: `robots.txt`, `_headers`, `_redirects`, `security.txt`, `llms.txt`, sitemap
- ✅ S10 css-logical-lint, CI workflow, git init + first commit
- 🔄 S11 Gate: build, `astro check`, lint, `qa/check-dist.mjs` (route-missing blockers expected until M4), axe on the shell

### M2 + M4 Components and every page (Fri Oct 16). Skills: design-skills:design-systems, rampstack-skills:accessibility-audit, agent-protocols:performance-optimization, copywriting-kit:copy-proof-check, mkt-cro, rampstack-skills:scheduler-and-booking-design, rampstack-skills:quiz-and-assessment-design
- ✅ 03 §0.7 added: how every [VERIFY]/[PRICE]/[CONSENT]/[TEAM] tag resolves under the launch defaults (CLAUDE.md: change 03 first)
- ✅ Shared sections: Section, PageHero, CardGrid, Steps + LayerChip, CheckList, FitList, PathCards, ReviewSnapshot, Faq, CtaBand, ProofStrip (commit `0a728d4`)
- ✅ Home `/` complete (team + testimonials omitted per §0.7). Visual check at 1440 and 375 via `scripts/screens.mjs` (headless Playwright, no overflow)
- 🔄 Parallel helpers (own files only, no shared edits, no builds): A `/validate` `/build` `/scale` · B `/partners` `/about` · C `/privacy` `/terms` drafts · D insights collection, hub, article template · E pillar, C1, C2 drafts
- 🔄 Claude Code: `/launch-ready`, `/book` + `/book/confirmed` (Cal.com), `/launch-check` quiz, `/work` + `/work/edulens`, analytics + UTM

### M5 Content + SEO (Fri). Skills: cseo-schema, geo-llmstxt, geo-citability, searchfit-seo:internal-linking, rampstack-skills:long-form-content-frameworks
- ⏳ Pillar, C1, C2 drafts; `/work/edulens` anonymized; JSON-LD, OG, RSS, final `llms.txt`

### M6 Wiring (Fri). Skills: rampstack-skills:product-analytics-setup, rampstack-skills:security-baseline
- ⏳ PostHog events, Cal.com embed, quiz + Web3Forms, CSP check, redirects

## Progress log
| When (Cairo) | Step | Result | Notes |
|---|---|---|---|
| Oct 15 | Direction rounds 1–3 | Signal approved | Skills: design-critique, art-direction, design-systems |
| Oct 16 01:30 | S1 merge | Done | 06 is now v1.1 with a §0 that supersedes conflicting sections |
| Oct 16 01:35 | S2 install | Done | `@astrojs/check` 0.9.10 rejects TS 7, so pinned TS 6.0.3 |
| Oct 16 01:45 | S3 config | Done | Fonts API, CSP and sitemap verified against Astro docs (MCP). `style-src 'self'` only (A6) |
| Oct 16 01:50 | S4 tokens | Done | `tokens.css` is generated from 06 by `scripts/build-tokens.mjs` (06 stays the source of truth; spec and code can't drift) |
| Oct 16 01:55 | S5 i18n + SEO | Done | `t()` with named args; 58 UI keys from 03 §1. The locations line is split into 2 strings so it renders as a list, not middle-dot text (06 §1) |
| Oct 16 02:00 | S6 brand assets | Done | `scripts/brand-assets.mjs`: wordmark split into "Discover" and "Dev" masks from the official white PNG, so 06 §11 two-tone colourways work on ink and paper. Favicon, apple-touch, logo-512. Interim until D-33 |
| Oct 16 02:10 | S7 shell | Done | Header (Services disclosure, `<dialog>` menu), Footer, StickyBookBar, Logo, CtaLink (validates ctaId), CtaTerms, ProofChip, Eyebrow. Route registry: nav, footer and CTAs link only to live routes; booking falls back to email until `/book` ships |
| Oct 16 02:15 | S8 hero + 404 | Done | RunPanel from 03 §2.2a. Visual check at 1440 and 375 found: run sequence 3.0s (over 06's 2.4s cap), so AI steps cut to 220ms (2.38s); header CTA wrapped at 375, so nowrap + tighter mobile header; star alone on its line, so the proof chip uses inline flow |
| Oct 16 02:20 | S9 system files | Done | `llms.txt` generated from live routes (05 §5.2 "only live pages"). HSTS without `includeSubDomains` (D-41 default). security.txt uses hello@ (D-22) |
| Oct 16 02:25 | S10 lint + CI + git | Done | `scripts/css-logical-lint.mjs` OK; `.github/workflows/ci.yml`; first commit `034607a`. Shiki off (inline styles conflict with CSP; decide in M5) |
| Oct 16 02:25 | S11 gate | Static OK | `astro check` 0 errors; lint OK; `check-dist`: 0 major, only the 17 not-yet-built routes as blockers (expected until M4). Two QA kit bugs fixed: `%20` in folder path skipped `routes.txt`; tags inside inlined JS were read as `<a>`. axe/Lighthouse tooling installing |
| Oct 16 02:45 | M1 browser gate | Tooling ready | Playwright, axe, Lighthouse, Chromium installed per `qa/README.md` |
| Oct 16 03:00 | M4 home | Done | Navy band and footer were showing the paper green for check marks; fixed by remapping layer tokens on inverse/footer in `base.css` |
| Oct 16 03:05 | M4 split | Started | 5 helpers in parallel on separate files; Claude Code integrates, flips routes live, builds and runs QA |
| Oct 16 | Home v2 rebuild | Done | After "worst landing page" feedback: reference teardown (`docs/home-teardown.md`), all-ink home, workspace scene, CSS scroll-driven motion, two-tone statements. Skills: design-elevation, frontend-ui-engineering |
| Oct 16 | Strategy v2 | Done | Mohamed: the Review is one service; position like TrianglZ around Agile v2 and AI acceleration. `docs/strategy-v2.md` (positioning, message hierarchy, buyers, CTA system, home IA, guardrails vs TrianglZ). Skills: marketing-strategy-pmm (Dunford), mkt-cro |
| Oct 16 | Context update | Done | 03 §0.2, §0.3, §1.1, §1.2, new §2A home v3, §8.3 launch strings; 04 §3.1–3.3, §4.1, §6.1; 02 buyers; 01 architecture; 05 home meta, keywords, llms.txt order |
| Oct 16 | Home v3 build | Done | New: DeliveryScene (Agile v2 sprint board, AI lane → senior lane via subgrid, ≈1.6s one-time sequence), AgileSplit, Engagements, Capabilities. Reused: hero shell, ProofBand, ProcessTimeline (configurable vignettes + chips), CaseMetric, Statement (+id anchor), Pillars, FaqSplit, Closer (clarity call). Nav: Review moves into Services, "How we work" → /#agile-v2, button "Book a call"; sticky bar = clarity (Review on /launch-ready). /partners and /about set live. Removed unused v1 HomeHero |
| Oct 16 | v3 rollout | Done | Mohamed approved home v3. 06 §0.4 amended (all-ink inner pages, raised variant, horizon closer, v3 type scale). Shared components restyled once so every page inherits: Section (`raised`, hairlines, `.section-title`), CardGrid (home tiles, index, spotlight), Steps (node track), CtaBand (horizon), ProofList, PageHero (pill, v3 H1, light, load sequence). New ServiceGlance hero aside on Validate/Build/Scale built only from strings already on the page. Inner FAQs use FaqSplit. Converted: /validate, /build, /scale, /launch-ready (report stays paper), /partners, /about, /work, /work/edtech-ai-agents. Spotlight script moved to BaseLayout |
| Oct 16 | Performance | Done | Home LCP 2.26s → 1.66s: `qa/serve.mjs` now brotli/gzip-compresses text like Cloudflare does in production (it was serving raw bytes, so Lighthouse measured uncompressed transfer); `scopedStyleStrategy: 'class'` (−4 KB HTML). Tried `inlineStylesheets: 'always'`: worse, reverted. Article CLS 0.14 → 0.007 (dates line wrapped differently in fallback vs Rubik at 390px; now stacked on phones). Run-panel contrast flag was a mid-fade frame: browser audit now waits 2.6s (06 §9.6 cap) before axe. 320px overflow fixed on /insights and articles (minmax(0, 1fr) tracks, quiz banner CTA wraps) |
| Oct 16 | Gate | Pass | `npm run qa`: 0 errors, lint OK, 10/10 unit, 19 pages, 0 blockers. Browser audit: all Lighthouse rows PASS (perf 99, a11y/SEO/BP 100, LCP ≤ 1.81s, CLS ≤ 0.032); axe clean on all converted pages at 1440/375 and reduced motion. Only open item: optional C3 article `/insights/fix-or-rebuild-ai-app` not written yet |
| Oct 16 | Gate (strategy v2) | Static pass | `npm run qa`: check 0 errors, lint OK, 10/10 unit, build 19 pages, check-dist 0 blockers (1 minor: optional C3 article). Browser audit: home a11y/SEO/BP 100, perf 97, LCP 2.26s (budget 2.0s, open); /launch-ready run-panel contrast flagged mid-animation (open); pillar article CLS 0.14 (open) |

## Needed from Mohamed (blocks nothing in M1)
D-14 DNS access · D-15 old routes · D-23 Cal.com username · D-33 logo SVGs · PostHog key · Web3Forms key · GitHub repo.
