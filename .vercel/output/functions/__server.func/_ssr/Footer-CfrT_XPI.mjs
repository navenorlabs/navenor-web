import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useTheme, r as useLanguage } from "./i18n-Cr3y43M7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Moon, d as Globe, l as Menu, n as X, r as Sun, y as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CfrT_XPI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_no_background_default = "/assets/logo-no-background-DVT3rLT8.png";
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [langOpen, setLangOpen] = (0, import_react.useState)(false);
	const langRef = (0, import_react.useRef)(null);
	const { theme, setTheme } = useTheme();
	const { language, setLanguage, t } = useLanguage();
	const nav = [
		{
			label: t("nav.services", "Services"),
			href: "/#services"
		},
		{
			label: t("nav.portfolio", "Portfolio"),
			href: "/#portfolio"
		},
		{
			label: t("nav.pricing", "Pricing"),
			href: "/#pricing"
		},
		{
			label: t("nav.method", "Method"),
			href: "/#method"
		},
		{
			label: t("contact.label", "Contact"),
			href: "/#contact"
		}
	];
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const handleClickOutside = (event) => {
			if (langRef.current && !langRef.current.contains(event.target)) setLangOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("scroll", onScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_no_background_default,
						alt: "Navenor Logo",
						className: "h-8 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight text-foreground",
						children: "Navenor"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
							className: "p-2 rounded-full hover:bg-accent text-foreground transition-colors",
							"aria-label": "Toggle theme",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							ref: langRef,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLangOpen(!langOpen),
								className: "flex items-center gap-2 p-2 rounded-full hover:bg-accent text-foreground transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" })
							}), langOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-0 mt-2 w-40 rounded-md border border-border bg-background shadow-lg overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setLanguage("en");
											setLangOpen(false);
										},
										className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-sm text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/assets/eng-xjjAIgJw.png",
											alt: "English",
											className: "w-5 h-5 object-cover rounded-full"
										}), " English"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setLanguage("es");
											setLangOpen(false);
										},
										className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-sm text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/assets/spa-CyDmqlTc.png",
											alt: "Español",
											className: "w-5 h-5 object-cover rounded-full"
										}), " Español"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setLanguage("ca");
											setLangOpen(false);
										},
										className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-sm text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAV1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSLyfxsxzWPSbgaSLZTCTcWyNRPAlHEA1MIwtJGgxIFQ1KHwx+0CBMAAAAEHRSTlMADv0fq+YaM40h3YWBZuMr6R1B6gAABARJREFUeNrt3EtuwkAQRVH/wX8SCGDs/a8zQsoCorYyKOecJVTf6essAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nvJEUOX+18+H6UJY05Dve/+5c8TYunnP+ze1C0ZXNzsCqNwvvir9/dvC+eIr2uQARtc7gjE5gN7xjqBPDuDseEdwFoAABCAAAQhAAAIQgAAEIICkAB6fBPEQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCOBtuRHE8icBPD8I4ikAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAD/WK0Gs1sHWwQIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABXLY7QWzm4ebhAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATw9voiiJd1sHWwAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQADGof99HGoe7n8ABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABEC4ALY7QWzWwdbBAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAFc1itBrObh5uECEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABPC23AhisQ62DhaAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIgKgEIAABCEAAAhCAAAQgAAEI4Ld6xzuCPjmA0fGOYEwOoC1cL76iTQ4gq5wvvir9/bOmdr/o6mZHANncuWBs3Zztkg+TI8Y1DXm2W3kiqDIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADieb4f+dM/sdJtAAAAAAElFTkSuQmCC",
											alt: "Català",
											className: "w-5 h-5 object-cover rounded-full"
										}), " Catalán"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/#audit",
							className: "group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.72_0.18_245/0.7)] hover:brightness-110 transition",
							children: [t("nav.audit", "Get Your Free Tech Audit"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden text-foreground",
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-background/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-2 py-4",
				children: [
					nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-foreground",
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#audit",
						onClick: () => setOpen(false),
						className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
						children: [t("nav.audit", "Get Your Free Tech Audit"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mt-4 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
							className: "p-2 rounded-full bg-accent text-foreground transition-colors",
							"aria-label": "Toggle theme",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLanguage("en"),
									className: "p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/assets/eng-xjjAIgJw.png",
										alt: "English",
										className: "w-6 h-6 object-cover rounded-full"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLanguage("es"),
									className: "p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/assets/spa-CyDmqlTc.png",
										alt: "Español",
										className: "w-6 h-6 object-cover rounded-full"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLanguage("ca"),
									className: "p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAV1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSLyfxsxzWPSbgaSLZTCTcWyNRPAlHEA1MIwtJGgxIFQ1KHwx+0CBMAAAAEHRSTlMADv0fq+YaM40h3YWBZuMr6R1B6gAABARJREFUeNrt3EtuwkAQRVH/wX8SCGDs/a8zQsoCorYyKOecJVTf6essAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nvJEUOX+18+H6UJY05Dve/+5c8TYunnP+ze1C0ZXNzsCqNwvvir9/dvC+eIr2uQARtc7gjE5gN7xjqBPDuDseEdwFoAABCAAAQhAAAIQgAAEIICkAB6fBPEQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCOBtuRHE8icBPD8I4ikAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAD/WK0Gs1sHWwQIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABXLY7QWzm4ebhAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAATw9voiiJd1sHWwAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQADGof99HGoe7n8ABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABEC4ALY7QWzWwdbBAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAFc1itBrObh5uECEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABPC23AhisQ62DhaAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIgKgEIAABCEAAAhCAAAQgAAEI4Ld6xzuCPjmA0fGOYEwOoC1cL76iTQ4gq5wvvir9/bOmdr/o6mZHANncuWBs3Zztkg+TI8Y1DXm2W3kiqDIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADieb4f+dM/sdJtAAAAAAElFTkSuQmCC",
										alt: "Català",
										className: "w-6 h-6 object-cover rounded-full"
									})
								})
							]
						})]
					})
				]
			})
		})]
	});
}
function Footer() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-background/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_no_background_default,
									alt: "Navenor Logo",
									className: "h-8 w-auto"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold tracking-tight",
									children: "Navenor"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm text-muted-foreground",
								children: t("footer.ready", "Ready to scale? We engineer digital assets that compound revenue and operational efficiency.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#audit",
								className: "mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition",
								children: t("footer.btn", "Ready to scale?")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-foreground",
						children: t("footer.nav", "Navigate")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#services",
								className: "hover:text-foreground",
								children: t("nav.services", "Services")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#portfolio",
								className: "hover:text-foreground",
								children: t("nav.portfolio", "Portfolio")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#pricing",
								className: "hover:text-foreground",
								children: t("nav.pricing", "Pricing")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#method",
								className: "hover:text-foreground",
								children: t("nav.method", "Method")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#contact",
								className: "hover:text-foreground",
								children: t("contact.label", "Contact")
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-foreground",
						children: t("footer.legal", "Legal")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-foreground",
							children: t("privacy.title", "Privacy Policy")
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-foreground",
							children: t("terms.title", "Terms of Service")
						}) })]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["© 2026 Navenor Labs. ", t("footer.rights", "All rights reserved.")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("footer.engineered", "Engineered with discipline in Europe.") })]
			})]
		})
	});
}
//#endregion
export { Navbar as n, Footer as t };
