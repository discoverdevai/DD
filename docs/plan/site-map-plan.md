# Full site map plan (Oct 18, 2026)

**Status:** plan for Mohamed's approval. V1.0 is a one-page site (§8); the V1.0 work plan is in §9. Nothing is built from this file until he approves it.
**Sources:** `context/04-ux-ia.md` §1–3, `05-seo-aeo.md` §1–2 and §5, `09-proof.md`, the live build (21 pages), the competitor home review (TrianglZ, Goji Labs, thoughtbot, Robusta, Netguru).
**Skills used for this plan:** `mkt-site-architecture` (hierarchy, nav, URLs, linking). Each phase lists the skills that run when it is built.

**Rules that apply to every page in this plan:**
- Facts only from `09`.
- Copy goes into `03` first.
- One primary keyword per URL (`05` §2.3).
- WCAG 2.2 AA.
- Zero JS by default.
- Dark theme and brand colours.
- No new page ships thin: every new URL needs real proof or real expertise behind it.

---

## 1. Goals
1. **Convert:** every page leads to one next step (clarity call, Review, or launch check).
2. **Rank:** each commercial intent founders search for has one owner page.
   - Service: MVP development, dedicated team, product discovery, vibe code audit, white label.
   - Capability: AI agents, mobile apps, e-commerce.
   - Industry: EdTech, HealthTech, e-commerce, mobility.
   - Region: US, Saudi Arabia / GCC, Egypt.
3. **Get cited by AI search (GEO):** definitional answers, named frameworks, entity consistency, `llms.txt`, FAQ and ItemList schema, facts with sources.
4. **Feel like one brand:** a small set of page templates, each with its own signature visual from the same drawing system (journey cards, framework artifacts, project drawings, map).

## 2. Where we are (audit of the live build)
**21 pages, 2 levels deep. Every page is within 2 clicks of home.**

| Area | Today | Gap |
|---|---|---|
| Services | `/validate` `/build` `/scale` `/launch-ready` `/partners` | Good. Flat, keyword-led. |
| Method | `/how-we-work` | New. Not yet in footer. |
| Work | `/work` (15 projects, filters), 1 case page (`/work/edtech-ai-agents`) | Only one deep case. The support-agent arc in `09` could be a second. |
| Insights | hub + pillar + 3 clusters | On plan (`05` §2). The next clusters are C4, C9 (Dec). |
| Capabilities (AI agents, mobile, e-commerce, data/ML, modernization) | Only as a section on home | **No page owns "AI agent development company", "mobile app development", etc.** Biggest SEO gap. |
| Industries | None | Competitors list industries in their menus. We have real proof in EdTech (2 projects + 1 case), e-commerce, HealthTech, mobility. |
| Regions | None | 4 Saudi projects plus GCC reviews, but no page for "software development company Saudi Arabia". |
| Comparisons / decision guides | None | Strong for GEO, e.g. "fixed price vs time and materials" and "agency vs freelancer vs in-house". |
| Glossary of our frameworks | Only inline on `/how-we-work` | AI answers love clean definitions (JTBD, Shape Up, DORA…). |
| Footer | Services · Work · Insights · Company | Missing How we work. |

**Fix found during the audit:** in `05` §1 the `/how-we-work` row was added to the keyword table with the title text in the keyword column. It needs a real primary keyword ("software development process" (est.) / "how we work agile AI") and the title moved to §1.1. Phase 0 fixes it.

## 3. Proposed hierarchy (all phases)

