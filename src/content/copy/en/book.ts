// 03-copy.md §13 (/book) and §14 (/book/confirmed). Verbatim with §0.7 applied.
import { shared } from './shared';
export const book = {
  seo: {
    title: 'Book a Call | DiscoverDev', // V1.0; the Review title returns in V1.2 (03 §13),
    description: 'Book a free 30-minute clarity call with DiscoverDev. No pitch. Pick a time in Gulf or US hours, and leave with a next step.',
  },
  h1: 'Book a review or a free clarity call',
  h1Clarity: 'Book a free clarity call', // V1.0: the Review is offered from V1.2 (03 §2V1)
  options: {
    review: { tab: 'Launch-Ready Review', text: 'For an app that works in the demo but isn’t ready to launch. Start with a free 30-minute scoping call. You get a fixed fee before anything starts.' },
    clarity: { tab: 'Clarity call', text: 'For an idea, a new build, a growing product or anything else.' },
    partner: { tab: 'Partner call', heading: 'Book a partner call', text: 'For software houses and agencies looking at white-label delivery or staff augmentation.' },
  },
  optionsLabel: 'Choose a call',
  calendar: {
    title: 'Booking calendar',
    hours: 'Gulf and US hours.', // Phase 3 (03 §16b.43): the promise in this page's description, said by the calendar
    timezone: 'Times show in your time zone.',
    loading: 'Loading available times…',
    failed: 'The calendar didn’t load. Refresh the page, or email hello@discoverdev.ai and we’ll send you times.',
    direct: 'Book on Cal.com',
    cookies: 'Booking runs on Cal.com. We use your answers to prepare for your call and to see which pages lead to bookings. Cal.com may set its own cookies when you book.',
    privacyLink: 'Read our privacy policy',
  },
  // Oct 27: the best fit a visitor brings from the Scale questions (?interest=scale-<result>). Shown above the calendar and
  // pre-filled into the booking notes, so the team sees the need before the call.
  fit: {
    label: 'Your best fit from the Scale questions:',
    after: 'We start the call there.',
    notesPrefix: 'From the Scale questions, best fit:',
    names: {
      'scale-build': 'Build, from idea to a live MVP',
      'scale-house': 'White-label or staff augmentation',
      'scale-piece': 'Hand us a piece: a POC, a new MVP or a module',
      'scale-hands': 'Staff augmentation, engineers who join your team',
      'scale-squad': 'A dedicated squad that stays',
      'scale-poc': 'a proof of concept in 2–4 weeks, before committing to a squad',
      'home-validate': 'Validate, 1–2 weeks of discovery',
      'home-build': 'Build, from idea to a live MVP',
      'home-review': 'A senior review of the app you built',
      'home-scale': 'Scale, a dedicated squad that stays',
      'home-partners': 'Partners: white-label or staff augmentation',
    },
    // Interests that don't come from the questions use their own lead-in (Scale tiles, Oct 27).
    labels: { 'scale-poc': 'You want to start with', 'home-validate': 'Your best fit from the home questions', 'home-build': 'Your best fit from the home questions', 'home-review': 'Your best fit from the home questions', 'home-scale': 'Your best fit from the home questions', 'home-partners': 'Your best fit from the home questions' },
    prefixes: { 'scale-poc': 'From the Scale page, wants to start with', 'home-validate': 'From the home questions, best fit', 'home-build': 'From the home questions, best fit', 'home-review': 'From the home questions, best fit', 'home-scale': 'From the home questions, best fit', 'home-partners': 'From the home questions, best fit' },
  },
  call: {
    title: 'What happens on the call',
    items: [
      'We ask what you built, or plan to build, and what worries you.',
      'We tell you plainly what we’d do, and what we wouldn’t.',
      'You leave with a next step, and a fixed price if a project fits.',
    ],
    // V16 → §0.7 keep, no name or photo (D-16).
    who: 'Who you’ll meet: a senior member of our product team.',
  },
  terms: { title: 'What you can count on', items: ['No pitch.', 'NDA on request.'] },
  write: {
    title: 'Prefer to write?',
    // [WHATSAPP] and V7 reply-time promise omitted (D-09, D-10).
    languages: 'We work in Arabic and English.',
  },
  confirmed: {
    title: 'You’re Booked | DiscoverDev',
    description: 'Your call with DiscoverDev is booked. Check your email for the invite.',
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
      // V1.0 clarity call (03 §2V1.1, Oct 21 final audit): the lines above are written for the Review and return in V1.2.
      itemsClarity: [
        'Have a link ready if you have something built, or tell us it isn’t live yet.',
        'Write down the 3 things that worry you most about your product.',
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
    wait: { title: 'While you wait', caseLink: 'Read the case study: how three AI agents got 60–90% cheaper to run', pillarLink: shared.pillarGuideLink },
    change: ['Need a different time? Use the reschedule link in your email.', 'Questions before the call? Email'],
  },
} as const;
