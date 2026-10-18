# Home page review: SEO, AEO/GEO, technical (Oct 18, 2026)

Method: read-only. Evidence comes from reading `dist/index.html` (198,907 bytes uncompressed), `dist/llms.txt`, `dist/robots.txt`, `dist/sitemap-0.xml`, `src/lib/seo.ts`, `src/pages/index.astro`, `context/05`, `context/09`, `context/08`. Nothing was measured in a browser (no Lighthouse, no CWV numbers, no schema validator run). Speed points are readings of the markup.

## 1. Verdict

The home page is technically clean and close to the 05 spec: title, meta, canonical, OG, one H1, one JSON-LD graph with no banned types, 8 server-rendered FAQs, robots.txt and llms.txt all in place, and no content depends on JS. The weak spot is AEO and entity clarity. The first ~200 words of the page are a slogan, a decorative fake sprint board and a logo strip, so an AI engine cannot quote who DiscoverDev is, where it is and who it serves from the top of the page; that sentence appears only in the footer. The page also shows no price (llms.txt does), uses almost none of its own keyword terms ("startup" 0 times, "MVP" 2 times in main), and four of five "Selected work" links go to a bare `/work`. Trust signals are real but have no named person, and "Verified reviews" overstates a mixed source.

## 2. Scores (from markup, not measured)

| Dimension | Score | Why |
|---|---|---|
| SEO on-page | 7/10 | Title, meta, H1 match 05; brand-only H2s, no startup/MVP terms, generic link anchors. |
| Structured data | 8/10 | One valid-looking graph, matches visible text, nothing banned. No LinkedIn sameAs, Service nodes not in graph. |
| AEO/GEO | 6/10 | FAQ is crawlable and well sized; entity line buried in footer, no numbers in answers, "Yes." openers. |
| Technical / CWV | 8/10 | LCP is text, fonts preloaded with size-adjusted fallbacks, images sized. Risks: 4 blocking CSS files, inline base64 logos, duplicate nav. |
| Internal links | 6/10 | All 5 services, pillar, launch check linked in main; one guide unlinked; project links collapse to `/work`. |
| E-E-A-T | 6/10 | Clutch link, 11 reviews, blockquotes. No people, no founding year, "verified" wording. |

## 3. Findings by section

### Head and global
- Title: `Product & Engineering Partner for Founders | DiscoverDev`, 56 chars, verbatim 05. Meta: 145 chars, verbatim 05. Both in range. **Low**: no keyword from the 05 map (est. "product development company for startups"); accepted by decision, retest after GSC data.
- Meta ends "Senior teams, and you own it all." (fragment). **Low**. Fix in 03/05 first: "Senior teams, AI-accelerated, and you own it all."
- Canonical `https://discoverdev.ai` and og:url have no trailing slash, sitemap has `https://discoverdev.ai/`. **Low**. Fix: one form everywhere.
- OG complete (type, site_name, locale, title, description, url, image 1200x630, alt); `og/home.png` exists (69 KB). Twitter has only `twitter:card`; falls back to OG, fine. No hreflang: correct until `/ar`. No robots meta: indexable. **Low**: add `max-image-preview:large`.

### Hero
- One H1: "Turn your idea into a live product in weeks." Benefit line, no category or keyword. 03-copy wins, so leave it. **Low**.
- Sub: "DiscoverDev builds it with senior engineers and AI, in 8-12 weeks. You own everything." No "founders", no place, no company type. **High (AEO)**. Fix: add one visible entity sentence under the sub, from the approved D-43 line: product and engineering company for founders and teams, hub in Alexandria, Egypt, clients in the US and the Gulf. Edit `03-copy.md` first.
- The decorative sprint board (about 110 words: "Draft the booking API from the spec", "Release 0.4 Shipped to staging") is real DOM text right after the H1. It is labelled "Example" but dilutes the first 200 words and could be summarised as fact. **Medium**. Fix: `aria-hidden="true"` and `data-nosnippet` on the scene, keep one caption.
- LCP element is the H1 text (no hero image). Manrope woff2 is preloaded, `font-display: swap`, size-adjusted Arial fallback. Low CLS and LCP risk by reading.

