import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { LogoCarousel } from "@/components/site/LogoCarousel";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navenor — Premium Technology Agency" },
      {
        name: "description",
        content:
          "Navenor builds ultra-fast web architectures, B2B digital transformation and custom software for businesses that need to scale.",
      },
      { property: "og:title", content: "Navenor — Premium Technology Agency" },
      {
        property: "og:description",
        content:
          "Ultra-fast web architectures, custom software, and enterprise-grade infrastructure for serious businesses.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <Method />
        <Services />
        <Pricing />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
