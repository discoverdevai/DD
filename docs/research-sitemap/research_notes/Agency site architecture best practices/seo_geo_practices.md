# SEO and GEO best practices for B2B software agency sites (as of Oct 2026)

Note on method: about 16 tool calls. Primary sources were fetched for Google docs, SE Ranking and the Wix/Peec study. Several others come from search-result summaries only (marked "summary only"). Architecture/page-count guidance has no strong primary evidence (see Gaps).

## 1. Site architecture (clusters, service/industry/location pages, page count, linking)

### Takeaway
Google's official position is that location/region pages mass-produced to funnel users are doorway abuse, and many pages generated mainly to rank are scaled content abuse (including AI-generated). I found no hard evidence-based rule for how many pages a small agency needs; that part is opinion/practice.

### Cited Findings
- Google defines doorway abuse as sites or pages created to rank for specific, similar queries that funnel users to intermediate pages less useful than the destination. Its example: "multiple domain names or pages targeted at specific regions or cities that funnel users to one page" — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- Google defines scaled content abuse as many pages generated for the primary purpose of manipulating rankings, however created. Example: using generative AI to generate many pages without adding value — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- Google's AI features doc says the basics suffice for AI Overviews/AI Mode: crawlable in robots.txt, internal links, good page experience, important content in text form; page must be indexed and snippet-eligible — [Google AI features](https://developers.google.com/search/docs/appearance/ai-features)
- Third-party view (not Google wording): location pages with unique details (address, hours, staff, reviews) are less likely to be flagged than city-name-swap templates — [summary of search results, ppc.land / glossaries](https://ppc.land/doorway-pages/) (summary only)
- Wix/Peec study (75,000 AI answers, 1,056,727 citations; ChatGPT, Google AI Mode, Perplexity; five industries incl. professional services and SaaS): category pages were 11.25% of citations overall, 18.31% on nav/local intent; profile pages 12.89% on nav/local; homepages 13.56% on nav/local — [Wix AI Search Lab](https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms)

### Inferences
- A small agency is better served by a few deep pages (core services, 2-4 industries/capabilities where it has real case studies, case studies, team, cost/process guides) than by many thin variants. Page count should be capped by how many pages can carry unique proof, not by keyword volume. This is inference/opinion, not a sourced number.
- City pages are only defensible if the agency has a real presence there (address, team, local clients). For a Gulf-targeting agency, one page per country with real local proof, not per city/keyword permutation, fits Google's doorway definition best.
- Hub-and-spoke linking (service hub linking to relevant case studies/guides and back) is standard practice; I found no controlled study showing its effect.

### Gaps
- No primary study on optimal page counts for small agencies, URL structure, or hub-and-spoke effect size.
- No Google statement specifically on "service + city" pages beyond the doorway definition.

## 2. What AI engines cite; page formats for "software development company" / "MVP development cost" queries

### Takeaway
Citation studies (vendor-run, correlational) show listicles dominate commercial-intent citations (about 41%) and articles dominate informational ones (about 45%); each engine differs. I found no study specific to agency/"MVP cost" queries.

### Cited Findings
- Wix/Peec (March 23, 2026; 75k answers, 1.06M citations), overall share: listicle 21.88%, article 16.68%, product page 13.66%, category page 11.25%, discussion 7.52%, how-to 6.21%, homepage 5.26%, profile 5.12%, comparison 2.20%, alternative 0.29% — [Wix AI Search Lab](https://www.wix.com/studio/ai-search-lab/research/content-types-most-cited-by-llms)
- By intent: listicles 40.86% of commercial-intent citations; articles 45.48% of informational; product pages 24.88% of transactional — same source
- By engine: ChatGPT most information-focused (articles+listicles 43.32%); Perplexity draws 17.35% of citations from discussions (vs 7.52% average); Google AI Mode most evenly spread — same source. Caveat: the study is run by a GEO vendor; prompts were non-branded
- Peec reports each engine rewards different formats and ChatGPT retrieval later shifted toward product pages (search-result summary only) — [Peec docs](https://docs.peec.ai/research/content-types-cited-most-by-engine)
- Ahrefs, 1.9M citations from 1M AI Overviews (mid-2025): 76.10% of cited pages ranked in the top 10, 9.50% in 11-100, 14.40% outside the top 100; correlation 0.445. A later ~4M-overview study reports top-10 overlap of about 38% (with a caveat about improved detection, per a secondary source). Across ChatGPT, Gemini, Copilot, Perplexity, overlap with Google/Bing top 10 averages about 11% — [Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10), [Ahrefs overlap](https://ahrefs.com/blog/ai-search-overlap/?app=1) (summary only for later figures)
- Ahrefs 75,000-brand study (Dec 2025): YouTube brand mentions correlate most strongly with AI visibility (about 0.737), branded web mentions 0.66-0.71 (Spearman; correlation not causation, per Ahrefs) — [Ahrefs](https://ahrefs.com/blog/ai-brand-visibility-correlations) (figures via summary; secondary sources differ slightly)
- Princeton/KDD '24 GEO paper: GEO methods can raise visibility in generative engine responses by up to 40%; GEO-bench has 10,000 queries; effectiveness varies by domain — [arXiv 2311.09735](https://arxiv.org/html/2311.09735v3). Per-tactic numbers (about +41% for statistics/quotations) came only from secondary blogs and relate to a specific metric (position-adjusted word count); unverified
- Freshness: Ahrefs, about 17M citations: AI-cited URLs averaged 1,064 days old vs 1,432 for organic SERP URLs; ChatGPT most likely to cite newer pages, AI Overviews/organic the oldest. AirOps: 50% of mixed-intent pages ChatGPT cited were updated within 3 months — [Ahrefs freshness](https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/), [AirOps](https://airops.com/report/the-impact-of-stale-content-on-ai-visibility) (summary only)

### Inferences
- For "best software development companies" queries, third-party listicles/directories (Clutch, roundups) are likely what gets cited, so the agency's own site mostly wins via its own "how we compare / how to choose" content and by being included in third-party lists. This is an inference from the listicle share, not tested for this query.
- "MVP cost" is informational/commercial: an article-format cost guide with explicit ranges, stated assumptions and a last-updated date fits the dominant cited formats. No study confirms cost guides specifically.
- Rankings still matter (top-10 overlap is large for AI Overviews, smaller for assistants), so classic SEO is not replaced.

### Gaps
- No study found on citations for "software development company" or "MVP development cost" specifically, nor on glossaries or original data as formats.
- No agency case study with verified AI-citation outcomes (see below).

## 3. llms.txt

### Takeaway
Consensus as of Oct 2026: no evidence llms.txt affects citation; Google explicitly says it is not needed. Treat as optional and low priority.

### Cited Findings
- SE Ranking (Oct 15, 2026; about 300,000 domains; Spearman, XGBoost, SHAP): llms.txt present on 10.13% of domains; no correlation with AI citation frequency; removing it from the model improved accuracy. Authors note no major AI platform has confirmed using it — [SE Ranking](https://seranking.com/blog/llms-txt/), [Search Engine Journal](https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/)
- Google: "You don't need to create new machine readable files, AI text files, or markup to appear in these features" — [Google AI features](https://developers.google.com/search/docs/appearance/ai-features). A later June 2026 update reportedly says llms.txt neither helps nor hurts (secondary report only) — [Techwyse](https://www.techwyse.com/news/ai-search/google-llms-txt-no-ranking-benefit-june-2026)
- ALLMO: of 94,614 cited URLs in 11,867 AI responses, 1 was an /llms.txt page (vendor stat via search summary) — [SEJ](https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/)
- Crawler access: Anthropic documents ClaudeBot opt-out via robots.txt; third-party guides describe Claude-SearchBot and Claude-User roles, and OpenAI's GPTBot (training), OAI-SearchBot (search index), ChatGPT-User (live fetch). Blocking search bots can remove a site from those answers — [Anthropic support](https://support.anthropic.com/en/articles/8896518) (OpenAI details are third-party, summary only)

### Inferences
- Cost is near zero, so shipping a short llms.txt is harmless, but do not count on it. Time is better spent on robots.txt allowing search bots and on content.

### Gaps
- I did not retrieve OpenAI's or Anthropic's own statements about llms.txt; the "no platform has confirmed" claim is SE Ranking's.
- Could not verify the Chrome/Lighthouse llms.txt audit claim (single secondary source).

## 4. Schema, E-E-A-T, freshness

### Takeaway
Schema is not required for AI features per Google; evidence on its effect on AI citation is mixed. FAQ rich results are gone from Google. Entity/brand-mention signals correlate strongly with AI visibility.

### Cited Findings
- Google: "There's also no special schema.org structured data that you need to add"; structured data should match visible text — [Google AI features](https://developers.google.com/search/docs/appearance/ai-features)
- Google FAQ rich results: deprecated; no longer shown from May 7, 2026; documentation removed June 15, 2026 — [Google FAQPage doc](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- AirOps/Kevin Indig (ChatGPT retrieval, correlational): JSON-LD pages cited 38.5% vs 32.0% without; BreadcrumbList 46.2%, FAQPage 45.6%, Organization 44.3% — [Analyzify summary](https://analyzify.com/hub/schema-markup-ai-citations-research) (summary only)
- Ahrefs live test of ChatGPT, Claude, Perplexity, Gemini, Google AI Mode: all extracted only visible HTML, ignoring JSON-LD — [Ahrefs](https://ahrefs.com/blog/schema-ai-citations/) (summary only). Conflicts with the AirOps correlation; benefit may be indirect
- Validation: a 280-site analysis found 31% had errors severe enough to be ignored (vendor, summary only) — [Analyzify](https://analyzify.com/hub/schema-markup-ai-citations-research)
- Freshness: see section 2 (Ahrefs, AirOps)
- Brand/entity: Ahrefs 75k-brand study (section 2)

### Inferences
- Use Organization (with sameAs to LinkedIn, Clutch), Service, Article/BlogPosting with author and dateModified, BreadcrumbList for Google eligibility and entity clarity; FAQPage markup is low value for Google now, but visible Q&A text still helps. Do not use self-review AggregateRating (consistent with project rules; Google's review-snippet policy not retrieved).
- Show real author bylines, a team page and named clients with proof; visible "last updated" dates matching dateModified. These are standard E-E-A-T practice; I found no agency-specific quantitative study.

### Gaps
- Did not retrieve Google's review snippet/self-serving review documentation or Organization/Service schema docs.
- No sourced data on Clutch or LinkedIn effect on AI citations.

## 5. Common mistakes and Google's position

### Takeaway
Google treats mass-produced low-value pages (AI-generated or not), doorway/city pages and third-party content hosted to borrow ranking strength as spam.

### Cited Findings
- Scaled content abuse and doorway abuse definitions: see section 1 — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- Site reputation policy: third-party content published mainly to exploit the host's ranking signals; outside the EEA, manual action; inside the EEA, pages may be classified separately and ranked on their own merits — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies). Enforcement began 2024 (Forbes Advisor, CNN Underscored reported) and wording clarified Nov 2024 — [Google blog](https://developers.google.com/search/blog/2024/11/site-reputation-abuse)
- Blocking all AI crawlers can remove a site from AI search answers (third-party, summary only) — see section 3

### Inferences
- For an agency: avoid programmatic city x service grids, AI-drafted filler guides, and hosting guest/sponsored "directory" content on the main domain.

### Gaps
- No agency-specific penalty case study retrieved.
- Agency organic-growth case studies found (Microknot +100%, Keene Systems +261%, Big Leap +152%) are self-published by SEO vendors, not audited — [casestudies.com](https://www.casestudies.com/company/resultfirst/case-study/keene-systems-boosts-organic-traffic-261-with-resultfirst), [Big Leap](https://www.bigleap.com/case-studies/software-development-company/). Treat as anecdote.
