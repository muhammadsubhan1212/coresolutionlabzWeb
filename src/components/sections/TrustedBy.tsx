import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-app grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 sm:gap-6 lg:py-14">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06} className="flex flex-col items-center gap-1.5 text-center">
            <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              <StatCounter value={stat.value} />
            </span>
            <span className="text-[13px] font-medium text-muted sm:text-sm">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
