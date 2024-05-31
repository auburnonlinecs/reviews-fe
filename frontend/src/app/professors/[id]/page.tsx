import Link from "next/link";
import { Button } from "~/components/ui/button";
import { fetchProfessors } from "../professor-overview/page";
import type { Professor } from "~/lib/zod-schemas";

export default async function ProfessorDetails({
  params,
}: {
  params: { id: number };
}) {
  const professors: Professor[] = await fetchProfessors();
  const professor = professors.find((professor) => professor.id == params.id);
  if (!professor) {
    return <div>Professor not found</div>;
  }
  console.log(professor);
  return (
    <main className="grid min-h-screen grid-cols-5 grid-rows-5 items-center justify-center bg-white ">
      <div className="row-center-2 col-start-3">
        Professor Details Work in progress {professor.name}
      </div>
      <Button className="row-center-3 col-start-3">
        <Link href="/">Click me to go to home</Link>
      </Button>
    </main>
  );
}
