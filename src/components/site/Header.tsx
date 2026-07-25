import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Globe2 } from "lucide-react";
import { useState, useRef } from "react";
import { NAV_ITEMS, CONFERENCE } from "@/lib/conference";

export function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktopMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDesktopMenu(null), 150);
  };

  const isChildActive = (children?: { to: string }[]) =>
    !!children?.some((c) => c.to === pathname);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-[color:var(--navy)] text-white text-xs">
        <div className="container-page flex flex-wrap items-center justify-between py-2 gap-2">
          <span className="opacity-90">{CONFERENCE.email} &middot; {CONFERENCE.phone}</span>
          <span className="opacity-90 hidden md:inline">{CONFERENCE.date} &middot; Online Presentation</span>
        </div>
      </div>

      {/* Brand row */}
      <div className="container-page flex items-center justify-between py-4 gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="ICAIHMI 2026" className="h-20 w-auto object-contain" />
          <div className="leading-tight">
            <div className="font-serif text-[color:var(--navy)] text-lg md:text-xl font-bold">{CONFERENCE.acronym}</div>
            <div className="text-xs text-[#3C9420] max-w-[500px] hidden sm:block text-lg md:text-x font-bold"> {CONFERENCE.name} </div>
          </div>
        </Link>

        {/* Online mode badge */}
        <div className="hidden md:inline-flex items-center gap-2 bg-[#3C9420]/10 border border-[#3C9420]/30 text-[#2F7519] px-3 py-2 rounded-full text-base font-semibold shrink-0">
  <Globe2 className="w-5 h-5" />
  <span>Virtual Mode</span>
</div>

        <button
          className="lg:hidden p-2 border border-border rounded-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="border-t border-border bg-[color:var(--subtle)] hidden lg:block">
        <div className="container-page flex flex-wrap justify-center items-center gap-12">
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.children?.length;
            const active = item.to ? pathname === item.to : isChildActive(item.children);

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`px-3 py-2.5 text-[13px] font-semibold border-b-2 transition-all duration-300 ${
                    active
                      ? "border-[#3C9420] text-[#3C9420]"
                      : "border-transparent text-ink hover:text-[#3C9420] hover:border-[#3C9420]/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2.5 text-[13px] font-semibold border-b-2 transition-all duration-300 ${
                    active || openDesktopMenu === item.label
                      ? "border-[#3C9420] text-[#3C9420]"
                      : "border-transparent text-ink hover:text-[#3C9420] hover:border-[#3C9420]/60"
                  }`}
                  onClick={() =>
                    setOpenDesktopMenu(openDesktopMenu === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      openDesktopMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDesktopMenu === item.label && (
                  <div className="absolute left-0 top-full min-w-[220px] bg-white border border-border shadow-md z-50">
                    {item.children!.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpenDesktopMenu(null)}
                        className={`block px-4 py-2.5 text-[13px] font-semibold border-b border-border/60 last:border-b-0 transition-all duration-300 ${
                          pathname === child.to
                            ? "text-[#3C9420] bg-[color:var(--subtle)]"
                            : "text-ink hover:text-[#3C9420] hover:bg-[color:var(--subtle)]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-2 flex flex-col">
            {/* Online mode badge (mobile) */}
            <div className="flex items-center gap-2 bg-[#3C9420]/10 border border-[#3C9420]/30 text-[#2F7519] px-3 py-2 rounded-full text-sm font-semibold w-fit mt-2 mb-1">
              <Globe2 className="w-4 h-4" />
              <span>Virtual Mode</span>
            </div>

            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-[15px] font-semibold border-b border-border/60 text-ink hover:text-[#3C9420] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = openMobileMenu === item.label;

              return (
                <div key={item.label} className="border-b border-border/60">
                  <button
                    className="w-full flex items-center justify-between py-2.5 text-[15px] font-semibold text-ink hover:text-[#3C9420] transition-all duration-300"
                    onClick={() => setOpenMobileMenu(expanded ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="pl-4 pb-2 flex flex-col">
                      {item.children!.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => {
                            setOpen(false);
                            setOpenMobileMenu(null);
                          }}
                          className="py-2 text-[15px] font-semibold text-muted-foreground hover:text-[#3C9420] transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}