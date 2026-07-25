import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { n as CONFERENCE, u as WORKSHOPS } from "./_ssr/conference-DgrJ19DA.mjs";
import { O as GraduationCap } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.workshop-C_VhQoaG.js
var import_jsx_runtime = require_jsx_runtime();
function WorkshopPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Workshops",
		subtitle: "Pre-conference hands-on workshops led by domain experts."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-ink mb-6",
			children: [
				"The following workshops will be conducted alongside ",
				CONFERENCE.acronym,
				". Workshop registration is available separately during conference registration."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: WORKSHOPS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-white p-5 hover:border-[color:var(--gold)] transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 bg-[color:var(--navy)] text-white flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-[color:var(--navy)] text-lg m-0",
						children: w.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink",
					children: w.desc
				})]
			}, w.title))
		})]
	})] });
}
//#endregion
export { WorkshopPage as component };
