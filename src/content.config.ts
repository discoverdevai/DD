// Content collections (07 §6). Pages never call getCollection directly: use src/lib/insights.ts.
import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const authors = defineCollection({
  loader: file('src/content/authors.json'),
  schema: z.object({
    id: z.string(),
    type: z.enum(['person', 'organization']),
    name: z.string(),
    role: z.string().optional(),
    bio: z.string(),
    photo: z.string().optional(),
    linkedin: z.url().optional(),
  }),
});

export const INSIGHT_PILLARS = ['prototype-to-launch', 'ai-cost', 'product-discovery'] as const;
export const INSIGHT_TAGS = ['security', 'supabase', 'payments', 'fix-or-rebuild', 'code-ownership', 'ai-costs'] as const;
export const INSIGHT_SERVICES = ['review', 'validate', 'build', 'scale', 'partners'] as const;

const insights = defineCollection({
  // .mdx entries need @astrojs/mdx in astro.config.mjs; .md works without it.
  loader: glob({ base: './src/content/insights', pattern: '**/*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string().max(60),
      description: z.string().min(120).max(155),
      locale: z.enum(['en', 'ar']),
      translationKey: z.string(),
      h1: z.string(),
      shortTitle: z.string().max(40),
      pillar: z.enum(INSIGHT_PILLARS),
      role: z.enum(['pillar', 'cluster']),
      parent: reference('insights').optional(),
      primaryKeyword: z.string(),
      author: reference('authors'),
      takeaways: z.array(z.string()).min(3).max(5),
      tags: z.array(z.enum(INSIGHT_TAGS)).max(3).default([]),
      sources: z.array(z.url()).default([]),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      relatedService: z.enum(INSIGHT_SERVICES),
      related: z.array(reference('insights')).max(3).default([]),
      draft: z.boolean().default(false),
    })
    .refine((d) => d.role !== 'cluster' || d.parent !== undefined, {
      message: 'A cluster article needs a parent pillar.',
      path: ['parent'],
    }),
});

export const collections = { authors, insights };
