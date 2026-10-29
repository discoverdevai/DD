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
  pricing: {
    title: 'How is Scale priced?',
    // [PRICE: P4] → §0.7 model only, no number (tag removed).
    answer:
      'Scale is a monthly retainer, based on the size of your squad. Dedicated teams start with a 4-month minimum, so the team has time to learn your product and deliver.',
  },
  proof: {
    title: 'Teams that stayed',
    // 03 §16b.28 (Oct 29): Mockup 2 v2. NJWAR full width in a real room; Upscend, Arheb, Pyramakerz below (09 Differentiators).
    lead: 'Four clients expanded their work with us.',
    main: { name: 'NJWAR', value: '2 phases', line: 'Feasibility sprints, then the AR furniture store. Saudi Arabia.', photo: { file: 'proof-lounge.webp', alt: '' }, web: { file: 'njwar-web.webp', alt: '' }, phone: { file: 'njwar-ar.webp', alt: 'NJWAR AR view placing an armchair in a room' } },
    upscend: { name: 'Upscend', value: '12 months', line: 'One embedded team. UK.', screen: { file: 'upscend-learner.webp', alt: 'Upscend learner dashboard: current courses with progress' } },
    arheb: { name: 'Arheb', value: 'Data + ML', line: 'Ride-sharing. Saudi Arabia.', logo: 'arheb.png', screen: { file: 'arheb-app.webp', alt: 'Arheb app: a map and the ride types to choose from' } },
    pyramakerz: { name: 'Pyramakerz', value: '20,000+', line: 'Students. Egypt.', logo: 'pyramakerz.png' },
    alsoLabel: 'Also with us',
    alsoAnd: 'and',
    also: [
      { name: 'Jumlaty', line: 'ML engineer, Saudi Arabia' },
      { name: 'Nile Support', line: 'AI call agents, USA' },
      { name: 'Amstadd', line: 'white-label, UK' },
    ],
    credit: 'Room photo: "Reception lounge at Amantaka" by Basile Morin, CC BY-SA 4.0, via Wikimedia Commons. Client screens from their own sites and app listing.',
  },
  faq: {
    title: 'Questions about Scale',
    items: [
      // 03 §16b.29 (Oct 29): six short answers; the two minimum questions merged; no repeats.
      { id: 'minimum', q: 'What is the minimum commitment?', a: 'Four months for a dedicated team and three for staff augmentation. White-label work is scoped per project.' },
      { id: 'management', q: 'Who manages the team?', a: 'Our product manager runs the backlog and sprints with you. You set the priorities and keep the roadmap.' },
      { id: 'replacement', q: 'What if someone isn’t the right fit?', a: 'We replace them at no cost, at any time. To test us first, start with a 2–4 week proof of concept.' },
      { id: 'resize', q: 'Can the squad grow or shrink?', a: 'Yes. We review the team size with you every month, from one specialist to a full squad.' },
      { id: 'ip', q: 'Who owns the IP?', a: 'You do. Every option starts with an NDA, and the IP goes to you, white-label work included.' },
      { id: 'hours', q: 'What hours and languages do you work in?', a: 'We are in Alexandria, Egypt, 0–2 hours behind the Gulf, with overlap for Europe and US mornings. We work in Arabic and English.' },
    ],
  },
  // §16b.2: For software houses (§8.3 answer and table).
  partners: {
    // 03 §16b.24 (Oct 27, Mohamed: "too long, too many words"): the Scale version, short. One line per option and the
    // three facts that differ; NDA and IP (the same for all three) become one line under the title.
    short: {
      title: 'For software houses',
      lead: 'Every option starts with an NDA, and the IP goes to you.',
      columns: ['White-label delivery', 'Staff augmentation', 'Dedicated team'],
      lines: ['We deliver under your brand.', 'Our engineers join your team.', 'A squad that owns a product.'],
      rows: [
        { label: 'Managed by', cells: ['We do', 'You do', 'Our PM, with you'] },
        { label: 'Minimum', cells: ['Per project', '3 months', '4 months'] },
        { label: 'Price', cells: ['Quoted per project', 'Monthly, per engineer', 'Monthly retainer'] },
      ],
    },
    caption: 'White-label delivery, staff augmentation and dedicated team compared',
    quote: { text: 'They combine strong technical delivery with a very practical, low-friction approach, which isn’t always easy to find.', name: 'Team Lead', role: 'Amstadd, UK' },
  },
  band: {
    title: 'Add a team that stays with your product',
    // 03 §16b.30 (Oct 29): one line on what the call gives, as on Build.
    body: 'Tell us about your product and your team. You leave with the option that fits, and you can start with a proof of concept to test us first.',
    // "Related reading" omitted: those pages are not live.
  },
} as const;
