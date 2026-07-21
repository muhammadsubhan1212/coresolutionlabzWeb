import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14 lg:gap-16">
        <SectionHeading
          eyebrow="Technology"
          title="Capability, not a checklist of buzzwords"
          description="We select technology based on fit and longevity, not trends — pairing mature, well-supported tools with modern frameworks where they earn their place."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {techStack.map((group, index) => (
            <Reveal
              key={group.category}
              delay={index * 0.06}
              className="flex flex-col gap-2.5 rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-[15px] font-semibold text-primary">{group.category}</h3>
              <p className="text-[13.5px] leading-relaxed text-muted">{group.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
