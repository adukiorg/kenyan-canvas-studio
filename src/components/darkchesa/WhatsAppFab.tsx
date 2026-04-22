import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-crimson text-primary-foreground flex items-center justify-center shadow-frame hover:scale-110 transition-transform animate-fade-in-slow"
    >
      <MessageCircle size={22} strokeWidth={1.5} />
      <span className="absolute inset-0 rounded-full animate-ping bg-crimson/40" />
    </a>
  );
};
