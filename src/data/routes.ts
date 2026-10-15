// Route registry. `live: false` routes are not linked from nav, footer or CTAs, so no build ever ships a broken link.
// Flip to true when the page ships (04 §1.1). Work/Insights hide while they have no published entries (04 §1.1, §9).
export const ROUTES = {
  home: { path: '/', live: true },
  review: { path: '/launch-ready', live: false },
  validate: { path: '/validate', live: false },
  build: { path: '/build', live: false },
  scale: { path: '/scale', live: false },
  partners: { path: '/partners', live: false },
  work: { path: '/work', live: false },
  workEdulens: { path: '/work/edulens', live: false },
  insights: { path: '/insights', live: false },
  pillar: { path: '/insights/ai-app-to-production', live: false },
  about: { path: '/about', live: false },
  launchCheck: { path: '/launch-check', live: false },
  book: { path: '/book', live: false },
  privacy: { path: '/privacy', live: false },
  terms: { path: '/terms', live: false },
} as const satisfies Record<string, { path: string; live: boolean }>;

export type RouteKey = keyof typeof ROUTES;
export const isLive = (k: RouteKey) => ROUTES[k].live;
export const href = (k: RouteKey) => ROUTES[k].path;

/** Booking links carry state via ?type= only (04 §2, §6.2). Falls back to email while /book is not live. */
export const bookHref = (type: 'review' | 'clarity' | 'partner') =>
  ROUTES.book.live ? `/book?type=${type}` : 'mailto:hello@discoverdev.ai';
