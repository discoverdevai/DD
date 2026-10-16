// 03 §7.13 /how-we-work (Oct 16, Mohamed): the detailed DiscoverDev Way page. Facts in 09 (Method, Offer, frameworks
// confirmed by Mohamed Oct 16). Step data (time, body, you get, frameworks) is shared with the home lifecycle.
import { home } from './home';

export const howWeWork = {
  seo: {
    title: 'How We Work: The DiscoverDev Way | DiscoverDev',
    description: 'How every DiscoverDev project runs: discover, plan, build, ship and stay. The frameworks we use and what you get, for new and existing products.',
  },
  hero: {
    eyebrow: 'The DiscoverDev Way',
    h1: 'How we work',
    lead: 'Every project runs the same way, whether you start from an idea or from code you already have. AI drafts the work, a senior engineer signs off every release, and you see progress every week.',
  },
  paths: {
    title: 'Two ways in',
    lead: 'Greenfield or brownfield, you join the same four steps. Only the start is different.',
    items: [
      { key: 'validate' as const, tag: 'Greenfield', title: 'New product', body: 'Start with Validate: 1–2 weeks of discovery that ends with a tested prototype and a fixed build estimate.', link: 'See Validate' },
      { key: 'review' as const, tag: 'Brownfield', title: 'Existing code', body: 'Start with a Launch-Ready Review: a senior team reviews your app in about 5 working days and gives you a ranked fix list and a plain verdict.', link: 'See the Review' },
    ],
  },
  roles: {
    label: 'Who does what',
    title: 'AI drafts it. A senior engineer signs it.',
    body: 'In every step, AI does the routine work so it moves fast. Senior engineers make the decisions, review every change and sign off every release, so speed never costs you quality.',
  },
  steps: {
    label: 'The four steps',
    title: 'One team from idea to after launch',
    getsLabel: home.lifecycle.getsLabel,
    toolsLabel: 'Frameworks we use',
    items: home.lifecycle.steps,
  },
  faq: {
    title: 'Questions about how we work',
    items: [
      { id: 'step-time', q: 'How long does each step take?', a: 'Discover takes 1–2 weeks. Build takes 8–12 weeks to a production-ready product. Plan happens before any code, and Ship & Stay continues after launch with the same team.' },
      { id: 'existing', q: 'Can you work on an existing codebase?', a: 'Yes. Brownfield work starts with a Launch-Ready Review of what you have, then we fix it or build it properly. We also do legacy modernization and cloud migration.' },
      { id: 'frameworks', q: 'Which frameworks do you use?', a: 'Jobs to be Done and Design Sprints in Discover. User Story Mapping, Shape Up, RICE and Architecture Decision Records in Plan. Weekly sprints and a Definition of Done in Build. DORA metrics, continuous discovery and HEART metrics after launch.' },
      { id: 'progress', q: 'How do I see progress?', a: 'You get a demo every week, and every release is signed off by a senior engineer before it reaches your users.' },
      { id: 'owns', q: 'Who owns the code?', a: 'You do. You own everything we build: full IP, no lock-in, and a clear contract from day one.' },
    ],
  },
  more: 'See how we work in detail',
} as const;
