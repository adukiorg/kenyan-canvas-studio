import { FormEvent, useState } from "react";
import { Phone, MapPin, Instagram, MessageCircle, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PHONE_DISPLAY = "+254 793 948 975";
const PHONE_TEL = "+254793948975";
const PHONE_WA = "254793948975";
const IG_HANDLE = "darkchesa_art";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message received", {
        description: "We'll respond from the studio within 24 hours.",
      });
    }, 700);
  };

  const channels = [
    { Icon: Phone, label: "Call", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { Icon: MessageSquare, label: "SMS", value: PHONE_DISPLAY, href: `sms:${PHONE_TEL}` },
    {
      Icon: MessageCircle,
      label: "WhatsApp",
      value: PHONE_DISPLAY,
      href: `https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Hello DARKCHESA, I'd like to inquire about a commission.")}`,
    },
    { Icon: Instagram, label: "Instagram", value: `@${IG_HANDLE}`, href: `https://instagram.com/${IG_HANDLE}` },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Begin a Commission"
      title={<>Let's make <em className="text-crimson not-italic font-display italic">something lasting.</em></>}
      intro="Tell us about the piece you have in mind. Every commission begins with a conversation."
      className="bg-charcoal-soft"
    >
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Info */}
        <div className="lg:col-span-5 space-y-4">
          {channels.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-start gap-4 border border-border p-5 hover:border-crimson transition-colors"
            >
              <Icon className="text-crimson mt-1" size={20} strokeWidth={1.25} />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  {label}
                </div>
                <div className="font-display text-lg text-ivory group-hover:text-crimson transition-colors">
                  {value}
                </div>
              </div>
            </a>
          ))}

          <div className="flex items-start gap-4 border border-border p-5">
            <MapPin className="text-crimson mt-1" size={20} strokeWidth={1.25} />
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Studio</div>
              <div className="font-display text-lg text-ivory">Nairobi, Kenya</div>
              <div className="text-sm text-muted-foreground mt-1">By appointment only</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="lg:col-span-7 bg-card border border-border p-8 md:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                Name
              </label>
              <Input
                required
                name="name"
                placeholder="Your full name"
                className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-crimson text-ivory"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                Email
              </label>
              <Input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-crimson text-ivory"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Service Interest
            </label>
            <select
              name="service"
              required
              defaultValue=""
              className="w-full bg-transparent border-0 border-b border-border py-2 text-ivory focus:outline-none focus:border-crimson"
            >
              <option value="" disabled className="bg-card">Select one…</option>
              <option className="bg-card">Sketching</option>
              <option className="bg-card">Digital Coloring</option>
              <option className="bg-card">Printing</option>
              <option className="bg-card">Framing</option>
              <option className="bg-card">Full Commission (Sketch → Frame)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Tell us about your piece
            </label>
            <Textarea
              required
              name="message"
              rows={5}
              placeholder="Subject, intended size, any references, deadlines…"
              className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-crimson text-ivory resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative inline-flex items-center gap-3 bg-gradient-crimson text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase shadow-frame hover:shadow-gallery transition-all disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send Inquiry"}
            <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
          </button>
        </form>
      </div>
    </Section>
  );
};
