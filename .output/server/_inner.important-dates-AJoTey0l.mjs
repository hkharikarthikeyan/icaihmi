import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { r as IMPORTANT_DATES } from "./_ssr/conference-DgrJ19DA.mjs";
import { B as CalendarDays } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.important-dates-AJoTey0l.js
var import_jsx_runtime = require_jsx_runtime();
function DatesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Important Dates",
		subtitle: "Please note the key deadlines for paper submission and registration."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative border-l-2 border-[color:var(--navy)]/20 pl-8 space-y-8",
			children: IMPORTANT_DATES.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-white border-2 border-[color:var(--gold)] flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "w-4 h-4 text-[color:var(--navy)]" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-border p-5 border-l-4 border-l-[color:var(--gold)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: ["Milestone ", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg text-[color:var(--navy)] mt-1",
							children: d.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[color:var(--gold-dark)] font-semibold mt-1",
							children: d.date
						})
					]
				})]
			}, d.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground mt-8 italic",
			children: "Dates are subject to change. Authors are advised to check this page periodically."
		})]
	})] });
}
//#endregion
export { DatesPage as component };
