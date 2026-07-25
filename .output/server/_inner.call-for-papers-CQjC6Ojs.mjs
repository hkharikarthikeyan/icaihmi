import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { n as CONFERENCE, s as RESEARCH_AREAS } from "./_ssr/conference-DgrJ19DA.mjs";
import { U as BookMarked } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.call-for-papers-CQjC6Ojs.js
var import_jsx_runtime = require_jsx_runtime();
function CFPPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Call for Papers",
		subtitle: "Submit original, unpublished research contributions across the following domains."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[15px] leading-relaxed text-ink",
				children: [CONFERENCE.acronym, " invites original research articles, review papers, case studies and industrial contributions in the following areas. All submissions undergo rigorous peer review by the technical committee."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: RESEARCH_AREAS.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-white p-4 flex items-center gap-3 hover:border-[color:var(--gold)] hover:bg-[color:var(--subtle)] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "w-4 h-4 text-[color:var(--gold)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-ink",
						children: topic
					})]
				}, topic))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[color:var(--subtle)] border-l-4 border-[color:var(--navy)] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg text-[color:var(--navy)] mb-2",
					children: "Submission Requirements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "text-sm text-ink space-y-1 list-disc list-inside",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Paper length: 6–8 pages in IEEE conference format" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Original, unpublished work not under review elsewhere" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Similarity index below 15% (excluding references)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Submissions handled through Google drive" })
					]
				})]
			})
		]
	})] });
}
//#endregion
export { CFPPage as component };
