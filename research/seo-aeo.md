# DiscoverDev site rebuild: SEO / AEO research (Oct 15, 2026)

Scope: discoverdev.ai full rebuild (Astro static, Cloudflare, EN first, AR-ready). ICP: launch-stuck founder, US + GCC.

## 0. Method and data limits
- No paid tools. Volumes below come only from seodata.dev keyword pages (US monthly average, Google Ads API, dates shown). Everything else is labeled **est.** (a judgment, not a number).
- SERP checks used the WebSearch tool, which is not a live Google SERP. Who ranks = directional. **AI Overview presence was not observable** with these tools. Check the top 15 queries manually (incognito, US + KSA VPN) before launch.
- Competitor HTML could not be downloaded (proxy blocked). "No schema visible" comes from rendered text extraction, so JSON-LD may exist. Confirm with Rich Results Test.
- Brand SERP today: a search for "DiscoverDev" returns Clutch pages, not discoverdev.ai (old SPA not indexed well).

### Verified volume indications (US, seodata.dev)
| Keyword | US/mo | Data date | Note |
|---|---|---|---|
| vibe coding | 60,500 | 2026-07 | Informational, not a buyer query |
| what is vibe coding | 22,200 | 2026-07 | Informational |
| lovable | 60,500 | 2026-06 | Mostly brand + the dictionary word |
| lovable ai / lovable dev | 27,100 / 5,400 | 2026-06 | Shows the platform's user base |
| software development company | 9,900 | 2026-07 | Too broad for us |
| staff augmentation / …services | 3,600 / 1,900 | 2026-07 | /partners secondary |
| mvp development | 1,600 | 2026-07 | /build |
| product discovery | 1,000 | 2026-08 | Mostly informational |
| mvp development services | 880 | 2026-07 | /build |
| software development dedicated team | 720 | 2026-05 | /scale |
| mvp development company | 590 | 2026-07 | /build, CPC $23 = buyer intent |
| dedicated development team | 590 | 2026-05 | /scale |
| hiring dedicated development team | 480 | 2026-05 | /scale |
| supabase rls | 260 | 2026-09 | Cluster C5 |
| mvp software development company | 210 | 2026-07 | /build |
| product discovery process / phase | 210 / 50 | 2026-08 | /validate |
| supabase row level security | 140 | 2026-09 | C5 |
| mvp development company in usa | 70 | 2026-07 | /build |
| llm cost optimization | 40 | 2026-09 | C9 |

No public data found: vibe code audit, Lovable security review, AI app to production, MVP rescue, fix or rebuild, white-label development, dedicated team Egypt, offshore Egypt, KSA/UAE/KW company queries. Treat them as **est. low volume, high intent**. Many results are vendor pages, which signals commercial demand.

## 1. Keyword map per page
Difficulty: L = small blogs/agencies rank, M = mid-size agencies + listicles, H = directories, big outsourcers, parasite pages.

| Page | Primary kw | Secondaries | Intent | Diff | Why |
|---|---|---|---|---|---|
| / | product development company for startups (est.) | DiscoverDev (brand); software development company for startups; launch AI-built app; senior product team US GCC | Nav + commercial | Brand L / generic H | Generic terms belong to directories. Home wins brand + AI citations, not head terms |
| /launch-ready | vibe code audit | Lovable app security review; AI-built app production readiness; Bolt / Cursor app code review; Supabase security audit | Commercial / transactional | M | New SERP. Ranking: instinctools, softonix, redwerk, Valletta, Wavect (small agency blogs + 1–2 service pages). No big brands yet |
| /validate | product discovery services | product discovery phase (50); startup idea validation service; MVP scoping; clickable prototype + fixed estimate | Commercial | M | Outsourcing firms' service pages (OrangeLoops, RaftLabs, COAX, Relevant) + Mind Studios listicle |
| /build | MVP development company (590) | MVP development services (880); mvp software development company (210); fixed price MVP development; MVP development company in USA (70) | Commercial | H | Groovy Web, GoodFirms, many "best MVP companies" listicles; CPC $23–38 |
| /scale | dedicated development team (590) | software development dedicated team (720); hiring dedicated development team (480); dedicated development team Egypt; offshore development Egypt | Commercial | H | Large outsourcers + directories. Egypt variants: Chudovo, Appsierra, Evolvice, Outsorcy (M) |
| /partners | white label software development | white-label development partner for agencies; staff augmentation services (1,900); white label app development; nearshore partner Egypt | Commercial (B2B) | M | Acquaint, Infomaze, Klizos, GoodFirms profiles. Thin field, mostly mid-tier |
| /work | DiscoverDev case studies | MVP case study; marketplace app case study; AI app case study | Nav / commercial | L | Brand-led |
| /work/rushr | home services marketplace app development | Uber-style dispatch app; Stripe Connect escrow marketplace; marketplace MVP 16 weeks | Commercial-investigational | L–M | Few real case studies. Metrics due Nov |
| /work/edulens | reduce AI costs case study | LLM cost optimization (40); AI agents for EdTech; model routing case study | Informational / commercial | L | Original numbers (60–90%) are rare and citable |
| /insights | AI-built app to production guides | vibe coding guides for founders; Lovable launch help | Nav | L | Hub page |
| /insights/ai-app-to-production (pillar) | AI app to production | AI prototype to production; vibe coded app to production; Lovable app to production; production readiness checklist vibe coded | Informational → commercial | M | MentorCruise, Verdent, LowCode Agency, Shakuro, Leanware. Beatable with depth + real findings |
| /about | DiscoverDev | DiscoverDev reviews; software company Alexandria Egypt; Egypt dev team for US startups | Nav | L | Entity page for AI engines |
| /book | book Launch-Ready Review | DiscoverDev clarity call | Transactional | L | Conversion page. Index it, low priority |

