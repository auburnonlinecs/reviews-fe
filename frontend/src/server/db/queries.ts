import type {
  Course,
  CourseProfessor,
  Professor,
  Ratings,
} from "~/lib/zod-schemas";
import { db } from ".";

export async function fetchProfessors(): Promise<Professor[]> {
  const professors: Professor[] = await db.query.professors.findMany();
  return professors;
}

export async function fetchCourses(): Promise<Course[]> {
  const courses: Course[] = await db.query.courses.findMany();
  return courses;
}

export async function fetchProfessorsAndCourses() {
  const data = await db.query.courseProfessors.findMany({
    with: {
      professor: true,
      course: true,
    },
  });

  type ProfessorCourseMap = Record<
    number,
    { professor: Professor; course: Course }
  >;

  const professorCourseMap: ProfessorCourseMap = data.reduce((acc, item) => {
    const course = item.course;
    const professorId = item.professor_id;
    const professor = item.professor;

    if (!acc[professorId]) {
      acc[professorId] = {
        course: course,
        professor: professor,
      };
    }
    return acc;
  }, {} as ProfessorCourseMap);
  return professorCourseMap;
}

export async function fetchRatings(professorId: number): Promise<Ratings[]> {
  const ratings: Ratings[] = await db.query.ratings.findMany({
    where: (ratings, { eq }) => eq(ratings.professor, professorId),
  });

  return ratings;
}

export async function fetchCoursesAndProfessors() {
  const data = await db.query.courseProfessors.findMany({
    with: {
      professor: true,
      course: true,
    },
  });

  type CourseProfessorMap = Record<
    number,
    { course: Course; professor: Professor }
  >;

  const courseProfessorMap: CourseProfessorMap = data.reduce((acc, item) => {
    const course = item.course;
    const courseId = item.course_id;
    const professor = item.professor;

    if (!acc[courseId]) {
      acc[courseId] = {
        course: course,
        professor: professor,
      };
    }
    return acc;
  }, {} as CourseProfessorMap);
  return courseProfessorMap;
}
