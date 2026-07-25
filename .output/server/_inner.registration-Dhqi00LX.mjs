import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { o as REGISTRATION_FEES } from "./_ssr/conference-DgrJ19DA.mjs";
import { N as ExternalLink, V as Building2, d as RotateCcw, p as QrCode } from "./_libs/lucide-react.mjs";
import { t as PageHero } from "./_ssr/PageHero-1YuoCr7W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_inner.registration-Dhqi00LX.js
var import_jsx_runtime = require_jsx_runtime();
var payment_qr_default = "/assets/payment-qr-Bi-ypoTr.jpeg";
function RegistrationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Registration",
		subtitle: "Registration is mandatory for at least one author of each accepted paper."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-10 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title gold-bar",
				children: "Registration Fees"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto border border-border rounded-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-[color:var(--navy)] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left p-4",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left p-4",
								children: "Indian Participants"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left p-4",
								children: "International Participants"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: REGISTRATION_FEES.map((fee, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: index % 2 === 0 ? "bg-white" : "bg-[color:var(--subtle)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 border-t border-border",
								children: fee.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 border-t border-border font-semibold text-[color:var(--navy)]",
								children: fee.indian
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 border-t border-border",
								children: fee.international
							})
						]
					}, fee.category)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-6 rounded-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-5 h-5 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg text-[color:var(--navy)]",
								children: "Payment QR"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: payment_qr_default,
								alt: "Payment QR",
								className: "w-72 object-contain rounded-md border"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-center text-muted-foreground mt-3",
							children: "Scan using any UPI application."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border p-6 rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-5 h-5 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg text-[color:var(--navy)]",
							children: "Bank Details"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[150px_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Account Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Rasheeth K" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[150px_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Account Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "103602000002818" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[150px_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "IFSC Code"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "IOBA0001036" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[150px_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Bank"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Indian Overseas Bank" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[150px_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "SWIFT Code"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "IOBAINBB001" })]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border rounded-lg p-8 bg-[color:var(--subtle)] text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl text-[color:var(--navy)] mb-3",
						children: "Conference Registration Form"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground max-w-2xl mx-auto mb-6",
						children: "After completing the payment, kindly fill out the registration form using the button below. Please provide the payment transaction ID along with the required details."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://docs.google.com/forms/d/e/1FAIpQLSdmuk37qPCG7JV4RiSNZD4ABJCVoWMjnq_TFZl2l4XLDIUG5w/viewform?usp=sharing",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 bg-[#3C9420] hover:bg-[#2f7519] text-white font-semibold px-8 py-3 rounded-md transition-colors",
						children: ["Register Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-5 h-5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-4",
						children: "The registration form will open in a new tab."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l-4 border-[color:var(--gold)] bg-[color:var(--subtle)] p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-5 h-5 text-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-[color:var(--navy)]",
						children: "Refund Policy"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc list-inside space-y-1 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cancellation 30 or more days before conference: 75% refund." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cancellation 15–29 days before conference: 50% refund." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cancellation less than 15 days before conference: No refund." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Registration can be transferred with prior written intimation." })
					]
				})]
			})
		]
	})] });
}
//#endregion
export { RegistrationPage as component };
