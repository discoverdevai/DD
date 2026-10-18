# Changelog

Releases are git tags (`v1.x.0`) with a GitHub Release. Pages switch on per release in `src/data/routes.ts`; pages that are
switched off are not built into the live site. Plan: `docs/plan/site-map-plan.md`.

## V1.0: one-page launch (2026-10-18, pending approval)
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