```
/                                        Home
├─ Services (engagements, flat: these URLs stay)
│  ├─ /validate                          Product discovery
│  ├─ /build                             MVP development
│  ├─ /scale                             Dedicated product team
│  ├─ /launch-ready                      Launch-Ready Review (vibe code audit)
│  └─ /partners                          White label / staff augmentation
├─ /how-we-work                          The DiscoverDev Way (method)
│  └─ /how-we-work/glossary              Frameworks we use, defined            P2
├─ /capabilities                         What we build (hub)                   P1
│  ├─ /capabilities/ai-agents            AI agents and chatbots (AR/EN)        P1
│  ├─ /capabilities/web-and-mobile-apps  Web and mobile apps                   P1
│  ├─ /capabilities/ecommerce            E-commerce and marketplaces           P2
│  ├─ /capabilities/data-and-ml          Data engineering and ML               P2
│  └─ /capabilities/modernization        Legacy modernization, cloud           P3
├─ /industries                           Who we build for (hub)                P2
│  ├─ /industries/edtech                 (3 projects + case)                   P2
│  ├─ /industries/healthtech             (1 project; gate: 2nd proof)          P3
│  ├─ /industries/ecommerce              (AR store, marketplace)               P3
│  └─ /industries/mobility               (ride-sharing ML)                     P3
├─ /regions                              (or flat pages; see decision D-A)
│  └─ /software-development-saudi-arabia (4 KSA projects, AR/EN, reviews)      P2
├─ /work                                 Projects (rows + filters)
│  ├─ /work/edtech-ai-agents             Case: AI cost 60–90%
│  ├─ /work/support-ai-agent             Case: answered once (09 arc)          P1
│  └─ /work/{next}                       Each new case once 09 has its arc
├─ /insights                             Guides hub
│  ├─ pillar + C1–C3 (live) · C4, C9 (Dec) · C5–C10 (Q1 2027)
│  └─ /insights/compare/{slug}           Decision guides (e.g. fixed vs T&M)   P2
├─ /about · /launch-check · /book (/book/confirmed noindex)
├─ /privacy · /terms · /404
├─ /ar/…                                 Arabic, Q1 2027 (04 §1.2)
└─ system: robots, sitemap, llms.txt, og images, security.txt
```

```mermaid
graph TD
  subgraph Header
    H[Home] --> S[Services ▾]
    H --> W[How we work]
    H --> WK[Work]
    H --> I[Insights]
    H --> A[About]
    H --> CTA[Book a free clarity call]
  end
  S --> V[/validate] & B[/build] & SC[/scale] & R[/launch-ready] & P[/partners]
  S -.P1.-> C[/capabilities]
  C --> C1[ai-agents] & C2[web-and-mobile-apps] & C3[ecommerce] & C4[data-and-ml]
  WK --> CS1[edtech-ai-agents] & CS2[support-ai-agent]
  I --> PL[pillar] --> CL[clusters C1–C10]
  H -.P2.-> IN[/industries] --> E[edtech]
  H -.P2.-> KSA[/software-development-saudi-arabia]
```

## 4. URL map (new pages only; live URLs never change)

| Page | URL | Primary keyword (est. unless sourced) | Owner of | Proof in 09 | Phase |
|---|---|---|---|---|---|
| Capabilities hub | `/capabilities` | software development services for startups | the capability list | services catalog | P1 |
| AI agents | `/capabilities/ai-agents` | AI agent development company | AI agents, AR/EN chatbots | EdTech agents, call-ops agents, support agent, BioBank | P1 |
| Web and mobile | `/capabilities/web-and-mobile-apps` | mobile app development for startups | web + mobile builds | AR store, BioBank, white-label apps, Yawmy | P1 |
| Support-agent case | `/work/support-ai-agent` | reduce chatbot LLM cost (est.) | cache / dedupe story | 09 case arc (anonymized) | P1 |
| E-commerce | `/capabilities/ecommerce` | marketplace app development | marketplaces, AI recs, AR | AR store (+ marketplace when D-07 clears) | P2 |
| Data and ML | `/capabilities/data-and-ml` | data engineering and ML team | embedded data/ML | 20,000-student EdTech, ride-sharing, procurement, research | P2 |
| Glossary | `/how-we-work/glossary` | (definitions: JTBD, Shape Up, RICE, ADR, DORA, HEART…) | definitional queries | frameworks confirmed Oct 16 | P2 |
| Industries hub + EdTech | `/industries`, `/industries/edtech` | EdTech software development | EdTech | 3 EdTech projects + case + quote | P2 |
| Saudi Arabia | `/software-development-saudi-arabia` | software development company Saudi Arabia | KSA intent | 4 KSA projects, AR/EN, KSA review | P2 |
| Decision guides | `/insights/compare/fixed-price-vs-time-and-materials` etc. | "fixed price vs time and materials" | comparison intent | engagement models in 09 | P2 |
| Modernization | `/capabilities/modernization` | legacy app modernization | modernization | catalog only (gate: a project) | P3 |
| Other industries | `/industries/{healthtech,ecommerce,mobility}` | per industry | per industry | gate: 2+ proofs each | P3 |

