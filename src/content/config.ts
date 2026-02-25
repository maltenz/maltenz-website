import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    postSlug: z.string().optional(),
    tag: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
  }),
});

const latestCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
  }),
});

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date(),
  }),
});

const websitesAppsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date(),
  }),
});

export const collections = {
  latest: latestCollection,
  hero: heroCollection,
  pages: pagesCollection,
  about: pageCollection,
  'websites-apps': websitesAppsCollection,
};
