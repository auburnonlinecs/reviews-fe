import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import { type AvgMetrics, type CourseProfSchema } from "~/lib/zod-schema";
import { Card, CardContent, CardHeader } from "../ui/card";

export default async function CourseCard(props: {
  courseId: number;
  title: string;
  professors: CourseProfSchema;
  avgMetrics: AvgMetrics;
}) {
  console.log(props.professors);
  return (
    <Link href={`/courses/${props.courseId}`}>
      <Card className="h-auto w-auto  ">
        <CardHeader className="">
          <div className="m-1 font-bold"> {props.title}</div>
          <div className="m-1 text-gray-500"> {props.courseId}</div>
        </CardHeader>
        <CardContent className="m-2 grid grid-cols-4">
          <div className="col-start-1 pb-2">Difficulty:</div>
          <div className="col-start-3">
            {props.avgMetrics && ratingToStars(props.avgMetrics.difficulty)}
          </div>
          <div className="col-start-1 pb-2">Value: </div>
          <div className="col-start-3">
            {props.avgMetrics && ratingToStars(props.avgMetrics.value)}
          </div>
          <div className="col-span-2 col-start-1 pb-2">Hours / Week:</div>
          <div className="col-start-3">{props.avgMetrics.hoursPerWeek}</div>
          <div className="col-span-2 col-start-1 pb-2">Average Grade: </div>
          <div className="col-start-3">{props.avgMetrics.grade}</div>
          <div className="col-start-1 pt-5 font-bold">Professors:</div>
          <div className="col-span-2 col-start-1">{props.professors.name}</div>
          <div className="col-start-3">
            {ratingToStars(props.professors.overallAverage)}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
