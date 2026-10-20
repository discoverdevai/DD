// /llms.txt (05 §5.2; strategy v2 order: lifecycle first, Review as one service). Built from the route registry so it only ever lists live pages.
// Guides come from publishedInsights(), which never returns drafts, so an unpublished article cannot appear here.
import type { APIRoute } from 'astro';
import { ROUTES, type RouteKey } from '../data/routes';
import { insightPath, publishedInsights } from '../lib/insights';
import { ENTITY_LINE, SITE_URL, CLUTCH_URL } from '../lib/seo';
import { caseStudy } from '../content/copy/en/work';

const SERVICES: [RouteKey, string, string][] = [
  ['validate', 'Validate', '1–2 week product discovery: market read, scope, clickable prototype, fixed build estimate.'],
  ['build', 'Build', 'MVP to production in 8–12 weeks at a fixed price.'],
  ['scale', 'Scale', 'Dedicated squad (developers, QA, PM) on a monthly retainer.'],
  ['review', 'Launch-Ready Review', 'A review of an AI-built or freelancer-built app (security, data rules, payments, code quality, scale, ownership) in about 5 working days. From $1,490 (USD): a fixed fee for your app, quoted after a free 30-minute call, credited toward the fix or Build. No useful findings, no charge.'],
  ['partners', 'Partners', 'White-label delivery and staff augmentation for software houses.'],
];
const COMPANY: [RouteKey, string][] = [['howWeWork', 'How we work (the DiscoverDev Way: steps, frameworks, greenfield and brownfield)'], ['about', 'About'], ['work', 'Work'], ['insights', 'Insights'], ['launchCheck', 'Launch check (10-question self-assessment)'], ['book', 'Book a call']];

const line = (k: RouteKey, name: string, desc?: string) => (ROUTES[k].live ? `- [${name}](${SITE_URL}${ROUTES[k].path})${desc ? `: ${desc}` : ''}` : null);

export const GET: APIRoute = async () => {
  const services = SERVICES.map(([k, n, d]) => line(k, n, d)).filter(Boolean);
  // Pillar first, then clusters in publish order (05 §5.2).
  const insights = ROUTES.insights.live ? await publishedInsights('en') : [];
  const guides = insights
    .sort((a, b) => Number(b.data.role === 'pillar') - Number(a.data.role === 'pillar') || a.data.publishedAt.getTime() - b.data.publishedAt.getTime() || a.id.localeCompare(b.id))
    .map((e) => `- [${e.data.h1}](${SITE_URL}${insightPath(e)}): ${e.data.description}`);
  // Case studies (05 §5.2 "## Work"): anonymized title from the case page (D-06), never a client name.
  const work = [line('workEdulens', caseStudy.h1)].filter(Boolean);
  // V1.0: the case lives on the home page; same anonymized fact as the tile (09), no client name.
  const homeWork = [`- [AI agents for EduLens, an EdTech platform in Egypt](${SITE_URL}/#work): AI costs down 60–90%, depending on how often content is reused.`, `- [Client reviews](${SITE_URL}/#reviews): eight client quotes and the 5.0 rating across 11 reviews.`, `- [FAQ](${SITE_URL}/#faq): pricing, timeline, code ownership, tools and stacks, time zones.`];
  const company = COMPANY.map(([k, n]) => line(k, n)).filter(Boolean);
  const body = [
    '# DiscoverDev',
    '',
    `> ${ENTITY_LINE}`,
    '',
    'How we work: The DiscoverDev Way. Discover first. Build with AI. Seniors sign off. We find the right thing to build first, AI does the heavy lifting, and a senior engineer signs off every release. One team from discovery to after launch.',
    '',
    `Reviews: 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct): ${CLUTCH_URL}`,
    '',
    'Book: a free 30-minute clarity call, no pitch, at ' + SITE_URL + '/book',
    '',
    '## Facts',
    '- Engineering hub in Alexandria, Egypt (GMT+2); presence in Texas, USA',
    '- Working day overlaps US mornings and Europe; calls run in US and Gulf hours',
    '- Clients on 4 continents; four clients expanded scope with us',
    '- Full IP, in your own repository, no lock-in',
    '- Languages: English and Arabic',
    '',
    // V1.0 (03 §2V1): while the service pages are off, the three offers are listed as text and point to the home section.
    ...(services.length ? ['## Services', ...services, ''] : ['## Services', ...SERVICES.slice(0, 3).map(([, n, d]) => `- [${n}](${SITE_URL}/#services): ${d}`), `- Details: ${SITE_URL}/#services`, '']),
    ...(work.length ? ['## Work', ...work, ''] : ['## Work', ...homeWork, '']),
    ...(guides.length ? ['## Guides', ...guides, ''] : []),
    '## Company',
    `- [Home](${SITE_URL}/)`,
    ...company,
    '- Contact: hello@discoverdev.ai',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
