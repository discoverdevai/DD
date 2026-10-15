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
- ⏳ Components in `06` §9 + §0; all routes in `qa/routes.txt` from `03`

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

## Needed from Mohamed (blocks nothing in M1)
D-14 DNS access · D-15 old routes · D-23 Cal.com username · D-33 logo SVGs · PostHog key · Web3Forms key · GitHub repo.
