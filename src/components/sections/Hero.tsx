"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, Zap, CheckCircle2, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OwlMascot } from "@/components/OwlMascot";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.03, 0.26, 1], delay },
  }),
};

const floatCard = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.03, 0.26, 1], delay },
  },
});

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12"
      aria-label="Hero"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left column: copy ── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-5">
              <Badge className="gap-1.5 px-3 py-1 text-xs font-semibold cursor-default">
                <Zap className="h-3 w-3" />
                Now accepting waitlist signups
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.05}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Stop shipping
              <br />
              <span className="text-gradient">to crickets.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              App Launch OS is the all-in-one launch cockpit that turns chaos
              into a system —{" "}
              <span className="text-foreground font-medium">
                timeline, assets, posting, tracking, and dashboards
              </span>
              . Built for indie devs who want to ship and be heard.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.15}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Button variant="gradient" size="xl" asChild className="glow-blue-sm">
                <a href="#waitlist">
                  <Rocket className="h-5 w-5" />
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#demo">See how it works</a>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5" aria-hidden="true">
                  {["🧑‍💻", "👩‍💻", "🧑‍🚀", "👾", "🦸"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-sm"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <span>300+ indie devs on the waitlist</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-amber-400">★★★★★</span>
                <span>Loved by founders</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: owl + floating cards ── */}
          <div className="relative flex items-center justify-center min-h-[480px] lg:min-h-[560px]">

            {/* Soft radial glow behind owl */}
            <div
              className="absolute inset-0 rounded-full blur-3xl bg-blue-600/8 scale-75 pointer-events-none"
              aria-hidden="true"
            />

            {/* Owl — centered anchor of the composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.7, type: "spring", bounce: 0.3 }}
              className="relative z-10"
            >
              <OwlMascot size={260} className="drop-shadow-2xl" />
            </motion.div>

            {/* Floating card — top left: "Do this next" */}
            <motion.div
              variants={floatCard(0.7)}
              initial="hidden"
              animate="show"
              className="absolute top-8 left-0 lg:-left-4 z-20 max-w-[200px]"
              aria-hidden="true"
            >
              <div className="glass-card rounded-2xl p-3.5 border border-amber-500/20 bg-amber-500/[0.06] shadow-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
                    Do this next
                  </span>
                </div>
                <p className="text-xs text-foreground font-medium leading-snug">
                  Write your launch post for X
                </p>
                <div className="mt-2 h-1 w-full rounded-full bg-white/5">
                  <div className="h-full w-3/5 rounded-full bg-amber-400/60" />
                </div>
              </div>
            </motion.div>

            {/* Floating card — right: live stats */}
            <motion.div
              variants={floatCard(0.85)}
              initial="hidden"
              animate="show"
              className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-2 z-20"
              aria-hidden="true"
            >
              <div className="glass-card rounded-2xl p-3.5 border border-emerald-500/20 bg-emerald-500/[0.05] shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                    Launch stats
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-xs text-muted-foreground">Link clicks</span>
                    <span className="text-xs font-bold text-foreground">1,247</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-xs text-muted-foreground">Posts sent</span>
                    <span className="text-xs font-bold text-foreground">12</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-xs text-muted-foreground">Signups</span>
                    <span className="text-xs font-bold text-emerald-400">+84</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating card — bottom: tasks done */}
            <motion.div
              variants={floatCard(1.0)}
              initial="hidden"
              animate="show"
              className="absolute bottom-10 left-4 lg:left-0 z-20 max-w-[210px]"
              aria-hidden="true"
            >
              <div className="glass-card rounded-2xl p-3.5 border border-blue-500/20 bg-blue-500/[0.05] shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
                    Launch plan
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/5">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
                  </div>
                  <span className="text-xs font-semibold text-foreground shrink-0">72%</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5">
                  8 of 11 launch tasks done
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
