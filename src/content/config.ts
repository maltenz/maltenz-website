import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    vimeo: z.string(),
    isActive: z.boolean().default(true),
  }),
});

export const collections = {
  projects: projectsCollection,
  hero: heroCollection,
};
