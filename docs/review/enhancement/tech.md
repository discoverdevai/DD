# Tech review: performance and 2026 best practice (Oct 16, 2026)

Sources: a read-only performance audit (Lighthouse 13.5 mobile plus Playwright traces) and a best-practice review against the Astro, Cloudflare, MDN, OWASP and PostHog docs.

## Performance baseline (Lighthouse mobile, simulated)
| Page | Score | LCP | CLS | TBT | Transfer |
|---|---|---|---|---|---|
| / | 99 | 1.66s | 0.000 | 0 | 125 KB |
| /build | 99 | 1.67s | 0.003 | 0 | 123 KB |
| /launch-ready | 99 | 1.66s | 0.010 | 0 | 122 KB |
| pillar article | 99 | 1.81s | 0.000 | 0 | 124 KB |
| /about | 100 | 1.66s | 0.021 | 0 | 118 KB |
| /launch-check | 97 | 1.52s | **0.093** | 0 | 81 KB |

The lab CLS budget is 0.05 (`07` §13).

## Done on Oct 16
- **/launch-check CLS** 0.077 → 0.003 with delayed JS. The quiz intro now renders visible, and `@media (scripting: none)` hides it when JS is off.
- **Font-swap CLS** on slow first visits (fonts delayed 900ms): /about 0.147, home 0.094, /launch-ready 0.095, /build 0.077 → 0.000. Rubik and JetBrains Mono now use `display: optional`; Manrope (the LCP font, preloaded) stays on `swap`.
- **Startup scripts:**
  - No forced layout before first paint: Header reads `scrollY` lazily.
  - No 38 ms scroll frame: the sticky bar height now comes through a ResizeObserver, and the value is only written when it changes.
  - Card spotlight is throttled with requestAnimationFrame.
- **Cache headers** for unhashed files (`/brand`, `/og`, favicons, icons): 1 day, plus 7 days stale-while-revalidate.
- **Speculation Rules header** (prefetch only, moderate eagerness, never prerender, so analytics counts no unseen views), excluding /book.
- **Headers and tooling:** `Cross-Origin-Resource-Policy: same-site` on `/_astro/*`. Mobile menu opens and closes without JS (Invoker Commands). Browser audit CLS budget set to 0.05.
- **Privacy and monitoring:** Global Privacy Control honoured (analytics doesn't load). PostHog `capture_exceptions`, which adds no new origin.
- **CI:** `npm audit --omit=dev --audit-level=high`, `persist-credentials: false`, and an axe + Lighthouse browser-audit step. Dependabot added for npm and actions.

## Still open
| Pri | Item | Owner |
|---|---|---|
| P0 | **Cloudflare dashboard:** turn off Email Obfuscation, Rocket Loader, Bot Fight Mode (its JS detections inject an inline script that the meta CSP blocks) and Web Analytics auto-setup (the beacon is added by hand) | Mohamed |
| P0 | **PostHog project:** enable cookieless mode, or cookieless events are ignored | Mohamed |
| P0 | **www → apex** 301 Redirect Rule, if a www record exists | Mohamed |
| P0 | **Old service worker:** did the old site register one? If yes, ship a self-unregistering `sw.js` | Mohamed to confirm |
| P1 | **HSTS** `includeSubDomains`, after confirming every subdomain serves HTTPS; preload after 3 months (`07` §14.1) | Mohamed confirms |
| P1 | **Desktop Services disclosure** without JS (popover or `<details>`) | Code |
| P1 | **Pin GitHub Actions** to commit SHAs | Code (after the repo exists) |
| P2 | **Font axes:** narrow them or use static instances (saves ~20–35 KB, estimated) | Code |
| P2 | **Inline page CSS:** inline the small page-specific CSS (`assetsInlineLimit`, about 150 ms on /build and /launch-check) | Code, measure first |
| P2 | **Hero blur:** animate opacity and transform only | Code |
| P2 | **New tools:** linkinator, an HTML validator, Sentry | New dependency or origin, so ask first |
| Later | **Arabic:** sitemap i18n with hreflang, an Arabic font subset on `/ar/*` only, no English fallback under Arabic URLs | Code |

**Keep as they are:**
- Native `@view-transition` (Astro's ClientRouter isn't supported with its CSP).
- Zero islands.
- Self-hosted fonts with one preload.
- Immutable `/_astro`.
- `npm audit` shows 0 production issues. The 2 moderate ones are in dev-only satori/fflate.
