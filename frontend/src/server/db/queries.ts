import courses from "public/courses.json";
import professors from "public/professors.json";

export async function fetchProfessors() {
  return professors;
}

export async function fetchCourses() {
  console.log(courses);
  return courses;
}
