// Single locale registry (07 §8). Config, layouts, hreflang and the i18n gate read it.
export const LOCALES = {
  en: { code: 'en', endonym: 'English', dir: 'ltr', status: 'live', ogLocale: 'en_US' },
  // Live since 2026-10-23. `review` records the sign-off: the Arabic was reviewed by a native reviewer, confirmed by the owner (context/03-copy-ar.md).
  ar: { code: 'ar', endonym: 'العربية', dir: 'rtl', status: 'live', ogLocale: 'ar_AR', review: { reviewer: 'Native Arabic reviewer (confirmed by Mohamed Ali)', date: '2026-10-23' } },
} as const;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';
export const localeOf = (current: string | undefined): Locale =>
  current && current in LOCALES ? (current as Locale) : DEFAULT_LOCALE;
