import { Button } from "~/components/ui/button";
import { Card, CardHeader } from "~/components/ui/card";

export default async function CoursesOverview({
  params,
}: {
  params: { id: number };
}) {
  // const courseName = params.courseReview.name;
  console.log(params);
  return (
    <main className="grid min-h-screen grid-cols-5 grid-rows-5 items-center justify-center bg-white ">
      <div className="row-center-2 col-start-3"></div>
      <Card>
        <CardHeader></CardHeader>
      </Card>
      <Button className="row-center-3 col-start-3 text-white"></Button>
    </main>
  );
}
