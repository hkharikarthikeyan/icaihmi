import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { F as Download, I as CircleCheck, k as FileText, l as ShieldCheck, m as Presentation, u as ScrollText } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.author-guidelines-CcE2gEx7.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		icon: FileText,
		title: "Paper Format",
		body: "Papers must follow the IEEE two-column conference format (US Letter, 10pt Times). Length: 6–8 pages including figures and references."
	},
	{
		icon: ScrollText,
		title: "Template",
		body: "Use the official IEEE conference template (MS Word or LaTeX). Do not modify margins, fonts, or column widths."
	},
	{
		icon: CircleCheck,
		title: "Formatting Rules",
		body: "Figures must be legible at print size (300 DPI). All references should follow IEEE citation style. Include an abstract of 150–250 words."
	},
	{
		icon: ShieldCheck,
		title: "Review Process",
		body: "Double-blind peer review by at least three reviewers from the international technical committee. Notification within 4–6 weeks."
	},
	{
		icon: ShieldCheck,
		title: "Plagiarism Policy",
		body: "Similarity index must be below 15% (excluding references). Submissions are checked using Turnitin. Plagiarised papers are rejected without further review."
	},
	{
		icon: Presentation,
		title: "Presentation Guidelines",
		body: "Each accepted paper is allotted 15 minutes (12 min presentation + 3 min Q&A). Slides in 16:9 format. Both in-person and virtual presentations are supported."
	},
	{
		icon: ShieldCheck,
		title: "Publication Ethics",
		body: "The conference follows COPE guidelines. Authors must disclose conflicts of interest, obtain necessary permissions and confirm authorship contributions."
	}
];
function GuidelinesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Author Guidelines",
		subtitle: "Please read carefully before preparing your submission."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "/template/temp.docx",
			className: "inline-flex items-center gap-2 bg-[color:var(--navy)] text-white px-5 py-3 text-sm font-semibold hover:bg-[color:var(--navy-dark)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), " Download IEEE Template (.docx / .zip)"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: sections.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-white p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-[color:var(--navy)] text-lg",
						children: title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink leading-relaxed",
					children: body
				})]
			}, title))
		})]
	})] });
}
//#endregion
export { GuidelinesPage as component };
