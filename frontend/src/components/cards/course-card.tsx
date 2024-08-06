import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import { type AvgMetrics, type CourseProfSchema } from "~/lib/zod-schema";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function CourseCard(props: {
  courseId: number;
  courseCode: string;
  title: string;
  professors: CourseProfSchema;
  avgMetrics: AvgMetrics;
}) {
  console.log(props.professors);
  return (
    <Link href={`/courses/${props.courseId}`}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div> {props.title}</div>
          </CardTitle>
          <div className="-mt-2 text-sm text-gray-500"> {props.courseCode}</div>
        </CardHeader>
        <CardContent className="ml-2 grid grid-cols-4">
          <div className="col-start-1 row-start-1">Difficulty:</div>
          <div className="col-start-3 row-start-1">
            {props.avgMetrics && ratingToStars(props.avgMetrics.difficulty)}
          </div>
          <div className=" col-start-1 row-start-2">Value: </div>
          <div className=" col-start-3 row-start-2">
            {props.avgMetrics && ratingToStars(props.avgMetrics.value)}
          </div>
          <div className=" col-span-2 col-start-1 row-start-3">
            Hours / Week:
          </div>
          <div className=" col-start-3 row-start-3">
            {props.avgMetrics.hoursPerWeek}
          </div>
          <div className=" col-span-2 col-start-1 row-start-4">
            Average Grade:{" "}
          </div>
          <div className=" col-start-3 row-start-4 pb-4">
            {props.avgMetrics.grade}
          </div>
          <div className="col-start-1 row-start-5 font-bold">Professors:</div>
          <div className=" col-span-2 col-start-1 row-start-6">
            {props.professors.name}
          </div>
          <div className=" col-start-3 row-start-6">
            {ratingToStars(props.professors.overallAverage)}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
