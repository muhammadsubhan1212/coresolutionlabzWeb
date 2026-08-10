import Image from "next/image";
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <Reveal
              key={item.step}
              delay={(index % 3) * 0.08}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.14)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.step}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] ${
                    item.step === "04" ? "object-[center_70%]" : "object-center"
                  }`}
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-heading text-xs font-bold tracking-widest text-secondary shadow-sm">
                  {item.step}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 p-6">
                <h3 className="text-[19px] font-semibold text-primary">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
