import CourseCard from "~/components/cards/course-card";
import { Input } from "~/components/ui/input";
import type { Course } from "~/lib/zod-schemas";
import { fetchCourses } from "~/server/db/queries";

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
