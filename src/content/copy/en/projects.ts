// 03 §9.3 / §2A.8b (Oct 16): one list of projects for the home bento and the /work story rows. Every brief, "what we
// did" and result comes from 09 (Portfolio, Case studies); a result appears only where 09 states one. Titles name the
// client (Mohamed, Oct 27, D-05), except work 09 leaves unnamed (support agent, individual founders, tourism research); client quotes (approved with names and roles, D-05) are paired by reviewer.
import { shared } from './shared';
import { SHOWCASE_PREVIEW } from '../../../lib/preview';
export type Stage = 'validate' | 'build' | 'scale';
type Art = 'edtech' | 'ar' | 'lms' | 'health' | 'ride' | 'agent' | 'research' | 'sprint' | 'devices' | 'data';
export interface Project {
  id: string; stage: Stage; industry: string; where?: string; title: string;
  brief?: string; did: string; result?: string; metric?: { value: string; label: string };
  art: Art; quotes?: readonly string[]; link?: 'workEdulens' | 'partners';
  // Real product screens (exported from our Figma files, Oct 16) replace the drawing. Files under assets/projects/.
  // `device` picks the frame: browser window for web apps, tablet for the iPad apps, phone for mobile apps, combo = web app with the mobile app in front (Oct 27). Two screens = a layered pair.
  screens?: readonly string[]; device?: 'browser' | 'tablet' | 'phone' | 'combo'; screenAlt?: string;
  // `hold`: the decision that keeps a project off the live site (e.g. D-07). Shown only in a local preview build.
  hold?: string;
}

