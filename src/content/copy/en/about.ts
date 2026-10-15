// 03-copy.md §12 (/about). Verbatim, with §0.7 launch resolutions applied (noted inline).
// V1 omit (no founding year) · [TEAM] omit §12.3 · V17 omit §12.8 · [CONSENT] names → anonymized (D-05)
// V8 keep · V9: entity wording omitted, "presence in Texas, USA" kept (D-08).
export const about = {
  seo: {
    title: 'About DiscoverDev: Senior Product Team, Egypt & US',
    description:
      'A product and engineering company with a US presence and an engineering hub in Alexandria, Egypt. Senior teams that stay. 5.0 across 11 reviews.',
  },
  hero: {
    h1: 'About DiscoverDev',
    lead: 'Most teams just build what you ask for. We help you build the right thing, then ship it fast, and you own all of it.',
  },
  story: {
    // V1 → §0.7 omit: "Founded in 2024." removed.
    body: 'DiscoverDev is a product and engineering company. The “Discover” in our name is how we work: before we write code, we make sure it’s the right thing to build. Then a senior team builds it, ships it and stays. We have clients on 4 continents.',
  },
  beliefs: {
    title: 'What we believe',
    // Examples anonymized per §0.7 [CONSENT]: wording from §0.4 / §9.3 descriptions and V12 ("EdTech AI platform, Egypt").
    pillars: [
      { title: 'Discover first', body: 'Building the wrong thing fast is still waste. Example: feasibility sprints for a furniture e-commerce company in Saudi Arabia led to clear build, pivot or shelve decisions.' },
      { title: 'Senior teams that stay', body: 'One team from first call to launch and after, with no handoff gaps. Example: a 12-month embedded team for a B2B learning platform in the UK.' },
      { title: 'AI that pays for itself', body: 'AI does the heavy lifting, and senior engineers own the quality. Example: an EdTech AI platform in Egypt cut its AI costs by 60–90%.' },
    ],
  },
  where: {
    title: 'Where we work',
    // Tags "[VERIFY: V8 call hours]" (keep) and "[VERIFY: V9 Texas entity wording]" (D-08: "Texas, USA" only) dropped.
    body: 'Our engineering hub is in Alexandria, Egypt, and we have a presence in Texas, USA. Alexandria is on GMT+2. Our working day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead. We work in Arabic and English.',
    // §12.4 visual: time-overlap strip. No hour ranges or seasonal claims (11 §5).
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
  },
  record: {
    title: 'Track record',
    // Rating line + Clutch link come from the i18n layer (proof.rating, proof.clutch).
    // Retention line → §0.7 replace: "Four clients expanded scope with us."
    items: ['Clients on 4 continents', 'AI in production across multiple clients', 'Four clients expanded scope with us.'],
  },
  how: {
    title: 'How we work',
    steps: [
      { title: 'Discover', body: 'Define the right product.' },
      { title: 'Plan', body: 'Roadmap, tech and team before code.' },
      { title: 'Build', body: 'Short sprints with results every week. AI does the heavy lifting; senior engineers own the quality.' },
      { title: 'Ship and stay', body: 'Deploy, monitor and keep improving.' },
    ],
    line: 'A person is responsible for every line that reaches your users. You own everything: full IP, no lock-in, clear contract from day one.',
  },
  build: {
    title: 'What we can build',
    items: [
      'Product strategy and discovery',
      'Product design (UX and UI)',
      'Web, mobile and API development',
      'AI and ML (agents, Arabic and English chatbots, document processing, computer vision, recommendations)',
      'Data engineering and analytics',
      'E-commerce and marketplaces',
      'QA, DevOps and cloud',
      'Technical consulting and code audits',
      'Dedicated teams',
    ],
  },
  band: {
    title: 'Talk to the team',
  },
} as const;