**URL rules (04 §2):**
- Lowercase, hyphens, no trailing slash, no dates.
- At most 2 levels below a hub.
- Every new URL goes into `ROUTES` with `live: false` until it has passed QA.
- A cannibalization check against `05` runs before any new primary keyword is used.

## 5. Navigation
**Header (6 items + CTA):**
- Services ▾ (Validate · Build · Scale · Launch-Ready Review · Partners; from P1, add "What we build →" to the capabilities hub)
- How we work
- Work
- Insights
- About
- **Book a free clarity call** (CTA)

Industries join the Services menu as a second column in P2. They don't get a top-level item, to keep the header at 6 (Hick's law).

**Footer (≤ 15 links, `04` §3.4):**
- Services: 5
- Company: How we work · About · Book
- Work: case studies
- Insights: guides · launch check
- Legal row: privacy, terms

In P2 the capabilities hub link replaces one item, so the limit holds.

**Breadcrumbs:** on every depth-2 page (capability, industry, case, article), with BreadcrumbList schema (`04` §3.5).

## 6. Internal linking (hub and spoke)
- **Capabilities hub ↔ each capability.** Each capability links to:
  - its proof (project rows / case),
  - the matching engagement (`/build` or `/scale`),
  - one guide.
- **Industry page:** links to its projects, the reviews from that industry, the relevant capability and the case study.
- **Saudi page:** links to the 4 KSA projects, the KSA review (Nojoud), `/partners` and `/book`, plus the Arabic note.
- **Glossary ↔ `/how-we-work`:** each framework anchor links back to the step that uses it. Articles link to glossary terms on first mention.
- **Rules:**
  - Every new page gets ≥ 3 inbound links from distinct pages (the existing `inbound-links` gate).
  - Descriptive anchors only.
  - `llms.txt` lists every new indexable page with a one-line fact.

## 7. Per-page brief template (copy + GEO + art)
Every new page gets a brief in `03` before build, in one table.

| Part | Content |
|---|---|
| Intent and primary keyword | From the URL map above, checked against `05` |
| H1 + title + meta | Keyword in the H1 (`05` rule); title ≤ 60, meta ≤ 155 |
| Answer block (GEO) | A 40–60 word direct answer under the H1 that an AI can quote, with the entity name "DiscoverDev" in it |
| Proof | Named projects / quotes from `09` only; the page is blocked if fewer than 2 proofs (P3 gate) |
| Sections | Problem → what we build → how (The DiscoverDev Way, linked) → proof → FAQ (3–5, FAQPage schema) → CTA |
| Schema | Service / ItemList / FAQPage / BreadcrumbList (no AggregateRating, no HowTo) |
| Signature visual | One per page from the drawing system: capability = product drawing (ProjectArt), industry = map crop + project drawings, glossary = framework artifacts, comparison = side-by-side table card |
| Next step | One primary CTA; secondary = launch check or Review where the intent fits |

## 8. Releases (Mohamed, Oct 18: one-page V1, go live as soon as possible, pages added per release)

