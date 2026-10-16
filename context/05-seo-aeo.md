# 05 · SEO + AEO/GEO

Status: build-ready · Owner: Mohamed · Updated: 2026-10-15
Read with: `04-ux-ia.md` (routes, breadcrumbs), `03-copy.md` (body copy), `07-tech-spec.md` (implementation), `11-open-decisions.md` (`D-xx`).
Data limits: keyword volumes are US monthly averages from seodata.dev (Google Ads API, dates shown). Everything marked **est.** is judgment, not data. AI Overview presence was not observable during research: check the 15 prompts (§8, "Monthly AI prompt check") manually before launch.

## 0. Rules for the builder
- [ ] One primary keyword per URL. Never target another page's primary (cannibalization guard §2.3).
- [ ] Title ≤ 60 chars, primary keyword first, brand last when it fits. Meta 120–155 chars, written as ad copy. No exclamation marks.
- [ ] Exactly one H1 per page; H1 ≠ title word-for-word.
- [ ] If `03-copy.md` gives a different H1, `03-copy.md` wins, but keyword pages (`/launch-ready`, `/validate`, `/build`, `/scale`, `/partners`, articles) must keep the primary keyword or a close variant in the H1. Flag conflicts in the PR.
- [ ] All core copy in static HTML. No JS-only content.
- [ ] JSON-LD must match visible text. No `AggregateRating`, no `Review` markup anywhere.
- [ ] Every indexable page: self-referencing absolute canonical, OG + Twitter tags, ≥ 3 inbound contextual internal links, ≤ 3 clicks from home.

## 1. Keyword map per page

Diff: L = small blogs/agencies rank · M = mid agencies + listicles · H = directories, big outsourcers. Volumes: seodata.dev, US.

| Page | Primary kw | Secondaries | Intent | Diff |
|---|---|---|---|---|
| `/` | product development company for startups (est.) | DiscoverDev (brand); software development company for startups; AI-accelerated software development; AI development company Egypt; senior product team US GCC | Nav + commercial | Brand L / generic H |
| `/launch-ready` | vibe code audit (est.) | Lovable app security review; AI-built app production readiness; Bolt / Cursor app code review; Supabase security audit | Commercial / transactional | M |
| `/validate` | product discovery services (est.) | product discovery phase (50, 2026-08); startup idea validation service; MVP scoping; clickable prototype fixed estimate | Commercial | M |
| `/build` | MVP development company (590, 2026-07, CPC $23) | MVP development services (880); mvp software development company (210); fixed price MVP development; MVP development company in USA (70) | Commercial | H |
| `/scale` | dedicated development team (590, 2026-05) | software development dedicated team (720); hiring dedicated development team (480); dedicated development team Egypt; offshore development Egypt | Commercial | H |
| `/partners` | white label software development (est.) | white-label development partner for agencies; staff augmentation services (1,900, 2026-07); white label app development; nearshore partner Egypt | Commercial B2B | M |
| `/work` | DiscoverDev case studies | MVP case study; marketplace app case study; AI app case study | Nav / commercial | L |
| `/work/rushr` | home services marketplace app development (est.) | Uber-style dispatch app; Stripe Connect escrow marketplace; marketplace MVP 16 weeks | Commercial-investigational | L–M |
| `/work/edulens` | reduce AI costs case study (est.) | LLM cost optimization (40, 2026-09); AI agents for EdTech; model routing case study | Info / commercial | L |
| `/insights` | AI-built app to production guides (est.) | vibe coding guides for founders; Lovable launch help | Nav | L |
| pillar `/insights/ai-app-to-production` | AI app to production (est.) | AI prototype to production; vibe coded app to production; Lovable app to production; production readiness checklist vibe coded | Info → commercial | M |
| `/about` | DiscoverDev | DiscoverDev reviews; software company Alexandria Egypt; Egypt dev team for US startups | Nav | L |
| `/launch-check` | is my app ready to launch (est.) | AI app launch readiness quiz; vibe coded app checklist quiz | Interactive / info | L |
| `/book` | book Launch-Ready Review | DiscoverDev clarity call | Transactional | L |
| `/book/confirmed`, `/404` | — (noindex) | — | — | — |
| `/privacy`, `/terms` | — (indexable, footer only) | — | Nav | — |

