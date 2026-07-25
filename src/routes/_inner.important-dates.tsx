import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE, IMPORTANT_DATES } from "@/lib/conference";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/_inner/important-dates")({
  head: () => ({ meta: [{ title: `Important Dates — ${CONFERENCE.acronym}` }, { name: "description", content: "Key deadlines and dates for the conference." }] }),
  component: DatesPage,
});

function DatesPage() {
  return (
    <>
      <PageHero title="Important Dates" subtitle="Please note the key deadlines for paper submission and registration." />
      <div className="p-6 md:p-10">
        <div className="relative border-l-2 border-[color:var(--navy)]/20 pl-8 space-y-8">
          {IMPORTANT_DATES.map((d, i) => (
            <div key={d.label} className="relative">
              <span className="absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-white border-2 border-[color:var(--gold)] flex items-center justify-center">
                <CalendarDays className="w-4 h-4 text-[color:var(--navy)]"/>
              </span>
              <div className="bg-white border border-border p-5 border-l-4 border-l-[color:var(--gold)]">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Milestone {i + 1}</div>
                <h3 className="font-serif text-lg text-[color:var(--navy)] mt-1">{d.label}</h3>
                <p className="text-sm text-[color:var(--gold-dark)] font-semibold mt-1">{d.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-8 italic">Dates are subject to change. Authors are advised to check this page periodically.</p>
      </div>
    </>
  );
}
