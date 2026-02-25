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
  about: pageCollection,
  terms: pageCollection,
  privacy: pageCollection,
  'websites-apps': websitesAppsCollection,
};
