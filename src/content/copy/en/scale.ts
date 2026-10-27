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
      { label: 'Minimum', value: '6 months' }, // Oct 27: was Timeline · Monthly, which repeated the Model value
      { label: 'Model', value: 'Monthly retainer' },
      { label: 'Team', value: 'From one specialist to a full squad' },
    ],
  },
  // Journey stops (Oct 27, shared with Build): names shown in the margin on very wide screens.
  stages: { squad: 'The team', outcomes: 'Ways to work', fit: 'Fit', terms: 'The deal', partners: 'Software houses', proof: 'Proof', faq: 'Questions', close: 'Start' },
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
      { id: 'roadmap', name: 'Ongoing roadmap', when: 'From 6 months', body: 'A dedicated squad that stays and grows with your product.' },
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
  terms: { title: 'Price, team and ownership', docTitle: 'Scale', docMeta: 'Monthly retainer' },
  pricing: {
    title: 'How is Scale priced?',
    // [PRICE: P4] → §0.7 model only, no number (tag removed).
    answer:
      'Scale is a monthly retainer, based on the size of your squad. Dedicated teams start with a 6-month minimum, so the team has time to learn your product and deliver.',
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
      { id: 'minimum', q: 'What is the minimum commitment for a dedicated team?', a: 'Six months. That gives the squad time to learn your product and deliver steadily.' },
      { id: 'management', q: 'Who manages the team?', a: 'The squad’s product manager runs the backlog and sprints together with you. You set priorities. You keep control of the roadmap.' },
      // [VERIFY: V22 notice period] → §0.7 omit the notice clause (tag removed).
      { id: 'resize', q: 'Can the squad grow or shrink?', a: 'Yes. We review the team size with you every month. A squad can start with one specialist and grow to developers, QA, a product manager and a designer as your roadmap needs it. The minimum commitment is six months, which gives the squad time to learn your product and deliver steadily.' },
      // "How quickly can a squad start?" omitted (§0.7 V22: answer is the tag only).
      { id: 'ip', q: 'Who owns the IP in a white-label project?', a: 'You do. White-label work runs under an NDA, and the IP goes to you so you can pass it to your client. The details are in the contract from day one.' },
      { id: 'minimum-term', q: 'What is the minimum term for staff augmentation?', a: 'Three months. That gives the engineer time to learn your codebase and deliver. White-label work is scoped per project.' },
      { id: 'hours', q: 'What hours and languages do you work in?', a: 'Our hub is in Alexandria, Egypt (GMT+2). Gulf time is 0–2 hours ahead, and our day overlaps the Gulf, Europe and US mornings. We work in Arabic and English.' },
    ],
  },
  // §16b.2: For software houses (§8.3 answer and table).
  partners: {
    title: 'For software houses: white-label or staff augmentation',
    answer:
      'Choose white-label when you want us to deliver a whole project under your brand. Choose staff augmentation when you want engineers working inside your team, managed by you. Both start with an NDA, and the IP goes to you.',
    caption: 'White-label delivery, staff augmentation and dedicated team compared',
    columns: ['White-label delivery', 'Staff augmentation', 'Dedicated team'],
    rows: [
      { label: 'What you get', cells: ['A project delivered under your brand', 'Engineers who join your team', 'A dedicated squad of developers, QA and a PM'] },
      { label: 'Who manages day to day', cells: ['We do, inside your process', 'You do', 'Our PM, together with you'] },
      { label: 'Who your client sees', cells: ['Your brand only', 'Your team', 'Agreed on the partner call'] },
      { label: 'Minimum term', cells: ['Per project', '3 months', '6 months'] },
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
