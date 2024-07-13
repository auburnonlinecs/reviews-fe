import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import type { Course, CourseArray } from "~/lib/zod-schemas";
import { Card, CardContent, CardHeader } from "../ui/card";
import { fetchCourses } from "~/server/db/queries";

export default async function CourseCard(props: { course: Course }) {
  const courses: CourseArray = await fetchCourses();

   

  return (
    <Link href={`/courses/${props.course.id}`}>
      <Card className="h-auto w-auto  ">
        <CardHeader className="">
          <div className="m-1 font-bold"> {props.course.name}</div>
          <div className="m-1 text-gray-500"> {props.course.course_id}</div>
        </CardHeader>
        <CardContent className="m-2 grid grid-cols-4">
          <div className="col-start-1 pb-2">Difficulty:</div>
          <div className="col-start-3">
            {ratingToStars(courses.flatMap())}
          </div>
          <div className="col-start-1 pb-2">Value: </div>
          <div className="col-start-3">{ratingToStars(props.course.value)}</div>
          <div className="col-span-2 col-start-1 pb-2">Hours / Week:</div>
          <div className="col-start-3">{props.course.hours_per_week}</div>
          <div className="col-span-2 col-start-1 pb-2">Average Grade: </div>
          <div className="col-start-3">{props.course.average_grade}</div>
          <div className="col-start-1 pt-5 font-bold">Professors:</div>
          <div className="col-span-2 col-start-1">{profName}</div>
          <div className="col-start-3">{ratingToStars(avgOverall)}</div>
        </CardContent>
      </Card>
    </Link>
  );
}
