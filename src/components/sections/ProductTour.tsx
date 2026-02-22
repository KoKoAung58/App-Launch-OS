"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban, CalendarClock, Archive, Twitter, BarChart3,
  CheckSquare, Clock, AlertCircle, TrendingUp, ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const screens = [
  {
    id: "projects",
    label: "Projects Board",
    icon: FolderKanban,
    description: "All your launches in one place",
    content: <ProjectsScreen />,
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: CalendarClock,
    description: "Next Best Action always visible",
    content: <TimelineScreen />,
  },
  {
    id: "assets",
    label: "Asset Hub",
    icon: Archive,
    description: "Every file, copy, and asset organized",
    content: <AssetsScreen />,
  },
  {
    id: "thread",
    label: "Thread Builder",
    icon: Twitter,
    description: "Write, preview, schedule posts",
    content: <ThreadScreen />,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    description: "Clicks, conversions, top posts",
    content: <DashboardScreen />,
  },
];

function ProjectsScreen() {
  const projects = [
    { name: "SnapCalc", type: "iOS app", status: "Launching soon", color: "bg-blue-500", progress: 80 },
    { name: "TaskOS", type: "SaaS", status: "Pre-launch", color: "bg-purple-500", progress: 45 },
    { name: "GameDev Pro", type: "Game", status: "Planning", color: "bg-emerald-500", progress: 15 },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">My Projects</span>
        <button className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">+ New Project</button>
      </div>
      {projects.map((p) => (
        <div key={p.name} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
            {p.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{p.name}</span>
              <span className="text-[10px] text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded">{p.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${p.progress}%` }} />
              </div>
              <span className="text-[10px] text-muted-foreground shrink-0">{p.progress}%</span>
            </div>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${
            p.status === "Launching soon" ? "text-amber-400 bg-amber-500/10 border-amber-500/20" :
            p.status === "Pre-launch" ? "text-blue-400 bg-blue-500/10 border-blue-500/20" :
            "text-slate-400 bg-white/5 border-white/10"
          }`}>{p.status}</span>
        </div>
      ))}
    </div>
  );
}

function TimelineScreen() {
  const tasks = [
    { label: "Write Product Hunt tagline", done: true, phase: "Pre-launch" },
    { label: "Upload screenshots + demo video", done: true, phase: "Pre-launch" },
    { label: "Prepare launch tweet thread", done: false, phase: "Launch Day", next: true },
    { label: "Post to r/SideProject", done: false, phase: "Launch Day" },
    { label: "Send to IndieHackers community", done: false, phase: "Post-launch" },
  ];
  return (
    <div className="space-y-3">
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex items-center gap-3">
        <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-amber-400">Next Best Action</p>
          <p className="text-sm text-foreground mt-0.5">Prepare your launch tweet thread</p>
        </div>
        <button className="ml-auto text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 shrink-0">Start →</button>
      </div>
      <div className="space-y-2">
        {tasks.map((t) => (
          <div key={t.label} className={cn(
            "flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors",
            t.next ? "bg-blue-500/10 border border-blue-500/20" : "bg-white/[0.02]"
          )}>
            <div className={cn(
              "w-4 h-4 rounded border shrink-0 flex items-center justify-center",
              t.done ? "bg-emerald-500 border-emerald-500" : "border-white/20"
            )}>
              {t.done && <CheckSquare className="h-3 w-3 text-white" />}
            </div>
            <span className={t.done ? "line-through text-muted-foreground" : ""}>{t.label}</span>
            <span className="ml-auto text-[10px] text-muted-foreground shrink-0">{t.phase}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssetsScreen() {
  const assets = [
    { name: "App Icon", type: "PNG", size: "1024px", color: "bg-blue-500/20 text-blue-400", emoji: "🎨" },
    { name: "Screenshots (5)", type: "PNG", size: "6.5 MB", color: "bg-purple-500/20 text-purple-400", emoji: "📸" },
    { name: "Demo Video", type: "MP4", size: "12 MB", color: "bg-rose-500/20 text-rose-400", emoji: "🎬" },
    { name: "Press Kit", type: "ZIP", size: "20 MB", color: "bg-amber-500/20 text-amber-400", emoji: "📦" },
  ];
  const snippets = [
    { label: "Elevator pitch", text: "SnapCalc turns any photo into instant calculations..." },
    { label: "Tagline", text: "Math, but make it visual." },
  ];
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Media Files</p>
        <div className="grid grid-cols-2 gap-2">
          {assets.map((a) => (
            <div key={a.name} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 flex items-center gap-2">
              <span className="text-base">{a.emoji}</span>
              <div className="min-w-0">
                <p className="text-xs font-medium truncate">{a.name}</p>
                <p className="text-[10px] text-muted-foreground">{a.type} · {a.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Copy Snippets</p>
        {snippets.map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 mb-2 flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] text-blue-400 font-semibold mb-0.5">{s.label}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">{s.text}</p>
            </div>
            <button className="text-[10px] text-muted-foreground shrink-0 hover:text-foreground">Copy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThreadScreen() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <select className="text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-foreground" defaultValue="launch-thread">
          <option value="launch-thread">Launch Thread</option>
          <option value="build-in-public">Build in Public</option>
          <option value="problem-solution">Problem-Solution</option>
        </select>
        <span className="text-[10px] text-muted-foreground ml-auto">3 variations</span>
      </div>
      {[1,2,3].map((i) => (
        <div key={i} className={cn(
          "bg-white/[0.03] border rounded-xl p-3",
          i === 1 ? "border-blue-500/30 bg-blue-500/5" : "border-white/[0.06]"
        )}>
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xs font-semibold">You</span>
                {i === 1 && <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">Variation 1</span>}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {i === 1 ? "🚀 Just launched SnapCalc — turns any photo into instant calculations.\n\nBuilt it because I was tired of manual math when measuring spaces." :
                 i === 2 ? "After 3 months of building in public, SnapCalc is finally live! 📸→🔢" :
                 "Something I've wanted for years: take a photo, get the math instantly. Built it. Shipping today."}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-muted-foreground">{i === 1 ? "240" : i === 2 ? "187" : "163"}/280</span>
                <div className="flex gap-1 ml-auto">
                  <button className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Edit</button>
                  <button className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="w-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl py-2.5 transition-colors">
        Schedule this thread →
      </button>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Posts Published", val: "12", icon: Twitter, color: "text-blue-400", bg: "bg-blue-500/10" },
          { label: "Total Clicks", val: "1,247", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
          { label: "Conversion Rate", val: "4.8%", icon: ExternalLink, color: "text-amber-400", bg: "bg-amber-500/10" },
          { label: "Timeline", val: "72%", icon: Clock, color: "text-purple-400", bg: "bg-purple-500/10" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
            <div className={`w-6 h-6 rounded-lg ${s.bg} flex items-center justify-center mb-2`}>
              <s.icon className={`h-3 w-3 ${s.color}`} />
            </div>
            <p className={`text-xl font-black ${s.color}`}>{s.val}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
        <p className="text-xs text-muted-foreground mb-2">Clicks by channel</p>
        <div className="space-y-2">
          {[
            { channel: "X (Twitter)", clicks: 640, pct: 85, color: "from-sky-600 to-sky-400" },
            { channel: "Product Hunt", clicks: 380, pct: 60, color: "from-orange-600 to-amber-400" },
            { channel: "IndieHackers", clicks: 227, pct: 40, color: "from-purple-600 to-purple-400" },
          ].map((c) => (
            <div key={c.channel} className="flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground w-24 shrink-0">{c.channel}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/5">
                <div className={`h-full rounded-full bg-gradient-to-r ${c.color}`} style={{ width: `${c.pct}%` }} />
              </div>
              <span className="text-[11px] text-muted-foreground w-8 text-right">{c.clicks}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductTour() {
  const [active, setActive] = useState(screens[0].id);
  const activeScreen = screens.find((s) => s.id === active)!;

  return (
    <section
      className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"
      aria-labelledby="product-tour-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Product tour
          </p>
          <h2
            id="product-tour-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            See it in action.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Click through the key screens. No sign-up required.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab nav */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-8"
            role="tablist"
            aria-label="Product tour screens"
          >
            {screens.map((screen) => (
              <button
                key={screen.id}
                role="tab"
                aria-selected={active === screen.id}
                aria-controls={`panel-${screen.id}`}
                onClick={() => setActive(screen.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                  active === screen.id
                    ? "bg-blue-600/20 text-blue-300 border-blue-500/40"
                    : "bg-white/[0.03] text-muted-foreground border-white/[0.06] hover:bg-white/[0.06] hover:text-foreground"
                )}
              >
                <screen.icon className="h-3.5 w-3.5" />
                {screen.label}
              </button>
            ))}
          </div>

          {/* Screen panel */}
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/50" aria-hidden="true" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" aria-hidden="true" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" aria-hidden="true" />
              <div className="flex-1 flex items-center justify-center">
                <div className="h-5 px-4 rounded-md bg-white/5 flex items-center">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    app.applauncos.com/{activeScreen.id}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden md:flex w-44 shrink-0 flex-col border-r border-white/[0.06] p-3 gap-1">
                {screens.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-left transition-colors",
                      s.id === active
                        ? "bg-blue-600/20 text-blue-300"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    <s.icon className="h-3.5 w-3.5 shrink-0" />
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Content area */}
              <div
                id={`panel-${activeScreen.id}`}
                role="tabpanel"
                className="flex-1 p-5 min-h-[380px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-4">
                      <h3 className="font-bold text-sm">{activeScreen.label}</h3>
                      <p className="text-xs text-muted-foreground">{activeScreen.description}</p>
                    </div>
                    {activeScreen.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
