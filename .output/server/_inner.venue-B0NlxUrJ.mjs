import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { n as CONFERENCE } from "./_ssr/conference-DgrJ19DA.mjs";
import { E as Hotel, b as MapPin, h as Plane, o as TramFront } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.venue-B0NlxUrJ.js
var import_jsx_runtime = require_jsx_runtime();
function VenuePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Venue",
		subtitle: CONFERENCE.venue
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video bg-[color:var(--subtle)] border border-border flex items-center justify-center text-muted-foreground text-sm",
					children: "Venue Photograph"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video bg-[color:var(--subtle)] border border-border overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Venue Map",
						src: "https://maps.google.com/maps?q=Chennai%20Le%20Meridien&t=&z=13&ie=UTF8&iwloc=&output=embed",
						className: "w-full h-full border-0",
						loading: "lazy"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-3 gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "w-6 h-6 text-[color:var(--gold)] mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-[color:var(--navy)] text-lg mb-1",
								children: "Airport"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink",
								children: "Chennai International Airport (MAA) — approx. 15 km / 30 min by taxi."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TramFront, { className: "w-6 h-6 text-[color:var(--gold)] mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-[color:var(--navy)] text-lg mb-1",
								children: "Railway"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink",
								children: "Chennai Central & Egmore stations — approx. 12 km. Frequent metro and cab services available."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "w-6 h-6 text-[color:var(--gold)] mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-[color:var(--navy)] text-lg mb-1",
								children: "Hotels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink",
								children: "Partner hotels within 1 km include ITC Grand Chola, Taj Coromandel, and Hyatt Regency. Discounted rates available on request."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l-4 border-[color:var(--navy)] bg-[color:var(--subtle)] p-5 flex gap-3 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-[color:var(--navy)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-[color:var(--navy)]",
					children: "Local Transportation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink mt-1",
					children: "Ola, Uber, and prepaid taxi counters are available at the airport and railway stations. Chennai Metro connects most major hubs to the venue area."
				})] })]
			})
		]
	})] });
}
//#endregion
export { VenuePage as component };
