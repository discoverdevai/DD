# Changelog

Releases are git tags (`v1.x.0`) with a GitHub Release. Pages switch on per release in `src/data/routes.ts`; pages that are
switched off are not built into the live site. Plan: `docs/plan/site-map-plan.md`.

## V1.0.1: review fixes (2026-10-18, not tagged yet)
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
