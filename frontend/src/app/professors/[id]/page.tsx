import Link from "next/link";
import { Button } from "~/components/ui/button";

export default async function ProfessorDetails({
  params,
}: {
  params: { id: number };
}) {
  console.log(params);
  return (
    <main className="grid min-h-screen grid-cols-5 grid-rows-5 items-center justify-center bg-white ">
      <div className="row-center-2 col-start-3">
        Professor Details Work in progress
      </div>
      <Button className="row-center-3 col-start-3">
        <Link href="/">Click me to go to home</Link>
      </Button>
    </main>
  );
}
