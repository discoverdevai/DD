// 03-copy.md §2A (Home v3, strategy v2, 2026-10-16). Verbatim. §2.3 proof strip and §2.8 case highlight (anonymized
// per §0.7) are reused from §2. The v1 Review copy lives on /launch-ready.
export const home = {
  seo: {
    title: 'Product & Engineering Partner for Founders | DiscoverDev',
    description:
      'Build the right thing, then ship it fast. The DiscoverDev Way: discover first, build with AI, seniors sign off. Senior teams, and you own it all.',
  },
  hero: {
    pill: 'The DiscoverDev Way · senior-signed',
    h1: 'Build the right thing. Ship it fast.',
    sub: 'A product and engineering company for founders and teams. Senior people, AI-accelerated, without cutting corners. And you own everything.',
  },
  proofStrip: {
    title: 'Who we work with',
    items: [
      { icon: 'globe', text: 'Clients on 4 continents' },
      { icon: 'cpu', text: 'AI in production across multiple clients' },
      { icon: 'languages', text: 'Arabic and English' },
      { icon: 'map-pin', text: 'Texas, USA and Alexandria, Egypt' },
    ],
  },
  agile: {
    label: 'The DiscoverDev Way',
    bright: 'Discover first. Build with AI. Seniors sign off.',
    dim: '',
    body: 'The DiscoverDev Way is how every project runs. We find the right thing to build first. AI does the heavy lifting, so work that used to take days moves faster. Senior engineers make the decisions, review every change and sign off every release. You see results every week.',
    line: 'AI drafts it. A senior engineer signs it.',
    // §2A.4 journey visual (Oct 16): Discover → AI drafts → A senior signs → Live.
    flow: {
      caption: 'An illustration of the DiscoverDev Way: a rough sketch, an AI draft, a senior engineer’s sign-off, then the live product.',
      steps: [
        { title: 'Discover', line: 'The right thing, sketched first.' },
        { title: 'AI drafts', line: 'AI drafts it from the agreed spec.' },
        { title: 'A senior signs', line: 'A senior engineer signs off every release.' },
        { title: 'Live', line: 'Live with real users.' },
      ],
      tag: 'AI draft',
      checks: ['Review of every change', 'Security, data and payments', 'Sign-off on every release'],
      stamp: 'Signed off',
      live: 'Live',
    },
  },
  lifecycle: {
    eyebrow: 'idea to after launch',
    title: 'One team from idea to after launch',
    steps: [
      { title: 'Discover', body: 'Define the right product to build, not just the one asked for.' },
      { title: 'Plan', body: 'Roadmap, tech decisions and team, before any code.' },
      { title: 'Build', body: 'Weekly sprints. AI accelerates, seniors sign off. Results every week.', chips: [{ kind: 'ai', label: 'AI-accelerated' }, { kind: 'human', label: 'Senior sign-off' }] },
      { title: 'Ship & Stay', body: 'Deploy, monitor, keep improving. We stay after launch.' },
    ],
    line: 'One team, no handoff gaps.',
  },
  engagements: {
    title: 'Three ways to work with us',
    lead: 'Start where you are. Validate’s fee credits toward Build.',
    cards: [
      { key: 'validate', who: 'I have an idea.', title: 'Validate', meta: ['1–2 weeks', 'Fixed fee'], body: 'Market and competitor read, product scope, a clickable prototype and a fixed build estimate.', linkLabel: 'See Validate' },
      { key: 'build', who: 'I’m ready to build.', title: 'Build', meta: ['8–12 weeks', 'Fixed price'], body: 'A production-ready product with real users. Design, build, QA and deployment.', linkLabel: 'See Build' },
      { key: 'scale', who: 'It’s working. Grow it.', title: 'Scale', meta: ['Ongoing', 'Monthly retainer'], body: 'A dedicated squad of developers, QA and a PM that owns the roadmap with you. You keep control.', linkLabel: 'See Scale' },
    ],
    otherTitle: 'Other ways in',
    other: [
      { key: 'review', who: 'Already built something?', title: 'Launch-Ready Review', body: 'Your AI-built or freelancer-built app, reviewed by a senior team in about 5 working days. A ranked fix list and a plain verdict.', linkLabel: 'See the Review' },
      { key: 'partners', who: 'I run a software house.', title: 'Partners', body: 'White-label delivery and staff augmentation under your brand.', linkLabel: 'See Partners' },
    ],
  },
  capabilities: {
    title: 'What we build',
    lead: 'Nine service lines. One delivery team.',
    groups: [
      { title: 'Product', tagline: 'Find the right thing to build.', items: ['Product strategy and discovery', 'Product design (UX/UI)', 'Market and competitor studies'] },
      { title: 'Engineering', tagline: 'Build it to last.', items: ['Web and mobile apps', 'APIs and enterprise systems', 'E-commerce and marketplaces', 'Legacy modernization and cloud migration', 'Quality, DevOps and cloud'] },
      { title: 'AI and data', tagline: 'AI that works in production.', items: ['AI agents and chatbots in Arabic and English', 'Computer vision and NLP', 'Recommendations and document processing', 'Data engineering and analytics'] },
      { title: 'Teams and advice', tagline: 'Senior people when you need them.', items: ['Architecture reviews and code audits', 'CTO advisory', 'Dedicated teams and staff augmentation'] },
    ],
  },
  // V12 → §0.7 anonymize ("EdTech AI platform, Egypt"); quote omitted.
  caseHighlight: {
    title: 'How an EdTech AI platform cut its AI costs by 60–90%',
    body: 'An EdTech AI platform in Egypt runs three AI agents: a support chatbot, a video-to-lesson and quiz generator, and a student learning assistant. We changed how they read videos, reused answers across users and sent each task to the right model. AI costs fell by 60–90%.',
    metric: '60–90%',
    metricLabel: 'lower AI cost',
    stack: ['Python', 'OpenAI', 'LangChain', 'Whisper'],
    link: 'Read the case study',
    allLink: 'See all our work', // 03 §0.8
  },
  why: {
    title: 'Why founders and teams choose DiscoverDev',
    leadBright: 'Most teams just build what you ask for.',
    leadDim: 'We help you build the right thing, then ship it fast, and you own all of it.',
    pillars: [
      { title: 'Product-first', body: 'The “Discover” in our name is the point. Before we write code, we check it’s the right thing to build, and we say what to cut.' },
      { title: 'Senior teams, AI-accelerated', body: 'AI does the heavy lifting. Senior engineers own the quality. You get the speed without the mess that usually comes with it.' },
      { title: 'We stay', body: 'One team from first call to launch and after. No handoff gaps. Four clients expanded scope with us.' },
    ],
    small: 'You own everything: full IP, no lock-in, clear contract from day one.',
  },
  faq: {
    title: 'Questions founders ask us',
    items: [
      { id: 'ai', q: 'How do you use AI? Is the code safe?', a: 'AI does the heavy lifting: drafting code, tests and documentation. Senior engineers make the decisions, review every change and sign off each release. A person is responsible for every line that reaches your users.' },
      { id: 'pricing', q: 'How does pricing work?', a: 'Validate is a fixed fee, credited toward Build. Build is a fixed price for an agreed scope. Scale is a monthly retainer. You get a number after a free 30-minute clarity call, before you commit to anything.' },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. You own everything we build: full IP, no lock-in, and a clear contract from day one. Your code stays in your own repository and accounts. If you stop working with us, you keep everything, and your own team or another developer can carry on.' },
      { id: 'take-over', q: 'We already built something with AI or a freelancer. Can you take it over?', a: 'Yes. Start with a Launch-Ready Review. A senior team reviews it in about 5 working days and tells you what to keep, fix or replace, and why. Then we fix it or build it properly.', link: { label: 'Read the guide to taking an AI-built app to production', to: 'pillar' as const } }, // 03 §0.8
      { id: 'stacks', q: 'Which tools and stacks do you work with?', a: 'React, Next.js, Node.js, Python, Spring Boot, React Native, Flutter, PostgreSQL, AWS, GCP and Azure. For AI: OpenAI, LangChain, RAG, computer vision and NLP.' },
      { id: 'time-zones', q: 'Your team is in Egypt. Will time zones be a problem?', a: 'Our engineering hub is in Alexandria, Egypt (GMT+2). Our working day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English, and we have a presence in Texas, USA. You choose a call time that suits you.' },
    ],
  },
  band: {
    title: 'Tell us what you’re building.',
    body: '30 minutes, no pitch. You leave with a next step, even if we’re not the right fit.',
  },
} as const;
