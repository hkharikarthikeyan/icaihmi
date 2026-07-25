import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { l as TRACKS } from "./_ssr/conference-DgrJ19DA.mjs";
import { i as User } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.tracks-CItjDdpp.js
var import_jsx_runtime = require_jsx_runtime();
function TracksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Conference Tracks",
		subtitle: "Five parallel tracks covering the full spectrum of intelligent engineering research."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6 md:p-10 space-y-6",
		children: TRACKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border border-border bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[color:var(--navy)] text-white px-5 py-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-9 h-9 bg-[color:var(--gold)] text-[color:var(--navy-dark)] font-serif font-bold flex items-center justify-center",
					children: t.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-serif text-white text-lg m-0",
					children: [
						"Track ",
						t.id,
						" — ",
						t.title
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 grid md:grid-cols-[1fr_260px] gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink leading-relaxed",
						children: t.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-widest text-[color:var(--gold-dark)] font-semibold mt-4 mb-2",
						children: "Research Topics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-2 gap-1 text-sm text-ink list-disc list-inside",
						children: t.topics.map((tp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tp }, tp))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "bg-[color:var(--subtle)] p-4 border-l-4 border-[color:var(--gold)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground mb-1",
						children: "Track Chair"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-5 h-5 text-[color:var(--navy)] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[color:var(--navy)]",
							children: t.chair.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-ink",
							children: t.chair.affiliation
						})] })]
					})]
				})]
			})]
		}, t.id))
	})] });
}
//#endregion
export { TracksPage as component };
