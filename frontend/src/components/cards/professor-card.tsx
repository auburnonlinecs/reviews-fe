import type { Professor, Ratings } from "~/lib/zod-schemas";
import { Card, CardContent, CardHeader } from "../ui/card";

import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import { fetchProfessorsAndCourses, fetchRatings } from "~/server/db/queries";

export default async function ProfessorCard(props: { professor: Professor }) {
  const map = await fetchProfessorsAndCourses();

  const ratings: Ratings[] = await fetchRatings(props.professor.id);
  const totalRatings = ratings.length;
  const sumRatings = ratings.reduce(
    (acc, rating) => {
      acc.helpfulness += rating.helpfulness;
      acc.knowledge += rating.knowledge;
      acc.preparation += rating.preparation;
      return acc;
    },
    { helpfulness: 0, knowledge: 0, preparation: 0 },
  );
  const comments = ratings.map((rating) => rating.comment);
  const avgRatings = {
    helpfulness: sumRatings.helpfulness / totalRatings,
    knowledge: sumRatings.knowledge / totalRatings,
    preparation: sumRatings.preparation / totalRatings,
  };
  return (
    <Link href={`/professors/${props.professor.id}`}>
      <Card className="h-auto w-auto">
        <CardHeader>
          <div className="text-[26px]"> {props.professor.name}</div>
          {Object.entries(map)
            .filter(
              ([professorId]) => professorId === props.professor.id.toString(),
            )
            .map(([professorId, { course }]) => (
              <div key={professorId} className="text-20 text-gray-500">
                {course.course_id} - {course.name}
              </div>
            ))}
        </CardHeader>
        <CardContent className="m-2 grid h-auto w-auto grid-cols-4 grid-rows-5">
          <div className="grid-start-1 col-span-2 row-start-1 pb-2">
            Helpfulness:
          </div>
          <div className="grid-start-3 row-start-1">
            {ratingToStars(avgRatings.helpfulness)}
          </div>
          <div className="grid-start-1 col-span-2 row-start-2 pb-2">
            Knowledge:
          </div>
          <div className="grid-start-3 row-start-2">
            {ratingToStars(avgRatings.knowledge)}
          </div>
          <div className="grid-start-1 col-span-2 row-start-3  pb-2">
            Preparation:
          </div>
          <div className="grid-start-3 row-start-3">
            {ratingToStars(avgRatings.preparation)}
          </div>
          <div className="grid-start-1 row-start-4">Comments:</div>
          <div className="col-span-4 row-start-5">{comments}</div>
        </CardContent>
      </Card>
    </Link>
  );
}