const all: readonly Project[] = [
  { id: 'edtech-agents', stage: 'build', industry: 'EdTech', where: 'Egypt', title: 'AI agents for EduLens, an EdTech platform', brief: 'Every request was processed from scratch, so AI costs rose with every new student.', did: 'Captions first, answers shared across users and the right model for each task.', result: 'EduLens cut its AI costs by 60–90%, depending on how often content is reused, and cost now grows slower than the user base.', metric: { value: '60–90%', label: 'lower AI cost' }, art: 'edtech', quotes: ['Youssef'], link: 'workEdulens' },
  { id: 'ar-commerce', stage: 'build', industry: 'E-commerce', where: 'Saudi Arabia', title: 'NJWAR, Athkado’s AR furniture store with AI recommendations', did: 'Market study, discovery, UX/UI, development, an AI recommendation engine and AR visualization.', art: 'ar', quotes: ['Nojoud Alarfaj'], screens: ['njwar-web.webp', 'njwar-ar.webp'], device: 'combo', screenAlt: 'NJWAR web store in Arabic, with the AR view on a phone placing an armchair in a real room' }, // NJWAR = Athkado's store (Mohamed, Oct 27)
  { id: 'yawmy-care', stage: 'build', industry: 'Childcare · our own product', title: 'Yawmy Care, a nursery management platform', did: 'One platform for parents, teachers and management, with billing and multiple locations. Built as our own white-label product.', result: 'Launching in 2027.', art: 'lms', screens: ['yawmy-dashboard.webp', 'yawmy-parent-logs.webp'], device: 'combo', screenAlt: 'Yawmy Care nursery dashboard with daily attendance, and the parent app showing a child’s day: mood, meals and nap' },
  { id: 'home-services', stage: 'build', industry: 'Marketplace', where: 'USA', title: 'Rushr, a home-services marketplace', brief: 'A greenfield product for booking verified home-service pros.', did: 'A full product team: post a job, auto-match the nearest verified contractor, Stripe escrow, real-time messaging and admin tools.', art: 'devices', screens: ['rushr-m-dispatch.webp', 'rushr-m-searching.webp'], device: 'phone', screenAlt: 'Rushr app showing a matched plumber with accept and decline' },
  { id: 'health-app', stage: 'build', industry: 'HealthTech', title: 'BioBank, a health app that explains lab reports', did: 'Plain-language explanations of lab reports, recommendations, conversational follow-up and medical safety guardrails.', art: 'health' },
  { id: 'call-ops', stage: 'build', industry: 'AI agents', where: 'USA', title: 'AI agents for Nile Support’s call operations', did: 'AI agents for call operations, a landing page and staff augmentation.', art: 'agent', quotes: ['CEO'] },
  { id: 'support-agent', stage: 'build', industry: 'Support automation', title: 'Customer-support AI agent', brief: 'Many users asked the same question at once, and each request paid for its own AI call.', did: 'A runtime cache answers identical questions once and shares the result.', result: 'AI cost follows unique questions, not total requests.', art: 'agent' },
  { id: 'white-label', stage: 'build', industry: 'Software house', where: 'UK', title: 'White-label websites and mobile apps for Amstadd', did: 'Websites and mobile apps delivered under a software house’s brand.', art: 'devices', link: 'partners' },
  { id: 'lms-team', stage: 'scale', industry: 'B2B learning', where: 'UK', title: 'Embedded product team for Upscend, a B2B learning platform', did: 'A dedicated PM and engineering team owning the roadmap, backlog and sprints for 12 months.', result: 'Supports the platform’s enterprise growth in the US and UK.', metric: { value: '12', label: 'months, one team' }, art: 'lms' },
  { id: 'edtech-data', stage: 'scale', industry: 'EdTech', where: 'Egypt', title: 'Data and ML for Pyramakerz, an EdTech platform with 20,000+ students', did: 'Data analysis, machine learning, automations and data engineering.', art: 'data' },
  { id: 'ride-ml', stage: 'scale', industry: 'Mobility', where: 'Saudi Arabia', title: 'Data and ML team for Arheb, a smart ride-sharing platform', brief: 'The first smart ride-sharing platform in Saudi Arabia.', did: 'An embedded data and ML team.', art: 'ride' },
  { id: 'procurement-ml', stage: 'scale', industry: 'Restaurant procurement', where: 'Saudi Arabia', title: 'ML engineer for Jumlaty’s restaurant procurement', did: 'An ML engineer placed with the team for 3 months.', art: 'data' },
  { id: 'feasibility', stage: 'validate', industry: 'Product discovery', where: 'Saudi Arabia', title: 'Feasibility sprints for Athkado across several startup ideas', did: 'Rapid market studies and feasibility sprints.', result: 'A build, pivot or shelve decision for each idea.', art: 'sprint' },
  { id: 'sports-gtm', stage: 'validate', industry: 'Sports', where: 'Italy to Egypt', title: 'Market entry plan for Fantacalcio', brief: 'Enter the Egyptian market.', did: 'Market research and a go-to-market plan.', art: 'research', quotes: ['Roberto'] },
  { id: 'demand-test', stage: 'validate', industry: 'Market study', title: 'Demand testing for Zest before building', did: 'A market study and sentiment analysis.', art: 'research' },
  { id: 'founders', stage: 'validate', industry: 'Founders', where: shared.foundersWhere, title: 'Discovery for individual founders', did: shared.projectFoundersDid, art: 'research', quotes: ['Andrei Chejneanu', 'Lea Nechitailo'] },
  { id: 'tourism', stage: 'validate', industry: 'Tourism and hospitality', where: 'Kuwait', title: 'Market research for a consulting firm', did: 'Tourism and hospitality market research.', art: 'research', quotes: ['Farah Alkhaldi'] },
];

// Held projects (hold set) appear only in a local preview build (SHOWCASE_MOCK=1), never on the live site.
const MOCK = SHOWCASE_PREVIEW;
export const projects: readonly Project[] = all.filter((p) => !p.hold || MOCK);

