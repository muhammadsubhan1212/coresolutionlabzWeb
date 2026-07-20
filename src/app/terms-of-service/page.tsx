import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing your use of the ${siteConfig.name} website and services.`,
};

export default function TermsOfServicePage() {
  return (
    <section className="section-padding">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-primary sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted">Last updated: January 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-primary/85">
          <p>
            These Terms of Service govern your use of the {siteConfig.name} website and the
            services we describe on it. By accessing our website or engaging our services, you
            agree to these terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-primary">Use of Our Website</h2>
            <p className="mt-3 text-muted">
              This website is provided for informational purposes about our services. You agree
              not to misuse the site, attempt unauthorized access to our systems, or use the
              content in a way that infringes on our intellectual property.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Service Engagements</h2>
            <p className="mt-3 text-muted">
              Specific project scope, deliverables, timelines, and pricing for any engagement are
              governed by a separate signed agreement or statement of work between {siteConfig.name}{" "}
              and the client, which takes precedence over general statements made on this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Intellectual Property</h2>
            <p className="mt-3 text-muted">
              All content on this website — including our logo, brand assets, illustrations, and
              copy — is the property of {siteConfig.name} and may not be reproduced without
              written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Limitation of Liability</h2>
            <p className="mt-3 text-muted">
              While we strive for accuracy, {siteConfig.name} makes no warranties regarding the
              completeness or reliability of information on this website and is not liable for
              any damages arising from its use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Contact</h2>
            <p className="mt-3 text-muted">
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-secondary hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
