import { n as __toESM } from "./_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { n as CONFERENCE } from "./_ssr/conference-DgrJ19DA.mjs";
import { b as MapPin, g as Phone, v as MessageCircle, x as Mail } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.contact-DjuhXWhg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKMlX4YoGKfp1d3smtyyNVeo7q7oq4XD-3CUeVYTzRZp_jUlIP9WeYxGcPlH6yFkmHfA/exec";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);
		const form = e.currentTarget;
		const formData = new FormData(form);
		const payload = {
			fullName: formData.get("fullName"),
			email: formData.get("email"),
			subject: formData.get("subject"),
			message: formData.get("message")
		};
		try {
			const result = await (await fetch(APPS_SCRIPT_URL, {
				method: "POST",
				body: JSON.stringify(payload),
				headers: { "Content-Type": "text/plain" }
			})).json();
			if (result.result === "success") {
				setSent(true);
				form.reset();
			} else throw new Error(result.message || "Submission failed");
		} catch (err) {
			console.error("Submission error:", err);
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Contact Us",
		subtitle: "For queries related to submissions, registration or general information."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10 grid lg:grid-cols-[1fr_1.2fr] gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-5 flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5 text-[color:var(--gold)] mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-ink",
						children: CONFERENCE.email
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-5 flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 text-[color:var(--gold)] mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-ink",
						children: CONFERENCE.phone
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-5 flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5 text-[color:var(--gold)] mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-ink",
						children: CONFERENCE.whatsapp
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-5 flex gap-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-[color:var(--gold)] mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-ink",
						children: CONFERENCE.address
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video border border-border overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Office Map",
						src: "https://maps.google.com/maps?q=Salem%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed",
						className: "w-full h-full border-0",
						loading: "lazy"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "border border-border p-6 bg-white space-y-4",
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl text-[color:var(--navy)]",
					children: "Send us a message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink font-medium",
							children: "Full Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "fullName",
							required: true,
							className: "mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink font-medium",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							className: "mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink font-medium",
						children: "Subject"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "subject",
						required: true,
						className: "mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink font-medium",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						rows: 6,
						className: "mt-1 w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--navy)]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading,
					className: "bg-[color:var(--navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--navy-dark)] disabled:opacity-70 disabled:cursor-not-allowed",
					children: loading ? "Sending..." : "Send Message"
				}),
				sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-green-700",
					children: "Thank you — your message has been recorded. We'll respond within 2 business days."
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-red-700",
					children: "Something went wrong sending your message. Please try again or email us directly."
				})
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
