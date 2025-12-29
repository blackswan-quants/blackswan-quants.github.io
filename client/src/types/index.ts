import { z } from "zod";

// Project type definition
export const projectSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    pdfUrl: z.string(),
    githubUrl: z.string(),
    imageUrl: z.string(),
    isComingSoon: z.boolean().default(false),
    createdAt: z.date().optional()
});

export type Project = z.infer<typeof projectSchema>;

// Event type definition
export const eventSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    imageUrl: z.string(),
    isComingSoon: z.boolean().default(false),
    createdAt: z.date().optional()
});

export type Event = z.infer<typeof eventSchema>;
