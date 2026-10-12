"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Server, Database, ShoppingBag, Zap, Cloud, Layers, Lock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react"

export function About() {
  const [activeTab, setActiveTab] = useState<string>("ai")

  const disciplines = [
    {
      id: "ai",
      title: "AI Engineering & Agents",
      icon: Cpu,
      summary: "Production LLM agents, GPT-4 tool calling, conversational memory, token cost controls, and custom tool dispatch.",
      highlights: [
        "OpenAI GPT-4 API & Function Calling Schemas",
        "Context Window Management & Conversational History",
        "Token Usage Tracking & Cost Control Enforcements",
        "Autonomous Structured JSON Parameters & Workflows",
      ],
      badge: "Signature Focus",
    },
    {
      id: "backend",
      title: "Backend Architecture & APIs",
      icon: Server,
      summary: "High-throughput APIs, microservices, authentication systems, and database optimization.",
      highlights: [
        "Python / Django & NestJS Microservices",
        "RESTful & WebSocket Protocol Architectures",
        "JWT Authentication, OTP Verification & RBAC",
        "PostgreSQL Query Optimization (800ms → 180ms)",
      ],
      badge: "Core Strength",
    },
    {
      id: "fullstack",
      title: "Full-Stack Web Platforms",
      icon: Layers,
      summary: "Modern web platforms built with React Server Components, high performance, and atomic state management.",
      highlights: [
        "Next.js App Router Platforms & Edge Rendering",
        "Interactive Dashboards & Real-time Telemetry UI",
        "Cryptographic Webhooks & Payment Gateway Integrations",
        "Cross-platform Responsive Design for All Screen Sizes",
      ],
      badge: "Platform Engineering",
    },
    {
      id: "databases",
      title: "Database Systems & Storage",
      icon: Database,
      summary: "High-speed relational indexing, in-memory caching, and vector embedding stores.",
      highlights: [
        "PostgreSQL Composite Indexing & Partial Views",
        "Redis In-Memory State & Pub/Sub Messaging",
        "Pinecone & Chroma Vector Databases for RAG",
        "Transaction Locks & Concurrency Safeguards",
      ],
      badge: "Data Layer",
    },
    {
      id: "cloud",
      title: "Cloud & Real-Time Systems",
      icon: Cloud,
      summary: "Containerized deployment, real-time WebSockets, and media storage pipelines.",
      highlights: [
        "AWS S3 Content Delivery & Asset Processing",
        "Docker Microservice Orchestration",
        "Socket.io Real-time Messaging & Notifications",
        "Automated CI/CD Workflows & Production Deployments",
      ],
      badge: "Infrastructure",
    },
  ]

  const activeData = disciplines.find((d) => d.id === activeTab) || disciplines[0]

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-slate-900/80">
      <div className="container mx-auto px-4 max-w-6xl space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Engineering Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Engineering Discipline Matrix
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed font-mono">
            I construct end-to-end software systems where AI model capabilities seamlessly align with production-grade backend logic and secure data storage.
          </p>
        </motion.div>

        {/* Interactive Profile Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs List */}
          <div className="lg:col-span-5 space-y-2.5">
            {disciplines.map((d) => {
              const Icon = d.icon
              const isActive = activeTab === d.id

              return (
                <button
                  key={d.id}
                  onClick={() => setActiveTab(d.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900/90 border-sky-500/60 shadow-[0_0_25px_-5px_rgba(56,189,248,0.25)]"
                      : "bg-slate-950/50 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-transparent pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 relative z-10">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isActive ? "bg-sky-500/20 text-sky-400" : "bg-slate-800/60 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-mono text-sm font-bold ${isActive ? "text-sky-300" : "text-slate-200"}`}>
                        {d.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">{d.badge}</span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded transition-transform group-hover:translate-x-1 ${
                      isActive ? "bg-sky-500/20 text-sky-300" : "text-slate-600"
                    }`}
                  >
                    →
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Details Box */}
          <div className="lg:col-span-7 tech-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                      <activeData.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-mono text-slate-100">{activeData.title}</h3>
                      <span className="text-xs font-mono text-emerald-400">{activeData.badge}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYSTEM READY</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{activeData.summary}</p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Engineering Capabilities & Implementation
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs">
                    {activeData.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-slate-300 flex items-start gap-2.5 hover:border-slate-700 transition-colors"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Metrics row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-800/80 font-mono text-center">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 shadow-inner">
                    <div className="text-2xl font-bold text-sky-400">20+</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Projects Built</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 shadow-inner">
                    <div className="text-2xl font-bold text-emerald-400">180ms</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Avg DB Latency</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 shadow-inner">
                    <div className="text-2xl font-bold text-teal-300">100%</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Production Focus</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
