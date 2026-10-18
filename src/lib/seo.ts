// SEO + JSON-LD builders (05 §4). One @graph per page; text must match what the page shows.
import { ROUTES, type RouteKey } from '../data/routes';
export const SITE_URL = 'https://discoverdev.ai';
export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const CLUTCH_URL = 'https://clutch.co/profile/discoverdev';

/** Entity line, D-43 option (c): footer line + location sentence (05 §4). */
export const ENTITY_LINE =
  'DiscoverDev is a product and engineering company that helps founders and teams build the right product, then ship it fast. Senior teams, AI-accelerated, and you own everything. Engineering hub in Alexandria, Egypt; clients in the US and the Gulf.';

/** Absolute canonical: no trailing slash, no query (04 §2). */
export const canonical = (path: string) => {
  const clean = path.split(/[?#]/)[0].replace(/\.html$/, '').replace(/\/index$/, '/');
  const noSlash = clean !== '/' ? clean.replace(/\/$/, '') : '';
  return `${SITE_URL}${noSlash}`;
};

export const orgStub = { '@type': 'Organization', '@id': ORG_ID, name: 'DiscoverDev', url: SITE_URL };

/** Full Organization, home and /about only. foundingDate omitted (D-21); address = Alexandria only (D-08); sameAs = Clutch (+ LinkedIn when its URL is confirmed, D-29). */
export const orgFull = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'DiscoverDev',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-512.png`, width: 512, height: 512 },
  description: ENTITY_LINE,
  email: 'hello@discoverdev.ai',
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'hello@discoverdev.ai', availableLanguage: ['en', 'ar'] }],
  address: [{ '@type': 'PostalAddress', addressLocality: 'Alexandria', addressCountry: 'EG' }],
  areaServed: ['United States', 'Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Egypt', 'United Kingdom'].map((name) => ({ '@type': 'Country', name })),
  knowsAbout: ['MVP development', 'AI app security review', 'Production readiness', 'LLM cost optimization', 'Product discovery', 'Dedicated development teams'],
  knowsLanguage: ['en', 'ar'],
  sameAs: [CLUTCH_URL],
  // Ties each live service page's Service node (`<page>#service`) to the company for knowledge graphs.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: (['validate', 'build', 'scale', 'review', 'partners'] as RouteKey[])
      .filter((k) => ROUTES[k].live)
      .map((k) => ({ '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}${ROUTES[k].path}#service` } })),
  },
};

export const website = { '@type': 'WebSite', '@id': WEBSITE_ID, url: SITE_URL, name: 'DiscoverDev', inLanguage: 'en', publisher: { '@id': ORG_ID } };

export function webPage(path: string, name: string, description: string, type = 'WebPage', extra: Record<string, unknown> = {}) {
  const url = canonical(path);
  // Home uses `/#webpage` (05 §4.1); canonical('/') has no trailing slash.
  return { '@type': type, '@id': path === '/' ? `${SITE_URL}/#webpage` : `${url}#webpage`, url, name, description, isPartOf: { '@id': WEBSITE_ID }, inLanguage: 'en', ...extra };
}

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

/** FAQPage node from the FAQ the page shows (`id` = `<page url>#faq`). */
export const faqPage = (id: string, items: readonly { q: string; a: string }[]) => ({
  '@type': 'FAQPage', '@id': id,
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});

/** Service node for a service page (`<page url>#service`), provided by the company, same served countries everywhere. */
export const service = (url: string, s: { name: string; serviceType: string; description: string; audience: string; offers: Record<string, unknown> }) => ({
  '@type': 'Service', '@id': `${url}#service`, name: s.name, serviceType: s.serviceType,
  description: s.description, url, provider: { '@id': ORG_ID }, areaServed: ['US', 'SA', 'AE', 'KW', 'EG', 'GB'],
  audience: { '@type': 'BusinessAudience', audienceType: s.audience },
  offers: { '@type': 'Offer', ...s.offers },
});
