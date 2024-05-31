import type { Course, Professor } from "~/lib/zod-schemas";
import { Card, CardContent, CardHeader } from "../ui/card";
import { fetchCourses } from "~/app/courses/courses-overview/page";
import { ratingToStars } from "~/lib/ratings-to-stars";

export default async function ProfessorCard(props: { professor: Professor }) {
  const allCourses: Course[] = await fetchCourses();
  if (!allCourses) {
    throw new Error("No courses found");
  }
  const profCourses: Course[] = allCourses.filter((profCourse) =>
    props.professor.courses.includes(profCourse.id),
  );
  console.log(profCourses);
  return (
    <Card className="h-[368px] w-[391px]  ">
      <CardHeader>
        <div className="text-[26px]"> {props.professor.name}</div>
        {profCourses.map((profCourse) => (
          <div key={profCourse.id} className="text-20">
            {profCourse.course_id} - {profCourse.name}
          </div>
        ))}
      </CardHeader>
      <CardContent className="w-auto items-center justify-center">
        {props.professor.ratings.map((ratings) => (
          <div key={props.professor.id}>
            <div>Helpfulness: {ratingToStars(ratings.helpfulness)}</div>
            <div>Knowledge: {ratingToStars(ratings.knowledge)}</div>
            <div>Preparation: {ratingToStars(ratings.preparation)}</div>
            <div>Comments: </div>
            {ratings.comments.map((comment) => (
              <div key={comment.id}>
                <div>{comment.comment}</div>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
