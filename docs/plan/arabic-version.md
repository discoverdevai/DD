# Arabic version plan (`/ar`)

Written Oct 22, 2026 for Mohamed. Builds on what the context files already decided: `04` §1.2 and §10.2, `05` §4.9 and hreflang, `06` §8 and the Arabic type rules, `07` §8, `11` D-12, D-13, D-35. Where this plan and a context file disagree, the context file wins until Mohamed approves a change, then the context file is edited first.

## 1. Goal in one line

Win Gulf founders (Saudi Arabia first, then UAE and Kuwait) who search and decide in Arabic, with a site that reads as written in Arabic, ranks in Arabic search and is cited by AI assistants in Arabic, without weakening the English site.

## 2. What is already in place (no rework needed)

| Area | State |
|---|---|
| Layout | Every component uses logical CSS (`css-logical-lint` enforces it). The a11y audit (Oct 21) ran an RTL smoke test: no clipping, no horizontal scroll. Directional icons mirror (`.icon--dir`). |
| Locale registry | `src/i18n/locales.ts` has `ar` (`dir: rtl`, `status: hidden`, `ogLocale: ar_AR`). `BaseLayout` sets `lang` and `dir` from it. |
| UI strings | 79 strings in `src/i18n/ui/en.json` go through `t()`. `i18n-gate` already checks key parity, placeholders and untranslated values for any new locale. |
| Arabic type | Tokens for `--font-arabic` exist (`tokens.css`); IBM Plex Sans Arabic is the documented default (D-12). |
| Content rules | Tool names stay Latin in `<bdi>`; no text in images; translation-friendly English copy (`03` rule 9). |

## 3. The one real engineering gap

Page copy lives in `src/content/copy/en/*.ts`, and 40 files import it directly (`import { home as c } from '../content/copy/en/home'`). Arabic needs a locale-aware loader:

- Add `src/content/copy/index.ts` with `copyFor(locale)` that returns the `en` or `ar` module set, typed from the English shape so a missing Arabic key fails the build.
- Change the 40 imports to `copyFor(Astro.currentLocale)`. Mechanical, checked with `scripts/dist-diff.mjs` (English output must stay byte-identical).
- Pages: one source per route, rendered twice (`/` and `/ar/`) with Astro i18n routing (`locales: ['en', 'ar']`, `prefixDefaultLocale: false`). No duplicated page files.

Effort: about 1 day, no visual change to English.

## 4. Language and voice (UX writing)

- **Transcreation, not translation.** Each Arabic line is written from the meaning of the English line, by a native writer, then checked against `09-proof.md`. Never machine output on a live page (`04` §1.2).
- **Register:** Modern Standard Arabic, plain and direct, the way a Saudi founder writes a business email. No Egyptian colloquial, no heavy classical phrasing. (Decision A1.)
- **Voice rules carried over:** founder to founder, short sentences, one idea per line, no exclamation marks, no hype words. Arabic punctuation: `،` `؛` `؟` and Arabic quotation marks (to confirm, `06`).
- **Kept in Latin, inside `<bdi>`:** DiscoverDev, Clutch, LinkedIn, Cal.com, tool names (Lovable, Supabase, Stripe), email, URLs, code.
- **Service names:** see Decision A2. Recommendation: Arabic name first with the English name once in brackets on first use, for example «التحقق (Validate)», so search, sales calls and contracts still match.
- **Numbers:** Western digits (D-35 default): `8–12`, `60–90%`, `5.0`. Weeks and ranges written the Arabic way (`من 8 إلى 12 أسبوعًا`).
- **Quotes from clients stay in their original language** (English) with an Arabic line under each one saying what it is. Never translate a client quote and present it as their words (`09` rule).
- **New Arabic copy file:** `context/03-copy-ar.md`, same section numbers as `03-copy.md`, so every Arabic line maps to its English source. It is the only source for Arabic on-page text.

## 5. Branding

