import * as React from "react";
import type { Course } from "~/lib/zod-schemas";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function CourseCard(props: { course: Course }) {
  return (
    <Card className="h-[368px] w-[391px]  ">
      <CardHeader className="">
        <div> {props.course.name}</div>
        <div className="text-gray-500"> {props.course.course_id}</div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
