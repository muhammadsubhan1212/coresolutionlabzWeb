import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { photos } from "@/lib/data";

export function Studio() {
  return (
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(37,99,235,0.35),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(14,165,165,0.22),transparent_50%)]" />

      <Container className="relative flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          tone="dark"
          eyebrow="Inside the Lab"
          title="The people and craft behind every delivery"
          description="From discovery rooms to engineering desks — a look at how CoreSolutionLabz turns ideas into production systems."
        />

        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {photos.studio.map((shot, index) => (
            <Reveal
              key={shot.src}
              delay={(index % 4) * 0.06}
              className={`group relative h-full min-h-[220px] overflow-hidden rounded-2xl ${shot.className}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-80" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
