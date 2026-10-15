// 03-copy.md §8 (/partners). Verbatim, with §0.7 launch resolutions applied (noted inline).
// V5 keep · V13 keep: white-label "your brand only", "Per project", staff aug 3 months, NDA and IP to you;
// V13 omit: replacement terms, client-contact and non-solicit lines, start time (V22) · P5 model only, no numbers (D-18)
// [CONSENT] names and quote omitted (D-05): anonymized descriptions from §9.3.
export const partners = {
  seo: {
    title: 'White-Label Development Partner for Agencies | DiscoverDev',
    description:
      'White-label delivery and staff augmentation for software houses. Senior engineers working under your brand, your process and your client contract.',
  },
  hero: {
    eyebrow: 'For software houses and agencies',
    h1: 'A white-label development partner for software houses',
    body: 'Your extra senior team, under your brand. Take on more projects with white-label delivery or add engineers to your team with staff augmentation. We work in your tools and your process.',
    // §8.1 visual: two-column "White-label" / "Staff augmentation" (HTML labels). Lines reuse §8.3 "What you get".
    models: [
      { label: 'White-label', text: 'A project delivered under your brand' },
      { label: 'Staff augmentation', text: 'Engineers who join your team' },
    ],
  },
  why: {
    title: 'Why software houses work with us',
    cards: [
      { title: 'Capacity', body: 'Say yes to more projects without hiring first.' },
      { title: 'Seniority', body: 'Senior engineers own the quality. AI speeds up the work.' },
      { title: 'Time overlap', body: 'GMT+2. Our day overlaps US mornings and Europe, and Gulf time is 0–2 hours ahead.' },
      { title: 'Arabic and English', body: 'Useful for Gulf clients and bilingual products.' },
      { title: 'Range', body: 'Web, mobile, APIs, AI and ML, data, e-commerce, QA, DevOps and cloud.' },
    ],
  },
  models: {
    title: 'White-label or staff augmentation?',
    // V13 keep (NDA, IP to you): tag dropped.
    answer:
      'Choose white-label when you want us to deliver a whole project under your brand. Choose staff augmentation when you want engineers working inside your team, managed by you. Both start with an NDA, and the IP goes to you.',
    caption: 'White-label delivery, staff augmentation and dedicated team compared',
    columns: ['White-label delivery', 'Staff augmentation', 'Dedicated team'],
    // Dedicated team column: gap G-04 default "Add column, no price" (11 §6). Facts: 09 "dedicated team (min 6 months)";
    // cells reuse 03 §7 (Scale) wording. Not yet in 03 §8.3: add there to make it the source.
    rows: [
      { label: 'What you get', cells: ['A project delivered under your brand', 'Engineers who join your team', 'A dedicated squad of developers, QA and a PM'] },
      { label: 'Who manages day to day', cells: ['We do, inside your process', 'You do', 'Our PM, together with you'] },
      { label: 'Who your client sees', cells: ['Your brand only', 'Your team', 'Agreed on the partner call'] },
      { label: 'Minimum term', cells: ['Per project', '3 months', '6 months'] },
      { label: 'IP and confidentiality', cells: ['NDA, IP to you', 'NDA, IP to you', 'NDA, IP to you'] },
      // P5 → §0.7 "Model only, no numbers" (D-18 default b).
      { label: 'Price', cells: ['Quoted per project', 'Monthly, per engineer', 'Monthly retainer'] },
    ],
  },
  fit: {
    title: 'How we fit into your process',
    // "Your client" and "Your people" lines omitted (V13: client-contact and non-solicit).
    items: [
      { lead: 'Your tools:', text: 'your repo, your tracker, your chat.' },
      { lead: 'Your process:', text: 'your PM, your sprint rhythm, your code review rules.' },
    ],
  },
  quality: {
    title: 'How we keep quality high',
    // Tag "[VERIFY: V13 code review standard]" dropped: not on the §0.7 V13 omit list.
    body: 'AI does the heavy lifting. Senior engineers own the quality, and a person is responsible for every line that reaches users. QA and code review are part of how we deliver.',
  },
  proof: {
    title: 'Partners we work with',
    // [CONSENT] → §0.7: anonymized descriptions from §9.3; Nile Support quote omitted.
    items: [
      { text: 'White-label websites and mobile apps for a software house', where: 'UK' },
      { text: 'AI agents for call operations and staff augmentation', where: 'USA' },
      // Not in §9.3: §8.6 Jumlaty line with the name removed.
      { text: 'An ML engineer placed for 3 months on restaurant procurement', where: 'Saudi Arabia' },
    ],
  },
  faq: {
    title: 'Questions from partners',
    // Omitted: "What if an engineer isn't the right fit?" (V13 replacement), "How fast can engineers start?" (V22),
    // "Will you contact my clients?" (V13 client-contact line).
    items: [
      { id: 'ip', q: 'Who owns the IP in a white-label project?', a: 'You do. White-label work runs under an NDA, and the IP goes to you so you can pass it to your client. The details are in the contract from day one.', link: { label: 'See the white-label work we’ve delivered', to: 'work' as const } },
      { id: 'minimum-term', q: 'What is the minimum term for staff augmentation?', a: 'Three months. That gives the engineer time to learn your codebase and deliver. White-label work is scoped per project.', link: { label: 'Need a whole team instead? See Scale', to: 'scale' as const } },
    ],
  },
  band: {
    title: 'Add senior capacity under your brand',
  },
} as const;
