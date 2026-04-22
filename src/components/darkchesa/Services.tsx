import { Pencil, Palette, Printer, Frame } from "lucide-react";
import { Section } from "./Section";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Pencil,
    title: "Sketching",
    desc: "Custom hand-drawn portraits and conceptual studies. Single-subject to full ensembles.",
    from: "KES 4,500",
  },
  {
    icon: Palette,
    title: "Digital Coloring",
    desc: "Painterly digital rendering — skin, fabric, atmosphere brought to life in layered colour.",
    from: "KES 8,000",
  },
  {
    icon: Printer,
    title: "Art Printing",
    desc: "Archival giclée prints on heavyweight matte cotton paper. A4, A3 and A2 editions.",
    from: "KES 2,500",
  },
  {
    icon: Frame,
    title: "Framing",
    desc: "Hand-finished standard or premium hardwood frames with museum glass options.",
    from: "KES 3,500",
  },
];

const Card = ({ s, i }: { s: (typeof services)[number]; i: number }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Icon = s.icon;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 100}ms` }}
      className={cn(
        "group relative bg-card border border-border p-8 md:p-10 transition-all duration-700 hover:border-crimson hover:-translate-y-1",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      <div className="absolute top-0 left-0 h-px w-0 bg-crimson transition-all duration-500 group-hover:w-full" />
      <div className="text-crimson mb-6">
        <Icon size={28} strokeWidth={1.25} />
      </div>
      <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">
        0{services.indexOf(s) + 1}
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4">{s.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 min-h-[60px]">{s.desc}</p>
      <div className="flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">From</span>
        <span className="font-display text-lg text-ivory">{s.from}</span>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>Four crafts. <em className="text-crimson not-italic font-display italic">One studio.</em></>}
      intro="From the first pencil mark to the final frame on your wall — the entire process lives under one roof."
      className="bg-charcoal-soft"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {services.map((s, i) => (
          <Card key={s.title} s={s} i={i} />
        ))}
      </div>
    </Section>
  );
};
