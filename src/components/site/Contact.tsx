import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "../../lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("contact.label", "Contact")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient">
            {t("contact.title", "Let's talk about your project.")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("contact.desc", "Fill out the form and our team will get back to you within 24 hours.")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 glass-panel p-8 md:p-10"
          >
            <form
              action="https://formsubmit.co/navenorlabs@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("contact.name", "Full Name")} <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("contact.email", "Email Address")} <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {t("contact.phone", "Phone Number")} <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+34 600 00 00 00"
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {t("contact.message", "Message")} <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="contact-privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-primary cursor-pointer"
                />
                <label htmlFor="contact-privacy" className="text-sm text-muted-foreground cursor-pointer">
                  {t("contact.privacy", "I have read and accept the")}{" "}
                  <Link to="/privacy" className="text-primary underline underline-offset-2 hover:brightness-125">
                    {t("contact.privacyLink", "Privacy Policy")}
                  </Link>
                  . <span className="text-primary">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.72_0.18_245/0.8)] hover:brightness-110 transition"
              >
                <Send className="h-4 w-4" />
                {t("contact.submit", "Send Message")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {t("contact.info.title", "Contact Information")}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {t("contact.info.desc", "Reach out through any of the following channels. We are available 24/7, 365 days a year.")}
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("contact.info.email", "Email")}
                    </p>
                    <a
                      href="mailto:navenorlabs@gmail.com"
                      className="mt-1 block text-sm font-medium text-foreground hover:text-primary transition"
                    >
                      navenorlabs@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("contact.info.phone", "Phone")}
                    </p>
                    <a
                      href="tel:+34640239566"
                      className="mt-1 block text-sm font-medium text-foreground hover:text-primary transition"
                    >
                      +34 640 23 95 66
                    </a>
                    <a
                      href="tel:+34645178597"
                      className="mt-0.5 block text-sm font-medium text-foreground hover:text-primary transition"
                    >
                      +34 645 17 85 97
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("contact.info.hours", "Hours")}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {t("contact.info.hoursValue", "24/7 — 365 days a year")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
