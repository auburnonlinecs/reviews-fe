import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import type { Course, Ratings } from "~/lib/zod-schemas";
import { Card, CardContent, CardHeader } from "../ui/card";
import { fetchCoursesAndProfessors, fetchRatings } from "~/server/db/queries";

export default async function CourseCard(props: { course: Course }) {
  const map = await fetchCoursesAndProfessors();
  const profName = Object.entries(map)
    .filter(([courseId]) => courseId === props.course.id.toString())
    .map(([courseId, { professor }]) => (
      <div key={courseId} className="col-start-1 text-gray-500">
        {professor.name}
      </div>
    ));

  const prof = Object.entries(map)
    .filter(([courseId]) => courseId === props.course.id.toString())
    .flatMap(([_, { professor }]) => professor.id);
  if (prof[0] == undefined) {
    throw new Error();
  }
  const ratings: Ratings[] = await fetchRatings(prof[0]);
  const sumRatings = ratings.reduce((acc, rating) => {
    acc.overall += rating.overall;
    return acc;
  });
  const totalOverall = ratings.length;
  const avgOverall = sumRatings.overall / totalOverall;
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
            {ratingToStars(props.course.difficulty)}
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
