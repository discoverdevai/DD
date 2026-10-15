// 03-copy.md §16 (404). Verbatim.
export const notFound = {
  title: 'Page Not Found | DiscoverDev',
  h1: "We can't find that page",
  body: 'The link may be old or mistyped. Our site has a new layout, so some old links have moved.',
  links: { home: 'Go to the home page', review: 'See the Launch-Ready Review', work: 'See our work', insights: 'Read the guides' },
  help: 'Looking for something specific? Email',
  command: '$ cd /page-not-found',
} as const;
