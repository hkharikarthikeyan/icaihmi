import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as NAV_ITEMS, n as CONFERENCE } from "./conference-DgrJ19DA.mjs";
import { C as Linkedin, P as Earth, R as ChevronDown, a as Twitter, b as MapPin, g as Phone, j as Facebook, n as X, t as Youtube, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D7eRl04f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D6DQJ1OW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openDesktopMenu, setOpenDesktopMenu] = (0, import_react.useState)(null);
	const [openMobileMenu, setOpenMobileMenu] = (0, import_react.useState)(null);
	const closeTimer = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const handleEnter = (label) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setOpenDesktopMenu(label);
	};
	const handleLeave = () => {
		closeTimer.current = setTimeout(() => setOpenDesktopMenu(null), 150);
	};
	const isChildActive = (children) => !!children?.some((c) => c.to === pathname);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-white border-b border-border shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[color:var(--navy)] text-white text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-wrap items-center justify-between py-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "opacity-90",
						children: [
							CONFERENCE.email,
							" · ",
							CONFERENCE.phone
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "opacity-90 hidden md:inline",
						children: [CONFERENCE.date, " · Online Presentation"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex items-center justify-between py-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "ICIESTDI 2026",
							className: "h-20 w-auto object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-[color:var(--navy)] text-lg md:text-xl font-bold",
								children: CONFERENCE.acronym
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-[#3C9420] max-w-[500px] hidden sm:block text-lg md:text-x font-bold",
								children: [
									" ",
									CONFERENCE.name,
									" "
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:inline-flex items-center gap-2 bg-[#3C9420]/10 border border-[#3C9420]/30 text-[#2F7519] px-3 py-2 rounded-full text-base font-semibold shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Virtual Mode" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "lg:hidden p-2 border border-border rounded-sm",
						onClick: () => setOpen(!open),
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-border bg-[color:var(--subtle)] hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page flex flex-wrap justify-center items-center gap-12",
					children: NAV_ITEMS.map((item) => {
						const hasChildren = !!item.children?.length;
						const active = item.to ? pathname === item.to : isChildActive(item.children);
						if (!hasChildren) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: `px-3 py-2.5 text-[13px] font-semibold border-b-2 transition-all duration-300 ${active ? "border-[#3C9420] text-[#3C9420]" : "border-transparent text-ink hover:text-[#3C9420] hover:border-[#3C9420]/60"}`,
							children: item.label
						}, item.label);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => handleEnter(item.label),
							onMouseLeave: handleLeave,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: `flex items-center gap-1 px-3 py-2.5 text-[13px] font-semibold border-b-2 transition-all duration-300 ${active || openDesktopMenu === item.label ? "border-[#3C9420] text-[#3C9420]" : "border-transparent text-ink hover:text-[#3C9420] hover:border-[#3C9420]/60"}`,
								onClick: () => setOpenDesktopMenu(openDesktopMenu === item.label ? null : item.label),
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-300 ${openDesktopMenu === item.label ? "rotate-180" : ""}` })]
							}), openDesktopMenu === item.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full min-w-[220px] bg-white border border-border shadow-md z-50",
								children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: child.to,
									onClick: () => setOpenDesktopMenu(null),
									className: `block px-4 py-2.5 text-[13px] font-semibold border-b border-border/60 last:border-b-0 transition-all duration-300 ${pathname === child.to ? "text-[#3C9420] bg-[color:var(--subtle)]" : "text-ink hover:text-[#3C9420] hover:bg-[color:var(--subtle)]"}`,
									children: child.label
								}, child.to))
							})]
						}, item.label);
					})
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "lg:hidden border-t border-border bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page py-2 flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 bg-[#3C9420]/10 border border-[#3C9420]/30 text-[#2F7519] px-3 py-2 rounded-full text-sm font-semibold w-fit mt-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Virtual Mode" })]
					}), NAV_ITEMS.map((item) => {
						if (!!!item.children?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "py-2.5 text-[15px] font-semibold border-b border-border/60 text-ink hover:text-[#3C9420] transition-all duration-300",
							children: item.label
						}, item.label);
						const expanded = openMobileMenu === item.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "w-full flex items-center justify-between py-2.5 text-[15px] font-semibold text-ink hover:text-[#3C9420] transition-all duration-300",
								onClick: () => setOpenMobileMenu(expanded ? null : item.label),
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}` })]
							}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pl-4 pb-2 flex flex-col",
								children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: child.to,
									onClick: () => {
										setOpen(false);
										setOpenMobileMenu(null);
									},
									className: "py-2 text-[15px] font-semibold text-muted-foreground hover:text-[#3C9420] transition-all duration-300",
									children: child.label
								}, child.to))
							})]
						}, item.label);
					})]
				})
			})
		]
	});
}
function Footer() {
	const quick = NAV_ITEMS.slice(0, 8);
	const more = NAV_ITEMS.slice(8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[color:var(--navy-dark)] text-slate-200 mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-12 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-serif text-lg mb-3",
							children: CONFERENCE.acronym
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-300 leading-relaxed",
							children: CONFERENCE.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-400 mt-4",
							children: ["Organized by ", CONFERENCE.organizer]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-white font-semibold text-sm uppercase tracking-wider mb-3",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1.5 text-sm",
					children: quick.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-slate-300 hover:text-[color:var(--gold)]",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-white font-semibold text-sm uppercase tracking-wider mb-3",
					children: "Downloads"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1.5 text-sm",
					children: [
						more.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "text-slate-300 hover:text-[color:var(--gold)]",
							children: n.label
						}) }, n.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-slate-300 hover:text-[color:var(--gold)]",
							children: "Brochure (PDF)"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-slate-300 hover:text-[color:var(--gold)]",
							children: "Paper Template"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "text-white font-semibold text-sm uppercase tracking-wider mb-3",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-slate-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]" }),
									" ",
									CONFERENCE.address
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]" }),
									" ",
									CONFERENCE.email
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 mt-0.5 shrink-0 text-[color:var(--gold)]" }),
									" ",
									CONFERENCE.phone
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 mt-4",
						children: [
							Facebook,
							Twitter,
							Linkedin,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "w-8 h-8 border border-slate-600 rounded-sm flex items-center justify-center hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" })
						}, i))
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-slate-700",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					CONFERENCE.acronym,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-[color:var(--gold)]",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-[color:var(--gold)]",
						children: "Terms"
					})]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-[color:var(--navy)]",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-block mt-6 bg-[color:var(--navy)] text-white px-5 py-2 text-sm font-medium hover:bg-[color:var(--navy-dark)]",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "root" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or return home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "bg-[color:var(--navy)] text-white px-4 py-2 text-sm",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "border border-input px-4 py-2 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${CONFERENCE.acronym} — ${CONFERENCE.name}` },
			{
				name: "description",
				content: `${CONFERENCE.name} — ${CONFERENCE.date}, ${CONFERENCE.venue}. Submit your research paper today.`
			},
			{
				name: "author",
				content: CONFERENCE.organizer
			},
			{
				property: "og:title",
				content: `${CONFERENCE.acronym} — ${CONFERENCE.name}`
			},
			{
				property: "og:description",
				content: `Premier international conference on intelligent engineering, sustainable technology and digital innovation. ${CONFERENCE.date}.`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/logo.png?v=1",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var BASE_URL = "";
var Route$15 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/about",
		"/committee",
		"/call-for-papers",
		"/tracks",
		"/important-dates",
		"/author-guidelines",
		"/submission",
		"/registration",
		"/publication",
		"/program",
		"/workshop",
		"/venue",
		"/contact"
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$14 = () => import("../_inner-KYPqdnVj.mjs");
var Route$14 = createFileRoute("/_inner")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./routes-C5OCJK6K.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [{ title: `${CONFERENCE.acronym} — ${CONFERENCE.name}` }, {
		name: "description",
		content: `${CONFERENCE.name}. ${CONFERENCE.date}, ${CONFERENCE.venue}. Submit your paper via Microsoft CMT.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("../_inner.workshop-C_VhQoaG.mjs");
var Route$12 = createFileRoute("/_inner/workshop")({
	head: () => ({ meta: [{ title: `Workshops — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Pre-conference workshops on AI, ML, Python, Deep Learning and more."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_inner.venue-B0NlxUrJ.mjs");
var Route$11 = createFileRoute("/_inner/venue")({
	head: () => ({ meta: [{ title: `Venue — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: `Venue details, transportation and hotels for ${CONFERENCE.venue}.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("../_inner.tracks-CItjDdpp.mjs");
var Route$10 = createFileRoute("/_inner/tracks")({
	head: () => ({ meta: [{ title: `Conference Tracks — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Explore the five technical tracks of the conference."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_inner.submission-CqCXBMPf.mjs");
var Route$9 = createFileRoute("/_inner/submission")({
	head: () => ({ meta: [{ title: `Submission — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Submit your paper through Microsoft CMT."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_inner.registration-Dhqi00LX.mjs");
var Route$8 = createFileRoute("/_inner/registration")({
	head: () => ({ meta: [{ title: `Registration — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Registration fees, payment details and refund policy."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("../_inner.publication-DTJOuM-a.mjs");
var Route$7 = createFileRoute("/_inner/publication")({
	head: () => ({ meta: [{ title: `Publication — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Publication opportunities and indexing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_inner.program-B6S8ggqE.mjs");
var Route$6 = createFileRoute("/_inner/program")({
	head: () => ({ meta: [{ title: `Program — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Two-day conference program and schedule."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_inner.important-dates-AJoTey0l.mjs");
var Route$5 = createFileRoute("/_inner/important-dates")({
	head: () => ({ meta: [{ title: `Important Dates — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Key deadlines and dates for the conference."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_inner.contact-DjuhXWhg.mjs");
var Route$4 = createFileRoute("/_inner/contact")({
	head: () => ({ meta: [{ title: `Contact — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: `Get in touch with the ${CONFERENCE.acronym} organizing team.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_inner.committee-BJsSQiaW.mjs");
var Route$3 = createFileRoute("/_inner/committee")({
	head: () => ({ meta: [{ title: `Committee — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Meet the international committee organizing the conference."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_inner.call-for-papers-CQjC6Ojs.mjs");
var Route$2 = createFileRoute("/_inner/call-for-papers")({
	head: () => ({ meta: [{ title: `Call for Papers — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: `Call for research papers across engineering, computing and technology tracks.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_inner.author-guidelines-CcE2gEx7.mjs");
var Route$1 = createFileRoute("/_inner/author-guidelines")({
	head: () => ({ meta: [{ title: `Author Guidelines — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: "Formatting, review process and publication ethics."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_inner.about-CEOn-P9w.mjs");
var Route = createFileRoute("/_inner/about")({
	head: () => ({ meta: [{ title: `About — ${CONFERENCE.acronym}` }, {
		name: "description",
		content: `About ${CONFERENCE.name} and Shazu Soft Technologies.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$15.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$16
});
var InnerRoute = Route$14.update({
	id: "/_inner",
	getParentRoute: () => Route$16
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var InnerWorkshopRoute = Route$12.update({
	id: "/workshop",
	path: "/workshop",
	getParentRoute: () => InnerRoute
});
var InnerVenueRoute = Route$11.update({
	id: "/venue",
	path: "/venue",
	getParentRoute: () => InnerRoute
});
var InnerTracksRoute = Route$10.update({
	id: "/tracks",
	path: "/tracks",
	getParentRoute: () => InnerRoute
});
var InnerSubmissionRoute = Route$9.update({
	id: "/submission",
	path: "/submission",
	getParentRoute: () => InnerRoute
});
var InnerRegistrationRoute = Route$8.update({
	id: "/registration",
	path: "/registration",
	getParentRoute: () => InnerRoute
});
var InnerPublicationRoute = Route$7.update({
	id: "/publication",
	path: "/publication",
	getParentRoute: () => InnerRoute
});
var InnerProgramRoute = Route$6.update({
	id: "/program",
	path: "/program",
	getParentRoute: () => InnerRoute
});
var InnerImportantDatesRoute = Route$5.update({
	id: "/important-dates",
	path: "/important-dates",
	getParentRoute: () => InnerRoute
});
var InnerContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => InnerRoute
});
var InnerCommitteeRoute = Route$3.update({
	id: "/committee",
	path: "/committee",
	getParentRoute: () => InnerRoute
});
var InnerCallForPapersRoute = Route$2.update({
	id: "/call-for-papers",
	path: "/call-for-papers",
	getParentRoute: () => InnerRoute
});
var InnerAuthorGuidelinesRoute = Route$1.update({
	id: "/author-guidelines",
	path: "/author-guidelines",
	getParentRoute: () => InnerRoute
});
var InnerRouteChildren = {
	InnerAboutRoute: Route.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => InnerRoute
	}),
	InnerAuthorGuidelinesRoute,
	InnerCallForPapersRoute,
	InnerCommitteeRoute,
	InnerContactRoute,
	InnerImportantDatesRoute,
	InnerProgramRoute,
	InnerPublicationRoute,
	InnerRegistrationRoute,
	InnerSubmissionRoute,
	InnerTracksRoute,
	InnerVenueRoute,
	InnerWorkshopRoute
};
var rootRouteChildren = {
	IndexRoute,
	InnerRoute: InnerRoute._addFileChildren(InnerRouteChildren),
	SitemapDotxmlRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
