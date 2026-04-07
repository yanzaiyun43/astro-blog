import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts/` directory.
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(100),
			description: z.string().max(200),
			// Transform string to Date object
			publishedAt: z.coerce.date(),
			updatedAt: z.coerce.date().optional(),
			cover: z.optional(image()),
			category: z.string().default('未分类'),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
			pinned: z.boolean().default(false),
			slug: z.string()
				.regex(/^[a-zA-Z0-9_-]+$/, 'slug 只能包含字母、数字、下划线和连字符')
				.optional(),
		}),
});

export const collections = { posts };
