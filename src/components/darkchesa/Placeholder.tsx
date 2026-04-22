import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label?: string;
  caption?: string;
  className?: string;
  ratio?: "portrait" | "square" | "landscape" | "tall";
}

const ratioMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  tall: "aspect-[2/3]",
};

export const Placeholder = ({ label, caption, className, ratio = "portrait" }: PlaceholderProps) => {
  return (
    <div
      className={cn(
        "placeholder-art group relative w-full overflow-hidden border border-border/60",
        ratioMap[ratio],
        className,
      )}
    >
      {/* corner ticks */}
      <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-ivory/30" />
      <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-ivory/30" />
      <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-ivory/30" />
      <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-ivory/30" />

      {/* center mark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="font-display text-4xl text-ivory/20">D</div>
        {label && (
          <div className="mt-2 font-display text-sm tracking-[0.3em] text-ivory/60 uppercase">
            {label}
          </div>
        )}
        {caption && (
          <div className="mt-1 text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
            {caption}
          </div>
        )}
      </div>

      {/* hover overlay */}
      <div className="pointer-events-none absolute inset-0 bg-crimson/0 transition-all duration-500 group-hover:bg-crimson/15" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
    </div>
  );
};
