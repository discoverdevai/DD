// Analytics (07 §9): PostHog EU, cookieless "always", loaded after `load` + idle, only on discoverdev.ai.
// track() queues until PostHog loads, drops silently if blocked, logs in dev. No PII in any property.
import { PUBLIC_POSTHOG_KEY, PUBLIC_POSTHOG_HOST } from 'astro:env/client';
import { firstTouch, decorateBookLink } from './utm';

export type EventName =
  | 'cta_clicked' | 'booking_started' | 'booking_completed' | 'article_read' | 'case_study_viewed'
  | 'outbound_clicked' | 'quiz_started' | 'quiz_question_answered' | 'quiz_completed' | 'quiz_lead_submitted';
type Props = Record<string, string | number | boolean | undefined>;
type PH = { capture: (e: string, p?: Props, o?: { transport?: 'sendBeacon' }) => void };

const queue: [EventName, Props, boolean][] = [];
let ph: PH | null = null;
const PROD = typeof location !== 'undefined' && location.hostname === 'discoverdev.ai';

function common(): Props {
  const t = firstTouch();
  return {
    locale: document.documentElement.lang || 'en',
    page_path: location.pathname,
    page_type: document.body.dataset.pageType ?? 'unknown',
    channel: t.channel,
    entry_referrer_host: t.entry_referrer_host,
    ...t.utm,
  };
}

export function track(name: EventName, props: Props = {}, beacon = false) {
  const payload = { ...common(), ...props };
  if (!PROD) { if (import.meta.env.DEV) console.info('[track]', name, payload); return; }
  if (ph) ph.capture(name, payload, beacon ? { transport: 'sendBeacon' } : undefined);
  else queue.push([name, payload, beacon]);
}

async function loadPostHog() {
  if (!PROD || !PUBLIC_POSTHOG_KEY) return;
  try {
    const { default: posthog } = await import('posthog-js');
    posthog.init(PUBLIC_POSTHOG_KEY, {
      api_host: PUBLIC_POSTHOG_HOST,
      cookieless_mode: 'always',
      person_profiles: 'never',
      autocapture: false,
      capture_pageview: true,
      capture_pageleave: false,
      disable_session_recording: true,
    });
    ph = posthog as unknown as PH;
    for (const [n, p, b] of queue.splice(0)) ph.capture(n, p, b ? { transport: 'sendBeacon' } : undefined);
  } catch { /* blocked by an extension: the site works the same */ }
}

/** article_read (07 §9.3): 60% sentinel seen AND ≥ 30s of visible time, once per page view. */
function watchArticleRead() {
  const article = document.querySelector<HTMLElement>('[data-article-slug]');
  const sentinel = document.querySelector('[data-article-sentinel]');
  if (!article || !sentinel || !('IntersectionObserver' in window)) return;
  let seen = false, sent = false, visibleMs = 0, since = document.visibilityState === 'visible' ? performance.now() : 0;
  const elapsed = () => visibleMs + (since ? performance.now() - since : 0);
  const maybeSend = () => {
    if (sent || !seen || elapsed() < 30000) return;
    sent = true;
    track('article_read', { article_slug: article.dataset.articleSlug, pillar: article.dataset.pillar, role: article.dataset.role, read_seconds: Math.round(elapsed() / 1000) });
  };
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && since) { visibleMs += performance.now() - since; since = 0; }
    else if (document.visibilityState === 'visible' && !since) since = performance.now();
  });
  new IntersectionObserver((es, io) => { if (es.some((e) => e.isIntersecting)) { seen = true; io.disconnect(); maybeSend(); } }).observe(sentinel);
  const timer = setInterval(() => { maybeSend(); if (sent) clearInterval(timer); }, 5000);
}

/** Delegated listeners for cta_clicked and outbound_clicked (07 §9.3). Call once per page. */
export function initAnalytics() {
  firstTouch();
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a');
    if (!a) return;
    const cta = a.closest<HTMLElement>('[data-cta-id]');
    if (cta?.dataset.ctaId) {
      try { sessionStorage.setItem('entry_cta', cta.dataset.ctaId); } catch { /* ignore */ }
      track('cta_clicked', { cta_id: cta.dataset.ctaId, cta_tier: cta.dataset.ctaTier, cta_position: cta.dataset.ctaPosition, cta_target: cta.dataset.ctaTarget, destination: new URL(a.href, location.href).pathname });
      decorateBookLink(a, cta.dataset.ctaId);
    }
    if (a.protocol === 'mailto:' || (a.host && a.host !== location.host)) {
      const ctx = a.closest<HTMLElement>('[data-link-context]')?.dataset.linkContext ?? a.dataset.linkContext ?? 'other';
      track('outbound_clicked', a.protocol === 'mailto:' ? { link_host: 'mailto', link_context: ctx } : { link_host: a.host, link_url: a.origin + a.pathname, link_context: ctx });
    }
  }, { capture: true });
  watchArticleRead();
  const start = () => ('requestIdleCallback' in window ? requestIdleCallback(() => loadPostHog()) : setTimeout(loadPostHog, 1));
  if (document.readyState === 'complete') start(); else addEventListener('load', start, { once: true });
}
