// 03-copy.md §4 (/launch-check). Questions, points and flags are the scoring config (§4.2); ids fixed by 04 §8.2.
// Option values are o1…oN in listed order (never sent as text to analytics).
export type Flag = 'CRIT' | 'REBUILD';
export interface Option { value: string; label: string; pts: number; flag?: Flag }
export interface Question { id: QuestionId; title: string; helper?: string; options: Option[] }
export type QuestionId = 'built_with' | 'real_users' | 'launch_when' | 'data_rules' | 'keys_browser' | 'signup' | 'payments' | 'code_access' | 'handover' | 'operations';

const o = (labels: [string, number, Flag?][]): Option[] => labels.map(([label, pts, flag], i) => ({ value: `o${i + 1}`, label, pts, ...(flag ? { flag } : {}) }));

export const questions: Question[] = [
  { id: 'built_with', title: 'What did you build your app with?', options: o([['Lovable', 0], ['Bolt', 0], ['v0', 0], ['Cursor or another AI coding tool', 0], ['A freelancer or agency', 0], ['My own team', 0], ['Something else', 0]]) },
  { id: 'real_users', title: 'How many real people use it today?', options: o([['Nobody yet. It’s a demo.', 0], ['Testers or a waitlist', 0], ['Up to 100 active users', 0], ['More than 100 active users', 0]]) },
  { id: 'launch_when', title: 'When do you want to launch?', options: o([['Within 2 weeks', 0], ['Within a month', 0], ['In 1–3 months', 0], ['Just exploring', 0]]) },
  { id: 'data_rules', title: 'Can each signed-in user see only their own data?', helper: 'In Supabase this is called Row Level Security (RLS). In Firebase it’s called Security Rules.', options: o([['Yes. Rules are on for every table, and we’ve tested them.', 0], ['Rules are on for some tables.', 2], ['No, or I haven’t checked.', 3, 'CRIT'], ['I’m not sure what this means.', 3, 'CRIT']]) },
  { id: 'keys_browser', title: 'Are any secret keys in the code that runs in the browser?', helper: 'For example a Stripe secret key, an OpenAI key or a Supabase service key.', options: o([['No. Secret keys live only on the server.', 0], ['Maybe. I’m not sure.', 2], ['Yes.', 3, 'CRIT'], ['I don’t know how to check.', 2]]) },
  { id: 'signup', title: 'Who can create an account?', options: o([['Only people we invite.', 0], ['Anyone, and they must confirm their email first.', 0], ['Anyone, with no email check.', 1], ['I’m not sure.', 2]]) },
  { id: 'payments', title: 'Does your app take payments?', options: o([['Not yet.', 0], ['Yes, and our server confirms each payment with the payment provider.', 0], ['Yes, but I’m not sure how payments are confirmed.', 2], ['Yes, and the app trusts the payment screen without checking.', 3, 'CRIT']]) },
  { id: 'code_access', title: 'Where does the code live, and who owns the accounts?', options: o([['In a code repository and accounts I own (code, hosting, database).', 0], ['Only inside the AI builder. I haven’t exported it yet.', 1], ['In my repository, but some accounts belong to a freelancer or agency.', 2], ['I don’t have access to the code.', 3, 'REBUILD']]) },
  { id: 'handover', title: 'If you hired a new developer tomorrow, could they work on it within a day?', options: o([['Yes. It’s tidy and documented.', 0], ['Probably, with some help.', 1], ['Hard to say. Fixes often break other things.', 2], ['No. Every change breaks something else.', 3, 'REBUILD']]) },
  { id: 'operations', title: 'If something broke at 2 a.m., would you know, and could you undo it?', helper: 'Think of error alerts, backups and a separate test copy of the app.', options: o([['Yes. We have all three.', 0], ['We have some of them.', 1], ['None yet.', 2], ['I’m not sure.', 2]]) },
];

