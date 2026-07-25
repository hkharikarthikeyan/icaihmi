import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FileText, Download, ArrowRight, Calendar, MapPin, Users, BookOpen,
  Award, Mic, ChevronRight, Bell, Sun, Factory, Building2, Recycle,
  Leaf, Handshake,
} from "lucide-react";
import {
  CONFERENCE, IMPORTANT_DATES, KEYNOTES, SPONSORS, RESEARCH_AREAS,
} from "@/lib/conference";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CONFERENCE.acronym} — ${CONFERENCE.name}` },
      { name: "description", content: `${CONFERENCE.name}. ${CONFERENCE.date}, ${CONFERENCE.venue}. Submit your paper via Microsoft CMT.` },
    ],
  }),
  component: HomePage,
});

function useCountdown(target: string) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, +new Date(target) - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [target]);
  return t;
}

const SDGS = [
  { n: 4, title: "Quality Education", desc: "Promoting inclusive and equitable quality education.", color: "#C5192D", icon: BookOpen },
  { n: 7, title: "Clean Energy", desc: "Ensuring access to affordable, reliable clean energy.", color: "#FCC30B", icon: Sun },
  { n: 9, title: "Innovation & Infrastructure", desc: "Building resilient infrastructure, promoting innovation and industrialization.", color: "#FD6925", icon: Factory },
  { n: 11, title: "Sustainable Cities", desc: "Making cities inclusive, safe, resilient and sustainable.", color: "#FD9D24", icon: Building2 },
  { n: 12, title: "Responsible Consumption", desc: "Ensuring sustainable consumption and production patterns.", color: "#BF8B2E", icon: Recycle },
  { n: 13, title: "Climate Action", desc: "Taking urgent action to combat climate change and its impacts.", color: "#3F7E44", icon: Leaf },
  { n: 17, title: "Partnerships", desc: "Strengthening partnerships to achieve the goals.", color: "#19486A", icon: Handshake },
];

function HomePage() {
  const t = useCountdown(CONFERENCE.dateISO);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[color:var(--navy)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 25% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 70%, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container-page relative py-16 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            {/* <div className="inline-flex items-center gap-2 border border-[color:var(--gold)]/60 text-[color:var(--gold)] px-3 py-1 text-xs uppercase tracking-widest">
              <Award className="w-3.5 h-3.5"/> International Conference · 2026
            </div> */}
            <h1 className="font-serif text-3xl md:text-5xl leading-tight mt-4 text-white">
              International Conference on{" "}
              <span className="text-[#3C9420]">
                AI in Healthcare
              </span>{" "}
              and{" "}
              <span className="text-[#3C9420]">
                Medical Informatics
              </span>
            </h1>
            <p className="text-slate-300 mt-4 max-w-2xl text-[15px] leading-relaxed">
              <span className="text-[color:var(--gold)] italic">Theme: </span>{CONFERENCE.theme}
            </p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-200">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[color:var(--gold)]"/> {CONFERENCE.date}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[color:var(--gold)]"/> {CONFERENCE.venue}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/registration" className="bg-[color:var(--gold)] text-[color:var(--navy-dark)] px-5 py-3 text-sm font-semibold hover:bg-[color:var(--gold-dark)] hover:text-white flex items-center gap-2">
                Register Now <ArrowRight className="w-4 h-4"/>
              </Link>
              <Link to="/submission" className="bg-white text-[color:var(--navy)] px-5 py-3 text-sm font-semibold hover:bg-slate-100 flex items-center gap-2">
                <FileText className="w-4 h-4"/> Submit Paper
              </Link>
              <a href="#" className="border border-white/40 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
                <Download className="w-4 h-4"/> Download Brochure
              </a>
            </div>
          </div>
          {/* Countdown */}
          <div className="bg-white/5 backdrop-blur border border-white/10 p-6">
            <div className="text-xs uppercase tracking-widest text-[color:var(--gold)] mb-4">Conference starts in</div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Days", val: t.d }, { label: "Hours", val: t.h },
                { label: "Minutes", val: t.m }, { label: "Seconds", val: t.s },
              ].map((c) => (
                <div key={c.label} className="text-center bg-[color:var(--navy-dark)] py-4 border border-white/10">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white">{String(c.val).padStart(2, "0")}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-300 mt-1">{c.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-300 space-y-1">
              <div className="flex justify-between"><span>Paper Submission</span><span className="text-[color:var(--gold)]">Oct 21, 2026</span></div>
              <div className="flex justify-between"><span>Acceptance</span><span className="text-[color:var(--gold)]">Nov 30, 2026</span></div>
              <div className="flex justify-between"><span>Early Registration</span><span className="text-[color:var(--gold)]">Dec 24, 2026</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement bar */}
      <div className="bg-[color:var(--gold)] text-[color:var(--navy-dark)] overflow-hidden py-2 border-b border-[color:var(--gold-dark)]">
        <div className="flex items-center whitespace-nowrap">
          <div className="flex items-center gap-2 px-4 font-semibold text-sm shrink-0 border-r border-[color:var(--navy-dark)]/30">
            <Bell className="w-4 h-4" /> LATEST NEWS
          </div>
          <div className="marquee text-sm">
            📢 Paper submission is now open — submit via Google Form &nbsp; &bull; &nbsp;
            🎓 Selected papers will be considered for publication in indexed conference proceedings &nbsp; &bull; &nbsp;
           
          🌐 Distinguished keynote speakers from NASA, Jamia Hamdard and leading institutions confirmed.
          </div>
        </div>
      </div>

      {/* Important Dates preview */}
      <section className="py-16 bg-[color:var(--subtle)]">
        <div className="container-page">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <h2 className="section-title gold-bar">Important Dates</h2>
              <p className="text-sm text-muted-foreground">Mark the key milestones for {CONFERENCE.acronym}</p>
            </div>
            <Link to="/important-dates" className="text-sm text-[color:var(--navy)] font-semibold flex items-center gap-1 hover:text-[color:var(--gold-dark)]">
              View full timeline <ChevronRight className="w-4 h-4"/>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMPORTANT_DATES.map((d) => (
              <div key={d.label} className="bg-white border border-border p-5 border-l-4 border-l-[color:var(--navy)] hover:border-l-[color:var(--gold)] transition-colors">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</div>
                <div className="font-serif text-lg text-[color:var(--navy)] mt-1">{d.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container-page grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <h2 className="section-title gold-bar">About the Conference</h2>
            <p className="text-[15px] leading-relaxed text-ink">
              The <strong>{CONFERENCE.name} ({CONFERENCE.acronym})</strong> is a premier international platform that brings together researchers, academicians, healthcare professionals, clinicians, scientists, industry experts, and students to explore the transformative role of Artificial Intelligence in healthcare and medical informatics.
            </p>
            <p className="text-[15px] leading-relaxed text-ink mt-4">
              The conference aims to foster interdisciplinary collaboration by providing a forum for presenting innovative research, exchanging ideas, and discussing emerging technologies that enhance healthcare delivery, clinical decision-making, disease diagnosis, and patient care.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/about" className="bg-[color:var(--navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--navy-dark)]">Read More</Link>
              <Link to="/call-for-papers" className="border border-[color:var(--navy)] text-[color:var(--navy)] px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--subtle)]">Call for Papers</Link>
            </div>
          </div>
          <div className="bg-[color:var(--subtle)] border border-border p-6">
            <h3 className="font-serif text-xl text-[color:var(--navy)] mb-4">Research Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {RESEARCH_AREAS.slice(0, 12).map((a) => (
                <span key={a} className="text-xs bg-white border border-border px-2.5 py-1 text-ink">{a}</span>
              ))}
              <Link to="/call-for-papers" className="text-xs text-[color:var(--gold-dark)] font-semibold px-2 py-1">+ more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1A450E] text-white">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "500+", l: "Expected Delegates", i: Users },
            { n: "45+", l: "Countries", i: MapPin },
            { n: "20+", l: "Keynote Speakers", i: Mic },
            { n: "300+", l: "Papers Expected", i: BookOpen },
          ].map(({ n, l, i: Icon }) => (
            <div key={l}>
              <Icon className="w-6 h-6 text-[color:var(--gold)] mx-auto mb-2"/>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white">{n}</div>
              <div className="text-xs uppercase tracking-widest text-slate-300 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainable Development Goals */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-[color:var(--navy)] font-bold">
              Sustainable Development Goals (SDGs)
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              {CONFERENCE.acronym} supports the United Nations Sustainable Development Goals by promoting research, innovation and solutions for a sustainable and resilient future.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {SDGS.map((g) => (
              <div key={g.n} className="text-center">
                <div
                  className="aspect-square flex flex-col items-center justify-center text-white p-3 shadow-sm"
                  style={{ backgroundColor: g.color }}
                >
                  <span className="text-xs font-bold leading-none">{g.n}</span>
                  <g.icon className="w-7 h-7 my-1.5" strokeWidth={1.75} />
                  <span className="text-[9px] uppercase tracking-wide font-semibold leading-tight">
                    {g.title}
                  </span>
                </div>
                <h4 className="font-serif text-sm text-[color:var(--navy)] mt-3">{g.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Keynote Speakers */}
<section className="py-16 bg-white">
  <div className="container-page">
    <h2 className="section-title gold-bar">Keynote Speakers</h2>

    <div className="flex flex-wrap justify-center gap-12 mt-10">
      {KEYNOTES.map((k) => (
        <div
          key={k.name}
          className="w-80 bg-white border-2 border-black rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <img
            src={k.image}
            alt={k.name}
            className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-[#3C9420]/20 shadow-lg"
          />

          <h3 className="mt-6 text-2xl font-serif text-[#0A3A75]">
            {k.name}
          </h3>

          <p className="mt-2 text-gray-600 text-sm leading-6">
            {k.affiliation}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Sponsors */}
      <section className="py-12 bg-[color:var(--subtle)] border-y border-border">
        <div className="container-page">
          <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6">Organized & Supported By</h3>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
            {SPONSORS.map((s) => (
              <div key={s} className="text-[color:var(--navy)] font-serif text-sm md:text-base opacity-80 hover:opacity-100">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest news + FAQ */}
      <section className="py-16">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title gold-bar">Latest News</h2>
            <ul className="mt-4 divide-y divide-border border border-border bg-white">
              {[
                { d: "Aug 12, 2026", t: "Call for Papers officially opens" },
                
                { d: "Sep 18, 2026", t: "Springer publication partnership announced" },
                { d: "Feb 6, 2027", t: "Keynote from George Salazar Johnson Space Center, NASA and Dr. Ihtiram Raza Khan Jamia Hamdard, New Delhi" },
              ].map((n) => (
                <li key={n.t} className="p-4 flex gap-4 items-start">
                  <div className="text-xs text-[color:var(--gold-dark)] font-semibold w-24 shrink-0">{n.d}</div>
                  <div className="text-sm text-ink">{n.t}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title gold-bar">Frequently Asked Questions</h2>
            <Accordion.Root type="single" collapsible className="mt-4 border border-border divide-y divide-border bg-white">
              {[
                { q: "How do I submit a paper?", a: "All submissions are handled through Google Drive. Visit the Submission page for the direct link and step-by-step instructions." },
                { q: "Where will the proceedings be published?", a: "Accepted and presented papers will be considered for Scopus and Web of Science indexed proceedings, subject to quality review." },
                { q: "Is virtual presentation allowed?", a: "Yes. Authors unable to travel may present remotely via our video conferencing platform after registration." },
                { q: "Can students avail a discount?", a: "Yes, discounted student registration is available with valid institutional ID. See the Registration page for details." },
              ].map((f, i) => (
                <Accordion.Item key={i} value={String(i)}>
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left px-4 py-3 flex justify-between items-center text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--subtle)]">
                      {f.q}
                      <ChevronRight className="w-4 h-4 transition-transform data-[state=open]:rotate-90" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pb-4 text-sm text-ink data-[state=closed]:hidden">{f.a}</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>
    </>
  );
}