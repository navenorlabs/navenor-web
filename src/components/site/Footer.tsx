import { Hexagon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "../../lib/i18n";
import logoImg from "../../assets/img/logo-no-background.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background/60">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Navenor Logo" className="h-8 w-auto" />
              <span className="font-display text-lg font-semibold tracking-tight">Navenor</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t("footer.ready", "Ready to scale? We engineer digital assets that compound revenue and operational efficiency.")}
            </p>
            <a
              href="/#audit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
            >
              {t("footer.btn", "Ready to scale?")}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              {t("footer.nav", "Navigate")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#services" className="hover:text-foreground">
                  {t("nav.services", "Services")}
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-foreground">
                  {t("nav.pricing", "Pricing")}
                </a>
              </li>
              <li>
                <a href="/#method" className="hover:text-foreground">
                  {t("nav.method", "Method")}
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-foreground">
                  {t("contact.label", "Contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              {t("footer.legal", "Legal")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground">
                  {t("privacy.title", "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground">
                  {t("terms.title", "Terms of Service")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Navenor Labs. {t("footer.rights", "All rights reserved.")}</p>
          <p>{t("footer.engineered", "Engineered with discipline in Europe.")}</p>
        </div>
      </div>
    </footer>
  );
}
