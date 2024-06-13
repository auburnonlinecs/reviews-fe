import { z } from "zod";

export const Course = z.object({
  id: z.number(),
  course_id: z.string(),
  name: z.string(),
  difficulty: z.number(),
  value: z.number(),
  hours_per_week: z.number(),
  average_grade: z.string(),
});

export const Ratings = z.object({
  id: z.number(),
  overall: z.number(),
  knowledge: z.number(),
  preparation: z.number(),
  helpfulness: z.number(),
  professor: z.number(),
  comment: z.string().nullable(),
});

export const Professor = z.object({
  id: z.number(),
  name: z.string(),
});

export const CourseProfessor = z.object({
  course_id: z.number(),
  professor_id: z.number(),
  professor: Professor,
  course: Course,
});

export type Course = z.infer<typeof Course>;
export type Ratings = z.infer<typeof Ratings>;
export type Professor = z.infer<typeof Professor>;
export type CourseProfessor = z.infer<typeof CourseProfessor>;
