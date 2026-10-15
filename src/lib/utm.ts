// First-touch attribution (07 §9.5, 05 §8): UTMs + referrer host + channel, stored per session. No PII.
export type Channel = 'ai_assistant' | 'search' | 'social' | 'email' | 'referral' | 'direct';
export interface Touch { utm: Partial<Record<'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term', string>>; entry_referrer_host: string; channel: Channel }

const KEY = 'dd_utm';
const AI = /^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|www\.perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$/;
const SEARCH = /(^|\.)(google|bing|duckduckgo|yahoo)\./;
const SOCIAL = /(^|\.)(linkedin\.com|x\.com|t\.co|reddit\.com|facebook\.com)$/;

/** Pure: derive the channel (unit-testable). */
export function deriveChannel(referrerHost: string, utm: Touch['utm']): Channel {
  if (utm.utm_source === 'chatgpt.com' || AI.test(referrerHost)) return 'ai_assistant';
  if (utm.utm_medium === 'email') return 'email';
  if (referrerHost === 'none' || referrerHost === '') return utm.utm_source ? 'referral' : 'direct';
  if (SEARCH.test(referrerHost)) return 'search';
  if (SOCIAL.test(referrerHost)) return 'social';
  return 'referral';
}

const safe = <T>(fn: () => T, fallback: T): T => { try { return fn(); } catch { return fallback; } };

/** Read or create the first-touch record for this session. */
export function firstTouch(): Touch {
  const saved = safe(() => sessionStorage.getItem(KEY), null);
  if (saved) return safe(() => JSON.parse(saved) as Touch, { utm: {}, entry_referrer_host: 'none', channel: 'direct' });
  const params = new URLSearchParams(location.search);
  const utm: Touch['utm'] = {};
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const) {
    const v = params.get(k);
    if (v) utm[k] = v.toLowerCase().slice(0, 100);
  }
  let host = 'none';
  try { if (document.referrer) { const h = new URL(document.referrer).host; if (h !== location.host) host = h; } } catch { /* ignore */ }
  const touch: Touch = { utm, entry_referrer_host: host, channel: deriveChannel(host, utm) };
  safe(() => sessionStorage.setItem(KEY, JSON.stringify(touch)), undefined);
  return touch;
}

/** Append stored UTMs + entry_cta to /book links at click time, never in static HTML (07 §9.5). */
export function decorateBookLink(a: HTMLAnchorElement, entryCta: string | null) {
  const url = new URL(a.href, location.origin);
  if (url.origin !== location.origin || url.pathname !== '/book') return;
  const { utm } = firstTouch();
  for (const [k, v] of Object.entries(utm)) if (v) url.searchParams.set(k, v);
  if (entryCta) url.searchParams.set('entry_cta', entryCta);
  a.href = url.pathname + url.search + url.hash;
}
