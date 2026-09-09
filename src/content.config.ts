import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Vitrina de Proyectos de Alumnos
const studentProjects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/student-projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    students: z.array(z.string()),
    course: z.string(),
    tags: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    isHiringReady: z.boolean().default(true),
    pubDate: z.coerce.date(),
  }),
});

// 2. Artículos Académicos, Publicaciones e IA
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['Investigación', 'Docencia', 'IA', 'Arquitectura']),
  }),
});

export const collections = {
  'student-projects': studentProjects,
  'publications': publications,
};