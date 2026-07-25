import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.program-B6S8ggqE.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Conference Program",
		subtitle: "Detailed conference schedule will be announced soon."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-5xl mx-auto px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white border border-border rounded-lg shadow-sm p-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[color:var(--gold)]/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						className: "w-10 h-10 text-[color:var(--gold-dark)]",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 1.8,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl text-[color:var(--navy)] mb-4",
					children: "Program Schedule"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-semibold text-[color:var(--gold-dark)] mb-4",
					children: "To Be Announced"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-600 max-w-2xl mx-auto leading-7",
					children: "The detailed conference program, keynote schedule, technical sessions, and presentation timings will be published shortly. Please check this page regularly for updates."
				})
			]
		})
	})] });
}
//#endregion
export { ProgramPage as component };
