"use client";

import { motion } from "framer-motion";
import { Check, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  "Unlimited launch projects",
  "Launch timeline engine",
  "Asset hub",
  "Post generator (all 9 types)",
  "X scheduling + thread builder",
  "UTM link tracking",
  "Performance dashboard",
  "Community directory",
  "ASO lite tools",
  "Project templates",
  "CSV export",
  "Priority support",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 relative"
      aria-labelledby="pricing-heading"
    >
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Simple.
            <br />
            <span className="text-gradient">Subscription-first.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            One affordable plan that covers everything. No feature-gating,
            no pay-per-post nonsense.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-card rounded-2xl p-8 glow-blue"
          >
            {/* Popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge className="gap-1 px-4 py-1 text-xs font-bold shadow-lg shadow-blue-900/40">
                <Zap className="h-3 w-3" />
                Early access pricing
              </Badge>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-2">
              <div className="flex items-end justify-center gap-1">
                <span className="text-muted-foreground text-lg">$</span>
                <span className="text-6xl font-black text-gradient">19</span>
                <span className="text-muted-foreground text-lg mb-2">/mo</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2 flex items-center justify-center gap-1.5">
                <Lock className="h-3.5 w-3.5" />
                Waitlist members lock in early pricing
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8" role="list" aria-label="Plan features">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-blue-400" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button variant="gradient" size="lg" className="w-full glow-blue-sm" asChild>
              <a href="#waitlist">
                Join waitlist — lock in early pricing
              </a>
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              No credit card required. Pricing revealed at launch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