export const showcase = {
  caseLink: 'Read the case study',
  partnersLink: 'See Partners',
  allLink: 'See all our work',
  // Home shows the bento again (Oct 21, Mohamed): the case with a number first, four more under it; /work lists every project.
  ids: ['edtech-agents', 'lms-team', 'health-app', 'support-agent', 'home-services', 'ride-ml', 'feasibility', 'call-ops', 'edtech-data', 'sports-gtm', 'white-label', 'founders'],
  hint: 'Swipe or use the arrows',
  moreTitle: 'Selected work', // H2 above the chapter
  othersTitle: 'More products we’ve helped build', // h3 above the bento
  labels: { brief: 'The brief', did: 'What we did', result: 'Result' },
  stages: { all: 'All', validate: 'Validate', build: 'Build', scale: 'Scale' } as Record<'all' | Stage, string>,
  filterLabel: 'Filter by stage',
} as const;

// 03 §2A.8a project chapters (Oct 16): one product per full screen, real screens from our Figma on 3D devices.
export interface Chapter {
  id: string; project: string; name: string; tags: readonly string[]; line: string; note?: string;
  web?: { file: string; alt: string }; phones: readonly { file: string; alt: string }[];
  tryIt?: { label: string; href: string }; hold?: string;
}
const allChapters: readonly Chapter[] = [
  { id: 'njwar', project: 'ar-commerce', name: 'NJWAR', tags: ['Build', 'E-commerce', 'Saudi Arabia'],
    line: 'An AR furniture store: place a piece in your room at real size, change its color, rotate it and add more.',
    note: 'Web store on the laptop, AR on the phone. On a phone, the demo places a piece of furniture in your room. The demo uses a sample brand.',
    web: { file: 'njwar-web.webp', alt: 'NJWAR web store home page in Arabic, inviting shoppers to try furniture in their home' },
    phones: [{ file: 'njwar-ar.webp', alt: 'NJWAR mobile AR view: an armchair placed in a room, with color and rotate controls' }],
    tryIt: { label: 'Try our AR prototype', href: 'https://furniture-webar.pages.dev/' } },
  { id: 'yawmy', project: 'yawmy-care', name: 'Yawmy Care', tags: ['Build', 'Childcare', 'Our own product'],
    line: 'Our own nursery platform for management, teachers and parents, with billing and multiple locations.',
    note: 'Admin dashboard on the web, parent app on the phone.',
    web: { file: 'yawmy-dashboard.webp', alt: 'Yawmy Care admin dashboard with totals and a daily attendance chart' },
    phones: [{ file: 'yawmy-parent-home.webp', alt: 'Yawmy Care parent app: today’s attendance and schedule' }, { file: 'yawmy-parent-logs.webp', alt: 'Yawmy Care parent app: daily log with mood, meals and nap' }] },
  { id: 'rushr', project: 'home-services', name: 'Rushr', tags: ['Build', 'Marketplace', 'USA'],
    line: 'A home-services marketplace: post a job, get matched with the nearest verified pro, pay through escrow.',
    phones: [{ file: 'rushr-m-searching.webp', alt: 'Rushr app searching for a technician nearby' }, { file: 'rushr-m-dispatch.webp', alt: 'Rushr app showing a matched plumber with accept and decline' }, { file: 'rushr-m-progress.webp', alt: 'Rushr request in progress with live cost' }],
    },
  // Preview only (Oct 21, Mohamed asked for a mockup): Upscend's own public marketing screen of the learner view. Held until Upscend approves screens (D-05).
  { id: 'upscend', project: 'lms-team', name: 'Upscend', tags: ['Scale', 'B2B learning', 'UK'],
    line: 'An AI-powered learning platform with an AI tutor, an AI quiz generator and video checkpoints. Our dedicated PM and engineering team owned its roadmap, backlog and sprints for 12 months.',
    web: { file: 'upscend-Matar.webp', alt: 'Upscend AI tutor: a learner chatting with the assistant about a course' },
    phones: [], hold: 'D-05 screens' },
];
export const chapters: readonly Chapter[] = allChapters.filter((c) => !c.hold || MOCK);
export const chapterCopy = { label: 'Featured work', view: 'View project' } as const;
