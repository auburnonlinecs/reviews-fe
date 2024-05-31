import { Button } from "~/components/ui/button";
import type { Course } from "src/lib/zod-schemas";
import { Card, CardHeader } from "~/components/ui/card";
import { fetchCourses } from "../courses-overview/page";

export default async function CoursesOverview({
  params,
}: {
  params: { id: number };
}) {
  const courses: Course[] = await fetchCourses();
  const course = courses.find((course) => course.id == params.id);
  if (!course) {
    return <div>Course not found</div>;
  }
  // const courseName = params.courseReview.name;
  console.log(params);
  return (
    <main className="grid min-h-screen grid-cols-5 grid-rows-5 items-center justify-center bg-white ">
      <div className="row-center-2 col-start-3">
        Course Review Work in progress {params.id}
        {course.name}
        {course.id}
        {course.average_grade}
      </div>
      <Card>
        <CardHeader></CardHeader>
      </Card>
      <Button className="row-center-3 col-start-3 text-white"></Button>
    </main>
  );
}
