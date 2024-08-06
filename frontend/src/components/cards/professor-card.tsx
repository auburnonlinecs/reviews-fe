import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import React from "react";
import {
  type CourseArraySchema,
  type ProfessorReviews,
} from "~/lib/zod-schema";

export default async function ProfessorCard(props: {
  professorId: number;
  profName: string;
  courses: CourseArraySchema;
  profReviews: ProfessorReviews;
}) {
  return (
    <Link href={`/professors/${props.professorId}`}>
      <Card>
        <CardHeader>
          <CardTitle>{props.profName}</CardTitle>
        </CardHeader>
        <CardContent className="ml-2 grid grid-cols-4">
          <div className="col-start-1 row-start-1">Overall:</div>
          <div className=" col-start-3 row-start-1">
            {ratingToStars(props.profReviews.overall)}
          </div>
          <div className="col-start-1 row-start-2 ">Helpfulness:</div>
          <div className="col-start-3 row-start-2">
            {ratingToStars(props.profReviews.helpfulness)}
          </div>
          <div className="col-start-1 row-start-3 ">Knowledge:</div>
          <div className="col-start-3 row-start-3">
            {ratingToStars(props.profReviews.knowledge)}
          </div>
          <div className="col-start-1 row-start-4 mb-4">Preparation:</div>
          <div className="col-start-3 row-start-4">
            {ratingToStars(props.profReviews.preparation)}
          </div>
          <div className=" col-span-4 col-start-1 row-start-5 font-bold">
            Courses Taught
          </div>
          <div className="col-span-4 col-start-1 row-start-6">
            {props.courses.map((course) => (
              <p key={course.courseId}>
                {course.courseCode} - {course.title}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
