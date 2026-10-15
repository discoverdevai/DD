import en from './ui/en.json';
import { DEFAULT_LOCALE, type Locale } from './locales';

type Dict = Record<string, string>;
const DICTS: Partial<Record<Locale, Dict>> = { en };

/**
 * Look up a whole-sentence UI string. Named args fill {name} placeholders; no concatenation (07 §8).
 * Missing key: throws in dev, falls back to English and logs in a build.
 */
export function t(key: string, locale: Locale = DEFAULT_LOCALE, args: Record<string, string | number> = {}): string {
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
