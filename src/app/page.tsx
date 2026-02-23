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
      {/* Hidden form — Netlify build bot detects this in static HTML to register the "waitlist" form */}
      <form name="waitlist" data-netlify="true" netlify-honeypot="bot-field" hidden aria-hidden="true">
        <input type="hidden" name="form-name" value="waitlist" />
        <input type="text"  name="bot-field" />
        <input type="text"  name="fullName" />
        <input type="email" name="email" />
        <input type="text"  name="role" />
        <input type="text"  name="building" />
        <input type="text"  name="launchStage" />
        <input type="text"  name="biggestPain" />
        <input type="text"  name="interestedFeatures" />
        <input type="text"  name="launchDate" />
        <input type="text"  name="timezone" />
        <input type="text"  name="twitterHandle" />
        <input type="text"  name="consent" />
        <input type="text"  name="ref" />
        <input type="text"  name="utmSource" />
        <input type="text"  name="utmMedium" />
        <input type="text"  name="utmCampaign" />
        <input type="text"  name="utmContent" />
        <input type="text"  name="utmTerm" />
      </form>
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
