# 03-copy-ar: Arabic on-page copy (DRAFT, not reviewed)

Started Oct 23, 2026 on branch `ar-v1` (docs/plan/arabic-version.md). Status: **draft for the native reviewer**. Nothing here is live: `/ar` is built but hidden (noindex, out of the sitemap, no language switcher) until `LOCALES.ar` has `status: 'live'` and a named `review`.

## Where the Arabic lives
- Page copy: `src/content/copy/ar/` (`home.ts`, `delivery.ts`, `projects.ts`, `shared.ts`), typed against the English modules so nothing can be missing.
- UI strings: `src/i18n/ui/ar.json` (all keys of `en.json`; `i18n-gate` checks parity).
- Rule from today: an Arabic change is made here first (a line in the log below), then in the module. After review, this file becomes the full line-by-line source like `03-copy.md`.

## Voice rules (Arabic)
- Modern Standard Arabic, plain business tone, Gulf-friendly word choice ("الجوال"), singular "you" everywhere.
- No exclamation marks. Arabic punctuation (، ؛ ؟). Western digits 0–9 (D-35). Ranges in words: "من 8 إلى 12 أسبوعًا", "من أسبوع إلى أسبوعين" (a bare "8–12" flips in right-to-left text).
- Kept in Latin: DiscoverDev, Clutch, LinkedIn, tool names, email, code strings (board paths).
- Service names: Arabic first, English in brackets in the card's service line: التحقق (Validate), البناء (Build · MVP), التوسع (Scale).
- Senior = "كبار المهندسين" (plural) / "مهندس أول" (one person). Never "مهندسين كبار" (reads as "old engineers").
- Reviews (Mohamed, Oct 23): shown as Arabic text, with no translation note. Each one keeps the exact meaning of the client's words in 09, with no added praise. The English page and Clutch keep the originals.
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
Two-option pill "English | العربية" (current option highlighted, other is the link), each label in its own script with its own lang/dir, no flags, accessible name "Language" / "اللغة". Header from 36rem, menu sheet, footer. Hidden on English pages until Arabic is live; always visible on /ar.

## Open for the reviewer
1. Clarity call name: "مكالمة توضيحية" (used) or "مكالمة استكشافية".
2. Keep English service names in brackets, or drop them.
3. Font check (IBM Plex Sans Arabic, D-12), quotation marks, optical size.
4. Every line in `src/content/copy/ar/` and `ar.json`.
