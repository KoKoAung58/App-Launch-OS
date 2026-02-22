"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, Zap } from "lucide-react";
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

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 bg-hero-glow pointer-events-none"
        aria-hidden="true"
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <Badge className="gap-1.5 px-3 py-1 text-xs font-semibold cursor-default">
              <Zap className="h-3 w-3" />
              Now accepting waitlist signups
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={0.05}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
          >
            Stop shipping
            <br />
            <span className="text-gradient">to crickets.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            App Launch OS is the all-in-one launch cockpit that turns chaos
            into a launch system —{" "}
            <span className="text-foreground font-medium">
              timeline, assets, posting, tracking, and dashboards
            </span>
            . Built for indie devs who want to ship and be heard.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.15}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
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
              <span>Join 300+ indie devs on the waitlist</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">★★★★★</span>
              <span>Loved by founders</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Owl mascot floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
          className="absolute top-20 right-8 lg:right-20 hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-blue-500/10 rounded-full scale-150" />
            <OwlMascot size={220} />
          </div>
        </motion.div>

        {/* Hero UI mockup preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 0.03, 0.26, 1] }}
          className="mt-20 max-w-5xl mx-auto"
          aria-label="App Launch OS interface preview"
        >
          <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] glow-blue">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <div className="flex-1 mx-4">
                <div className="h-5 w-48 rounded-md bg-white/5 mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    app.applauncos.com/dashboard
                  </span>
                </div>
              </div>
            </div>
            {/* Fake dashboard */}
            <div className="p-6 grid grid-cols-4 gap-4">
              {/* Sidebar */}
              <div className="col-span-1 space-y-2">
                <div className="h-7 w-full rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded bg-blue-400/60" />
                  <div className="h-2 w-16 rounded bg-blue-300/30" />
                </div>
                {["Timeline", "Assets", "Posts", "Analytics"].map((item) => (
                  <div
                    key={item}
                    className="h-7 w-full rounded-lg bg-white/[0.03] flex items-center px-3 gap-2"
                  >
                    <div className="w-3 h-3 rounded bg-white/10" />
                    <div className="h-2 w-12 rounded bg-white/10" />
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-3 space-y-3">
                <div className="flex gap-3">
                  {[
                    { label: "Posts", val: "12", color: "text-blue-400" },
                    { label: "Clicks", val: "847", color: "text-emerald-400" },
                    { label: "Conv.", val: "4.2%", color: "text-amber-400" },
                    { label: "Progress", val: "68%", color: "text-purple-400" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.06] p-3"
                    >
                      <div
                        className={`text-lg font-bold ${stat.color}`}
                      >
                        {stat.val}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 h-24">
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-1.5 h-full pb-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/40 to-blue-400/20"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                    <div className="h-2 w-24 rounded bg-white/10 mb-2" />
                    <div className="space-y-1.5">
                      {[85, 62, 45].map((w, i) => (
                        <div key={i} className="h-1.5 rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                            style={{ width: `${w}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
                      →
                    </div>
                    <div>
                      <div className="h-2 w-20 rounded bg-emerald-400/30 mb-1.5" />
                      <div className="h-1.5 w-14 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
