import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { N as ExternalLink } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.submission-CqCXBMPf.js
var import_jsx_runtime = require_jsx_runtime();
var flow = [
	"Register on Google Form",
	"Upload Your Paper",
	"Peer Review",
	"Acceptance Notification",
	"Camera Ready Submission",
	"Conference Registration",
	"Presentation",
	"Publication"
];
function SubmissionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Paper Submission",
		subtitle: "All submissions are handled through Google Drive."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10 space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-border bg-[color:var(--subtle)] p-6 flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-xl text-[color:var(--navy)]",
				children: "Google form Submission Portal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink mt-1",
				children: "upload your paper in PDF format."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://docs.google.com/forms/d/e/1FAIpQLSeV5jU6CPG9b6TEZogZbioY7bYIRrTE2aqOwMVEQFMZOISo0g/viewform?usp=publish-editor",
				target: "_blank",
				rel: "noreferrer",
				className: "bg-[#3C9420] hover:bg-[#2F7519] text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors duration-300 flex items-center gap-2",
				children: ["Click here to Submission link", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section-title gold-bar",
			children: "Submission Flow"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 space-y-3",
			children: flow.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-4 border border-border p-4 bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-9 h-9 bg-[color:var(--navy)] text-white font-serif font-bold flex items-center justify-center shrink-0",
					children: i + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-[color:var(--navy)]",
					children: step
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [
						"Step ",
						i + 1,
						" of ",
						flow.length
					]
				})] })]
			}, step))
		})] })]
	})] });
}
//#endregion
export { SubmissionPage as component };