### Titles, metas, H1s (lengths checked: titles ≤60, metas ≤155)
| Page | Title | Meta description | H1 |
|---|---|---|---|
| / | Product & Engineering Partner for Founders \| DiscoverDev | Stuck with an AI-built prototype that can't launch? We review it, fix or rebuild it, and ship it to production. Senior team. You own all the code. | We help founders build the right product, then ship it fast |
| /launch-ready | Vibe Code Audit for Lovable, Bolt & Cursor \| DiscoverDev | A 5-day Launch-Ready Review of your AI-built app: security, data rules, payments, scale. Fixed fee, credited toward the fix. No useful findings, no charge. | Launch-Ready Review: a vibe code audit before you go live |
| /validate | Product Discovery Services for Startups \| DiscoverDev | Validate your idea in 1–2 weeks: market read, scope, clickable prototype and a fixed build estimate. The fee credits toward your build. | Validate: product discovery before you write code |
| /build | Fixed-Price MVP Development in 8–12 Weeks \| DiscoverDev | A senior team takes your MVP from scope to production in 8–12 weeks at a fixed price. Or we rebuild your AI prototype properly. You own all the code. | Build: MVP development, from scope to production |
| /scale | Dedicated Development Team on Retainer \| DiscoverDev | A dedicated squad of developers, QA and a PM that stays with your product. Monthly retainer. Engineering hub in Egypt with US and Gulf time overlap. | Scale: a dedicated development team that stays |
| /partners | White-Label Development Partner for Agencies \| DiscoverDev | White-label delivery and staff augmentation for software houses. Senior engineers working under your brand, your process and your client contract. | A white-label development partner for software houses |
| /work | Case Studies: MVPs, Marketplaces & AI Apps \| DiscoverDev | Products we took from idea or prototype to production: a US home-services marketplace, EdTech AI agents with 60–90% lower AI costs, and more. | Products we helped ship |
| /work/rushr | Rushr: Home-Services Marketplace Built in 16 Weeks | How we built Rushr, a US home-services marketplace, from zero in 16 weeks: Uber-style dispatch, Stripe Connect escrow, launch-ready code. | Rushr: a home-services marketplace, built in 16 weeks |
| /work/edulens | EduLens: Cutting AI Costs 60–90% Across 3 Agents | Caption-first ingestion, cross-user caching, model routing and token trimming cut EduLens' AI costs by 60–90%. What we changed and why it worked. | EduLens: three AI agents, 60–90% lower AI cost |
| /insights | Guides for Shipping AI-Built Apps \| DiscoverDev | Plain guides for founders with an AI-built prototype: security holes, fix or rebuild, audit costs, Supabase rules, code ownership and AI costs. | Insights for founders shipping AI-built products |
| pillar | AI-Built App to Production: The Founder's Guide | Built with Lovable, Bolt, v0 or Cursor and stuck before launch? What breaks, what to check, fix or rebuild, real costs and timelines, in one guide. | How to take an AI-built app to production |
| /about | About DiscoverDev: Senior Product Team, Egypt & US | DiscoverDev is a product and engineering company with a US presence and an engineering hub in Alexandria, Egypt. Senior teams that stay. 5.0 on Clutch. | About DiscoverDev |
| /book | Book a Launch-Ready Review or Clarity Call \| DiscoverDev | Book a 5-day Launch-Ready Review of your app, or a free 30-minute clarity call. No pitch. Pick a time that works for you in the US or the Gulf. | Book a review or a free clarity call |

Rules: put the primary keyword at the front of the title and the brand at the end. Use one H1 per page. Keep titles distinct from H1s. Write metas as ad copy. Use no exclamation marks.

