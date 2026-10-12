"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Server, Database, Cloud, Code2, ShoppingBag, Terminal, Sparkles, DatabaseZap, Layers } from "lucide-react"

export function TechEcosystem() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "ai", label: "Advanced AI & RAG", icon: Cpu },
    { id: "backend", label: "Backend Systems", icon: Server },
    { id: "databases", label: "Databases & Vector DBs", icon: Database },
    { id: "integrations", label: "Shopify & E-Commerce", icon: ShoppingBag },
    { id: "frontend", label: "Frontend & Web", icon: Code2 },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  ]

  const technologies = [
    // Advanced AI & RAG
    { name: "Vector Databases (Pinecone / Chroma)", category: "ai", level: "Advanced", usage: "Semantic Embeddings, Cosine Similarity Indexing" },
    { name: "RAG Architecture", category: "ai", level: "Expert", usage: "Retrieval-Augmented Generation, Context Chunking & Hybrid Search" },
    { name: "OpenAI GPT-4 & Embeddings", category: "ai", level: "Expert", usage: "Function Calling, text-embedding-3-small/large, Guardrails" },
    { name: "Agentic Workflows & Tool Calling", category: "ai", level: "Expert", usage: "Autonomous Tool Selection, Schema Validation, Cost Controls" },
    { name: "Conversational Memory & Context", category: "ai", level: "Expert", usage: "Sliding Context Window, Redis Memory Caching, Token Optimization" },

    // Backend
    { name: "Node.js & Express.js", category: "backend", level: "Expert", usage: "RESTful Microservices, Async Event Loop, Webhook Receivers" },
    { name: "JavaScript (ES6+)", category: "backend", level: "Expert", usage: "Asynchronous I/O, Event-driven Logic, Dynamic Tool Schemas" },
    { name: "TypeScript", category: "backend", level: "Advanced", usage: "Type-safe System Contracts, Strict Interfaces, Zod Validation" },
    { name: "Python", category: "backend", level: "Expert", usage: "Django REST Framework, AI Pipelines, Data Transformation" },
    { name: "Django", category: "backend", level: "Expert", usage: "Enterprise Backends, ORM Optimization, Auth & RBAC" },
    { name: "NestJS", category: "backend", level: "Advanced", usage: "College ERP Microservices, Dependency Injection, Modular Architecture" },
    { name: "REST APIs & WebSockets", category: "backend", level: "Expert", usage: "Socket.io Real-time Channels, Swagger Documentation" },

    // Databases & SQL
    { name: "SQL & Query Optimization", category: "databases", level: "Expert", usage: "Sub-200ms Relational Indexing, Complex JOINs, Aggregations" },
    { name: "PostgreSQL", category: "databases", level: "Expert", usage: "Relational Schema, Transaction Locks, Indexed Views" },
    { name: "Redis", category: "databases", level: "Advanced", usage: "In-memory Cart Caching, Context Session Memory, Pub/Sub" },
    { name: "MongoDB", category: "databases", level: "Advanced", usage: "Document Store, Geospatial Indexing, Unstructured Data" },

    // E-Commerce & Shopify
    { name: "Shopify API & Integrations", category: "integrations", level: "Advanced", usage: "Catalog Sync, Order Webhooks, Storefront Integrations" },
    { name: "Stripe & Razorpay Payments", category: "integrations", level: "Expert", usage: "Cryptographic Webhook Signatures, Auto-Receipts" },
    { name: "Delhivery Logistics API", category: "integrations", level: "Advanced", usage: "Automated Multi-Courier Shipping & Tracking Sync" },

    // Frontend & Cloud
    { name: "React.js & Next.js", category: "frontend", level: "Expert", usage: "App Router, SSR Dashboards, State Management" },
    { name: "Tailwind CSS", category: "frontend", level: "Expert", usage: "Obsidian Dark Design Systems, Micro-animations" },
    { name: "Docker & Containerization", category: "cloud", level: "Advanced", usage: "Microservice Container Isolation, Multi-stage Builds" },
    { name: "AWS (S3 & Lambda)", category: "cloud", level: "Intermediate", usage: "Media Asset Pipeline, Serverless Execution" },
  ]

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory)

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-slate-900/80">
      <div className="container mx-auto px-4 max-w-6xl space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>Production Tech Stack & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Advanced Skills & Systems Ecosystem
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            From RAG & Vector Databases to Node.js/Express, Python/Django, SQL query optimization, Shopify integrations, and enterprise microservices.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                  isActive
                    ? "bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-[0_0_20px_-3px_rgba(56,189,248,0.5)] scale-[1.02]"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
          <AnimatePresence>
            {filteredTech.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="tech-card p-4 sm:p-5 rounded-xl border border-slate-800/80 space-y-2 hover:border-sky-500/50 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-100">{item.name}</h3>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-900 text-emerald-400 border border-slate-800 font-bold">
                    {item.level}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug font-sans">{item.usage}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
