// SEO + JSON-LD builders (05 §4). One @graph per page; text must match what the page shows.
import { ROUTES, type RouteKey } from '../data/routes';
export const SITE_URL = 'https://discoverdev.ai';
export const ORG_ID = `${SITE_URL}/#org`;
const WEBSITE_ID = `${SITE_URL}/#website`;
export const LINKEDIN_URL = 'https://www.linkedin.com/company/discoverdev';
export const CLUTCH_URL = 'https://clutch.co/profile/discoverdev';

/** Entity line, D-43 option (c): footer line + location sentence (05 §4). */
export const ENTITY_LINE =
  'DiscoverDev is a product and engineering company that helps founders and teams build the right product, then ship it fast. Senior teams, AI-accelerated, and you own everything. Engineering hub in Alexandria, Egypt; clients in the Gulf and the US.';

/** Absolute canonical: no trailing slash, no query (04 §2). */
export const canonical = (path: string) => {
  const clean = path.split(/[?#]/)[0].replace(/\.html$/, '').replace(/\/index$/, '/');
  const out = clean !== '/' ? clean.replace(/\/$/, '') : '/'; // home keeps its slash so it matches the sitemap
  return `${SITE_URL}${out}`;
};

// Organization and WebSite `url` = the home canonical, with its slash (SEO-AEO spec audit Nov 6, §12.1).
export const orgStub = { '@type': 'Organization', '@id': ORG_ID, name: 'DiscoverDev', url: `${SITE_URL}/` };

type OfferKey = 'validate' | 'build' | 'scale';
interface OfferText { name: string; serviceType: string; description: string }
/** The Organization's words in one language: the page's own entity line, topics and the inline offers. */
export interface OrgText { description: string; knowsAbout: readonly string[]; offers: Record<OfferKey, OfferText> }

/** English defaults (09 Offer; same words as the home cards, 03 §2A.6). Offers are inline only while their page is off. */
const ORG_EN: OrgText = {
  description: ENTITY_LINE,
  // Only topics the live pages show (05 §0); the Review topics return with the Review page (V1.2).
  knowsAbout: ['MVP development', 'Product discovery', 'Dedicated development teams', 'AI agents and chatbots', ...(ROUTES.review.live ? ['AI app security review', 'Production readiness', 'LLM cost optimization'] : [])],
  offers: {
    validate: { name: 'Validate', serviceType: 'Product discovery', description: 'Product discovery in 1–2 weeks at a fixed fee: market and competitor read, product scope, a clickable prototype and a fixed build estimate. The fee credits toward Build.' },
    build: { name: 'Build', serviceType: 'MVP development', description: 'MVP development in 8–12 weeks at a fixed price: a live product with real users, covering design, build, QA and deployment, with a demo every week.' },
    scale: { name: 'Scale', serviceType: 'Dedicated development team', description: 'A dedicated development team of developers, QA and a PM on a monthly retainer. The PM runs the roadmap with you and you keep control.' },
  },
};

/** Full Organization, home and the About page only. Pass the page language's words (`howWeWork.schema` + entity line);
 *  foundingDate omitted (D-21); address = Alexandria only (D-08); sameAs = Clutch + LinkedIn (Mohamed, Oct 21). */
export const org = (t: OrgText = ORG_EN) => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'DiscoverDev',
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-512.png`, width: 512, height: 512 },
  description: t.description,
  email: 'hello@discoverdev.ai',
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'hello@discoverdev.ai', availableLanguage: ['en', 'ar'] }],
  address: [{ '@type': 'PostalAddress', addressLocality: 'Alexandria', addressCountry: 'EG' }],
  areaServed: ['Saudi Arabia', 'Kuwait', 'United Arab Emirates', 'Egypt', 'United States', 'United Kingdom'].map((name) => ({ '@type': 'Country', name })),
  knowsAbout: t.knowsAbout,
  knowsLanguage: ['en', 'ar'],
  sameAs: [CLUTCH_URL, LINKEDIN_URL],
  // Ties each live service page's Service node (`<page>#service`) to the company for knowledge graphs.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      // Live service pages are referenced by their Service node; the rest are described inline, pointing at the home section.
      ...(['validate', 'build', 'scale', 'review', 'partners'] as RouteKey[])
        .filter((k) => ROUTES[k].live)
        .map((k) => ({ '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}${ROUTES[k].path}#service` } })),
      ...(Object.keys(t.offers) as OfferKey[]).filter((k) => !ROUTES[k].live).map((k) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/#service-${k}`, ...t.offers[k], url: `${SITE_URL}/#services`, provider: { '@id': ORG_ID } },
      })),
    ],
  },
});
/** English Organization, for pages that only exist in English. */
export const orgFull = org();

export const website = { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${SITE_URL}/`, name: 'DiscoverDev', inLanguage: ['en', 'ar'], publisher: { '@id': ORG_ID } };

export function webPage(path: string, name: string, description: string, type = 'WebPage', extra: Record<string, unknown> = {}) {
  const inLanguage = path === '/ar' || path.startsWith('/ar/') ? 'ar' : 'en';
  const url = canonical(path);
  // Home uses `/#webpage` (05 §4.1); canonical('/') has no trailing slash.
  return { '@type': type, '@id': path === '/' ? `${SITE_URL}/#webpage` : `${url}#webpage`, url, name, description, isPartOf: { '@id': WEBSITE_ID }, inLanguage, ...extra };
}

export const graph = (...nodes: object[]) => ({
  '@context': 'https://schema.org',
  // Every page's WebPage points at #website, so that node travels with each graph (final audit: unresolved @id on /book, /privacy, /terms).
  '@graph': nodes.some((n) => (n as { '@id'?: string })['@id'] === WEBSITE_ID) ? nodes : [...nodes, website],
});

/** FAQPage node from the FAQ the page shows (`id` = `<page url>#faq`). */
export const faqPage = (id: string, items: readonly { q: string; a: string }[]) => ({
  '@type': 'FAQPage', '@id': id,
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});

/** Service node for a service page (`<page url>#service`), provided by the company, same served countries everywhere. */
export const service = (url: string, s: { name: string; serviceType: string; description: string; audience: string; offers: Record<string, unknown> }) => ({
  '@type': 'Service', '@id': `${url}#service`, name: s.name, serviceType: s.serviceType,
  description: s.description, url, provider: { '@id': ORG_ID }, areaServed: ['SA', 'KW', 'AE', 'EG', 'US', 'GB'],
  audience: { '@type': 'BusinessAudience', audienceType: s.audience },
  offers: { '@type': 'Offer', ...s.offers },
});
