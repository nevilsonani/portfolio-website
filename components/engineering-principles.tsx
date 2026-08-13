"use client"

import { Cpu, ShieldCheck, Zap, Layers, RefreshCcw, Compass, Activity, Terminal } from "lucide-react"

export function EngineeringPrinciples() {
  const principles = [
    {
      num: "01",
      title: "Production-First AI Integration",
      desc: "AI must solve real workflows through validated function calling, strict JSON schemas, and token usage controls — not unconstrained text chatbots.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "API Design Around Real Domain Workflows",
      desc: "APIs are built around business boundaries and real user journeys rather than directly dumping raw database tables.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Sub-200ms Observability & Performance",
      desc: "Query optimization, indexing, and Redis caching are non-negotiable. Systems must respond instantly under concurrency.",
      icon: Activity,
    },
    {
      num: "04",
      title: "Automate Repetitive Operational Overhead",
      desc: "From payment webhooks to shipping dispatch and leave accrual engines — eliminate manual operations through reliable background logic.",
      icon: RefreshCcw,
    },
    {
      num: "05",
      title: "Ship, Measure, and Relentlessly Iterate",
      desc: "Deploy clean, maintainable microservices to production quickly. Monitor latency, error trace metrics, and user feedback.",
      icon: Compass,
    },
    {
      num: "06",
      title: "Security & Strict Control Flow Scoping",
      desc: "Every endpoint enforces JWT token validation, rate-limiting, and explicit Role-Based Access Control policies.",
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="principles" className="py-24 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>06 // Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Core Engineering Mindset
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            The fundamental standards that guide how I design, architect, and ship production software.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="tech-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">{p.num}</span>
                </div>

                <h3 className="text-lg font-bold font-mono text-slate-100">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
