import { z } from "zod";

export const AvgMetrics = z.object({
  difficulty: z.number(),
  value: z.number(),
  hoursPerWeek: z.number(),
  grade: z.string(),
});

export const ProfessorReviews = z.object({
  overall: z.number(),
  knowledge: z.number(),
  preparation: z.number(),
  helpfulness: z.number(),
});

export const ProfSchema = z.object({
  professorId: z.number(),
  name: z.string(),
  reviews: ProfessorReviews,
});
export const CourseProfSchema = z.object({
  professorId: z.number(),
  name: z.string(),
  overallAverage: z.number(),
});

export const CourseSchema = z.object({
  courseId: z.string(),
  courseCode: z.string(),
  title: z.string(),
  professors: CourseProfSchema.array(),
  courseMetrics: AvgMetrics,
});

export const ProfCourseSchema = z.object({
  courseId: z.number(),
  courseCode: z.string(),
  title: z.string(),
});
export const ProfessorSchema = ProfSchema.extend({
  courses: CourseSchema,
});

export const CourseArraySchema = z.array(ProfCourseSchema);
export const ProfessorArraySchema = z.array(ProfessorSchema);

export type CourseArraySchema = z.infer<typeof CourseArraySchema>;
export type CourseProfSchema = z.infer<typeof CourseProfSchema>;
export type ProfessorArray = z.infer<typeof ProfessorArraySchema>;
export type CourseArray = z.infer<typeof CourseArraySchema>;
export type Course = z.infer<typeof CourseSchema>;
export type ProfessorReviews = z.infer<typeof ProfessorReviews>;
export type ProfSchema = z.infer<typeof ProfSchema>;
export type AvgMetrics = z.infer<typeof AvgMetrics>;
