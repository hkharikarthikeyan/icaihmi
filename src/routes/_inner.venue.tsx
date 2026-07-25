import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";
import { Plane, Train, Hotel, MapPin } from "lucide-react";

export const Route = createFileRoute("/_inner/venue")({
  head: () => ({ meta: [{ title: `Venue — ${CONFERENCE.acronym}` }, { name: "description", content: `Venue details, transportation and hotels for ${CONFERENCE.venue}.` }] }),
  component: VenuePage,
});

function VenuePage() {
  return (
    <>
      <PageHero title="Venue" subtitle={CONFERENCE.venue} />
      <div className="p-6 md:p-10 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-video bg-[color:var(--subtle)] border border-border flex items-center justify-center text-muted-foreground text-sm">
            Venue Photograph
          </div>
          <div className="aspect-video bg-[color:var(--subtle)] border border-border overflow-hidden">
            <iframe
              title="Venue Map"
              src="https://maps.google.com/maps?q=Chennai%20Le%20Meridien&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="border border-border p-5">
            <Plane className="w-6 h-6 text-[color:var(--gold)] mb-2"/>
            <h3 className="font-serif text-[color:var(--navy)] text-lg mb-1">Airport</h3>
            <p className="text-sm text-ink">Chennai International Airport (MAA) — approx. 15 km / 30 min by taxi.</p>
          </div>
          <div className="border border-border p-5">
            <Train className="w-6 h-6 text-[color:var(--gold)] mb-2"/>
            <h3 className="font-serif text-[color:var(--navy)] text-lg mb-1">Railway</h3>
            <p className="text-sm text-ink">Chennai Central & Egmore stations — approx. 12 km. Frequent metro and cab services available.</p>
          </div>
          <div className="border border-border p-5">
            <Hotel className="w-6 h-6 text-[color:var(--gold)] mb-2"/>
            <h3 className="font-serif text-[color:var(--navy)] text-lg mb-1">Hotels</h3>
            <p className="text-sm text-ink">Partner hotels within 1 km include ITC Grand Chola, Taj Coromandel, and Hyatt Regency. Discounted rates available on request.</p>
          </div>
        </div>

        <div className="border-l-4 border-[color:var(--navy)] bg-[color:var(--subtle)] p-5 flex gap-3 items-start">
          <MapPin className="w-5 h-5 text-[color:var(--navy)] mt-0.5"/>
          <div>
            <div className="font-serif text-[color:var(--navy)]">Local Transportation</div>
            <p className="text-sm text-ink mt-1">Ola, Uber, and prepaid taxi counters are available at the airport and railway stations. Chennai Metro connects most major hubs to the venue area.</p>
          </div>
        </div>
      </div>
    </>
  );
}
