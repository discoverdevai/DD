// 03-copy.md §2A (Home v3, strategy v2, 2026-10-16). Verbatim. §2.3 proof strip and §2.8 case highlight (anonymized
// per §0.7) are reused from §2. The v1 Review copy lives on /launch-ready.
import { shared } from './shared';
export const home = {
  seo: {
    title: 'DiscoverDev | Product Development for Gulf Startups',
    description:
      'DiscoverDev builds products for startups in Saudi Arabia, Kuwait and the Gulf: discovery, fixed-price MVPs in 8–12 weeks, dedicated teams. You own it.',
  },
  hero: {
    ogEyebrow: 'AI drafts. Seniors sign off.', // share image only; the on-page pill was removed Oct 18
    h1: 'Turn your idea into a live product in weeks.',
    h1Accent: 'a live product',
    sub: 'DiscoverDev builds it with senior engineers and AI. Build takes 8–12 weeks, and you own everything.',
  },
  proofStrip: {
    // §2A.3 facts map (09 countries).
    map: {
      label: 'Map of where we work: clients in North America, Europe, Africa and Asia, with a presence in Texas, USA and our engineering hub in Alexandria, Egypt.',
      legendWorked: 'Countries we’ve worked in',
      // One marker per client country (09); [name, lat, lon] at a main city.
      pins: [
        ['USA', 40.7, -74], ['United Kingdom', 51.5, -0.1], ['Spain', 40.4, -3.7],
        ['Switzerland', 47.4, 8.5], ['Italy', 41.9, 12.5], ['Saudi Arabia', 24.7, 46.7], ['Kuwait', 29.4, 48], ['Egypt', 30, 31.2],
      ] as ReadonlyArray<readonly [string, number, number]>,
      legendHome: 'Where we are: Texas, USA and Alexandria, Egypt (engineering hub)',
    },
    title: 'What we’ve built',
    logosTitle: 'Teams we’ve worked with',
    // §2A.3 one line per client card (09).
    clientRoles: {
      'edulens': 'EdTech AI platform · Egypt',
      'upscend': 'B2B learning platform · UK',
      'arheb': 'Ride-sharing ML · Saudi Arabia',
      'nile-support': 'AI call operations · USA',
      'biobank': 'HealthTech app',
      'pyramakerz': 'EdTech data and ML · Egypt',
      'jumlaty': 'Restaurant procurement · Saudi Arabia',
      'zest': 'Market study',
      'ctc': 'Speech therapy practice · USA',
      'rushr': 'Home-services marketplace · USA',
      'yawmy-care': 'Childcare platform · our product',
    } as Record<string, string>,
    // §2A.3 project cards (anonymized, facts in 09). Shown until 4+ client logos have written consent.
    projects: [
      { stage: 'Build', href: '/work/edtech-ai-agents', what: 'AI agents for EduLens, an EdTech platform', where: 'Egypt', proof: 'Three AI agents in production. AI costs down 60–90%.' },
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
    body: 'The DiscoverDev Way is how every project runs. AI drafts the work, so it moves fast. A senior engineer signs off every release, so speed never costs you quality.',
    line: 'AI drafts it. A senior engineer signs it.',
    // §2A.4 journey visual (Oct 16): Discover → AI drafts → A senior signs → Live.
    flow: {
      caption: 'An illustration of the DiscoverDev Way: a rough sketch, an AI draft, a senior engineer’s sign-off, then the live product.',
      steps: [
        { title: 'Discover', line: 'The right thing, sketched first.' },
        { title: 'AI drafts', line: 'AI writes the first draft from the agreed spec.' },
        { title: 'A senior signs', line: 'A senior engineer signs off the release.' },
        { title: 'Live', line: 'Your users get it, and we keep improving it.' },
      ],
      tag: 'AI draft',
      // Oct 29 (03 §16b.44): step 3 shows a page of the review log: the senior's note, the fix, the sign-off.
      review: { badge: 'SE', who: 'Senior · review', note: 'Keys move to the server. Then it ships.', code: ['- key in browser code', '+ key on the server'] },
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
  // 03 §16b.32 (Oct 29, Mohamed): "Where are you starting from?" replaces the engagement cards. Facts from the cards below (09 Offer).
  quiz: {
    title: 'Where are you starting from?',
    lead: 'One or two quick questions. You see your best start right away, and the free call confirms it.',
    straight: 'Or go straight to',
    q1Step: 'Question 1',
    q1: 'Where are you today?',
    starts: [
      { id: 'idea', label: 'I have an idea' },
      { id: 'built', label: 'I already built something' },
      { id: 'live', label: 'My product is live and working' },
      { id: 'house', label: 'We are a software house' },
    ],
    q2Step: 'Last question',
    ideaQ: 'How sure are you about what to build?',
    idea: [{ id: 'testing', label: 'I still need to test it' }, { id: 'clear', label: 'I know what to build' }],
    liveQ: 'What do you need next?',
    live: [{ id: 'fix', label: 'To know what to fix first' }, { id: 'team', label: 'A team to grow it' }],
    see: 'See my fit',
    seeDone: 'Your fit is below',
    again: 'Start again',
    kicker: 'Your fit',
    terms: '30 minutes · No pitch · Your answer goes with your booking',
    results: [
      { id: 'validate', name: 'Validate', meta: ['1–2 weeks', 'Fixed fee'], body: 'Market and competitor read, product scope, a clickable prototype and a fixed build estimate. The fee credits toward Build.', show: 'Show me Validate', book: 'Book a call about Validate' },
      { id: 'build', name: 'Build', meta: ['8–12 weeks', 'Fixed price'], body: 'A live product with real users: design, build, QA and deployment, with a demo for you every week.', show: 'Show me Build', book: 'Book a call about Build' },
      { id: 'review', name: 'Launch-Ready Review', meta: ['About 5 working days', 'From $1,490'], body: 'A senior team reviews your AI-built or freelancer-built app and gives you a ranked fix list and a plain verdict. No useful findings, no charge.', show: 'Show me the Review', book: 'Book a call about the Review' },
      { id: 'scale', name: 'Scale', meta: ['From 4 months', 'Monthly retainer'], body: 'A dedicated squad of developers, QA and a product manager who run the roadmap with you. Start with a 2–4 week proof of concept, and we replace anyone who isn’t the right fit at no cost.', show: 'Show me Scale', book: 'Book a call about Scale' },
      { id: 'partners', name: 'Partners', meta: ['NDA first', 'IP goes to you'], body: 'White-label delivery and staff augmentation under your brand.', show: 'Show me Partners', book: 'Book a call about Partners' },
    ],
    mail: {
      title: 'Not ready for a call?',
      body: 'Leave your name and email, and we reply with a short plan for your case.',
      name: 'Your name',
      email: 'Work email',
      button: 'Send me the plan',
      consent: 'We use your email only to reply to you. ',
      privacy: 'Privacy notice',
      sending: 'Sending…',
      success: 'Sent. We will reply to your email.',
      failed: 'Couldn’t send. Email us at hello@discoverdev.ai.',
      errEmail: 'Check your email. It needs an @ and a domain, like name@company.com.',
      subject: 'Home questions',
    },
  },
  engagements: {
    cards: [
      { key: 'validate', who: 'I have an idea.', title: 'Validate', kind: 'Product discovery', meta: ['1–2 weeks', 'Fixed fee'], body: 'Market and competitor read, product scope, a clickable prototype and a fixed build estimate.', linkLabel: 'See Validate', bookLabel: 'Book a call about Validate' },
      { key: 'build', who: 'I’m ready to build.', title: 'Build', kind: 'MVP development', meta: ['8–12 weeks', 'Fixed price'], body: 'A live product with real users: design, build, QA and deployment, with a demo for you every week.', linkLabel: 'See Build', bookLabel: 'Book a call about Build' },
      { key: 'scale', who: 'It’s working. Grow it.', title: 'Scale', kind: 'Dedicated development team', meta: ['Ongoing', 'Monthly retainer'], body: 'A dedicated team of developers, testers and a project manager who runs the roadmap with you. You keep control.', linkLabel: 'See Scale', bookLabel: 'Book a call about Scale' },
    ],
    scope: { label: 'What we build', text: 'Web and mobile apps, AI agents and chatbots in Arabic and English, APIs and enterprise systems, data and cloud.' },
  },
  reviews: {
    title: 'What clients say about working with us',
    cta: false, // no button in the reviews section (03 §2A.8c, Oct 18)
    items: [
      { quote: "They focused on building solutions that were practical, scalable, and aligned with our users’ needs.", name: "Youssef", role: "CEO, EduLens", service: "Build", result: "Three AI agents in production. AI costs down 60–90%." },
      { quote: "Professional work and great communication.", name: "Nojoud Alarfaj", role: "Athkado, Saudi Arabia", service: "Build · White-label and e-commerce" },
      { quote: "Thank you for going above and beyond.", name: "Farah Alkhaldi", role: "Consulting firm, Kuwait", service: "Market research · Tourism and hospitality" },
      { quote: "Absolutely amazing! I am very, very pleased with the level of detail that was delivered!", name: "Michelle Boehm", role: "Academic researcher, Switzerland", service: "Research · ML algorithms and data analysis" },
      { quote: "The quality of their work is top-notch.", name: "CEO", role: "Nile Support, USA", service: "Build · AI agents, website and staff augmentation" },
      { quote: "They perform very well and are a strong partner to work with.", name: "Founder", role: "Amstadd, UK", service: "Partners · Custom software and web development" },
      { quote: "They combine strong technical delivery with a very practical, low-friction approach, which isn’t always easy to find.", name: "Team Lead", role: "Amstadd, UK", service: "Partners · Web development" },
      { quote: "Perfect timing, always available for any questions or concerns, great professionalism. The job was done perfectly, and it was on point, giving us the info we needed. 100% recommendable.", name: "Roberto", role: "Fantacalcio", service: "Validate · Market research · Fantasy football" },
      { quote: "I will become a regular customer going forward now.", name: "Andrei Chejneanu", role: "Entrepreneur, UK", service: "Market research · Auto spare parts and trucking in Saudi Arabia" },
      { quote: "You are doing great, I highly appreciate it! Thankful for completing such work in such a short period of time.", name: "Lea Nechitailo", role: "Entrepreneur, Spain", service: "Validate · Market research · Brand expansion" },
    ],
  },
  guides: {
    title: 'Free guides and a launch check',
    readLabel: 'Read the guide',
    allLabel: 'All guides',
    check: { title: 'Take the launch check', body: '10 questions about your AI-built or freelancer-built app. See what to fix before real users arrive.', cta: 'Start the check' },
  },
  // §2V1 section 3: the problem, as a two-tone statement (core idea, 03 §0).
  problem: {
    label: 'Why DiscoverDev',
    headline: 'Most teams just build what you ask for. We start with what proves the idea.',
    // Oct 29 (03 §16b.45): a real Gulf result for "Test the idea" (09: Athkado feasibility sprints) and Validate's terms.
    proof: {
      who: 'Athkado · Saudi Arabia',
      text: 'Feasibility sprints across several startup ideas, each ending in a build, pivot or shelve decision.',
      facts: [
        { value: '1–2 weeks', label: 'Validate' },
        { value: 'Fixed fee', label: 'Agreed before we start' },
        { value: 'Credited', label: 'Toward your Build' },
      ],
    },
    stepsLabel: 'Before any code',
    steps: [
      { title: 'Test the idea', body: 'Check the market and the competitors before you spend on code.' },
      { title: 'Sketch the product', body: 'See it as a clickable prototype, not a document.' },
      { title: 'Pick the first release', body: 'The smallest product that shows it works, at a fixed price.' },
    ],
    card: {
      name: 'your-product / scope',
      tag: 'Example',
      groups: [
        { label: 'First release', mark: 'in', items: [{ name: 'Sign up and log in', note: 'proves it' }, { name: 'The one thing users came for', note: 'proves it' }] },
        { label: 'After launch', mark: 'next', items: [{ name: 'Payments', note: 'when users ask' }, { name: 'In-app chat', note: 'when users ask' }] },
        { label: 'Not needed yet', mark: 'later', items: [{ name: 'Custom theme builder', note: 'not yet' }] },
      ],
    },
  },
  faq: {
    title: 'Questions founders ask us',
    items: [
      { id: 'ai', q: 'Is AI-written code safe to ship?', a: 'Yes. At DiscoverDev, AI drafts code, tests and documentation, and senior engineers make the decisions and sign off each release. A person is responsible for every line that reaches your users, so speed never costs you quality.' },
      { id: 'pricing', q: 'How much does an MVP cost?', a: 'DiscoverDev prices an MVP as a fixed price for an agreed scope. We don’t publish a price list: you get your number after a free 30-minute clarity call, before you commit to anything. Validate (1–2 weeks) is a fixed fee credited toward Build. Build (8–12 weeks) is a fixed price. Scale is a monthly retainer.' },
      { id: 'timeline', q: shared.mvpTimeQ, a: 'Validate takes 1–2 weeks and ends with a clickable prototype and a fixed build estimate. Build takes 8–12 weeks to a production-ready product with real users, with a demo for you every week.' },
      { id: 'call', q: 'What happens on the clarity call?', a: 'You get 30 minutes with a senior member of our product team to tell us what you’re building. We ask what you have and what worries you, and tell you plainly what we’d do. There is no pitch. You leave with a next step, even if we’re not the right fit.' },
      { id: 'regions', q: 'Do you work with startups in Saudi Arabia and the Gulf?', a: 'Yes. We have worked with clients in Saudi Arabia, Kuwait, the US, the UK and Egypt, across 4 continents. Our engineering hub is in Alexandria, Egypt, 0–1 hours behind Saudi and Kuwait time, with a presence in Texas, USA. We work in Arabic and English, and calls run in Gulf and US hours.' },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. You own everything we build: full IP, no lock-in, and a clear contract from day one. Your code stays in your own repository and accounts. If you stop working with us, you keep everything, and your own team or another developer can carry on.' },
      { id: 'take-over', q: 'We already built something with AI or a freelancer. Can you take it over?', a: 'Yes. A senior team can review what you have in about 5 working days and tell you what to keep, fix or replace, and why. Then we fix it or build it properly. Start with a free clarity call.', link: { label: 'Read the guide to taking an AI-built app to production', to: 'pillar' as const } }, // 03 §0.8
      { id: 'stacks', q: 'Which tools and stacks do you work with?', a: 'React, Next.js, Node.js, Python, Spring Boot, React Native, Flutter, PostgreSQL, AWS, GCP and Azure. For AI: OpenAI, LangChain, RAG, computer vision and NLP.' },
      { id: 'time-zones', q: 'Your team is in Egypt. Will time zones be a problem?', a: 'Our engineering hub is in Alexandria, Egypt, 0–1 hours behind Saudi Arabia and Kuwait. Our working day overlaps the Gulf, Europe and US mornings. We work in Arabic and English, and we have a presence in Texas, USA. Calls run in Gulf and US hours.' },
    ],
  },
  band: {
    title: 'Tell us what you’re building.',
    body: 'Bring an idea, a prototype or a product that needs a team. We’ll tell you where to start, even if we’re not the right fit.',
  },
} as const;
