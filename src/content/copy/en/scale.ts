// 03-copy.md §7 (/scale). Verbatim, with §0.7 launch resolutions applied (noted inline).
export const scale = {
  seo: {
    title: 'Dedicated Development Team on Retainer | DiscoverDev',
    description:
      'A dedicated squad of developers, QA and a PM that stays with your product. Monthly retainer. Engineering hub in Egypt, working in Arabic and English.',
  },
  hero: {
    eyebrow: 'It’s working. Grow it.',
    h1: 'Scale: a dedicated development team that stays',
    body: 'A dedicated squad of developers, QA and a product manager joins your product on a monthly retainer. They own the roadmap and sprints with you. You keep control.',
    // Meta row labels come from 06 §9.11 (`service` hero: Timeline, Model, Team); values from 04 §4.3 and 03 §7.6, §7.7.
    meta: [
      { label: 'Timeline', value: 'Monthly' },
      { label: 'Model', value: 'Monthly retainer' },
      { label: 'Team', value: 'From one specialist to a full squad' },
    ],
  },
  fit: {
    title: 'Is Scale right for you?',
    // Column headings derived from the 03 section name "Who it's for, and not for".
    forTitle: 'Who it’s for',
    notTitle: 'Who it’s not for',
    for: [
      'Your product is live and growing.',
      'You need more capacity than your team has, without hiring one person at a time.',
      'You want a team that learns your product and stays.',
    ],
    not: [
      // 03 §0.8: existing words become links.
      { text: 'You need a single project with a fixed end (see Build).', link: { label: 'see Build', to: 'build' as const } },
      { text: 'You run a software house and need engineers under your brand (see Partners).', link: { label: 'see Partners', to: 'partners' as const } },
    ],
  },
  outcomes: {
    title: 'What a dedicated squad gives you',
    items: [
      { title: 'Steady delivery', body: 'A team that plans, builds and ships, with results every week.' },
      { title: 'Less management for you', body: 'The squad’s PM runs the backlog and sprints with you.' },
      { title: 'A team that stays', body: 'The people who learn your product keep working on it.' },
    ],
  },
  included: {
    title: 'What’s included',
    // "Monthly reporting on what shipped [VERIFY: V22 reporting cadence]" omitted (§0.7 V22: omit).
    items: [
      'Developers, QA and a product manager, sized to your roadmap',
      'Roadmap and sprint ownership, shared with you',
      'Data, ML and AI work when you need it',
    ],
  },
  process: {
    title: 'How it works month to month',
    // Chip label from 03 §2.2a on the step where the squad builds. No senior-review step in §7.5, so no "Senior sign-off" chip.
    steps: [
      { meta: 'Month 1', title: 'Join', body: 'The squad learns your product, code and goals.' },
      { meta: 'Every sprint', title: 'Ship', body: 'Plan, build, test, release. Results every week.', chip: { kind: 'ai', label: 'AI-accelerated' } },
      { meta: 'Every month', title: 'Review', body: 'What shipped, what’s next, and whether the team size is right.' },
    ],
  },
  pricing: {
    title: 'How is Scale priced?',
    // [PRICE: P4] → §0.7 model only, no number (tag removed).
    answer:
      'Scale is a monthly retainer, based on the size of your squad. Dedicated teams start with a 6-month minimum, so the team has time to learn your product and deliver.',
  },
  team: {
    title: 'Who’s on the squad',
    body: 'From one specialist to a full squad: a lead, developers, QA, a PM and a designer. Skills cover full-stack, mobile, AI and ML, computer vision, data and QA. Senior engineers own the quality.',
    link: { label: 'About DiscoverDev and where we work', to: 'about' as const }, // 03 §0.8
  },
  proof: {
    title: 'Teams that stayed',
    // [CONSENT] → §0.7: titles are the §9.3 anonymized descriptions. Upscend keeps its §7.8 body (no name in it).
    // Pyramakerz body dropped (repeats the title). Arheb body dropped ("the first Saudi smart ride-sharing platform" identifies the client).
    items: [
      { title: '12-month embedded product team for a B2B learning platform', where: 'UK', body: 'A 12-month embedded partnership. A dedicated PM and engineering team owning roadmap, backlog and sprints, supporting growth with US and UK enterprise clients.' },
      { title: 'Data, ML and automation for an EdTech platform with 20,000+ students', where: 'Egypt' },
      { title: 'Embedded data and ML team for a smart ride-sharing platform', where: 'Saudi Arabia' },
    ],
    // [CONSENT: all four] → §0.7 replacement line.
    retention: 'Four clients expanded scope with us.',
    // V12 → anonymized (§0.7 "EdTech AI platform, Egypt"). Rendered only when the case study route is live.
    caseLink: 'Read how an EdTech AI platform cut AI costs by 60–90%',
  },
  ownership: {
    title: 'Your product, your control',
    // [VERIFY: V6] → §0.7 keep (tag removed).
    body: 'You keep control of the roadmap, the code and the accounts. Full IP, no lock-in, clear contract from day one.',
  },
  faq: {
    title: 'Questions about Scale',
    items: [
      // V22 → §0.7 omit the "continues month to month" clause.
      { id: 'minimum', q: 'What is the minimum commitment for a dedicated team?', a: 'Six months. That gives the squad time to learn your product and deliver steadily.' },
      { id: 'management', q: 'Who manages the team?', a: 'The squad’s product manager runs the backlog and sprints together with you. You set priorities. You keep control of the roadmap.' },
      // [VERIFY: V22 notice period] → §0.7 omit the notice clause (tag removed).
      { id: 'resize', q: 'Can the squad grow or shrink?', a: 'Yes. We review the team size with you every month.' },
      // "How quickly can a squad start?" omitted (§0.7 V22: answer is the tag only).
      { id: 'hours', q: 'What hours and languages do you work in?', a: 'Our hub is in Alexandria, Egypt (GMT+2). Our day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English.' },
    ],
  },
  band: {
    title: 'Add a team that stays with your product',
    // "Related reading" omitted: those pages are not live.
  },
} as const;
