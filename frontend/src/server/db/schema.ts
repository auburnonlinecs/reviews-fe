// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

// Table generation for the reviews project
export const createTable = pgTableCreator((name) => `reviews_${name}`);

export const courses = createTable("courses", {
  id: serial("id").primaryKey().notNull(),
  course_id: varchar("course_id", { length: 16 }).notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  difficulty: integer("difficulty").notNull(),
  value: integer("value").notNull(),
  hours_per_week: integer("hours_per_week").notNull(),
  average_grade: varchar("average_grade", { length: 4 }).notNull(),
});

export const professors = createTable("professors", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 256 }).notNull(),
});

export const courseProfessors = createTable(
  "course_professors",
  {
    course_id: integer("course_id")
      .references(() => courses.id, { onDelete: "cascade" })
      .notNull(),
    professor_id: integer("professor_id")
      .references(() => professors.id, { onDelete: "cascade" })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.course_id, table.professor_id] }),
  }),
);

export const ratings = createTable("ratings", {
  id: serial("id").primaryKey().notNull(),
  overall: integer("overall").notNull(),
  knowledge: integer("knowledge").notNull(),
  preparation: integer("preparation").notNull(),
  helpfulness: integer("helpfulness").notNull(),
  professor: integer("professor")
    .references(() => professors.id, { onDelete: "cascade" })
    .notNull(),
  comment: text("comment"),
});

// Relationship generation for the reviews project
export const professorsRatingsRelations = relations(professors, ({ many }) => ({
  ratings: many(ratings),
}));

export const ratingsRelations = relations(ratings, ({ one }) => ({
  professor: one(professors, {
    fields: [ratings.professor],
    references: [professors.id],
  }),
}));
export const coursesRelations = relations(courses, ({ many }) => ({
  courseProfessors: many(courseProfessors),
}));

export const professorsRelations = relations(professors, ({ many }) => ({
  courseProfessors: many(courseProfessors),
}));

export const courseProfessorsRelations = relations(
  courseProfessors,
  ({ one }) => ({
    course: one(courses, {
      fields: [courseProfessors.course_id],
      references: [courses.id],
    }),
    professor: one(professors, {
      fields: [courseProfessors.professor_id],
      references: [professors.id],
    }),
  }),
);
