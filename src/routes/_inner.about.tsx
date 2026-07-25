import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONFERENCE } from "@/lib/conference";
import { Target, Eye, ListChecks, Building2 } from "lucide-react";

export const Route = createFileRoute("/_inner/about")({
  head: () => ({
    meta: [
      {
        title: `About — ${CONFERENCE.acronym}`,
      },
      {
        name: "description",
        content: `About ${CONFERENCE.name} and Shazu Soft Technologies.`,
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="About the Conference"
        subtitle="An academic platform for interdisciplinary research and collaboration."
      />

      <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
        {/* About Shazu Soft */}
        <section className="max-w-5xl">
          <h2 className="section-title gold-bar flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            About Shazu Soft Technologies
          </h2>

          <p className="text-[15px] leading-8 text-ink text-justify">
            Shazu Soft Technologies, headquartered in Salem, Tamil Nadu, is a
            leading organization committed to empowering education, research,
            and technological innovation. The company provides comprehensive
            solutions in research guidance, conference management, journal and
            book publications, thesis writing support, patent filing
            assistance, funding project consultation, and academic development
            programs.
          </p>

          <p className="text-[15px] leading-8 text-ink text-justify mt-4">
            By fostering collaboration among researchers, academicians,
            industry professionals, and students, Shazu Soft Technologies
            strives to create a platform for knowledge exchange and innovation.
            Through its dedication to quality, integrity, and excellence, the
            organization continues to contribute to the advancement of global
            research and the development of future-ready technologies.
          </p>
        </section>

        {/* About Conference */}
        <section className="max-w-5xl">
          <h2 className="section-title gold-bar">
            About {CONFERENCE.acronym}
          </h2>

          <p className="text-[15px] leading-8 text-ink text-justify">
            The{" "}
            <strong>
              {CONFERENCE.name} ({CONFERENCE.acronym})
            </strong>{" "}
            is a premier international platform that brings together
            researchers, academicians, healthcare professionals, clinicians,
            scientists, industry experts, and students to explore the
            transformative role of Artificial Intelligence (AI) in healthcare
            and medical informatics. The conference aims to foster
            interdisciplinary collaboration by providing a forum for
            presenting innovative research, exchanging ideas, and discussing
            emerging technologies that enhance healthcare delivery, clinical
            decision-making, disease diagnosis, and patient care. It
            encourages the integration of AI-driven solutions with medical
            informatics to improve healthcare accessibility, efficiency, and
            quality.
          </p>

          <p className="text-[15px] leading-8 text-ink text-justify mt-4">
            The conference focuses on cutting-edge developments in artificial
            intelligence, machine learning, medical data analytics, health
            informatics, clinical decision support systems, telemedicine,
            wearable healthcare technologies, biomedical imaging, and
            intelligent healthcare systems. Through keynote lectures,
            technical paper presentations, panel discussions, and networking
            opportunities, participants will gain valuable insights into the
            latest advancements and future directions of AI-powered
            healthcare technologies. {CONFERENCE.acronym} aims to promote
            research excellence, strengthen collaboration between academia
            and healthcare industries, and contribute to the development of
            intelligent, secure, and patient-centered healthcare solutions.
          </p>
        </section>

        {/* Vision Mission Objectives */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 border-t-4 border-t-[color:var(--navy)] shadow-sm">
            <Eye className="w-6 h-6 text-[color:var(--gold)] mb-3" />

            <h3 className="font-serif text-xl text-[color:var(--navy)] mb-3">
              Vision
            </h3>

            <p className="text-sm leading-7 text-ink text-justify">
              To become a globally recognized platform advancing intelligent,
              secure, and patient-centered AI-driven healthcare solutions for
              the benefit of society.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 border-t-4 border-t-[color:var(--navy)] shadow-sm">
            <Target className="w-6 h-6 text-[color:var(--gold)] mb-3" />

            <h3 className="font-serif text-xl text-[color:var(--navy)] mb-3">
              Mission
            </h3>

            <p className="text-sm leading-7 text-ink text-justify">
              To catalyse high-quality interdisciplinary research and foster
              meaningful collaboration between academia and the healthcare
              industry across borders.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 border-t-4 border-t-[color:var(--navy)] shadow-sm">
            <ListChecks className="w-6 h-6 text-[color:var(--gold)] mb-3" />

            <h3 className="font-serif text-xl text-[color:var(--navy)] mb-3">
              Objectives
            </h3>

            <ul className="text-sm leading-7 text-ink list-disc list-inside space-y-2">
              <li>Disseminate cutting-edge AI-in-healthcare research.</li>
              <li>Promote responsible, patient-centered innovation.</li>
              <li>Enable global academic and clinical networking.</li>
              <li>Bridge academia with the healthcare industry.</li>
            </ul>
          </div>
        </div>

        {/* Conference Scope */}
        <section className="max-w-5xl">
          <h2 className="section-title gold-bar">Conference Scope</h2>

          <p className="text-[15px] leading-8 text-ink text-justify">
            {CONFERENCE.acronym} covers a broad spectrum of healthcare and
            technology domains including Artificial Intelligence, Machine
            Learning, Deep Learning, Medical Informatics, Health Informatics,
            Electronic Health Records, Biomedical Data Analytics,
            Bioinformatics, Precision Medicine, Telemedicine, Internet of
            Medical Things (IoMT), Wearable Healthcare Devices, Robotics in
            Healthcare, and Healthcare Cybersecurity. The conference welcomes
            original research articles, review papers, case studies,
            industrial contributions, and interdisciplinary research that
            advance healthcare delivery and address global patient-care
            challenges through innovative AI-driven solutions.
          </p>
        </section>
      </div>
    </>
  );
}