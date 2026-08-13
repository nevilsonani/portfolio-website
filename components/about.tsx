"use client"

import { useState } from "react"
import { Cpu, Server, Database, ShoppingBag, Zap, Cloud, Layers, Lock, ShieldCheck, Sparkles } from "lucide-react"

export function About() {
  const [activeTab, setActiveTab] = useState<string>("ai")

  const disciplines = [
    {
      id: "ai",
      title: "AI Engineering",
      icon: Cpu,
      summary: "Production LLM agents, GPT-4 function calling, conversational memory, token cost controls, and custom tool dispatch.",
      highlights: [
        "OpenAI GPT-4 API & Function Calling Schemas",
        "Context Window Management & Conversational History",
        "Token Usage Tracking & Cost Control Enforcements",
        "Natural Language SQL & Report Generation for ERPs",
      ],
      badge: "Signature Focus",
    },
    {
      id: "backend",
      title: "Backend Architecture",
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
      id: "erp",
      title: "ERP & Enterprise HRMS",
      icon: Layers,
      summary: "End-to-end institutional software, automated payroll, inventory management, and academic planning.",
      highlights: [
        "Multi-module Student & Faculty Life-cycle ERP",
        "HRMS Automated Payroll & Leave Tracking Systems",
        "Order, Inventory & Vendor Requisition Pipelines",
        "Role-based Granular Data Access Policies",
      ],
      badge: "Domain Expertise",
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Logistics",
      icon: ShoppingBag,
      summary: "Production e-commerce infrastructure, payment gateway webhooks, and courier tracking synchronization.",
      highlights: [
        "Razorpay & Stripe Payment Integration with Webhooks",
        "Delhivery Shipping API for Real-time Courier Sync",
        "Shopify Catalog & Order State Synchronization",
        "Redis Cart Caching & High-Concurrency Checkout",
      ],
      badge: "Production Ready",
    },
    {
      id: "cloud",
      title: "Cloud & Real-time Systems",
      icon: Cloud,
      summary: "Containerized deployment, real-time WebSockets, and media storage pipelines.",
      highlights: [
        "AWS S3 Global Content Delivery & Video Processing",
        "Docker Microservice Orchestration",
        "Socket.io Real-time Messaging & Notifications",
        "Redis In-Memory Caching & Pub/Sub Systems",
      ],
      badge: "Infrastructure",
    },
  ]

  const activeData = disciplines.find((d) => d.id === activeTab) || disciplines[0]

  return (
    <section id="about" className="py-24 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>01 // Capabilities & Disciplines</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
                Engineering Discipline Matrix
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-mono">
              I construct end-to-end software systems where AI model capabilities seamlessly align with production-grade backend logic and secure data storage.
            </p>
          </div>

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
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                      isActive
                        ? "bg-slate-900 border-sky-500/60 shadow-[0_0_20px_-5px_rgba(56,189,248,0.2)]"
                        : "bg-slate-950/40 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2.5 rounded-lg ${
                          isActive ? "bg-sky-500/20 text-sky-400" : "bg-slate-800/50 text-slate-400 group-hover:text-slate-200"
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
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
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
            <div className="lg:col-span-7 tech-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20">
                    <activeData.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono text-slate-100">{activeData.title}</h3>
                    <span className="text-xs font-mono text-emerald-400">{activeData.badge}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  SYSTEM READY
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
                      className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-slate-300 flex items-start gap-2.5"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 font-mono text-center">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-900">
                  <div className="text-xl font-bold text-sky-400">20+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Projects Built</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-900">
                  <div className="text-xl font-bold text-emerald-400">180ms</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Avg DB Latency</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-900">
                  <div className="text-xl font-bold text-teal-300">100%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Production Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
