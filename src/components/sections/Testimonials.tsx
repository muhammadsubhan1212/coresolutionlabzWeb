import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <Container className="flex flex-col gap-14 lg:gap-16">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What it's like to work with us"
          description="Direct feedback from the founders, CTOs, and operators we've partnered with on long-term engagements."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 2) * 0.08}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-8">
                <Quote size={28} className="text-secondary/30" strokeWidth={1.5} />
                <blockquote className="flex-1 text-[15px] leading-relaxed text-primary/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-[13px] text-muted">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
