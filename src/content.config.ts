import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    // Accepts "2026-11-22" (quoted or not) and converts it to a Date.
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { news };
