import Image from "next/image";
import { Users, TrendingUp, ShieldCheck, MessagesSquare, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { photos, whyChooseUs } from "@/lib/data";

const icons: LucideIcon[] = [Users, TrendingUp, ShieldCheck, MessagesSquare];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface">
      <Container className="flex flex-col gap-14 lg:gap-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A partner that behaves like part of your team"
          description="We hold ourselves to the same standards our clients hold their own best engineers to — because that's exactly the bar we set internally."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={item.title} delay={index * 0.08} className="flex flex-col gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-secondary">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-primary">{item.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{item.description}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="left" className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_28px_60px_-24px_rgba(15,23,42,0.28)]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src={photos.whyChooseUs}
                  alt="CoreSolutionLabz professionals collaborating in a meeting"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[center_15%]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-6 text-[14px] font-medium leading-snug text-white sm:p-8 sm:text-[15px]">
                  Direct access to the engineers building your product — no account-manager layers.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
