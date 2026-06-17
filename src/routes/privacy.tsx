import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Navenor" }],
  }),
  component: Privacy,
});

function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container-page py-24 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t("privacy.title", "Privacy Policy")}
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p>
              At Navenor, we are committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy outlines how we collect, use,
              disclose, and safeguard your data when you visit our website or use our services.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you
              express an interest in obtaining information about us or our products and services.
              This includes your name, email address, phone number, and any other details you choose to share.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes
              described below. We process your personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a contract with you, with
              your consent, and/or for compliance with our legal obligations.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to
              protect the security of any personal information we process. However, please also remember
              that we cannot guarantee that the internet itself is 100% secure.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at privacy@navenor.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
