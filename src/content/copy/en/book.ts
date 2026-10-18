// 03-copy.md §13 (/book) and §14 (/book/confirmed). Verbatim with §0.7 applied.
export const book = {
  seo: {
    title: 'Book a Launch-Ready Review or Clarity Call | DiscoverDev',
    description: 'Book a 5-day Launch-Ready Review of your app, or a free 30-minute clarity call. No pitch. Pick a time that works for you in the US or the Gulf.',
  },
  h1: 'Book a review or a free clarity call',
  h1Clarity: 'Book a free clarity call', // V1.0: the Review is offered from V1.2 (03 §2V1)
  options: {
    review: { tab: 'Launch-Ready Review', text: 'For an app that works in the demo but isn’t ready to launch. Start with a free 30-minute scoping call. You get a fixed fee before anything starts.' },
    clarity: { tab: 'Clarity call', text: 'For an idea, a new build, a growing product or anything else. 30 minutes, no pitch.' },
    partner: { tab: 'Partner call', heading: 'Book a partner call', text: 'For software houses and agencies looking at white-label delivery or staff augmentation.' },
  },
  optionsLabel: 'Choose a call',
  calendar: {
    title: 'Booking calendar',
    timezone: 'Times show in your time zone.',
    loading: 'Loading available times…',
    failed: 'The calendar didn’t load. Refresh the page, or email hello@discoverdev.ai and we’ll send you times.',
    direct: 'Book on Cal.com',
    cookies: 'Booking runs on Cal.com. We use your answers only to prepare for your call. Cal.com may set its own cookies when you book.',
    privacyLink: 'Read our privacy policy',
  },
  call: {
    title: 'What happens on the call',
    items: [
      'We ask what you built, or plan to build, and what worries you.',
      'We tell you plainly what we’d do, and what we wouldn’t.',
      'You leave with a next step, and a fixed price if a Review or project fits.',
    ],
    // V16 → §0.7 keep, no name or photo (D-16).
    who: 'Who you’ll meet: a senior member of our product team.',
  },
  terms: { title: 'What you can count on', items: ['No pitch.', 'No useful findings, no charge (Launch-Ready Review).', 'NDA on request.'] },
  write: {
    title: 'Prefer to write?',
    // [WHATSAPP] and V7 reply-time promise omitted (D-09, D-10).
    languages: 'We work in Arabic and English.',
  },
  confirmed: {
    title: "You're Booked | DiscoverDev",
    h1: 'You’re booked',
    status: 'Booking confirmed.',
    withTime: 'Your call is on {when}. We’ve emailed you the invite.',
    noTime: 'Check your email for the invite.',
    before: {
      title: 'Before the call (5 minutes)',
      items: [
        'Have your app link ready, or “not live yet”.',
        'If you can, prepare read-only access to your code. Optional.',
        'Write down the 3 things that worry you most about launch.',
        'Bring your co-founder or developer if you like.',
      ],
    },
    next: {
      title: 'What happens next',
      review: [
        { title: 'The call', body: '30 minutes. We listen, ask questions and tell you what we’d do.' },
        // V7 quote turnaround omitted (D-40).
        { title: 'Your quote', body: 'A fixed fee and scope for your Review.' },
        { title: 'The Review starts', body: 'When you say yes. About 5 working days to findings.' },
      ],
      clarity: [
        { title: 'The call', body: '30 minutes. We listen, ask questions and tell you what we’d do.' },
        { title: 'Your next step', body: 'A written summary and, if it fits, a fixed quote.' },
      ],
    },
    wait: { title: 'While you wait', caseLink: 'Read the case study: how three AI agents got 60–90% cheaper to run', pillarLink: 'Read the guide: How to take an AI-built app to production' },
    change: ['Need a different time? Use the reschedule link in your email.', 'Questions before the call? Email'],
  },
} as const;
