// Auto-generated types from Astro content collections
// These types are automatically inferred from your content/config.ts schema

import type { CollectionEntry } from 'astro:content';

// Content collection types
export type PostEntry = CollectionEntry<'posts'>;
export type HeroEntry = CollectionEntry<'hero'>;

// Data-only types (just the data part without slug/id)
export type PostData = PostEntry['data'];
export type HeroData = HeroEntry['data'];

// Utility types for components
export type BlogPost = {
  slug: string;
  data: PostData;
};

export type HeroContent = {
  data: HeroData;
};

// You can also create more specific types if needed
export type FeaturedPost = BlogPost & {
  data: PostData & { featured: true };
};
