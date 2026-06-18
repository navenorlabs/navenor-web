import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-Cr3y43M7.mjs";
import { n as Navbar, t as Footer } from "./Footer-CfrT_XPI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Cxzzbb89.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
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
						children: t("privacy.title", "Privacy Policy")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "prose prose-neutral dark:prose-invert max-w-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: ["Last updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At Navenor, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "1. Information We Collect"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes your name, email address, phone number, and any other details you choose to share." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "2. How We Use Your Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "3. Data Security"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold mt-8 mb-4",
								children: "4. Contact Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you have questions or comments about this notice, you may email us at privacy@navenor.com." })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Privacy as component };
