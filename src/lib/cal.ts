// Cal.com inline embed (07 §10.2). Loader = Cal's official embed snippet, bundled (so CSP sees 'self'),
// which loads https://app.cal.com/embed/embed.js. Only imported by /book.
import { PUBLIC_CAL_USERNAME } from 'astro:env/client';

export type BookType = 'review' | 'clarity' | 'partner';
const SLUG: Record<BookType, string> = { review: 'review-intro', clarity: 'discoverycall', partner: 'partner-call' };
export const EVENT: Record<BookType, string> = { review: 'review_intro', clarity: 'clarity_call', partner: 'partner_call' };
export const calUsername = PUBLIC_CAL_USERNAME ?? '';
export const directLink = (type: BookType) => (calUsername ? `https://cal.com/${calUsername}/${SLUG[type]}` : '');

type CalFn = ((...args: unknown[]) => void) & { ns: Record<string, (...args: unknown[]) => void>; loaded?: boolean; q?: unknown[] };
declare global { interface Window { Cal?: CalFn } }

/* Official Cal.com embed loader (Embed Snippet Generator), reformatted. Verify against the generator before launch (07 §2 "not verified"). */
function loadCal(): CalFn {
  const w = window as Window & { Cal?: CalFn };
  const push = (a: { q: unknown[] }, ar: unknown) => a.q.push(ar);
  if (!w.Cal) {
    const cal = function (this: unknown, ...ar: unknown[]) {
      const c = w.Cal as CalFn & { q: unknown[] };
      if (!c.loaded) {
        c.ns = {}; c.q = c.q || [];
        document.head.appendChild(document.createElement('script')).src = 'https://app.cal.com/embed/embed.js';
        c.loaded = true;
      }
      if (ar[0] === 'init') {
        const api = function (...a: unknown[]) { push(api as unknown as { q: unknown[] }, a); } as unknown as ((...a: unknown[]) => void) & { q: unknown[] };
        api.q = api.q || [];
        const ns = ar[1];
        if (typeof ns === 'string') { c.ns[ns] = c.ns[ns] || api; push(c.ns[ns] as unknown as { q: unknown[] }, ar); push(c, ['initNamespace', ns]); }
        else push(c, ar);
        return;
      }
      push(c, ar);
    } as unknown as CalFn;
    w.Cal = cal;
  }
  return w.Cal;
}

export interface RenderOpts {
  type: BookType; el: HTMLElement; metadata: Record<string, string>; prefill?: { name?: string; email?: string };
  onReady: () => void; onFailed: () => void; onViewed: (slotsLoaded: boolean) => void; onBooked: (detail: Record<string, unknown>) => void;
}

/** Render the inline booker for one event type. Returns false when Cal is not configured (fallback links stay). */
export function renderCal(o: RenderOpts): boolean {
  if (!calUsername) return false;
  const Cal = loadCal();
  const ns = o.type;
  Cal('init', ns, { origin: 'https://app.cal.com' });
  const api = Cal.ns[ns];
  const config: Record<string, string> = { layout: matchMedia('(width >= 48rem)').matches ? 'month_view' : 'column_view', theme: 'dark' };
  if (o.prefill?.name) config.name = o.prefill.name;
  if (o.prefill?.email) config.email = o.prefill.email;
  for (const [k, v] of Object.entries(o.metadata)) config[`metadata[${k}]`] = v;
  api('inline', { elementOrSelector: o.el, calLink: `${calUsername}/${SLUG[o.type]}`, config });
  api('ui', { theme: 'dark', cssVarsPerTheme: { dark: { 'cal-brand': '#1240BE' }, light: { 'cal-brand': '#1240BE' } }, hideEventTypeDetails: false });
  api('on', { action: 'linkReady', callback: o.onReady });
  api('on', { action: 'linkFailed', callback: o.onFailed });
  api('on', { action: 'bookerViewed', callback: (e: CustomEvent<{ data?: { slotsLoaded?: boolean } }>) => o.onViewed(Boolean(e.detail?.data?.slotsLoaded)) });
  api('on', { action: 'bookingSuccessfulV2', callback: (e: CustomEvent<{ data?: Record<string, unknown> }>) => o.onBooked(e.detail?.data ?? {}) });
  return true;
}
