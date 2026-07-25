import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { COMMITTEE, CONFERENCE } from "@/lib/conference";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/_inner/committee")({
  head: () => ({ meta: [{ title: `Committee — ${CONFERENCE.acronym}` }, { name: "description", content: "Meet the international committee organizing the conference." }] }),
  component: CommitteePage,
});

function initials(name: string) {
  return name.replace(/(Prof\.|Dr\.|Sir|Mr\.|Ms\.)/g, "").trim().split(/\s+/).map(s => s[0]).slice(0, 2).join("");
}

function CommitteePage() {
  return (
    <>
      <PageHero title="Committee" subtitle="A distinguished panel of academic and industry leaders from around the world." />
      <div className="p-6 md:p-10 space-y-12">
        {Object.entries(COMMITTEE).map(([section, members]) => (
          <section key={section}>
            <h2 className="section-title gold-bar">{section}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m) => (
                <div key={m.name} className="border border-border bg-white p-5 flex gap-4 hover:border-[color:var(--gold)] transition-colors">
                  {/* <div className="w-16 h-16 shrink-0 bg-[color:var(--navy)] text-white rounded-full flex items-center justify-center font-serif text-lg">
                    {initials(m.name)}
                  </div> */}
                  <div className="min-w-0">
                    <h3 className="font-serif text-[color:var(--navy)] text-base leading-tight">{m.name}</h3>
                    <p className="text-xs text-[color:var(--gold-dark)] font-semibold mt-1.5">{m.designation}</p>
                    <p className="text-xs text-ink mt-1">{m.affiliation}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3 h-3"/>{m.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
