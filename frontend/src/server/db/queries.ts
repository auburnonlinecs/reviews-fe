import { promises as fs } from "fs";
import { ProfessorArraySchema, type CourseArray } from "~/lib/zod-schema";

export async function fetchProfessors() {
  const file: unknown = await fs.readFile(
    process.cwd() + "/public/professors.json",
    "utf-8",
  );
  const professors = ProfessorArraySchema.safeParse(file);
  console.log(file);
  return professors.data;
}

export async function fetchCourses() {
  const file = await fs.readFile(
    process.cwd() + "/public/courses.json",
    "utf-8",
  );
  const jsonData = JSON.parse(file) as CourseArray;

  return jsonData;
}
