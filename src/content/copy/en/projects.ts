// 03 §9.3 / §2A.8b (Oct 16): one list of projects for the home bento and the /work story rows. Every brief, "what we
// did" and result comes from 09 (Portfolio, Case studies); a result appears only where 09 states one. Titles are
// anonymized (case names need consent); client quotes (approved with names and roles, D-05) are paired by reviewer.
export type Stage = 'validate' | 'build' | 'scale';
export type Art = 'edtech' | 'ar' | 'lms' | 'health' | 'ride' | 'agent' | 'research' | 'sprint' | 'devices' | 'data';
export interface Project {
  id: string; stage: Stage; industry: string; where?: string; title: string;
  brief?: string; did: string; result?: string; metric?: { value: string; label: string };
  art: Art; quotes?: readonly string[]; link?: 'workEdulens' | 'partners';
  // A real product screen (from Figma) replaces the drawing once the client approves screens (D-05). Path under
  // assets/projects/, read at build time like the client logos.
  screen?: string;
}

export const projects: readonly Project[] = [
  { id: 'edtech-agents', stage: 'build', industry: 'EdTech', where: 'Egypt', title: 'AI agents for an EdTech platform', brief: 'Every request was processed from scratch, so AI costs rose with every new student.', did: 'Captions first, answers shared across users and the right model for each task.', result: 'AI costs down 60–90%, and cost now grows slower than the user base.', metric: { value: '60–90%', label: 'lower AI cost' }, art: 'edtech', quotes: ['Youssef'], link: 'workEdulens' },
  { id: 'ar-commerce', stage: 'build', industry: 'E-commerce', where: 'Saudi Arabia', title: 'AR furniture store with AI recommendations', did: 'Market study, discovery, UX/UI, development, an AI recommendation engine and AR visualization.', art: 'ar', quotes: ['Nojoud Alarfaj'] },
  { id: 'health-app', stage: 'build', industry: 'HealthTech', title: 'Health app that explains lab reports', did: 'Plain-language explanations of lab reports, recommendations, conversational follow-up and medical safety guardrails.', art: 'health' },
  { id: 'call-ops', stage: 'build', industry: 'AI agents', where: 'USA', title: 'AI agents for call operations', did: 'AI agents for call operations, a landing page and staff augmentation.', art: 'agent', quotes: ['CEO'] },
  { id: 'support-agent', stage: 'build', industry: 'Support automation', title: 'Customer-support AI agent', brief: 'Many users asked the same question at once, and each request paid for its own AI call.', did: 'A runtime cache answers identical questions once and shares the result.', result: 'AI cost follows unique questions, not total requests.', art: 'agent' },
  { id: 'white-label', stage: 'build', industry: 'Software house', where: 'UK', title: 'White-label websites and mobile apps', did: 'Websites and mobile apps delivered under a software house’s brand.', art: 'devices', link: 'partners' },
  { id: 'lms-team', stage: 'scale', industry: 'B2B learning', where: 'UK', title: 'Embedded product team for a B2B learning platform', did: 'A dedicated PM and engineering team owning the roadmap, backlog and sprints for 12 months.', result: 'Supports the platform’s enterprise growth in the US and UK.', metric: { value: '12', label: 'months, one team' }, art: 'lms' },
  { id: 'edtech-data', stage: 'scale', industry: 'EdTech', where: 'Egypt', title: 'Data and ML for an EdTech platform with 20,000+ students', did: 'Data analysis, machine learning, automations and data engineering.', art: 'data' },
  { id: 'ride-ml', stage: 'scale', industry: 'Mobility', where: 'Saudi Arabia', title: 'Data and ML team for a smart ride-sharing platform', brief: 'The first smart ride-sharing platform in Saudi Arabia.', did: 'An embedded data and ML team.', art: 'ride' },
  { id: 'procurement-ml', stage: 'scale', industry: 'Restaurant procurement', where: 'Saudi Arabia', title: 'ML engineer for restaurant procurement', did: 'An ML engineer placed with the team for 3 months.', art: 'data' },
  { id: 'feasibility', stage: 'validate', industry: 'Product discovery', where: 'Saudi Arabia', title: 'Feasibility sprints across several startup ideas', did: 'Rapid market studies and feasibility sprints.', result: 'A build, pivot or shelve decision for each idea.', art: 'sprint' },
  { id: 'sports-gtm', stage: 'validate', industry: 'Sports', where: 'Italy to Egypt', title: 'Market entry plan for a sports company', brief: 'Enter the Egyptian market.', did: 'Market research and a go-to-market plan.', art: 'research', quotes: ['Roberto'] },
  { id: 'demand-test', stage: 'validate', industry: 'Market study', title: 'Demand testing before building', did: 'A market study and sentiment analysis.', art: 'research' },
  { id: 'founders', stage: 'validate', industry: 'Founders', where: 'Kuwait, Switzerland, UK, Spain', title: 'Discovery for individual founders', did: 'Market research, go-to-market and discovery.', art: 'research', quotes: ['Andrei Chejneanu', 'Lea Nechitailo'] },
  { id: 'tourism', stage: 'validate', industry: 'Tourism and hospitality', where: 'Kuwait', title: 'Market research for a consulting firm', did: 'Tourism and hospitality market research.', art: 'research', quotes: ['Farah Alkhaldi'] },
];

export const showcase = {
  label: 'Selected work',
  title: 'Products we’ve helped build',
  caseLink: 'Read the case study',
  partnersLink: 'See Partners',
  allLink: 'See all our work',
  ids: ['edtech-agents', 'ar-commerce', 'lms-team', 'health-app', 'support-agent'],
  labels: { brief: 'The brief', did: 'What we did', result: 'Result' },
  stages: { all: 'All', validate: 'Validate', build: 'Build', scale: 'Scale' } as Record<'all' | Stage, string>,
  filterLabel: 'Filter by stage',
} as const;
