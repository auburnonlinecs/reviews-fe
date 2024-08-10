import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import React from "react";
import { type ProfCourseSchema, type ProfessorReviews } from "~/lib/zod-schema";

export default async function ProfessorCard(props: {
  professorId: number;
  profName: string;
  courses: ProfCourseSchema;
  profReviews: ProfessorReviews;
}) {
  return (
    <Link href={`/professors/${props.professorId}`}>
      <Card className="h-auto w-auto">
        <CardHeader>
          <CardTitle>{props.profName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" grid w-full items-center gap-4">
            <div>Overall:</div>
            <div className="flex">
              Helpfulness:
              {ratingToStars(props.profReviews.helpfulness)}
            </div>
            <div>Knowledge:</div>
            <div className="col-start-3 row-start-3">
              {ratingToStars(props.profReviews.knowledge)}
            </div>
            <div className="col-span-2 col-start-1 row-start-4  pb-2">
              Preparation:
            </div>
            <div className="col-start-3 row-start-4">
              {ratingToStars(props.profReviews.preparation)}
            </div>
            <div className="col-span-4 row-start-5">Courses Taught</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
