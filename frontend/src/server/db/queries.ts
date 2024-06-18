import {
  type Course,
  type CourseArray,
  CourseArraySchema,
  Professor,
  type ProfessorArray,
  ProfessorSchema,
  CourseSchema,
} from "~/lib/zod-schemas";

export async function fetchProfessors(): Promise<ProfessorArray> {
  const response = await fetch("API_URL/professors");
  const professors: ProfessorArray = [];
  const data = (await response.json()) as ProfessorArray;
  data.forEach((item) => {
    const result = ProfessorSchema.safeParse(item);
    if (!result.success) {
      console.log(result.error);
    } else {
      professors.push(result.data)
    }
  });
  return professors;
}

export async function fetchCourses(): Promise<CourseArray> {
  const response = await fetch("API_URL/courses");
  const data: unknown = await response.json();
  const result = CourseArraySchema.safeParse(data);
  if (!result.success) {
    throw new Error("not course array");
  }
  return result.data;
}

export async function fetchOneProfessor(professorId: number) {
  const response = await fetch(`API_URL/professor/${professorId}`);
  const professor = response.json();
  const result = ProfessorSchema.safeParse(professor);
  return result;
}

export async function fetchOneCourse(courseId: number): Promise<Course> {
  const response = await fetch(`API_URL/professor/${courseId}`);
  const course = response.json();
  const result = CourseSchema.safeParse(course);
  return result;
}
