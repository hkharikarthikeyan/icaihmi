import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ChevronRight, T as House } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-1YuoCr7W.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[color:var(--navy)] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "text-xs text-slate-300 flex items-center gap-1 mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-1 hover:text-[color:var(--gold)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "w-3 h-3" }), " Home"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[color:var(--gold)]",
							children: title
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl md:text-4xl text-white",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-300 text-sm mt-2 max-w-3xl",
					children: subtitle
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-[color:var(--gold)]" })]
	});
}
//#endregion
export { PageHero as t };
