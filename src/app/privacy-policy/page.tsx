import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-primary sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-primary/85">
          <p>
            {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy
            and is committed to protecting the personal information you share with us. This
            policy explains what information we collect, how we use it, and the choices you
            have.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-primary">Information We Collect</h2>
            <p className="mt-3 text-muted">
              We collect information you provide directly to us, such as your name, email
              address, phone number, and project details submitted through our contact form. We
              may also collect limited technical information, such as browser type and device
              information, to help us improve our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">How We Use Information</h2>
            <p className="mt-3 text-muted">
              We use the information we collect to respond to inquiries, deliver our services,
              improve our website and offerings, and communicate with you about your project or
              our services. We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Data Retention & Security</h2>
            <p className="mt-3 text-muted">
              We retain personal information only as long as necessary to fulfill the purposes
              outlined in this policy and apply reasonable technical and organizational measures
              to protect it against unauthorized access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Your Rights</h2>
            <p className="mt-3 text-muted">
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-secondary hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Contact</h2>
            <p className="mt-3 text-muted">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-secondary hover:underline">
                {siteConfig.email}
              </a>{" "}
              or {siteConfig.phone}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
