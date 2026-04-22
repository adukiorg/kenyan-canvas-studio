import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export const Section = ({ id, eyebrow, title, intro, children, className, align = "left" }: SectionProps) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={cn("relative py-24 md:py-32 scroll-mt-20", className)}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <div
            ref={ref}
            className={cn(
              "max-w-3xl mb-14 md:mb-20 transition-all duration-1000",
              align === "center" && "mx-auto text-center",
              shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            {eyebrow && (
              <div className="flex items-center gap-3 mb-5 text-xs tracking-[0.4em] uppercase text-crimson">
                <span className="h-px w-8 bg-crimson" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ivory text-balance">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
