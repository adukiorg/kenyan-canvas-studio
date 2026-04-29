import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Section } from "./Section";
import { Placeholder } from "./Placeholder";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import art1 from "@/assets/3.jpg";
import art2 from "@/assets/7.2.png";
import art4 from "@/assets/4.jpg";
import art6 from "@/assets/6.jpg";
import art7 from "@/assets/7.jpg"

type Cat = "All" | "Sketches" | "Colored" | "Prints";

interface Size {
  size: string;
  dims: string;
  price: string;
}

interface Work {
  title: string;
  cat: Exclude<Cat, "All">;
  ratio: "portrait" | "square" | "tall" | "landscape";
  year: string;
  medium: string;
  edition: string;
  sizes: Size[];
  image?: string;
}

// Studio rates: SKETCH 95.72 + COLOR 94.83 + PRINT 52.98 + framing by size (USD)
const sketchSizes: Size[] = [
  { size: "A4", dims: "21 × 29.7 cm", price: "95.72" },
  { size: "A3", dims: "29.7 × 42 cm", price: "95.72" },
  { size: "A2", dims: "42 × 59.4 cm", price: "95.72" },
];
const colorSizes: Size[] = [
  // Sketch + color
  { size: "A4", dims: "21 × 29.7 cm", price: "190.55" },
  { size: "A3", dims: "29.7 × 42 cm", price: "190.55" },
  { size: "A2", dims: "42 × 59.4 cm", price: "190.55" },
];
const printSizes: Size[] = [
  // Print only & framed
  { size: "A4 Print", dims: "21 × 29.7 cm", price: "52.98" },
  { size: "A3 Framed", dims: "29.7 × 42 cm", price: "98.28" },
  { size: "A2 Framed", dims: "42 × 59.4 cm", price: "113.43" },
];

// 4 real artworks + 6 styled placeholders = 10 total
const works: Work[] = [
  { title: "Bloom in Crimson", cat: "Colored", ratio: "portrait", year: "2025", medium: "Digital painting, framed print", edition: "Edition of 12", sizes: colorSizes, image: art1 },
  { title: "The Ivory Collar", cat: "Colored", ratio: "portrait", year: "2025", medium: "Digital painting, framed print", edition: "Edition of 10", sizes: colorSizes, image: art2 },
  { title: "Joy in Silver", cat: "Prints", ratio: "portrait", year: "2024", medium: "HD CMYK archival print, framed", edition: "Edition of 8", sizes: printSizes, image: art4 },
  { title: "Adornment Study", cat: "Colored", ratio: "portrait", year: "2025", medium: "Digital painting", edition: "Edition of 12", sizes: colorSizes, image: art6 },
  { title: "Luminous Essence", cat: "Colored", ratio: "portrait", year: "2025", medium: "Digital painting, framed print", edition: "Edition of 12", sizes: colorSizes, image: art7 },
  { title: "Sketch 01 — Portrait Study", cat: "Sketches", ratio: "portrait", year: "2025", medium: "Graphite on paper, digitised", edition: "Original · 1 of 1", sizes: sketchSizes },
  { title: "Sketch 02 — Hands at Rest", cat: "Sketches", ratio: "landscape", year: "2025", medium: "Charcoal study", edition: "Original · 1 of 1", sizes: sketchSizes },
  { title: "Sketch 03 — Elder Profile", cat: "Sketches", ratio: "tall", year: "2023", medium: "Graphite on paper", edition: "Original · 1 of 1", sizes: sketchSizes },
  { title: "Print 01 — Edition of 12", cat: "Prints", ratio: "square", year: "2024", medium: "HD CMYK archival print", edition: "Edition of 12", sizes: printSizes },
  { title: "Print 02 — Diptych", cat: "Prints", ratio: "square", year: "2024", medium: "HD CMYK archival, paired", edition: "Edition of 5", sizes: printSizes },
  { title: "Color 04 — Quiet Window", cat: "Colored", ratio: "tall", year: "2025", medium: "Digital painting", edition: "Edition of 12", sizes: colorSizes },
];

