import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    vimeo: z.string(),
    tag: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
  }),
});

const projectsCollection = defineCollection({
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
  projects: projectsCollection,
  hero: heroCollection,
};
