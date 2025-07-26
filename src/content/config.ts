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
    vimeo: z.string(),
    isActive: z.boolean().default(true),
  }),
});

export const collections = {
  posts: postsCollection,
  hero: heroCollection,
};