### Proof band, logos, map
- H2 "Teams we've built for", 10 clients as crawlable text with role and country. Good.
- Logos are `<img src="data:image/webp;base64,..." alt="" width="44" height="44">`, 20 in HTML (10 duplicated in an `aria-hidden` marquee), about 1.3-3.6 KB each. Empty alt is fine because the name is adjacent text. **Low**. Fix: build the loop copy in CSS/JS so the logos are not in HTML twice.
- Map SVG has `role="img"` and a good `aria-label` ("clients in North America, Europe, Africa and Asia, with teams in Texas, USA and Alexandria, Egypt"). The legend is `aria-hidden`, and country names exist only as SVG `<title>`s. **Medium**. Fix: add a short visible or sr-only list of countries taken from `09-proof` (US, UK, Saudi Arabia, Kuwait, Egypt, Switzerland, Italy).
- "Clients on 4 continents" and "AI in production across multiple clients" trace to `09-proof` line 10. OK.

### How we work and lifecycle
- H2 "Discover first. Build with AI. Seniors sign off." plus H3 steps; paragraph "The DiscoverDev Way is how every project runs..." is a quotable ~55-word definition. Keep.
- The page shows two different "four steps" lists (Discover / AI drafts / A senior signs / Live, and Discover / Plan / Build / Ship & Stay). **Low**: could blur an AI summary. Fix: make the first an `aria-hidden` visual and keep one text list.

### Engagements and capabilities
- H2 "Three ways to work with us". Card links are single words ("Validate", "Build", "Scale", "Partners") with "See Validate". **Medium**. Fix: keyword-bearing link text ("Product discovery for startups", "Fixed-price MVP development", "Dedicated development team").
- No price anywhere on the page, not even "from". llms.txt says "From $1,490 (USD)" for the Review, so machine file and page disagree. **High (AEO/consistency)**. Fix: show "from $1,490" in the Review card and pricing FAQ (D-01 decided it), or remove it from llms.txt until visible.
- "What we build" groups carry good entity terms (AI agents in Arabic and English, legacy modernization, cloud migration) but are plain lists. **Low**.

### Project chapters
- H2s are bare "NJWAR" and "Yawmy Care". **Medium**. Fix: "NJWAR: an AR furniture store for Saudi Arabia", "Yawmy Care: our own childcare platform".
- Images: real files, `srcset`, `sizes`, width/height, `loading="lazy"`, specific alt text, largest variant ~43 KB. Good, below the fold.
- "Try our AR prototype" links to `furniture-webar.pages.dev` (`rel="noopener"`): an unbranded host and not noindexed by our headers. **Low**.

### Selected work
- Five cards; only EdTech links to its page (`/work/edtech-ai-agents`). The other four link to bare `/work`, though `#project-lms-team`, `#project-health-app`, `#project-support-agent`, `#project-call-ops` exist in `dist/work.html`. **Medium**. Fix: link to those anchors.
- "60-90% lower AI cost" matches `09-proof`.

### Reviews
- `<figure><blockquote>` with name, role, tags; no Review or AggregateRating markup (rule satisfied).
- H2 "Verified reviews from founders and teams" while the score line says "Clutch, Upwork, Fiverr and direct". Direct reviews are not platform-verified. **Medium**. Fix: "Reviews from founders and teams", or label verified sources.
- Several quotes are one short generic line ("The quality of their work is top-notch."), weak E-E-A-T. Named quotes still need client consent (D-05, `09-proof` line 88). **Medium**.

### Why / pillars
- H2 is a full sentence, strong as copy, not matchable to a query. **Low**. "Four clients expanded scope with us" traces to `09-proof`; keep client names off.

### Guides
- Links: launch check, pillar, security holes, fix-or-rebuild. The Lovable checklist guide (in sitemap and llms.txt) is not linked from home, and there is no text link to `/insights`. **Medium**. Fix: add both.

### FAQ (8 Q&As in HTML and FAQPage JSON-LD, text identical)
- Answer length 23-46 words, server-rendered, good extraction size.
- Several open with "Yes." / "You do." and omit the brand, so a lifted passage loses its subject. **Medium**. Fix: "DiscoverDev uses AI to draft code, tests and documentation. Senior engineers..." and "You own all code DiscoverDev builds...".
- "How does pricing work?" has no number. **High** (same as price above).
- Missing queries: "What is DiscoverDev?", "Who is DiscoverDev for?", "What does a Launch-Ready Review cost?". **Medium**. FAQPage markup is optional per 05 but harmless and useful to parsers.

