import type { Professor, Ratings } from "~/lib/zod-schemas";
import { Card, CardContent, CardHeader } from "../ui/card";

import Link from "next/link";
import { ratingToStars } from "~/lib/ratings-to-stars";
import {
  fetchProfessors,
  fetchProfessorsAndCourses,
  fetchRatings,
} from "~/server/db/queries";
import React from "react";

export default async function ProfessorCard(props: { professor: Professor }) {

  return (
    <Link href={`/professors/${props.professor.id}`}>
      <Card className="h-auto w-auto">
        <CardHeader>
          <div className="text-[26px]"> {props.professor.name}</div>
        </CardHeader>
        <CardContent className="m-2 grid h-auto w-auto grid-cols-4 grid-rows-5">
          <div className="col-start-1 col-span-2 row-start-1 pb-2">
            Helpfulness:
          </div>
          <div className="col-start-3 row-start-1">
          </div>
          <div className="col-start-1 col-span-2 row-start-2 pb-2">
            Knowledge:
          </div>
          <div className="col-start-3 row-start-2">
          </div>
          <div className="col-start-1 col-span-2 row-start-3  pb-2">
            Preparation:
          </div>
          <div className="col-start-3 row-start-3">
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
