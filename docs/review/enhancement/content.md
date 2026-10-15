# Content review and blog strategy (Oct 16, 2026)

From a read-only content-strategist review. Every number in new articles must come from `context/09-proof.md`. Market prices are cited with their source and the date checked.

## Current articles (`src/content/insights/en/`)
| Article | Intent | Words | Links in (body) |
|---|---|---|---|
| ai-app-to-production (pillar) | info → commercial | 3,814 | 3 clusters + /launch-check |
| ai-built-app-security-holes | info | 2,438 | pillar, lovable, fix |
| lovable-launch-checklist | info/commercial | 2,467 | pillar, security, fix |
| fix-or-rebuild-ai-app | commercial-investigational | 2,139 | **pillar only** |

**What works:** every H2 is a question, there's a TL;DR and key takeaways, sources sit next to claims, and there are no em-dashes.

**Fixes:**
1. **No service page links to any article.** That breaks `05` §3. Add the links via `03` first: home → pillar; /launch-ready → security + Lovable; /build → fix-or-rebuild.
2. **fix-or-rebuild needs 3+ inbound links.** Add it to `related` in the security and Lovable articles.
3. **CTAs are too narrow.** Every CTA goes to the Review or the quiz; the "rebuild" verdict should also offer the clarity call.
4. **No visible FAQs** (`faqs: []` on all four). Add 3–4 Q&As to Lovable and fix-or-rebuild, so they get FAQPage schema.
5. **No trust note** while D-16 (named author) is open. Add "How we wrote this" with a sources-checked date and a link to /about. Once D-16 closes, add a named reviewer with Person schema.
6. **Freshness.** Add "Prices checked on [date]" next to price tables. Re-check the Lovable article monthly and the pillar quarterly.
7. **Banned word.** "cheaper" in fix-or-rebuild should become "costs less".
8. **Stale spec.** `05` still says /work/edulens (now /work/edtech-ai-agents) and still has Nov dates.

## Strategy: four clusters (B–D need Mohamed's OK; `05` §2 says a second hub only after 6+ months)
- **A. Prototype to launch → Review** (pillar live): Supabase RLS (C5), Who owns your app code (C6), Developer left a half-built app (C7), Vibe code audit cost (C4, blocked by D-01), Lovable vs Bolt vs Cursor (C8).
- **B. Build the right thing → Validate.** Pillar: how to validate a startup idea before you write code. Supporting: product discovery process; prototype vs MVP vs PoC; MVP scope template; build, pivot or shelve; fixed estimates.
- **C. Build with Agile v2 → Build.** Pillar: how long it takes to build an MVP. Supporting: how Agile v2 works (who owns AI-written code); fixed price vs T&M; questions to ask a dev company; MVP cost ranges (market sources); MVP launch checklist.
- **D. Grow and run it → Scale/Partners.** Pillar: dedicated team vs staff augmentation vs agency. Supporting: reducing LLM API costs (C9, the anonymized EdTech case); LLM response caching; bilingual Arabic/English apps; working with an engineering team in Egypt; white-label for agencies.

**First six posts after launch, one every two weeks:**
1. How Agile v2 works (Oct 27)
2. How long an MVP takes (Nov 10)
3. Validating a startup idea (Nov 24)
4. Reducing LLM API costs, C9 (Dec 8)
5. Who owns your app code, C6 (Dec 22)
6. Supabase RLS, C5 (Jan 5)

## Old repo inventory (assets need consent; filenames are wrong)
- **Screenshots:**
  - `amstdd.png` is actually the CTC logo.
  - `athkado-ar.png` is actually the Rushr mockup.
  - `rushr.png` and `ctc.png` are actually the Athkado furniture-store mockup.
  - `entrepreneurs.png` is a stock word cloud with baked-in text. Don't use it.
  - `yawmy.png` has baked-in text, photos of children and a mock "96%" figure.
- **Logos:**
  - `arabi.png` is actually Arheb, and `jeel.png` is the Jumlaty "j" mark.
  - The old code marks 8 of the 14 client names as unconfirmed.
- **Usable now:** anonymized descriptions only, where `09` backs them. Names, logos and screens need D-05 consent. CTC also needs separate clinician consent. Rushr is hidden under D-07.
- **Old copy to avoid:** "more than 10 countries" (unverified) and the "cost estimator" (it doesn't exist).

## For Mohamed to confirm
1. The real client name for each logo file, especially the 8 marked unconfirmed.
2. Which project each screenshot shows, and that we own the mockup rights.
3. D-05 consent per client.
4. Whether anonymized one-liners are allowed for every `09` project, Rushr included.
5. Yawmy: can it be shown now, and where do the photos come from?
6. Can "10+ countries" and "typical 12–16 week MVP" be verified?
7. D-16 (a named reviewer) and D-01 (a price cue).
8. Go-ahead for clusters B–D.
