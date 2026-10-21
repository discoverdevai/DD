# DiscoverDev performance, SEO and GEO audit (live https://discoverdev.ai/)

Date: 2026-10-21. Method: curl on the live domain, Lighthouse 13.5 mobile (simulated 4G, one run per page, from a high-latency connection, so absolute times are pessimistic), `dist/` and `context/05`. No source changed. Live HTML differs from the local `dist/` build (251,179 vs 251,578 bytes), so local fixes are not yet deployed.

Live scores (mobile): Home perf 82, a11y 100, BP 100, SEO 100. /book perf 93, a11y 100, BP 92, SEO 100.

## P1

### 1. Home mobile LCP 2.3 s, TBT 370 ms (budget LCP <= 2.0 s)
- Where: `/`. LCP element is `h1#hero-title` (text, not an image).
- Evidence: FCP 2.3 s, LCP 2.3 s, TBT 370 ms, Speed Index 5.4 s. Main thread: Style & Layout 1,132 ms, Other 1,275 ms, Script 288 ms. 1,162 elements, 55 inline SVGs, 251 KB HTML (59 KB brotli). No render-blocking CSS/JS (CSS inline), so the cost is style/layout/paint, not network. 12.5 KB of the 20 KB inline sheet is unused on this page.
- Fix: take a Chrome performance trace of the first 3 s to find what drives Style & Layout (suspects: hero stage glows/filters, delivery-scene and dot-map SVGs). Add `content-visibility: auto` with `contain-intrinsic-size` to below-the-fold sections, defer decorative scenes until after first paint. Target LCP <= 2.0 s, TBT < 200 ms.
- Effort: M.

### 2. /book layout shift 0.149 (budget 0.1)
- Where: `/book`, `div.cal` (Cal.com mount).
- Evidence: Lighthouse CLS 0.149, one shift on `div.cal`, cause "Web font loaded" (Rubik). MEMORY says CLS was 0 locally; the live build still shows it.
- Fix: give `.cal` a fixed per-breakpoint `min-height` (it measures 1,447 px on mobile) so a font swap cannot resize it; preload Rubik (P2-3). Re-test after deploy.
- Effort: S.

### 3. HTTP does not redirect to HTTPS; www serves a full duplicate
- Where: Cloudflare zone settings.
- Evidence: `curl -I http://discoverdev.ai/` returns `200 OK`. `https://www.discoverdev.ai/` returns `200 OK`, byte-identical to apex (`cmp` identical, 251,313 bytes); canonical points to apex. `05` requires "www to apex 301" and "Always Use HTTPS on". Canonicals soften the damage, but links, analytics and crawl budget split across three hosts.
- Fix in Cloudflare (zone discoverdev.ai):
  1. SSL/TLS > Edge Certificates > turn on **Always Use HTTPS**.
  2. Rules > Redirect Rules > Create rule. Filter: `(http.host eq "www.discoverdev.ai")`. Action: Dynamic, expression `concat("https://discoverdev.ai", http.request.uri.path)`, status **301**, tick **Preserve query string**. Deploy.
  3. Keep the www custom domain on Worker `dd` (it keeps the proxied DNS record; rules run before the Worker).
  4. Verify: `curl -I https://www.discoverdev.ai/book?x=1` gives 301 to `https://discoverdev.ai/book?x=1`; `curl -I http://discoverdev.ai/` gives 301 to https.
- Effort: S.

## P2

### 1. Organization `sameAs` has one profile
- Where: JSON-LD on all pages; no social links in the page.
- Evidence: `"sameAs":["https://clutch.co/profile/discoverdev"]`. `05` wants every live profile (LinkedIn, Upwork, GitHub).
- Fix: after Mohamed confirms live URLs (D-29), add them to `sameAs` and the footer, with identical name, logo and service names on each. No placeholders.
- Effort: S.

### 2. One content page limits citable URLs
- Where: site is `/` plus `/book` and legal pages; `llms.txt` links `/#services` three times.
- Evidence: sitemap has 4 URLs. Services, FAQ and reviews are fragments that engines cannot cite separately. This is a V1.0 scope choice.
- Fix: in V1.1/V1.2 ship per-service and guide pages (per `04`/`05`), each opening with a 40-60 word definition; point `llms.txt` at real URLs.
- Effort: L.

### 3. Fonts total 101 KB; only one preloaded
- Evidence: Manrope 24.8 KB (preloaded), Rubik 35.3 KB (body, not preloaded; causes the /book shift), JetBrains Mono 40.4 KB (loaded on home). Budget: fonts < 100 KB.
- Fix: preload Rubik; load JetBrains Mono only where mono text appears or use `font-display: optional`. Saves ~40 KB on first view.
- Effort: S.

