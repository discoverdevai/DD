// 03-copy.md §2A (Home v3, strategy v2, 2026-10-16). Verbatim. §2.3 proof strip and §2.8 case highlight (anonymized
// per §0.7) are reused from §2. The v1 Review copy lives on /launch-ready.
export const home = {
  seo: {
    title: 'Product & Engineering Partner for Founders | DiscoverDev',
    description:
      'Build the right thing, then ship it fast. The DiscoverDev Way: discover first, build with AI, seniors sign off. Senior teams, and you own it all.',
  },
  hero: {
    pill: 'AI drafts. Seniors sign off.',
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
      { icon: 'cpu', text: 'AI in production across multiple clients' },
      { icon: 'languages', text: 'Arabic and English' },
      { icon: 'map-pin', text: 'Texas, USA and Alexandria, Egypt' },
    ],
  },
  agile: {
    label: 'The DiscoverDev Way',
    bright: 'Discover first. Build with AI. Seniors sign off.',
    dim: '',
    body: 'The DiscoverDev Way is how every project runs. We agree on what is worth building before any code. AI drafts the work, so it moves fast. A senior engineer reviews every change and signs off every release, so speed never costs you quality. You see progress every week.',
    line: 'AI drafts it. A senior engineer signs it.',
    // §2A.4 journey visual (Oct 16): Discover → AI drafts → A senior signs → Live.
    flow: {
      caption: 'An illustration of the DiscoverDev Way: a rough sketch, an AI draft, a senior engineer’s sign-off, then the live product.',
      steps: [
        { title: 'Discover', line: 'We test the idea and sketch the product before any code.' },
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
    otherTitle: 'Other ways in',
    other: [
      { key: 'review', who: 'Already built something?', title: 'Launch-Ready Review', body: 'Your AI-built or freelancer-built app, reviewed by a senior team in about 5 working days. A ranked fix list and a plain verdict.', linkLabel: 'See the Review' },
      { key: 'partners', who: 'I run a software house.', title: 'Partners', body: 'White-label delivery and staff augmentation under your brand.', linkLabel: 'See Partners' },
    ],
  },
  capabilities: {
    title: 'What we build',
    lead: 'Product, engineering, AI and data in one senior team, so nothing gets lost in a handoff.',
    groups: [
      { title: 'Product', tagline: 'Decide what to build before any code.', items: ['Product strategy and discovery', 'Product design (UX/UI)', 'Market and competitor studies'] },
      { title: 'Engineering', tagline: 'Tested, deployed and kept running.', items: ['Web and mobile apps', 'APIs and enterprise systems', 'E-commerce and marketplaces', 'Legacy modernization and cloud migration', 'Quality, DevOps and cloud'] },
      { title: 'AI and data', tagline: 'AI in production, in Arabic and English.', items: ['AI agents and chatbots in Arabic and English', 'Computer vision and NLP', 'Recommendations and document processing', 'Data engineering and analytics'] },
      { title: 'Teams and advice', tagline: 'Senior people on your team or a second opinion.', items: ['Architecture reviews and code audits', 'CTO advisory', 'Dedicated teams and staff augmentation'] },
    ],
  },
  // V12 → §0.7 anonymize ("EdTech AI platform, Egypt"); quote omitted.
  caseHighlight: {
    eyebrow: 'Case study · EdTech · Egypt',
    results: ['Three AI agents in production', 'Cached content served at close to zero cost'],
    levers: [
      { title: 'Captions first', line: 'Free captions first. Paid transcription only when a video has none.' },
      { title: 'Reuse across users', line: 'Each video is processed once and shared, so repeat views cost close to nothing.' },
      { title: 'The right model for each task', line: 'Lower-cost models by default, larger ones only where they pay off.' },
      { title: 'Shorter prompts', line: 'Each request carries only what the model needs, so fewer tokens are billed.' },
      { title: 'Faster transcription', line: 'Long audio is split into 2-minute chunks and transcribed in parallel.' },
    ],
    title: 'How an EdTech AI platform cut its AI costs by 60–90%',
    body: 'An EdTech platform in Egypt runs three AI agents: a support chatbot, a video-to-lesson and quiz generator, and a student learning assistant. Every request was processed from scratch, so AI costs rose with every new student. We changed that, and now cost grows slower than the user base.',
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
      { title: 'Product-first', body: 'The “Discover” in our name is the point. Before any code, we check it’s the right thing to build, and we tell you what to cut.' },
      { title: 'Senior-led, AI-fast', body: 'Senior engineers lead every project and sign off every release. AI handles the routine work, so you get speed without the mess.' },
      { title: 'We stay', body: 'One team from first call to launch and after, with no handoff gaps. Four clients expanded scope with us.' },
      { title: 'You own it all', body: 'Full IP, no lock-in and a clear contract from day one.' },
    ],
  },
  // §2A.8b–d (Oct 16): selected work, client reviews (quotes approved by Mohamed with names and roles, D-05), guides.
  work: {
    label: 'Selected work',
    title: 'More products we’ve helped build',
    allLink: 'See all our work',
    items: [
      { stage: 'Build', href: '/work/edtech-ai-agents', what: "AI agents for an EdTech platform", where: 'Egypt', proof: "Three AI agents in production. AI costs down 60–90%." },
      { stage: 'Build', href: '/build', what: "AR furniture store with AI recommendations", where: 'Saudi Arabia', proof: "Market study, design, build, AI and AR in one team." },
      { stage: 'Build', href: '/build', what: "Customer-support AI agent", where: '', proof: "Identical questions answered once, so AI cost follows unique questions, not total requests." },
      { stage: 'Scale', href: '/scale', what: "Embedded product team for a B2B learning platform", where: 'UK', proof: "12 months owning the roadmap, backlog and sprints." },
      { stage: 'Scale', href: '/scale', what: "Data and ML for an EdTech platform with 20,000+ students", where: 'Egypt', proof: "Data engineering, ML and automations." },
      { stage: 'Validate', href: '/validate', what: "Feasibility sprints across several startup ideas", where: 'Saudi Arabia', proof: "Each sprint ends in a build, pivot or shelve decision." },
    ],
  },
  reviews: {
    label: 'What clients say',
    title: 'Verified reviews from founders and teams',
    items: [
      { quote: "Perfect timing, always available for any questions or concerns, great professionalism. The job was done perfectly, and it was on point, giving us the info we needed. 100% recommendable.", name: "Roberto", role: "Fantacalcio", service: "Market research · Fantasy football" },
      { quote: "They focused on building solutions that were practical, scalable, and aligned with our users’ needs.", name: "Youssef", role: "CEO, EduLens", service: "AI agents · EdTech" },
      { quote: "The quality of their work is top-notch.", name: "CEO", role: "Nile Support, USA", service: "AI agents, website and staff augmentation" },
      { quote: "Thank you for going above and beyond.", name: "Farah Alkhaldi", role: "Consulting firm, Kuwait", service: "Market research · Tourism and hospitality" },
      { quote: "Professional work and great communication.", name: "Nojoud Alarfaj", role: "Athkado, Saudi Arabia", service: "White-label and e-commerce" },
      { quote: "Absolutely amazing! I am very, very pleased with the level of detail that was delivered!", name: "Michelle Boehm", role: "Academic researcher, Switzerland", service: "ML algorithms and data analysis" },
      { quote: "I will become a regular customer going forward now.", name: "Andrei Chejneanu", role: "Entrepreneur, UK", service: "Market research · Saudi Arabia expansion" },
      { quote: "You are doing great, I highly appreciate it! Thankful for completing such work in such a short period of time.", name: "Lea Nechitailo", role: "Entrepreneur, Spain", service: "Market research · Brand expansion" },
    ],
  },
  guides: {
    label: 'Guides and tools',
    title: 'Read before you build',
    readLabel: 'Read the guide',
    check: { title: 'Take the launch check', body: '10 questions about your AI-built or freelancer-built app. See what to fix before real users arrive.', cta: 'Start the check' },
  },
  faq: {
    title: 'Questions founders ask us',
    items: [
      { id: 'ai', q: 'How do you use AI? Is the code safe?', a: 'Yes. AI drafts code, tests and documentation. Senior engineers make the decisions, review every change and sign off each release. A person is responsible for every line that reaches your users.' },
      { id: 'pricing', q: 'How does pricing work?', a: 'Validate is a fixed fee, credited toward Build. Build is a fixed price for an agreed scope. Scale is a monthly retainer. You get a number after a free 30-minute clarity call, before you commit to anything.' },
      { id: 'timeline', q: 'How long does it take to build an MVP?', a: 'Validate takes 1–2 weeks and ends with a clickable prototype and a fixed build estimate. Build takes 8–12 weeks to a production-ready product with real users, with a demo for you every week.' },
      { id: 'way', q: 'What is the DiscoverDev Way?', a: 'It is how every DiscoverDev project runs. We agree on the right product first, AI drafts the work, and a senior engineer reviews every change and signs off every release. You see progress every week.' },
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
