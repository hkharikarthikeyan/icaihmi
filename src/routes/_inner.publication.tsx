import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";
import { BookOpen, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_inner/publication")({
  head: () => ({ meta: [{ title: `Publication — ${CONFERENCE.acronym}` }, { name: "description", content: "Publication opportunities and indexing." }] }),
  component: PublicationPage,
});

const indexers = [
  { name: "Scopus", desc: "Elsevier's citation database indexing peer-reviewed literature." },
  { name: "Web of Science", desc: "Clarivate Analytics multidisciplinary citation index." },
  { name: "Google Scholar", desc: "Freely accessible search engine for scholarly literature." },
  { name: "ISBN Proceedings", desc: "Conference proceedings published with a registered ISBN." },
];

// function PublicationPage() {
//   return (
//     <>
//       <PageHero title="Publication" subtitle="Selected papers will be considered for indexed proceedings and journals." />
//       <div className="p-6 md:p-10 space-y-8">
//         <div className="border border-border bg-white p-6">
//           <div className="flex items-center gap-3 mb-3"><BookOpen className="w-6 h-6 text-[color:var(--gold)]"/><h2 className="font-serif text-xl text-[color:var(--navy)]">Conference Proceedings</h2></div>
//           <p className="text-sm text-ink leading-relaxed">
//             All accepted and presented papers will be published in the official {CONFERENCE.acronym} proceedings with a registered
//             ISBN number. Selected extended versions of high-quality papers will be considered for publication in Scopus and Web of
//             Science indexed journals through our publishing partners.
//           </p>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2">
//           {indexers.map((idx) => (
//             <div key={idx.name} className="border border-border bg-white p-5 border-l-4 border-l-[color:var(--navy)]">
//               <h3 className="font-serif text-[color:var(--navy)] text-lg">{idx.name}</h3>
//               <p className="text-sm text-ink mt-1">{idx.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="border-l-4 border-[color:var(--gold)] bg-[color:var(--subtle)] p-5">
//           <div className="flex items-center gap-2 mb-2"><ShieldCheck className="w-5 h-5 text-[color:var(--gold-dark)]"/><h3 className="font-serif text-[color:var(--navy)] text-lg">Publication Ethics</h3></div>
//           <p className="text-sm text-ink">
//             {CONFERENCE.acronym} follows the Committee on Publication Ethics (COPE) guidelines. Authors are expected to submit only
//             original work, disclose any potential conflicts of interest, and correctly attribute prior contributions. Plagiarism,
//             data fabrication, and duplicate submissions will result in rejection and possible reporting to authors' institutions.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
function PublicationPage() {
  return (
    <>
      <PageHero
        title="Publication"
        subtitle="Publication details will be announced soon."
      />

      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <div className="border border-border rounded-lg bg-white shadow-sm p-10 text-center">
          <div className="flex justify-center mb-5">
            <BookOpen className="w-14 h-14 text-[color:var(--gold)]" />
          </div>

          <h2 className="font-serif text-3xl text-[color:var(--navy)] mb-4">
            Publication Information
          </h2>

          <p className="text-ink leading-8 text-[15px]">
            The publication partners, proceedings, journal collaborations,
            indexing details, and other publication-related information for{" "}
            <strong>{CONFERENCE.acronym}</strong> are currently under
            finalization.
          </p>

          <p className="text-ink leading-8 text-[15px] mt-4">
            We are working to provide the best publication opportunities for
            accepted papers. Complete publication details, including proceedings,
            indexing, and journal options, will be announced on this page soon.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-5 py-3">
            
            <span className="font-medium text-yellow-700">
              Publication details will be updated soon.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}