// 03-copy.md §6 (/build). Verbatim, with §0.7 launch resolutions applied (noted inline).
export const build = {
  seo: {
    title: 'Fixed-Price MVP Development in 8–12 Weeks | DiscoverDev',
    description:
      'A senior team takes your MVP from scope to production in 8–12 weeks at a fixed price. Or we rebuild your AI prototype properly. You own all the code.',
  },
  hero: {
    eyebrow: 'I’m ready to build.',
    h1: 'Build: an MVP in 8–12 weeks',
    body: 'A senior team designs, builds, tests and deploys your product in 8–12 weeks, at a fixed price. You launch with real users on a live product, and you own all of it.',
    reviewLink: 'Have a prototype already? Start with a Launch-Ready Review',
    // Meta row labels come from 06 §9.11 (`service` hero: Timeline, Model, Team); values from 03 §6.1, §6.6, §6.7.
    meta: [
      { label: 'Timeline', value: '8–12 weeks' },
      { label: 'Model', value: 'Fixed price' },
      { label: 'Team', value: 'A full squad' },
    ],
  },
  fit: {
    title: 'Is Build right for you?',
    // Column headings derived from the 03 section name "Who it's for, and not for".
    forTitle: 'Who it’s for',
    notTitle: 'Who it’s not for',
    for: [
      'You know what you want to build, from Validate or your own research.',
      'You want a fixed price and a date.',
      'Or your AI-built prototype needs to be rebuilt properly.',
    ],
    not: [
      // 03 §0.8: existing words become links.
      { text: 'You’re still testing the idea (see Validate).', link: { label: 'see Validate', to: 'validate' as const } },
      { text: 'Your app mostly works and needs fixes (start with a Review).', link: { label: 'start with a Review', to: 'review' as const } },
      { text: 'You need ongoing capacity on a live product (see Scale).', link: { label: 'see Scale', to: 'scale' as const } },
    ],
  },
  outcomes: {
    title: 'What you get from a Build',
    items: [
      { title: 'A live product with real users', body: 'Not a demo. Deployed, tested and ready for real data and payments.' },
      { title: 'A fixed price and a date', body: 'You know the cost and the timeline before we start.' },
      // [VERIFY: V6] → §0.7 keep (tag removed).
      { title: 'Code you own and can grow', body: 'Handed over so another developer can pick it up. Full IP, no lock-in.' },
    ],
  },
  included: {
    title: 'What’s included',
    items: [
      'Product design (UX and UI)',
      'Development: web, mobile and APIs',
      'QA and testing',
      'Deployment to your cloud',
      'Weekly results you can see and use',
    ],
  },
  process: {
    title: 'How a Build runs',
    // Chip labels from 03 §2.2a. Steps take one chip each; the Build step gets "AI-accelerated".
    steps: [
      { title: 'Discover', body: 'Confirm the product is the right one. If you did Validate, this is already done.' },
      { title: 'Plan', body: 'Roadmap, tech choices and team agreed before any code.' },
      { title: 'Build', body: 'Sprints with results every week. AI does the heavy lifting. Senior engineers own the quality.', chip: { kind: 'ai', label: 'AI-accelerated' } },
      { title: 'Ship and stay', body: 'Deploy, monitor and keep improving. The same team stays after launch if you want it to.' },
    ],
  },
  // 03 §6.12 (v4 pilot): signature week-by-week track, statement band and the merged terms document.
  track: {
    title: '8–12 weeks. Results every week.',
    example: 'Example: a 10-week Build. Your exact timeline is set in your plan before we start.',
    weeks: 10,
    weekLabel: 'Week',
    demoLabel: 'Weekly demo with you',
    liveLabel: 'Live with real users',
    // Titles and bodies = §6.5 (process.steps); week spans are the labelled example above.
    spans: [
      { from: 1, to: 1, label: 'Week 1' },
      { from: 2, to: 2, label: 'Week 2' },
      { from: 3, to: 9, label: 'Weeks 3–9' },
      { from: 10, to: 10, label: 'Week 10 and after', open: true },
    ],
  },
  statement: {
    bright: 'Senior engineers own the quality,',
    dim: 'and a person is responsible for every line that reaches your users.',
  },
  terms: {
    title: 'Price, team and ownership',
    docTitle: 'Build',
    docMeta: 'Agreed before we start',
  },
  pricing: {
    title: 'How is a Build priced?',
    // [PRICE: P3] → §0.7 model only, no number (tag removed).
    answer:
      'Every Build has a fixed price, agreed before we start. We set it from a clear scope, which comes from Validate, a Launch-Ready Review or our own scoping. If you did Validate or a Review with us, that fee credits toward the Build.',
  },
  team: {
    title: 'Who builds it',
    body: 'A full squad: a tech lead, developers, QA, a product manager and a designer. Senior engineers own the quality, and a person is responsible for every line that reaches your users. The team that scopes your product builds it. No handoff gaps.',
    link: { label: 'About DiscoverDev and where we work', to: 'about' as const }, // 03 §0.8
  },
  proof: {
    title: 'Products we’ve built',
    // [METRIC]/[CONSENT: Rushr] → §0.7 Rushr hidden. [CONSENT: Athkado] → §9.3 anonymized description; Nojoud quote omitted.
    items: [
      { title: 'AR furniture e-commerce with AI recommendations', where: 'Saudi Arabia', body: 'Furniture e-commerce from market study to launch: discovery, UX and UI, development, an AI recommendation engine and AR to see furniture at home.' },
    ],
  },
  ownership: {
    title: 'You own all of it',
    // [VERIFY: V6] → §0.7 keep (tag removed).
    body: 'Full IP, no lock-in and a clear contract from day one. Your code lives in your repository and your cloud accounts. When we hand over, another developer can pick it up.',
  },
  faq: {
    title: 'Questions about Build',
    items: [
      { id: 'timeline', q: 'How long does it take to build an MVP?', a: 'A Build takes 8–12 weeks from agreed scope to a live, production-ready product with real users. The exact timeline depends on the scope and is fixed in your plan before we start. You see working results every week, not only at the end.' },
      // [VERIFY: V21] → §0.7 omit the change-pricing sentence; keep the first sentence.
      { id: 'fixed-price', q: 'How do you keep the price fixed?', a: 'We agree a clear scope before we start, then price that scope. Discover and Plan come first: we define the product, the roadmap, the tech and the team before any code, so the price rests on a scope we both understand. You see results every week, so progress against that scope is never a surprise.' },
      { id: 'take-over', q: 'Can you take over my AI-built or freelancer-built prototype?', a: 'Yes. Start with a Launch-Ready Review. It tells you what to keep and what to replace. If a rebuild is the right call, we scope it as a fixed-price Build and credit the Review fee.', link: { label: 'How to decide between fixing and rebuilding', to: 'guideFixRebuild' as const } },
      { id: 'after-launch', q: 'What happens after launch?', a: 'We deploy, monitor and keep improving. If you want a team to stay, Scale gives you a dedicated squad on a monthly retainer. If you’d rather take it in-house, we hand over.' },
      // [VERIFY: V14] → §0.7 keep (tag removed).
      { id: 'agency-prices', q: 'How do your prices compare with US agencies?', a: 'Our engineering hub is in Alexandria, Egypt, so a senior team costs a fraction of typical agency rates. We compete on seniority and a fixed price.' },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. Full IP, no lock-in and a clear contract from day one. Everything we build for you is yours, so you can keep working with us, bring in another team or take it in-house whenever you choose. We stay as long as you want us to, not because you’re locked in.' },
    ],
  },
  band: {
    title: 'Get a fixed price and a date for your product',
    link: 'Have a prototype? Start with a Launch-Ready Review',
    // "Related reading" omitted: those articles are not live.
  },
} as const;
