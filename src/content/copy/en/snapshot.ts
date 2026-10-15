// ReviewSnapshot strings (06 §9.6 example findings; generic, labelled as an example, no client data).
export const snapshot = {
  title: 'Example findings',
  meta: 'Sample report, not a client',
  severity: { critical: 'Critical', high: 'High', medium: 'Medium' },
  status: { planned: 'Fix planned', fixed: 'Fixed' },
  findings: [
    { severity: 'critical', title: 'Row-level security off on 3 tables', area: 'Data and auth', status: 'planned' },
    { severity: 'critical', title: 'Secret key readable in browser code', area: 'Access and security', status: 'fixed' },
    { severity: 'high', title: 'Payment events not checked on the server', area: 'Payments', status: 'planned' },
  ],
  verdict: "Verdict: fix, don't rebuild",
  quote: 'Fixed quote with the report',
  caption: 'Example of findings from a Launch-Ready Review',
} as const satisfies {
  findings: readonly { severity: 'critical' | 'high' | 'medium'; title: string; area: string; status: 'planned' | 'fixed' }[];
  [k: string]: unknown;
};
