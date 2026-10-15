# Project skills: DiscoverDev marketing site

45 third-party skills (MIT), installed as Claude Code project skills for the DiscoverDev Astro site (en/ar, SEO, AI search, CRO, copy).
Markdown only. **No scripts, hooks, agents or installers from the source repos were installed or run.**

| Prefix | Source repo | Commit | Installed |
|---|---|---|---|
| `cseo-` | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) v2.4.2 | `4b99de2` (2026-10-05) | 16 |
| `geo-` | [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | `989cae0` (2026-10-05) | 9 |
| `mkt-` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | `55ff469` (2026-10-14) | 20 |

Licenses: `_licenses/LICENSE-<repo>.txt`.

## Start here

1. **`.agents/product-marketing.md` already exists.** Do not run `/mkt-product-marketing` to regenerate it; edit it only when `context/01`, `02`, `08` or `09` change. All `mkt-*` skills read it.
2. Planning, IA and copy are done (`context/03`–`05`). Use skills to check and implement, not to rewrite: which skill per milestone is in `context/00-master-plan.md`.
3. QA before launch: `cseo-audit` (or `cseo-technical` + `cseo-page`), `geo-audit`, `mkt-launch`.
4. Skill advice that conflicts with `context/` loses (e.g. no `Review`/`AggregateRating` schema, PostHog not GA4).

## Installed skills

### claude-seo (`cseo-`)

| Skill | Purpose on this site | Use when |
|---|---|---|
| `cseo` | Hub. Routes `/cseo <cmd> <url>` | The SEO task is clear but the right skill isn't |
| `cseo-audit` | Full-site SEO audit, health score 0-100 | Pre-launch and post-launch audit |
| `cseo-page` | Deep single-page check | Each key page (home, Launch-Ready Review, offers) |
| `cseo-technical` | Crawl, index, CWV, rendering, security | Astro build output, robots, canonicals |
| `cseo-content` | E-E-A-T and content quality | Case studies, about, service pages |
| `cseo-content-brief` | SEO content briefs | Before writing any blog post or landing page |
| `cseo-schema` | Detect, validate, generate JSON-LD | Organization, Service, Breadcrumb, Article (no `Review`; `05` §4) |
| `cseo-images` | Image SEO and performance | Alt text, sizes, formats, lazy loading |
| `cseo-sitemap` | Sitemap analysis and generation | Astro sitemap with en/ar alternates |
| `cseo-geo` | AI Overviews and AI-search optimization | AI-search readiness of key pages |
| `cseo-agentic` | Agent readiness: llms.txt, Markdown, WebMCP, AI-bot access | AI agent/crawler access policy |
| `cseo-plan` | SEO strategy (agency/SaaS templates) | Initial SEO roadmap |
| `cseo-competitor-pages` | "X vs Y" and alternatives pages | Comparison pages (e.g. vs agencies or freelancers) |
| `cseo-hreflang` | hreflang, cultural profiles, content parity | en/ar setup, US + GCC targeting |
| `cseo-cluster` | SERP-based topic clusters, hub-spoke map | Blog and content architecture |
| `cseo-sxo` | Search-experience fit, page type vs intent | Page doesn't match what ranks |

### geo-seo-claude (`geo-`)

| Skill | Purpose on this site | Use when |
|---|---|---|
| `geo-audit` | Full GEO + SEO audit, GEO score 0-100 | AI-search readiness review |
| `geo-citability` | Scores passages for AI citability | Rewriting key copy so AI can quote it |
| `geo-crawlers` | AI crawler access (robots, meta, headers) | Setting robots.txt for GPTBot, ClaudeBot, PerplexityBot etc. |
| `geo-llmstxt` | Validate or generate llms.txt | Creating `/llms.txt` |
| `geo-schema` | Schema for entity recognition | Organization/sameAs entity graph |
| `geo-technical` | Technical SEO with GEO checks (SSR) | Confirm static HTML is AI-readable |
| `geo-content` | E-E-A-T for AI citability | Proof, authorship, case studies |
| `geo-platform-optimizer` | Per-platform (AIO, ChatGPT, Perplexity, Gemini, Copilot) | Platform-specific tuning |
| `geo-brand-mentions` | Brand presence on sources AI trusts | Clutch, Reddit, Wikipedia, LinkedIn footprint |

### marketingskills (`mkt-`)

| Skill | Purpose on this site | Use when |
|---|---|---|
| `mkt-product-marketing` | Creates `.agents/product-marketing.md` | **First.** Update when positioning changes |
| `mkt-copywriting` | Page copy | Writing any page |
| `mkt-copy-editing` | Polish existing copy | Editing passes |
| `mkt-cro` | Conversion optimization of pages and forms | Booking flow (Cal.com), CTAs, hero |
| `mkt-site-architecture` | Page hierarchy, nav, URLs, internal links | Sitemap and IA |
| `mkt-schema` | Schema markup (marketing angle) | Quick JSON-LD for marketing pages |
| `mkt-ai-seo` | Get cited by AI answers | AI-search content strategy |
| `mkt-seo-audit` | SEO audit (marketing angle) | Lightweight audit of a page set |
| `mkt-lead-magnets` | Lead magnet design | Gated or ungated assets for founders |
| `mkt-free-tools` | Free tools as marketing | e.g. a "launch readiness" checker |
| `mkt-offers` | Offer construction, guarantees | Launch-Ready Review offer and guarantee |
| `mkt-pricing` | Pricing and pricing-page strategy | How to present fixed-fee and retainer offers |
| `mkt-marketing-psychology` | Persuasion principles | CTA and page persuasion |
| `mkt-customer-research` | VOC research | Mining reviews and calls for language |
| `mkt-competitor-profiling` | Competitor profiles | Researching agencies and dev shops |
| `mkt-competitors` | Comparison and alternatives pages | Building vs pages |
| `mkt-directory-submissions` | Directory listings | Clutch, GoodFirms, etc. |
| `mkt-launch` | Launch plan and site go-live QA | Website launch |
| `mkt-analytics` | Tracking plan (skill assumes GA4/GTM; this site uses PostHog EU + CF Web Analytics, `07` §9) | Measure clarity calls booked (North Star) |
| `mkt-programmatic-seo` | Templated pages at scale | Industry or location pages, if ever |

## Overlaps (pick one per task)

- **Schema:** `cseo-schema` (primary), `geo-schema` (entity/AI angle), `mkt-schema` (quick).
- **Audit:** `cseo-audit` (technical), `geo-audit` (AI search), `mkt-seo-audit` (light).
- **AI search:** `cseo-geo` / `cseo-agentic` (technical), `geo-*` (deep), `mkt-ai-seo` (content strategy).
- **Competitor pages:** `mkt-competitors` (copy and structure), `cseo-competitor-pages` (SEO).

## Excluded

| Skill | Reason |
|---|---|
| claude-seo `seo-drift` | Needs the Python runtime and SQLite baselines. Nothing to baseline before launch. Revisit after launch |
| claude-seo `seo-programmatic` | Duplicate of `mkt-programmatic-seo` |
| claude-seo `seo-local`, `seo-maps` | Local/GBP business. Maps needs DataForSEO (paid) |
| claude-seo `seo-google` | Needs Google OAuth/API credentials and scripts. Revisit after launch for GSC/GA4 |
| claude-seo `seo-backlinks` | Moz/Bing API keys and scripts. New domain |
| claude-seo `seo-dataforseo`, `seo-image-gen` | Paid APIs (DataForSEO, Gemini) |
| claude-seo `seo-ecommerce` | Not ecommerce |
| claude-seo `seo-flow` | Syncs a prompt library from GitHub via a script |
| claude-seo `extensions/*` (ahrefs, bing, dataforseo, firecrawl, matomo, profound, seranking, unlighthouse, banana) | Paid or credentialed; their installers write API keys into `~/.claude/settings.json` |
| geo `geo` (orchestrator) | Depends on scripts and subagents. `geo-audit` covers it |
| geo `geo-report`, `geo-report-pdf`, `geo-compare`, `geo-proposal`, `geo-prospect` | Agency client reporting, CRM (`~/.geo-prospects`, Flask app) |
| geo `geo-update` | Self-updater (pulls the repo) |
| mkt `ab-testing`, `popups`, `signup`, `emails`, `content-strategy` | Out of scope for now (referenced by installed skills; marked "(not installed)") |
| mkt `ads`, `ad-creative`, `aso`, `attribution`, `churn-prevention`, `co-marketing`, `cold-email`, `community-marketing`, `events`, `image`, `influencer-marketing`, `marketing-council`, `marketing-ideas`, `marketing-loops`, `marketing-plan`, `onboarding`, `paywalls`, `prospecting`, `public-relations`, `referrals`, `revops`, `sales-enablement`, `sms`, `social`, `video` | Not site-build work, or sales/CRM/paid channels |

## Changes from upstream

- Renamed dirs and frontmatter `name` to the prefixed names. Descriptions unchanged.
- Cross-references rewritten to prefixed names (`seo-x` to `cseo-x`, `/seo cmd` to `/cseo cmd`, `${CLAUDE_PLUGIN_ROOT}/skills/...` to `.claude/skills/...`, mkt `**name**` / `` `name` `` / `../name/` to `mkt-name`). References to skills that are not installed are left as-is or marked "(not installed)".
- Each `cseo-*` SKILL.md, plus `geo-audit` and `geo-schema`, has a "Local install note" saying scripts and subagents are not installed and how to do those steps manually (`curl -sL` raw HTML or read `dist/**/*.html`).
- Removed the "Community Footer" section from `cseo` (it told Claude to add skool.com promo links to every deliverable).
- Excluded `evals/`, tests, scripts, agents, hooks, schema JSON templates. Kept `references/`, `assets/*.md`, `cseo-cluster/templates/cluster-map.html` (inline JS only, no external requests), and the `mkt-directory-submissions` CSV template.

## Scripts

| Repo | Kept | Dropped |
|---|---|---|
| claude-seo | none | 60 Python scripts + `scripts/claude-seo` launcher (venv, pip, Playwright). Needs shared runtime (`runtime.py`, `url_safety.py`); too large to fully review for this install |
| geo-seo-claude | none | `fetch_page.py`, `citability_scorer.py`, `brand_scanner.py`, `llmstxt_generator.py`, `crm_dashboard.py`, `webapp/` (Flask) |
| marketingskills | none | `tools/clis/*.js` (66 Node API CLIs), `scripts/*` (repo maintenance) |

Inline code kept as text: `geo-brand-mentions` has a `python3 -c` snippet that queries the Wikipedia/Wikidata APIs (read-only, needs `requests`). WebFetch fallback is in the same skill.

## Security review (2026-10-15)

**No red flags in the installed markdown.** I checked every file for prompt-injection phrasing, exfiltration, secret or `.ssh` reads, `curl | sh`, settings or hook changes, safety bypasses, hidden Unicode and HTML comments.

Findings (none of these were installed):
- **claude-seo:**
  - `install.sh`/`.ps1` clone pinned tag v2.4.2 into `~/.claude` (global), build a venv and pip-install deps. Optionally they install Chromium.
  - `hooks/hooks.json` adds a PostToolUse hook on every Edit/Write: node, then Python `validate-schema.py`. I reviewed it: a benign local JSON-LD validator with no network access.
  - The extension installers write API keys to `~/.claude/settings.json`.
  - The scripts call Google APIs (PSI, CrUX, GSC, GA4, Indexing, NLP, YouTube, Keyword Planner), Moz, Bing Webmaster, DataForSEO, Keywords Everywhere, IndexNow, Common Crawl and the GitHub API. They include an SSRF guard.
  - The promo footer is removed (see above).
- **geo-seo-claude:** `install.sh` clones **unpinned `main`**, installs into `~/.claude`, builds a venv and rewrites script shebangs. The CRM stores data in `~/.geo-prospects`.
- **marketingskills:**
  - No installer or hooks for skills. The `tools/clis` call ad and analytics APIs with env keys.
  - Disclosed sponsored-partner mentions (◆ Ploy, Converly, AIsa, Introw) appear in `mkt-site-architecture`, `mkt-programmatic-seo`, `mkt-ai-seo` and `mkt-launch` references. Treat these as ads.
  - `mkt-ai-seo` suggests `npx is-agentic`, a third-party npm package. Run it only with approval.

## Optional API keys (none required)

Google PSI/CrUX API key, or OAuth for GSC/GA4 (field data in `cseo-technical`/`cseo-audit`). DataForSEO MCP (SERP data in `cseo-cluster`/`cseo-sxo`/`cseo-content-brief`; they fall back to WebSearch). Moz and Bing Webmaster (backlinks; not installed).
