import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";
import { Download, FileText, ShieldCheck, Presentation, ScrollText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/_inner/author-guidelines")({
  head: () => ({ meta: [{ title: `Author Guidelines — ${CONFERENCE.acronym}` }, { name: "description", content: "Formatting, review process and publication ethics." }] }),
  component: GuidelinesPage,
});

const sections = [
  { icon: FileText, title: "Paper Format", body: "Papers must follow the two-column conference format (A4 paper size, 10pt Times New Roman). Length: 6–8 pages including figures and references." },
  { icon: ScrollText, title: "Template", body: "Use the official conference template (MS Word or LaTeX). Do not modify margins, fonts, or column widths." },
  { icon: CheckCircle2, title: "Formatting Rules", body: "Figures and tables must be properly numbered and referenced. All references should follow IEEE citation style. Include an abstract of 150–250 words." },
  { icon: ShieldCheck, title: "Review Process", body: "Double-blind peer review by at least three reviewers from the international technical committee. Notification within 4–6 weeks." },
  { icon: ShieldCheck, title: "Plagiarism Policy", body: "Similarity index must be below 15% (excluding references). Submissions are checked using Turnitin. Plagiarised papers are rejected without further review." },
  { icon: Presentation, title: "Presentation Guidelines", body: "Each accepted paper is allotted 15 minutes (12 min presentation + 3 min Q&A). Slides in 16:9 format. Both in-person and virtual presentations are supported." },
  { icon: ShieldCheck, title: "Publication Ethics", body: "The conference follows COPE guidelines. Authors must disclose conflicts of interest, obtain necessary permissions and confirm authorship contributions." },
];

function GuidelinesPage() {
  return (
    <>
      <PageHero title="Author Guidelines" subtitle="Please read carefully before preparing your submission." />
      <div className="p-6 md:p-10 space-y-6">
        <a href="/template/temp.docx" className="inline-flex items-center gap-2 bg-[color:var(--navy)] text-white px-5 py-3 text-sm font-semibold hover:bg-[color:var(--navy-dark)]">
          <Download className="w-4 h-4"/> Download IEEE Template (.docx / .zip)
        </a>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border border-border bg-white p-5">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5 text-[color:var(--gold)]"/>
                <h3 className="font-serif text-[color:var(--navy)] text-lg">{title}</h3>
              </div>
              <p className="text-sm text-ink leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
