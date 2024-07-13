import {
  type CourseArray,
  ProfessorArray,
  ProfessorSchema,
  CourseSchema,
  ProfessorArraySchema,
} from "~/lib/zod-schemas";
import {promises as fs} from "fs"

export async function fetchProfessors() {
    const file: unknown = await fs.readFile(
    process.cwd() + "/public/professors.json",
    "utf-8",
  );
  const professors = ProfessorArraySchema.safeParse(file);
  console.log(file)
  return professors.data;
}

export async function fetchCourses(): Promise<CourseArray> {
  const response = await fetch("API_URL/courses");
  const courses = (await response.json()) as CourseArray;
  return courses;
}

export async function fetchOneProfessor(professorId: number) {
  const response = await fetch(`API_URL/professor/${professorId}`);
  const professor = response.json();
  const result = ProfessorSchema.safeParse(professor);
  return result;
}

export async function fetchOneCourse(courseId: number) {
  const response = await fetch(`API_URL/professor/${courseId}`);
  const course = response.json();
  const result = CourseSchema.safeParse(course);
  return result;
}
