// Route registry. `live: false` routes are not linked from nav, footer or CTAs, so no build ever ships a broken link.
// Flip to true when the page ships (04 §1.1). Work/Insights hide while they have no published entries (04 §1.1, §9).
export const ROUTES = {
  home: { path: '/', live: true },
  review: { path: '/launch-ready', live: true },
  validate: { path: '/validate', live: true },
  build: { path: '/build', live: true },
  scale: { path: '/scale', live: true },
  partners: { path: '/partners', live: true },
  work: { path: '/work', live: true },
  workEdulens: { path: '/work/edtech-ai-agents', live: true }, // anonymized EduLens case (D-06, 03 §0.7)
  insights: { path: '/insights', live: true },
  pillar: { path: '/insights/ai-app-to-production', live: true },
  // Cluster guides linked from service pages (05 §3 rule 5, 03 §0.8 item 3).
  guideSecurity: { path: '/insights/ai-built-app-security-holes', live: true },
  guideLovable: { path: '/insights/lovable-launch-checklist', live: true },
  guideFixRebuild: { path: '/insights/fix-or-rebuild-ai-app', live: true },
  howWeWork: { path: '/how-we-work', live: true }, // 03 §7.13 (Oct 16)
  about: { path: '/about', live: true },
  launchCheck: { path: '/launch-check', live: true },
  book: { path: '/book', live: true },
  privacy: { path: '/privacy', live: true },
  terms: { path: '/terms', live: true },
} as const satisfies Record<string, { path: string; live: boolean }>;

export type RouteKey = keyof typeof ROUTES;
export const isLive = (k: RouteKey) => ROUTES[k].live;
export const href = (k: RouteKey) => ROUTES[k].path;

/** Booking links carry state via ?type= only (04 §2, §6.2). Falls back to email while /book is not live. */
export const bookHref = (type: 'review' | 'clarity' | 'partner') =>
  ROUTES.book.live ? `/book?type=${type}` : 'mailto:hello@discoverdev.ai';
