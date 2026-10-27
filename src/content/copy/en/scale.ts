// 03-copy.md §7 (/scale) + §16b.2 (lean R1, Oct 26: Partners §8 merged in). Verbatim, with §0.7 launch resolutions applied.
import { shared } from './shared';
export const scale = {
  seo: {
    title: 'Dedicated Development Team for Gulf Startups | DiscoverDev',
    description:
      'A dedicated squad of developers, QA and a PM that stays with your product. Monthly retainer. Engineering hub in Egypt, working in Arabic and English.',
  },
  hero: {
    eyebrow: 'It’s working. Grow it.',
    h1: 'Scale: a dedicated team that stays', // keyword in the H1 (05 §0; Oct 26 review #4)
    body: 'A dedicated squad of developers, QA and a product manager joins your product on a monthly retainer. They own the roadmap and sprints with you. You keep control.',
    // Second audience straight to its section (Oct 27, like Build's ways in).
    ways: [{ label: 'Software house? White-label or staff augmentation', anchor: 'partners' }],
    // Meta row labels come from 06 §9.11 (`service` hero: Timeline, Model, Team); values from 04 §4.3 and 03 §7.6, §7.7.
    meta: [
      { label: 'Minimum', value: '4 months' }, // Oct 27: was Timeline · Monthly, which repeated the Model value
      { label: 'Model', value: 'Monthly retainer' },
      { label: 'Team', value: 'From one specialist to a full squad' },
    ],
  },
  // Journey stops (Oct 27, shared with Build): names shown in the margin on very wide screens.
  stages: { squad: 'The team', outcomes: 'Ways to work', fit: 'Fit', terms: 'The deal', partners: 'Software houses', proof: 'Proof', faq: 'Questions', close: 'Start' },
  // 03 §16b.17 (Oct 27): fit questionnaire, two questions → one best fit (facts: 09 Offer, engagement models, squad support).
  quiz: {
    title: 'Which way of working fits you?',
    body: 'Answer two questions and see your best fit. The free call confirms it.',
    q1: 'Where is your product today?',
    q2: 'What do you need most right now?',
    stages: [
      { id: 'idea', label: 'Still an idea, no product yet' },
      { id: 'team', label: 'Live, with our own tech team' },
      { id: 'noteam', label: 'Live, but no tech team' },
      { id: 'house', label: 'We’re a software house' },
    ],
    needs: [
      { id: 'piece', label: 'A piece built: a POC, a new MVP or a module' },
      { id: 'hands', label: 'More engineers, managed by us' },
      { id: 'squad', label: 'A team that runs the roadmap with us' },
    ],
    placeholder: 'Your best fit shows here.',
    noTeamNote: 'With no tech team to manage engineers yet, a squad with its own PM fits better than adding people.',
    results: [
      { id: 'build', kicker: 'Best fit: Build', title: 'From idea to a live MVP', body: 'A senior team takes your idea to real users in 8–12 weeks, at a fixed price.', link: { label: 'See Build', to: 'build' as const } },
      { id: 'house', kicker: 'Best fit: White-label or staff augmentation', title: 'Engineers under your brand', body: 'We deliver a project under your brand, or engineers join your team. Both start with an NDA, and the IP goes to you.', link: { label: 'Compare the options', anchor: 'partners' } },
      { id: 'piece', kicker: 'Best fit: Hand us a piece', title: 'Our squad takes the piece', body: 'A proof of concept in 2–4 weeks, a new MVP in 6–12 weeks, or a module inside your sprints. You set the direction.', link: { label: 'See how it works', anchor: 'pieces' } },
      { id: 'hands', kicker: 'Best fit: Staff augmentation', title: 'Engineers who join your team', body: 'They work inside your team and your process, managed by you. The minimum term is 3 months.', link: { label: 'Compare the options', anchor: 'partners' } },
      { id: 'squad', kicker: 'Best fit: A dedicated squad', title: 'A team that stays', body: 'Developers, QA and a PM on a monthly retainer, from 4 months. The squad’s PM runs the sprints with you.', link: { label: 'See how a squad grows', anchor: 'process' } },
    ],
  },
  // 03 §16b.16 (Oct 27): fit check. "A single project with a fixed end" is no longer "not for" (the squad now takes POCs,
  // MVPs and modules for teams); each not-for line routes to its better fit.
  fit: {
    title: 'Is Scale right for you?',
    forTitle: 'Scale fits if',
    for: [
      'Your product is live and growing.',
      'You need more capacity than your team has, without hiring one person at a time.',
      'Your team needs a proof of concept, a new MVP or a module built under its direction.',
      'You want a team that learns your product and stays.',
    ],
    notTitle: 'Something else fits better if',
    betterLabel: 'Better fit:',
    not: [
      { text: 'You have an idea, but no product or team yet.', route: 'Build, from idea to a live MVP', to: 'build' as const },
      { text: 'You run a software house and need engineers under your brand.', route: 'White-label or staff augmentation', anchor: 'partners' },
    ],
  },
  // 03 §16b.15 (Oct 27): our squad working with your team on a piece you hand over (09 Offer, squad support).
  // Replaces "What a dedicated squad gives you" and "What's included" (generic cards; the roles are in the terms section).
  pieces: {
    title: 'Your team leads. Our squad takes a piece.',
    body: 'Hand us a proof of concept, a new MVP or a module in your product. You set the direction. Our squad works in your backlog and your sprints while your team keeps shipping.',
    product: 'your-product',
    items: [
      { id: 'poc', name: 'Proof of concept', when: '2–4 weeks', body: 'Test a risky idea or a new technology before your team commits to it.' },
      { id: 'mvp', name: 'A new MVP', when: '6–12 weeks', body: 'A new product next to your main one, built while your team stays on the roadmap.' },
      { id: 'module', name: 'A module in your product', when: 'Inside your sprints', body: 'A feature area your team has no time or skills for, built to your architecture.' },
      { id: 'roadmap', name: 'Ongoing roadmap', when: 'From 4 months', body: 'A dedicated squad that stays and grows with your product.' },
    ],
    pins: { poc: 'Proof of concept', mvp: 'A new MVP', module: 'A module', roadmap: 'Ongoing roadmap' },
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
  // 03 §16b.14 (Oct 27): the squad growing month by month (an example), replacing the roster + loop that repeated the hero.
  growth: {
    title: 'Start with one specialist. Grow into a full squad.',
    body: 'Your squad grows with your roadmap. We check the team size with you every month, and the people who learn your product keep working on it.',
    example: 'Example: a squad growing over its first 6 months',
    monthLabel: 'Month',
    fromLabel: 'Joins in month',
    reviewLabel: 'Monthly review',
    months: 6,
    roles: [
      { icon: 'code', title: 'Developers', from: 1 },
      { icon: 'shield-check', title: 'QA', from: 2 },
      { icon: 'compass', title: 'Lead', from: 3 },
      { icon: 'list-checks', title: 'PM', from: 3 },
      { icon: 'pen-tool', title: 'Designer', from: 4 },
    ],
    loop: { meta: 'Every sprint', steps: ['Plan', 'Build', 'Test', 'Release'], note: 'Results every week' },
  },
  // 03 §7.12 (v4): signature squad and loop, statement band and the merged terms document.
  squad: {
    title: 'Steady delivery. A team that stays.',
    rosterLabel: 'From one specialist to a full squad',
    roles: [
      { icon: 'compass', title: 'Lead' },
      { icon: 'code', title: 'Developers' },
      { icon: 'shield-check', title: 'QA' },
      { icon: 'list-checks', title: 'PM' },
      { icon: 'pen-tool', title: 'Designer' },
    ],
    ring: ['Plan', 'Build', 'Test', 'Release'],
  },
  statement: {
    bright: 'A team that stays.',
    dim: 'The people who learn your product keep working on it.',
  },
  // 03 §16b.19 (Oct 27): answer-first terms, the same pattern as Build's "What you get" (was a three-column text document).
  get: {
    title: 'Price, team and ownership',
    includedLabel: 'Skills in every squad',
    items: [
      { icon: 'code', label: 'Full-stack' },
      { icon: 'smartphone', label: 'Mobile' },
      { icon: 'cpu', label: 'AI and ML' },
      { icon: 'eye', label: 'Computer vision' },
      { icon: 'database', label: 'Data' },
      { icon: 'shield-check', label: 'QA' },
    ],
    tiles: [
      { id: 'pricing', label: 'Price', value: 'Monthly retainer', body: 'Based on the size of your squad. We review the team size with you every month.' },
      { id: 'minimum', label: 'Minimum term', value: '4 months', body: 'Time for the squad to learn your product and deliver. Staff augmentation starts from 3 months.', assure: { lead: 'Not sure yet?', text: 'Start with a proof of concept in 2–4 weeks, then decide on a squad.', cta: { label: 'Book a call about a POC', interest: 'scale-poc' }, link: { label: 'How a POC works', anchor: 'pieces' } } },
      { id: 'team', label: 'Team', value: 'One to a full squad', body: 'A lead, developers, QA, a PM and a designer, as your roadmap needs. Senior engineers own the quality.', link: { label: shared.howLink, to: 'howWeWork' as const }, assure: { lead: 'Free replacement.', text: 'If anyone isn’t the right fit, we replace them at no cost.', link: { label: 'How replacement works', anchor: 'faq-replacement' } } },
      { id: 'ownership', label: 'Ownership', value: 'All yours', body: 'You keep control of the roadmap, the code and the accounts. Full IP, no lock-in, a clear contract from day one.' },
    ],
  },
  terms: { title: 'Price, team and ownership', docTitle: 'Scale', docMeta: 'Monthly retainer' },
  pricing: {
    title: 'How is Scale priced?',
    // [PRICE: P4] → §0.7 model only, no number (tag removed).
    answer:
      'Scale is a monthly retainer, based on the size of your squad. Dedicated teams start with a 4-month minimum, so the team has time to learn your product and deliver.',
  },
  team: {
    title: 'Who’s on the squad',
    body: 'From one specialist to a full squad: a lead, developers, QA, a PM and a designer. Skills cover full-stack, mobile, AI and ML, computer vision, data and QA. Senior engineers own the quality.',
    link: { label: shared.howLink, to: 'howWeWork' as const },
  },
  proof: {
    title: 'Teams that stayed',
    // [CONSENT] → §0.7: titles are the §9.3 anonymized descriptions. Upscend keeps its §7.8 body (no name in it).
    // Pyramakerz body dropped (repeats the title). Arheb body dropped ("the first Saudi smart ride-sharing platform" identifies the client).
    items: [
      { title: shared.projectLmsTeam, where: 'UK', body: 'A 12-month embedded partnership. A dedicated PM and engineering team owning roadmap, backlog and sprints, supporting growth with US and UK enterprise clients.' },
      { title: shared.projectEdtechData, where: 'Egypt' },
      { title: shared.projectRideMl, where: 'Saudi Arabia' },
      // §8.6 partner lines (anonymized).
      { title: shared.projectWhiteLabelLong, where: 'UK' },
      { title: 'AI agents for call operations and staff augmentation', where: 'USA' },
      { title: shared.projectProcurementMl, where: 'Saudi Arabia' },
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
      { id: 'minimum', q: 'What is the minimum commitment for a dedicated team?', a: 'Four months. That gives the squad time to learn your product and deliver steadily.' },
      { id: 'management', q: 'Who manages the team?', a: 'The squad’s product manager runs the backlog and sprints together with you. You set priorities. You keep control of the roadmap.' },
      // [VERIFY: V22 notice period] → §0.7 omit the notice clause (tag removed).
      { id: 'replacement', q: 'What if a squad member isn’t the right fit?', a: 'We replace them at no cost. Tell us at any time, and we bring in someone who fits your product and your team. If you want to test us first, start with a proof of concept in 2–4 weeks before you commit to a squad.' },
      { id: 'resize', q: 'Can the squad grow or shrink?', a: 'Yes. We review the team size with you every month. A squad can start with one specialist and grow to developers, QA, a product manager and a designer as your roadmap needs it. The minimum commitment is four months, which gives the squad time to learn your product and deliver steadily.' },
      // "How quickly can a squad start?" omitted (§0.7 V22: answer is the tag only).
      { id: 'ip', q: 'Who owns the IP in a white-label project?', a: 'You do. White-label work runs under an NDA, and the IP goes to you so you can pass it to your client. The details are in the contract from day one.' },
      { id: 'minimum-term', q: 'What is the minimum term for staff augmentation?', a: 'Three months. That gives the engineer time to learn your codebase and deliver. White-label work is scoped per project.' },
      { id: 'hours', q: 'What hours and languages do you work in?', a: 'Our hub is in Alexandria, Egypt (GMT+2). Gulf time is 0–2 hours ahead, and our day overlaps the Gulf, Europe and US mornings. We work in Arabic and English.' },
    ],
  },
  // §16b.2: For software houses (§8.3 answer and table).
  partners: {
    title: 'For software houses: white‑label or staff augmentation', // U+2011: no line break inside the word
    answer:
      'Choose white-label when you want us to deliver a whole project under your brand. Choose staff augmentation when you want engineers working inside your team, managed by you. Both start with an NDA, and the IP goes to you.',
    caption: 'White-label delivery, staff augmentation and dedicated team compared',
    columns: ['White-label delivery', 'Staff augmentation', 'Dedicated team'],
    // 03 §16b.23 (Oct 27): cards instead of the table on Scale, each with when it fits best.
    bestLabel: 'Best when',
    bestFor: ['you sell the project to your client, and we deliver it under your brand.', 'you run the project and need more engineers in your team.', 'you need a team that owns a product for months.'],
    rows: [
      { label: 'What you get', cells: ['A project delivered under your brand', 'Engineers who join your team', 'A dedicated squad of developers, QA and a PM'] },
      { label: 'Who manages day to day', cells: ['We do, inside your process', 'You do', 'Our PM, together with you'] },
      { label: 'Who your client sees', cells: ['Your brand only', 'Your team', 'Agreed on the partner call'] },
      { label: 'Minimum term', cells: ['Per project', '3 months', '4 months'] },
      { label: 'IP and confidentiality', cells: ['NDA, IP to you', 'NDA, IP to you', 'NDA, IP to you'] },
      { label: 'Price', cells: ['Quoted per project', 'Monthly, per engineer', 'Monthly retainer'] },
    ],
    quote: { text: 'They combine strong technical delivery with a very practical, low-friction approach, which isn’t always easy to find.', name: 'Team Lead', role: 'Amstadd, UK' },
  },
  band: {
    title: 'Add a team that stays with your product',
    // "Related reading" omitted: those pages are not live.
  },
} as const;
