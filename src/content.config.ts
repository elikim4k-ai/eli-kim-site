import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects — one Markdown file per project in src/content/projects/.
 * The Markdown body (optional) renders as a longer case study.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    problem: z.string(),
    approach: z.string(),
    role: z.string(),
    tags: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    /** Pins the project to the top of the grid and marks it visually. */
    featured: z.boolean().default(false),
    /** Draft entries render with an "unconfirmed" badge. */
    unconfirmed: z.boolean().default(false),
    /** Path under public/, e.g. /projects/kailoop.jpg. Empty = placeholder box. */
    image: z.string().default(''),
    imageAlt: z.string().default(''),
    order: z.number().default(99),
  }),
});

/**
 * Writing — one Markdown file per article/note in src/content/writing/.
 * External pieces: set `externalUrl` and leave the body empty.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
