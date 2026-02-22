import { OwlLogoMark } from "@/components/OwlMascot";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <OwlLogoMark />

          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            aria-label="Footer navigation"
          >
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a
              href="mailto:hello@applauncos.com"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {year} App Launch OS. Made for indie devs.
          </p>
        </div>
      </div>
    </footer>
  );
}
