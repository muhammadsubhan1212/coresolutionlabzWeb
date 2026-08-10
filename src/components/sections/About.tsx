import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { photos } from "@/lib/data";

const highlights = [
  { value: "100+", label: "Projects Delivered" },
  { value: "8+", label: "Industries" },
  { value: "100%", label: "Senior-Led Delivery" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <Image
        src="/assets/patterns/background-pattern.png"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.04]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right" className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[1.5rem] shadow-[0_32px_64px_-28px_rgba(15,23,42,0.28)] sm:aspect-[5/6]">
              <Image
                src={photos.about}
                alt="CoreSolutionLabz professionals collaborating in the office"
                fill
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 right-0 w-[52%] overflow-hidden rounded-2xl border-4 border-white shadow-[0_24px_48px_-20px_rgba(15,23,42,0.3)] sm:bottom-10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photos.aboutAccent}
                  alt="Team planning a software project together"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover object-[center_20%]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-[13px] font-medium tracking-wide text-secondary">
              About CoreSolutionLabz
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-semibold text-primary sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              A team of engineers, not a pipeline of contractors
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-balance text-[15px] leading-relaxed text-muted sm:text-base">
              CoreSolutionLabz was founded on a simple premise: businesses deserve technology
              partners who think like owners, not vendors. We build websites, software, mobile
              apps, and cloud infrastructure with the same rigor we&apos;d expect from a partner
              handling our own company&apos;s systems — clear architecture, honest timelines, and
              code that holds up long after launch.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-balance text-[15px] leading-relaxed text-muted sm:text-base">
              Every engagement is led by senior engineers who stay accountable from discovery
              through long-term support, so what you get is depth, not just delivery.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-3 gap-4 border-t border-border pt-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-heading text-2xl font-bold text-primary sm:text-3xl">{item.value}</span>
                <span className="text-[13px] text-muted">{item.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.25} className="pt-2">
            <Button href="#contact" variant="secondary" size="md">
              Learn more about our team
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
