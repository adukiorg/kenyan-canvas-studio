import { GraduationCap, Brush, Layers, Pen, Palette, Frame } from "lucide-react";
import { Section } from "./Section";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const education = {
  icon: GraduationCap,
  title: "Degree in Computer Science & IT",
  detail: "The East African University",
};

const software = [
  { icon: Brush, name: "Clip Studio Paint", detail: "Primary painting & inking" },
  { icon: Layers, name: "Adobe Photoshop", detail: "Color grading & finishing" },
];

const craft = [
  { icon: Pen, name: "Graphite Sketching", detail: "Foundational portrait studies" },
  { icon: Palette, name: "Digital Coloring", detail: "Layered painterly rendering" },
  { icon: Frame, name: "Print & Framing", detail: "HD CMYK archival, hardwood" },
];

const Item = ({
  icon: Icon,
  title,
  detail,
  i,
}: {
  icon: typeof GraduationCap;
  title: string;
  detail: string;
  i: number;
}) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 90}ms` }}
      className={cn(
        "group p-6 md:p-7 border border-border bg-card hover:border-crimson/60 transition-all duration-700",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
    >
      <div className="h-11 w-11 flex items-center justify-center border border-border text-crimson group-hover:border-crimson transition-colors">
        <Icon size={18} />
      </div>
      <h4 className="mt-5 font-display text-xl text-ivory leading-snug">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{detail}</p>
    </div>
  );
};

export const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Training"
      title={
        <>
          Studied craft, <em className="text-crimson not-italic font-display italic">refined tools.</em>
        </>
      }
      intro="A blend of formal training in technology and years of disciplined studio practice — every commission moves through a tested toolkit."
    >
      {/* Education */}
      <div className="mb-12">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">Education</div>
        <Item icon={education.icon} title={education.title} detail={education.detail} i={0} />
      </div>

      {/* Software */}
      <div className="mb-12">
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">Software</div>
        <div className="grid sm:grid-cols-2 gap-5">
          {software.map((s, i) => (
            <Item key={s.name} icon={s.icon} title={s.name} detail={s.detail} i={i} />
          ))}
        </div>
      </div>

      {/* Craft */}
      <div>
        <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">Craft</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {craft.map((s, i) => (
            <Item key={s.name} icon={s.icon} title={s.name} detail={s.detail} i={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};
