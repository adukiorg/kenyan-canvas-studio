import { Nav } from "@/components/darkchesa/Nav";
import { Hero } from "@/components/darkchesa/Hero";
import { About } from "@/components/darkchesa/About";
import { Services } from "@/components/darkchesa/Services";
import { Gallery } from "@/components/darkchesa/Gallery";
import { Skills } from "@/components/darkchesa/Skills";
import { Process } from "@/components/darkchesa/Process";
import { TimeLapse } from "@/components/darkchesa/TimeLapse";
import { Pricing } from "@/components/darkchesa/Pricing";
import { Contact } from "@/components/darkchesa/Contact";
import { Footer } from "@/components/darkchesa/Footer";
import { WhatsAppFab } from "@/components/darkchesa/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Skills />
      <Process />
      <TimeLapse />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
