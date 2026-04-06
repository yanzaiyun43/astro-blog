import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().max(100),
    description: z.string().max(200),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    cover: image().optional(),
    category: z.string().default('uncategorized'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    slug: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