**Why one page first:**
- One page suits a launch where the goal is one action (book a clarity call) and visitors arrive already interested: LinkedIn, referrals, direct ([HubSpot](https://blog.hubspot.com/website/single-page-vs-multiple-page-website), [Kolonell](https://kolonell.com/en/blog/one-page-vs-multipage-b2b-website-2026)).
- Separate service pages win in search ([Moz Q&A](https://mozdev.nodebb.com/community/q/post/279216)), so they come in V1.1. A new domain takes weeks to rank anyway.
- The usual risk of starting on one page, a later rebuild, doesn't apply: every later page is already built, with its final URL, and only gets switched on.

**How a release works:**
- Pages switch on with `live: true` in `src/data/routes.ts`. Pages that are switched off are not built into the live site and are not linked.
- Each release is a git tag (`v1.0.0`…) with a GitHub Release and a line in `CHANGELOG.md`.
- A release ships only after:
  - copy in `03`;
  - QA, the functional and events tests, axe and Lighthouse;
  - the screenshot review with Mohamed;
  - a successful deploy.

### Site map by release
```
V1.0  (one page + booking)        /  ·  /book  ·  /book/confirmed (noindex)  ·  /privacy  ·  /terms  ·  /404
V1.1  (services and proof)        + /validate  /build  /scale  /work  /work/edtech-ai-agents  /how-we-work  /about
V1.2  (other doors and guides)    + /launch-ready  /partners  /launch-check  /insights + pillar + C1–C3
V1.3  (what we build)             + /capabilities (+ ai-agents, web-and-mobile-apps)  /work/support-ai-agent
V1.4  (reach)                     + ecommerce, data-and-ml, glossary, /industries/edtech, Saudi Arabia page, 2 decision guides, C4, C9
V2.0  (Arabic + art direction)    + /ar mirrors (04 §1.2), post-launch art direction
```
Built today: V1.0–V1.2 (21 pages). To build: V1.3 onward, per the URL map in §4.

### V1.0: one-page architecture

**Pages:** `/` · `/book` · `/book/confirmed` (noindex) · `/privacy` · `/terms` · `/404`, plus the system files (robots, sitemap with only the indexable V1 pages, `llms.txt`, og image).

**Home sections, in order (the home edits from the parallel session are the base):**

| # | Section (anchor) | Job: one job per section | Primary action |
|---|---|---|---|
| 1 | Hero | Say what we do and for whom; the rating line | Book a free clarity call |
| 2 | Client cards + map (`#clients`) | Prove real clients on 4 continents | — |
| 3 | The DiscoverDev Way (`#how-we-work`) | The method: AI drafts, a senior signs; the journey cards | — |
| 4 | Three ways to work (`#services`) | Validate · Build · Scale: time, price model, what you get. In V1 each card links to `/book` (with the offer named), not to a service page. | Book |
| 5 | Project chapter + showcase (`#work`) | Proof: NJWAR chapter, the EdTech case with 60–90%, 4 projects | — |
| 6 | Reviews (`#reviews`) | 8 verified reviews (layout per the parallel session's pick) | Book |
| 7 | FAQ (`#faq`) | Objections: AI and code safety, pricing, timeline, ownership, time zones, take-over | Book |
| 8 | Closing band | One last ask | Book |

**Removed from home in V1** (back in V1.2): the Guides and launch-check section, the "Other ways in" row (Review, Partners) and the FAQ link to the pillar guide. The take-over FAQ answer stays, without the link.

**Header (V1):**
- Logo
- How we work → `#how-we-work`
- Services → `#services`
- Work → `#work`
- Reviews → `#reviews`
- FAQ → `#faq`
- CTA: **Book a free clarity call**

Every link jumps to a section on the same page. The Services dropdown comes back in V1.1.

**Footer (V1):**
- Entity line, email, locations, Arabic and English, rating + Clutch link.
- Links: How we work · Services · Work · Reviews · Book (anchors and `/book`).
- Legal row: privacy, terms.

**SEO and GEO for the single page:**
- **Home title and meta:** keep, with primary keyword "product development company for startups" (`05` §1).
- **H2s:** the section headings carry the service words founders search for (MVP development, product discovery, dedicated team) so the page can rank for them before V1.1.
- **Schema:** Organization + WebSite + FAQPage on home, plus ItemList for the four steps if it stays a list.
- **`llms.txt`:** lists only V1 URLs, plus the facts block. It is rewritten in each release.
- **Sitemap:** only indexable V1 pages. The `inbound-links` gate is adjusted to V1's small page count: `/book` and the legal pages are exempt from the 3-inbound rule.

**Booking:** `/book` works now: with no Cal.com username set, it shows the email address. When Mohamed adds the username, the calendar embed appears with no other change (`PUBLIC_CAL_USERNAME`).

## 9. V1.0 work plan

| # | Task | Details | Done when |
|---|---|---|---|
| 1 | Settle the base | The parallel session has uncommitted home edits in this checkout (cuts, NJWAR chapter, reviews options). Mohamed picks the reviews layout there; that session commits. Only then does V1 work start, so the two sessions never edit the same files. | The parallel session's work is committed; tree clean |
| 2 | Copy first | `03`: a V1 section listing the home order above, the V1 nav and footer, the offer-card change (links to `/book`), what's removed and why. `04` §1 marks V1.0. | `03` and `04` updated |
| 3 | Switch pages off | `routes.ts`: everything outside V1.0 gets `live: false`. Pages that are switched off are not built into the live site (excluded from the build), not in the sitemap, not in `llms.txt`, and have no og image. | The built site has exactly 6 HTML pages + the system files |
| 4 | Re-point every link | Nav and mobile menu, footer, the hero's "See how we work", offer cards → `/book?type=clarity`, FAQ links, journey bar, the 404 page links, `/book` page links, CtaBand secondary links. A grep for every switched-off URL in `dist/` must return nothing. | Zero links to switched-off pages |
| 5 | Home tidy | Remove the Guides section and the "Other ways in" row; add the section anchors; check the H2 keywords. | Home matches the §8 table |
| 6 | SEO / GEO | Home schema (FAQPage, ItemList), `llms.txt` V1 version, sitemap check, `05` §1 fix (the `/how-we-work` row), og image. | `jsonld-check` OK; `llms.txt` lists 3 URLs |
| 7 | Gates | Adjust `inbound-links` and `qa/routes.txt` to the V1 list; switched-off pages listed as "later release" so the gates don't expect them. | `npm run qa` 0 findings |
| 8 | Full checks | Functional + events (update the tests that open switched-off pages), axe, Lighthouse, 9-size layout check, consent gate. | All pass |
| 9 | Review with Mohamed | Screenshots of home (desktop and phone), book, 404. | Mohamed approves |
| 10 | Release | `CHANGELOG.md` (V1.0 entry), commit, tag `v1.0.0`. Mohamed pushes; Cloudflare deploys. Check the live `workers.dev` URL: pages, headers, redirects, 404. | Live and checked |
| 11 | Go-live | Mohamed: add `discoverdev.ai` as the custom domain (DNS access), set the Cal.com username, the PostHog key if wanted. Re-check on the domain. | Site live on discoverdev.ai |

**Skills per task:**
- 2: `mkt-copywriting`, `copy-proof-check`
- 6: `mkt-schema`, `geo-llmstxt`
- 8: `cseo-technical`
- 10–11: `mkt-launch`

**After V1.0:** V1.1 = switch on Validate, Build, Scale, Work, the case, How we work and About (all built; mostly link and nav work, a few days), then the Services dropdown returns.

## 10. Decisions for Mohamed
| # | Decision | Options | Recommendation |
|---|---|---|---|
| D-A | Region pages | (a) one `/software-development-saudi-arabia` now (b) a `/regions/…` folder (c) none | (a): one page, real proof; more only with proof |
| D-B | Capability URL folder | `/capabilities/…` vs `/services/…` | `/capabilities/…`: keeps `/build` etc. as engagements and avoids clashing with the old `/services/*` redirects |
| D-C | Industries | P2 with EdTech only vs wait | EdTech in P2 (3 proofs); the others gated |
| D-D | Content hubs B–D (Validate/Build/Scale guides) | now vs 6 months (`05` §2) | Keep `05`: decision guides in P2 cover the gap |
| D-E | Case pages | Support agent (anonymized, 09 arc) now; more after consent | Yes for the support agent |
| D-F | Hosting notes | Docs say Vercel, the deploy log is Cloudflare | Pick one so `07` and MEMORY match |
