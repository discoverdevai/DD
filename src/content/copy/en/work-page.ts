// The lean /work page (03 §16b.33, Oct 29, Direction A: Metalab-style index + thoughtbot numbers). Facts from 09 and
// en/projects.ts only. Case-study and share-image text stays in ./work.
import { work } from './work';
export type Mark = 'word' | 'icon';
export const workPage = {
  seo: work.seo,
  h1: 'Products we took live, and teams that stayed',
  intro: 'For founders and teams on 4 continents, from a first market study to an embedded ML team.',
  numbersTitle: 'Results',
  numbers: [
    { value: '60–90%', label: 'lower AI cost', who: 'EduLens, Egypt' },
    { value: '20,000+', label: 'students on the platform', who: 'Pyramakerz, Egypt' },
    { value: '12 months', label: 'one embedded team', who: 'Upscend, UK' },
    { value: '5.0', label: 'rating', who: 'Clutch' },
  ],
  featuredTitle: 'Selected work',
  featured: [
    {
      id: 'njwar', meta: 'NJWAR · E-commerce · Saudi Arabia', title: 'Try the furniture in your room before you buy it',
      line: 'Athkado’s Arabic store with an AR view and AI recommendations, from market study to launch.',
      screens: ['njwar-web.webp', 'njwar-ar.webp'], device: 'combo' as const,
      alt: 'NJWAR web store in Arabic, with the AR view on a phone placing an armchair in a real room',
    },
    {
      id: 'rushr', meta: 'Rushr · Marketplace · USA', title: 'A plumber at your door, booked from your phone',
      line: '16 weeks, one product team: post a job, match the nearest verified pro, escrow payments and live chat.',
      screens: ['rushr-m-dispatch.webp', 'rushr-m-searching.webp'], device: 'phone' as const,
      alt: 'Rushr app showing a matched plumber with accept and decline',
    },
    {
      id: 'yawmy', meta: 'Yawmy Care · Childcare · Our own product', title: 'A nursery’s whole day, in one app for parents and staff',
      line: 'One platform for parents, teachers and management, with billing and multiple locations. Launching in 2027.',
      screens: ['yawmy-dashboard.webp', 'yawmy-parent-logs.webp'], device: 'combo' as const,
      alt: 'Yawmy Care nursery dashboard with daily attendance, and the parent app showing a child’s day: mood, meals and nap',
    },
  ],
  indexTitle: 'Every client',
  // `logo` is a file in /assets/clients/mono. `mark: 'word'` logos carry the name; `icon` logos show the name beside them.
  index: [
    { name: 'EduLens', logo: 'edulens.png', mark: 'icon' as Mark, line: 'Three AI agents for an EdTech platform, then 60–90% lower AI cost.', stage: 'Build', tags: ['AI agents', 'Egypt'] },
    { name: 'Upscend', logo: 'upscend.png', mark: 'word' as Mark, line: 'An embedded product team for 12 months on a B2B learning platform, owning roadmap, backlog and sprints.', stage: 'Scale', tags: ['Dedicated team', 'UK'] },
    { name: 'BioBank', logo: 'biobank.png', mark: 'icon' as Mark, line: 'A health app that explains lab reports in plain language, with medical safety guardrails.', stage: 'Build', tags: ['AI', 'HealthTech'] },
    { name: 'Nile Support', logo: 'nile-support.png', mark: 'icon' as Mark, line: 'AI agents for call operations, a landing page and staff augmentation.', stage: 'Build', tags: ['AI agents', 'USA'] },
    { name: 'Pyramakerz', line: 'Data, ML and automations for an EdTech platform with 20,000+ students.', stage: 'Scale', tags: ['Data and ML', 'Egypt'] },
    { name: 'Arheb', logo: 'arheb.png', mark: 'icon' as Mark, line: 'An embedded data and ML team for a smart ride-sharing platform.', stage: 'Scale', tags: ['Data and ML', 'Saudi Arabia'] },
    { name: 'Jumlaty', logo: 'jumlaty.png', mark: 'icon' as Mark, line: 'An ML engineer for restaurant procurement.', stage: 'Scale', tags: ['ML', 'Saudi Arabia'] },
    { name: 'Amstadd', line: 'White-label websites and mobile apps, delivered under their brand.', stage: 'Build', tags: ['White-label', 'UK'] },
    { name: 'Zest', logo: 'zest.png', mark: 'word' as Mark, line: 'A market study and sentiment analysis to test demand before building.', stage: 'Validate', tags: ['Market study'] },
    { name: 'Fantacalcio', line: 'A plan to enter the Egyptian market.', stage: 'Validate', tags: ['Go-to-market', 'Italy to Egypt'] },
  ],
  band: work.band,
};
