# Website plan: 6 core pages (lean)

Oct 26, 2026. Proposed by Claude Code, waiting for Mohamed's approval. Supersedes the page lists in `next-releases.md` and `sitemap-additions.md` (kept for history). Shared doc: https://claude.ai/artifact/5GVj7weki3kSJHGzYVweSb. Research behind it: `docs/research-sitemap/reports/Agency site architecture best practices.md`.

## Pages (each in English and Arabic under `/ar`)
| # | Page | URL | Buyer question | English keyword | Arabic keyword | Status |
|---|---|---|---|---|---|---|
| 1 | Home | `/` | Who are you, can you build my product? | product development company for Gulf startups (est.) | شركة برمجة تطبيقات في السعودية | Live |
| 2 | Build | `/build` | Idea or prototype to a live MVP? | MVP development company (590) | تطوير MVP | Built, merge Validate + Review in |
| 3 | Scale | `/scale` | A team that stays? | dedicated development team (590) | فريق تطوير مخصص | Built, merge Partners in |
| 4 | Pricing | `/pricing` | What will it cost? | MVP development cost (est.) | كم تكلفة تطوير تطبيق | New |
| 5 | Work | `/work` | Done this before? | DiscoverDev case studies | أعمال DiscoverDev | Built, merge EduLens case in |
| 6 | How we work | `/how-we-work` | Who are you, how do you run it, is my code safe? | software development process (est.) | مراحل تطوير التطبيقات (est.) | Built, merge About + Security in |
| – | Book, booked, privacy, terms, 404 | | Booking and legal | | | Live |

Header: Build · Scale · Pricing · Work · How we work · العربية · Book a call. No dropdowns.

## Merged or waiting
- Validate and Launch-Ready Review become sections of Build; Partners a section of Scale; cost guide and "what is an MVP" the top of Pricing; EduLens case a story on Work; About and Security sections of How we work.
- A Saudi page would compete with the Gulf-first home, so the Arabic home targets "شركة برمجة تطبيقات في السعودية".
- Waiting for evidence (Search Console): Saudi page, guides, Launch check, capability, industry and comparison pages. Pages already built stay switched off in `src/data/routes.ts`.

## Releases
- R0: deploy, resubmit sitemap, rename Cal event, analytics keys.
- R1: Build, Scale, How we work (with merged sections), EN + AR.
- R2: Pricing (needs MVP ranges and minimum project size) and Work (needs consents), EN + AR.

Section lists per page, keyword rules and decisions: see the shared doc.
