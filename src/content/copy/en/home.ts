// 03-copy.md §2 (Home). Verbatim, with §0.7 launch resolutions applied (noted inline).
export const home = {
  seo: {
    title: 'Product & Engineering Partner for Founders | DiscoverDev',
    description:
      "Stuck with an AI-built prototype that can't launch? We review it, fix or rebuild it, and ship it to production. Senior team. You own all the code.",
  },
  hero: {
    eyebrow: 'For founders with an AI-built or freelancer-built app',
    h1: 'Your app works in the demo. We get it ready for real users.',
    body: 'Built it with Lovable, Bolt, v0, Cursor or a freelancer? A senior team reviews it in about 5 working days. You learn what will break, what to fix and what it costs. Then we fix it or build it properly, and you own all of it.',
    quizLink: 'Not sure yet? Take the 3-minute launch check',
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
  problem: {
    title: '“It works” and “it’s ready for strangers” are not the same thing',
    cards: [
      { icon: 'lock', title: 'Your data might be open', body: 'Can a signed-in user see someone else’s records? Are secret keys sitting in code the browser can read? You may not know until someone else finds out.' },
      { icon: 'credit-card', title: 'Payments that fail quietly', body: 'A payment that works in test mode can still drop or double-charge in real life. You find out from an angry customer.' },
      { icon: 'code', title: 'Code nobody can pick up', body: 'Every fix breaks something else. Your freelancer moved on. A new developer can’t tell what’s safe to change.' },
    ],
    closing: 'You don’t need a rewrite by default. You need someone senior to look, and tell you plainly.',
  },
  offer: {
    title: 'What is a Launch-Ready Review?',
    answer:
      'A Launch-Ready Review is a fixed-fee check of your AI-built or freelancer-built app before real users, data and payments touch it. A senior team reviews security, data, payments, code quality, scale and ownership in about 5 working days. You get a ranked fix list, a keep, fix or replace verdict, and a fixed quote.',
    gets: [
      'A findings call where we walk you through every issue in plain words',
      'A written report you keep, with each risk ranked',
      'A clear verdict: keep, fix or replace, and why',
      'A fixed quote for the fix work',
    ],
    // P1 → §0.7 replace
    price: 'Fixed fee, quoted after a free 30-minute call. The fee is credited toward the fix or a Build with us.',
    guarantee: 'No useful findings, no charge.',
    microcopy: 'Starts with a free 30-minute scoping call',
    link: 'See everything we check',
  },
  how: {
    eyebrow: 'how a review runs',
    title: 'How it works',
    steps: [
      { title: 'Book a scoping call', body: '30 minutes, free. Tell us what you built and what worries you. You get a fixed fee before anything starts.' },
      { title: 'We review your app', body: 'About 5 working days. Senior engineers and a product lead go through your code and your live app.', chip: { kind: 'ai', label: 'AI-accelerated' } },
      { title: 'Findings call', body: 'We walk you through the report. What’s risky, what’s fine, what to fix first.', chip: { kind: 'human', label: 'Senior sign-off' } },
      { title: 'Fix or build', body: 'Hire us for the fix with the fee credited, or take the report to your own developer. It’s yours.' },
    ],
  },
  paths: {
    title: 'Not at launch yet? Start where you are.',
    cards: [
      { key: 'validate', who: 'I have an idea.', title: 'Validate', body: '1–2 weeks. Market read, scope, clickable prototype and a fixed build estimate.', linkLabel: 'See Validate' },
      { key: 'build', who: 'I’m ready to build.', title: 'Build', body: '8–12 weeks to a live product with real users. Fixed price.', linkLabel: 'See Build' },
      { key: 'scale', who: 'It’s working. Grow it.', title: 'Scale', body: 'A dedicated squad of developers, QA and a PM on a monthly retainer. You keep control.', linkLabel: 'See Scale' },
      { key: 'partners', who: 'I run a software house.', title: 'Partners', body: 'White-label delivery and staff augmentation under your brand.', linkLabel: 'See Partners' },
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
  },
  why: {
    title: 'Why founders choose DiscoverDev',
    lead: 'Most teams just build what you ask for. We help you build the right thing, then ship it fast, and you own all of it.',
    pillars: [
      { title: 'Discover first', body: 'The “Discover” in our name is the point. Before we write code, we check it’s the right thing to build, and we say what to cut.' },
      { title: 'Senior teams that stay', body: 'AI does the heavy lifting. Senior engineers own the quality, and a person is responsible for every line that reaches your users. One team from first call to launch and after. No handoff gaps.' },
      { title: 'AI that pays for itself', body: 'We have AI in production across multiple clients. For an EdTech AI platform in Egypt, we cut AI costs by 60–90%.' },
    ],
    small: 'You own everything: full IP, no lock-in, clear contract from day one.',
  },
  faq: {
    title: 'Questions founders ask us',
    items: [
      { id: 'cost', q: 'How much does a Launch-Ready Review cost?', a: 'The Review is a fixed fee, quoted for your app before you commit. The full fee is credited toward the fix or a Build with us. If the Review finds nothing useful, you pay nothing. You get your price on a free 30-minute scoping call.' },
      { id: 'timeline', q: 'How long until my app is ready to launch?', a: 'The Review takes about 5 working days. After that you get a fixed quote for the fixes, with a timeline. How long fixes take depends on what we find. If the right answer is a rebuild, that is a Build of 8–12 weeks. You know which one you need before you pay for any fix work.' },
      { id: 'ownership', q: 'Who owns the code?', a: 'You do. You own everything we build: full IP, no lock-in, and a clear contract from day one. Your code stays in your own repository and accounts. If you stop working with us, you keep everything, and your own team or another developer can carry on.' },
      { id: 'rebuild', q: 'Will you tell me to rebuild everything?', a: 'Only if the evidence says so. The Review tells you what to keep, what to fix and what to replace, and why. A rebuild makes sense when the code can’t be owned, changed or made safe at a fair cost. If that’s the case, we scope it as a fixed-price Build.' },
      { id: 'stacks', q: 'Which tools and stacks do you work with?', a: 'We review apps built with Lovable, Bolt, v0, Cursor and other AI tools, and apps built by freelancers or agencies. Our team works with React, Next.js, Node.js, Python, Spring Boot, React Native, Flutter, PostgreSQL, AWS, GCP and Azure.' },
      { id: 'time-zones', q: 'Your team is in Egypt. Will time zones be a problem?', a: 'Our engineering hub is in Alexandria, Egypt (GMT+2). Our working day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English, and we have a presence in Texas, USA. You choose a call time that suits you.' },
    ],
  },
  band: {
    title: 'Find out what’s between your app and launch day',
    body: 'A senior team, about 5 working days, and a plain answer.',
    link: 'Not ready? Take the 3-minute launch check',
  },
} as const;
