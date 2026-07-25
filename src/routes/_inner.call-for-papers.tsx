import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE, RESEARCH_AREAS } from "@/lib/conference";
import { BookMarked } from "lucide-react";

export const Route = createFileRoute("/_inner/call-for-papers")({
  head: () => ({ meta: [{ title: `Call for Papers — ${CONFERENCE.acronym}` }, { name: "description", content: `Call for research papers across AI in healthcare and medical informatics tracks.` }] }),
  component: CFPPage,
});

function CFPPage() {
  return (
    <>
      <PageHero title="Call for Papers" subtitle="Submit original, unpublished research contributions across the following domains." />
      <div className="p-6 md:p-10 space-y-8">
        <p className="text-[15px] leading-relaxed text-ink">
          {CONFERENCE.acronym} invites original research articles, review papers, case studies and industrial contributions in the
          following areas. All submissions undergo rigorous peer review by the technical committee.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_AREAS.map((topic) => (
            <div key={topic} className="border border-border bg-white p-4 flex items-center gap-3 hover:border-[color:var(--gold)] hover:bg-[color:var(--subtle)] transition-colors">
              <BookMarked className="w-4 h-4 text-[color:var(--gold)] shrink-0"/>
              <span className="text-sm text-ink">{topic}</span>
            </div>
          ))}
        </div>

        <div className="bg-[color:var(--subtle)] border-l-4 border-[color:var(--navy)] p-5">
          <h3 className="font-serif text-lg text-[color:var(--navy)] mb-2">Submission Requirements</h3>
          <ul className="text-sm text-ink space-y-1 list-disc list-inside">
            <li>Paper length: 6–8 pages in IEEE conference format</li>
            <li>Original, unpublished work not under review elsewhere</li>
            <li>Similarity index below 15% (excluding references)</li>
            <li>Submissions handled through Google drive</li>
          </ul>
        </div>
      </div>
    </>
  );
}
