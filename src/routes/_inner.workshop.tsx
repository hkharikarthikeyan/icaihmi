import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE, WORKSHOPS } from "@/lib/conference";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/_inner/workshop")({
  head: () => ({ meta: [{ title: `Workshops — ${CONFERENCE.acronym}` }, { name: "description", content: "Pre-conference workshops on AI, ML, Python, Deep Learning and more." }] }),
  component: WorkshopPage,
});

function WorkshopPage() {
  return (
    <>
      <PageHero title="Workshops" subtitle="Pre-conference hands-on workshops led by domain experts." />
      <div className="p-6 md:p-10">
        <p className="text-sm text-ink mb-6">
          The following workshops will be conducted alongside {CONFERENCE.acronym}. Workshop registration is available separately during
          conference registration.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {WORKSHOPS.map((w) => (
            <div key={w.title} className="border border-border bg-white p-5 hover:border-[color:var(--gold)] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[color:var(--navy)] text-white flex items-center justify-center"><GraduationCap className="w-5 h-5"/></div>
                <h3 className="font-serif text-[color:var(--navy)] text-lg m-0">{w.title}</h3>
              </div>
              <p className="text-sm text-ink">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
