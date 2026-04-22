import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Section } from "./Section";
import { Placeholder } from "./Placeholder";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Cat = "All" | "Sketches" | "Colored" | "Prints";

interface Work {
  title: string;
  cat: Exclude<Cat, "All">;
  ratio: "portrait" | "square" | "tall" | "landscape";
  year: string;
  medium: string;
  edition: string;
}

const works: Work[] = [
  { title: "Sketch 01 — Portrait Study", cat: "Sketches", ratio: "portrait", year: "2025", medium: "Graphite on paper, digitised", edition: "Original · 1 of 1" },
  { title: "Color 01 — Maasai Light", cat: "Colored", ratio: "tall", year: "2024", medium: "Digital painting", edition: "Edition of 12" },
  { title: "Print 01 — Edition of 12", cat: "Prints", ratio: "square", year: "2024", medium: "Archival giclée, A3", edition: "Edition of 12" },
  { title: "Sketch 02 — Hands at Rest", cat: "Sketches", ratio: "landscape", year: "2025", medium: "Charcoal study", edition: "Original · 1 of 1" },
  { title: "Color 02 — Mother & Child", cat: "Colored", ratio: "portrait", year: "2024", medium: "Digital painting", edition: "Edition of 8" },
  { title: "Print 02 — Framed A2", cat: "Prints", ratio: "portrait", year: "2024", medium: "Archival giclée, A2 framed", edition: "Edition of 6" },
  { title: "Sketch 03 — Elder Profile", cat: "Sketches", ratio: "tall", year: "2023", medium: "Graphite on paper", edition: "Original · 1 of 1" },
  { title: "Color 03 — Market Morning", cat: "Colored", ratio: "landscape", year: "2025", medium: "Digital painting", edition: "Edition of 10" },
  { title: "Print 03 — Diptych", cat: "Prints", ratio: "square", year: "2024", medium: "Archival giclée, paired A3", edition: "Edition of 5" },
  { title: "Color 04 — Quiet Window", cat: "Colored", ratio: "portrait", year: "2025", medium: "Digital painting", edition: "Edition of 12" },
];

const filters: Cat[] = ["All", "Sketches", "Colored", "Prints"];

export const Gallery = () => {
  const [active, setActive] = useState<Cat>("All");
  const [selected, setSelected] = useState<Work | null>(null);
  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);

  const inquire = () => {
    setSelected(null);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <Section
      id="gallery"
      eyebrow="Selected Work"
      title={<>The <em className="text-crimson not-italic font-display italic">gallery.</em></>}
      intro="A rotating selection of recent commissions and personal studies. Tap any piece to view details."
    >
      <div className="flex flex-wrap items-center gap-2 md:gap-1 mb-12 border-b border-border pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "relative px-4 py-2 text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors",
              active === f ? "text-ivory" : "text-muted-foreground hover:text-ivory",
            )}
          >
            {f}
            {active === f && <span className="absolute -bottom-[17px] left-0 right-0 h-px bg-crimson" />}
          </button>
        ))}
        <span className="ml-auto text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
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
              onClick={() => setSelected(w)}
              className="block w-full text-left group"
              aria-label={`View ${w.title}`}
            >
              <Placeholder label={w.cat} caption={w.title} ratio={w.ratio} />
              <figcaption className="mt-3 flex items-baseline justify-between text-[10px] tracking-[0.25em] uppercase">
                <span className="text-ivory/80 group-hover:text-crimson transition-colors">{w.title}</span>
                <span className="text-crimson">{w.cat}</span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl bg-charcoal border-border p-0 overflow-hidden [&>button]:hidden">
          {selected && (
            <div className="grid md:grid-cols-2">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center bg-charcoal/70 backdrop-blur border border-border text-ivory hover:text-crimson hover:border-crimson transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="relative bg-charcoal-soft p-6 md:p-8 flex items-center">
                <div className="absolute -inset-0 md:inset-4 md:border md:border-crimson/20 pointer-events-none" />
                <Placeholder
                  label={selected.cat}
                  caption={selected.title}
                  ratio={selected.ratio}
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

                <dl className="mt-8 space-y-4 border-y border-border py-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Medium</dt>
                    <dd className="text-ivory/90 text-right">{selected.medium}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Edition</dt>
                    <dd className="text-ivory/90 text-right">{selected.edition}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Studio</dt>
                    <dd className="text-ivory/90 text-right">DARKCHESA · Nairobi</dd>
                  </div>
                </dl>

                <DialogDescription className="mt-6 text-sm text-muted-foreground leading-relaxed font-display italic">
                  Drawn to this piece? Commission a similar portrait — or request this exact work as a
                  signed archival print, framed to your space.
                </DialogDescription>

                <button
                  onClick={inquire}
                  className="group mt-8 inline-flex items-center justify-between gap-3 bg-gradient-crimson text-primary-foreground px-6 py-4 text-xs tracking-[0.3em] uppercase shadow-frame hover:shadow-gallery transition-all"
                >
                  Inquire About This Piece
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground text-center">
                  Studio replies within 24 hours
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
};
