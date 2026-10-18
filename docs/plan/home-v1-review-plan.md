# V1.0 home page: review and fix plan (Oct 18, 2026)

**Status:** plan for Mohamed's approval. Nothing is changed until he approves each part.
**Sources:** three parallel reviews of the live V1 home page: `docs/review/home-v1/seo-geo.md` (SEO and GEO, 20 findings), `cro-content.md` (CRO, marketing and content, 24), `frontend-ux-brand.md` (frontend, UI, UX and branding, 22), plus automated checks (`autocheck.json`) and section screenshots. The consent and fact claims below were checked against `09`, `11` and `03`.

**Baseline (good news):** no horizontal scroll at 7 widths, LCP about 1.8 s in the Lighthouse audit, CLS under 0.03, about 1 KB of page JS, focus visible everywhere, reduced motion honoured, FAQ schema matches the visible text, all 10 buttons lead to the booking page. Nothing is broken.

---

## Part A: decisions only Mohamed can make (they block fixes)

| # | Decision | The conflict | Recommendation |
|---|---|---|---|
| A1 | **Rushr** | `11` D-07 says "Rushr hidden"; Mohamed approved its logo Oct 16. A "Home-services marketplace · USA" card shows in the client row. | Keep the logo, drop the descriptor line ("Home-services marketplace") until D-07 clears. Update `11` to say so. |
| A2 | **Continuum Therapy Collective** | `09`: clinician consent needed before showing anything identifying. The logo approval covered the logo only; the card names the practice and its type. | Remove the card until the therapist agrees. |
| A3 | **EduLens identity** | `11` D-06: anonymous, no name, no quote. Oct 16: Youssef's quote approved with name. The review card, the logo and the 60–90% result together identify the anonymous case. | Pick one: (a) the case stays anonymous, so the Youssef card drops its result line and role says "CEO, EdTech platform, Egypt"; or (b) name EduLens everywhere and update `11`, `03` and the case page. Recommendation: (b) if EduLens agrees in writing, otherwise (a). |
| A4 | **NJWAR** | The chapter shows a "Saudi Arabia" tag and "with AI recommendations". `09` has neither; both belong to Athkado, and the NJWAR-Athkado link is unconfirmed. | Remove the tag and the AI line until confirmed. |
| A5 | **Ireland on the map** | Only source is the academic collaborations, which `03` V17 says to omit. | Unlight Ireland. "4 continents" still holds. |
| A6 | **Cal.com username** | Without it, `/book` shows only the email address, so every button ends in a mailto. | Set `PUBLIC_CAL_USERNAME` before go-live. |
| A7 | **Hosting** | Docs say Vercel; the deploy runs on Cloudflare. | Pick one and align `07` and MEMORY. |
| A8 | **Glows, dot map, ambient drift** | `06` bans glows and "world maps with dots"; the site uses them, and Mohamed asked for more motion and art. | Either amend `06` to allow them (recommended: we chose this look on purpose) or remove them. |

## Part B: fixes (P0 and P1), grouped into parallel work streams

Streams touch different files, so they can run in separate chats at the same time. Copy changes go into `03` first, in one chat only (stream 1).

### Stream 1: Content, facts and CRO (files: `context/03-copy.md`, `home.ts`, `projects.ts`, `src/content/copy/en/*`)
| # | Fix | Source | Effort |
|---|---|---|---|
| 1.1 | Apply A1–A5 to the copy and the components that render them | CRO P0 ×5 | S |
| 1.2 | **The problem band names no problem** and the core idea prints twice (band + footer). Rewrite the band as the problem in plain words (JTBD / Human Action Model: discomfort → vision), keep the core idea once. | CRO P1 | S |
| 1.3 | **Take-over FAQ links to the Review**, which V1 can't book. Reword to point to the clarity call. | CRO P1 | S |
| 1.4 | **No FAQ says what happens on the clarity call**: add one, built only from strings already in `03` and `09`. | CRO P1 | S |
| 1.5 | **Method repeated 5–6 times**: cut the repeats; cut the "What is the DiscoverDev Way?" FAQ, the last line of FAQ 1 and "You choose a call time that suits you". | CRO cuts | S |
| 1.6 | **Header says "Book a call"**; `03` §2V1 says "Book a free clarity call". Align. | CRO P1 | S |
| 1.7 | **Reviews:** 5 of 8 are research or academic work under "founders and teams". Show the 4 closest to buying first (phones: 4 plus "Show all 8"; all quotes verbatim). | CRO P1 | M |
| 1.8 | **Offer-card links don't say which offer** was picked. Pass `?offer=validate\|build\|scale` so analytics can tell paths apart (booking page can prefill later). | CRO P1 | S |

