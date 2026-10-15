// 03-copy.md §2.2a (Signal run panel). Verbatim. Proof-bank wording only.
export const runPanel = {
  title: 'Launch-Ready Review',
  meta: 'Example, not a client',
  ai: {
    label: 'AI',
    done: 'done',
    pending: 'checking',
    rows: [
      'check access and security',
      'check data and backups',
      'check payments end to end',
      'check code quality',
      'check scale and running costs',
      'check ownership and handover',
    ],
  },
  human: {
    done: 'Signed off',
    pending: 'waiting',
    rows: [
      { who: 'Senior engineers', what: 'Own the quality' },
      { who: 'Product lead', what: 'Verdict: keep, fix or replace' },
    ],
  },
  footer: 'A person is responsible for every line that reaches your users.',
  caption: 'Example of how a Launch-Ready Review runs: AI checks six areas, then people sign off',
  chips: { ai: 'AI-accelerated', human: 'Senior sign-off' },
} as const;
