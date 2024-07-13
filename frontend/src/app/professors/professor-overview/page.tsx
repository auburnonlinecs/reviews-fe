import ProfessorCard from "~/components/cards/professor-card";
import { Input } from "~/components/ui/input";
import { ProfessorArray } from "~/lib/zod-schemas";
import { fetchProfessors } from "~/server/db/queries";

export default async function ProfessorOverview() {
  const data = await fetchProfessors();
  let professors: ProfessorArray = [];
  if (data) {
    professors = data
  }
  return (
    <>
    <div className="min-h-auto container mx-auto my-auto">
      <div className="pb-10 text-[64px] ">
        All Professors
        <Input type="search" placeholder="Search" />
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {professors.map((professor) => (
          <ProfessorCard key={professor.id} professor={professor} />



          
        ))}
      </div>
    </div>
    </>
  );
}
