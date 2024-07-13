import { z } from "zod";
import { courses } from "~/server/db/schema";

export const AvgMetrics = z.object({
  difficulty: z.number(),
  value: z.number(),
  hours_per_week: z.number(),
  average_grade: z.string(),
});

export const CourseSchema = z.lazy(() =>
  z.object({
    id: z.number(),
    course_id: z.string(),
    name: z.string(),
    professors: ProfSchema,
    courseMetrics: AvgMetrics,
  }),
);

export const ProfessorReviews = z.object({
  id: z.number(),
  overall: z.number(),
  knowledge: z.number(),
  preparation: z.number(),
  helpfulness: z.number(),
  professor: z.number(),
  comment: z.string().nullable(),
});

export const ProfSchema = z.object({
  id: z.number(),
  name: z.string(),
  reviews: ProfessorReviews,
});

export const ProfessorSchema = ProfSchema.extend({
  courses: CourseSchema
})

export const CourseArraySchema = z.array(CourseSchema);
export const ProfessorArraySchema = z.array(ProfessorSchema);

export type ProfessorArray = z.infer<typeof ProfessorArraySchema>;
export type CourseArray = z.infer<typeof CourseArraySchema>;
export type Course = z.infer<typeof CourseSchema>;
export type ProfessorReviews = z.infer<typeof ProfessorReviews>;
export type Professor = z.infer<typeof ProfessorSchema>;
export type AvgMetrics = z.infer<typeof AvgMetrics>;
