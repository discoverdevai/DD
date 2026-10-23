# 03-copy-ar: Arabic on-page copy (DRAFT, not reviewed)

Started Oct 23, 2026 on branch `ar-v1` (docs/plan/arabic-version.md). Status: **LIVE since Oct 23, 2026 by Mohamed's decision, native review still pending** (`LOCALES.ar`: `status: 'live'`, `review` records the owner approval). Indexable, in the sitemap with hreflang, the language link is on every page that has a twin. The Arabic privacy and terms say the English text prevails if they differ. Native review should still happen: until then treat the Arabic as a careful first version.

## Pages built (Oct 23, all hidden: noindex, out of the sitemap)
`/ar` (home), `/ar/book`, `/ar/book/confirmed`, `/ar/privacy`, `/ar/terms`, `/ar/404` (Cloudflare serves the nearest `404.html`, so unknown `/ar/...` URLs get the Arabic one). Each is the same component as its English twin, so design and behaviour match. The Cal.com booking widget itself is Cal's and shows English until Cal's Arabic/RTL support is checked (plan §8). Legal pages (`ar/legal.ts`): faithful draft of the English; needs the native reviewer and a qualified read for Saudi Arabia (PDPL) before going live; English prevails if they differ.

## Where the Arabic lives
- Page copy: `src/content/copy/ar/` (`home.ts`, `delivery.ts`, `projects.ts`, `shared.ts`, `book.ts`, `legal.ts`, `not-found.ts`), typed against the English modules so nothing can be missing.
- UI strings: `src/i18n/ui/ar.json` (all keys of `en.json`; `i18n-gate` checks parity).
- Rule from today: an Arabic change is made here first (a line in the log below), then in the module. After review, this file becomes the full line-by-line source like `03-copy.md`.

## Voice rules (Arabic)
- Modern Standard Arabic, plain business tone, Gulf-friendly word choice ("الجوال"), singular "you" everywhere.
- No exclamation marks. Arabic punctuation (، ؛ ؟). Western digits 0–9 (D-35). Ranges in words: "من 8 إلى 12 أسبوعًا", "من أسبوع إلى أسبوعين" (a bare "8–12" flips in right-to-left text).
- Kept in Latin: DiscoverDev, Clutch, LinkedIn, tool names, email, code strings (board paths).
- Service names: Arabic first, English in brackets in the card's service line: التحقق (Validate), البناء (Build · MVP), التوسع (Scale).
- Senior = "كبار المهندسين" (plural) / "مهندس أول" (one person). Never "مهندسين كبار" (reads as "old engineers").
- Reviews (Mohamed, Oct 23): shown as Arabic text, with no translation note. Each one keeps the exact meaning of the client's words in 09, with no added praise. The English page and Clutch keep the originals.
- Prices: always US dollars ("دولارًا"), never riyals (Mohamed, Oct 23). No price is shown on the home page (D-01).
- Facts only from 09 and the live English page. No WhatsApp, no local-contracting section, no Riyadh office: those wait for D-09 and D-44.

## Text decisions (Oct 23, from the mockup review)
| Was (mockup) | Now | Why |
|---|---|---|
| حوّل فكرتك إلى منتج يعمل خلال أسابيع. | حوّل فكرتك إلى **منتج يستخدمه الناس** خلال أسابيع. | "Live product" means real users; "يعمل" read weak |
| بمهندسين كبار | مع كبار المهندسين | "مهندسين كبار" can read as "old engineers" |
| بدون عرض بيع | دون محاولة بيع | More natural for "No pitch" |
| شركة منتجات وهندسة برمجيات | شركة لتطوير المنتجات الرقمية وهندستها | Clearer company category |
| 1–2 أسبوع / 8–12 أسبوعًا | من أسبوع إلى أسبوعين / من 8 إلى 12 أسبوعًا | Grammar, and no number flipping in RTL |
| اشتراك شهري | عقد شهري | "Retainer" is a contract, not a subscription |
| كتابة اختبارات لكل نقطة اتصال | اختبارات لكل واجهة برمجية | "Endpoint" mistranslated |
| بلا ارتباط إلزامي بنا | ولا تبقى مرتبطًا بنا | "No lock-in", plainer |
| ومهندس كبير يعتمد. | ومهندس أول يعتمد كل إصدار. | Complete sentence, consistent term |
| English quote + "بالعربية:" line | Arabic quote only, no translation note | Mohamed, Oct 23: the Arabic page reads fully in Arabic |
| توقيتنا قريب من توقيت الخليج | فارق التوقيت مع السعودية والكويت ساعة واحدة أو أقل | Specific, checkable |

## Language switcher (Oct 23)
One plain text link in the nav style showing the other language in its own script ("العربية" on English pages, "English" on Arabic pages), with its own lang/dir; no pill, flag or icon (Mohamed, Oct 23: simpler). Header from 36rem, menu sheet, footer. Hidden on English pages until Arabic is live; always visible on /ar.

## Self-review (Oct 23, Claude)
Checked: all internal links on the six Arabic pages resolve; structure matches English (same sections, headings, FAQ count, images, CTA ids); no English sentences left on the Arabic pages except the Cloudflare/Cal.com product names; facts match English. Fixed: "مراجعة مختارة" -> "تقييم مختار" (one word for ratings), "تعرف رقمك" -> "ستعرف السعر". Cal.com: the booking widget takes its language from the visitor's browser (tested: an Arabic browser gets lang=ar, dir=rtl); the event title and description are English text set in Cal. Option: a second Arabic event type in Cal later.

## Open for the reviewer
1. Clarity call name: "مكالمة توضيحية" (used) or "مكالمة استكشافية".
2. Keep English service names in brackets, or drop them.
3. Font check (IBM Plex Sans Arabic, D-12), quotation marks, optical size.
4. Every line in `src/content/copy/ar/` and `ar.json`.
