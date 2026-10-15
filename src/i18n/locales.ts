// Single locale registry (07 §8). Config, layouts, hreflang and the i18n gate read it.
export const LOCALES = {
  en: { code: 'en', endonym: 'English', dir: 'ltr', status: 'live', ogLocale: 'en_US' },
  ar: { code: 'ar', endonym: 'العربية', dir: 'rtl', status: 'hidden', ogLocale: 'ar_AR' },
} as const;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';
export const localeOf = (current: string | undefined): Locale =>
  current && current in LOCALES ? (current as Locale) : DEFAULT_LOCALE;
