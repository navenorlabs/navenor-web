import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useLanguage } from "../../lib/i18n";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.p1.name", "Business Web Presence"),
      setup: t("pricing.p1.setup", "Starting at €1,200"),
      setupLabel: t("pricing.setupLabel", "Setup Fee"),
      features: [
        t("pricing.p1.f1", "Custom Next.js / Astro development"),
        t("pricing.p1.f2", "High-conversion UI & UX"),
        t("pricing.p1.f3", "Technical SEO optimization"),
        t("pricing.p1.f4", "Performance-tuned deployment"),
      ],
      continuity: t("pricing.p1.cont", "€49/month"),
      continuityLabel: t("pricing.contLabel", "Continuity Plan"),
      continuityFeatures: [
        t("pricing.p1.cf1", "Premium hosting"),
        t("pricing.p1.cf2", "SSL certificates"),
        t("pricing.p1.cf3", "Uptime monitoring"),
        t("pricing.p1.cf4", "Weekly backups"),
        t("pricing.p1.cf5", "1 hr/mo content updates"),
      ],
      highlight: false,
    },
    {
      name: t("pricing.p2.name", "Custom Software Architecture"),
      setup: t("pricing.p2.setup", "Custom Quote"),
      setupLabel: t("pricing.setupLabel", "Setup Fee"),
      features: [
        t("pricing.p2.f1", "Full-stack development"),
        t("pricing.p2.f2", "Database architecture"),
        t("pricing.p2.f3", "Internal dashboards"),
        t("pricing.p2.f4", "API integrations"),
      ],
      continuity: t("pricing.p2.cont", "€99/month"),
      continuityLabel: t("pricing.contLabel", "Continuity Plan"),
      continuityFeatures: [
        t("pricing.p2.cf1", "Advanced server infrastructure"),
        t("pricing.p2.cf2", "Database isolation"),
        t("pricing.p2.cf3", "Enterprise security"),
        t("pricing.p2.cf4", "Uptime monitoring"),
      ],
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("pricing.label", "Pricing")}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
            {t("pricing.title", "Transparent investment. Compounding returns.")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("pricing.desc", "Predictable setup fees and a Continuity Plan that keeps your asset secure, fast, and evolving.")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative glass-panel p-8 ${
                plan.highlight
                  ? "ring-1 ring-primary/40 shadow-[0_30px_80px_-40px_oklch(0.72_0.18_245/0.6)]"
                  : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> {t("pricing.badge", "Most requested")}
                </span>
              )}

              <h3 className="text-xl font-semibold tracking-tight text-foreground">{plan.name}</h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold accent-gradient">{plan.setup}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {plan.setupLabel}
              </p>

              <ul className="mt-6 grid gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-border" />

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-foreground">{plan.continuity}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {plan.continuityLabel}
                </span>
              </div>

              <ul className="mt-4 grid gap-2.5">
                {plan.continuityFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#audit"
                className={`mt-8 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border bg-surface/60 text-foreground hover:bg-surface-elevated"
                }`}
              >
                {t("pricing.cta", "Request a proposal")}
                <ArrowRight className="h-4 w-4 inline ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