- Logo never mirrors and never changes (whole official SVG). It sits at inline-start, so it moves to the right on `/ar`. That is correct.
- Typeface: IBM Plex Sans Arabic 400/600/700, loaded on `/ar` only, one weight preloaded (700, the H1). English fonts are not loaded on `/ar` except Manrope for Latin numerals in metrics, if the reviewer prefers it.
- Arabic headlines run 20 to 30% longer: use the `--measure-*` Arabic tokens and let headings wrap; no fixed-width buttons.
- Brand name: always "DiscoverDev" in Latin. Add one Arabic transliteration only where machines read it (schema `alternateName`, `llms.txt`), for entity matching. (Decision A3.)
- Visuals: the hero sprint board, the scope card and the journey route get Arabic labels; product screenshots stay as they are (NJWAR is already Arabic). Share images (OG) are rebuilt in Arabic after testing Arabic shaping in the image tool; fallback is hand-made PNGs (`06`).

## 6. SEO

- **URLs:** `/ar/` + the English slug (`/ar/book`), per `04` §1.2. One canonical per page, self-referencing.
- **hreflang:** `en`, `ar` and `x-default` (English), reciprocal, only on pages that exist in both. Use plain `ar`, not `ar-SA`, so one page serves all Gulf markets. Sitemap gets `xhtml:link` alternates.
- **Keyword research before writing** (step P1 below). Starting hypotheses to test with real search volumes in Saudi Arabia, UAE and Kuwait:
  - شركة تطوير تطبيقات · شركة برمجة تطبيقات في السعودية
  - تطوير MVP · بناء نسخة أولية من التطبيق · نموذج أولي قابل للنقر
  - فريق تطوير مخصص · تعهيد فريق برمجة
  - تطوير تطبيقات بالذكاء الاصطناعي · وكلاء ذكاء اصطناعي بالعربية
- **On-page:** Arabic title (≤ 60 characters), meta description, H1 and alt text per page in `03-copy-ar.md`, written for the chosen keyword, not translated from the English title.
- **Schema:** same `@id` for Organization and WebSite in both languages; `inLanguage: "ar"` on Arabic WebPage nodes; `availableLanguage` English and Arabic; no AggregateRating (unchanged rule).
- **Search Console:** submit the sitemap once `/ar` is live; watch the International Targeting report for hreflang errors.

## 7. GEO (AI search)

- **Arabic entity line,** written once and used word for word on the Arabic home, the Arabic schema description and `llms.txt`, so AI answers repeat the same sentence.
- **`llms.txt`:** add an Arabic section with the entity line, the three ways to work and the Arabic page links, or a separate `/ar/llms.txt`. (Decision in step P4; recommendation: one file, two sections.)
- **Answer-first Arabic FAQ:** the FAQ is the most quoted block. Write the Arabic answers so the first sentence answers the question on its own (cost, time, ownership, AI code safety, time zones).
- **Gulf facts AI engines look for,** all from `09`: Arabic and English team, Gulf-hour calls, clients in Saudi Arabia and Kuwait (names only with consent, D-05), fixed price on Build.
- **Test prompts after launch,** in ChatGPT, Perplexity, Gemini and Claude, in Arabic: "أفضل شركة لبناء MVP في السعودية", "شركة تطوير تطبيقات بالذكاء الاصطناعي تتحدث العربية". Log whether DiscoverDev is named and which page is cited.

## 8. Marketing and conversion

- **The offer stays identical** (same three ways, same facts, no prices). Arabic copy may lead with the Gulf angle: Arabic and English team, calls in Gulf hours, senior sign-off.
- **Proof:** Gulf client names (Athkado, Arheb, NJWAR) only with written consent (D-05). Without it, use the anonymized lines already approved.
- **Booking:** check whether the Cal.com booker supports Arabic and RTL. If yes, pass the locale; if not, keep the English widget inside Arabic surrounding copy (`06`). The Cal event description gets an Arabic version.
- **WhatsApp:** Gulf buyers expect it. Still D-09 (off by default). Recommend deciding before `/ar` launch, because it is the biggest conversion lever for this audience.
- **Analytics:** add `locale` to every event so Arabic and English funnels are compared, not mixed.
- **Launch distribution:** one Arabic LinkedIn post from the company page, the Arabic entity line on the LinkedIn and Clutch profiles where they allow a second language.

