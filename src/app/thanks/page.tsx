import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Rocket, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwlMascot } from "@/components/OwlMascot";

export const metadata: Metadata = {
  title: "You're on the waitlist!",
  description: "Thanks for joining the App Launch OS waitlist. We'll be in touch.",
  robots: { index: false, follow: false },
};

interface ThanksPageProps {
  searchParams: Promise<{ email?: string; duplicate?: string }>;
}

export default async function ThanksPage({ searchParams }: ThanksPageProps) {
  const params = await searchParams;
  const email = params.email ? decodeURIComponent(params.email) : null;
  const isDuplicate = params.duplicate === "1";

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-hero-glow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Animated owl */}
        <div
          className="mb-8 flex justify-center"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-blue-500/40 rounded-full scale-150" />
            <OwlMascot size={96} />
          </div>
        </div>

        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-emerald-400" aria-hidden="true" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          {isDuplicate ? (
            <>
              You&rsquo;re already
              <br />
              <span className="text-gradient">on the list!</span>
            </>
          ) : (
            <>
              You&rsquo;re in.
              <br />
              <span className="text-gradient">Welcome to the crew.</span>
            </>
          )}
        </h1>

        <p className="text-muted-foreground text-lg mb-2 leading-relaxed">
          {isDuplicate
            ? "Looks like you already signed up. We'll reach out when early access opens — keep building!"
            : "You're on the waitlist for App Launch OS. We'll email you when early access opens."}
        </p>

        {email && (
          <p className="text-sm text-muted-foreground mb-8">
            Confirmation sent to{" "}
            <span className="text-foreground font-medium">{email}</span>
          </p>
        )}

        {/* What's next */}
        <div className="glass-card rounded-2xl p-6 mb-8 text-left space-y-3">
          <h2 className="font-bold text-sm text-muted-foreground uppercase tracking-widest">
            What happens next
          </h2>
          {[
            { icon: "📬", text: "We'll email you when early access opens" },
            { icon: "🔒", text: "Waitlist members get early pricing locked in" },
            {
              icon: "🗳️",
              text: "Your answers help us build the right features first",
            },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <span className="text-lg leading-none mt-0.5">{item.icon}</span>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="gradient" size="lg" asChild className="glow-blue-sm">
            <a
              href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20%40applauncos%20%E2%80%94%20an%20all-in-one%20launch%20cockpit%20for%20indie%20devs.%20Stop%20shipping%20to%20crickets%20%F0%9F%A6%89%20https%3A%2F%2Fapplauncos.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
              Share on X
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              Back to homepage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Rocket easter egg */}
        <p className="mt-8 text-2xl" aria-label="rocket launch emoji" role="img">
          🚀
        </p>
      </div>
    </main>
  );
}
