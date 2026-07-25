import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as COMMITTEE } from "./_ssr/conference-DgrJ19DA.mjs";
import { b as MapPin } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.committee-BJsSQiaW.js
var import_jsx_runtime = require_jsx_runtime();
function CommitteePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Committee",
		subtitle: "A distinguished panel of academic and industry leaders from around the world."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6 md:p-10 space-y-12",
		children: Object.entries(COMMITTEE).map(([section, members]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section-title gold-bar",
			children: section
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-border bg-white p-5 flex gap-4 hover:border-[color:var(--gold)] transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-[color:var(--navy)] text-base leading-tight",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[color:var(--gold-dark)] font-semibold mt-1.5",
							children: m.designation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink mt-1",
							children: m.affiliation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-1 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3 h-3" }), m.country]
						})
					]
				})
			}, m.name))
		})] }, section))
	})] });
}
//#endregion
export { CommitteePage as component };
