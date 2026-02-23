import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { DemoShowcase } from "@/components/sections/DemoShowcase";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DemoShowcase />
        <Features />
        <WaitlistForm />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
