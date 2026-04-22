import { Phone, MapPin, Share2, MessageCircle, MessageSquare, ArrowRight } from "lucide-react";
import { Section } from "./Section";

const PHONE_DISPLAY = "+254 793 948 975";
const PHONE_TEL = "+254793948975";
const PHONE_WA = "254793948975";
const IG_HANDLE = "darkchesa_art";
const WA_TEXT = encodeURIComponent("Hello DARKCHESA, I'd like to inquire about a commission.");

export const Contact = () => {
  const channels = [
    {
      Icon: MessageCircle,
      label: "WhatsApp · Preferred",
      value: PHONE_DISPLAY,
      href: `https://wa.me/${PHONE_WA}?text=${WA_TEXT}`,
      featured: true,
    },
    { Icon: Phone, label: "Call", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, featured: false },
    { Icon: MessageSquare, label: "SMS", value: PHONE_DISPLAY, href: `sms:${PHONE_TEL}`, featured: false },
    {
      Icon: Share2,
      label: "Instagram",
      value: `@${IG_HANDLE}`,
      href: `https://instagram.com/${IG_HANDLE}`,
      featured: false,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Begin a Commission"
      title={<>Let's make <em className="text-crimson not-italic font-display italic">something lasting.</em></>}
      intro="Every commission begins with a conversation. WhatsApp is the fastest way to reach the studio."
      className="bg-charcoal-soft"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Featured WhatsApp CTA */}
        <div className="lg:col-span-7">
          <a
            href={`https://wa.me/${PHONE_WA}?text=${WA_TEXT}`}
            target="_blank"
            rel="noreferrer"
            className="group relative block bg-card border border-crimson p-8 md:p-10 shadow-gallery hover:shadow-frame transition-all overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-crimson opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
            <div className="relative flex items-start gap-5">
              <div className="h-14 w-14 shrink-0 flex items-center justify-center bg-gradient-crimson text-primary-foreground shadow-frame">
                <MessageCircle size={26} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] tracking-[0.4em] uppercase text-crimson mb-2">
                  Preferred · Replies within minutes
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight">
                  Chat on WhatsApp
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md">
                  Send a message, share references, and we'll quote your piece. No forms, no waiting.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-ivory group-hover:text-crimson transition-colors">
                  {PHONE_DISPLAY}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </a>

          <div className="mt-6 flex items-start gap-4 border border-border p-5 bg-card">
            <MapPin className="text-crimson mt-1" size={20} strokeWidth={1.25} />
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Studio</div>
              <div className="font-display text-lg text-ivory">Nairobi, Kenya</div>
              <div className="text-sm text-muted-foreground mt-1">By appointment only</div>
            </div>
          </div>
        </div>

        {/* Other channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-2">
            Other Channels
          </div>
          {channels
            .filter((c) => !c.featured)
            .map(({ Icon, label, value, href }) => (
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
        </div>
      </div>
    </Section>
  );
};