### 4. PostHog bundle (307 KB) will load once the key is set
- Where: `dist/_astro/module.DdX6E69B.js`.
- Evidence: not requested live today (home 175 KB, /book 134 KB total) because `PUBLIC_POSTHOG_KEY` is unset (MEMORY). Enabling adds roughly 100 KB brotli of main-thread work.
- Fix: load on first interaction or idle after load; re-run Lighthouse and measure INP after the key is set.
- Effort: S.

### 5. Thin third-party brand corroboration
- Evidence: only Clutch is linked. No LinkedIn, Upwork, GoodFirms or Crunchbase presence is referenced.
- Fix: complete those listings with identical name, logo and service names (Validate, Build, Scale) and link back.
- Effort: M.

## P3

1. Sitemap has no `lastmod` (4 bare `<loc>`). Set it from the build date. S.
2. `/sitemap.xml` returns 404; only `/sitemap-index.xml` exists (robots.txt declares it correctly). Optional 301 in `_redirects`. S.
3. Only `twitter:card` is set; add `twitter:image` (X falls back to OG, so it works). S.
4. `/book/` and `/privacy.html` redirect with 307 (Workers `auto-trailing-slash`). Canonical covers it. S.
5. WebPage has no `dateModified`; no author/team Person nodes (blocked on `[TEAM]`/`[CONSENT]` in `09`). S.
6. HSTS lacks `includeSubDomains`/`preload`; add only once all subdomains are HTTPS-only. S.
7. Texas presence appears in page text and `llms.txt` but not in JSON-LD (only Alexandria). Matches `05` until D-08 confirms; keep consistent after. S.
8. Some H2s are brand-led ("Discover first. Build with AI. Seniors sign off."); add a plain subhead stating what the section answers. S.
9. No price stated anywhere (intentional, D-01). AI answers about MVP cost will cite competitors; revisit when a public range is approved. M.

## Verified fine

- **Titles and metas**: Home 54-char title / 153-char description; /book 38 / 144; privacy 28 / 150; terms 34 / 146. One H1 per page; 0 images missing `alt`.
- **Canonicals**: self-canonical to the apex on every page; www and http variants also point to apex.
- **404**: `https://discoverdev.ai/nope` returns `HTTP 404` with `404.html` (`noindex, follow`), not the homepage.
- **robots.txt**: live equals the repo file; Sitemap declared; no Cloudflare managed-robots override.
- **AI crawler access**: GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Claude-SearchBot, Google-Extended, CCBot, Bytespider, Googlebot, bingbot all get `200` and the full 251,313 bytes (no edge bot blocking).
- **llms.txt**: present, `text/plain; charset=utf-8`, facts match `09` (5.0 across 11 reviews, Alexandria, services, FAQ).
- **JSON-LD**: valid JSON, one `@graph` per page with Organization, WebSite, WebPage (FAQPage on home), stable `@id`s. No `AggregateRating`, `Review` or `HowTo`, as CLAUDE.md and `05` require. FAQ answers are self-contained and name DiscoverDev.
- **Share images**: 1200x630 PNG (home 69 KB, book 60 KB, default 45 KB), absolute URLs, alt text, `og:locale`, `og:site_name`.
- **Redirects**: old SPA routes return 301 (`/staff` to `/#services`, `/contact` to `/book`).
- **Noindex**: `/book/confirmed` sends `X-Robots-Tag: noindex`; workers.dev hosts are noindexed in `_headers`.
- **Security headers (live)**: HSTS, nosniff, `X-Frame-Options: DENY`, Referrer-Policy, Permissions-Policy, COOP, CSP (`frame-ancestors`, `base-uri`, `object-src`, `form-action`, `upgrade-insecure-requests`) plus a hash-based meta CSP for scripts and styles.
- **Cache headers**: `/_astro/*` is `public, max-age=31536000, immutable` (font verified, CF HIT); HTML `max-age=0, must-revalidate`; logos and OG `max-age=86400, stale-while-revalidate=604800`.
- **Transfer and images**: HTML served brotli; home 175 KB over 15 requests, /book 134 KB over 11. Images are WebP with responsive sets (8-52 KB each). LCP is text, so no image-priority issue. Only small first-party scripts; nothing render-blocking.
- **Font loading**: `font-display: swap`, metric-adjusted Arial fallbacks, hero font preloaded.
- **A11y and SEO scores**: 100 / 100 on both pages. INP risk is low (home JS under 20 KB; TBT comes from layout, not scripts).
- **Entity consistency**: name "DiscoverDev", Alexandria address, `hello@discoverdev.ai` and en/ar languages match across schema, `llms.txt` and page text.
- **Network**: HTTP/3 enabled; apex and www both served by Cloudflare.
