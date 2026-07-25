import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE, TRACKS } from "@/lib/conference";
import { User } from "lucide-react";

export const Route = createFileRoute("/_inner/tracks")({
  head: () => ({ meta: [{ title: `Conference Tracks — ${CONFERENCE.acronym}` }, { name: "description", content: "Explore the five technical tracks of the conference." }] }),
  component: TracksPage,
});

function TracksPage() {
  return (
    <>
      <PageHero title="Conference Tracks" subtitle="Five parallel tracks covering the full spectrum of AI in healthcare and medical informatics research." />
      <div className="p-6 md:p-10 space-y-6">
        {TRACKS.map((t) => (
          <article key={t.id} className="border border-border bg-white">
            <div className="bg-[color:var(--navy)] text-white px-5 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-[color:var(--gold)] text-[color:var(--navy-dark)] font-serif font-bold flex items-center justify-center">{t.id}</div>
              <h2 className="font-serif text-white text-lg m-0">Track {t.id} — {t.title}</h2>
            </div>
            <div className="p-5 grid md:grid-cols-[1fr_260px] gap-6">
              <div>
                <p className="text-sm text-ink leading-relaxed">{t.description}</p>
                <h4 className="text-xs uppercase tracking-widest text-[color:var(--gold-dark)] font-semibold mt-4 mb-2">Research Topics</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm text-ink list-disc list-inside">
                  {t.topics.map((tp) => <li key={tp}>{tp}</li>)}
                </ul>
              </div>
              <aside className="bg-[color:var(--subtle)] p-4 border-l-4 border-[color:var(--gold)]">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Track Chair</div>
                <div className="flex items-start gap-2">
                  <User className="w-5 h-5 text-[color:var(--navy)] mt-0.5"/>
                  <div>
                    <div className="font-serif text-[color:var(--navy)]">{t.chair.name}</div>
                    <div className="text-xs text-ink">{t.chair.affiliation}</div>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
