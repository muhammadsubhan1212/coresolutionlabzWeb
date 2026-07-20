import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <Container className="flex flex-col gap-14 lg:gap-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-stack technology capability, under one roof"
          description="From first line of code to production infrastructure, our teams cover the full range of what modern businesses need to build and stay competitive."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.16)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-7">
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="flex-1 text-[15px] leading-relaxed text-muted">{service.description}</p>
                  <ul className="flex flex-col gap-2 pt-1">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[13.5px] text-primary/80">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.5} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
