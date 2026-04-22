import { Section } from "./Section";
import { Placeholder } from "./Placeholder";

const stats = [
  { n: "08", l: "Years Creating" },
  { n: "240+", l: "Pieces Delivered" },
  { n: "180", l: "Happy Collectors" },
];

export const About = () => {
  return (
    <Section
      id="about"
      eyebrow="The Artist"
      title={<>Portraits drawn from <em className="text-crimson not-italic font-display italic">memory & soil.</em></>}
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border border-crimson/25" />
            <Placeholder label="Studio Portrait" caption="Nairobi · 2024" ratio="portrait" />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-8">
          <p className="text-lg md:text-xl text-ivory/85 leading-relaxed font-display">
            DARKCHESA is a one-person studio working at the intersection of classical portraiture and
            contemporary digital craft. Every piece begins with a sketch on paper before it is drawn back
            into pixels, layer by patient layer.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Trained in Nairobi and shaped by the rhythm of East African colour, light and storytelling,
            the work honours the people, fabrics and quiet moments that pass too quickly. Each commission
            is hand-finished, archivally printed and framed in the studio — never outsourced.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-5xl text-ivory">{s.n}</div>
                <div className="mt-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
