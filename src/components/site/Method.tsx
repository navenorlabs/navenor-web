import { motion } from "framer-motion";
import { Crosshair, Gauge, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../lib/i18n";

export function Method() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Crosshair,
      title: t("method.i1.title", "Zero Over-engineering"),
      body: t("method.i1.body", "We use the exact technology your business needs to maximize ROI. No bloated stacks, no vanity features — every line of code earns its place."),
    },
    {
      icon: Gauge,
      title: t("method.i2.title", "Extreme Performance"),
      body: t("method.i2.body", "Sub-second load times using static frameworks for maximum SEO and conversion. Speed isn't a feature — it's the foundation of trust."),
    },
    {
      icon: ShieldCheck,
      title: t("method.i3.title", "Bulletproof Security"),
      body: t("method.i3.body", "Isolated infrastructures and enterprise-grade database management. Your data, your users, and your reputation — locked down by default."),
    },
  ];

  return (
    <section id="method" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("method.label", "The Anti-Chaos System")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
            {t("method.title", "Engineering discipline, not improvisation.")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("method.desc", "Three non-negotiable principles drive every project we ship. They are the reason our clients sleep at night.")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel p-7 hover:bg-surface-elevated/40 transition group"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
