import { Clock, Play, Sparkles, Eye } from "lucide-react";
import { Section } from "./Section";
import { Placeholder } from "./Placeholder";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const stages = [
  { icon: Sparkles, label: "Sketch", note: "Foundational portrait study" },
  { icon: Eye, label: "Color Pass", note: "Layered tones & light" },
  { icon: Clock, label: "Final Render", note: "Up to 73 hrs of devotion" },
];

const Tile = ({ i }: { i: number }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <figure
      ref={ref}
      style={{ transitionDelay: `${i * 120}ms` }}
      className={cn(
        "relative group transition-all duration-700",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      <div className="relative">
        <Placeholder
          label={`Reel 0${i + 1}`}
          caption="Studio time-lapse"
          ratio="square"
          className="shadow-frame"
        />
        {/* Play overlay (decorative — videos coming soon) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-crimson/90 text-primary-foreground flex items-center justify-center shadow-gallery transition-transform duration-500 group-hover:scale-110">
            <Play size={22} className="ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between text-[10px] tracking-[0.25em] uppercase">
        <span className="text-ivory/80">{stages[i].label}</span>
        <span className="text-crimson">{stages[i].note}</span>
      </figcaption>
    </figure>
  );
};

export const TimeLapse = () => {
  return (
    <Section
      id="process-reels"
      eyebrow="In the Studio"
      title={
        <>
          Time-lapsed <em className="text-crimson not-italic font-display italic">devotion.</em>
        </>
      }
      intro={
        <>
          Every portrait is a slow burn — built layer by layer over <strong className="text-ivory font-normal">up to 73 hours</strong> of
          uninterrupted studio time. These reels distill that journey into minutes, capturing the
          relentless dedication, quiet patience, and obsessive attention to detail poured into each piece.
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {stages.map((_, i) => (
          <Tile key={i} i={i} />
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {[
          { k: "Up to", v: "73 hrs", l: "Per commission" },
          { k: "Built in", v: "Layers", l: "Sketch · Color · Finish" },
          { k: "Driven by", v: "Patience", l: "Detail above all" },
        ].map((s) => (
          <div key={s.l} className="border border-border p-5 bg-card">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{s.k}</div>
            <div className="mt-2 font-display text-2xl text-ivory">{s.v}</div>
            <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-crimson">{s.l}</div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs tracking-[0.25em] uppercase text-muted-foreground">
        Full-length reels available on request · Inquire on WhatsApp
      </p>
    </Section>
  );
};
