import { defineCollection, z } from 'astro:content';

// 1. Vitrina de Proyectos de Alumnos
const studentProjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    students: z.array(z.string()),
    course: z.string(), // Ej: "Ingeniería de Software II"
    tags: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    isHiringReady: z.boolean().default(true), // Tag estratégico para empresas
    pubDate: z.coerce.date(),
  }),
});

// 2. Artículos Académicos, Publicaciones e IA
const publications = defineCollection({
  type: 'content',
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