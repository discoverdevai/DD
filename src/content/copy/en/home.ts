// 03-copy.md §2A (Home v3, strategy v2, 2026-10-16). Verbatim. §2.3 proof strip and §2.8 case highlight (anonymized
// per §0.7) are reused from §2. The v1 Review copy lives on /launch-ready.
export const home = {
  seo: {
    title: 'Product & Engineering Partner for Founders | DiscoverDev',
    description:
      'Build the right thing, then ship it fast. The DiscoverDev Way: discover first, build with AI, seniors sign off. Senior teams, and you own it all.',
  },
  hero: {
    ogEyebrow: 'AI drafts. Seniors sign off.', // share image only; the on-page pill was removed Oct 18
    h1: 'Turn your idea into a live product in weeks.',
    h1Accent: 'a live product',
    sub: 'DiscoverDev builds it with senior engineers and AI, in 8⁠–⁠12 weeks. You own everything.',
  },
  proofStrip: {
    // §2A.3 facts map (09 countries).
    map: {
      label: 'Map of where we work: clients in North America, Europe, Africa and Asia, with teams in Texas, USA and Alexandria, Egypt.',
      legendWorked: 'Countries we’ve worked in',
      // One marker per client country (09); [name, lat, lon] at a main city.
      pins: [
        ['USA', 40.7, -74], ['United Kingdom', 51.5, -0.1], ['Ireland', 53.3, -6.3], ['Spain', 40.4, -3.7],
        ['Switzerland', 47.4, 8.5], ['Italy', 41.9, 12.5], ['Saudi Arabia', 24.7, 46.7], ['Kuwait', 29.4, 48], ['Egypt', 30, 31.2],
      ] as ReadonlyArray<readonly [string, number, number]>,
      legendHome: 'Our teams: Texas and Alexandria',
    },
    title: 'What we’ve built',
    logosTitle: 'Teams we’ve built for',
    // §2A.3 one line per client card (09).
    clientRoles: {
      'edulens': 'EdTech AI platform · Egypt',
      'upscend': 'B2B learning platform · UK',
      'arheb': 'Ride-sharing ML · Saudi Arabia',
      'nile-support': 'AI call operations · USA',
      'biobank': 'HealthTech app',
      'jumlaty': 'Restaurant procurement · Saudi Arabia',
      'rushr': 'Home-services marketplace · USA',
      'zest': 'Market study',
      'ctc': 'Speech therapy practice · USA',
      'yawmy-care': 'Childcare platform · our product',
    } as Record<string, string>,
    // §2A.3 project cards (anonymized, facts in 09). Shown until 4+ client logos have written consent.
    projects: [
      { stage: 'Build', href: '/work/edtech-ai-agents', what: 'AI agents for an EdTech platform', where: 'Egypt', proof: 'Three AI agents in production. AI costs down 60–90%.' },
      { stage: 'Build', href: '/build', what: 'AR furniture store with AI recommendations', where: 'Saudi Arabia', proof: 'Market study, design, build, AI and AR in one team.' },
      { stage: 'Scale', href: '/scale', what: 'Embedded product team for a B2B learning platform', where: 'UK', proof: '12 months owning the roadmap, backlog and sprints.' },
      { stage: 'Scale', href: '/scale', what: 'Data and ML for an EdTech platform with 20,000+ students', where: 'Egypt', proof: 'Data engineering, ML and automations.' },
    ],
    items: [
      { icon: 'globe', text: 'Clients on 4 continents' },
      { icon: 'check', text: 'Four clients expanded scope with us' },
    ],
  },
  agile: {
    label: 'The DiscoverDev Way',
    bright: 'Discover first. Build with AI. Seniors sign off.',
    dim: '',
    body: 'The DiscoverDev Way is how every project runs. AI drafts the work, so it moves fast. A senior engineer reviews every change and signs off every release, so speed never costs you quality.',
    line: 'AI drafts it. A senior engineer signs it.',
    // §2A.4 journey visual (Oct 16): Discover → AI drafts → A senior signs → Live.
    flow: {
      caption: 'An illustration of the DiscoverDev Way: a rough sketch, an AI draft, a senior engineer’s sign-off, then the live product.',
      steps: [
        { title: 'Discover', line: 'We test the idea, sketch the product and tell you what to cut, before any code.' },
        { title: 'AI drafts', line: 'AI writes the first draft from the agreed spec.' },
        { title: 'A senior signs', line: 'A senior engineer reviews it and signs it off.' },
        { title: 'Live', line: 'Your users get it, and we keep improving it.' },
      ],
      tag: 'AI draft',
      checks: ['Review of every change', 'Security, data and payments', 'Sign-off on every release'],
      stamp: 'Signed off',
      live: 'Live',
    },
  },
  lifecycle: {
    eyebrow: 'How a project runs',
    title: 'One team from idea to after launch',
    lead: 'New product or existing code, greenfield or brownfield, the same four steps apply. With existing code, Discover starts with a review of what you have.',
    steps: [
      { title: 'Discover', when: '1–2 weeks', body: 'Market read, product scope and a clickable prototype.', gets: 'A tested prototype and a fixed build estimate.', tools: [{ name: 'Jobs to be Done', what: 'Find the job users hire the product to do.' }, { name: 'Design Sprint', what: 'Test a clickable prototype with users early.' }] },
      { title: 'Plan', when: 'Before any code', body: 'Roadmap, tech decisions and team, agreed before any code.', gets: 'A release plan and written tech decisions.', tools: [{ name: 'User Story Mapping', what: 'The user journey, split into releases.' }, { name: 'Shape Up', what: 'Fixed time, flexible scope.' }, { name: 'RICE', what: 'Rank features by reach, impact, confidence and effort.' }, { name: 'ADRs', what: 'A written record of each tech decision.' }] },
      { title: 'Build', when: '8–12 weeks', body: 'Weekly sprints, with a demo for you every week.', gets: 'A production-ready product, signed off by a senior engineer.', tools: [{ name: 'Weekly sprints', what: 'Plan, build and demo every week.' }, { name: 'Definition of Done', what: 'A shared checklist before anything counts as done.' }] },
      { title: 'Ship & Stay', when: 'Ongoing', body: 'Deploy, monitor and keep improving. The same team stays after launch.', gets: 'A live product that keeps improving, with the same team.', tools: [{ name: 'DORA metrics', what: 'How often and how safely we ship.' }, { name: 'Continuous discovery', what: 'Keep talking to users after launch.' }, { name: 'HEART metrics', what: 'Happiness, engagement, adoption, retention, task success.' }] },
    ],
    getsLabel: 'You get',
    line: 'One team, no handoff gaps.',
  },
  engagements: {
    title: 'Three ways to work with us',
    lead: 'Start where you are. Validate’s fee credits toward Build.',
    cards: [
      { key: 'validate', who: 'I have an idea.', title: 'Validate', kind: 'Product discovery', meta: ['1–2 weeks', 'Fixed fee'], body: 'Market and competitor read, product scope, a clickable prototype and a fixed build estimate.', linkLabel: 'See Validate' },
      { key: 'build', who: 'I’m ready to build.', title: 'Build', kind: 'MVP development', meta: ['8–12 weeks', 'Fixed price'], body: 'A live product with real users: design, build, QA and deployment, with a demo for you every week.', linkLabel: 'See Build' },
      { key: 'scale', who: 'It’s working. Grow it.', title: 'Scale', kind: 'Dedicated product team', meta: ['Ongoing', 'Monthly retainer'], body: 'A dedicated squad of developers, QA and a PM that owns the roadmap with you. You keep control.', linkLabel: 'See Scale' },
    ],
    scope: { label: 'What we build', text: 'Web and mobile apps, AI agents and chatbots in Arabic and English, APIs and enterprise systems, data and cloud.' },
    otherTitle: 'Other ways in',
    other: [
      { key: 'review', who: 'Already built something?', title: 'Launch-Ready Review', body: 'Your AI-built or freelancer-built app, reviewed by a senior team in about 5 working days. A ranked fix list and a plain verdict.', linkLabel: 'See the Review' },
      { key: 'partners', who: 'I run a software house.', title: 'Partners', body: 'White-label delivery and staff augmentation under your brand.', linkLabel: 'See Partners' },
    ],
  },
  reviews: {
    title: 'Verified reviews from founders and teams',
    cta: true,
    items: [
      { quote: "They focused on building solutions that were practical, scalable, and aligned with our users’ needs.", name: "Youssef", role: "CEO, EduLens", service: "Build · AI agents · EdTech", result: "Three AI agents in production. AI costs down 60–90%." },
      { quote: "The quality of their work is top-notch.", name: "CEO", role: "Nile Support, USA", service: "Build · AI agents, website and staff augmentation" },
      { quote: "Professional work and great communication.", name: "Nojoud Alarfaj", role: "Athkado, Saudi Arabia", service: "Build · White-label and e-commerce" },
      { quote: "Absolutely amazing! I am very, very pleased with the level of detail that was delivered!", name: "Michelle Boehm", role: "Academic researcher, Switzerland", service: "Research · ML algorithms and data analysis" },
      { quote: "Perfect timing, always available for any questions or concerns, great professionalism. The job was done perfectly, and it was on point, giving us the info we needed. 100% recommendable.", name: "Roberto", role: "Fantacalcio", service: "Validate · Market research · Fantasy football" },
      { quote: "Thank you for going above and beyond.", name: "Farah Alkhaldi", role: "Consulting firm, Kuwait", service: "Validate · Market research · Tourism and hospitality" },
      { quote: "I will become a regular customer going forward now.", name: "Andrei Chejneanu", role: "Entrepreneur, UK", service: "Validate · Market research · Saudi Arabia expansion" },
      { quote: "You are doing great, I highly appreciate it! Thankful for completing such work in such a short period of time.", name: "Lea Nechitailo", role: "Entrepreneur, Spain", service: "Validate · Market research · Brand expansion" },
    ],
  },
  guides: {
    title: 'Free guides and a launch check',
    readLabel: 'Read the guide',
    allLabel: 'All guides',
    check: { title: 'Take the launch check', body: '10 questions about your AI-built or freelancer-built app. See what to fix before real users arrive.', cta: 'Start the check' },
  },
  faq: {
    title: 'Questions founders ask us',
    items: [
      { id: 'ai', q: 'How do you use AI? Is the code safe?', a: 'Yes. AI drafts code, tests and documentation. Senior engineers make the decisions, review every change and sign off each release. A person is responsible for every line that reaches your users.' },
      { id: 'pricing', q: 'How does pricing work?', a: 'Validate is a fixed fee, credited toward Build. Build is a fixed price for an agreed scope. Scale is a monthly retainer. You get a number after a free 30-minute clarity call, before you commit to anything.' },
      { id: 'timeline', q: 'How long does it take to build an MVP?', a: 'Validate takes 1–2 weeks and ends with a clickable prototype and a fixed build estimate. Build takes 8–12 weeks to a production-ready product with real users, with a demo for you every week.' },
      { id: 'way', q: 'What is the DiscoverDev Way?', a: 'It is how every DiscoverDev project runs: we agree on the right product first, AI drafts the work, and a senior engineer signs off every release.' },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. You own everything we build: full IP, no lock-in, and a clear contract from day one. Your code stays in your own repository and accounts. If you stop working with us, you keep everything, and your own team or another developer can carry on.' },
      { id: 'take-over', q: 'We already built something with AI or a freelancer. Can you take it over?', a: 'Yes. Start with a Launch-Ready Review. A senior team reviews it in about 5 working days and tells you what to keep, fix or replace, and why. Then we fix it or build it properly.', link: { label: 'Read the guide to taking an AI-built app to production', to: 'pillar' as const } }, // 03 §0.8
      { id: 'stacks', q: 'Which tools and stacks do you work with?', a: 'React, Next.js, Node.js, Python, Spring Boot, React Native, Flutter, PostgreSQL, AWS, GCP and Azure. For AI: OpenAI, LangChain, RAG, computer vision and NLP.' },
      { id: 'time-zones', q: 'Your team is in Egypt. Will time zones be a problem?', a: 'Our engineering hub is in Alexandria, Egypt (GMT+2). Our working day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English, and we have a presence in Texas, USA. You choose a call time that suits you.' },
    ],
  },
  band: {
    title: 'Tell us what you’re building.',
    body: 'Bring an idea, a prototype or a product that needs a team. We’ll tell you where to start, even if we’re not the right fit.',
  },
} as const;
