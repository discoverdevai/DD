// 03-copy.md §2A.2: delivery scene strings (home hero visual, labelled as an example).
import { shared } from './shared';
export const delivery = {
  path: 'your-product / sprint-board',
  badge: 'Example',
  stage: 'Build',
  week: 'Week 4 of 10',
  weeks: 10,
  current: 4,
  ai: {
    title: 'AI does the heavy lifting',
    states: { pending: 'drafting', done: 'drafted' },
    items: ['Draft the booking API from the spec', 'Write tests for every endpoint', 'Draft migrations and seed data'],
  },
  human: {
    title: 'Senior engineers own the quality',
    states: { pending: 'reviewing', done: 'approved' },
    items: ['Architecture decision recorded', 'Code review: 2 changes requested', 'Payments tested end to end'],
  },
  release: {
    title: 'Release 0.4',
    status: 'Shipped to staging',
    by: 'Signed off by a senior engineer',
    demo: 'Weekly demo with you',
  },
  footer: shared.personResponsible,
  caption: 'Example of a sprint run the DiscoverDev Way: AI drafts the work, then a senior engineer signs off the release.',
} as const;
