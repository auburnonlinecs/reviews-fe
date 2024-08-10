import CourseCard from "~/components/cards/course-card";
import { Input } from "~/components/ui/input";
import { fetchCourses } from "~/server/db/queries";

export default async function CoursesOverview() {
  const data = await fetchCourses();
  return (
    <div className="container mx-auto my-auto sm:flex sm:flex-col sm:justify-center">
      <div className="pb-10 text-[64px] ">
        All Courses
        <Input type="search" placeholder="Search" />
      </div>
      <div className="gap-4 sm:flex sm:flex-col sm:justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3">
        {Object.values(data.courses).flatMap((course) =>
          course.professors.map((professor) => (
            <CourseCard
              key={course.courseId}
              courseId={course.courseId}
              title={course.title}
              professors={professor}
              avgMetrics={course.averageMetrics}
            />
          )),
        )}
        ,
      </div>
    </div>
  );
}
