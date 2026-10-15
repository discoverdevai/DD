// 03-copy.md §3 (/launch-ready). Verbatim, §0.7 resolutions noted inline.
export const launchReady = {
  seo: {
    title: 'Vibe Code Audit for Lovable, Bolt & Cursor | DiscoverDev',
    description:
      'A 5-day Launch-Ready Review of your AI-built app: security, data rules, payments, scale. Fixed fee, credited toward the fix. No useful findings, no charge.',
  },
  hero: {
    eyebrow: 'For apps built with Lovable, Bolt, v0, Cursor or a freelancer',
    h1: 'Launch-Ready Review: a vibe code audit before you go live',
    body: 'Your app works in the demo. Before real users, real data and real payments touch it, a senior team checks what will break. In about 5 working days you get a ranked fix list, a plain verdict and a fixed quote.',
    quizLink: 'Take the 3-minute launch check first',
  },
  isThisYou: {
    title: 'Is this you?',
    items: [
      'You built it fast with an AI tool or a freelancer, and now you’re scared to launch.',
      'You’re not sure each user can see only their own data.',
      'Payments work in test mode, but you’ve never watched them under real use.',
      'Every fix seems to break something else.',
      'You couldn’t hand the code to a new developer tomorrow.',
      'An investor or partner asked “Is it secure?” and you didn’t have an answer.',
    ],
    line: 'If two or more sound familiar, book a Review before you launch.',
  },
  check: {
    title: 'What does the Review check?',
    answer:
      'We check six areas before your app meets real users: who can see what, your data, your payments, the code, how it behaves as usage and costs grow, and whether you truly own it. Each finding is ranked by risk, so you know what to fix first.',
    areas: [
      { title: 'Access and security', body: 'Sign-up, sign-in, user roles, and whether data rules (like Supabase Row Level Security) stop users from reading each other’s records. Secret keys in browser code.' },
      { title: 'Data', body: 'What you store, where, who can reach it, and whether you have backups.' },
      { title: 'Payments', body: 'Whether payment events are checked on the server, and what happens when a payment fails or repeats.' },
      { title: 'Code quality', body: 'Whether a new developer could understand it and change it safely.' },
      { title: 'Scale and running costs', body: 'What breaks first as users grow, and what your hosting and AI bills will look like.' },
      { title: 'Ownership and handover', body: 'Whether the code, accounts and keys are in your name.' },
    ],
  },
  gets: {
    title: 'What you get at the end',
    items: [
      { lead: 'A written report.', text: 'Every finding in plain words: what can go wrong, who it affects, how to fix it.' },
      { lead: 'A ranked fix list.', text: 'What must be fixed before launch, and what can wait.' },
      { lead: 'A verdict.', text: 'Keep, fix or replace, part by part, and why.' },
      { lead: 'A fixed quote.', text: 'The price and timeline for the fixes, with your Review fee credited.' },
      { lead: 'A findings call.', text: 'We go through it together. Bring your co-founder or developer.' },
    ],
  },
  timeline: {
    title: 'How the 5 days work',
    steps: [
      { meta: 'Day 0', title: 'Scoping call', body: 'Free, 30 minutes. We agree scope and a fixed fee. You share access.' },
      { meta: 'Days 1–4', title: 'Review', body: 'We go through your code and your live or preview app. We ask questions as we go.', chip: { kind: 'ai', label: 'AI-accelerated' } },
      { meta: 'Day 5', title: 'Findings', body: 'Written report, findings call and a fixed quote for the fixes.', chip: { kind: 'human', label: 'Senior sign-off' } },
    ],
  },
  price: {
    title: 'What does a Launch-Ready Review cost?',
    // P1 resolved Oct 16 (D-01): from $1,490. V20 omitted.
    answer:
      'The Review is a fixed fee that depends on the size of your app. Reviews start from $1,490. You get the exact fee on a free 30-minute scoping call, before you commit. The full fee is credited toward the fix or a Build with us.',
    small: 'You own the report either way. Take it to any developer you like.',
    minPrice: 1490,
    offerTerms: 'From $1,490 (USD). Fixed fee for your app, quoted after a free 30-minute call; credited toward the fix or a Build with us. No useful findings, no charge.',
  },
  guarantee: {
    title: 'No useful findings, no charge',
    // V4 → §0.7 replace (D-03).
    body: 'If the Review doesn’t find anything that puts your users, data, payments or launch at risk, you don’t pay. A useful finding is an issue we rate medium severity or higher.',
  },
  proof: {
    title: 'Proof from work we’ve shipped',
    // V12/[CONSENT] → anonymized; Rushr hidden; quote omitted.
    caseTitle: 'EdTech AI platform, Egypt',
    caseBody: 'Three AI agents in production. 60–90% lower AI cost.',
    caseLink: 'Read the case study',
  },
  notFor: {
    title: 'When the Review isn’t the right fit',
    items: [
      { lead: 'You only want an automated scan.', text: 'Run one first. Some are free. Come back when you need judgement and a fix plan.' },
      { lead: 'You only have an idea.', text: 'Start with Validate: 1–2 weeks to test it before you build.', link: { label: 'See Validate', to: 'validate' } },
      { lead: 'Your product is live and growing, and you need a team.', text: 'See Scale: a dedicated squad on a monthly retainer.', link: { label: 'See Scale', to: 'scale' } },
    ],
  },
  faq: {
    title: 'Questions about the Review',
    items: [
      { id: 'free-scan', q: 'Lovable or Claude can scan my app for free. Why pay for a Review?', a: 'Run the free scan first. It catches common patterns. It can’t tell you whether a signed-in user can read another customer’s data, whether payments fail quietly, or whether to fix or rebuild. That judgement is what you pay for. If we find nothing useful, you pay nothing.', link: { label: 'Read: the security holes AI-built apps ship with', to: 'guideSecurity' as const } },
      { id: 'access', q: 'What access do you need?', a: 'Usually read-only access to your code repository, plus a walkthrough of your live or preview app. We don’t change anything during the Review. If you want an NDA first, we sign it before we see your code.' },
      { id: 'non-technical', q: 'I’m not technical. Will I understand the report?', a: 'Yes. Each finding says in plain words what can go wrong, who it affects and how to fix it. On the findings call we go through it together, and you can bring your developer or co-founder.' },
      { id: 'after', q: 'What happens after the Review?', a: 'You get a fixed quote for the fixes. You can hire us to do them, with the Review fee credited, or give the report to your own developer. If the code needs replacing, we scope it as a fixed-price Build. The report is yours either way.' },
      // V10 → §0.7 replace (D-20).
      { id: 'urgent', q: 'I launch in less than two weeks. Is 5 days too slow?', a: 'Tell us your launch date on the scoping call. We check the parts that matter most for launch first: who can see which data, sign-up and payments. The full Review takes about 5 working days, and every finding is ranked by risk, so you know exactly what to fix before your users arrive.' },
      // V11 → Supabase and Firebase removed from the stack claim; Stripe kept.
      { id: 'stacks', q: 'Which tools and stacks do you review?', a: 'Apps built with Lovable, Bolt, v0, Cursor and other AI coding tools, and apps built by freelancers or agencies. Common stacks include React, Next.js, Node.js, Python and PostgreSQL, with Stripe.', link: { label: 'Built with Lovable? Read the launch checklist', to: 'guideLovable' as const } },
      { id: 'who', q: 'Who will review my app?', a: 'Senior engineers and a product lead from our team in Alexandria, Egypt. The people on your findings call are the people who reviewed your code.' },
      // V9 → "Do you sign a contract with US clients?" omitted (D-08).
    ],
  },
  book: {
    title: 'Book your scoping call',
    body: 'Pick a time. In 30 minutes we’ll understand your app, agree scope and give you a fixed fee. The Review starts only when you say yes.',
    quizLink: 'Not sure yet? Take the 3-minute launch check',
    fallback: 'Can’t use the calendar? Email',
  },
} as const;
