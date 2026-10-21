# Changelog

Releases are git tags (`v1.x.0`) with a GitHub Release. Pages switch on per release in `src/data/routes.ts`; pages that are
switched off are not built into the live site. Plan: `docs/plan/site-map-plan.md`.

## Unreleased (Oct 21): since v1.0.1
Home: Yawmy Care and Rushr chapters (D-07 lifted), a horizontal rail of 12 projects (no autoplay), EduLens named with its result, still client cards on every screen, US spelling. /book and /book/confirmed in the site's dark theme; Cal.com calendar (account mohamed-ali-plfh5u, event discoverycall) starts on first intent. Clean-up round 2: Vercel config removed, shared copy strings, knip, release map, i18n unused-key gate, `npm run build:all`. Privacy and terms trimmed to what is live.

## V1.0.1: review fixes (2026-10-18, tagged v1.0.1; later changes on main)
Later on Oct 18: Cal.com booking wired (account mohamed-ali-plfh5u, event discoverycall); no moving content and no Pause controls (client row and reviews are still); 44px footer links; the private design-system page no longer ships in a release.

Content and consent (Rushr logo only, clinic card hidden, EduLens anonymous, NJWAR claims trimmed, Ireland off the map), clarity-call-only booking copy, SEO and GEO (home and /book titles, keyword, defining sentence, offer schema, llms.txt), frontend (Work section order, anchor offsets, slimmer mobile bar, lighter Dev in the dark logo, calmer motion, new EdTech drawing, 06 allows glows and the dot map).

## V1.0: one-page launch (2026-10-18)
**Live pages:** `/` (home), `/book`, `/book/confirmed` (noindex), `/privacy`, `/terms`, `/404`.

**Home (9 sections):** hero, client cards and map, the problem, three ways to work (Validate, Build, Scale; each leads to
booking), The DiscoverDev Way, projects (NJWAR chapter and the EdTech case), reviews, FAQ, closing band.

**Menu and footer:** jump links to home sections (Services, How we work, Work, Reviews, FAQ) and a Book a free clarity call
button. The booking page and the 404 page offer the clarity call only.

**Search and AI:** FAQPage and Organization structured data, `llms.txt` and sitemap list only V1 pages. Old-site
redirects point to the matching home sections.

**Performance:** stylesheets inlined; client logos inlined once; Lighthouse mobile 98, LCP about 1.8 s.

**Not in V1.0 (built, switched off):** V1.1 services, work, case study, how we work, about; V1.2 Launch-Ready Review,
partners, launch check, insights.
