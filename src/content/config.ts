import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    vimeo: z.string(),
    isActive: z.boolean().default(true),
    publishDate: z.date().optional(),
    tag: z.array(z.string()).optional(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    publishDate: z.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
  hero: heroCollection,
};
