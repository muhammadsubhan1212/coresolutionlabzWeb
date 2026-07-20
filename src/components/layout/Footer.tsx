import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { navLinks, services, siteConfig, socialLinks as socials } from "@/lib/data";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: socials.facebook },
  { icon: LinkedInIcon, label: "LinkedIn", href: socials.linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <Image
        src="/assets/patterns/background-pattern.png"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.05] mix-blend-luminosity"
      />

      <Container className="relative flex flex-col gap-14 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/logo/logo-dark-bg.png"
              alt={siteConfig.name}
              width={220}
              height={129}
              className="h-auto w-44"
            />
            <p className="max-w-xs text-[14.5px] leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14.5px] text-white/75 transition-colors duration-200 hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <a href="#services" className="text-[14.5px] text-white/75 transition-colors duration-200 hover:text-accent">
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Contact</h3>
            <ul className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors duration-200 hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, "")}`}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="max-w-[220px]">{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-[13px] text-white/50 sm:flex-row sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors duration-200 hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
