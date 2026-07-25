import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-[color:var(--navy)] text-white">
      <div className="container-page py-10">
        <nav className="text-xs text-slate-300 flex items-center gap-1 mb-3">
          <Link to="/" className="flex items-center gap-1 hover:text-[color:var(--gold)]"><Home className="w-3 h-3"/> Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[color:var(--gold)]">{title}</span>
        </nav>
        <h1 className="font-serif text-3xl md:text-4xl text-white">{title}</h1>
        {subtitle && <p className="text-slate-300 text-sm mt-2 max-w-3xl">{subtitle}</p>}
      </div>
      <div className="h-1 bg-[color:var(--gold)]" />
    </div>
  );
}
