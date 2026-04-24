import { Check } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

// Fixed studio rates (USD)
const SKETCH = 95.72;
const COLOR = 94.83;
const PRINT = 52.98;

const frameBySize: Record<"A4" | "A3" | "A2" | "A1" | "A0", number> = {
  A4: 30.25,
  A3: 45.30,
  A2: 60.45,
  A1: 95.80,
  A0: 142.50,
};

// Print Only matches the Gallery "Print ($)" column exactly
const printBySize: Record<"A4" | "A3" | "A2", string> = {
  A4: "52.98",
  A3: "98.28",
  A2: "113.43",
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const sizes = ["A4", "A3", "A2"] as const;
const fullSizes = ["A4", "A3", "A2", "A1", "A0"] as const;

// A1/A0 use fixed brief-supplied totals for Full Commission
const fullCommissionFixed: Partial<Record<(typeof fullSizes)[number], string>> = {
  A1: "458.81",
  A0: "623.32",
};

const tiers = [
  {
    name: "Print Only",
    tag: "HD CMYK archival",
    items: sizes.map((s) => ({ size: s, price: printBySize[s] })),
    perks: ["HD CMYK archival print", "Signed & numbered", "Studio packaging"],
    highlight: false,
  },
  {
    name: "Full Commission",
    tag: "Most popular",
    items: fullSizes.map((s) => ({
      size: s,
      price:
        fullCommissionFixed[s] ??
        fmt(SKETCH + COLOR + PRINT + frameBySize[s]),
    })),
    perks: ["Sketch + color + print", "Hardwood frame included", "Ready to hang"],
    highlight: true,
  },
  {
    name: "Premium Framed",
    tag: "Collector edition",
    items: fullSizes.map((s) => {
      // Premium = Full Commission + 35% collector finish premium
      const base =
        fullCommissionFixed[s] !== undefined
          ? Number(fullCommissionFixed[s])
          : SKETCH + COLOR + PRINT + frameBySize[s];
      return { size: s, price: fmt(base * 1.35) };
    }),
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
              <span className="text-xs text-muted-foreground tracking-[0.2em] mr-1">$</span>
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
      intro="All prices in USD. Custom subjects and ensembles quoted on request."
    >
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:pt-6">
        {tiers.map((t, i) => (
          <Card key={t.name} t={t} i={i} />
        ))}
      </div>
      <p className="mt-12 text-center text-xs tracking-[0.25em] uppercase text-muted-foreground">
        Country-wide delivery available · Nairobi pickup free
      </p>

      {/* Full A2 Commission — cost breakdown */}
      <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[0.4em] uppercase text-crimson">
            <span className="h-px w-8 bg-crimson" />
            Cost Breakdown
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight">
            A full A2 <em className="not-italic font-display italic text-crimson">commission</em>, line by line.
          </h3>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Complete transparency on what your commission covers — sketch, colour, HD CMYK printing
            and A2 framing. All prices in $.
          </p>
        </div>

        <div className="lg:col-span-8 bg-card border border-border overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[400px]">
            <div className="grid grid-cols-12 px-6 md:px-8 py-4 border-b border-border text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              <span className="col-span-8">Expense</span>
              <span className="col-span-4 text-right">Price ($)</span>
            </div>
            <ul>
              {[
                { label: "A2 Framing", price: "60.45" },
                { label: "Sketch", price: "95.72" },
                { label: "Color", price: "94.83" },
                { label: "HD CMYK Printing", price: "52.98" },
              ].map((row) => (
                <li
                  key={row.label}
                  className="grid grid-cols-12 items-baseline px-6 md:px-8 py-5 border-b border-border last:border-b-0 hover:bg-charcoal-soft/60 transition-colors"
                >
                  <span className="col-span-8 font-display text-lg text-ivory">{row.label}</span>
                  <span className="col-span-4 text-right font-display text-lg text-ivory">
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground mr-1">$</span>
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-12 items-baseline px-6 md:px-8 py-6 bg-gradient-crimson text-primary-foreground">
              <span className="col-span-8 text-[10px] tracking-[0.4em] uppercase">Total</span>
              <span className="col-span-4 text-right font-display text-2xl md:text-3xl">
                <span className="text-[10px] tracking-[0.2em] opacity-80 mr-1">$</span>
                303.98
              </span>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};
