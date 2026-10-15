// Insights getters (07 §6 rule: pages never call getCollection directly; they use these).
// Only published (draft: false) entries leave this module, so pages can never link to a draft.
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/locales';

export type Insight = CollectionEntry<'insights'>;
export type Author = CollectionEntry<'authors'>;
type Ref = { collection: string; id: string };

/** Published insights for a locale, newest update first. */
export async function publishedInsights(locale: Locale = 'en'): Promise<Insight[]> {
  const entries = await getCollection('insights', (e) => !e.data.draft && e.data.locale === locale);
  return entries.sort((a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime());
}

/** Entry ids carry the locale (`en/lovable-launch-checklist`); routes strip it (07 §6). */
export const insightSlug = (entry: Insight) => entry.id.replace(/^(en|ar)\//, '');
export const insightPath = (entry: Insight) => `/insights/${insightSlug(entry)}`;

/** Rough word count of a Markdown body: drops code fences, URLs, tags and Markdown punctuation. */
export function wordCount(body = ''): number {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/[#>*_`|[\]-]+/g, ' ');
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** Minutes to read at 230 words per minute, at least 1. */
export const readingMinutes = (body = ''): number => Math.max(1, Math.round(wordCount(body) / 230));

/** Resolve references to published entries only, in the given order. Drafts and missing ids drop out. */
export function resolvePublished(refs: readonly Ref[] | undefined, published: readonly Insight[]): Insight[] {
  if (!refs) return [];
  const byId = new Map(published.map((e) => [e.id, e]));
  return refs.map((r) => byId.get(r.id)).filter((e): e is Insight => e !== undefined);
}

export async function getAuthor(ref: Ref): Promise<Author | undefined> {
  return getEntry('authors', ref.id);
}

/** Read next (04 §4.8 item 9): explicit `related` first, then the pillar, then siblings in the same pillar. Max 3. */
export function readNext(entry: Insight, published: readonly Insight[], max = 3): Insight[] {
  const picked: Insight[] = [];
  const add = (e: Insight | undefined) => {
    if (e && e.id !== entry.id && !picked.some((p) => p.id === e.id) && picked.length < max) picked.push(e);
  };
  resolvePublished(entry.data.related, published).forEach(add);
  if (entry.data.parent) resolvePublished([entry.data.parent], published).forEach(add);
  published.filter((e) => e.data.pillar === entry.data.pillar).forEach(add);
  return picked;
}

/** Machine date for <time datetime> and JSON-LD. */
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/** "October 17, 2026" (03 §15.8 "Month D, YYYY"). UTC so the build machine's zone never shifts the day. */
export const displayDate = (d: Date, locale: Locale = 'en') =>
  new Intl.DateTimeFormat(locale === 'ar' ? 'ar' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(d);
