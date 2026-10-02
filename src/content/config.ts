import { defineCollection, z } from 'astro:content';

const studentProjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    student: z.string().optional(),
    students: z.array(z.string()).optional(),
    role: z.string().optional(),
    summary: z.string().optional(),
    description: z.string().optional(),
    course: z.string().optional(),
    academicYear: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    pubDate: z.union([z.string(), z.date()]).optional(),
  }),
});

export const collections = {
  'student-projects': studentProjects,
};