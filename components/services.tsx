"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Bot,
  Server,
  Layers,
  Database,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calendar,
  Shield,
  Workflow,
  Cpu,
  TrendingUp,
  Cloud,
  Code2,
} from "lucide-react"

export function Services() {
  const services = [
    {
      id: "ai-automation",
      title: "Autonomous AI Agents & Workflow Automation",
      category: "AI & Automation",
      icon: Bot,
      glowColor: "rgba(56,189,248,0.25)",
      headline: "Eliminate manual operational overhead with deterministic AI agents.",
      description:
        "We build autonomous multi-agent systems and custom LLM workflows that execute complex business actions through validated tool calling, API integration, and strict cost controls.",
      deliverables: [
        "Multi-turn agent workflows with deterministic tool calling schemas",
        "Token usage tracking, organization quotas & cost-control middleware",
        "Autonomous document parsing, contract intelligence & structured JSON output",
        "Sliding context window management with Redis memory caching",
      ],
      techStack: ["OpenAI GPT-4", "Python", "Django", "LangChain", "Redis", "Function Calling"],
      idealFor: "Organizations looking to automate complex multi-step workflows and back-office operations.",
    },
    {
      id: "fullstack-saas",
      title: "Full-Stack Web Platforms & Scalable SaaS",
      category: "Full Stack & Web",
      icon: Code2,
      glowColor: "rgba(16,185,129,0.25)",
      headline: "Modern web applications engineered for speed, conversion, and scale.",
      description:
        "End-to-end web platforms built with React Server Components, responsive architecture, atomic state management, and seamless third-party service integrations.",
      deliverables: [
        "Modern Next.js & React platforms with server-side rendering and edge caching",
        "Interactive real-time telemetry dashboards and analytical data visualizers",
        "Secure user authentication (JWT, OAuth, OTP) with granular role-based permissions",
        "Cross-platform responsive design tested for mobile, tablet, and desktop viewports",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "WebSockets"],
      idealFor: "Companies requiring high-converting, responsive web platforms and customer portals.",
    },
    {
      id: "backend-microservices",
      title: "High-Throughput Backend Microservices & APIs",
      category: "Backend Systems",
      icon: Server,
      glowColor: "rgba(99,102,241,0.25)",
      headline: "Distributed backend engines engineered for sub-180ms response times.",
      description:
        "From high-concurrency RESTful APIs and real-time WebSockets to asynchronous event queues, we architect backends that never bottleneck under production traffic.",
      deliverables: [
        "Scalable Python/Django REST Framework & NestJS microservices architectures",
        "Asynchronous task queues, background workers, and distributed job schedulers",
        "Cryptographically verified webhook receivers and idempotent transaction safety",
        "Strict input validation schemas with Zod and Pydantic data contracts",
      ],
      techStack: ["Python / Django", "Node.js", "NestJS", "FastAPI", "Redis Queue", "Docker"],
      idealFor: "Businesses handling high transaction volumes, webhook integrations, and distributed workloads.",
    },
    {
      id: "database-optimization",
      title: "Database Architecture & Performance Optimization",
      category: "Databases & Storage",
      icon: Database,
      glowColor: "rgba(20,184,166,0.25)",
      headline: "Sub-180ms query execution across massive relational datasets.",
      description:
        "We audit, restructure, and optimize database schemas to eliminate latency spikes, prevent concurrency deadlocks, and ensure seamless horizontal scalability.",
      deliverables: [
        "Relational query optimization reducing API response latencies from 800ms to sub-180ms",
        "PostgreSQL composite indexing, partial views, and connection pool tuning",
        "Redis in-memory caching layers for session state and high-speed data access",
        "Transaction isolation safeguards ensuring zero concurrency locking under load",
      ],
      techStack: ["PostgreSQL", "Redis", "MongoDB", "SQL Optimization", "Connection Pooling"],
      idealFor: "Companies experiencing database slow-downs, query bottlenecks, or scaling challenges.",
    },
    {
      id: "rag-vector",
      title: "Enterprise RAG & Private Vector Knowledge Engines",
      category: "Generative AI & Search",
      icon: Layers,
      glowColor: "rgba(56,189,248,0.25)",
      headline: "Private, zero-hallucination semantic search across company data.",
      description:
        "Transform proprietary documentation, knowledge bases, and records into an intelligent retrieval engine that answers natural language questions with verified citations.",
      deliverables: [
        "Recursive token chunking & 1,536-dimensional OpenAI vector embeddings",
        "Hybrid search combining Pinecone/Chroma dense vectors with BM25 keyword matching",
        "Strict context grounding preventing hallucination for regulatory compliance",
        "Sub-200ms semantic retrieval with real-time similarity score evaluation",
      ],
      techStack: ["Pinecone", "ChromaDB", "OpenAI text-embedding-3", "Hybrid BM25", "Next.js"],
      idealFor: "Organizations with rich documentation, manuals, or specialized internal records.",
    },
    {
      id: "cloud-devops",
      title: "Cloud Infrastructure, DevOps & Architecture Advisory",
      category: "Cloud & DevOps",
      icon: Cloud,
      glowColor: "rgba(168,85,247,0.25)",
      headline: "Reliable, containerized infrastructure built for continuous deployment.",
      description:
        "Comprehensive architectural advisory and cloud deployment pipelines that reduce server costs, harden security postures, and streamline continuous delivery.",
      deliverables: [
        "Docker containerization and multi-environment microservice orchestration",
        "AWS cloud pipelines (S3, Lambda, CloudFront) for global media delivery",
        "Automated CI/CD deployment workflows with zero-downtime releases",
        "Architecture audits identifying security risks, single points of failure, and ROI",
      ],
      techStack: ["AWS", "Docker", "CI/CD", "Nginx", "System Architecture", "Security Audits"],
      idealFor: "Founders and technical leaders preparing for scaling, audits, or enterprise migrations.",
    },
  ]

  const engagementPhases = [
    {
      step: "01",
      title: "Discovery & Technical Scope",
      desc: "Deep-dive session to understand your business objectives, data requirements, and architectural boundaries.",
    },
    {
      step: "02",
      title: "Architecture & PoC Blueprint",
      desc: "Detailed system design, database schemas, API contracts, and an early proof-of-concept to validate feasibility.",
    },
    {
      step: "03",
      title: "Sprint-Based Engineering",
      desc: "Rapid, transparent development cycles with weekly demos, clean production code, and automated test coverage.",
    },
    {
      step: "04",
      title: "Deployment & Observability",
      desc: "Production launch, containerization, CI/CD pipelines, latency monitoring, and complete engineering handover.",
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 relative border-t border-slate-900/80">
      <div className="container mx-auto px-4 max-w-6xl space-y-16">
        {/* Header without numbered prefixes */}
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
              <span>Studio Capabilities & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Enterprise Engineering Services
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            We partner with ambitious companies, founders, and enterprises across industries to design, build, and deploy production-grade software that scales.
          </p>
        </motion.div>

        {/* Universal Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="tech-card p-6 sm:p-7 rounded-2xl border border-slate-800/90 flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Subtle card ambient highlight */}
                <div
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: service.glowColor }}
                />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-sky-400 group-hover:text-slate-100 group-hover:bg-sky-500 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-400 border border-slate-800/80 font-bold">
                      {service.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-mono text-slate-100 group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/70">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-[11px] text-slate-300 leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between relative z-10 font-mono text-xs">
                  <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {service.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://calendly.com/hello-nevilsonani/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-bold text-[11px] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>DISCUSS</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Engagement Roadmap Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tech-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
            <div>
              <h3 className="font-mono text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-sky-400" />
                <span>Client Engagement Framework</span>
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                A structured engineering framework built for predictable delivery, zero friction, and high reliability.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs">
              <span>AGILE PRODUCTION CYCLES</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {engagementPhases.map((phase) => (
              <div
                key={phase.step}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors shadow-inner"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 font-bold text-sm">PHASE {phase.step}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-200">{phase.title}</h4>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-sky-950/40 via-slate-900/60 to-emerald-950/30 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-slate-100 font-bold text-sm">Have a technical project to build or scale?</span>
              <p className="text-slate-400 text-xs font-sans">
                Schedule a 30-minute discovery consultation to discuss architecture, timeline, and scope.
              </p>
            </div>

            <a
              href="https://calendly.com/hello-nevilsonani/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-all shadow-[0_0_20px_-3px_rgba(56,189,248,0.5)] shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>SCHEDULE DISCOVERY CALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
