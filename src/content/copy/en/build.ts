// 03-copy.md §16b.1 + §16b.6 (/build, lean R1; home-style redesign Oct 26 from docs/research-sitemap/build-page-inspiration.md).
// Build absorbs Validate (§5) and the Launch-Ready Review (§3). Seven sections: hero (with the two ways in) → the plan
// (Validate and Build on one timeline) → AI-built prototype (Review) → what you get and terms → proof → FAQ → close.
import { shared } from './shared';
export const build = {
  seo: {
    title: 'MVP Development Company for Gulf Startups | DiscoverDev',
    description:
      'From idea to a live MVP in 8–12 weeks: 1–2 weeks of Validate, then a fixed-price Build by a senior team. Have an AI-built prototype? We review it first.',
  },
  hero: {
    eyebrow: 'I have an idea, or a prototype.',
    h1: 'Build: from idea to a live MVP',
    body: 'Start with 1–2 weeks of Validate. Then a senior team designs, builds, tests and deploys your MVP in 8–12 weeks, at a fixed price. You launch with real users, and you own all of it.',
    // The two ways in (research: Designli, MetaCTO route by situation in the hero).
    ways: [
      { anchor: 'process', label: 'New idea? Validate first' },
      { anchor: 'review', label: 'Built it with AI? Review it first' },
    ],
    // Hero window (research: Halo Lab's week ranges). Every string is already on the page.
    path: {
      name: 'your-product / plan',
      title: 'Your path',
      validate: { title: 'Validate', meta: '1–2 weeks' },
      build: { title: 'Build', meta: '8–12 weeks' },
      live: { title: 'Live', meta: 'Real users' },
      ai: 'AI drafts the work',
      senior: 'A senior engineer signs off every release',
      facts: ['Fixed price', 'Your repo, your cloud', 'Arabic and English'],
    },
  },
  // One timeline (research: Halo Lab's track; merge of the decision board and the week track).
  plan: {
    title: 'One plan, from idea to real users.',
    example: 'Example: 2 weeks of Validate and a 10-week Build. Your exact plan is set before we start.',
    weeks: 12,
    weekLabel: 'Week',
    demoLabel: 'Weekly demo with you',
    signLabel: 'Signed off by a senior engineer',
    liveLabel: 'Live with real users',
    phases: [
      { title: 'Validate', body: 'A market read, a product scope, a clickable prototype and a fixed build estimate. Then you decide.' },
      { title: 'Plan', body: 'Roadmap, tech choices and team agreed before any code.' },
      { title: 'Build', body: 'Sprints with results every week. AI does the heavy lifting. Senior engineers own the quality.', chip: { kind: 'ai', label: 'AI-accelerated' } },
      { title: 'Ship and stay', body: 'Deploy, monitor and keep improving. The same team stays after launch if you want it to.' },
    ],
    spans: [
      { from: 1, to: 2, label: 'Weeks 1–2' },
      { from: 3, to: 3, label: 'Week 3' },
      { from: 4, to: 11, label: 'Weeks 4–11' },
      { from: 12, to: 12, label: 'Week 12 and after', open: true },
    ],
    fork: {
      label: 'After Validate, you decide',
      options: ['Build', 'Change direction', 'Stop'],
      note: 'The Validate fee credits toward the Build.',
    },
  },
  review: {
    title: 'Built it with Lovable, Bolt or Cursor? Review it first.',
    body: 'Before real users, real data and real payments touch it, a senior team checks what will break. In about 5 working days you get a ranked fix list, a plain verdict and a fixed quote.', // §3.1
    facts: [
      { value: '$1,490', label: 'Reviews start from' },
      { value: '5 days', label: 'About, in working days' },
    ],
    guarantee: 'No useful findings, no charge.', // §3.8
    credit: 'The full fee is credited toward the fix or a Build with us.', // §3.7
    // Research: Red Leg's code diff, MetaCTO's code card. An example, not a client.
    finding: {
      label: 'Example finding, not a client',
      severity: 'Critical',
      area: 'Access and security',
      lines: [
        { kind: 'del', text: 'const key = "sk_live_…"     // in browser code' },
        { kind: 'add', text: 'const key = env.PAYMENTS_KEY // server only' },
        { kind: 'ctx', text: 'return db.from("orders")' },
        { kind: 'del', text: '  .select("*")                 // every user’s orders' },
        { kind: 'add', text: '  .select("*").eq("user_id", user.id)' },
      ],
      caption: 'Example of a Review finding: a secret key moved to the server, and orders filtered to the signed-in user',
      verdictLabel: 'Verdict',
      verdict: 'Fix, don’t rebuild',
    },
  },
  // One statement of work (research: Ramotion's deliverables beside the investment).
  terms: { title: 'What you get, and on what terms', docTitle: 'Build', docMeta: 'Agreed before we start' },
  gets: {
    title: 'You get',
    body: 'A live product with real users: product design (UX and UI), web, mobile and APIs, QA and testing, deployment to your cloud, and weekly results you can see and use.',
  },
  timeline: {
    title: 'Timeline',
    body: '8–12 weeks from agreed scope to real users, fixed in your plan before we start. Validate, if you need it, takes 1–2 weeks first.',
  },
  pricing: {
    title: 'Price',
    answer:
      'Validate is a fixed fee, agreed before we start. Every Build has a fixed price, set from a clear scope that comes from Validate, a Launch-Ready Review or our own scoping. Validate and Review fees credit toward the Build.',
  },
  team: {
    title: 'Team',
    body: 'A full squad: a tech lead, developers, QA, a product manager and a designer. Senior engineers own the quality, and a person is responsible for every line that reaches your users. The team that scopes your product builds it.',
    link: { label: shared.howLink, to: 'howWeWork' as const },
  },
  ownership: {
    title: 'Ownership',
    body: 'Full IP, no lock-in and a clear contract from day one. Your code lives in your repository and your cloud accounts. When we hand over, another developer can pick it up.',
  },
  proof: {
    title: 'Work from idea to launch',
    // EduLens (09, D-06): one sourced number as the headline (research: Netguru's case card).
    case: {
      label: 'Case',
      name: 'EduLens',
      where: 'EdTech platform, Egypt',
      result: '60–90% lower AI cost',
      big: { value: '60–90%', label: 'lower AI cost at EduLens' },
      body: 'Three AI agents in production: a support chatbot, video-to-lesson and quiz generation, and a student assistant. Cost used to grow with every user. Now each video is processed once.',
      chartTitle: 'AI cost, before and after (before = 100)',
      before: 'Before',
      after: 'After',
      beforeValue: '100',
      afterValue: '10 to 40',
      note: 'The range depends on how often the cache is hit and whether a video has captions.',
      changesTitle: 'What changed',
      changes: [
        'Free captions first, paid transcription only when missing',
        'Summaries and quizzes cached and shared across users',
        'Model routing: a lower-cost default, premium only when needed',
        'Token trimming',
        'Long audio split into chunks and transcribed in parallel',
      ],
      quote: { text: 'They focused on building solutions that were practical, scalable, and aligned with our users’ needs.', name: 'Youssef', role: 'CEO, EduLens' },
    },
    quote: { text: 'Professional work and great communication.', name: 'Nojoud Alarfaj', role: 'Athkado, Saudi Arabia' },
    items: [
      { title: shared.projectArFurniture, where: 'Saudi Arabia', body: 'Feasibility sprints, then the build: discovery, UX and UI, development, an AI recommendation engine and AR to see furniture at home.' },
      { title: 'Entrepreneurs in Kuwait, Switzerland, the UK and Spain', body: shared.projectFoundersDid },
    ],
  },
  // Buyer order (research: Halo Lab, Stormotion, Wavect FAQs): cost and time first.
  faq: {
    title: 'Questions about Build',
    items: [
      { id: 'pricing', q: 'How much does an MVP cost?', a: 'DiscoverDev prices an MVP as a fixed price for an agreed scope. We don’t publish a price list: you get your number after a free 30-minute clarity call, before you commit to anything. Validate (1–2 weeks) is a fixed fee credited toward Build. Build (8–12 weeks) is a fixed price. Scale is a monthly retainer.' },
      { id: 'timeline', q: shared.mvpTimeQ, a: 'A Build takes 8–12 weeks from agreed scope to a live, production-ready product with real users. The exact timeline depends on the scope and is fixed in your plan before we start. You see working results every week, not only at the end.' },
      { id: 'fixed-price', q: 'How do you keep the price fixed?', a: 'We agree a clear scope before we start, then price that scope. Discover and Plan come first: we define the product, the roadmap, the tech and the team before any code, so the price rests on a scope we both understand. You see results every week, so progress against that scope is never a surprise.' },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. Full IP, no lock-in and a clear contract from day one. Everything we build for you is yours, so you can keep working with us, bring in another team or take it in-house whenever you choose. We stay as long as you want us to, not because you’re locked in.' },
      { id: 'take-over', q: 'Can you take over my AI-built or freelancer-built prototype?', a: 'Yes. Start with a Launch-Ready Review. It tells you what to keep and what to replace. If a rebuild is the right call, we scope it as a fixed-price Build and credit the Review fee.' },
      { id: 'what-is-mvp', q: 'What is an MVP?', a: 'An MVP (minimum viable product) is the smallest version of your product that real users can use. It does the one job your users need, does it well, and leaves the rest for later. We build it in 8–12 weeks, at a fixed price.' },
      { id: 'after-launch', q: 'What happens after launch?', a: 'We deploy, monitor and keep improving. If you want a team to stay, Scale gives you a dedicated squad on a monthly retainer. If you’d rather take it in-house, we hand over.', link: { label: 'See Scale', to: 'scale' as const } },
    ],
  },
  // Research: thoughtbot ends on a question.
  band: {
    title: 'What must your first version do?',
    body: 'Tell us on a free 30-minute call. You leave with a clear next step, and a fixed price if it is a fit.',
  },
} as const;
