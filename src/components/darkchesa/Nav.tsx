import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg md:text-xl tracking-[0.3em] text-ivory hover:text-crimson transition-colors"
          aria-label="DARKCHESA home"
        >
          DARK<span className="text-crimson">·</span>CHESA
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={cn(
                "relative text-xs tracking-[0.25em] uppercase transition-colors",
                active === l.id ? "text-ivory" : "text-muted-foreground hover:text-ivory",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-px bg-crimson transition-all duration-300",
                  active === l.id ? "w-full" : "w-0",
                )}
              />
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleClick("contact")}
          className="hidden md:inline-flex items-center text-xs tracking-[0.25em] uppercase border border-crimson text-ivory hover:bg-crimson transition-colors px-4 py-2"
        >
          Commission
        </button>

        <button
          className="md:hidden text-ivory p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-charcoal/95 backdrop-blur-md animate-fade-in">
          <div className="container flex flex-col py-6 gap-5">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className="text-left text-sm tracking-[0.25em] uppercase text-ivory/80 hover:text-crimson transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("contact")}
              className="mt-2 self-start text-xs tracking-[0.25em] uppercase border border-crimson text-ivory px-4 py-2"
            >
              Commission
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
