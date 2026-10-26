# Site map and what to add (SEO, GEO, marketing, CRO and taste lenses)

Oct 26, 2026. Builds on `docs/plan/site-map-plan.md` (full hierarchy), `docs/plan/next-releases.md` (release order), `docs/plan/gulf-first.md` and `research/arabic-keywords-p1.md`. Facts stay inside `context/09-proof.md`: no UAE clients, no Gulf office, Azki only as a declared partner after D-44. Nothing here changes a live URL.

## 1. What each lens says

| Lens | Finding | What it changes in the plan |
|---|---|---|
| **SEO** (`cseo-plan`, `mkt-site-architecture`) | Only home and `/book` can rank today. The money keywords (MVP development, dedicated team, product discovery, and the Arabic "شركة برمجة تطبيقات") belong to pages that are built but switched off. Arabic results for the Gulf are weak (translated copy, inflated numbers), so a native, specific page can win | Service pages first (R1). Add one Gulf page early. No city pages |
| **GEO** (`geo-content`) | AI answers cite pages that define things, answer a cost or "how long" question in the first 40-60 words, and show first-hand proof. We have proof (named reviews, EduLens 60-90%) but few definitional pages and no author pages | Add glossary, cost and comparison guides, an answer-first paragraph on every new page, dated updates, author bylines on guides |
| **Marketing** (positioning, `mkt-product-marketing`) | The target is Gulf companies, Saudi Arabia first. The site says it, but Saudi proof (Athkado, Arheb, Jumlaty, Nojoud's review) is spread across pages | One Saudi Arabia page that gathers it, in English and Arabic |
| **CRO** (`mkt-cro`) | One primary action (clarity call). Visitors who are not ready have only the launch check (V1.2). Buyers want a price cue and to see "what happens after I book" | Cost guide, Review price already public, WhatsApp decision (D-09), every new page ends on the same booking band with the page's own `?type=` |
| **Taste** (`taste-frontend`, used as a check, not a redraw) | The visual direction is fixed (dark ink, the design system). The useful rules: write the argument first and drop any section with no claim; draw the idea from the subject; one live thing per page; no filler pages | New pages use existing patterns only. Each page gets one signature section from its own subject (map, ladder, clock), not new decoration |

## 2. The map (status today and what we add)

```
/                         live        /ar live
├── /validate  /build  /scale  /how-we-work        built, off   R1
│     └── /how-we-work/glossary                    NEW          R3
├── /work  /work/edtech-ai-agents  /about          built, off   R2
│     └── /work/support-ai-agent                   NEW          R3
├── /launch-ready  /partners  /launch-check        built, off   R3
├── /insights + pillar + 3 guides                  built, off   R3
│     ├── /insights/how-much-does-an-mvp-cost     NEW          R3  (EN + AR)
│     ├── /insights/what-is-an-mvp                 NEW (AR first) R3
│     ├── /insights/freelancer-or-software-company NEW         R3  (EN + AR)
│     └── /insights/compare/fixed-price-vs-time-and-materials  NEW R4
├── /software-development-saudi-arabia             NEW          R1b (EN + AR)
├── /capabilities  /capabilities/ai-agents  /capabilities/web-and-mobile-apps   NEW R3
├── /industries/edtech                             NEW          R4
├── /book  /privacy  /terms                        live
└── system: robots, sitemap (with hreflang), llms.txt (EN + AR), og images
```

## 3. What we have to add, ranked

| # | Add | Why (lens) | Needs first | Size |
|---|---|---|---|---|
| 1 | Switch on R1: Validate, Build, Scale, How we work, each with its Arabic twin | Owns the money keywords; the home cards need a landing page (SEO, CRO) | Validate "from" price decision | M |
| 2 | **Saudi Arabia page** (`/software-development-saudi-arabia`, `/ar/...`) | Target market; gathers 4 Saudi proofs and the review; Arabic keywords 3 and 24 (marketing, SEO) | Athkado/NJWAR link consent; hosting and PDPL answer; local contracting block only after D-44 | M |
| 3 | R2 proof: `/work`, EduLens case, `/about` | Trust pages that carry E-E-A-T (GEO) | Client consents D-05; Upscend OK | M |
| 4 | **Cost guide** "How much does an MVP cost" (EN + AR "كم تكلفة تطوير تطبيق") | Top Arabic query; answers the price question before the call (CRO, GEO). Written as drivers and fixed-price method first, ranges only from you | Your ranges, otherwise qualitative | M |
| 5 | Arabic-first guides: what is an MVP; freelancer or software company | Real Arabic searches, weak competitors (SEO, GEO) | Native review | M |
| 6 | Capabilities hub + AI agents + web and mobile apps | Covers service-intent queries beyond the 3 engagements; Arabic chatbot is a real search | Facts from 09 only | L |
| 7 | Support-agent case study | Second proof story with a number | Arc in 09 (anonymized) | M |
| 8 | Glossary (JTBD, Shape Up, RICE, ADR, DORA, HEART) | Definitional queries AI answers cite (GEO) | none | S |
| 9 | R3 doors: Launch-Ready Review, Partners, Launch check, guides | Second offer and low-commitment path (CRO) | Five technical claims in the C3 guide | M |
| 10 | WhatsApp number in hero and closing band | Gulf buyers expect it (CRO) | D-09 | S |
| 11 | Decision guide: fixed price vs time and materials; `/industries/edtech` | Comparison intent; 3 EdTech projects | none / 09 | M |

## 4. What we do not add (and why)
- **City pages** (Riyadh, Jeddah, Dubai, Kuwait City): doorway risk, no proof per city.
- **A UAE page or UAE claims:** no UAE client; D-44 UAE partner is not named.
- **Kuwait page:** one review so far; Kuwait stays a section on the Saudi/Gulf page until a second proof exists.
- **Other industry pages** (health, mobility): gate is two proofs each.
- **A blog index with thin posts:** guides ship only when finished.

## 5. Blueprint every new page follows (CRO + GEO + taste)
1. **Argument first:** one line per section as claim and proof; a section with no claim is deleted.
2. **Answer-first paragraph** (40-60 words) under the H1 that states the answer plainly; that is the sentence AI search quotes.
3. **One primary action:** the clarity call, `bookHref('clarity')`, same label everywhere; terms line under it ("30 minutes, no pitch").
4. **Proof beside the action:** a named review or a case metric from 09, never invented.
5. **Objections as FAQ** (4-6 real questions) with FAQPage schema; hours, ownership, price, take-over.
6. **One signature section from the subject**, built from existing patterns: the Saudi page uses the dot map with Saudi markers and a "Gulf hours" strip; the cost guide uses a "what moves the price" list; service pages keep their journey bars.
7. **Closing band** to `/book` with the page's `?type=`; breadcrumbs and BreadcrumbList on depth-2 pages.
8. **Both languages in the same release**, hreflang pair, sitemap alternates, `llms.txt` line (EN + AR).
9. **Freshness:** a visible updated date on guides and the cost page; refresh each quarter.

## 6. Measure
- Add `locale` and `market` (gulf, us, other) to analytics events (gulf-first §5), so Gulf conversion reads separately.
- Search Console: resubmit the sitemap after each release; watch the Arabic pages' impressions by country.
- Monthly prompt check (05 §8) in English and Arabic across ChatGPT, Perplexity, Gemini and Claude; log which page is cited.

## 7. Decisions needed from Mohamed
1. Validate "from" price in USD, or keep no number.
2. Gulf page order: Saudi page **before** the proof pages (recommended) or after.
3. Your MVP cost ranges for the cost guide, or ship the qualitative version.
4. WhatsApp (D-09): yes or no.
5. Client consents and the Azki answers (D-05, D-44).
