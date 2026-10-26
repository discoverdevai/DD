import en from './ui/en.json';
import ar from './ui/ar.json';
import { DEFAULT_LOCALE, type Locale } from './locales';

type Dict = Record<string, string>;
const DICTS: Partial<Record<Locale, Dict>> = { en, ar };

// The locale of the page being rendered, set once per page by src/middleware.ts from Astro.currentLocale. The static build
// renders one page at a time, so components can call t() and copy() without passing the locale down.
let current: Locale = DEFAULT_LOCALE;
export const setLocale = (locale: Locale) => { current = locale; };
export const getLocale = (): Locale => current;
/** Links to pages that exist in Arabic, in the current language: '/' -> '/ar', '/#faq' -> '/ar#faq', '/book?type=clarity' -> '/ar/book?type=clarity'. Other paths are unchanged. */
export const AR_PAGES = ['/', '/build', '/scale', '/how-we-work', '/book', '/book/confirmed', '/privacy', '/terms'] as const;
export const localPath = (href: string): string => {
  if (current !== 'ar') return href;
  const path = href.split(/[?#]/)[0] || '/';
  if (!(AR_PAGES as readonly string[]).includes(path)) return href;
  const rest = href.slice(path.length);
  return (path === '/' ? '/ar' : `/ar${path}`) + rest;
};

/**
 * Look up a whole-sentence UI string. Named args fill {name} placeholders; no concatenation (07 §8).
 * Missing key: throws in dev, falls back to English and logs in a build.
 */
export function t(key: string, locale: Locale = current, args: Record<string, string | number> = {}): string {
  const dict: Dict = DICTS[locale] ?? en;
  let value: string | undefined = dict[key] ?? (en as Dict)[key];
  if (value === undefined) {
    const msg = `[i18n] missing key "${key}" for locale "${locale}"`;
    if (import.meta.env.DEV) throw new Error(msg);
    console.error(msg);
    return key;
  }
  for (const [name, v] of Object.entries(args)) value = value.replaceAll(`{${name}}`, String(v));
  return value;
}
