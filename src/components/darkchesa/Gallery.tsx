import { useState } from "react";
import { Section } from "./Section";
import { Placeholder } from "./Placeholder";
import { cn } from "@/lib/utils";

type Cat = "All" | "Sketches" | "Colored" | "Prints";

interface Work {
  title: string;
  cat: Exclude<Cat, "All">;
  ratio: "portrait" | "square" | "tall" | "landscape";
}

const works: Work[] = [
  { title: "Sketch 01 — Portrait Study", cat: "Sketches", ratio: "portrait" },
  { title: "Color 01 — Maasai Light", cat: "Colored", ratio: "tall" },
  { title: "Print 01 — Edition of 12", cat: "Prints", ratio: "square" },
  { title: "Sketch 02 — Hands at Rest", cat: "Sketches", ratio: "landscape" },
  { title: "Color 02 — Mother & Child", cat: "Colored", ratio: "portrait" },
  { title: "Print 02 — Framed A2", cat: "Prints", ratio: "portrait" },
  { title: "Sketch 03 — Elder Profile", cat: "Sketches", ratio: "tall" },
  { title: "Color 03 — Market Morning", cat: "Colored", ratio: "landscape" },
  { title: "Print 03 — Diptych", cat: "Prints", ratio: "square" },
  { title: "Color 04 — Quiet Window", cat: "Colored", ratio: "portrait" },
];

const filters: Cat[] = ["All", "Sketches", "Colored", "Prints"];

export const Gallery = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);

  return (
    <Section
      id="gallery"
      eyebrow="Selected Work"
      title={<>The <em className="text-crimson not-italic font-display italic">gallery.</em></>}
      intro="A rotating selection of recent commissions and personal studies."
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
            <Placeholder label={w.cat} caption={w.title} ratio={w.ratio} />
            <figcaption className="mt-3 flex items-baseline justify-between text-[10px] tracking-[0.25em] uppercase">
              <span className="text-ivory/80">{w.title}</span>
              <span className="text-crimson">{w.cat}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};
