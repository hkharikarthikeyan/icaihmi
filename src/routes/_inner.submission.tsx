import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/_inner/submission")({
  head: () => ({ meta: [{ title: `Submission — ${CONFERENCE.acronym}` }, { name: "description", content: "Submit your paper through Microsoft CMT." }] }),
  component: SubmissionPage,
});

const flow = ["Register on Google Form", "Upload Your Paper", "Peer Review", "Acceptance Notification", "Camera Ready Submission", "Conference Registration", "Presentation", "Publication"];

function SubmissionPage() {
  return (
    <>
      <PageHero title="Paper Submission" subtitle="All submissions are handled through Google Drive." />
      <div className="p-6 md:p-10 space-y-8">
        <div className="border border-border bg-[color:var(--subtle)] p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl text-[color:var(--navy)]">Google form Submission Portal</h2>
            <p className="text-sm text-ink mt-1">upload your paper in PDF format.</p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSckqGrnPkGvRIvFVrReEO-PDJ1Eg1DyEWuG6mfsKlDkWZdFdA/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="bg-[#3C9420] hover:bg-[#2F7519] text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors duration-300 flex items-center gap-2"
          >
            Click here to Submission link
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div>
          <h2 className="section-title gold-bar">Submission Flow</h2>
          <ol className="mt-4 space-y-3">
            {flow.map((step, i) => (
              <li key={step} className="flex items-start gap-4 border border-border p-4 bg-white">
                <span className="w-9 h-9 bg-[color:var(--navy)] text-white font-serif font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <div className="font-serif text-[color:var(--navy)]">{step}</div>
                  <div className="text-xs text-muted-foreground">Step {i + 1} of {flow.length}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
