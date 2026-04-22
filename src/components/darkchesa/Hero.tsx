import { ArrowDown } from "lucide-react";
import { Placeholder } from "./Placeholder";

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-hero grain">
      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 animate-fade-in">
          <div className="flex items-center gap-3 mb-8 text-[10px] md:text-xs tracking-[0.5em] uppercase text-crimson">
            <span className="h-px w-10 bg-crimson" />
            Nairobi · Est. Studio
          </div>
          <h1 className="font-display font-medium text-ivory leading-[0.95] text-balance text-[clamp(3.5rem,11vw,9rem)]">
            DARK<span className="block text-crimson italic">chesa</span>
          </h1>
          <div className="hairline my-8 max-w-md origin-left animate-draw-line" />
          <p className="font-display italic text-xl md:text-2xl text-ivory/80 max-w-xl">
            Digital Painter · Sketch · Color · Print · Frame
          </p>
          <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
            Hand-crafted digital portraiture rooted in Kenyan storytelling — rendered, printed and framed
            for collectors who want art that lasts.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center gap-3 bg-gradient-crimson text-primary-foreground px-7 py-4 text-xs tracking-[0.3em] uppercase shadow-frame hover:shadow-gallery transition-all"
            >
              Commission a Piece
              <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="text-xs tracking-[0.3em] uppercase text-ivory/70 hover:text-crimson transition-colors"
            >
              View Gallery →
            </button>
          </div>
        </div>

        {/* Centerpiece */}
        <div className="lg:col-span-5 animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-6 border border-crimson/30" />
            <div className="absolute -inset-12 border border-border" />
            <Placeholder
              label="Featured Work"
              caption="Untitled · 2025"
              ratio="portrait"
              className="shadow-gallery"
            />
            <div className="mt-6 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              <span>Edition 01 / 12</span>
              <span className="text-crimson">Archival Print</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-crimson transition-colors animate-fade-in-slow"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
};
