// /llms.txt (05 §5.2). Built from the route registry so it only ever lists live pages.
import type { APIRoute } from 'astro';
import { ROUTES, type RouteKey } from '../data/routes';
import { ENTITY_LINE, SITE_URL, CLUTCH_URL } from '../lib/seo';

const SERVICES: [RouteKey, string, string][] = [
  ['review', 'Launch-Ready Review', 'A review of an AI-built or freelancer-built app (security, data rules, payments, code quality, scale, ownership) in about 5 working days. Fixed fee, quoted after a free 30-minute call, credited toward the fix or Build. No useful findings, no charge.'],
  ['validate', 'Validate', '1–2 week product discovery: market read, scope, clickable prototype, fixed build estimate.'],
  ['build', 'Build', 'MVP to production in 8–12 weeks at a fixed price.'],
  ['scale', 'Scale', 'Dedicated squad (developers, QA, PM) on a monthly retainer.'],
  ['partners', 'Partners', 'White-label delivery and staff augmentation for software houses.'],
];
const COMPANY: [RouteKey, string][] = [['about', 'About'], ['launchCheck', 'Launch check (10-question self-assessment)'], ['book', 'Book a call']];

const line = (k: RouteKey, name: string, desc?: string) => (ROUTES[k].live ? `- [${name}](${SITE_URL}${ROUTES[k].path})${desc ? `: ${desc}` : ''}` : null);

export const GET: APIRoute = () => {
  const services = SERVICES.map(([k, n, d]) => line(k, n, d)).filter(Boolean);
  const company = COMPANY.map(([k, n]) => line(k, n)).filter(Boolean);
  const body = [
    '# DiscoverDev',
    '',
    `> ${ENTITY_LINE}`,
    '',
    `Clients keep full IP, with no lock-in. English and Arabic. 5.0 across 11 reviews (Clutch, Upwork, Fiverr and direct): ${CLUTCH_URL}`,
    '',
    ...(services.length ? ['## Services', ...services, ''] : []),
    '## Company',
    `- [Home](${SITE_URL}/)`,
    ...company,
    '- Contact: hello@discoverdev.ai',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
