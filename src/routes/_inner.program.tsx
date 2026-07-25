import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";

export const Route = createFileRoute("/_inner/program")({
  head: () => ({ meta: [{ title: `Program — ${CONFERENCE.acronym}` }, { name: "description", content: "Two-day conference program and schedule." }] }),
  component: ProgramPage,
});

const days = [
  {
    day: "Day 1", date: "December 19, 2026", items: [
      { time: "08:30 – 09:30", title: "Registration & Welcome Kit", type: "General" },
      { time: "09:30 – 10:15", title: "Inaugural Ceremony & Lamp Lighting", type: "Ceremony" },
      { time: "10:15 – 11:15", title: "Keynote 1 — Prof. James O'Brien (MIT)", type: "Keynote" },
      { time: "11:15 – 11:30", title: "Tea Break", type: "Break" },
      { time: "11:30 – 13:00", title: "Technical Session I — Track 1 & 2", type: "Sessions" },
      { time: "13:00 – 14:00", title: "Lunch", type: "Break" },
      { time: "14:00 – 15:30", title: "Workshop — Applied AI", type: "Workshop" },
      { time: "15:30 – 17:00", title: "Technical Session II — Track 3 & 4", type: "Sessions" },
    ],
  },
  {
    day: "Day 2", date: "December 20, 2026", items: [
      { time: "09:00 – 10:00", title: "Keynote 2 — Prof. Chen Wei (Tsinghua)", type: "Keynote" },
      { time: "10:00 – 11:30", title: "Technical Session III — Track 5", type: "Sessions" },
      { time: "11:30 – 11:45", title: "Tea Break", type: "Break" },
      { time: "11:45 – 13:00", title: "Panel Discussion — Industry 5.0", type: "Panel" },
      { time: "13:00 – 14:00", title: "Lunch", type: "Break" },
      { time: "14:00 – 15:30", title: "Poster Session", type: "Sessions" },
      { time: "15:30 – 16:30", title: "Awards & Best Paper Announcement", type: "Awards" },
      { time: "16:30 – 17:00", title: "Closing Ceremony & Vote of Thanks", type: "Ceremony" },
    ],
  },
];

function typeColor(t: string) {
  const map: Record<string, string> = {
    Keynote: "bg-[color:var(--gold)] text-[color:var(--navy-dark)]",
    Sessions: "bg-[color:var(--navy)] text-white",
    Workshop: "bg-[color:var(--navy)] text-white",
    Ceremony: "bg-[color:var(--gold)] text-[color:var(--navy-dark)]",
    Awards: "bg-[color:var(--gold)] text-[color:var(--navy-dark)]",
    Panel: "bg-[color:var(--navy)] text-white",
    Break: "bg-slate-200 text-slate-700",
    General: "bg-slate-200 text-slate-700",
  };
  return map[t] ?? "bg-slate-200 text-slate-700";
}
function ProgramPage() {
  return (
    <>
      <PageHero
        title="Conference Program"
        subtitle="Detailed conference schedule will be announced soon."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-border rounded-lg shadow-sm p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[color:var(--gold)]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-[color:var(--gold-dark)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
              />
            </svg>
          </div>

          <h2 className="font-serif text-4xl text-[color:var(--navy)] mb-4">
            Program Schedule
          </h2>

          <p className="text-2xl font-semibold text-[color:var(--gold-dark)] mb-4">
            To Be Announced
          </p>

          <p className="text-slate-600 max-w-2xl mx-auto leading-7">
            The detailed conference program, keynote schedule, technical
            sessions, and presentation timings will be published
            shortly. Please check this page regularly for updates.
          </p>
        </div>
      </div>
    </>
  );
}
// function ProgramPage() {
//   return (
//     <>
//       <PageHero title="Conference Program" subtitle={`Two-day technical program — ${CONFERENCE.venue}`} />
//       <div className="p-6 md:p-10 space-y-10">
//         {days.map((d) => (
//           <section key={d.day}>
//             <div className="flex items-baseline justify-between mb-4">
//               <h2 className="font-serif text-2xl text-[color:var(--navy)]">{d.day}</h2>
//               <span className="text-sm text-[color:var(--gold-dark)] font-semibold">{d.date}</span>
//             </div>
//             <div className="border border-border">
//               {d.items.map((it, i) => (
//                 <div key={i} className={`grid grid-cols-[130px_1fr_auto] gap-4 items-center px-4 py-3 ${i % 2 ? "bg-[color:var(--subtle)]" : "bg-white"} border-b border-border last:border-b-0`}>
//                   <span className="text-xs font-mono text-[color:var(--navy)] font-semibold">{it.time}</span>
//                   <span className="text-sm text-ink">{it.title}</span>
//                   <span className={`text-[10px] uppercase tracking-widest px-2 py-1 font-semibold ${typeColor(it.type)}`}>{it.type}</span>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// }
