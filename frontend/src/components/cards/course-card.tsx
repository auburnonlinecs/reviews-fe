import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import type { Course } from "~/lib/zod-schema";
import { Card, CardContent, CardHeader } from "../ui/card";

export default async function CourseCard(props: { course: Course }) {
  return (
    <Link href={`/courses/${props.course.courseId}`}>
      <Card className="h-auto w-auto  ">
        <CardHeader className="">
          <div className="m-1 font-bold"> {props.course.name}</div>
          <div className="m-1 text-gray-500"> {props.course.courseId}</div>
        </CardHeader>
        <CardContent className="m-2 grid grid-cols-4">
          <div className="col-start-1 pb-2">Difficulty:</div>
          <div className="col-start-3">
            {/* {ratingToStars(props.course.courseMetrics.difficulty)} */}
          </div>
          <div className="col-start-1 pb-2">Value: </div>
          <div className="col-start-3">
            {/* {ratingToStars(props.course.courseMetrics.value)} */}
          </div>
          <div className="col-span-2 col-start-1 pb-2">Hours / Week:</div>
          <div className="col-start-3">
            {/* {props.course.courseMetrics.hoursPerWeek} */}
          </div>
          <div className="col-span-2 col-start-1 pb-2">Average Grade: </div>
          <div className="col-start-3">
            {/* {props.course.courseMetrics.averageGrade} */}
          </div>
          <div className="col-start-1 pt-5 font-bold">Professors:</div>
          <div className="col-span-2 col-start-1">
            {/* {props.course.professors.name} */}
          </div>
          <div className="col-start-3">
            {/* {ratingToStars(props.course.professors.reviews.overall)} */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