### 1.1 Titles, metas, H1s (lengths checked: titles ≤ 60, metas ≤ 155; synced with `03-copy.md` on 2026-10-15; `03-copy.md` wins on conflict)
| Page | Title | Meta description | H1 |
|---|---|---|---|
| `/` | Product & Engineering Partner for Founders \| DiscoverDev | Build the right thing, then ship it fast. The DiscoverDev Way: discover first, build with AI, seniors sign off. Senior teams, and you own it all. | Build the right thing. Ship it fast. |
| `/launch-ready` | Vibe Code Audit for Lovable, Bolt & Cursor \| DiscoverDev | A 5-day Launch-Ready Review of your AI-built app: security, data rules, payments, scale. Fixed fee, credited toward the fix. No useful findings, no charge. | Launch-Ready Review |
| `/validate` | Product Discovery Services for Startups \| DiscoverDev | Validate your idea in 1–2 weeks: market read, scope, clickable prototype and a fixed build estimate. The fee credits toward your build. | Validate: discovery before code |
| `/build` | Fixed-Price MVP Development in 8–12 Weeks \| DiscoverDev | A senior team takes your MVP from scope to production in 8–12 weeks at a fixed price. Or we rebuild your AI prototype properly. You own all the code. | Build: an MVP in 8–12 weeks |
| `/scale` | Dedicated Development Team on Retainer \| DiscoverDev | A dedicated squad of developers, QA and a PM that stays with your product. Monthly retainer. Engineering hub in Egypt, working in Arabic and English. | Scale: a team that stays |
| `/partners` | White-Label Development Partner for Agencies \| DiscoverDev | White-label delivery and staff augmentation for software houses. Senior engineers working under your brand, your process and your client contract. | Partners: white-label development |
| `/work` | Case Studies: MVPs, Marketplaces & AI Apps \| DiscoverDev | Products we took from idea or prototype to production: EdTech AI agents with 60–90% lower AI costs, a US home-services marketplace, and more. | Products we helped ship |
| `/work/rushr` | Rushr: Home-Services Marketplace Built in 16 Weeks | How we built Rushr, a US home-services marketplace, from zero in 16 weeks: Uber-style dispatch, Stripe Connect escrow, messaging and admin tools. | Rushr: a home-services marketplace, built in 16 weeks |
| `/work/edulens` | EduLens: Cutting AI Costs 60–90% Across 3 Agents | Caption-first ingestion, cross-user caching, model routing and token trimming cut EduLens' AI costs by 60–90%. What we changed and why it worked. | EduLens: three AI agents, 60–90% lower AI cost |
| `/insights` | Guides for Shipping AI-Built Apps \| DiscoverDev | Plain guides for founders with an AI-built app: taking it to production, the security holes to close, a Lovable launch checklist, fix or rebuild. | Guides for shipping AI-built apps |
| pillar | AI-Built App to Production: The Founder's Guide | Built with Lovable, Bolt, v0 or Cursor and stuck before launch? What breaks, what to check, fix or rebuild, real costs and timelines, in one guide. | How to take an AI-built app to production |
| `/about` | About DiscoverDev: Senior Product Team, Egypt & US | A product and engineering company with a US presence and an engineering hub in Alexandria, Egypt. Senior teams that stay. 5.0 across 11 reviews. | About DiscoverDev |
| `/launch-check` | Is My AI-Built App Ready to Launch? Free Check \| DiscoverDev | Answer 10 quick questions about your Lovable, Bolt, v0 or Cursor app. See your launch risks in security, payments, code and operations in 3 minutes. | Is your AI-built app launch-ready? |
| `/book` | Book a Launch-Ready Review or Clarity Call \| DiscoverDev | Book a 5-day Launch-Ready Review of your app, or a free 30-minute clarity call. No pitch. Pick a time that works for you in the US or the Gulf. | Book a review or a free clarity call |
| `/book/confirmed` | You're Booked \| DiscoverDev | (noindex; reuse `/book` meta) | You're booked |
| `/privacy` | Privacy Notice \| DiscoverDev | How DiscoverDev collects, uses and protects personal data from this website, our booking calendar and analytics, plus your rights and how to reach us. | Privacy notice |
| `/terms` | Website Terms of Use \| DiscoverDev | The terms that apply when you use discoverdev.ai: content ownership, acceptable use, third-party links and limits of liability, in plain language. | Website terms of use |
| `/404` | Page Not Found \| DiscoverDev | (noindex) | We can't find that page |

Notes:
- `/work/rushr` title/meta: publish only with verified metrics (D-07). "16 weeks" is confirmed in the master doc.
- `/launch-ready` meta uses "5-day"; body copy says "About 5 working days" (confirmed). Keep both consistent with D-03/D-20 outcome.
- GCC location pages: do **not** build country/city pages at launch. Cover GCC with `areaServed`, GCC proof (consent), and `/ar` in Q1 2027 (Arabic SERPs look softer; recheck Q1).

## 2. Pillar / cluster plan

Hub: `/insights/ai-app-to-production` (3,000–4,500 words). All clusters flat under `/insights/`. Breadcrumb shows the hub.
Sequence: launch (Nov 24) pillar + C1 + C2 · by Nov 30 C3 · Dec C4, C9 · Q1 2027 C5, C6, C7, C8, C10, then Arabic pillar, C1, C3.
Second hub ("build the right product" → `/validate`) only after 6+ months and only if this hub gets traction.

### 2.1 Article brief template (frontmatter maps to `07-tech-spec.md` §6 `insights` schema)
Every brief → `title`, `description`, `pillar: prototype-to-launch|ai-cost`, `role`, `parent`, `relatedService`, `author`, `publishedAt`, `updatedAt`, `faqs`.
Every article must have:
- [ ] Key takeaways (3–5 bullets) at top. Pillar: 150–200 word TL;DR.
- [ ] Question H2s; each opens with a 40–60 word direct answer.
- [ ] ≥ 1 table (comparison, cost, or checklist).
- [ ] One clear opinion stated in the intro (the "angle").
- [ ] Primary sources linked inline (OWASP, Supabase docs, CVE record, vendor docs). Check every source URL before publish.
- [ ] Link to pillar in first 200 words + closing paragraph (clusters). In-body CTA to `/launch-check` after the problem section + end CTA card.
- [ ] Visible "Published" + "Updated" dates. Byline per D-16.
- [ ] Original numbers only when real: EduLens 60–90%, Rushr 16 weeks, aggregate Review findings only once N is real (state N and method).

### 2.2 Briefs

