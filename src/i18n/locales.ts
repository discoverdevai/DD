// Single locale registry (07 §8). Config, layouts, hreflang and the i18n gate read it.
export const LOCALES = {
  en: { code: 'en', endonym: 'English', dir: 'ltr', status: 'live', ogLocale: 'en_US' },
  // Live by the owner's decision on 2026-10-23. `review` records who approved it: native review is still to be done (context/03-copy-ar.md).
  ar: { code: 'ar', endonym: 'العربية', dir: 'rtl', status: 'live', ogLocale: 'ar_AR', review: { reviewer: 'Mohamed Ali (owner approval; native reviewer pending)', date: '2026-10-23' } },
} as const;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';
export const localeOf = (current: string | undefined): Locale =>
  current && current in LOCALES ? (current as Locale) : DEFAULT_LOCALE;
