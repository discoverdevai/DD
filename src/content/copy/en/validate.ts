// 03-copy.md §5 (/validate). Verbatim, with §0.7 launch resolutions applied (noted inline).
export const validate = {
  seo: {
    title: 'Product Discovery Services for Startups | DiscoverDev',
    description:
      'Validate your idea in 1–2 weeks: market read, scope, clickable prototype and a fixed build estimate. The fee credits toward your build.',
  },
  hero: {
    eyebrow: 'I have an idea.',
    h1: 'Validate: product discovery before you write code',
    body: 'In 1–2 weeks you learn if the idea is worth building, what to build first and what it will cost. You leave with a market read, a product scope, a clickable prototype and a fixed build estimate.',
    // Meta row labels come from 06 §9.11 (`service` hero: Timeline, Model, Team); values from 03 §5.1, §5.6, §5.7.
    // Team value = opening words of §5.7 (V16 → §0.7 keep).
    meta: [
      { label: 'Timeline', value: '1–2 weeks' },
      { label: 'Model', value: 'Fixed fee' },
      { label: 'Team', value: 'A product lead and a designer, with an engineer' },
    ],
  },
  fit: {
    title: 'Is Validate right for you?',
    // Column headings derived from the 03 section name "Who it's for, and not for".
    forTitle: 'Who it’s for',
    notTitle: 'Who it’s not for',
    for: [
      'You have an idea and some conviction, but no product yet.',
      'You want to know what to build before you spend on code.',
      'You need a real number for your build budget or your investors.',
    ],
    not: [
      { text: 'You already have a working prototype. Start with a Launch-Ready Review.' },
      { text: 'You need a team on an existing product. See Scale.' },
    ],
  },
  outcomes: {
    title: 'What changes after Validate',
    items: [
      { title: 'A clear decision', body: 'Build, change direction or stop, based on a market read, not a guess.' },
      { title: 'A smaller, sharper first version', body: 'A scope that says what to build first and what to leave out.' },
      { title: 'A number you can plan with', body: 'A fixed estimate for the Build, so your budget is real.' },
    ],
  },
  included: {
    title: 'What’s included',
    items: ['Market and competitor read', 'Product scope', 'Clickable prototype', 'Fixed build estimate'],
  },
  process: {
    title: 'How the 1–2 weeks work',
    // No layer chips: no Build step and no senior-review step in §5.5. "Week 1 / Week 2" labels not shown (split is per project).
    steps: [
      { title: 'Discover', body: 'We learn your idea, your users and your market. We read the competition.' },
      { title: 'Plan', body: 'We agree what the first version must do, and what can wait.' },
      { title: 'Prototype', body: 'We design a clickable prototype you can show to users and investors.' },
      { title: 'Estimate', body: 'We give you a fixed price and timeline for the Build.' },
    ],
  },
  pricing: {
    title: 'How much does Validate cost?',
    // [PRICE: P2] → §0.7 model only, no number (tag removed).
    answer:
      'Validate is a fixed fee, agreed before we start. If you go on to build with us, the full fee credits toward your Build. You own the research, scope and prototype either way.',
  },
  team: {
    title: 'Who works on it',
    // [VERIFY: V16 Validate team shape] → §0.7 V16 keep (tag removed).
    body: 'A product lead and a designer, with an engineer who checks that the scope can be built in time and on budget. The same team can carry on into Build. No handoff gaps.',
  },
  proof: {
    title: 'Discovery work we’ve done',
    // [CONSENT] → §0.7: no names, no quotes. Athkado item uses its §9.3 anonymized description as the title.
    // Fantacalcio item omitted (no §9.3 description; name-dependent). Roberto and Andrei quotes omitted.
    items: [
      { title: 'AR furniture e-commerce with AI recommendations', where: 'Saudi Arabia', body: 'Rapid market studies and feasibility sprints that led to build, pivot or shelve decisions.' },
      { title: 'Entrepreneurs in Kuwait, Switzerland, the UK and Spain', body: 'Market research, go-to-market and discovery.' },
    ],
  },
  ownership: {
    title: 'You own what we make',
    body: 'The research, the scope and the prototype are yours. Full IP, no lock-in, clear contract from day one. Take them to any team you like.',
  },
  faq: {
    title: 'Questions about Validate',
    items: [
      { id: 'deliverables', q: 'What do I get at the end of Validate?', a: 'Four things: a market and competitor read, a product scope, a clickable prototype and a fixed build estimate. Together they tell you what to build first, what to leave out and what it will cost. If you build with us, the Validate fee credits toward your Build.' },
      { id: 'timeline', q: 'How long does Validate take?', a: '1–2 weeks. The length depends on how much research your market needs and how big the first version is. We agree the timeline on the clarity call, before you pay anything.' },
      { id: 'dont-build', q: 'What if the answer is “don’t build it”?', a: 'Then Validate did its job. Sometimes the right decision is to change direction or stop. It’s much cheaper to learn that in 1–2 weeks than after months of building.' },
      { id: 'after', q: 'Do I have to build with you afterwards?', a: 'No. You own the scope, prototype and estimate. If you do build with us, the full Validate fee credits toward your Build.' },
      // [PRICE: P2] → §0.7 model only (tag removed).
      { id: 'cost', q: 'How much does Validate cost?', a: 'A fixed fee, agreed before we start.' },
    ],
  },
  band: {
    title: 'Test the idea before you pay for the build',
    link: 'Already have a prototype? Start with a Launch-Ready Review',
  },
} as const;
