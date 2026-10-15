// RSS feed for Insights (05 §6). Published articles only.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publishedInsights, insightPath } from '../../lib/insights';

export async function GET(context: APIContext) {
  const items = await publishedInsights('en');
  return rss({
    title: 'DiscoverDev Insights',
    description: 'Plain guides for founders taking AI-built apps to production.',
    site: context.site ?? 'https://discoverdev.ai',
    items: items.map((e) => ({ title: e.data.h1, description: e.data.description, pubDate: e.data.publishedAt, link: insightPath(e) })),
    customData: '<language>en</language>',
  });
}
