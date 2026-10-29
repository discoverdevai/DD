// 03 §7.13 /how-we-work (Oct 16, Mohamed) + §16b.3 (lean R1, Oct 26: About §12 and an ownership section merged in). Facts in 09 (Method, Offer, frameworks
// confirmed by Mohamed Oct 16). Step data (time, body, you get, frameworks) is shared with the home lifecycle.
import { home } from './home';
import { ENTITY_LINE } from '../../../lib/seo';

export const howWeWork = {
  seo: {
    title: 'Software Development Process: How We Work | DiscoverDev',
    description: 'How every DiscoverDev project runs: discover, plan, build, ship and stay. Who we are, where we work, and how your code, data and IP stay yours.',
  },
  hero: {
    eyebrow: 'The DiscoverDev Way',
    h1: 'How we work',
    lead: 'Our software development process is the same for every project, whether you start from an idea or from code you already have. AI drafts the work, a senior engineer signs off every release, and you see progress every week.',
  },
  paths: {
    title: 'Two ways in',
    lead: 'Greenfield or brownfield, you join the same four steps. Only the start is different.',
    items: [
      { anchor: 'validate', tag: 'Greenfield', title: 'New product', body: 'Start with Validate: 1–2 weeks of discovery that ends with a tested prototype and a fixed build estimate.', link: 'How Validate works' },
      { anchor: 'review', tag: 'Brownfield', title: 'Existing code', body: 'Start with a Launch-Ready Review: a senior team reviews your app in about 5 working days and gives you a ranked fix list and a plain verdict.', link: 'How the Review works' },
    ],
  },
  roles: {
    title: 'AI drafts it. A senior engineer signs it.',
    body: 'In every step, AI does the routine work so it moves fast. Senior engineers make the decisions and sign off every release, so speed never costs you quality.',
  },
  steps: {
    title: 'One team from idea to after launch',
    getsLabel: home.lifecycle.getsLabel,
    toolsLabel: 'Frameworks we use',
    items: home.lifecycle.steps,
  },
  // §16b.3 Who we are (§12.2, §12.4, §12.5).
  team: {
    title: 'Who we are and where we work',
    story: 'DiscoverDev is a product and engineering company. The “Discover” in our name is how we work: before we write code, we make sure it’s the right thing to build. Then a senior team builds it, ships it and stays. We have clients on 4 continents.',
    entity: ENTITY_LINE,
    // 03 §16b.31 (Oct 29): the hub is already in the entity line above; say only what it does not.
    where: 'We also have a presence in Texas, USA. Gulf time is 0–2 hours ahead of Alexandria, our day overlaps Europe and US mornings, and we work in Arabic and English.',
    strip: {
      label: 'West to east',
      places: [
        { name: 'US East', hub: false },
        { name: 'UK', hub: false },
        { name: 'Alexandria', hub: true },
        { name: 'Riyadh', hub: false },
        { name: 'Dubai', hub: false },
      ],
      hubTag: 'Our hub',
      text: 'From west to east: US East, UK, Alexandria (our hub), Riyadh and Dubai.',
    },
    recordTitle: 'Track record',
    record: ['Clients on 4 continents', 'AI in production across multiple clients', 'Four clients expanded scope with us'],
  },
  // §16b.3 Your code, data and IP (lines from §6.9, §3.10, §12.6).
  ownership: {
    title: 'Your code, data and IP',
    items: [
      'Your code lives in your repository and your cloud accounts.',
      'Full IP, no lock-in and a clear contract from day one.',
      'If you want an NDA first, we sign it before we see your code.',
      'When we hand over, another developer can pick it up.',
      'A person is responsible for every line that reaches your users.',
    ],
  },
  faq: {
    title: 'Questions about how we work',
    items: [
      { id: 'step-time', q: 'How long does each step take?', a: 'Discover takes 1–2 weeks. Build takes 8–12 weeks to a production-ready product. Plan happens before any code, and Ship & Stay continues after launch with the same team.', link: { label: 'Need a team after launch? See Scale', to: 'scale' as const } },
      { id: 'existing', q: 'Can you work on an existing codebase?', a: 'Yes. Brownfield work starts with a Launch-Ready Review of what you have, then we fix it or build it properly. We also do legacy modernization and cloud migration.' },
      { id: 'progress', q: 'How do I see progress?', a: 'You get a demo every week, and every release is signed off by a senior engineer before it reaches your users.' },
    ],
  },
  more: 'See how we work in detail',
} as const;
