import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, LineChart } from "lucide-react";
import { useLanguage } from "../../lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_30%,#000,transparent)]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.72 0.18 245 / 0.35), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_oklch(0.72_0.18_245/0.8)]" />
            {t("hero.badge", "Premium Technology Agency · Est. 2026")}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">{t("hero.title1", "We Don't Just Write Code.")}</span>
            <br />
            <span className="accent-gradient">
              {t("hero.title2", "We Build Digital Assets That Scale Your Business.")}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            {t("hero.desc", "Navenor is a premium technology agency specializing in ultra-fast web architectures, B2B digital transformation, and custom software. Stop losing clients to slow, insecure websites.")}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#audit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.72_0.18_245/0.8)] hover:brightness-110 transition"
            >
              {t("hero.cta.primary", "Book a Free Infrastructure Audit")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface-elevated transition"
            >
              {t("hero.cta.secondary", "View Our Solutions")}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-primary" /> {t("hero.feat1", "Sub-second load times")}
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {t("hero.feat2", "Enterprise security")}
            </span>
            <span className="inline-flex items-center gap-2">
              <LineChart className="h-3.5 w-3.5 text-primary" /> {t("hero.feat3", "ROI-focused engineering")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass-panel overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
              alt="Analytics dashboard showcasing performance metrics"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover opacity-90"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.72 0.18 245 / 0.4), transparent 70%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
