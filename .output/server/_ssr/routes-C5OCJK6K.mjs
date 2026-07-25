import { n as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SPONSORS, i as KEYNOTES, n as CONFERENCE, r as IMPORTANT_DATES, s as RESEARCH_AREAS } from "./conference-DgrJ19DA.mjs";
import { A as Factory, D as Handshake, F as Download, G as ArrowRight, H as BookOpen, L as ChevronRight, V as Building2, W as Bell, _ as Mic, b as MapPin, c as Sun, f as Recycle, k as FileText, r as Users, w as Leaf, z as Calendar } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5OCJK6K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCountdown(target) {
	const [t, setT] = (0, import_react.useState)({
		d: 0,
		h: 0,
		m: 0,
		s: 0
	});
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const diff = Math.max(0, +new Date(target) - Date.now());
			setT({
				d: Math.floor(diff / 864e5),
				h: Math.floor(diff / 36e5 % 24),
				m: Math.floor(diff / 6e4 % 60),
				s: Math.floor(diff / 1e3 % 60)
			});
		};
		tick();
		const i = setInterval(tick, 1e3);
		return () => clearInterval(i);
	}, [target]);
	return t;
}
var SDGS = [
	{
		n: 4,
		title: "Quality Education",
		desc: "Promoting inclusive and equitable quality education.",
		color: "#C5192D",
		icon: BookOpen
	},
	{
		n: 7,
		title: "Clean Energy",
		desc: "Ensuring access to affordable, reliable clean energy.",
		color: "#FCC30B",
		icon: Sun
	},
	{
		n: 9,
		title: "Innovation & Infrastructure",
		desc: "Building resilient infrastructure, promoting innovation and industrialization.",
		color: "#FD6925",
		icon: Factory
	},
	{
		n: 11,
		title: "Sustainable Cities",
		desc: "Making cities inclusive, safe, resilient and sustainable.",
		color: "#FD9D24",
		icon: Building2
	},
	{
		n: 12,
		title: "Responsible Consumption",
		desc: "Ensuring sustainable consumption and production patterns.",
		color: "#BF8B2E",
		icon: Recycle
	},
	{
		n: 13,
		title: "Climate Action",
		desc: "Taking urgent action to combat climate change and its impacts.",
		color: "#3F7E44",
		icon: Leaf
	},
	{
		n: 17,
		title: "Partnerships",
		desc: "Strengthening partnerships to achieve the goals.",
		color: "#19486A",
		icon: Handshake
	}
];
function HomePage() {
	const t = useCountdown(CONFERENCE.dateISO);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-[color:var(--navy)] text-white overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.07]",
				style: {
					backgroundImage: "radial-gradient(circle at 25% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 70%, #fff 1px, transparent 1px)",
					backgroundSize: "48px 48px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative py-16 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-3xl md:text-5xl leading-tight mt-4 text-white",
						children: [
							"International Conference on Intelligent",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#3C9420]",
								children: "Engineering,"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#3C9420]",
								children: "Sustainable Technology"
							}),
							" ",
							"and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#3C9420]",
								children: "Digital Innovation"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-slate-300 mt-4 max-w-2xl text-[15px] leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[color:var(--gold)] italic",
							children: "Theme: "
						}), CONFERENCE.theme]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-6 mt-6 text-sm text-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-[color:var(--gold)]" }),
								" ",
								CONFERENCE.date
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-[color:var(--gold)]" }),
								" ",
								CONFERENCE.venue
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/registration",
								className: "bg-[color:var(--gold)] text-[color:var(--navy-dark)] px-5 py-3 text-sm font-semibold hover:bg-[color:var(--gold-dark)] hover:text-white flex items-center gap-2",
								children: ["Register Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/submission",
								className: "bg-white text-[color:var(--navy)] px-5 py-3 text-sm font-semibold hover:bg-slate-100 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4" }), " Submit Paper"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "border border-white/40 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), " Download Brochure"]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white/5 backdrop-blur border border-white/10 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-[color:var(--gold)] mb-4",
							children: "Conference starts in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-3",
							children: [
								{
									label: "Days",
									val: t.d
								},
								{
									label: "Hours",
									val: t.h
								},
								{
									label: "Minutes",
									val: t.m
								},
								{
									label: "Seconds",
									val: t.s
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center bg-[color:var(--navy-dark)] py-4 border border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl md:text-4xl font-serif font-bold text-white",
									children: String(c.val).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-slate-300 mt-1",
									children: c.label
								})]
							}, c.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border-t border-white/10 pt-4 text-xs text-slate-300 space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paper Submission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[color:var(--gold)]",
										children: "Sep 30, 2026"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Acceptance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[color:var(--gold)]",
										children: "Nov 10, 2026"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Early Registration" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[color:var(--gold)]",
										children: "Nov 30, 2026"
									})]
								})
							]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-[color:var(--gold)] text-[color:var(--navy-dark)] overflow-hidden py-2 border-b border-[color:var(--gold-dark)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center whitespace-nowrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-4 font-semibold text-sm shrink-0 border-r border-[color:var(--navy-dark)]/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-4 h-4" }), " LATEST NEWS"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee text-sm",
					children: "📢 Paper submission is now open — submit via Google Form \xA0 • \xA0 🎓 Selected papers will be published in Scopus & Web of Science indexed proceedings \xA0 • \xA0 🌐 Distinguished keynote speakers from NASA, Jamia Hamdard and leading institutions confirmed."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-[color:var(--subtle)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between mb-8 flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title gold-bar",
						children: "Important Dates"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: ["Mark the key milestones for ", CONFERENCE.acronym]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/important-dates",
						className: "text-sm text-[color:var(--navy)] font-semibold flex items-center gap-1 hover:text-[color:var(--gold-dark)]",
						children: ["View full timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: IMPORTANT_DATES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border p-5 border-l-4 border-l-[color:var(--navy)] hover:border-l-[color:var(--gold)] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: d.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-lg text-[color:var(--navy)] mt-1",
							children: d.date
						})]
					}, d.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title gold-bar",
						children: "About the Conference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[15px] leading-relaxed text-ink",
						children: [
							"The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
								CONFERENCE.name,
								" (",
								CONFERENCE.acronym,
								")"
							] }),
							" is a premier global platform that brings together researchers, academicians, industry experts, scientists, innovators, and students to share cutting-edge research, emerging technologies, and practical solutions."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] leading-relaxed text-ink mt-4",
						children: "The conference aims to promote interdisciplinary collaboration and encourage the exchange of ideas that address real-world challenges through intelligent engineering practices, sustainable technological advancements, and digital transformation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "bg-[color:var(--navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--navy-dark)]",
							children: "Read More"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/call-for-papers",
							className: "border border-[color:var(--navy)] text-[color:var(--navy)] px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--subtle)]",
							children: "Call for Papers"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[color:var(--subtle)] border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-xl text-[color:var(--navy)] mb-4",
						children: "Research Focus Areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [RESEARCH_AREAS.slice(0, 12).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs bg-white border border-border px-2.5 py-1 text-ink",
							children: a
						}, a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/call-for-papers",
							className: "text-xs text-[color:var(--gold-dark)] font-semibold px-2 py-1",
							children: "+ more →"
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 bg-[#1A450E] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
				children: [
					{
						n: "500+",
						l: "Expected Delegates",
						i: Users
					},
					{
						n: "45+",
						l: "Countries",
						i: MapPin
					},
					{
						n: "20+",
						l: "Keynote Speakers",
						i: Mic
					},
					{
						n: "300+",
						l: "Papers Expected",
						i: BookOpen
					}
				].map(({ n, l, i: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6 text-[color:var(--gold)] mx-auto mb-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl md:text-4xl font-serif font-bold text-white",
						children: n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-slate-300 mt-1",
						children: l
					})
				] }, l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl md:text-3xl text-[color:var(--navy)] font-bold",
						children: "Sustainable Development Goals (SDGs)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mt-2",
						children: [CONFERENCE.acronym, " supports the United Nations Sustainable Development Goals by promoting research, innovation and solutions for a sustainable and resilient future."]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4",
					children: SDGS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aspect-square flex flex-col items-center justify-center text-white p-3 shadow-sm",
								style: { backgroundColor: g.color },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold leading-none",
										children: g.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, {
										className: "w-7 h-7 my-1.5",
										strokeWidth: 1.75
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] uppercase tracking-wide font-semibold leading-tight",
										children: g.title
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-serif text-sm text-[color:var(--navy)] mt-3",
								children: g.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1 leading-snug",
								children: g.desc
							})
						]
					}, g.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title gold-bar",
					children: "Keynote Speakers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-12 mt-10",
					children: KEYNOTES.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-80 bg-white border-2 border-black rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: k.image,
								alt: k.name,
								className: "w-36 h-36 rounded-full object-cover mx-auto border-4 border-[#3C9420]/20 shadow-lg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-2xl font-serif text-[#0A3A75]",
								children: k.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-gray-600 text-sm leading-6",
								children: k.affiliation
							})
						]
					}, k.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 bg-[color:var(--subtle)] border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-center text-sm uppercase tracking-widest text-muted-foreground mb-6",
					children: "Organized & Supported By"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-x-10 gap-y-4 items-center",
					children: SPONSORS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[color:var(--navy)] font-serif text-sm md:text-base opacity-80 hover:opacity-100",
						children: s
					}, s))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid lg:grid-cols-2 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title gold-bar",
					children: "Latest News"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-border border border-border bg-white",
					children: [
						{
							d: "Aug 12, 2026",
							t: "Call for Papers officially opens"
						},
						{
							d: "Sep 18, 2026",
							t: "Springer publication partnership announced"
						},
						{
							d: "dec 19, 2026",
							t: "Keynote from George Salazar Johnson Space Center, NASA and Dr. Ihtiram Raza Khan Jamia Hamdard, New Delhi"
						}
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "p-4 flex gap-4 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-[color:var(--gold-dark)] font-semibold w-24 shrink-0",
							children: n.d
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-ink",
							children: n.t
						})]
					}, n.t))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title gold-bar",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
					type: "single",
					collapsible: true,
					className: "mt-4 border border-border divide-y divide-border bg-white",
					children: [
						{
							q: "How do I submit a paper?",
							a: "All submissions are handled through Google Drive. Visit the Submission page for the direct link and step-by-step instructions."
						},
						{
							q: "Where will the proceedings be published?",
							a: "Accepted and presented papers will be considered for Scopus and Web of Science indexed proceedings, subject to quality review."
						},
						{
							q: "Is virtual presentation allowed?",
							a: "Yes. Authors unable to travel may present remotely via our video conferencing platform after registration."
						},
						{
							q: "Can students avail a discount?",
							a: "Yes, discounted student registration is available with valid institutional ID. See the Registration page for details."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						value: String(i),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
							className: "w-full text-left px-4 py-3 flex justify-between items-center text-sm font-semibold text-[color:var(--navy)] hover:bg-[color:var(--subtle)]",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 transition-transform data-[state=open]:rotate-90" })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
							className: "px-4 pb-4 text-sm text-ink data-[state=closed]:hidden",
							children: f.a
						})]
					}, i))
				})] })]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
