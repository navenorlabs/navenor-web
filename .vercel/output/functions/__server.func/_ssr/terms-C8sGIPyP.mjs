import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-Cr3y43M7.mjs";
import { n as Navbar, t as Footer } from "./Footer-CfrT_XPI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-C8sGIPyP.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 container-page py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl md:text-5xl font-display font-bold tracking-tight",
						children: t("terms.title", "Terms of Service")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "prose prose-neutral dark:prose-invert max-w-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: ["Last updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Welcome to Navenor. These Terms of Service outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms in full. Do not continue to use Navenor's website if you do not accept all of the terms stated on this page." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "1. License"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unless otherwise stated, Navenor and/or its licensors own the intellectual property rights for all material on Navenor. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "2. Restrictions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You are specifically restricted from all of the following:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-disc pl-6 space-y-2 mt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Publishing any website material in any other media." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Selling, sublicensing, and/or otherwise commercializing any website material." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Using this website in any way that is or may be damaging to this website." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Using this website contrary to applicable laws and regulations." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "3. Limitation of Liability"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In no event shall Navenor, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. Navenor shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "4. Governing Law"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Navenor is registered, and you submit to the non-exclusive jurisdiction of the state and federal courts located in that jurisdiction for the resolution of any disputes." })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Terms as component };
