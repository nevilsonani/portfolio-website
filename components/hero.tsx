"use client"

import { ArrowRight, Github, Linkedin, Terminal, Sparkles, Code2, Cpu } from "lucide-react"
import { HeroSystemVisualizer } from "@/components/hero-system-visualizer"

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 relative overflow-hidden bg-tech-grid">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">STATUS:</span>
            <span className="text-slate-200 font-semibold tracking-wide uppercase">Available for Full Stack & AI Engineering</span>
          </div>

          {/* Main Headline & Positioning */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                  Full Stack AI Engineer & Systems Architect
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
                  Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">Intelligent</span> Software
                  <br className="hidden sm:inline" />
                  {" "}for the Real World.
                </h1>
              </div>

              <p className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal">
                I design and ship production-ready AI products, RAG & Vector DB systems, scalable Python/Django backends, enterprise ERPs, and high-performance Next.js SaaS platforms.
              </p>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-sm rounded-xl transition-all shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)]"
              >
                <span>EXPLORE CASE STUDIES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 transition-colors"
                >
                  <span>GET IN TOUCH</span>
                </a>

                <a
                  href="https://github.com/nevilsonani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nevil-sonani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Concept Visualizer */}
          <div className="pt-4">
            <HeroSystemVisualizer />
          </div>
        </div>
      </div>
    </section>
  )
}
