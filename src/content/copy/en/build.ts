// 03-copy.md §16b.1 (/build, lean R1, Oct 26): Build absorbs Validate (§5) and the Launch-Ready Review (§3).
// Verbatim lines keep their source section; §0.7 launch resolutions still apply (no Rushr, anonymized proof, no quotes).
import { shared } from './shared';
export const build = {
  seo: {
    title: 'MVP Development Company for Gulf Startups | DiscoverDev',
    description:
      'From idea to a live MVP in 8–12 weeks: 1–2 weeks of Validate, then a fixed-price Build by a senior team. Have an AI-built prototype? We review it first.',
  },
  hero: {
    eyebrow: 'From idea to launch',
    h1: 'Build: from idea to a live MVP',
    body: 'Start with 1–2 weeks of Validate. Then a senior team designs, builds, tests and deploys your MVP in 8–12 weeks, at a fixed price. You launch with real users, and you own all of it.',
    meta: [
      { label: 'Validate', value: '1–2 weeks' },
      { label: 'Build', value: '8–12 weeks' },
      { label: 'Model', value: 'Fixed price' },
    ],
  },
  start: {
    title: 'Start where you are',
    lead: 'Two ways in. Both end with a fixed price and a date for your build.',
    items: [
      { anchor: 'validate', tag: 'New idea', title: 'Validate first', body: '1–2 weeks: a market read, a product scope, a clickable prototype and a fixed build estimate. The fee credits toward your Build.', link: 'How Validate works' },
      { anchor: 'review', tag: 'Existing prototype', title: 'Review it first', body: 'Built with Lovable, Bolt, v0, Cursor or a freelancer? A senior team checks it in about 5 working days. From $1,490, credited toward the fix.', link: 'How the Review works' },
    ],
  },
  validate: {
    title: 'Validate: 1–2 weeks to a clear decision.',
    lead: 'Build, change direction or stop, based on a market read, not a guess.', // §5.3
    // §5.5 steps, §5.4 deliverables (one per step).
    steps: [
      { title: 'Discover', body: 'We learn your idea, your users and your market. We read the competition.' },
      { title: 'Plan', body: 'We agree what the first version must do, and what can wait.' },
      { title: 'Prototype', body: 'We design a clickable prototype you can show to users and investors.' },
      { title: 'Estimate', body: 'We give you a fixed price and timeline for the Build.' },
    ],
    deliverables: ['Market and competitor read', 'Product scope', 'Clickable prototype', 'Fixed build estimate'],
    label: 'Your decision',
    options: [
      { key: 'build', title: 'Build' },
      { key: 'change', title: 'Change direction' },
      { key: 'stop', title: 'Stop' },
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
  // §6.12 signature week-by-week track.
  track: {
    title: '8–12 weeks. Results every week.',
    example: 'Example: a 10-week Build. Your exact timeline is set in your plan before we start.',
    weeks: 10,
    weekLabel: 'Week',
    demoLabel: 'Weekly demo with you',
    liveLabel: 'Live with real users',
    spans: [
      { from: 1, to: 1, label: 'Week 1' },
      { from: 2, to: 2, label: 'Week 2' },
      { from: 3, to: 9, label: 'Weeks 3–9' },
      { from: 10, to: 10, label: 'Week 10 and after', open: true },
    ],
  },
  review: {
    title: 'Have an AI-built prototype? Review it first.',
    body: 'A vibe code audit before you go live. Your app works in the demo. Before real users, real data and real payments touch it, a senior team checks what will break. In about 5 working days you get a ranked fix list, a plain verdict and a fixed quote.', // §3.1
    checkTitle: 'What we check',
    areas: ['Access and security', 'Data', 'Payments', 'Code quality', 'Scale and running costs', 'Ownership and handover'], // §3.4
    price: 'Reviews start from $1,490. The full fee is credited toward the fix or a Build with us.', // §3.7
    guarantee: 'No useful findings, no charge.', // §3.8
  },
  outcomes: {
    title: 'What you get from a Build',
    items: [
      { title: 'A live product with real users', body: 'Not a demo. Deployed, tested and ready for real data and payments.' },
      { title: 'A fixed price and a date', body: 'You know the cost and the timeline before we start.' },
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
  terms: { title: 'Price, team and ownership', docTitle: 'Build', docMeta: 'Agreed before we start' },
  pricing: {
    title: 'How is a Build priced?',
    answer:
      'Validate is a fixed fee, agreed before we start. Every Build has a fixed price, set from a clear scope that comes from Validate, a Launch-Ready Review or our own scoping. Validate and Review fees credit toward the Build.',
  },
  team: {
    title: 'Who builds it',
    body: 'A full squad: a tech lead, developers, QA, a product manager and a designer. Senior engineers own the quality, and a person is responsible for every line that reaches your users. The team that scopes your product builds it. No handoff gaps.',
    link: { label: shared.howLink, to: 'howWeWork' as const },
  },
  ownership: {
    title: 'You own all of it',
    body: 'Full IP, no lock-in and a clear contract from day one. Your code lives in your repository and your cloud accounts. When we hand over, another developer can pick it up.',
  },
  proof: {
    title: 'Products we’ve taken from idea to launch',
    items: [
      { title: shared.projectArFurniture, where: 'Saudi Arabia', body: 'Feasibility sprints, then the build: discovery, UX and UI, development, an AI recommendation engine and AR to see furniture at home.' },
      { title: 'Entrepreneurs in Kuwait, Switzerland, the UK and Spain', body: shared.projectFoundersDid },
    ],
  },
  faq: {
    title: 'Questions about Build',
    items: [
      { id: 'timeline', q: shared.mvpTimeQ, a: 'A Build takes 8–12 weeks from agreed scope to a live, production-ready product with real users. The exact timeline depends on the scope and is fixed in your plan before we start. You see working results every week, not only at the end.' },
      { id: 'deliverables', q: 'What do I get at the end of Validate?', a: 'Four things: a market and competitor read, a product scope, a clickable prototype and a fixed build estimate. Together they tell you what to build first, what to leave out and what it will cost. If you build with us, the Validate fee credits toward your Build.' },
      { id: 'fixed-price', q: 'How do you keep the price fixed?', a: 'We agree a clear scope before we start, then price that scope. Discover and Plan come first: we define the product, the roadmap, the tech and the team before any code, so the price rests on a scope we both understand. You see results every week, so progress against that scope is never a surprise.' },
      { id: 'dont-build', q: 'What if the answer is “don’t build it”?', a: 'Then Validate did its job. Sometimes the right decision is to change direction or stop. It’s much cheaper to learn that in 1–2 weeks than after months of building.' },
      { id: 'take-over', q: 'Can you take over my AI-built or freelancer-built prototype?', a: 'Yes. Start with a Launch-Ready Review. It tells you what to keep and what to replace. If a rebuild is the right call, we scope it as a fixed-price Build and credit the Review fee.' },
      { id: 'after-launch', q: 'What happens after launch?', a: 'We deploy, monitor and keep improving. If you want a team to stay, Scale gives you a dedicated squad on a monthly retainer. If you’d rather take it in-house, we hand over.', link: { label: 'See Scale', to: 'scale' as const } },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. Full IP, no lock-in and a clear contract from day one. Everything we build for you is yours, so you can keep working with us, bring in another team or take it in-house whenever you choose. We stay as long as you want us to, not because you’re locked in.' },
    ],
  },
  band: {
    title: 'Get a fixed price and a date for your product',
  },
} as const;
