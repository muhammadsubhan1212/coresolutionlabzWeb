import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section className="section-padding bg-surface">
      <Container className="flex flex-col gap-14 lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you ask"
          description="Common questions from teams evaluating a technology partner. Don't see yours — reach out directly."
        />

        <Reveal className="mx-auto w-full max-w-2xl">
          <FAQAccordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