### Closing band and footer
- Footer carries the entity line verbatim, "Texas, USA", "Alexandria, Egypt (engineering hub)", "We work in Arabic and English", Clutch link. Right content, wrong place (bottom only). 14 internal footer links, within the 15 limit.
- No LinkedIn link, and `sameAs` has only Clutch; D-29 says Clutch + LinkedIn company. **Medium**. Fix: add the LinkedIn URL to footer and `seo.ts` (strong entity-disambiguation signal).

### JSON-LD (one block)
- Present: Organization (`#org`, logo ImageObject 512, description = entity line, contactPoint, Alexandria address, 6 areaServed, knowsAbout, knowsLanguage, sameAs, hasOfferCatalog), WebSite, WebPage (about org), FAQPage. No banned types.
- `hasOfferCatalog` references `/validate#service` etc., not defined in this graph. Valid cross-page, **Low**. No `foundingDate` (D-21) and no Texas address (D-08): correct. I did not run `scripts/jsonld-check.mjs` or a validator.

### llms.txt, robots, sitemap
- llms.txt follows strategy-v2 order, entity line, services with timelines, guides with descriptions, contact. Only discrepancy: the $1,490 price. **Low**: "Home" link is redundant.
- robots.txt matches 05 §5.1 exactly. Cloudflare AI-bot setting cannot be checked from `dist`.
- Sitemap 19 URLs, excludes 404, `/book/confirmed`, `/design-system`; only insights have `lastmod` (phase 2 in 05). **Low**.

### Technical / CWV (markup only)
- Four render-blocking stylesheets: `BaseLayout` 31 KB, `index` 46.6 KB, `Artifact` 9 KB, `Chapters` 7 KB raw, plus ~9 KB inline. **Medium**: confirm with Lighthouse; `index.css` includes below-fold sections.
- JS is small (8 module scripts under 1.3 KB each, `analytics` 3.4 KB). `_astro/module.DdX6E69B.js` is 307 KB (analytics library); not a script tag in the home HTML, but confirm it loads after idle/consent so it does not hit INP. **Medium, needs measurement**.
- Landmarks: one `<main>`, `<header>`, `<footer>`, skip link, sections with `aria-labelledby`. But two `<nav aria-label="Main">` (desktop and mobile overlay) and an `<h2>Menu</h2>` before the H1. **Low/Medium**. Fix: label the overlay "Mobile", make "Menu" a non-heading.
- Crawlability: all content is in static HTML; JS only adds toggles.

### Competitors (08, research)
- Rescue specialists (RapidDev, Valletta) show price and guarantee near the top. DiscoverDev shows neither on the home.
- Regional studios lead with named places and clients; DiscoverDev relies on the map.
- Competitors with visible people win E-E-A-T; DiscoverDev shows no person on the home (D-17 pending).

## 4. Top 10 actions

| # | Action | Effort |
|---|---|---|
| 1 | Add the entity sentence (who, what, where, for whom) in the hero; `aria-hidden` the sprint board. Edit 03-copy first. | S |
| 2 | Show "from $1,490" on the Review card and in the pricing FAQ, or drop it from llms.txt until visible. | S |
| 3 | Rewrite FAQ answers to start with the subject, drop "Yes." openers, add "What is DiscoverDev?" and Review cost. Keep JSON-LD identical. | S |
| 4 | Add LinkedIn company URL to `sameAs` and footer (D-29). | S |
| 5 | Link "Selected work" cards to their `/work#project-...` anchors; link the Lovable checklist guide and `/insights` from Guides. | S |
| 6 | Keyword-bearing service link text and descriptive project H2s (NJWAR, Yawmy Care). | M |
| 7 | Visible country list under the map, only countries in `09-proof`. | S |
| 8 | Reword "Verified reviews"; confirm quote consent (D-05) before launch. | S |
| 9 | Run Lighthouse mobile; check 4 blocking CSS files, the 307 KB analytics module timing, and the duplicated base64 logos. | M |
| 10 | Fix duplicate `nav aria-label="Main"` and `h2 Menu`; add `max-image-preview:large`; make root canonical consistent. | S |
