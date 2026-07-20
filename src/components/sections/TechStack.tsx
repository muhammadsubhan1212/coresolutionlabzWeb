import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14 lg:gap-16">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Modern, proven, and chosen deliberately"
          description="We select technology based on fit and longevity, not trends — pairing mature, well-supported tools with modern frameworks where they earn their place."
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {techStack.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06} className="flex flex-col gap-4">
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13.5px] font-medium text-primary transition-colors duration-200 hover:border-secondary/40 hover:text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
