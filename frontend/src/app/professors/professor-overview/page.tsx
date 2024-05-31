import { promises as fs } from "fs";
import { Professor } from "src/lib/zod-schemas";
import ProfessorCard from "~/components/cards/professor-card";
import { Input } from "~/components/ui/input";

export async function fetchProfessors(): Promise<Professor[]> {
  const file = await fs.readFile(
    process.cwd() + "/public/professors.json",
    "utf-8",
  );
  const professors = Professor.array().parse(JSON.parse(file));
  return professors;
}

export default async function ProfessorOverview() {
  const professors: Professor[] = await fetchProfessors();
  return (
    <div className="container mx-auto my-auto">
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
  );
}
