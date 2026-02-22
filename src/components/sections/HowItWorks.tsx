"use client";

import { motion } from "framer-motion";
import { FolderOpen, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FolderOpen,
    title: "Create a Launch Project",
    description:
      "Set up your app with name, tagline, links, category, target audience, and launch date. App Launch OS creates a dedicated cockpit for every project.",
    accent: "from-blue-600/20 to-blue-500/10",
    iconColor: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    number: "02",
    icon: Zap,
    title: "Run the Timeline",
    description:
      "Follow an opinionated Pre-Launch → Launch Day → Post-Launch playbook. Your \"Next Best Action\" always tells you exactly what to do next — no guessing.",
    accent: "from-amber-600/20 to-amber-500/10",
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Distribute + Track",
    description:
      "Write and schedule launch posts, auto-insert UTMs, share to X and launch directories, then watch clicks, conversions, and channel performance roll in.",
    accent: "from-emerald-600/20 to-emerald-500/10",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.03, 0.26, 1] } },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              The workflow
            </p>
            <h2
              id="how-it-works-heading"
              className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            >
              Launch in 3 steps.
              <br />
              <span className="text-gradient">Not 30 tabs.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Most devs know how to build. Most don't have a system to launch.
              App Launch OS is that system.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className={`relative rounded-2xl border ${step.border} bg-gradient-to-br ${step.accent} p-6 lg:p-8`}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 -right-4 w-8 z-10"
                    aria-hidden="true"
                  >
                    <div className="h-px bg-gradient-to-r from-white/20 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/20 rotate-45" />
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-2.5 rounded-xl bg-white/5 border border-white/10`}
                  >
                    <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                  </div>
                  <span className="text-3xl font-black text-white/10 leading-none mt-1">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            variants={fadeUp}
            className="text-center text-muted-foreground text-sm mt-10"
          >
            Every step happens inside one app.{" "}
            <a href="#waitlist" className="text-blue-400 hover:underline">
              Get early access →
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
