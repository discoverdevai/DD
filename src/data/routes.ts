import { localPath } from '../i18n/t';
// Release V1.0 (Oct 18, 03 §2V1): only home, book, privacy and terms are live; every other route is switched off and
// removed from the build output by the `release` integration in astro.config.mjs. Flip `live` per release.
// Route registry. `live: live(false)` routes are not linked from nav, footer or CTAs, so no build ever ships a broken link.
// Flip to true when the page ships (04 §1.1). Work/Insights hide while they have no published entries (04 §1.1, §9).
// `RELEASE_ALL=1` switches every route on for a local full-site build (`npm run build:all`, used to check the pages of later
// releases and by the clean-up gate); a normal build ships only the pages flagged live below.
const ALL = typeof process !== 'undefined' && process.env.RELEASE_ALL === '1';
const live = (flag: boolean) => ALL || flag;
export const ROUTES = {
  home: { path: '/', live: live(true) },
  review: { path: '/launch-ready', live: live(false) },
  validate: { path: '/validate', live: live(false) },
  build: { path: '/build', live: live(false) },
  scale: { path: '/scale', live: live(false) },
  partners: { path: '/partners', live: live(false) },
  work: { path: '/work', live: live(false) },
  workEdulens: { path: '/work/edtech-ai-agents', live: live(false) }, // anonymized EduLens case (D-06, 03 §0.7)
  insights: { path: '/insights', live: live(false) },
  pillar: { path: '/insights/ai-app-to-production', live: live(false) },
  // Cluster guides linked from service pages (05 §3 rule 5, 03 §0.8 item 3).
  guideSecurity: { path: '/insights/ai-built-app-security-holes', live: live(false) },
  guideLovable: { path: '/insights/lovable-launch-checklist', live: live(false) },
  guideFixRebuild: { path: '/insights/fix-or-rebuild-ai-app', live: live(false) },
  howWeWork: { path: '/how-we-work', live: live(false) }, // 03 §7.13 (Oct 16)
  about: { path: '/about', live: live(false) },
  launchCheck: { path: '/launch-check', live: live(false) },
  book: { path: '/book', live: live(true) },
  privacy: { path: '/privacy', live: live(true) },
  terms: { path: '/terms', live: live(true) },
} as const satisfies Record<string, { path: string; live: boolean }>;

export type RouteKey = keyof typeof ROUTES;
export const isLive = (k: RouteKey) => ROUTES[k].live;
export const href = (k: RouteKey) => localPath(ROUTES[k].path);

/** Booking links carry state via ?type= only (04 §2, §6.2). Falls back to email while /book is not live. */
export const bookHref = (type: 'review' | 'clarity' | 'partner') =>
  ROUTES.book.live ? localPath(`/book?type=${type}`) : 'mailto:hello@discoverdev.ai';
