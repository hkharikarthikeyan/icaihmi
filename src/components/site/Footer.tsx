import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { CONFERENCE, NAV_ITEMS } from "@/lib/conference";

export function Footer() {
  const quick = NAV_ITEMS.slice(0, 8);
  const more = NAV_ITEMS.slice(8);
  return (
    <footer className="bg-[color:var(--navy-dark)] text-slate-200 mt-20">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <h4 className="text-white font-serif text-lg mb-3">{CONFERENCE.acronym}</h4>
          <p className="text-sm text-slate-300 leading-relaxed">{CONFERENCE.name}</p>
          <p className="text-xs text-slate-400 mt-4">Organized by {CONFERENCE.organizer}</p>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h5>
          <ul className="space-y-1.5 text-sm">
            {quick.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-slate-300 hover:text-[color:var(--gold)]">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Downloads</h5>
          <ul className="space-y-1.5 text-sm">
            {more.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-slate-300 hover:text-[color:var(--gold)]">{n.label}</Link></li>
            ))}
            <li><a href="#" className="text-slate-300 hover:text-[color:var(--gold)]">Brochure (PDF)</a></li>
            <li><a href="#" className="text-slate-300 hover:text-[color:var(--gold)]">Paper Template</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Contact</h5>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]"/> {CONFERENCE.address}</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]"/> {CONFERENCE.email}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]"/> {CONFERENCE.phone}</li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="container-page py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} {CONFERENCE.acronym}. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[color:var(--gold)]">Privacy Policy</a>
            <a href="#" className="hover:text-[color:var(--gold)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
