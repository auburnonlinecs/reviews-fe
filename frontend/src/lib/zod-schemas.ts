import { z } from "zod";

export const Course = z.object({
  id: z.number(),
  course_id: z.string(),
  name: z.string(),
  difficulty: z.number(),
  value: z.number(),
  hours_per_week: z.number(),
  average_grade: z.string(),
  professors: z.number().array(),
});

export const Comments = z.object({
  id: z.number(),
  comment: z.string(),
});
export const Ratings = z.object({
  knowledge: z.number(),
  preparation: z.number(),
  helpfulness: z.number(),
  comments: Comments.array(),
});

export const Professor = z.object({
  id: z.number(),
  name: z.string(),
  courses: z.number().array(),
  ratings: Ratings.array(),
});

export type Course = z.infer<typeof Course>;
export type Comments = z.infer<typeof Comments>;
export type Ratings = z.infer<typeof Ratings>;
export type Professor = z.infer<typeof Professor>;
