"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OwlMascot } from "@/components/OwlMascot";

export function FinalCTA() {
  return (
    <section
      className="py-24 lg:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 -z-10 blur-3xl bg-blue-600/10 rounded-full scale-150"
            aria-hidden="true"
          />

          <div className="glass-card rounded-3xl p-10 lg:p-16 border border-white/[0.08]">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex mb-6"
              aria-hidden="true"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-blue-500/40 rounded-full" />
                <OwlMascot size={72} />
              </div>
            </motion.div>

            <h2
              id="final-cta-heading"
              className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            >
              Your next launch
              <br />
              <span className="text-gradient">deserves to land.</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Stop building in the dark. Join the waitlist and get early
              access to the launch cockpit that turns chaos into a system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild className="glow-blue-sm min-w-48">
                <a href="#waitlist">
                  <Rocket className="h-5 w-5" />
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground text-xs mt-6">
              Free to join · No spam · Unsubscribe anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