## 9. Scope and phases

| Phase | What | Who | Effort |
|---|---|---|---|
| P0 Decisions | Answer section 11 | Mohamed | 1 meeting |
| P1 Research | Arabic keyword research (SA, AE, KW), 3 Arabic competitor pages, voice samples. First pass done Oct 22: `research/arabic-keywords-p1.md`; needs search volumes | Claude (research), Mohamed (approve) | 2 days |
| P2 Engineering | Copy loader refactor, `ar` routing behind `status: hidden`, Arabic font, hreflang and sitemap code, `LangSwitcher`, RTL e2e test, Arabic OG test | Claude | 3 to 4 days |
| P3 Copy | `03-copy-ar.md` for home, /book, privacy, terms, 404 and `ui/ar.json` (79 strings); native review; proof check against `09` | Native writer + reviewer, Claude drafts and checks | 1 to 2 weeks (reviewer time) |
| P4 SEO and GEO | Arabic titles and metas, schema, `llms.txt`, FAQ answers, OG images | Claude, reviewer checks | 2 days |
| P5 QA | RTL sweep on every `/ar` route, axe, Lighthouse, mixed-direction text, keyboard order, `i18n-gate` with `ar`, dist-diff on English | Claude | 1 day |
| P6 Launch | Flip `ar` to `live` (needs `review: { reviewer, date }`), show the switcher, submit sitemap, AI test prompts | Mohamed + Claude | 1 day |
| P7 Later | Arabic guides (pillar first, then C1 and C3, per `05`), Arabic case study, Arabic Cal event | Later | ongoing |

**V1 Arabic scope = the live English scope:** home, `/book`, `/book/confirmed`, privacy, terms and a bilingual 404. Nothing else gets an `/ar` URL until its Arabic is reviewed.

## 10. Gates before `/ar` goes live

1. Every Arabic string reviewed by a named native reviewer; name and date recorded in `locales.ts` (`review`).
2. `i18n-gate` green with `ar` (no missing, empty or untranslated values).
3. English output unchanged (dist-diff).
4. RTL e2e: no horizontal overflow, mirrored arrows, logical focus order on every `/ar` route at 320, 390, 768, 1280.
5. axe 0 blockers; Lighthouse mobile perf on `/ar` within the same budget (LCP ≤ 2.0 s), Arabic font ≤ 60 KB preloaded.
6. Proof check: every Arabic claim traces to `09-proof.md`.
7. hreflang valid in both directions; sitemap lists both languages.

## 11. Decisions for Mohamed

| # | Question | Recommendation |
|---|---|---|
| A1 | Arabic register | Modern Standard Arabic, plain business tone, Gulf-friendly |
| A2 | Service names | Arabic name + English in brackets on first use |
| A3 | Arabic transliteration of "DiscoverDev" in schema and `llms.txt` | Yes, in machine-read places only; never in the logo or headings |
| A4 | Native writer and reviewer | Name one person (in-house or contracted); nothing ships without them |
| D-12 | Arabic font | IBM Plex Sans Arabic (default) |
| D-35 | Digits | Western 0–9 |
| D-09 | WhatsApp for Arabic visitors | Decide before `/ar` launch; recommended yes if someone can answer within working hours |
| D-05 | Gulf client names (Athkado, Arheb, NJWAR) | Ask for written consent now; it takes weeks |
| A5 | Target date | Start P0 and P1 after the go-live items are closed; `/ar` live in January 2027 (the Q1 2027 plan) |
