import { Check } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const tiers = [
  {
    name: "Print Only",
    tag: "Archival giclée",
    items: [
      { size: "A4", price: "2,500" },
      { size: "A3", price: "4,000" },
      { size: "A2", price: "6,500" },
    ],
    perks: ["Archival cotton paper", "Signed & numbered", "Studio packaging"],
    highlight: false,
  },
  {
    name: "Standard Framed",
    tag: "Most popular",
    items: [
      { size: "A4", price: "6,000" },
      { size: "A3", price: "9,500" },
      { size: "A2", price: "13,500" },
    ],
    perks: ["Hardwood frame", "Acid-free mount", "Ready to hang"],
    highlight: true,
  },
  {
    name: "Premium Framed",
    tag: "Collector edition",
    items: [
      { size: "A4", price: "9,500" },
      { size: "A3", price: "14,000" },
      { size: "A2", price: "19,500" },
    ],
    perks: ["Museum-grade glass", "Hand-finished hardwood", "Certificate of authenticity"],
    highlight: false,
  },
];

const Card = ({ t, i }: { t: (typeof tiers)[number]; i: number }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 120}ms` }}
      className={cn(
        "relative p-8 md:p-10 border transition-all duration-700",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        t.highlight
          ? "bg-card border-crimson shadow-gallery md:-translate-y-4 md:hover:-translate-y-6"
          : "bg-card border-border hover:border-ivory/30",
      )}
    >
      {t.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crimson text-primary-foreground text-[10px] tracking-[0.3em] uppercase px-3 py-1">
          {t.tag}
        </div>
      )}
      {!t.highlight && (
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{t.tag}</div>
      )}
      <h3 className="font-display text-3xl text-ivory mb-8">{t.name}</h3>

      <ul className="space-y-3 mb-8 border-y border-border py-6">
        {t.items.map((it) => (
          <li key={it.size} className="flex items-baseline justify-between">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{it.size}</span>
            <span className="font-display text-xl text-ivory">
              <span className="text-xs text-muted-foreground tracking-[0.2em] mr-1">KES</span>
              {it.price}
            </span>
          </li>
        ))}
      </ul>

      <ul className="space-y-3 mb-8">
        {t.perks.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-ivory/80">
            <Check size={14} className="text-crimson mt-1 shrink-0" />
            {p}
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className={cn(
          "w-full py-3 text-[10px] tracking-[0.3em] uppercase transition-all",
          t.highlight
            ? "bg-gradient-crimson text-primary-foreground hover:shadow-frame"
            : "border border-border text-ivory hover:border-crimson hover:text-crimson",
        )}
      >
        Request a Commission
      </button>
    </div>
  );
};

export const Pricing = () => {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={<>Transparent <em className="text-crimson not-italic font-display italic">investment.</em></>}
      intro="All prices in Kenyan Shillings. Custom subjects and ensembles quoted on request."
    >
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:pt-6">
        {tiers.map((t, i) => (
          <Card key={t.name} t={t} i={i} />
        ))}
      </div>
      <p className="mt-12 text-center text-xs tracking-[0.25em] uppercase text-muted-foreground">
        Country-wide delivery available · Nairobi pickup free
      </p>
    </Section>
  );
};