GCC location queries ("software development company Saudi Arabia / UAE / Kuwait"): **do not build thin city or country pages at launch.** Those SERPs are crowded with listicles and parasite pages on third-party domains (e.g. support.billsby.com, docs.* "discuss" threads), plus Apptunix-type pSEO. Cover the GCC with `areaServed`, GCC proof (Athkado, Arheb) on /build and /work, and the /ar launch (Q1 2027). Arabic SERPs for "شركة برمجة تطبيقات في السعودية" look softer (Creole Studios' /ksa/ar/, freelance marketplaces), so that is the GCC play. Recheck in Q1.

## 2. Pillar / cluster map
Hub: **/insights/ai-app-to-production** (pillar, 3,000–4,500 words, ships with the first 3 clusters in Nov). All clusters are flat under /insights/ to keep URLs short. The breadcrumb shows the hub relationship.

| # | URL | Primary kw | Secondaries | Intent | Diff | Converts to |
|---|---|---|---|---|---|---|
| C1 | /insights/ai-built-app-security-holes | vibe coding security (est.) | is my vibe coded app secure; AI-generated code vulnerabilities; Lovable security issues; Bolt app security | Info | M | /launch-ready |
| C2 | /insights/lovable-launch-checklist | is Lovable production ready | Lovable app to production; Lovable production checklist; Lovable app security | Info / commercial | M (LowCode Agency, RapidDev, Shakuro, Unpwned) | /launch-ready |
| C3 | /insights/fix-or-rebuild-ai-app | fix or rebuild app | refactor vs rebuild; rescue vs rebuild AI prototype; rebuild vibe coded app | Commercial-investigational | M (Goji guide, IndiaNIC, Rocking Tech) | /launch-ready, /build |
| C4 | /insights/vibe-code-audit-cost | vibe code audit cost | cost to fix vibe coded app; vibe coding cleanup cost; code audit cost startup | Commercial | L–M (Wavect, Valletta "from $199", AxonBuild, Aibrify) | /launch-ready |
| C5 | /insights/supabase-rls-ai-apps | supabase rls (260) | supabase row level security (140); rls supabase (110); Lovable Supabase data leak; CVE-2025-48757 | Info (technical) | M (Supabase docs own generic; Lovable angle L) | /launch-ready |
| C6 | /insights/who-owns-your-app-code | who owns the source code | freelancer IP app; do I own code made with Lovable; source code ownership contract | Info | M (law-firm blogs) | /build, /about (full IP) |
| C7 | /insights/developer-left-half-built-app | developer abandoned project | freelancer disappeared; take over app development; MVP rescue; software project rescue | Commercial-investigational | L | /launch-ready |
| C8 | /insights/lovable-vs-bolt-vs-cursor | lovable vs bolt vs cursor | which AI app builder for production; v0 vs Lovable | Commercial-investigational | H (lovable.dev ranks its own comparison in 10+ languages) | pillar, /launch-ready |
| C9 | /insights/reduce-llm-api-costs | reduce LLM API costs | llm cost optimization (40); AI cost optimization; model routing; prompt caching | Info | M (Maxim, nOps, PremAI, many 2026 guides) | /work/edulens, /scale |
| C10 (Q1) | /insights/hire-lovable-developer | hire Lovable developer | Lovable expert; fix my Lovable app; developer vs agency | Commercial | M (Fiverr, Upwork, RapidDev, DreamzTech) | /launch-ready |

Sequence (matches the content calendar): Oct C1, C2 → Nov pillar, C3 + Rushr case study → Dec C4, C9 (EduLens) → Q1 C5, C6, C7, C8, C10, then Arabic versions of the pillar, C1 and C3.
Second hub (after 6+ months, only if this one gets traction): "build the right product" → /validate. Until then, Validate/Scale posts stay standalone by design.

Cannibalization guard: /launch-ready owns "vibe code audit" and C4 owns "…cost". The pillar owns "AI app to production" and C2 owns the Lovable-specific version. /build owns "MVP development company" and C3 owns "fix or rebuild" (informational). One primary per URL. Log every primary in a sheet before writing.

### Internal linking rules
1. Pillar → every cluster: one contextual link each, placed in the section where the topic comes up. No "related posts" dump.
2. Each cluster → pillar: in the first 200 words and in the closing paragraph. Each cluster → /launch-ready: one in-body CTA plus an end CTA.
3. Clusters link sideways only when it is natural: C1↔C5 (security), C3↔C7 (rescue), C4↔C3 (cost/decision), C9↔/work/edulens.
4. Service pages → 2–3 insights each: /launch-ready → C1, C4, C5. /build → C3, C6, /work/rushr. /scale → C9, /work/edulens. /validate → pillar.
5. Home → /launch-ready, pillar, /work, plus each service page (equity to money pages). Nav: Review · Services · Work · Insights · About · [Book a Review].
6. Case studies → the matching service page + 1 insight. Each insight → 1 case study where relevant.
7. Anchors: descriptive partial-match ("check your Supabase access rules"). Exact-match anchors ≤15% per target. Never "click here". Never link to a redirecting URL.
8. Breadcrumbs on every non-home page (Home › Insights › Article), visible + BreadcrumbList.
9. Every page has ≥3 inbound internal links and is ≤3 clicks from home. No orphans: the build fails if a page has <3 inbound links (simple Astro build check).
10. Footer: ≤15 links (services, work, insights, about, book, legal, AR switcher). Keep sitewide sidebars out.

## 3. Schema plan (JSON-LD, server-rendered in `<head>`)
Current Google facts (verified):
- FAQ rich results were removed for all sites on May 7, 2026. The report and Rich Results Test support are going away (June 2026), and the Search Console API support goes in Aug 2026. Google still reads FAQPage markup to understand pages. HowTo rich results have been gone since Sept 2023.
- AI Overviews / AI Mode need no special schema. Structured data must match the visible text.
- Review snippets: if an entity controls reviews about itself, its LocalBusiness/Organization pages are **ineligible** for stars. This covers markup and embedded widgets. Don't aggregate reviews from other sites. Service is not a review-snippet type.

| Page type | JSON-LD types | Key properties |
|---|---|---|
| Sitewide (home only, one block, `@graph`) | Organization (`@id: https://discoverdev.ai/#org`) + WebSite (`#website`) | name "DiscoverDev", alternateName, url, logo (≥112px square PNG), description (the one-sentence entity line, identical everywhere), foundingDate, email, contactPoint (sales, availableLanguage en/ar), address (Alexandria hub; add Texas only if it is a real, public address), areaServed [US, SA, AE, KW, EG, GB], knowsAbout [MVP development, AI app security, Supabase, LLM cost optimization…], knowsLanguage [en, ar], sameAs [Clutch, LinkedIn company, Upwork agency, GitHub, Crunchbase/GoodFirms/DesignRush once created, Wikidata if created]. WebSite: name, alternateName, inLanguage, publisher → #org |
| ProfessionalService | Optional, /about only | Use only if the Alexandria office has a public street address. Same @id ref via `parentOrganization` / `department`. Do not create a Google Business Profile for a non-visitable address |
| Service pages (/launch-ready, /validate, /build, /scale, /partners) | Service + BreadcrumbList (+ WebPage) | name, serviceType, description, provider → #org, areaServed, audience (BusinessAudience: startup founders / software houses), hasOfferCatalog or offers: Offer with description ("Fixed fee quoted per project; credits toward Build"), no `price` because none is published. Never mark up a guarantee you don't show. **No AggregateRating / Review** |
| /work, /insights | CollectionPage + ItemList + BreadcrumbList | itemListElement → case study / article URLs |
| Case study | Article + BreadcrumbList | headline, datePublished/dateModified, author (Person), publisher → #org, about (Service @id), mentions (client Organization, only with written consent), image 1200px+. Quotes are visible text only, with no Review markup |
| Pillar + clusters | Article (or BlogPosting) + BreadcrumbList + Person | headline = H1, description, image ≥1200px wide, datePublished, dateModified (shown on page too), author → Person @id (`/about#mohamed`) with jobTitle, url, sameAs [LinkedIn, Clutch, GitHub], publisher → #org, inLanguage, isPartOf → pillar for clusters. FAQPage: optional and low priority. Keep visible Q&A sections for AEO. Add FAQPage only where Q&A is real and visible; it has no rich-result value |
| /about | AboutPage + Organization (full, same @id) + Person × founders | Person: name, jobTitle, worksFor → #org, sameAs, knowsAbout |
| /book | WebPage (+ BreadcrumbList) | Keep it simple. Skip ReserveAction (no rich result) |
| /ar/* | Same types, `inLanguage: "ar"` | Translated name/description. Same @ids for org and persons |

Review/rating policy: show the "5.0 across 11 reviews" claim as visible text with the sources named (Clutch link). Place an outbound link to Clutch next to quotes. No AggregateRating anywhere on the site, because it is self-serving and ineligible. Named clients and quotes are used only with consent on file.
Validate: Rich Results Test + validator.schema.org before deploy. Check Search Console Enhancements at 2–4 weeks.

## 4. AEO / GEO playbook
Google: no special files or markup needed for AI features. Indexability, snippets, internal links, page experience and text content are what count. Measurement for AI Overviews / AI Mode sits inside Search Console "Web".

**On-page format**
- Answer first: each H2 opens with a 40–60 word direct answer, then the detail. Each pillar opens with a 150–200 word TL;DR.
- Phrase H2s as questions buyers type or prompt ("Is Lovable safe for production?", "How much does a vibe code audit cost?").
- Use tables for comparisons and costs (fix vs rebuild matrix, audit scope vs price band, Lovable vs Bolt vs Cursor). Copilot citation data shows specific comparison pages with named vendors and prices get most citations, and vague overviews get few (Search Influence, Feb 2026).
- Include original numbers: EduLens 60–90%, Rushr 16 weeks, and anonymized aggregate Review findings ("X of our last N reviews had missing RLS"), only once N is real. State the method in one line.
- Cite primary sources: CVE-2025-48757 (Lovable/Supabase RLS, 170+ apps, May 2025), OWASP, Supabase docs, NIST SSDF.
- Visible byline (Mohamed Ali + role + LinkedIn), "Published" and "Updated" dates. Refresh the pillar quarterly. AI best-of citations skew heavily to recently updated pages (Ahrefs: 79% of cited dated lists were updated in the current year).
- One clear opinion per piece (e.g. "Most AI-built apps should be fixed, not rebuilt, unless X"). A distinctive POV is something engines can attribute to the brand.

**Entity consistency**
- One entity line used verbatim on the site, Clutch, LinkedIn, Upwork, GoodFirms, DesignRush, Crunchbase: "DiscoverDev is a product and engineering company that helps founders build the right product, ship it fast, and own all of it. Engineering hub in Alexandria, Egypt; clients in the US and the Gulf."
- The same name (DiscoverDev, never "Discover Dev"), logo, URL, founding year and service names (Launch-Ready Review, Validate, Build, Scale) everywhere.
- Organization `sameAs` points to every profile. Create a Wikidata item only if notability sources exist (press, awards). Don't force it.

**llms.txt**
- Status (verified): optional, unproven. Google says it has no effect on Search. OpenAI and Anthropic crawler docs point to robots.txt, not llms.txt. Ahrefs log data (May 2026): 97% of llms.txt files got zero requests, and AI bots made up 1.1% of requests to them.
- Decision: ship a 30-line `/llms.txt` (entity line, offers, key URLs, pillar + clusters) because it costs ~15 minutes. Don't build llms-full.txt. Not a KPI.

**AI bot robots.txt** (allow everything; visibility matters more than content protection for a services firm)
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /thanks

# Search / answer bots (citations)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
Allow: /

# Training bots: allowed on purpose (brand recall in model knowledge)
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
Allow: /

Sitemap: https://discoverdev.ai/sitemap-index.xml
```
- Facts: OAI-SearchBot = ChatGPT search inclusion. GPTBot = training. ChatGPT-User and Perplexity-User are user-initiated and may ignore robots. Claude-SearchBot = search index, Claude-User = user fetch, ClaudeBot = training, and all three honor robots. Google-Extended controls Gemini training + grounding, not Search ranking or inclusion.
- **Cloudflare gotcha:** Cloudflare now sorts bots into Search / Agent / Training. From Sept 15, 2026, new domains block Training + Agent by default on ad-showing pages. Googlebot and Bingbot are treated as multi-purpose, **so blocking Training also blocks them.** After moving DNS, open Security → bots / AI Crawl Control. Allow Search, Agent and Training. Turn off any "Block AI bots" toggle and any managed robots.txt that would override this file. Then test with URL Inspection + Bing URL inspection.

**Off-site (where engines learn who to recommend)**
- Clutch: the main third-party proof. Goal: 15+ Clutch-verified reviews by Q2 2027 (move Upwork/direct clients to Clutch reviews). Set Clutch service lines to match site services (MVP development, app modernization/audit, staff augmentation). Ask reviewers to name the service ("Launch-Ready Review", "fixed-price MVP").
- Best-of lists: Ahrefs (Dec 2025, 750 prompts) found "best X" lists were 43.8% of cited page types. For agency queries, first-party landing pages were cited most (30.4%), then blog lists (17.2%) and homepages (14%). Targets: GoodFirms / DesignRush / Techreviewer / Clutch Leaders lists for "MVP development", "Egypt", "Alexandria", plus independent "vibe code rescue agencies" roundups (pitch the authors with the guarantee + audit findings). Don't publish a self-ranked "best agencies" list at launch: it carries trust risk and the brand is too small.
- Reddit: r/lovable, r/vibecoding, r/SaaS, r/startups, r/SideProject, r/Supabase. Answer launch/security questions, disclose affiliation, link only when asked. 2 helpful answers/week fits the 7 h budget.
- LinkedIn company + founder posts (already in the plan). YouTube: one recorded Launch-Ready walkthrough per quarter (Gemini/AI Mode surface video).
- Priority prompts to test monthly (ChatGPT, Perplexity, Gemini, Copilot, Google AI Mode): "who can audit my Lovable app before launch", "is my vibe coded app secure", "fix or rebuild AI-built app", "vibe code audit cost", "best MVP development company for startups", "MVP development company Saudi Arabia", "dedicated development team Egypt", "white label development partner Egypt", "how to reduce LLM API costs", "Supabase RLS Lovable", "who owns code built with Lovable", "agency to take Bolt app to production", "DiscoverDev reviews", "DiscoverDev vs TrianglZ", "software house Alexandria Egypt". Log: mentioned? cited URL? competitor named?

## 5. Competitor SEO notes
| | Robusta Group (RTG) | Goji Labs | TrianglZ |
|---|---|---|---|
| Positioning | Enterprise digital transformation, commerce, AI across MENA/EMEA. Four "engines" (Studio, Octopus, Ventures, Products) | US product agency, $50K+ min | Alexandria AI-first engineering, MVP→production "modes" |
| Home title | "Digital Transformation, E-Commerce & AI \| RTG" | "Strategy-Led Digital Product Agency. AI, Software, UX \| Goji Labs" | "TrianglZ — AI-First Software Engineering Company" |
| Home H1 | "Building MEA's AI-Native Future" (no keyword) | "A Product Agency That Thinks Beyond The Build." | "Automated Speed. Human Taste. That's TrianglZ." |
| Service page pattern | /capabilities/studio: title "Enterprise Digital Transformation Services \| RTG", H1 "CX, Commerce & Enterprise Digital Transformation". Sub-pages /studio/ecommerce, /studio/shopify | /services/… keyword URLs (digital-product-audit-services, custom-web-app-development-services) | No per-service URLs visible (16 capabilities on one page) |
| Content hub | /industries/insights: 67 on-domain articles (Nov 2024–Apr 2026, ~3.7/mo, gap May–Aug 2025). Industry-led: retail (18), fintech, GovTech, health, Egypt talent/nearshoring ("Egypt's Tech Talent in 2026…"), Saudi e-commerce market sizing | /blog + /guides. Guides use framework + FAQ ("Refactor vs. Rebuild vs. Replatform", no byline, modified date hidden). Self-ranked listicles ("Best Custom Software Development Companies (2026)"). "Why Rebuild Is Usually the Wrong First Answer" | None. SURF webinar series (8 sessions, 666 attendees) + /faq + Venroll tool (idea→PRD→prototype) as lead magnet |
| Local / pSEO | None visible | /areas-we-serve: 11 US city pages (/[city]-app-development/). Copy errors (Dallas text says Chicago) = thin pSEO | Addresses: Alexandria, RAK (UAE), Sevenoaks (UK) |
| Schema visible | None (OG/Twitter only) | None visible | None visible |
| Proof | 250+ clients, big logos (Vodafone, PepsiCo, Saudi Tourism Authority), testimonials. No Clutch badge | Heavy awards row (Clutch Top 100 Fastest Growing 2026, Inc. 5000…). Clutch 5.0 / 91 (hub data) | Clutch 5.0 / 27, Clutch 1000/100 badges |
| Tech note | robustastudio.com **302** (temporary) → robustagroup.com/capabilities/studio, which leaks old-domain equity | — | — |

Takeaways
- **Robusta is not a search competitor for the ICP.** It sells enterprise transformation and commerce (Adobe Commerce, Shopify). It overlaps only on "software company Egypt/KSA" and Egypt-talent content. Lessons: (1) regional market-data articles (Saudi e-commerce sizing, Egypt talent) are citable assets; (2) a slogan H1 and no schema leave room even for a small site.
- **Goji is the closest content rival.** It already has a refactor/rebuild guide and is pushing rescue content. Beat it on specificity: AI-builder focus (Lovable/Bolt/Supabase), named author, visible updated date, real findings, cost tables. Don't copy its city pages.
- **TrianglZ owns "Alexandria" peer proof and webinars, but has no blog.** The "Egypt / Alexandria software house" and "AI-built MVP" content space is open for DiscoverDev.
- **The real SERP competitors for the pillar are small rescue specialists:** Wavect (cost guide with TL;DR, reviewed date, primary sources), Valletta ("from $199" audit), instinctools, softonix, redwerk, RapidDev, Unpwned (programmatic Lovable Q&A pages), LowCode Agency, Shakuro, Leanware, IndiaNIC, plus Fiverr/Upwork gigs for "fix my Lovable app". Their pages are new and thin on proof. The guarantee + 5-day fixed scope + named engineers + case numbers is the edge.

## 6. Technical SEO checklist (Astro + Cloudflare)
**Build config**
- [ ] `site: 'https://discoverdev.ai'`, `trailingSlash: 'never'`, `build.format: 'file'`. Cloudflare Pages serves `about.html` at `/about` and redirects `.html` → extensionless. That matches the brief's slash-less URLs. Verify with curl after the first deploy: `/about/` should 301/308 to `/about`, and only one version returns 200.
- [ ] Apex is canonical. www → apex 301 (Cloudflare Redirect Rule). HTTP → HTTPS (Always Use HTTPS). HSTS on once stable.
- [ ] `*.pages.dev` production hostname must not compete. Redirect it to apex (Bulk Redirect / middleware) or send `X-Robots-Tag: noindex` for that host. Preview deploys must be noindexed. Verify the headers.
- [ ] If starting fresh in 2026, consider Workers static assets instead of Pages. Cloudflare points Pages users to Workers for full control (e.g. Early Hints). Either way works at $0. Keep the same `_redirects` / `_headers` approach.

**Crawl and index**
- [ ] `/404.html` **must exist.** Without a top-level 404.html, Pages assumes an SPA and serves `/` for every unknown path, which creates soft 404s sitewide (the same bug as the current site). Test that a random URL returns status 404.
- [ ] `@astrojs/sitemap`: `sitemap-index.xml`, `filter` out /thanks, /book/confirmed, drafts. Add the i18n option once /ar ships (it outputs `xhtml:link` alternates). Reference it in robots.txt and submit it to GSC + Bing.
- [ ] robots.txt as in §4. Don't block CSS/JS/_astro.
- [ ] Self-referencing absolute canonical on every page. UTM'd URLs canonicalize to clean ones. Never canonical to a redirect.
- [ ] noindex: thank-you/confirmation pages, legal pages optional, any search page.

**Redirects (old SPA → new) in `_redirects`** (301; default is 302, so always write the code)
```
/staff            /scale         301
/staff/*          /scale         301
/index.html       /              301
/home             /              301
/services         /build         301
/contact          /book          301
/blog/*           /insights      301
```
- [ ] Export the old site's real routes (router config + GSC "Pages" + backlinks in Clutch/LinkedIn/Upwork) before cutover. Add each one to the map. /build keeps its path (new content), so it needs no redirect.
- [ ] If the old SPA used hash routes (`/#/build`), servers can't see them. Add a 5-line inline script on `/` that maps `location.hash` → new path with `location.replace`.
- [ ] Disable the GitHub Pages site / custom domain after DNS moves so no duplicate copy stays live at *.github.io.
- [ ] Limits: 2,000 static + 100 dynamic redirects per `_redirects` (plenty). Redirects apply even when an asset matches.

**hreflang (when /ar ships, Q1 2027)**
- [ ] Subfolder `/ar/…` with English slugs (no percent-encoded Arabic URLs). `<html lang="ar" dir="rtl">`.
- [ ] Use one method only: `<link rel="alternate" hreflang>` in the head. Include `en`, `ar`, `x-default` → EN URL, self-referencing and reciprocal. Add tags only to pages that exist in both languages. (Astro's sitemap i18n output doesn't document x-default, so the head is the source of truth.)
- [ ] No IP or Accept-Language auto-redirects. Use a visible language switcher. Localize titles/metas/schema `inLanguage`. Use human-reviewed Arabic for KSA/UAE/KW terms.

**Head and sharing**
- [ ] Per page: title, meta description, canonical, `og:title/description/url/image (1200×630)/type/locale (en_US, ar_AR)`, `twitter:card=summary_large_image`. Build-time generated OG images per article.
- [ ] One H1. Visible breadcrumbs. Semantic `main/article/nav`. All core copy in static HTML (no JS-only content; AI crawlers render less reliably).

**Performance budgets (p75 mobile; Google thresholds LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1)**
| Metric | Budget |
|---|---|
| LCP | ≤2.0 s |
| INP | ≤150 ms |
| CLS | ≤0.05 |
| JS per page | ≤50 KB gz (Astro islands only where needed) |
| CSS | ≤40 KB gz |
| Page weight | ≤500 KB (home), ≤350 KB (article) |
| Lighthouse (mobile) | ≥95 perf / 100 SEO / ≥95 a11y |
- [ ] Load the Cal.com embed only on /book, or on click (it is the biggest INP/LCP risk). Other CTAs link to /book.
- [ ] Images via `astro:assets` (AVIF/WebP, width/height, `loading="lazy"` below the fold, `fetchpriority="high"` on the LCP image only). Use descriptive file names and alt text.
- [ ] Fonts: self-host Manrope + Rubik woff2, Latin subset, `font-display: swap`, preload 1–2 files. Load IBM Plex Sans Arabic only on /ar.
- [ ] Analytics: GA4 via deferred/Zaraz or Cloudflare Web Analytics. Don't block render. Keep the brief's events (cta_clicked, booking_started, booking_completed, article_read, case_study_viewed, outbound_clicked).
- [ ] `_headers`: long cache for `/_astro/*` (immutable), short for HTML. Security headers (CSP, X-Content-Type-Options, Referrer-Policy strict-origin-when-cross-origin; this keeps the referrer domain for AI attribution).
- [ ] CI: Lighthouse CI + a link checker + a schema validation step on every deploy. Fail the build on broken internal links or pages with <3 inbound links.

## 7. Measurement
- **Google Search Console:** Domain property (DNS TXT in Cloudflare). Submit the sitemap and inspect the 13 core URLs on launch day. AI Overviews / AI Mode clicks and impressions are included in Performance → "Web" (there is no separate AI filter). Track the non-brand queries for §1/§2 primaries and branded "DiscoverDev". Weekly in month 1, then monthly.
- **Bing Webmaster Tools:** import from GSC, submit the sitemap, and turn on IndexNow (Cloudflare Crawler Hints can ping it). Use the **AI Performance report** (public preview, Feb 2026): Copilot citations, cited pages and grounding queries, CSV only. ChatGPT search's link to the Bing index is widely reported but was not confirmed by a primary source in this research. Bing setup costs nothing, so do it anyway.
- **AI referral tracking (GA4):** add a custom channel group "AI assistants" above Referral with the source regex `^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|www\.perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$`. ChatGPT web adds `utm_source=chatgpt.com`. Mobile AI apps often send no referrer, so **add a required "How did you hear about us?" field to the Cal.com booking form** (options: Google, ChatGPT/AI assistant, LinkedIn, Clutch, Referral, Reddit, Other). That field is the attribution source of truth.
- **Bot visibility:** Cloudflare AI Crawl Control / bot analytics shows which AI crawlers fetch which pages. Check monthly that OAI-SearchBot, Claude-SearchBot, PerplexityBot and Bingbot get 200s.
- **AI visibility panel:** the 15 prompts in §4, tested monthly in 5 engines. Record: mentioned (Y/N), cited URL, competitors named. ~45 min/month.
- **KPI tree:** North Star = clarity calls booked/month → Review bookings → organic + AI-referred sessions to /launch-ready and the pillar → non-brand impressions for cluster primaries → Clutch review count + best-of list inclusions. 90-day targets are set after 4 weeks of GSC baseline; don't invent them now.

## 8. Sources
Google / platform docs
- AI features and your website (updated 2025-12-10): https://developers.google.com/search/docs/appearance/ai-features
- Review snippet guidelines (self-serving rule): https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google common crawlers / Google-Extended: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- Localized versions / hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- HowTo/FAQ 2023 changes: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- FAQ rich results removed May 7, 2026: https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026 · https://ppc.land/google-kills-faq-rich-results-what-seos-saw-coming-since-2019/
- Core Web Vitals thresholds: https://web.dev/articles/vitals
- Helpful content / page experience guidance update: https://searchenginejournal.com/google-updates-helpful-content-guidance/485012 · May 2026 core update: https://searchengineland.com/google-may-2026-core-update-rollout-is-now-complete-479119
- OpenAI crawlers: https://developers.openai.com/api/docs/bots
- Anthropic crawlers: https://support.claude.com/en/articles/8896518-what-is-claudebot
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md
- Cloudflare AI crawler controls (Jul 2026): https://www.helpnetsecurity.com/2026/07/02/cloudflare-ai-crawler-controls/
- Cloudflare Pages serving / 404 / SPA fallback: https://developers.cloudflare.com/pages/configuration/serving-pages/
- Cloudflare Pages redirects: https://developers.cloudflare.com/pages/configuration/redirects/
- Cloudflare Early Hints (Pages vs Workers): https://developers.cloudflare.com/pages/configuration/early-hints/
- Astro sitemap i18n: https://docs.astro.build/en/guides/integrations-guide/sitemap/

AEO / GEO research
- llms.txt adoption vs zero requests (Originality.ai + Ahrefs, Jul 2026): https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/
- Ahrefs, "best" lists and ChatGPT citations (Dec 2025): https://ahrefs.com/blog/best-lists-research/
- Bing AI Performance report / Copilot citations: https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/
- AI referral tracking in GA4: https://www.terminusapp.com/blog/tracking-ai-referral-traffic/

Keyword data (US, Google Ads API via seodata.dev)
- https://www.seodata.dev/keyword/mvp-development-company · /vibe-coding · /lovable · /dedicated-development-team · /staff-augmentation · /product-discovery · /supabase-rls · /software-development-company · /llm-cost-optimization
- Vibe coding growth claim (unsourced methodology): https://blog.vibecoder.me/google-search-trends-vibe-coding · UK AIO snapshot: https://www.seomonitor.com/ai-visibility/uk/brand/Vibe%20Coding

SERP observations (WebSearch tool, Oct 15, 2026)
- Vibe code audit: https://www.instinctools.com/blog/vibe-coding-audit/ · https://softonix.org/blog/what-vibe-coding-audit-finds · https://redwerk.com/blog/vibe-coding-security-risks/ · https://vallettasoftware.com/vibe-audit · https://wavect.io/blog/vibe-coded-software-audit-cost.md
- Lovable security / readiness: https://www.rapidevelopers.com/lovable-security-audit · https://unpwned.io/qa/lovable/is-lovable-safe-for-production · https://www.lowcode.agency/blog/is-lovable-production-ready · https://shakuro.com/blog/lovable-bolt-replit-app-production-checklist · https://leanware.co/insights/production-readiness-checklist-vibe-coded-apps
- AI app to production: https://mentorcruise.com/blog/i-built-an-app-with-ai-and-i-cant-ship-it-how-to-take-an-ai-prototype-to-product/ · https://www.verdent.ai/guides/answers/deploy-ai-built-app-production
- Fix/rebuild: https://gojilabs.com/guides/when-to-refactor-vs-rebuild-a-saas-product/ · https://www.indianic.com/blog/rescue-vs-rebuild-ai-prototype/ · https://rockingtech.co.uk/blog/refactor-backend-or-rebuild-vibe-coded-app · https://wavect.io/services/vibe-coding-rescue/
- MVP: https://www.groovyweb.co/industries/mvp-development-company-for-startups · https://www.belighted.com/blog/top-mvp-development-companies
- Discovery: https://raftlabs.com/services/product-discovery-phase · https://coaxsoft.com/services/discovery-phase · https://themindstudios.com/blog/best-software-product-discovery-services-and-consulting-companies/
- Egypt teams: https://chudovo.com/dedicated-teams/hire-in-egypt/ · https://outsorcy.com/guides/dedicated-teams-in-egypt · https://flairstech.com/blog/egypt-is-one-of-the-best-countries-for-offshore-software-development
- KSA/KW: https://themindstudios.com/blog/top-software-development-companies-in-saudi-arabia/ · https://www.apptunix.com/software-development-company-riyadh-saudi-arabia/ · https://www.creolestudios.com/ksa/ar/
- White label: https://acquaintsoft.com/white-label-software-development · https://www.infomazeelite.com/white-label-development-agency-partners/
- LLM costs: https://www.getmaxim.ai/articles/reduce-llm-cost-and-latency-a-comprehensive-guide-for-2026/ · https://www.nops.io/blog/llm-cost-optimization-tips/
- Lovable vs Bolt vs Cursor: https://lovable.dev/guides/cursor-vs-bolt-vs-lovable-comparison
- Lovable RLS CVE-2025-48757: https://www.superblocks.com/blog/lovable-rls-breach

Competitors
- https://www.robustagroup.com/ · https://robustagroup.com/capabilities/studio · https://robustagroup.com/industries/insights
- https://gojilabs.com/ · https://gojilabs.com/blog/ · https://gojilabs.com/areas-we-serve/
- https://trianglz.com/