**P · Pillar** `/insights/ai-app-to-production` · Launch
- Title: AI-Built App to Production: The Founder's Guide · kw: AI app to production (est.)
- Angle: "Working in the demo and ready for strangers are different milestones. Most AI-built apps need a fix list, not a rewrite."
- H2s: What changes between demo and production? · What usually breaks in AI-built apps? · How do you check your app before launch? (checklist table) · Should you fix or rebuild? · What does it cost and how long does it take? (price band table, links C4) · Who should own the code and accounts? · What to do this week (numbered steps)
- Links out: C1, C2, C3 (launch); add C4–C10 as they publish (one contextual link each, in the section where the topic appears); `/launch-ready` (in-body + end); `/launch-check`; `/work/edulens` (AI costs mention).
- Sources: CVE-2025-48757 (https://cvemon.intruder.io/cves/CVE-2025-48757 · https://www.superblocks.com/blog/lovable-rls-breach); Lovable FAQ "consider a professional security review…" (https://docs.lovable.dev/introduction/faq); OWASP Top 10.
- Schema: BlogPosting + BreadcrumbList. Refresh quarterly (update `updatedAt`).

**C1** `/insights/ai-built-app-security-holes` · Launch
- Title: Vibe Coding Security: Common Holes in AI-Built Apps · kw: vibe coding security (est.) · sec: is my vibe coded app secure; AI-generated code vulnerabilities; Lovable security issues; Bolt app security · Intent: info · Diff M
- Angle: "The AI ships what you asked for. It does not ship authorization." Name the holes, show how to check each in 5 minutes.
- H2s: Is a vibe-coded app secure by default? · Is row-level security on for every table? · Are any secret keys in your front-end code? · Who can sign up, and is email verified? · Are payment webhooks verified on the server? · What did CVE-2025-48757 show? · How do you check all of this before launch? (table: hole · how to check · fix effort)
- Links: pillar (first 200 words + close); `/launch-ready` (inline + end); `/launch-check` (inline); C5 when live (RLS); C2.
- Meta: Exposed keys, missing row-level security, open sign-ups and unverified webhooks. The security holes AI-built apps ship with, and how to check yours.

**C2** `/insights/lovable-launch-checklist` · Launch
- Title: Is Lovable Production Ready? A Founder's Launch Checklist · kw: is Lovable production ready (est.) · sec: Lovable app to production; Lovable production checklist; Lovable app security · Intent: info/commercial · Diff M
- Angle: "Lovable is a good start. Its own docs recommend a professional security review for sensitive apps." Turn that into a checklist.
- H2s: Is Lovable production ready? · What does Lovable handle for you, and what doesn't? · Lovable launch checklist (table: item · why · how to check) · How do you check Supabase access rules? · How do you make Stripe payments reliable? · Do you own the code and accounts? · When should you get an outside review?
- Links: pillar; `/launch-ready`; `/launch-check`; C1; C6 when live.
- Meta: Lovable gets you to a working demo fast. Before real users and payments, check these items: data rules, keys, auth, payments, backups and code ownership.

**C3** `/insights/fix-or-rebuild-ai-app` · by Nov 30
- Title: Fix or Rebuild Your AI-Built App? How to Decide · kw: fix or rebuild app (est.) · sec: refactor vs rebuild; rescue vs rebuild AI prototype; rebuild vibe coded app · Intent: commercial-investigational · Diff M
- Angle: "Most AI-built apps should be fixed, not rebuilt, unless ownership or the data model is broken."
- H2s: Should you fix or rebuild? · What signals mean "fix"? · What signals mean "rebuild"? · Decision matrix (table: signal · fix · refactor · rebuild) · What does each path cost and take? · How do you decide without guessing? (Review)
- Links: pillar; `/launch-ready`; `/build`; C7 when live; C4 when live.
- Meta: Most AI-built apps can be fixed, not rebuilt. A plain decision guide: the signals that mean refactor, replace parts, or start again, and what each costs.
- Note: `/build` owns "MVP development company"; C3 stays informational.

**C4** `/insights/vibe-code-audit-cost` · Dec
- Title: Vibe Code Audit Cost: Price Bands and What You Get · kw: vibe code audit cost (est.) · sec: cost to fix vibe coded app; vibe coding cleanup cost; code audit cost startup · Intent: commercial · Diff L–M
- Angle: "Price follows judgment. A scan lists problems; a review decides what to do and prices the fix."
- H2s: How much does a vibe code audit cost? · What does each price band include? (table: scan / audit / rescue, with observed examples) · Why are free scanners not enough? · What should a review deliver? · How is the audit fee credited? · How to compare quotes
- Market data (observed Oct 15 2026; re-check before publish, cite each): Valletta from $199 (https://vallettasoftware.com/vibe-audit) · Upwork gig $490/$790/$1,290 (https://www.upwork.com/services/product/development-it-a-security-and-code-audit-of-your-ai-built-app-lovable-bolt-cursor-2065022228202517426) · RapidDev $1,000 fixed (https://www.rapidevelopers.com/lovable-security-audit) · McKelvey bands $2–10K review, $3.5–15K fixes, $25–50K rescue (https://justinmckelvey.com/blog/vibe-coding-cost) · metacto rescue $50–150K (https://www.metacto.com/services/vibe-code-rescue).
- Links: pillar; `/launch-ready` (owner of "vibe code audit"); C3.
- Blocked by: D-01 (our own price cue must match).

**C5** `/insights/supabase-rls-ai-apps` · Q1 2027
- Title: Supabase RLS for AI-Built Apps: Stop Data Leaks · kw: supabase rls (260, 2026-09) · sec: supabase row level security (140); rls supabase (110); Lovable Supabase data leak; CVE-2025-48757 · Intent: info (technical) · Diff M
- Angle: "In most Lovable and Bolt apps, RLS is the entire authorization system."
- H2s: What is Supabase RLS? · How do you check RLS is on for every table? (SQL snippet) · What did CVE-2025-48757 expose? · Which policies does a typical app need? (table) · How do you test policies as another user? · What else leaks data besides RLS?
- Links: pillar; C1; `/launch-ready`. Cite Supabase docs.

**C6** `/insights/who-owns-your-app-code` · Q1 2027
- Title: Who Owns Your App Code? AI Tools, Freelancers, Agencies · kw: who owns the source code (est.) · sec: freelancer IP app; do I own code made with Lovable; source code ownership contract · Intent: info · Diff M
- Angle: "Own the repo and the accounts from day one; the contract is the backup." Not legal advice (state it).
- H2s: Do you own code made with Lovable? · Do you own code a freelancer wrote? · Which contract clauses matter? (table) · Which accounts must be in your name? (checklist) · How do you move code into your accounts?
- Links: pillar; `/build`; `/about` (full IP line); C7.

**C7** `/insights/developer-left-half-built-app` · Q1 2027
- Title: Developer Left a Half-Built App? How to Take It Over · kw: developer abandoned project (est.) · sec: freelancer disappeared; take over app development; MVP rescue; software project rescue · Intent: commercial-investigational · Diff L
- Angle: "Secure access first, judge the code second, decide third."
- H2s: What to do in the first 48 hours (numbered) · How do you recover the code and accounts? · How do you judge what's usable? · Fix, finish, or rebuild? · What does a takeover cost?
- Links: pillar; `/launch-ready`; C3; C6.

**C8** `/insights/lovable-vs-bolt-vs-cursor` · Q1 2027
- Title: Lovable vs Bolt vs Cursor: Which Gets You to Production? · kw: lovable vs bolt vs cursor (est.) · sec: which AI app builder for production; v0 vs Lovable · Intent: commercial-investigational · Diff H (lovable.dev ranks its own comparison)
- Angle: "Pick the tool by what happens after the demo: code access, backend, handover."
- H2s: Which AI app builder is best for production? · Comparison table (code export, backend, auth defaults, deployment, handover) · When does each one fit? · What breaks at launch with each? · Can you switch later?
- Links: pillar; `/launch-ready`; C2. Re-verify every tool fact on publish date (fast-changing).

**C9** `/insights/reduce-llm-api-costs` · Dec
- Title: Reduce LLM API Costs: How One Client Cut 60–90% · kw: reduce LLM API costs (est.) · sec: llm cost optimization (40, 2026-09); AI cost optimization; model routing; prompt caching · Intent: info · Diff M
- Angle: "Cost follows unique work, not total requests. Cache and route before you negotiate prices."
- H2s: Why do LLM costs grow faster than users? · Caption-first ingestion · Cross-user caching · Model and provider routing · Token trimming · Chunked parallel transcription · What saved the most, in what order? (table with 60–90% range; method line)
- Links: `/work/edulens` (in-body + end); `/scale`; pillar (AI cost section). End CTA = clarity call.
- Blocked by: D-06 (EduLens consent to name).

**C10** `/insights/hire-lovable-developer` · Q1 2027
- Title: Hire a Lovable Developer or an Agency? A Founder's Guide · kw: hire Lovable developer (est.) · sec: Lovable expert; fix my Lovable app; developer vs agency · Intent: commercial · Diff M
- Angle: "Hire for the next 3 months, not the next bug."
- H2s: Freelancer, Lovable expert or agency? (table) · What does each cost? · What to ask before you hire (checklist) · Red flags · When a fixed-scope review comes first
- Links: pillar; `/launch-ready`; C2; C7.

### 2.3 Cannibalization guard
| Keyword | Owner URL | Not on |
|---|---|---|
| vibe code audit | `/launch-ready` | C4 (owns "…cost") |
| AI app to production | pillar | C2 (owns Lovable-specific) |
| MVP development company | `/build` | C3 (owns "fix or rebuild") |
| dedicated development team | `/scale` | `/partners` |
| white label software development | `/partners` | `/scale` |
| LLM cost optimization | C9 | `/work/edulens` (owns "case study") |
- [ ] Log every new article's primary in this table before writing.

## 3. Internal linking rules
1. [ ] Home → `/launch-ready`, pillar, `/work`, each service page (in main content, not only nav).
2. [ ] Pillar → every live cluster: one contextual link each, in the matching section. No "related posts" dump.
3. [ ] Cluster → pillar in first 200 words and closing paragraph. Cluster → `/launch-ready`: one in-body + end CTA (except C9: → `/work/edulens` + clarity call).
4. [ ] Sideways only when natural: C1↔C5, C3↔C7, C4↔C3, C2↔C1, C6↔C7, C9↔`/work/edulens`.
5. [ ] Service pages → 2–3 insights: `/launch-ready` → C1, C2, C4, C5 (as live) · `/build` → C3, C6, `/work/rushr` · `/scale` → C9, `/work/edulens` · `/validate` → pillar.
6. [ ] Case study → matching service page + 1 insight. Each insight → 1 case study where relevant.
7. [ ] Anchors: descriptive, partial match ("check your Supabase access rules"). Exact-match ≤ 15% per target. Never "click here", "read more", naked URLs.
8. [ ] Never link to a redirecting URL or to a draft/unbuilt route. Links to unpublished articles stay out until publish (build check fails on 404 links).
9. [ ] Every indexable page: ≥ 3 inbound links from `<main>` of distinct pages (nav/footer don't count), ≤ 3 clicks from home. Exempt: `/privacy`, `/terms`. CI fails otherwise (`07-tech-spec.md` §15).
10. [ ] Footer ≤ 15 internal links. No sitewide sidebars.

## 4. Schema (JSON-LD)

Rules:
- [ ] One `<script type="application/ld+json">` per page with an `@graph`. Built by `src/lib/seo.ts` from frontmatter; placeholders below are `{{UPPER_SNAKE}}`.
- [ ] Full `Organization` on `/` and `/about`. Elsewhere include the stub `{"@type":"Organization","@id":"https://discoverdev.ai/#org","name":"DiscoverDev","url":"https://discoverdev.ai"}`.
- [ ] `BreadcrumbList` only where breadcrumbs are visible (depth 2: `/work/*`, `/insights/*`).
- [ ] No `AggregateRating`, `Review`, `ReserveAction`, `HowTo`. FAQ rich results were removed for all sites on May 7, 2026 (https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026). `FAQPage` is optional, only for real visible Q&A, low priority.
- [ ] Self-serving review rule: an entity's own pages are ineligible for review stars (https://developers.google.com/search/docs/appearance/structured-data/review-snippet). Rating stays visible text + Clutch link.
- [ ] Validate: Rich Results Test + https://validator.schema.org before every deploy that changes templates. Re-check GSC Enhancements at 2–4 weeks.
- Entity line (verbatim everywhere, `{{ENTITY_LINE}}`; final wording = D-43): "DiscoverDev is a product and engineering company that helps founders and teams build the right product, then ship it fast. Senior teams, AI-accelerated, and you own everything. Engineering hub in Alexandria, Egypt; clients in the US and the Gulf." (= `03-copy.md` §1.2 footer line + a location sentence for entity clarity.)

### 4.1 Home `/`
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://discoverdev.ai/#org",
      "name": "DiscoverDev",
      "url": "https://discoverdev.ai",
      "logo": { "@type": "ImageObject", "url": "https://discoverdev.ai/logo-512.png", "width": 512, "height": 512 },
      "description": "{{ENTITY_LINE}}",
      "foundingDate": "{{FOUNDING_YEAR}}",
      "email": "hello@discoverdev.ai",
      "contactPoint": [{ "@type": "ContactPoint", "contactType": "sales", "email": "hello@discoverdev.ai", "availableLanguage": ["en", "ar"] }],
      "address": [{ "@type": "PostalAddress", "addressLocality": "Alexandria", "addressCountry": "EG" }],
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Kuwait" },
        { "@type": "Country", "name": "Egypt" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "knowsAbout": ["MVP development", "AI app security review", "Production readiness", "LLM cost optimization", "Product discovery", "Dedicated development teams"],
      "knowsLanguage": ["en", "ar"],
      "sameAs": ["https://clutch.co/profile/discoverdev", "{{LINKEDIN_COMPANY_URL}}", "{{UPWORK_AGENCY_URL}}", "{{GITHUB_ORG_URL}}"]
    },
    {
      "@type": "WebSite",
      "@id": "https://discoverdev.ai/#website",
      "url": "https://discoverdev.ai",
      "name": "DiscoverDev",
      "inLanguage": "en",
      "publisher": { "@id": "https://discoverdev.ai/#org" }
    },
    {
      "@type": "WebPage",
      "@id": "https://discoverdev.ai/#webpage",
      "url": "https://discoverdev.ai",
      "name": "{{TITLE}}",
      "description": "{{META_DESCRIPTION}}",
      "isPartOf": { "@id": "https://discoverdev.ai/#website" },
      "about": { "@id": "https://discoverdev.ai/#org" },
      "inLanguage": "en"
    }
  ]
}
```
- `foundingDate`: omit until D-21 confirms. `sameAs`: remove any placeholder without a live URL (D-29). Second `PostalAddress` (Texas) only after D-08 confirms a real, public address.

### 4.2 Service pages (`/launch-ready`, `/validate`, `/build`, `/scale`, `/partners`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://discoverdev.ai/#org", "name": "DiscoverDev", "url": "https://discoverdev.ai" },
    {
      "@type": "Service",
      "@id": "https://discoverdev.ai/{{SLUG}}#service",
      "name": "{{SERVICE_NAME}}",
      "serviceType": "{{SERVICE_TYPE}}",
      "description": "{{META_DESCRIPTION}}",
      "url": "https://discoverdev.ai/{{SLUG}}",
      "provider": { "@id": "https://discoverdev.ai/#org" },
      "areaServed": ["US", "SA", "AE", "KW", "EG", "GB"],
      "audience": { "@type": "BusinessAudience", "audienceType": "{{AUDIENCE}}" },
      "offers": {
        "@type": "Offer",
        "url": "https://discoverdev.ai/{{SLUG}}#pricing",
        "description": "{{OFFER_TERMS_VISIBLE_TEXT}}"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://discoverdev.ai/{{SLUG}}#webpage",
      "url": "https://discoverdev.ai/{{SLUG}}",
      "name": "{{TITLE}}",
      "description": "{{META_DESCRIPTION}}",
      "mainEntity": { "@id": "https://discoverdev.ai/{{SLUG}}#service" },
      "isPartOf": { "@id": "https://discoverdev.ai/#website" },
      "inLanguage": "en"
    }
  ]
}
```
| `{{SLUG}}` | `{{SERVICE_NAME}}` | `{{SERVICE_TYPE}}` | `{{AUDIENCE}}` |
|---|---|---|---|
| launch-ready | Launch-Ready Review | Production-readiness and code review for AI-built apps | Founders with an AI-built or freelancer-built MVP |
| validate | Validate | Product discovery | Founders with an idea |
| build | Build | MVP development | Founders ready to build |
| scale | Scale | Dedicated development team | Startups with a live product |
| partners | Partner delivery | White-label development and staff augmentation | Software houses and agencies |
- `{{OFFER_TERMS_VISIBLE_TEXT}}` = exact visible terms (e.g. "Fixed fee quoted per project; credited toward the fix or Build."). Add `"priceSpecification": {"@type":"PriceSpecification","minPrice": {{X}},"priceCurrency":"USD"}` only if D-01 publishes a visible "from $X". Never mark up the guarantee unless the same words are visible.

### 4.3 Collections (`/work`, `/insights`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://discoverdev.ai/#org", "name": "DiscoverDev", "url": "https://discoverdev.ai" },
    {
      "@type": "CollectionPage",
      "@id": "https://discoverdev.ai/{{SECTION}}#webpage",
      "url": "https://discoverdev.ai/{{SECTION}}",
      "name": "{{TITLE}}",
      "description": "{{META_DESCRIPTION}}",
      "isPartOf": { "@id": "https://discoverdev.ai/#website" },
      "publisher": { "@id": "https://discoverdev.ai/#org" },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "url": "https://discoverdev.ai/{{SECTION}}/{{ITEM_SLUG_1}}", "name": "{{ITEM_TITLE_1}}" }
        ]
      },
      "inLanguage": "en"
    }
  ]
}
```

### 4.4 Case study `/work/[slug]`
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://discoverdev.ai/#org", "name": "DiscoverDev", "url": "https://discoverdev.ai", "logo": "https://discoverdev.ai/logo-512.png" },
    {
      "@type": "Article",
      "@id": "https://discoverdev.ai/work/{{SLUG}}#article",
      "headline": "{{H1}}",
      "description": "{{META_DESCRIPTION}}",
      "image": ["https://discoverdev.ai/og/work/{{SLUG}}.png"],
      "datePublished": "{{PUBLISHED_ISO}}",
      "dateModified": "{{UPDATED_ISO}}",
      "author": { "@id": "https://discoverdev.ai/#org" },
      "publisher": { "@id": "https://discoverdev.ai/#org" },
      "about": { "@id": "https://discoverdev.ai/{{SERVICE_SLUG}}#service" },
      "mentions": [{ "@type": "Organization", "name": "{{CLIENT_NAME}}", "url": "{{CLIENT_URL}}" }],
      "mainEntityOfPage": "https://discoverdev.ai/work/{{SLUG}}",
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discoverdev.ai" },
        { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://discoverdev.ai/work" },
        { "@type": "ListItem", "position": 3, "name": "{{CLIENT_SHORT}}" }
      ]
    }
  ]
}
```
- `mentions` only when `clientConsent: true`; remove for anonymized cases. Quotes stay visible text; no `Review` markup.

