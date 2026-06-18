import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-Cr3y43M7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Check, a as ShieldCheck, d as Globe, f as Gauge, g as CirclePlay, h as Clock, i as Sparkles, m as Cpu, o as Send, p as Crosshair, s as Phone, t as Zap, u as Mail, v as ChartLine, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-CfrT_XPI.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dz85O02A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_30%,#000,transparent)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute left-1/2 top-0 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl",
				style: { background: "radial-gradient(closest-side, oklch(0.72 0.18 245 / 0.35), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_oklch(0.72_0.18_245/0.8)]" }), t("hero.badge", "Premium Technology Agency · Est. 2026")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: t("hero.title1", "We Don't Just Write Code.")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "accent-gradient",
									children: t("hero.title2", "We Build Digital Assets That Scale Your Business.")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg",
							children: t("hero.desc", "Navenor is a premium technology agency specializing in ultra-fast web architectures, B2B digital transformation, and custom software. Stop losing clients to slow, insecure websites.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/#audit",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.72_0.18_245/0.8)] hover:brightness-110 transition",
								children: [t("hero.cta.primary", "Book a Free Infrastructure Audit"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#services",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface-elevated transition",
								children: t("hero.cta.secondary", "View Our Solutions")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										t("hero.feat1", "Sub-second load times")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										t("hero.feat2", "Enterprise security")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										t("hero.feat3", "ROI-focused engineering")
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .15
					},
					className: "relative mx-auto mt-16 max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-panel overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
							alt: "Analytics dashboard showcasing performance metrics",
							loading: "lazy",
							className: "aspect-[16/9] w-full object-cover opacity-90"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-3xl",
						style: { background: "radial-gradient(closest-side, oklch(0.72 0.18 245 / 0.4), transparent 70%)" }
					})]
				})]
			})
		]
	});
}
function Method() {
	const { t } = useLanguage();
	const items = [
		{
			icon: Crosshair,
			title: t("method.i1.title", "Zero Over-engineering"),
			body: t("method.i1.body", "We use the exact technology your business needs to maximize ROI. No bloated stacks, no vanity features — every line of code earns its place.")
		},
		{
			icon: Gauge,
			title: t("method.i2.title", "Extreme Performance"),
			body: t("method.i2.body", "Sub-second load times using static frameworks for maximum SEO and conversion. Speed isn't a feature — it's the foundation of trust.")
		},
		{
			icon: ShieldCheck,
			title: t("method.i3.title", "Bulletproof Security"),
			body: t("method.i3.body", "Isolated infrastructures and enterprise-grade database management. Your data, your users, and your reputation — locked down by default.")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: t("method.label", "The Anti-Chaos System")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient",
						children: t("method.title", "Engineering discipline, not improvisation.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("method.desc", "Three non-negotiable principles drive every project we ship. They are the reason our clients sleep at night.")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "glass-panel p-7 hover:bg-surface-elevated/40 transition group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: item.body
						})
					]
				}, item.title))
			})]
		})
	});
}
function Services() {
	const { t } = useLanguage();
	const tiers = [{
		tag: t("services.t1.tag", "Tier 1 · For SMEs"),
		icon: Globe,
		title: t("services.t1.title", "High-Performance Digital Presence"),
		desc: t("services.t1.desc", "Lightning-fast static webs (Next.js / Astro), SEO dominance, and lead-generation funnels engineered to convert."),
		bullets: [
			t("services.t1.b1", "Custom Next.js / Astro architecture"),
			t("services.t1.b2", "Conversion-driven UI & UX design"),
			t("services.t1.b3", "Technical SEO & Core Web Vitals"),
			t("services.t1.b4", "Funnel and lead-capture systems")
		],
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
	}, {
		tag: t("services.t2.tag", "Tier 2 · For Startups & Medium Businesses"),
		icon: Cpu,
		title: t("services.t2.title", "Custom Enterprise Software"),
		desc: t("services.t2.desc", "Bespoke full-stack architecture, corporate dashboards, internal tools, and robust database management — like our flagship project, MarketHub."),
		bullets: [
			t("services.t2.b1", "Full-stack product engineering"),
			t("services.t2.b2", "Database & API architecture"),
			t("services.t2.b3", "Internal dashboards & ops tools"),
			t("services.t2.b4", "Third-party integrations at scale")
		],
		image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: t("services.label", "Services")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient",
						children: t("services.title", "Two tiers. One engineering standard.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("services.desc", "Whether you need a high-converting presence or a full custom platform, we deliver with the same discipline.")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-2",
				children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .55,
						delay: i * .1
					},
					className: "glass-panel overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-48 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: tier.image,
								alt: tier.title,
								loading: "lazy",
								className: "h-full w-full object-cover opacity-70"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tier.icon, { className: "h-3.5 w-3.5 text-primary" }), tier.tag]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold tracking-tight text-foreground",
								children: tier.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: tier.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 grid gap-2.5",
								children: tier.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-sm text-foreground/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
								}, b))
							})
						]
					})]
				}, tier.title))
			})]
		})
	});
}
function Pricing() {
	const { t } = useLanguage();
	const plans = [{
		name: t("pricing.p1.name", "Business Web Presence"),
		setup: t("pricing.p1.setup", "Starting at €1,200"),
		setupLabel: t("pricing.setupLabel", "Setup Fee"),
		features: [
			t("pricing.p1.f1", "Custom Next.js / Astro development"),
			t("pricing.p1.f2", "High-conversion UI & UX"),
			t("pricing.p1.f3", "Technical SEO optimization"),
			t("pricing.p1.f4", "Performance-tuned deployment")
		],
		continuity: t("pricing.p1.cont", "€49/month"),
		continuityLabel: t("pricing.contLabel", "Continuity Plan"),
		continuityFeatures: [
			t("pricing.p1.cf1", "Premium hosting"),
			t("pricing.p1.cf2", "SSL certificates"),
			t("pricing.p1.cf3", "Uptime monitoring"),
			t("pricing.p1.cf4", "Weekly backups"),
			t("pricing.p1.cf5", "1 hr/mo content updates")
		],
		highlight: false
	}, {
		name: t("pricing.p2.name", "Custom Software Architecture"),
		setup: t("pricing.p2.setup", "Custom Quote"),
		setupLabel: t("pricing.setupLabel", "Setup Fee"),
		features: [
			t("pricing.p2.f1", "Full-stack development"),
			t("pricing.p2.f2", "Database architecture"),
			t("pricing.p2.f3", "Internal dashboards"),
			t("pricing.p2.f4", "API integrations")
		],
		continuity: t("pricing.p2.cont", "€99/month"),
		continuityLabel: t("pricing.contLabel", "Continuity Plan"),
		continuityFeatures: [
			t("pricing.p2.cf1", "Advanced server infrastructure"),
			t("pricing.p2.cf2", "Database isolation"),
			t("pricing.p2.cf3", "Enterprise security"),
			t("pricing.p2.cf4", "Uptime monitoring")
		],
		highlight: true
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: t("pricing.label", "Pricing")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient",
						children: t("pricing.title", "Transparent investment. Compounding returns.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("pricing.desc", "Predictable setup fees and a Continuity Plan that keeps your asset secure, fast, and evolving.")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-2",
				children: plans.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .55,
						delay: i * .1
					},
					className: `relative glass-panel p-8 ${plan.highlight ? "ring-1 ring-primary/40 shadow-[0_30px_80px_-40px_oklch(0.72_0.18_245/0.6)]" : ""}`,
					children: [
						plan.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
								" ",
								t("pricing.badge", "Most requested")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold tracking-tight text-foreground",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-baseline gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-semibold accent-gradient",
								children: plan.setup
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
							children: plan.setupLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2.5",
							children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-8 h-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-semibold text-foreground",
								children: plan.continuity
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: plan.continuityLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2.5",
							children: plan.continuityFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/#audit",
							className: `mt-8 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition ${plan.highlight ? "bg-primary text-primary-foreground hover:brightness-110" : "border border-border bg-surface/60 text-foreground hover:bg-surface-elevated"}`,
							children: [t("pricing.cta", "Request a proposal"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 inline ml-2" })]
						})
					]
				}, plan.name))
			})]
		})
	});
}
function FinalCta() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "audit",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 md:px-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 opacity-60",
						style: { background: "radial-gradient(70% 60% at 80% 0%, oklch(0.72 0.18 245 / 0.3), transparent 60%), radial-gradient(60% 50% at 0% 100%, oklch(0.62 0.2 260 / 0.25), transparent 60%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hairline-grid opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_50%,#000,transparent)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-semibold tracking-tight md:text-5xl text-gradient",
								children: t("cta.title", "Are you losing money due to an outdated web infrastructure?")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
								children: t("cta.desc", "Let us analyze your current setup. We'll send you a custom video audit highlighting critical vulnerabilities and performance bottlenecks — free of charge.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:navenorlabs@gmail.com?subject=Request%20Video%20Audit",
									className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-20px_oklch(0.72_0.18_245/0.9)] hover:brightness-110 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-4 w-4" }), t("cta.btn", "Request Video Audit")]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs text-muted-foreground",
								children: t("cta.note", "No commitment. Delivered within 72 business hours.")
							})
						]
					})
				]
			})
		})
	});
}
function Contact() {
	const { t } = useLanguage();
	const [agreed, setAgreed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: t("contact.label", "Contact")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient",
						children: t("contact.title", "Let's talk about your project.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: t("contact.desc", "Fill out the form and our team will get back to you within 24 hours.")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: { duration: .55 },
					className: "lg:col-span-3 glass-panel p-8 md:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							alert("Form submitted (no backend connected yet).");
						},
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "contact-name",
									className: "mb-2 block text-sm font-medium text-foreground",
									children: [
										t("contact.name", "Full Name"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "*"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-name",
									name: "name",
									type: "text",
									required: true,
									placeholder: "John Doe",
									className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "contact-email",
									className: "mb-2 block text-sm font-medium text-foreground",
									children: [
										t("contact.email", "Email Address"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "*"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-email",
									name: "email",
									type: "email",
									required: true,
									placeholder: "you@company.com",
									className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "contact-phone",
								className: "mb-2 block text-sm font-medium text-foreground",
								children: [
									t("contact.phone", "Phone Number"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-phone",
								name: "phone",
								type: "tel",
								required: true,
								placeholder: "+34 600 00 00 00",
								className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "contact-message",
								className: "mb-2 block text-sm font-medium text-foreground",
								children: [
									t("contact.message", "Message"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "*"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "contact-message",
								name: "message",
								required: true,
								rows: 5,
								placeholder: "Tell us about your project...",
								className: "w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-privacy",
									name: "privacy",
									type: "checkbox",
									required: true,
									checked: agreed,
									onChange: (e) => setAgreed(e.target.checked),
									className: "mt-1 h-4 w-4 shrink-0 rounded border-border accent-primary cursor-pointer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "contact-privacy",
									className: "text-sm text-muted-foreground cursor-pointer",
									children: [
										t("contact.privacy", "I have read and accept the"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/privacy",
											className: "text-primary underline underline-offset-2 hover:brightness-125",
											children: t("contact.privacyLink", "Privacy Policy")
										}),
										". ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "*"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.72_0.18_245/0.8)] hover:brightness-110 transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
									t("contact.submit", "Send Message"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .55,
						delay: .1
					},
					className: "lg:col-span-2 flex flex-col gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel p-8 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold tracking-tight text-foreground",
								children: t("contact.info.title", "Contact Information")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: t("contact.info.desc", "Reach out through any of the following channels. We are available 24/7, 365 days a year.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: t("contact.info.email", "Email")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:navenorlabs@gmail.com",
											className: "mt-1 block text-sm font-medium text-foreground hover:text-primary transition",
											children: "navenorlabs@gmail.com"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
												children: t("contact.info.phone", "Phone")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+34640239566",
												className: "mt-1 block text-sm font-medium text-foreground hover:text-primary transition",
												children: "+34 640 23 95 66"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+34645178597",
												className: "mt-0.5 block text-sm font-medium text-foreground hover:text-primary transition",
												children: "+34 645 17 85 97"
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: t("contact.info.hours", "Hours")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-medium text-foreground",
											children: t("contact.info.hoursValue", "24/7 — 365 days a year")
										})] })]
									})
								]
							})
						]
					})
				})]
			})]
		})
	});
}
var logos = [
	{
		src: "data:image/png;base64,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",
		alt: "Angular"
	},
	{
		src: "data:image/png;base64,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",
		alt: "CSS3"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Django"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Docker"
	},
	{
		src: "data:image/png;base64,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",
		alt: "HTML5"
	},
	{
		src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEa0lEQVR4nO2aaahVVRiGv+/e0uuIWalpzmalJeSQILcZU8zUCivCrAjMEEpzwiYsbNAG+hEhhkQoIpKmkIpZKdoPzRzq1q4gbSCo/oRNaJOvfGffTeec9jp779O+P85Z7wvvn8N31l57PXut9a1BhKIoiqIoiqIoiqIoiqIcQiCgxWkCCAjAawsBCAH4bCEAIQCfLQQgBOCzhQCEAHy2EIAQgM8WAhAC8NlCAEIAPlsIQAjAZwsBCAH4bCEAIQCfLQQgBOCzhQCEAHy2EIAQgM8WAhAC8NlCAEIAbfuCGutbJ2qq/x97W7DsQcG1YxV9eyk6NCnat1P0Okdx5WjFI/cpgrcIAHkDOL5fcPdNijMa4/9fbFXF7ZMUP75PAMgDwFc7BYP7Jjd8ufv3Vny+lQDwfwD8ckBw8aDsjR95QJ9sPYEAglIvmVV940eefHW6+YUAgtLYE4cFnTu6G7ZPT8Ut1ytuHq/od158jM0Zi+5V/N1CAMgKYOtKd/zMqVoAFMX+1SJYPl8KE3AUM2q44vCmrPUjAER+cXF8vKWdvx2ML/+x+xUdmxTPLwyhZK8fASDyo7Pd2Y2r/D8+CrOm6utHAIi8YkF8fENDdTk+AQTZAKx/wR0/oVkLKSoBBG0H4Ps9pZNqXI6/7jlJneEQQJB9HXDDVcl5vq2SX1oSblcQQJAvgEMbBe3OTLfg6tJJMe8uxbfvEQDyAmB+5fHKQ1G5m9or5t+jVfUIAgjivXJp+p4Q+fyeip2rCQB5ADAffEMwclg2CLYV8dpTBIA8AJj/+USwZrlg+JD0EBob0/cEAgjS+dSn4V7RxObwACbNcHTyCAEgLwDFbtkimHFjMojVywgAbQEg8p41Ujgndj3Dtq29BvD7oeoB2JBj43/SM2zd4OoJtnKuWwBfvyOYdp1i33p3zBfb3ABsCHH9zxZWtvfz9Nx0dXEdYXbqUIcA/vxY8Mw8KezB20sO6af4bld87NoVbgBzZ2rsV7/qCUHXzv+eA9gXnlSnoQPin2Gna3UFYPfrgmGD47v65pfDBiz++u13F4BnHyot+5t3BePH/TfO7v8c3eGu05c73EPQhQPrCIC9aEND5azj7G6KcZcpLhoU5uKVYveuLS1/zCXu2B7dtdCbyk+87IOodIPijsl1BMB855T0i6FKPqurFk6yisvevip5/6dbF0XzSMUVo8I8P+k51ivrCsDx/dVdmCr30jnx5T8wIx/A5ssv1VRZVE0BQOtQ1LtH9Q1zQX/Fzx/El21DjF07yaOH2WItzfvUHAC0polZN8miCfWzhIu0BsH2+LNsR5c/48CG9O9SkwBQlI7auJzUKNaYU65R/LA3ffk2wY4dke1MYPZtip/2ZXuPmgWAVv/6oeDVJwXTJ4RHhbb4scawW2w2WT48K/1wEOcjb4Z3f2xhZtdTbI1gW87ndtfCDqklBnZ2kLXh6wYAatwEEBCA1xYCEALw2UIAQgA+WwhA6hsARVEURVEURVEURVEUJbWq07KMkj3+j8qrAAAAAElFTkSuQmCC",
		alt: "JavaScript"
	},
	{
		src: "/assets/icons8-jenkins-96-CWOUCrNO.png",
		alt: "Jenkins"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Kubernetes"
	},
	{
		src: "/assets/icons8-laravel-96-Z6b67vFa.png",
		alt: "Laravel"
	},
	{
		src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIElEQVR4nO2aW29UVRiG198Yg0YToybGU6JGE2OUGGOMV154YyRyoV6gxhizEEGQgyAiBQQPESkYRCqIpigmqKiEggqosErb6TClp+kwtNNpS6fDzLQzL/l2UiOdmbX3nEjKfp/kvWvXnqxnH9b3raUUIYQQQgghhBBCCCElCGgDxpQMBWgK8HUUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgK8HMUBRgKsOWTw0O4Gkzm8q6/5ZalZ/Dil734vCWOo11JdMczGE1NXZGuoTSOhMex52QC7x+M4bnGbtyxop0CqhFwz7sd+Op4AhOZHCpl+7E4BVQi4NWmfoynK5/4aXb+OUwB5QpY+G0E+TxqwtYjQxRQjoBH1oeQnarR7APYdOgCBZQj4HBoHF7I5YH+RBanIykEY5cwMjFV9O/WHozNTgHPbuvG5t8Grfno90HrJB3vnnAdY+P/7tC7VrY7E2sjnpyE3hfBrcvaCn7zA+8F8fb+KE70TPz3Clv+Q3R2CvCSG99qtU5Wwy/FH/9SeX1vv3U8ucsfXBv0NNbchhCaT4863xMK0N4iT4ON9T+XN57khkWtFBDwmF1/DVvHe35HT81+OwXownx9MmEdb0nzAAUE6ijgY5eVV2Qka20vUECVAl5p6oMb0vN5fNNZCgjUQcCdK9qdusCNqVweTScSuHd1BwXUUoBk798j8EpmMo8df8Rx/xpvS1MK0O65b00HxlLFq9pSSOtCngjpnlJAlQIkstz08iqaibSt1/0Uw02Lz1BANQIkL+3qdV4xlRAeTGPuhhAFNFQhQPLk5jDODaUrkiB7CU9/2kUBgSqvIa2EVT+eR7qCpyGZyeHhDzopIFCDSKdT9ntlCVoO//ancN1CCkCt8tC6TjSfGi1rx2ze9sIeEgXo6vLEh2edExJe2PfPCAUE6hB5tSzdH3XdxJEeEgXo+kXW/m6F2szvAAXo2kUqYBvyvbj+zSs3ZihAF+axjSHcvMS9ip0Z2Uu2MZycLPgfCtCFkfV+bCyLN76JYM6MO9aW1/bY95Ll1AQFaG8CppHzn+98H8Xdq+wNtqe2hEseSZlGGnUUoMsTMI2scOTsT+OxOBY3D2DB7j68vLsPKw+cx6HgRU+F2fwvWAegUgHVEh3NFu2OUoC+OgJe2Nlb9FoUoOsv4LMSB3MpQNdXgBReUpzZrkUBujCPNoScu7Z1IOXaXig18Qdax5wT1m7XogBtz23L2vDM1nNY9N0AtrXE8WvwItqil9AznHFqBSmuOmNptISTaDwad4603L7c+5mha0JAYBaHAjQF+DqKAsy1LYAQQgghhBBCCCGEqNnKZcytnUPirK2OAAAAAElFTkSuQmCC",
		alt: "TypeScript"
	},
	{
		src: "data:image/png;base64,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",
		alt: "MongoDB"
	},
	{
		src: "data:image/png;base64,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",
		alt: "MySQL"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Next.js"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Node.js"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Vue.js"
	},
	{
		src: "data:image/png;base64,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",
		alt: "PHP"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Python"
	},
	{
		src: "data:image/png;base64,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",
		alt: "React Native"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Swift"
	},
	{
		src: "/assets/icons8-symfony-96-CluncBJh.png",
		alt: "Symfony"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Tailwind CSS"
	},
	{
		src: "data:image/png;base64,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",
		alt: "Ruby"
	}
];
function LogoCarousel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "logo-carousel",
		"aria-label": "Technologies we work with",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "logo-carousel__track",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "logo-carousel__slide",
				children: logos.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo.src,
					alt: logo.alt,
					loading: "lazy",
					className: "logo-carousel__img"
				}, logo.alt))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "logo-carousel__slide",
				children: logos.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo.src,
					alt: logo.alt,
					loading: "lazy",
					className: "logo-carousel__img"
				}, `dup-${logo.alt}`))
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
