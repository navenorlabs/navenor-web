import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms of Service — Navenor" }],
  }),
  component: Terms,
});

function Terms() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container-page py-24 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t("terms.title", "Terms of Service")}
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p>
              Welcome to Navenor. These Terms of Service outline the rules and regulations for the use of our
              website and services. By accessing this website, we assume you accept these terms in full.
              Do not continue to use Navenor's website if you do not accept all of the terms stated on this page.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. License</h2>
            <p>
              Unless otherwise stated, Navenor and/or its licensors own the intellectual property rights for
              all material on Navenor. All intellectual property rights are reserved. You may view and/or print
              pages from our website for your own personal use subject to restrictions set in these terms.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Restrictions</h2>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Publishing any website material in any other media.</li>
              <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
              <li>Using this website in any way that is or may be damaging to this website.</li>
              <li>Using this website contrary to applicable laws and regulations.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
            <p>
              In no event shall Navenor, nor any of its officers, directors, and employees, be held liable
              for anything arising out of or in any way connected with your use of this website. Navenor
              shall not be held liable for any indirect, consequential, or special liability arising out of
              or in any way related to your use of this website.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Governing Law</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction
              in which Navenor is registered, and you submit to the non-exclusive jurisdiction of the state
              and federal courts located in that jurisdiction for the resolution of any disputes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
