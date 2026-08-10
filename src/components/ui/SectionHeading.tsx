import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-medium tracking-wide",
              isDark
                ? "border-white/15 bg-white/5 text-accent"
                : "border-border bg-surface text-secondary"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
            isDark ? "text-white" : "text-primary",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-balance text-base leading-relaxed sm:text-lg",
              isDark ? "text-white/70" : "text-muted",
              align === "center" ? "max-w-xl" : "max-w-lg"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
