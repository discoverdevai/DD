// 03-copy.md §2.2b (home hero workspace scene). Example only; generic findings, no client data.
export const workspace = {
  path: 'your-app / launch-ready-review',
  badge: 'Example',
  sidebarTitle: 'Review areas',
  areas: ['Access and security', 'Data', 'Payments', 'Code quality', 'Scale and running costs', 'Ownership and handover'],
  findingsTitle: 'Findings',
  filters: ['All', 'Critical', 'High', 'Medium'],
  rows: [
    { sev: 'critical', label: 'Critical', title: 'Row-level security off on 3 tables', area: 'Data' },
    { sev: 'critical', label: 'Critical', title: 'Secret key readable in browser code', area: 'Access and security' },
    { sev: 'high', label: 'High', title: 'Payment events not checked on the server', area: 'Payments' },
    { sev: 'medium', label: 'Medium', title: 'No error alerts or backups yet', area: 'Scale and running costs' },
    { sev: 'medium', label: 'Medium', title: 'Hosting account in a freelancer’s name', area: 'Ownership and handover' },
  ],
  states: { pending: 'AI flagged', done: 'Verified' },
  runTitle: 'AI checks',
  runLines: ['checking data rules on every table', 'looking for secret keys in browser code', 'tracing payment events end to end', 'estimating hosting and AI costs'],
  signoff: { verdict: 'Verdict: fix, don’t rebuild', by: 'Signed off by a senior engineer', quote: 'Fixed quote with the report' },
  caption: 'Example of a Launch-Ready Review in progress: AI checks the app, a senior engineer verifies each finding and signs off the verdict',
} as const;