### 4.5 Insights article (pillar + clusters)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://discoverdev.ai/#org", "name": "DiscoverDev", "url": "https://discoverdev.ai", "logo": "https://discoverdev.ai/logo-512.png" },
    {
      "@type": "BlogPosting",
      "@id": "https://discoverdev.ai/insights/{{SLUG}}#article",
      "headline": "{{H1}}",
      "description": "{{META_DESCRIPTION}}",
      "image": ["https://discoverdev.ai/og/insights/{{SLUG}}.png"],
      "datePublished": "{{PUBLISHED_ISO}}",
      "dateModified": "{{UPDATED_ISO}}",
      "author": {
        "@type": "Person",
        "@id": "https://discoverdev.ai/about#{{AUTHOR_ID}}",
        "name": "{{AUTHOR_NAME}}",
        "jobTitle": "{{AUTHOR_ROLE}}",
        "url": "https://discoverdev.ai/about#{{AUTHOR_ID}}",
        "sameAs": ["{{AUTHOR_LINKEDIN}}"],
        "worksFor": { "@id": "https://discoverdev.ai/#org" }
      },
      "publisher": { "@id": "https://discoverdev.ai/#org" },
      "isPartOf": { "@id": "https://discoverdev.ai/insights/ai-app-to-production#article" },
      "citation": ["{{PRIMARY_SOURCE_URL_1}}"],
      "mainEntityOfPage": "https://discoverdev.ai/insights/{{SLUG}}",
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://discoverdev.ai" },
        { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://discoverdev.ai/insights" },
        { "@type": "ListItem", "position": 3, "name": "AI-built app to production", "item": "https://discoverdev.ai/insights/ai-app-to-production" },
        { "@type": "ListItem", "position": 4, "name": "{{ARTICLE_SHORT_TITLE}}" }
      ]
    }
  ]
}
```
- Pillar: drop `isPartOf` and breadcrumb position 3 (pillar becomes position 3, no `item`).
- If D-16 = company byline: `"author": {"@id": "https://discoverdev.ai/#org"}`.
- `image` ≥ 1200 px wide (OG 1200×630 qualifies).

### 4.6 About `/about`
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://discoverdev.ai/#org", "...": "same full block as 4.1" },
    {
      "@type": "AboutPage",
      "@id": "https://discoverdev.ai/about#webpage",
      "url": "https://discoverdev.ai/about",
      "name": "{{TITLE}}",
      "description": "{{META_DESCRIPTION}}",
      "about": { "@id": "https://discoverdev.ai/#org" },
      "isPartOf": { "@id": "https://discoverdev.ai/#website" },
      "inLanguage": "en"
    },
    {
      "@type": "Person",
      "@id": "https://discoverdev.ai/about#{{PERSON_ID}}",
      "name": "{{PERSON_NAME}}",
      "jobTitle": "{{PERSON_ROLE}}",
      "worksFor": { "@id": "https://discoverdev.ai/#org" },
      "sameAs": ["{{PERSON_LINKEDIN}}"],
      "knowsAbout": ["{{TOPIC_1}}", "{{TOPIC_2}}"]
    }
  ]
}
```
- The `"...": "same full block"` line is an instruction: copy the 4.1 Organization object. One `Person` per published team member (D-16/D-17). Section anchors `#{{PERSON_ID}}` must exist on the page.