const filters: Cat[] = ["All", "Sketches", "Colored", "Prints"];

export const Gallery = () => {
  const [active, setActive] = useState<Cat>("All");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);
  const selected = index !== null ? filtered[index] : null;

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const inquireWhatsApp = () => {
    if (!selected) return;
    const text = encodeURIComponent(
      `Hello DARKCHESA, I'd like to inquire about "${selected.title}" (${selected.cat}, ${selected.year}).`,
    );
    window.open(`https://wa.me/254793948975?text=${text}`, "_blank");
  };

  // WhatsApp is the default inquiry channel (no form).


  return (
    <Section
      id="gallery"
      eyebrow="Selected Work"
      title={<>The <em className="text-crimson not-italic font-display italic">gallery.</em></>}
      intro="A rotating selection of recent commissions and personal studies. Tap any piece for sizes & pricing."
    >
      <div className="flex flex-nowrap overflow-x-auto items-center gap-2 md:gap-1 mb-12 border-b border-border pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "relative px-4 py-2 text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors shrink-0",
              active === f ? "text-ivory" : "text-muted-foreground hover:text-ivory",
            )}
          >
            {f}
            {active === f && <span className="absolute -bottom-[17px] left-0 right-0 h-px bg-crimson" />}
          </button>
        ))}
        <span className="ml-auto text-[10px] tracking-[0.3em] uppercase text-muted-foreground shrink-0 pl-4">
          {String(filtered.length).padStart(2, "0")} pieces
        </span>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {filtered.map((w, i) => (
          <figure
            key={w.title}
            className="break-inside-avoid mb-6 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <button
              onClick={() => setIndex(i)}
              className="block w-full text-left group"
              aria-label={`View ${w.title}`}
            >
              <Placeholder label={w.cat} caption={w.title} ratio={w.ratio} image={w.image} alt={w.title} />
              <figcaption className="mt-3 flex items-baseline justify-between text-[10px] tracking-[0.25em] uppercase">
                <span className="text-ivory/80 group-hover:text-crimson transition-colors">{w.title}</span>
                <span className="text-crimson">{w.cat}</span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {/* Artwork Sizes & Pricing Table */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-center gap-3 mb-6 text-[10px] tracking-[0.4em] uppercase text-crimson">
          <span className="h-px w-8 bg-crimson" />
          Artwork Sizes
        </div>
        <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight max-w-2xl">
          Standard sizes & <em className="not-italic font-display italic text-crimson">studio pricing.</em>
        </h3>
        <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
          All artworks are produced in three standard formats. Prices below are the studio rate per
          format; framing and finishing options shown on each piece.
        </p>

        <div className="mt-8 bg-card border border-border overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-12 px-6 md:px-8 py-4 border-b border-border text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            <span className="col-span-3">Size</span>
            <span className="col-span-3">Dimensions</span>
            <span className="col-span-2 text-right">Sketch ($)</span>
            <span className="col-span-2 text-right">Color ($)</span>
            <span className="col-span-2 text-right">Print ($)</span>
          </div>
          {[
            { size: "A4", dims: "21 × 29.7 cm", sketch: "95.72", color: "190.55", print: "52.98" },
            { size: "A3", dims: "29.7 × 42 cm", sketch: "95.72", color: "190.55", print: "98.28" },
            { size: "A2", dims: "42 × 59.4 cm", sketch: "95.72", color: "190.55", print: "113.43" },
          ].map((row) => (
            <div
              key={row.size}
              className="grid grid-cols-12 items-baseline px-6 md:px-8 py-5 border-b border-border last:border-b-0 hover:bg-charcoal-soft/60 transition-colors"
            >
              <span className="col-span-3 font-display text-lg text-ivory">{row.size}</span>
              <span className="col-span-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                {row.dims}
              </span>
              <span className="col-span-2 text-right font-display text-base text-ivory">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground mr-1">$</span>
                {row.sketch}
              </span>
              <span className="col-span-2 text-right font-display text-base text-ivory">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground mr-1">$</span>
                {row.color}
              </span>
              <span className="col-span-2 text-right font-display text-base text-ivory">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground mr-1">$</span>
                {row.print}
              </span>
            </div>
          ))}
          </div>
        </div>
        <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Sketch = graphite original · Color = sketch + digital colour · Print = HD CMYK archival (A3/A2 framed)
        </p>
      </div>

      <Dialog open={selected !== null} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-5xl bg-charcoal border-border p-0 overflow-hidden [&>button]:hidden max-h-[92vh] overflow-y-auto">
          {selected && index !== null && (
            <div className="relative">
              {/* Top controls */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase text-muted-foreground bg-charcoal/70 backdrop-blur px-3 py-2 border border-border">
                  {String(index + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                </span>
                <button
                  onClick={close}
                  className="h-9 w-9 flex items-center justify-center bg-charcoal/70 backdrop-blur border border-border text-ivory hover:text-crimson hover:border-crimson transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                aria-label="Previous artwork"
                className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 flex items-center justify-center bg-charcoal/70 backdrop-blur border border-border text-ivory hover:text-crimson hover:border-crimson transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next artwork"
                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 flex items-center justify-center bg-charcoal/70 backdrop-blur border border-border text-ivory hover:text-crimson hover:border-crimson transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              <div key={selected.title} className="grid md:grid-cols-2 animate-fade-in">
                <div className="relative bg-charcoal-soft p-6 md:p-10 flex items-center">
                  <div className="absolute inset-4 md:inset-6 border border-crimson/20 pointer-events-none" />
                  <Placeholder
                    label={selected.cat}
                    caption={selected.title}
                    ratio={selected.ratio}
                    image={selected.image}
                    alt={selected.title}
                    className="shadow-frame"
                  />
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-crimson mb-4">
                    {selected.cat} · {selected.year}
                  </div>
                  <DialogTitle className="font-display text-3xl md:text-4xl text-ivory leading-tight">
                    {selected.title}
                  </DialogTitle>

                  <dl className="mt-6 space-y-3 border-y border-border py-5 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Medium</dt>
                      <dd className="text-ivory/90 text-right">{selected.medium}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Edition</dt>
                      <dd className="text-ivory/90 text-right">{selected.edition}</dd>
                    </div>
                  </dl>

                  {/* Sizes & pricing */}
                  <div className="mt-6">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                      Sizes & Pricing
                    </div>
                    <ul className="divide-y divide-border border border-border">
                      {selected.sizes.map((s) => (
                        <li key={s.size} className="flex items-center justify-between gap-3 px-4 py-3">
                          <div>
                            <div className="font-display text-base text-ivory">{s.size}</div>
                            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                              {s.dims}
                            </div>
                          </div>
                          <div className="font-display text-base text-ivory whitespace-nowrap">
                            <span className="text-[10px] tracking-[0.2em] text-muted-foreground mr-1">$</span>
                            {s.price}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <DialogDescription className="mt-5 text-sm text-muted-foreground leading-relaxed font-display italic">
                    Drawn to this piece? Inquire to commission a similar portrait or order this work as a
                    signed archival print.
                  </DialogDescription>

                  <div className="mt-6">
                    <button
                      onClick={inquireWhatsApp}
                      className="group w-full inline-flex items-center justify-between gap-3 bg-gradient-crimson text-primary-foreground px-5 py-3 text-[10px] tracking-[0.3em] uppercase shadow-frame hover:shadow-gallery transition-all"
                    >
                      Inquire on WhatsApp
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground text-center">
                    Studio replies within 24 hours · ← → to browse
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
};
