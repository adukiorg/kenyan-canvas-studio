import { Lightbulb, Pencil, Palette, Printer, Frame, Truck } from "lucide-react";
import { Section } from "./Section";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Lightbulb, label: "Concept" },
  { icon: Pencil, label: "Sketch" },
  { icon: Palette, label: "Color" },
  { icon: Printer, label: "Print" },
  { icon: Frame, label: "Frame" },
  { icon: Truck, label: "Delivery" },
];

export const Process = () => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Section
      id="process"
      eyebrow="The Process"
      title={<>Six steps. <em className="text-crimson not-italic font-display italic">One commission.</em></>}
      intro="A transparent journey from your first message to the artwork on your wall."
      className="bg-charcoal-soft"
    >
      <div ref={ref} className="relative">
        {/* connecting line */}
        <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-border">
          <div
            className={cn(
              "h-full bg-crimson origin-left transition-transform duration-[1500ms] ease-out",
              shown ? "scale-x-100" : "scale-x-0",
            )}
          />
        </div>

        <ol className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-4 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.label}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-700",
                  shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative h-16 w-16 rounded-full bg-charcoal border border-crimson flex items-center justify-center mb-5">
                  <Icon className="text-crimson" size={22} strokeWidth={1.25} />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-crimson text-primary-foreground text-[10px] font-display flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  Step 0{i + 1}
                </div>
                <div className="font-display text-lg text-ivory">{s.label}</div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
};
