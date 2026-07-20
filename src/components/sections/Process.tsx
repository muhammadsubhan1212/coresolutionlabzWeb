import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <Container className="flex flex-col gap-14 lg:gap-20">
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined process, from first call to long-term support"
          description="No black boxes. Every engagement follows the same proven structure, adapted to the scale and complexity of your project."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={(index % 3) * 0.08} className="relative flex flex-col gap-4 border-t-2 border-border pt-6">
              <span className="font-heading text-sm font-bold tracking-widest text-secondary">
                {item.step}
              </span>
              <h3 className="text-[19px] font-semibold text-primary">{item.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
