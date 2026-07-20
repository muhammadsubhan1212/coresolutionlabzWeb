import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="portfolio" className="section-padding bg-surface">
      <Container className="flex flex-col gap-14 lg:gap-20">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected engagements across industries"
          description="A representative look at the kind of engineering problems we're brought in to solve — from platforms to infrastructure to mobile."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.16)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={`${project.title} case study illustration`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-8 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <span className="text-[13px] font-medium tracking-wide text-secondary">
                    {project.category}
                  </span>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    {project.title}
                    <ArrowUpRight
                      size={17}
                      className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary"
                    />
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-[12px] font-medium text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
