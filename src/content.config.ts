import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
	// Mỗi bài là một file .md hoặc .mdx trong src/content/blog/
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// Chủ đề: kd | ai | solo | note (xem src/consts.ts)
		category: z.enum(["kd", "ai", "solo", "note"]).default("note"),
	}),
});

export const collections = { blog };
