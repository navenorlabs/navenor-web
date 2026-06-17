import { motion } from "framer-motion";
import { Check, Cpu, Globe } from "lucide-react";
import { useLanguage } from "../../lib/i18n";

export function Services() {
  const { t } = useLanguage();

  const tiers = [
    {
      tag: t("services.t1.tag", "Tier 1 · For SMEs"),
      icon: Globe,
      title: t("services.t1.title", "High-Performance Digital Presence"),
      desc: t("services.t1.desc", "Lightning-fast static webs (Next.js / Astro), SEO dominance, and lead-generation funnels engineered to convert."),
      bullets: [
        t("services.t1.b1", "Custom Next.js / Astro architecture"),
        t("services.t1.b2", "Conversion-driven UI & UX design"),
        t("services.t1.b3", "Technical SEO & Core Web Vitals"),
        t("services.t1.b4", "Funnel and lead-capture systems"),
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    },
    {
      tag: t("services.t2.tag", "Tier 2 · For Startups & Medium Businesses"),
      icon: Cpu,
      title: t("services.t2.title", "Custom Enterprise Software"),
      desc: t("services.t2.desc", "Bespoke full-stack architecture, corporate dashboards, internal tools, and robust database management — like our flagship project, MarketHub."),
      bullets: [
        t("services.t2.b1", "Full-stack product engineering"),
        t("services.t2.b2", "Database & API architecture"),
        t("services.t2.b3", "Internal dashboards & ops tools"),
        t("services.t2.b4", "Third-party integrations at scale"),
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("services.label", "Services")}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
            {t("services.title", "Two tiers. One engineering standard.")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("services.desc", "Whether you need a high-converting presence or a full custom platform, we deliver with the same discipline.")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass-panel overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tier.image}
                  alt={tier.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                  <tier.icon className="h-3.5 w-3.5 text-primary" />
                  {tier.tag}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {tier.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.desc}</p>

                <ul className="mt-6 grid gap-2.5">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
