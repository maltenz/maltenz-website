// Auto-generated types from Astro content collections
// These types are automatically inferred from your content/config.ts schema

import type { CollectionEntry } from 'astro:content';

// Content collection types
export type ProjectEntry = CollectionEntry<'latest'>;
export type HeroEntry = CollectionEntry<'hero'>;

// Data-only types (just the data part without slug/id)
export type ProjectData = ProjectEntry['data'];
export type HeroData = HeroEntry['data'];

// Utility types for components
export type Project = {
  slug: string;
  data: ProjectData;
};

export type HeroContent = {
  data: HeroData;
};

// You can also create more specific types if needed
export type FeaturedProject = Project & {
  data: ProjectData & { featured: true };
};
