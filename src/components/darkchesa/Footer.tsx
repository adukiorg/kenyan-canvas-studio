export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-charcoal">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display tracking-[0.3em] text-ivory">
          DARK<span className="text-crimson">·</span>CHESA
        </div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center">
          © {new Date().getFullYear()} Darkchesa Studio · Nairobi, Kenya · All works original
        </div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Crafted by hand
        </div>
      </div>
    </footer>
  );
};
