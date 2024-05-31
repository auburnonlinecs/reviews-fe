import { promises as fs } from "fs";
import { Course } from "src/lib/zod-schemas";
import CourseCard from "~/components/cards/course-card";
import { Input } from "~/components/ui/input";

export async function fetchCourses(): Promise<Course[]> {
  const file = await fs.readFile(
    process.cwd() + "/public/courses.json",
    "utf-8",
  );

  const courses: Course[] = Course.array().parse(JSON.parse(file));
  return courses;
}

export default async function CoursesOverview() {
  const courses: Course[] = await fetchCourses();
  return (
    <div className="container mx-auto my-auto sm:flex sm:flex-col sm:justify-center">
      <div className="pb-10 text-[64px] ">
        All Courses
        <Input type="search" placeholder="Search" />
      </div>
      <div className="gap-4 sm:flex sm:flex-col sm:justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
