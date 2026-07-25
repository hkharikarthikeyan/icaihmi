import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { n as CONFERENCE } from "./_ssr/conference-DgrJ19DA.mjs";
import { H as BookOpen } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.publication-DTJOuM-a.js
var import_jsx_runtime = require_jsx_runtime();
function PublicationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Publication",
		subtitle: "Publication details will be announced soon."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-5xl mx-auto p-6 md:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-border rounded-lg bg-white shadow-sm p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-14 h-14 text-[color:var(--gold)]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-[color:var(--navy)] mb-4",
					children: "Publication Information"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-ink leading-8 text-[15px]",
					children: [
						"The publication partners, proceedings, journal collaborations, indexing details, and other publication-related information for",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: CONFERENCE.acronym }),
						" are currently under finalization."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink leading-8 text-[15px] mt-4",
					children: "We are working to provide the best publication opportunities for accepted papers. Complete publication details, including proceedings, indexing, and journal options, will be announced on this page soon."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-5 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-yellow-700",
						children: "Publication details will be updated soon."
					})
				})
			]
		})
	})] });
}
//#endregion
export { PublicationPage as component };
