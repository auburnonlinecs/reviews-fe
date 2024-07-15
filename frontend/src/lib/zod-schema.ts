import { z } from "zod";

export const AverageMetrics = z.object({
  difficulty: z.number(),
  value: z.number(),
  hoursPerWeek: z.number(),
  averageGrade: z.string(),
});

export const ProfessorReviews = z.object({
  overall: z.number(),
  knowledge: z.number(),
  preparation: z.number(),
  helpfulness: z.number(),
  professor: z.number(),
});

export const ProfSchema = z.object({
  professorId: z.number(),
  name: z.string(),
  reviews: ProfessorReviews,
});

export const CourseSchema = z.object({
  courseId: z.string(),
  name: z.string(),
  professors: ProfSchema,
  courseMetrics: AverageMetrics,
});

export const ProfessorSchema = ProfSchema.extend({
  courses: CourseSchema,
});

export const CourseArraySchema = z.array(CourseSchema);
export const ProfessorArraySchema = z.array(ProfessorSchema);

export type ProfessorArray = z.infer<typeof ProfessorArraySchema>;
export type CourseArray = z.infer<typeof CourseArraySchema>;
export type Course = z.infer<typeof CourseSchema>;
export type ProfessorReviews = z.infer<typeof ProfessorReviews>;
export type Professor = z.infer<typeof ProfessorSchema>;
export type AvgMetrics = z.infer<typeof AvgMetrics>;
