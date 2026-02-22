"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Pause, ChevronLeft, ChevronRight,
  CheckCircle2, AlertCircle, BarChart3, Twitter,
  FolderOpen, CalendarClock, FileText, Check, Zap,
  TrendingUp, Clock, Link2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6000;

// ─────────────────────────────────────────────────────────────────────────────
// Slide 1 — Create a Project
// ─────────────────────────────────────────────────────────────────────────────
function ProjectSlide() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 950),
      setTimeout(() => setStep(3), 1500),
      setTimeout(() => setStep(4), 2200),
      setTimeout(() => setStep(5), 2900),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-3 font-mono text-xs">
      {/* Form card */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 space-y-3">
        <p className="text-[10px] text-blue-400 font-semibold uppercase tracking-widest">
          New Launch Project
        </p>

        {/* App name */}
        <div>
          <p className="text-[10px] text-muted-foreground mb-1">App name</p>
          <div className="h-8 rounded-lg border border-white/10 bg-white/5 px-3 flex items-center overflow-hidden">
            <TypedText text="SnapCalc" delay={500} className="text-foreground" />
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={step >= 2 ? { opacity: 1, height: "auto" } : {}}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[10px] text-muted-foreground mb-1">Tagline</p>
          <div className="h-8 rounded-lg border border-white/10 bg-white/5 px-3 flex items-center">
            <TypedText text="Math, but make it visual." delay={1050} className="text-foreground" />
          </div>
        </motion.div>

        {/* Status + date row */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={step >= 3 ? { opacity: 1, height: "auto" } : {}}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 gap-2"
        >
          <div>
            <p className="text-[10px] text-muted-foreground mb-1">Status</p>
            <div className="h-8 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-400">Pre-launch</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground mb-1">Launch date</p>
            <div className="h-8 rounded-lg border border-white/10 bg-white/5 px-3 flex items-center text-muted-foreground">
              Mar 15, 2025
            </div>
          </div>
        </motion.div>

        {/* Create button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={step >= 4 ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={step >= 4 ? { scale: [1, 0.96, 1] } : {}}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="w-full h-9 rounded-lg bg-blue-600 flex items-center justify-center gap-2 text-white text-xs font-semibold cursor-pointer"
          >
            <FolderOpen className="h-3.5 w-3.5" />
            Create Project
          </motion.div>
        </motion.div>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center gap-3"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <div>
              <p className="text-emerald-400 font-semibold">Project created!</p>
              <p className="text-muted-foreground text-[10px]">
                Timeline + asset hub are ready
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 2 — Timeline & Next Best Action
// ─────────────────────────────────────────────────────────────────────────────
function TimelineSlide() {
  const [checked, setChecked] = useState<number[]>([]);
  const [showNba, setShowNba] = useState(false);

  const tasks = [
    { label: "Upload your screenshots & app preview", done: true },
    { label: "Write a one-liner that describes your app", done: true },
    { label: "Write your launch post for X (Twitter)", done: false, next: true },
    { label: "Share in the r/SideProject community", done: false },
    { label: "Post on IndieHackers", done: false },
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setShowNba(true), 400);
    const t2 = setTimeout(() => setChecked([2]), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="space-y-2.5 text-xs font-mono">
      {/* NBA banner */}
      <AnimatePresence>
        {showNba && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-3 flex items-center gap-3"
          >
            <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-amber-400 font-semibold">👉 Do this next</p>
              <p className="text-foreground mt-0.5 truncate">Write your launch post for X (Twitter)</p>
            </div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="shrink-0 text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-lg"
            >
              Start →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Task list */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl divide-y divide-white/[0.05]">
        {tasks.map((task, i) => {
          const isDone = task.done || checked.includes(i);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 transition-colors",
                task.next && !isDone && "bg-blue-500/5"
              )}
            >
              <motion.div
                animate={isDone ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
                className={cn(
                  "w-4 h-4 rounded border shrink-0 flex items-center justify-center transition-all",
                  isDone
                    ? "bg-emerald-500 border-emerald-500"
                    : task.next
                    ? "border-blue-400"
                    : "border-white/20"
                )}
              >
                {isDone && <Check className="h-2.5 w-2.5 text-white" />}
              </motion.div>
              <span
                className={cn(
                  "flex-1 transition-all",
                  isDone ? "line-through text-muted-foreground" : "",
                  task.next && !isDone ? "text-foreground font-medium" : ""
                )}
              >
                {task.label}
              </span>
              <span className="text-[9px] text-muted-foreground shrink-0">
                {i < 2 ? "Before launch" : i < 4 ? "Launch day" : "After launch"}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-white/5">
          <motion.div
            initial={{ width: "40%" }}
            animate={{ width: checked.length ? "60%" : "40%" }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
          />
        </div>
        <span className="text-[10px] text-muted-foreground">
          {checked.length ? "60%" : "40%"} complete
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 3 — Post Generator
// ─────────────────────────────────────────────────────────────────────────────
function PostGeneratorSlide() {
  const [template, setTemplate] = useState("Launch Thread");
  const [showVariations, setShowVariations] = useState(false);
  const [copied, setCopied] = useState(false);

  const variants = [
    "🚀 Just launched SnapCalc — turns any photo into instant calculations.\n\nBuilt this because I was sick of manual math when measuring spaces.\n\nThread 🧵",
    "After 3 months building in public, SnapCalc is finally live 📸→🔢\n\nHere's what I learned shipping a computer vision app solo:",
    "Something I've wanted to build for years: take a photo, get the math.\n\nShipping it today. Here's the story 👇",
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setShowVariations(true), 1400);
    return () => clearTimeout(t1);
  }, []);

  return (
    <div className="space-y-3 text-xs font-mono">
      {/* Template selector */}
      <div className="flex items-center gap-2">
        <p className="text-[10px] text-muted-foreground shrink-0">Template:</p>
        <div className="flex gap-1.5 flex-wrap">
          {["Launch Thread", "Build in Public", "Problem-Solution"].map((t) => (
            <button
              key={t}
              onClick={() => setTemplate(t)}
              className={cn(
                "text-[10px] px-2 py-1 rounded-lg border transition-all",
                template === t
                  ? "bg-blue-600/20 border-blue-500/40 text-blue-300"
                  : "bg-white/[0.03] border-white/[0.06] text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Variations */}
      <AnimatePresence>
        {showVariations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            {variants.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={cn(
                  "rounded-xl border p-3",
                  i === 0
                    ? "bg-blue-500/5 border-blue-500/25"
                    : "bg-white/[0.02] border-white/[0.05]"
                )}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shrink-0" />
                  <span className="text-[10px] font-semibold text-foreground">
                    Variation {i + 1}
                  </span>
                  {i === 0 && (
                    <span className="text-[9px] bg-blue-500/20 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded ml-auto">
                      Best match
                    </span>
                  )}
                </div>
                {i === 0 ? (
                  <TypedText
                    text={text}
                    delay={1500}
                    speed={18}
                    className="text-muted-foreground leading-relaxed whitespace-pre-line"
                  />
                ) : (
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-2">
                    {text}
                  </p>
                )}
                {i === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className="flex gap-1.5 mt-2"
                  >
                    <button className="text-[9px] px-2 py-0.5 rounded border border-white/10 text-muted-foreground hover:text-foreground">
                      Edit
                    </button>
                    <motion.button
                      onClick={() => setCopied(true)}
                      animate={copied ? { scale: [1, 0.95, 1] } : {}}
                      className={cn(
                        "text-[9px] px-2 py-0.5 rounded border transition-colors",
                        copied
                          ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                          : "border-blue-500/30 text-blue-400 bg-blue-500/10"
                      )}
                    >
                      {copied ? "Copied ✓" : "Copy"}
                    </motion.button>
                    <button className="text-[9px] px-2 py-0.5 rounded border border-white/10 text-muted-foreground hover:text-foreground ml-auto">
                      Schedule →
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 4 — Schedule & Distribute
// ─────────────────────────────────────────────────────────────────────────────
function SchedulerSlide() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-3 text-xs font-mono">
      {/* Compose area */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600" />
          <span className="text-[10px] font-semibold">Compose for X (Twitter)</span>
          <div className="ml-auto flex items-center gap-1 text-[9px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Connected
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 min-h-[56px]">
          <TypedText
            text="🚀 Just launched SnapCalc — turns any photo into instant calculations."
            delay={200}
            speed={22}
            className="text-foreground leading-relaxed"
          />
        </div>

        {/* Tracking link */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex items-center gap-2"
            >
              <Link2 className="h-3 w-3 text-blue-400 shrink-0" />
              <span className="text-blue-400 text-[10px] font-mono truncate">
                applauncos.com/l/snapcalc-launch
              </span>
              <span className="text-[9px] text-emerald-400 shrink-0 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                Tracked ✓
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Schedule row */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Clock className="h-3 w-3 text-muted-foreground shrink-0" />
              <div className="flex-1 h-7 rounded-lg border border-white/10 bg-white/5 px-2 flex items-center text-[10px] text-muted-foreground">
                Tomorrow 9:00 AM PST
              </div>
              <motion.button
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ delay: 0.4, duration: 0.25 }}
                className="shrink-0 text-[10px] font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-lg"
              >
                Schedule
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Success confirmation */}
      <AnimatePresence>
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-3 flex items-center gap-3"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <div>
              <p className="text-emerald-400 font-semibold">Scheduled for tomorrow 9:00 AM PST</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Will post automatically · every click is tracked
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Queue */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
        <p className="text-[10px] text-muted-foreground mb-2">Your upcoming posts (3 scheduled)</p>
        <div className="space-y-1.5">
          {[
            { time: "Today 6:00 PM", label: "Teaser tweet", status: "Sending…" },
            { time: "Tomorrow 9:00 AM", label: "Launch thread", status: "Scheduled", active: true },
            { time: "Tomorrow 3:00 PM", label: "Follow-up", status: "Draft" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex items-center gap-2 text-[10px] px-2 py-1.5 rounded-lg",
                item.active ? "bg-blue-500/10 border border-blue-500/20" : ""
              )}
            >
              <Twitter className="h-3 w-3 text-sky-400 shrink-0" />
              <span className="text-muted-foreground w-28 shrink-0">{item.time}</span>
              <span className="flex-1">{item.label}</span>
              <span className={cn(
                "px-1.5 py-0.5 rounded text-[9px]",
                item.status === "Scheduled" ? "text-blue-400 bg-blue-500/10" :
                item.status === "Sending…" ? "text-amber-400 bg-amber-500/10" :
                "text-muted-foreground bg-white/5"
              )}>
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 5 — Performance Dashboard
// ─────────────────────────────────────────────────────────────────────────────
function DashboardSlide() {
  const [counts, setCounts] = useState({ posts: 0, clicks: 0, conv: 0, progress: 0 });

  useEffect(() => {
    const targets = { posts: 12, clicks: 1247, conv: 4.8, progress: 72 };
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const pct = Math.min(frame / total, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      setCounts({
        posts: Math.round(targets.posts * ease),
        clicks: Math.round(targets.clicks * ease),
        conv: parseFloat((targets.conv * ease).toFixed(1)),
        progress: Math.round(targets.progress * ease),
      });
      if (frame >= total) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const channels = [
    { name: "X (Twitter)", clicks: 640, pct: 85, color: "from-sky-600 to-sky-400" },
    { name: "Product Hunt", clicks: 380, pct: 58, color: "from-orange-600 to-amber-400" },
    { name: "IndieHackers", clicks: 227, pct: 38, color: "from-purple-600 to-purple-400" },
  ];

  const barData = [35, 52, 41, 68, 55, 80, 62, 88, 70, 95, 78, 91];

  return (
    <div className="space-y-3 text-xs font-mono">
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Posts sent", val: counts.posts, suffix: "", color: "text-blue-400", icon: Twitter },
          { label: "Link clicks", val: counts.clicks.toLocaleString(), suffix: "", color: "text-emerald-400", icon: TrendingUp },
          { label: "Signed up", val: counts.conv, suffix: "%", color: "text-amber-400", icon: Zap },
          { label: "Plan done", val: counts.progress, suffix: "%", color: "text-purple-400", icon: CheckCircle2 },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-2.5">
            <s.icon className={`h-3 w-3 ${s.color} mb-1.5`} />
            <p className={`text-base font-black ${s.color} leading-none`}>
              {s.val}{s.suffix}
            </p>
            <p className="text-[9px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
        <p className="text-[10px] text-muted-foreground mb-2">People clicking your links each day</p>
        <div className="flex items-end gap-1 h-14">
          {barData.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/60 to-blue-400/30"
            />
          ))}
        </div>
      </div>

      {/* Channel breakdown */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
        <p className="text-[10px] text-muted-foreground mb-2">Which platform sent the most visitors</p>
        <div className="space-y-2">
          {channels.map((c, i) => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground w-22 shrink-0">{c.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.pct}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                />
              </div>
              <span className="text-[10px] text-muted-foreground w-8 text-right">{c.clicks}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Typewriter helper
// ─────────────────────────────────────────────────────────────────────────────
function TypedText({
  text, delay = 0, speed = 28, className = "",
}: {
  text: string; delay?: number; speed?: number; className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const t = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(t);
      }, speed);
      return () => clearInterval(t);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay, speed]);

  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide data
// ─────────────────────────────────────────────────────────────────────────────
const slides = [
  {
    id: "project",
    step: "01",
    icon: FolderOpen,
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    title: "Tell us about your app",
    description:
      "Start by entering your app's name, what it does, and when you want to launch. Think of it like filling in a profile — takes about 2 minutes.",
    highlights: [
      "Works for apps, websites, SaaS, games — anything",
      "Add your App Store or website link",
      "Set your launch date so we can count down with you",
    ],
    content: <ProjectSlide />,
  },
  {
    id: "timeline",
    step: "02",
    icon: CalendarClock,
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    title: "Follow your step-by-step launch plan",
    description:
      "We break your launch into three simple stages — Before Launch, Launch Day, and After Launch. Each stage has a checklist. You always see one clear \"do this next\" prompt so you're never staring at a blank screen wondering what to do.",
    highlights: [
      "Before Launch: get everything ready",
      "Launch Day: post, share, and go live",
      "After Launch: follow up and keep the momentum",
    ],
    content: <TimelineSlide />,
  },
  {
    id: "posts",
    step: "03",
    icon: FileText,
    accent: "text-green-400",
    accentBg: "bg-green-500/10",
    accentBorder: "border-green-500/20",
    title: "Write your launch posts in seconds",
    description:
      "Not sure what to write on social media? Just pick a style — like \"launch announcement\" or \"tell the story behind it\" — and we write 3 ready-to-use posts for you. Pick your favourite, tweak it if you want, and copy it.",
    highlights: [
      "9 post styles to choose from (no blank page)",
      "Get 3 different versions — pick the one that feels right",
      "One click to copy, then paste anywhere",
    ],
    content: <PostGeneratorSlide />,
  },
  {
    id: "schedule",
    step: "04",
    icon: Twitter,
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/20",
    title: "Post to X (Twitter) without leaving the app",
    description:
      "Connect your X account once, then write and schedule posts right here. Pick a date and time, hit schedule, and it posts automatically — even while you sleep. Every link is automatically tracked so you know which post sent you visitors.",
    highlights: [
      "Connect X once — post forever from here",
      "Schedule posts ahead of time, they send automatically",
      "Every link is tracked so you know what worked",
    ],
    content: <SchedulerSlide />,
  },
  {
    id: "dashboard",
    step: "05",
    icon: BarChart3,
    accent: "text-purple-400",
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-500/20",
    title: "See what's actually working",
    description:
      "After you launch, the dashboard shows you a simple summary — how many people clicked your links, which platform sent the most visitors, and how far through your launch plan you are. No spreadsheets, no guessing.",
    highlights: [
      "See how many people clicked your links each day",
      "Know which platform (Twitter, Reddit, etc.) worked best",
      "Watch your launch progress in real time",
    ],
    content: <DashboardSlide />,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main DemoShowcase component
// ─────────────────────────────────────────────────────────────────────────────
export function DemoShowcase() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
    setProgress(0);
  }, []);

  // Auto-advance + progress bar
  useEffect(() => {
    if (!playing) return;
    setProgress(0);
    const tick = 50;
    const steps = SLIDE_MS / tick;
    let elapsed = 0;

    const id = setInterval(() => {
      elapsed++;
      setProgress((elapsed / steps) * 100);
      if (elapsed >= steps) {
        goTo(current + 1);
      }
    }, tick);

    return () => clearInterval(id);
  }, [current, playing, goTo]);

  const slide = slides[current];

  return (
    <section
      className="py-24 lg:py-32 relative"
      id="demo"
      aria-labelledby="demo-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Product demo
          </p>
          <h2
            id="demo-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Here&rsquo;s exactly how it works.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Walk through 5 steps that take you from &ldquo;I just built something&rdquo; to
            &ldquo;people are actually finding it.&rdquo; No tech knowledge needed.
          </p>
        </motion.div>

        {/* Player */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] glow-blue">

            {/* Player chrome bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              {/* Dot nav */}
              <div className="flex gap-1.5 mx-auto" role="tablist" aria-label="Demo slides">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Slide ${i + 1}: ${s.title}`}
                    onClick={() => { goTo(i); setPlaying(false); }}
                    className={cn(
                      "transition-all duration-300 rounded-full",
                      i === current
                        ? "w-6 h-2 bg-blue-400"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
              <div className="text-[10px] text-muted-foreground font-mono">
                {current + 1}/{slides.length}
              </div>
            </div>

            {/* Main content area */}
            <div className="grid lg:grid-cols-5 min-h-[440px]">
              {/* Left — text */}
              <div className="lg:col-span-2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${current}`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step badge */}
                    <div className={cn(
                      "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-semibold mb-4",
                      slide.accentBg, slide.accentBorder, slide.accent
                    )}>
                      <slide.icon className="h-3 w-3" />
                      Step {slide.step}
                    </div>

                    <h3 className="text-xl font-black tracking-tight mb-3 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {slide.description}
                    </p>

                    <ul className="space-y-2">
                      {slide.highlights.map((h, i) => (
                        <motion.li
                          key={h}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.08 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full shrink-0",
                            slide.accentBg.replace("/10", "/80")
                          )} />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next controls */}
                <div className="flex items-center gap-2 mt-6">
                  <button
                    onClick={() => { goTo(current - 1); setPlaying(false); }}
                    className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setPlaying((p) => !p)}
                    className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-colors text-sm font-medium"
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? (
                      <><Pause className="h-4 w-4" /> Pause</>
                    ) : (
                      <><Play className="h-4 w-4" /> Play</>
                    )}
                  </button>
                  <button
                    onClick={() => { goTo(current + 1); setPlaying(false); }}
                    className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right — animated UI */}
              <div className="lg:col-span-3 p-5 lg:p-6 overflow-hidden">
                {/* Fake URL bar */}
                <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <span className="text-[10px] text-muted-foreground font-mono flex-1">
                    app.applauncos.com/{slide.id}
                  </span>
                  <span className={cn(
                    "text-[10px] font-semibold px-2 py-0.5 rounded border",
                    slide.accentBg, slide.accentBorder, slide.accent
                  )}>
                    LIVE
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`ui-${current}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {slide.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-0.5 bg-white/[0.04] relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Slide labels below */}
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { goTo(i); setPlaying(false); }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all border",
                  i === current
                    ? `${s.accentBg} ${s.accentBorder} ${s.accent}`
                    : "bg-white/[0.02] border-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.05]"
                )}
              >
                <s.icon className="h-3 w-3" />
                {["Your App", "Launch Plan", "Write Posts", "Schedule", "Results"][slides.indexOf(s)] ?? s.title.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
