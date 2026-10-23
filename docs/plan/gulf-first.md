# Gulf-first plan (landing page, SEO, blogs)

Oct 23, 2026. Decision (Mohamed): the target market is Gulf companies, Saudi Arabia first, then Kuwait and the UAE. Facts stay inside `09-proof.md`: US clients stay as proof, there are **no UAE clients** and **no Gulf office** (the Saudi partner Azki is a declared contracting partner, D-44, not our address). Research behind this: `research/arabic-keywords-p1.md` and the Gulf competitor read in chat (Oct 23).

## 1. Done today (English landing page, SEO, schema)
Logged in `context/03-copy.md` (decision log, Oct 23), then applied:
- Home title and meta lead with "Gulf Startups", "Saudi Arabia, Kuwait and the Gulf".
- FAQ: first regional question is now "Do you work with startups in Saudi Arabia and the Gulf?"; time-zone answer says we are 0–1 hours behind Saudi and Kuwait; calls run in "Gulf and US hours".
- /book and /about meta, About, Scale and Partners hour lines, `llms.txt` and the entity line say Gulf first.
- Schema `areaServed`: Saudi Arabia, Kuwait, United Arab Emirates, Egypt, United States, United Kingdom.
- Reviews: Gulf reviewers (Athkado, Kuwait consulting firm) come first after the featured one.

## 2. Next landing-page steps (need a fact or a decision)
| Step | Needs |
|---|---|
| Client cards: Saudi clients first (Arheb, Jumlaty) | none, order only; next pass |
| Local contracting section and FAQ ("contract and pay in Saudi Arabia through our partner") | D-44: Azki's legal name, agreement type, written consent, Saudi lawyer check |
| WhatsApp in hero and closing band | D-09 decision |
| Hosting and data (PDPL, hosting in Saudi Arabia on request) FAQ | a true answer from Mohamed; competitors answer this |
| Saudi systems (Nafath, ZATCA e-invoicing, Mada) FAQ | a real past project, otherwise skip |
| Price cue, in USD (Mohamed, Oct 23: prices stay in US dollars, also on the Arabic pages): "MVP from $X" | Mohamed's number (D-01) |

## 3. SEO (Gulf, English and Arabic)
- Keyword map and voice samples: `research/arabic-keywords-p1.md` (25 phrases; volumes pending from Keyword Planner).
- English targets to add where natural (not stuffed): "app development company Saudi Arabia", "MVP development Riyadh", "AI agents Arabic chatbot Saudi", "dedicated development team Gulf", "Launch-Ready Review Saudi" (V1.2).
- Home and /book already carry the Gulf phrases; service pages (V1.1: /validate /build /scale) get the same pattern: title "X for Gulf Startups | DiscoverDev".
- When `/ar` goes live: hreflang `en` / `ar` / `x-default`, Arabic titles from the keyword map, sitemap with both languages, Search Console property check.
- GEO: one Gulf entity line, word for word, in the footer, schema, `llms.txt`, LinkedIn and Clutch ("DiscoverDev is a product and engineering company ... clients in the Gulf and the US").

## 4. Blogs and guides (Gulf-first topics)
The four existing guides are about AI-built apps (live from V1.2). Gulf-first plan, English and Arabic versions of each:
| # | Working title | Why (from the research) | Needs |
|---|---|---|---|
| 1 | How much does an app like Haraj, HungerStation or Mrsool cost? | Saudi cost searches name these apps; today's answers are freelance job posts | Mohamed's ranges, no invented prices |
| 2 | What is an MVP, and how long does it take? (Arabic first) | "ما هو MVP" is searched; competitors translate badly | none |
| 3 | Is Lovable production ready? (Arabic version of the existing checklist) | "lovable شرح" is searched in Arabic | native review |
| 4 | Freelancer or software company? How to choose in Saudi Arabia | "مبرمج تطبيقات سعودي / الكويت" searches | none |
| 5 | Contracting and invoicing a Saudi project through a local partner | the local-contracting angle, nobody covers it | D-44 |
| 6 | Hosting and PDPL for AI-built apps in Saudi Arabia | competitors answer it in FAQs | a true answer |
Existing guides: add a Gulf angle line in each intro ("founders in Saudi Arabia and the Gulf ask this most") only where it is true, edited in `03-copy.md` first. Publish order: 2, 4, 3 (low risk), then 1, 5, 6 when their facts exist.

## 5. Tracking
Add `locale` and `market` (gulf / us / other, from the visitor's country header or UTM) to analytics events so Gulf conversion is read separately. Test prompts in Arabic and English in ChatGPT, Perplexity, Gemini and Claude after launch and log which page is cited.
