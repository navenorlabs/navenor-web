import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useLanguage } from "../../lib/i18n";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="audit" className="relative py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 md:px-16 md:py-24"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(70% 60% at 80% 0%, oklch(0.72 0.18 245 / 0.3), transparent 60%), radial-gradient(60% 50% at 0% 100%, oklch(0.62 0.2 260 / 0.25), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 hairline-grid opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_50%,#000,transparent)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
              {t("cta.title", "Are you losing money due to an outdated web infrastructure?")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              {t("cta.desc", "Let us analyze your current setup. We'll send you a custom video audit highlighting critical vulnerabilities and performance bottlenecks — free of charge.")}
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="mailto:navenorlabs@gmail.com?subject=Request%20Video%20Audit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-20px_oklch(0.72_0.18_245/0.9)] hover:brightness-110 transition"
              >
                <PlayCircle className="h-4 w-4" />
                {t("cta.btn", "Request Video Audit")}
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              {t("cta.note", "No commitment. Delivered within 72 business hours.")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
