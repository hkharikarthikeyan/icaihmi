import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_ITEMS } from "@/lib/conference";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function SideNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = NAV_ITEMS.filter((n) => n.to !== "/");
  const [expanded, setExpanded] = useState<string | null>(null);

  // Auto-expand the group containing the current page
  useEffect(() => {
    const activeParent = items.find(
      (n) => n.to === pathname || n.children?.some((c) => c.to === pathname)
    );
    if (activeParent?.children?.length) {
      setExpanded(activeParent.label);
    }
  }, [pathname]);

  return (
    <aside className="lg:sticky lg:top-[164px] self-start">
      <div className="bg-white border border-border rounded-sm overflow-hidden">
        <div className="bg-[color:var(--navy)] text-white px-4 py-3 font-serif text-sm uppercase tracking-wider">
          Conference Menu
        </div>
        <nav className="flex flex-col">
          {items.map((n) => {
            const hasChildren = !!n.children?.length;
            const isExpanded = expanded === n.label;
            const active =
              pathname === n.to || n.children?.some((c) => c.to === pathname);

            if (!hasChildren) {
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm border-b border-border last:border-b-0 transition-colors ${
                    active
                      ? "bg-[color:var(--subtle)] text-[color:var(--navy)] font-semibold border-l-[3px] border-l-[color:var(--gold)]"
                      : "text-ink hover:bg-[color:var(--subtle)] hover:text-[color:var(--navy)]"
                  }`}
                >
                  <span>{n.label}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? "text-[color:var(--gold)]" : "text-muted-foreground"}`} />
                </Link>
              );
            }

            return (
              <div key={n.label} className="border-b border-border last:border-b-0">
                <div
                  className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                    active
                      ? "bg-[color:var(--subtle)] text-[color:var(--navy)] font-semibold border-l-[3px] border-l-[color:var(--gold)]"
                      : "text-ink hover:bg-[color:var(--subtle)] hover:text-[color:var(--navy)]"
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : n.label)}
                >
                  {n.to ? (
                    <Link to={n.to} onClick={(e) => e.stopPropagation()} className="flex-1">
                      {n.label}
                    </Link>
                  ) : (
                    <span className="flex-1">{n.label}</span>
                  )}
                  {isExpanded ? (
                    <ChevronDown className={`w-4 h-4 ${active ? "text-[color:var(--gold)]" : "text-muted-foreground"}`} />
                  ) : (
                    <ChevronRight className={`w-4 h-4 ${active ? "text-[color:var(--gold)]" : "text-muted-foreground"}`} />
                  )}
                </div>

                {isExpanded && (
                  <div className="flex flex-col bg-[color:var(--subtle)]/40">
                    {n.children!.map((child) => {
                      const childActive = pathname === child.to;
                      return (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`pl-8 pr-4 py-2 text-[13px] border-t border-border/60 transition-colors ${
                            childActive
                              ? "text-[color:var(--navy)] font-medium bg-[color:var(--subtle)]"
                              : "text-muted-foreground hover:text-[color:var(--navy)]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mt-4 bg-[color:var(--navy)] text-white p-4 rounded-sm">
        <h4 className="font-serif text-base mb-1">Submit Your Paper</h4>
        <p className="text-xs text-slate-300 mb-3">Submissions via Microsoft CMT</p>
        <Link
          to="/submission"
          className="inline-block text-xs bg-[color:var(--gold)] text-[color:var(--navy-dark)] px-3 py-1.5 font-semibold hover:bg-[color:var(--gold-dark)] hover:text-white"
        >
          Submit Now →
        </Link>
      </div>
    </aside>
  );
}