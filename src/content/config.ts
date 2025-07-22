import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const heroCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
    backgroundImage: z.string().optional(),
    isActive: z.boolean().default(true),
  }),
});

export const collections = {
  posts: postsCollection,
  hero: heroCollection,
};
