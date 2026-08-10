import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { photos, siteConfig } from "@/lib/data";

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: `${siteConfig.phone} · ${siteConfig.phoneSecondary}`,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Let's build something that lasts"
              description="Tell us about your project and we'll respond within one business day with next steps."
            />

            <Reveal delay={0.1} className="relative hidden overflow-hidden rounded-2xl sm:block">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={photos.contact}
                  alt="CoreSolutionLabz team reviewing a project together"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-secondary">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[12.5px] text-muted">{label}</p>
                      <p className="text-[15px] font-medium text-primary">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="transition-opacity duration-200 hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </Reveal>

            <Reveal delay={0.2}>
              <Image
                src="/assets/logo/logo-full-color.png"
                alt={siteConfig.name}
                width={220}
                height={129}
                className="mt-2 h-auto w-40 opacity-90"
              />
            </Reveal>
          </div>

          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
