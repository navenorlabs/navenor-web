import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "../theme-provider";
import { useLanguage } from "../../lib/i18n";

import logoImg from "../../assets/img/logo-no-background.png";
import engImg from "../../assets/img/eng.png";
import spaImg from "../../assets/img/spa.png";
import catImg from "../../assets/img/cat.png";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Method", href: "#method" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const nav = [
    { label: t("nav.services", "Services"), href: "/#services" },
    { label: t("nav.portfolio", "Portfolio"), href: "/#portfolio" },
    { label: t("nav.pricing", "Pricing"), href: "/#pricing" },
    { label: t("nav.method", "Method"), href: "/#method" },
    { label: t("contact.label", "Contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoImg} alt="Navenor Logo" className="h-8 w-auto" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Navenor
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-accent text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-accent text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-background shadow-lg overflow-hidden">
                <button
                  onClick={() => { setLanguage("en"); setLangOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-sm text-foreground"
                >
                  <img src={engImg} alt="English" className="w-5 h-5 object-cover rounded-full" /> English
                </button>
                <button
                  onClick={() => { setLanguage("es"); setLangOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-sm text-foreground"
                >
                  <img src={spaImg} alt="Español" className="w-5 h-5 object-cover rounded-full" /> Español
                </button>
                <button
                  onClick={() => { setLanguage("ca"); setLangOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent text-sm text-foreground"
                >
                  <img src={catImg} alt="Català" className="w-5 h-5 object-cover rounded-full" /> Catalán
                </button>
              </div>
            )}
          </div>

          <a
            href="/#audit"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.72_0.18_245/0.7)] hover:brightness-110 transition"
          >
            {t("nav.audit", "Get Your Free Tech Audit")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-page flex flex-col gap-2 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#audit"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              {t("nav.audit", "Get Your Free Tech Audit")}
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <div className="flex items-center gap-4 mt-4 px-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-accent text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <div className="flex items-center gap-2">
                <button onClick={() => setLanguage("en")} className="p-1"><img src={engImg} alt="English" className="w-6 h-6 object-cover rounded-full" /></button>
                <button onClick={() => setLanguage("es")} className="p-1"><img src={spaImg} alt="Español" className="w-6 h-6 object-cover rounded-full" /></button>
                <button onClick={() => setLanguage("ca")} className="p-1"><img src={catImg} alt="Català" className="w-6 h-6 object-cover rounded-full" /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
