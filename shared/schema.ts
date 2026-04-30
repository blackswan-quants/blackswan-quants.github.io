import { z } from "zod";

// Project type definition
export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  githubUrl: z.string(),
  pdfUrl: z.string(),
  isComingSoon: z.boolean().default(false)
});

export type Project = z.infer<typeof projectSchema>;

// Event type definition
export const eventSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  imageUrl: z.string(),
  instagramPostUrl: z.string().optional(),
  linkedinPostUrl: z.string().optional()
});

export type Event = z.infer<typeof eventSchema>;