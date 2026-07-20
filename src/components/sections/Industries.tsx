import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Truck,
  Building2,
  GraduationCap,
  Factory,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/data";

const icons: LucideIcon[] = [
  Landmark,
  HeartPulse,
  ShoppingBag,
  Truck,
  Building2,
  GraduationCap,
  Factory,
  Scale,
];

export function Industries() {
  return (
    <section className="section-padding bg-surface">
      <Container className="flex flex-col gap-14 lg:gap-16">
        <SectionHeading
          eyebrow="Industries"
          title="Domain experience across critical sectors"
          description="We bring context, not just code — engineering with an understanding of the regulatory, operational, and technical realities of your industry."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={industry.name} delay={(index % 4) * 0.06}>
                <div className="flex h-full flex-col gap-3.5 rounded-2xl border border-border bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.14)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-primary">{industry.name}</h3>
                  <p className="text-[13.5px] leading-relaxed text-muted">{industry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