export const riskLines: Partial<Record<QuestionId, string>> = {
  data_rules: 'Users may be able to see each other’s data. Turn on and test data rules for every table.',
  keys_browser: 'A secret key may be readable in the browser. Move it to the server and replace the key.',
  signup: 'Anyone can sign up without confirming their email. Add email confirmation before launch.',
  payments: 'Payments may not be confirmed on your server. Check each payment with your payment provider before you give access.',
  code_access: 'You don’t fully control your code or accounts. Move them into your own name before you launch.',
  handover: 'The code is hard to change safely. Get a second opinion on what to keep and what to replace.',
  operations: 'You may not know when something breaks, or be able to undo it. Add error alerts, backups and a test copy.',
};

export const quizCopy = {
  seo: {
    title: 'Is My AI-Built App Ready to Launch? Free Check | DiscoverDev',
    description: 'Answer 10 quick questions about your Lovable, Bolt, v0 or Cursor app. See your launch risks in security, payments, code and operations in 3 minutes.',
  },
  h1: 'Is your AI-built app launch-ready?',
  intro: '10 questions. About 3 minutes. You see your result straight away, with no email needed. If you’re not sure of an answer, pick “Not sure”. That’s useful too.',
  start: 'Start the check',
  privacy: 'Your answers stay in your browser unless you ask us to email your report.',
  resume: { text: 'Continue where you left off', restart: 'Start over' },
  progress: 'Question {n} of 10',
  why: 'Why we ask',
  next: 'Next', back: 'Back', finish: 'See my result',
  error: 'Choose an answer to continue',
  noscript: 'The check needs JavaScript. You can still book a Review or read the guide.',
  dimensions: { security: 'Security and data', payments: 'Payments', code: 'Code and ownership', operations: 'Operations' },
  levels: { low: 'Low risk', some: 'Some risk', high: 'High risk' },
  topRisks: 'Your top risks',
  retake: 'Retake the check',
  results: {
    ready_polish: { h2: 'Launch-ready, with some polish', meaning: 'Your answers show no critical risks.', body: 'Good work. Your basics look covered. Before launch, double-check the items below, and test them with a second account that isn’t yours. If you want a senior team to confirm it before real money moves, a short call will tell you if a Review is worth it.', cta: 'clarity', pillarLink: 'Read the guide: How to take an AI-built app to production' },
    fix_first: { h2: 'Fix first, then launch', meaning: 'You have one or two gaps that could hurt you after launch.', body: 'Much of your app looks ready, but the risks below can hurt real users and real payments. A Launch-Ready Review confirms what’s really there, ranks it, tells you whether it can be fixed without a rebuild, and gives you a fixed price for the fix.', cta: 'review' },
    high_risk: { h2: 'High risk. Don’t launch yet.', meaning: 'Your answers show several critical gaps, such as data that other users may see or keys the browser can read.', body: 'This doesn’t mean starting over. It means the next step is to find exactly what’s open and close it before real users arrive. Book a Review and tell us your launch date. We’ll start with the checks that matter most.', cta: 'review', urgency: 'You plan to launch soon with real users. Book this week.', secondary: 'Talk it through first: book a free clarity call' },
    rebuild_candidate: { h2: 'You may need to rebuild, or take back control first', meaning: 'Your answers point to an ownership or code-structure problem, not just a few fixes.', body: 'If you can’t reach your code, or every change breaks something, fixing issues one by one gets expensive. The first step is a plain conversation: what you own, what’s worth keeping, and whether to test the idea again or build it properly.', cta: 'clarity', links: { validate: 'See Validate', build: 'See Build' } },
  },
  email: {
    heading: 'Get your full report by email',
    body: 'Your report explains each risky answer and how to fix it. It’s free.',
    label: 'Email',
    button: 'Email me my report',
    consent: 'We’ll email your report to this address. We won’t add you to a mailing list.',
    sending: 'Sending…',
    success: 'Sent. Your report is on its way to your inbox.',
    failed: 'Couldn’t send. Your result is still on this page.',
    retry: 'Try again',
    errEmpty: 'Enter your email.',
    errFormat: 'Check your email. It needs an @ and a domain, like name@company.com.',
    errConsent: 'Tick the box so we can email you.',
  },
  below: {
    title: 'What the check looks at',
    items: ['Who can see which data, and whether secret keys are exposed', 'Whether payments are confirmed on your server', 'Who owns the code and accounts, and whether you could recover from a bad night'],
    pillar: 'Read the guide: How to take an AI-built app to production',
  },
} as const;
