// 03-copy.md §15 (Insights hub) and §15.8 (article template strings). Verbatim unless noted.
// Shared CTA labels and terms come from src/i18n/ui/en.json (cta.*, terms.*).
export const insights = {
  seo: {
    title: 'Guides for Shipping AI-Built Apps | DiscoverDev',
    description:
      'Plain guides for founders with an AI-built app: taking it to production, the security holes to close, a Lovable launch checklist, fix or rebuild.',
  },
  h1: 'Insights for founders shipping AI-built products',
  intro:
    'Plain guides on taking an app built with Lovable, Bolt, v0, Cursor or a freelancer to production. What breaks, what to check, when to fix and when to rebuild, and what it costs.',
  // §15.2. Shown only once the pillar is published.
  featured: {
    slug: 'ai-app-to-production',
    title: 'How to take an AI-built app to production',
    body: "The founder's guide: what breaks, what to check, fix or rebuild, real costs and timelines.",
    link: 'Read the guide',
  },
  // §15.3 topic names (used as card badges; filter UI only from 8 articles, 04 §4.7).
  topics: {
    security: 'Security',
    supabase: 'Supabase',
    payments: 'Payments',
    'fix-or-rebuild': 'Fix or rebuild',
    'code-ownership': 'Code ownership',
    'ai-costs': 'AI costs',
  },
  topicsAll: 'All',
  topicsEmpty: 'No guides on this topic yet. Try another topic, or take the launch check.',
  // §15.4 card meta. Read-time format is not in 03: add "{n} min read" to 03 §15.4 (flagged in the report).
  card: {
    readTime: '{n} min read',
    updated: 'Updated {date}',
  },
  // §15.5
  quiz: {
    title: 'Is your app launch-ready?',
    body: '10 questions, 3 minutes, an instant result.',
  },
  // §15.7 (button label + microcopy come from cta.review / terms.review.*)
  band: {
    title: 'Want a senior team to check your app?',
  },
  // §15.8 article template
  article: {
    byline: 'By the DiscoverDev team',
    published: 'Published {date}',
    updated: 'Updated {date}',
    takeawaysTitle: 'Key takeaways',
    tocTitle: 'On this page',
    inlineCta: 'Not sure where your app stands? Take the 3-minute launch check.',
    endCtaTitle: 'Want a senior team to check it?',
    relatedTitle: 'Read next',
  },
  // 04 §3.5 breadcrumb patterns ("Home › Insights › …").
  breadcrumb: {
    label: 'Breadcrumb',
    home: 'Home',
    insights: 'Insights',
  },
} as const;

/** Fill {name} placeholders without string concatenation (07 §8). */
export const fill = (s: string, args: Record<string, string | number>) =>
  Object.entries(args).reduce((out, [k, v]) => out.replaceAll(`{${k}}`, String(v)), s);