### 4.7 `/book`, `/launch-check` (WebPage)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://discoverdev.ai/#org", "name": "DiscoverDev", "url": "https://discoverdev.ai" },
    {
      "@type": "WebPage",
      "@id": "https://discoverdev.ai/{{SLUG}}#webpage",
      "url": "https://discoverdev.ai/{{SLUG}}",
      "name": "{{TITLE}}",
      "description": "{{META_DESCRIPTION}}",
      "isPartOf": { "@id": "https://discoverdev.ai/#website" },
      "publisher": { "@id": "https://discoverdev.ai/#org" },
      "inLanguage": "en"
    }
  ]
}
```
- `/book/confirmed`, `/404`: no JSON-LD.

### 4.8 Optional FAQPage (only real, visible Q&A; append to the page `@graph`)
```json
{
  "@type": "FAQPage",
  "@id": "https://discoverdev.ai/{{SLUG}}#faq",
  "mainEntity": [
    { "@type": "Question", "name": "{{QUESTION_VISIBLE_TEXT}}", "acceptedAnswer": { "@type": "Answer", "text": "{{ANSWER_VISIBLE_TEXT}}" } }
  ]
}
```

### 4.9 `/ar/*` (Q1 2027)
- Same types. `inLanguage: "ar"`, translated `name`/`description`. Same `@id`s for Organization and Person.

## 5. AEO / GEO rules
Google: no special files or markup needed for AI features; indexability, snippets, internal links, page experience and text count (https://developers.google.com/search/docs/appearance/ai-features).

On-page format
- [ ] Answer first: every H2 opens with a 40–60 word direct answer. Pillar opens with a 150–200 word TL;DR.
- [ ] Question H2s using buyer phrasing ("Is Lovable safe for production?", "How much does a vibe code audit cost?").
- [ ] Tables for comparisons, costs, checklists. Named vendors and prices where real (comparison pages with specifics get cited more; Search Influence, Feb 2026: https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/).
- [ ] State each fact once, with its source next to it. Define terms inline (RLS, webhook, row-level security).
- [ ] One clear opinion per article, stated in the intro.
- [ ] Original numbers with a one-line method. Never invent N.
- [ ] Visible byline + "Published" + "Updated". Refresh pillar quarterly; refresh any dated list in the current year (Ahrefs: 79% of cited dated lists were updated in the current year; https://ahrefs.com/blog/best-lists-research/).
- [ ] Semantic HTML: `main`, `article`, `nav`, `section`, ordered headings. Content server-rendered.

Entity consistency
- [ ] Name: "DiscoverDev" (never "Discover Dev"). Same logo, URL, founding year, service names (Launch-Ready Review, Validate, Build, Scale) on site, Clutch, LinkedIn, Upwork, GoodFirms, DesignRush, Crunchbase.
- [ ] Entity line (§4) verbatim on `/about`, Organization `description`, every external profile.
- [ ] `sameAs` lists every live profile. Wikidata only if notability sources exist.

Off-site (owner tasks, not build tasks; ~7 h/week budget)
- [ ] Clutch: target 15+ verified reviews by Q2 2027; align service lines (MVP development, app audit/modernization, staff augmentation); ask reviewers to name the service.
- [ ] Best-of lists: GoodFirms / DesignRush / Techreviewer / Clutch Leaders ("MVP development", "Egypt", "Alexandria"); pitch independent "vibe code rescue agencies" roundups. No self-ranked "best agencies" list.
- [ ] Reddit: r/lovable, r/vibecoding, r/SaaS, r/startups, r/SideProject, r/Supabase. 2 helpful answers/week, disclose affiliation, link only when asked.
- [ ] YouTube: 1 recorded Review walkthrough per quarter (optional).

### 5.1 `public/robots.txt` (production)
```
# discoverdev.ai — all crawlers allowed. noindex pages are handled by meta robots, not Disallow.
User-agent: *
Allow: /

# Search / answer bots (citations)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
Allow: /

# Training bots: allowed on purpose (brand recall)
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
Allow: /

Sitemap: https://discoverdev.ai/sitemap-index.xml
```
- [ ] Do not `Disallow` `/book/confirmed` or `/404`: crawlers must fetch them to see `noindex`.
- [ ] Do not block `/_astro/` (CSS/JS needed for rendering).
- Bot facts (verify before relying): OAI-SearchBot = ChatGPT search; GPTBot = training; ChatGPT-User / Perplexity-User = user-initiated, may ignore robots; Claude-SearchBot = search index; Claude-User = user fetch; ClaudeBot = training; Google-Extended = Gemini training + grounding, not Search ranking. Sources: https://developers.openai.com/api/docs/bots · https://support.claude.com/en/articles/8896518-what-is-claudebot · https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md · https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers

### 5.2 `public/llms.txt`
Status: optional, unproven; Google says no effect on Search; Ahrefs log data (2026) found 97% of llms.txt files got zero requests (https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/). Ship it (≈15 min). No `llms-full.txt`. Not a KPI. Update when pages publish.
```markdown
# DiscoverDev

> DiscoverDev is a product and engineering company that helps founders and teams build the right product, then ship it fast. Senior teams, AI-accelerated, and you own everything. Engineering hub in Alexandria, Egypt; clients in the US and the Gulf.

Clients keep full IP, with no lock-in. English and Arabic. 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct): https://clutch.co/profile/discoverdev

## Services
- [Launch-Ready Review](https://discoverdev.ai/launch-ready): A review of an AI-built or freelancer-built app (security, data rules, payments, code quality, scale, ownership) in about 5 working days. Fixed fee quoted per client, credited toward the fix or Build. No useful findings, no charge.
- [Validate](https://discoverdev.ai/validate): 1–2 week product discovery: market read, scope, clickable prototype, fixed build estimate.
- [Build](https://discoverdev.ai/build): MVP to production in 8–12 weeks at a fixed price.
- [Scale](https://discoverdev.ai/scale): dedicated squad (developers, QA, PM) on a monthly retainer.
- [Partners](https://discoverdev.ai/partners): white-label delivery and staff augmentation for software houses.

## Guides
- [How to take an AI-built app to production](https://discoverdev.ai/insights/ai-app-to-production)
- [Vibe coding security: common holes in AI-built apps](https://discoverdev.ai/insights/ai-built-app-security-holes)
- [Is Lovable production ready? Launch checklist](https://discoverdev.ai/insights/lovable-launch-checklist)
- [Fix or rebuild your AI-built app](https://discoverdev.ai/insights/fix-or-rebuild-ai-app)

## Work
- [EduLens: three AI agents, 60–90% lower AI cost](https://discoverdev.ai/work/edulens)

## Company
- [About](https://discoverdev.ai/about)
- [Launch check (10-question self-assessment)](https://discoverdev.ai/launch-check)
- [Book a call](https://discoverdev.ai/book)
- Contact: hello@discoverdev.ai
```
- [ ] Strategy v2 (2026-10-16): list Validate, Build, Scale first, then Launch-Ready Review, then Partners; add the line "How we work: The DiscoverDev Way. AI does the heavy lifting; senior engineers own the quality, and a person is responsible for every line that reaches users. One team from discovery to after launch." under the summary.
- [ ] Remove any line whose page is not live (e.g. C3, EduLens if anonymized → use anonymized URL/title).

### 5.3 Cloudflare AI-bot setting (do on DNS move day, recheck on launch day)
- Cloudflare sorts bots into Search / Agent / Training. From Sept 15, 2026, new domains block Training + Agent by default on ad-showing pages; Googlebot and Bingbot are multi-purpose, so blocking Training can also block them (https://www.helpnetsecurity.com/2026/07/02/cloudflare-ai-crawler-controls/).
- [ ] Cloudflare dashboard → Security → Bots / AI Crawl Control: allow Search, Agent and Training.
- [ ] Turn off "Block AI bots" and any Cloudflare-managed robots.txt that would override `public/robots.txt`.
- [ ] Verify: `curl -A "Googlebot" -I https://discoverdev.ai/` and `curl -A "OAI-SearchBot" -I …` → 200; GSC URL Inspection + Bing URL Inspection live test → fetched.
- [ ] Monthly: AI Crawl Control → OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot, Googlebot all get 200s.

## 6. Technical SEO checklist (Astro static on Cloudflare Workers static assets)

Build + URLs
- [ ] `site: 'https://discoverdev.ai'`, `trailingSlash: 'never'`, `build.format: 'file'`; Workers `html_handling: "auto-trailing-slash"`, `not_found_handling: "404-page"`.
- [ ] `curl -I https://discoverdev.ai/about/` → redirect to `/about`; `/about` → 200; only one form returns 200. Record the redirect status code (Workers default; 301/308 preferred, 307 acceptable for unlinked variants).
- [ ] `curl -I https://discoverdev.ai/does-not-exist` → 404 (not 200, not `/`).
- [ ] Apex canonical. `www` → apex 301 (Cloudflare Redirect Rule). Always Use HTTPS on. HSTS via `_headers`.
- [ ] `*.workers.dev` and preview URLs send `X-Robots-Tag: noindex` (verify headers on a preview URL).

Crawl + index
- [ ] `@astrojs/sitemap` → `/sitemap-index.xml`; filter out `/404`, `/book/confirmed`, `/og/*`, drafts, `pending-metrics`. `lastmod` from `updatedAt` is phase 2 (`07-tech-spec.md` §7.1).
- [ ] robots.txt as §5.1. Sitemap referenced.
- [ ] Self-referencing absolute canonical; query strings stripped; UTM URLs canonicalize to clean URL.
- [ ] `noindex, follow` on `/book/confirmed`, `/404`, any future search page.
- [ ] One H1; visible breadcrumbs on depth-2; semantic landmarks.
- [ ] RSS `/insights/rss.xml` linked via `<link rel="alternate" type="application/rss+xml">` on insights pages.

Head + sharing (every page)
- [ ] `title`, `meta description`, canonical, `og:title`, `og:description`, `og:url`, `og:image` (1200×630, build-time generated), `og:type` (`website`/`article`), `og:locale` `en_US`, `twitter:card=summary_large_image`.
- [ ] Favicon SVG + 180 px apple-touch-icon. Logo PNG ≥ 112 px square at `/logo-512.png` (D-33).

hreflang (Q1 2027, `/ar`)
- [ ] `<link rel="alternate" hreflang>` in head only: `en`, `ar`, `x-default` → EN. Self-referencing + reciprocal. Only on pages that exist in both languages (https://developers.google.com/search/docs/specialty/international/localized-versions).
- [ ] No IP / Accept-Language redirects. Localized title/meta/schema `inLanguage`. `og:locale` `ar_AR` + `og:locale:alternate`.

Old site
- [ ] Redirect map §7 live and tested (old URL → 301 → 200, no chains).
- [ ] Old GitHub Pages: keep deployed but unlinked until T+7; then remove custom domain; keep domain verified in GitHub (takeover guard).

Performance (p75 mobile; Google thresholds LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1: https://web.dev/articles/vitals)
- [ ] Budgets in `07-tech-spec.md` §13 enforced by Lighthouse CI.

## 7. Redirect map (old SPA → new)
Status: old route list **not verified** (research could not fetch the live SPA or DNS). Before cutover, export real routes from: old repo router config, GSC → Pages report, backlinks on Clutch/LinkedIn/Upwork (D-15). Keep rows that match real routes; extra rows are harmless.

| Old path | New path | Code | Note |
|---|---|---|---|
| `/staff` | `/scale` | 301 | brief: old route |
| `/staff/*` | `/scale` | 301 | |
| `/home` | `/` | 301 | |
| `/services` | `/build` | 301 | |
| `/services/*` | `/build` | 301 | refine per real sub-routes |
| `/launch` | `/build` | 301 | master doc's old name for Build |
| `/contact` | `/book` | 301 | |
| `/consultation` | `/book` | 301 | candidate |
| `/about-us` | `/about` | 301 | candidate |
| `/team` | `/about` | 301 | candidate |
| `/portfolio` | `/work` | 301 | candidate |
| `/portfolio/*` | `/work` | 301 | candidate |
| `/case-studies` | `/work` | 301 | candidate |
| `/case-studies/*` | `/work` | 301 | candidate |
| `/blog` | `/insights` | 301 | |
| `/blog/*` | `/insights` | 301 | |
| `/build` | — | — | keeps path (new content); no redirect |

- [ ] Always write the status code (Workers default is 302 when omitted).
- [ ] `/index.html` → `/`: do not add a rule; `html_handling` already handles it. Test it.
- [ ] Hash routes: if the old SPA used `/#/build`-style routes, add an inline-free bundled script on `/` that maps `location.hash` → new path with `location.replace()` (map in `07-tech-spec.md` §17).
- [ ] Limits: 2,000 static + 100 dynamic redirects (https://developers.cloudflare.com/workers/static-assets/redirects/).
- [ ] `scripts/redirects-test.mjs` asserts each row: 301 → final 200, one hop.

## 8. Measurement
Google Search Console
- [ ] Domain property via DNS TXT on the Cloudflare zone (T-21). Submit `/sitemap-index.xml` on launch day. URL Inspection → request indexing for `/`, `/launch-ready`, `/book`, pillar, C1, C2, `/work/edulens`, each service page.
- [ ] AI Overviews / AI Mode clicks are inside Performance → "Web" (no separate filter).
- [ ] Track: branded "DiscoverDev" + non-brand primaries from §1/§2. Weekly in month 1, then monthly.

Bing Webmaster Tools
- [ ] Import from GSC; submit sitemap; enable IndexNow (Cloudflare Crawler Hints can ping it).
- [ ] AI Performance report (public preview since Feb 2026): Copilot citations, cited pages, grounding queries (CSV). Monthly export.

AI referral channel (PostHog, not GA4; GA4 is not in the stack)
- [ ] `lib/utm.ts` stores first-touch `document.referrer` host as `entry_referrer_host` and derives `channel` per session (sessionStorage), sent on every custom event (`07-tech-spec.md` §9).
- [ ] `channel = ai_assistant` when host matches `^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|www\.perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$` or `utm_source=chatgpt.com`. Other values: `search` (google., bing., duckduckgo., yahoo.), `social` (linkedin., x.com, t.co, reddit., facebook.), `email` (`utm_medium=email`), `referral` (other hosts), `direct` (none).
- [ ] PostHog insight "Bookings by channel": `booking_completed` broken down by `channel`. CF Web Analytics referrer list as cross-check.
- [ ] Source of truth for attribution: Cal.com "How did you hear about us?" answer (mobile AI apps often send no referrer). Monthly: reconcile Cal answers vs PostHog `channel`.

Monthly AI prompt check (~45 min, 1st Monday)
- Engines: ChatGPT, Perplexity, Gemini, Copilot, Google AI Mode.
- Prompts: who can audit my Lovable app before launch · is my vibe coded app secure · fix or rebuild AI-built app · vibe code audit cost · best MVP development company for startups · MVP development company Saudi Arabia · dedicated development team Egypt · white label development partner Egypt · how to reduce LLM API costs · Supabase RLS Lovable · who owns code built with Lovable · agency to take Bolt app to production · DiscoverDev reviews · DiscoverDev vs TrianglZ · software house Alexandria Egypt.
- Log columns: date · engine · prompt · DiscoverDev mentioned (Y/N) · cited URL · competitors named · notes. Keep in a sheet; review quarterly.

KPI tree
- North Star: clarity calls booked / month (all `booking_completed`, source = Cal bookings list).
- → Review bookings (`event_type = review_intro`) → organic + AI-referred sessions to `/launch-ready` and pillar → non-brand impressions for §1/§2 primaries → Clutch review count + best-of list inclusions.
- [ ] Set 90-day targets after 4 weeks of GSC baseline. Do not invent targets now.