### Stream 2: SEO and GEO (files: `index.astro`, `src/lib/seo.ts`, `book.ts`, `llms.txt.ts`, `03` §2V1 for copy in stream 1's session)
| # | Fix | Source | Effort |
|---|---|---|---|
| 2.1 | **/book title and meta still advertise the Review.** V1 title: "Book a Free Clarity Call \| DiscoverDev". | SEO P0 | S |
| 2.2 | **Primary keyword missing**: "product development company for startups" is nowhere on the page. Proposed home title: "Product Development Company for Startups \| DiscoverDev" (54 characters); add one defining sentence ("DiscoverDev is a product and engineering company…") under the services heading. | SEO P1 | S |
| 2.3 | **Glued service headings**: "ValidateProduct discovery" (no space between link and subtitle). These are the only place the service keywords live in V1. Fix the markup. Also "Dedicated product team" → "Dedicated development team" to match the keyword map and schema. | SEO P1 | S |
| 2.4 | **Empty schema list**: `hasOfferCatalog.itemListElement` is `[]`. Fill with Validate, Build and Scale as inline offers (facts from `09`) or leave it out. | SEO P1 | S |
| 2.5 | The 60–90% result sentence has no subject, so it can't be quoted alone; a bare "NJWAR" H2 sits above "Selected work" in the outline (see 3.1). | SEO P1 | S |
| 2.6 | `llms.txt` is thin: add the facts block and the offers with times and price models. | SEO P2 | S |

### Stream 3: Frontend, UI, UX and branding (files: `src/components/sections/*`, `src/components/work/*`, `src/styles/*`, `src/components/layout/*`)
| # | Fix | Source | Effort |
|---|---|---|---|
| 3.1 | **Work section:** NJWAR's heading is about twice the H1 and sits above "Selected work". Put the section title first, NJWAR as an h3, and drop the 100svh centring (the "Work" jump currently lands on about 220 px of empty ink). | FE P1 | M |
| 3.2 | **Anchor offsets are doubled** for Services and How we work (144–160 px vs 80–88 px elsewhere): `Engagements`, `Statement` and `Section` each add a `scroll-margin` on top of the global `scroll-padding` in `base.css`. Remove the duplicates. | FE P1 (verified) | S |
| 3.3 | **Mobile bars take 21% of the screen:** the bottom bar is 99 px. Slim it to under 68 px. | FE P1 | S |
| 3.4 | **Logo contrast:** "Dev" in the for-dark logo is `#1240BE` (about 2.3:1 on ink). Make a for-dark variant with a lighter "Dev" (brand-approved blue tint). | FE P1 | S |
| 3.5 | **Motion:** 13 animations loop forever and the marquee pause shows only on keyboard focus. Stop the ambient loops (drift, pulse), make the client row static on phones, keep a visible pause control on desktop. Applies A8 once decided. | FE P1 | M |
| 3.6 | **Premium feel:** the EdTech showcase uses a placeholder drawing (play button and grey bars). Replace with a purpose-made product scene in the site's drawing style (or a real screen when approved). Vary the card pattern; unify the "Build" chip style (three styles today). | FE P1 | M |

## Part C: polish (P2), done after Parts A–B
- **Reviews:** 1,570 px tall at 768; the review list is an extra Tab stop on desktop.
- **Section rhythm:** the ink/raised alternation relies on `nth-child` and the stray script shifts it; make it explicit.
- **Layout and text:** the half-empty "problem" band; a 110-character line and an orphan word in the closing band; small tap targets on the Clutch and email links; link names on the service cards that don't match the visible "Book a call about…" text.
- **Weight:** 27 KB of base64 logos repeated (now once, after the V1 build change).
- **Schema and hygiene:** topics in schema not visible on the page; "Our teams: Texas" on the map (D-08 allows only "presence"); LinkedIn missing from `sameAs` (no URL yet); hidden U+2060 characters in "8–12"; `design-system.html` ships in `dist/`; "Menu" coded as a heading in the mobile drawer; the OG image alt text is the page title; canonical has no trailing slash while the sitemap does.

## Part D: how to run it
1. **Mohamed decides Part A** (A1–A5 and A8 block work; A6, A7 block go-live).
2. **Stream 1 first** (copy source of truth), then **streams 2 and 3 in parallel chats** on separate files. A fourth chat can run the final QA.
3. **After each stream:** `npm run qa`, functional and events tests, axe, Lighthouse, the 9-width layout check, then screenshots to Mohamed before commit.
4. **Release:** these fixes ship as **V1.0.1** (tag after approval), with a `CHANGELOG.md` entry. If go-live happens first, only Part A items marked as blocking (A1–A5) must land before the domain goes live; the rest can follow.
5. **Skills per stream:** 1 `mkt-copywriting`, `mkt-cro`, `copy-proof-check`; 2 `cseo-page`, `mkt-schema`, `geo-citability`, `geo-llmstxt`; 3 `taste-frontend`, `design-critique`, `frontend-ui-engineering`.

## Top 10, in order
1. Decide A1–A5 (consent and facts), then remove or reword the cards.
2. Set the Cal.com username (A6).
3. `/book` title and meta (V1 clarity call only).
4. Home title and primary keyword, plus the defining sentence.
5. Glued service headings and "Dedicated development team".
6. The problem band, the take-over FAQ and the method repeats (content).
7. Work section: title first, no 100svh gap.
8. Doubled anchor offsets and the 99 px bottom bar.
9. Logo "Dev" contrast; decide A8 (glows and dot map).
10. Stop ambient loops; replace the EdTech placeholder drawing.
