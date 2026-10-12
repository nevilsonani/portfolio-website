"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Github, Linkedin, Terminal, Sparkles, Cpu, Calendar, CheckCircle2, ChevronRight, Building2, ShoppingBag } from "lucide-react"
import { HeroSystemVisualizer } from "@/components/hero-system-visualizer"
import { NeuralConstellationBackground } from "@/components/neural-constellation-background"

export function Hero() {
  const roles = [
    "Autonomous AI Agents & Automation",
    "Full-Stack Web & Scalable SaaS Platforms",
    "High-Throughput Backend Microservices",
    "Database Architecture & Query Optimization",
    "Production RAG & Vector Knowledge Bases",
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(65)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 30 : typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed])

  return (
    <section id="home" className="min-h-screen pt-24 sm:pt-28 pb-16 relative overflow-hidden">
      {/* Interactive Neural Constellation Background */}
      <NeuralConstellationBackground />

      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="space-y-8">
          {/* Status Badge with Live Pulse */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400 font-semibold">STUDIO AVAILABILITY:</span>
            <span className="text-emerald-400 font-semibold tracking-wide uppercase">
              Open for High-Impact Client Contracts & Engineering
            </span>
          </div>

          {/* Main Headline & Positioning */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold">
                  <Cpu className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="inline-block min-h-[1.5rem]">
                    {displayText}
                    <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
                  Architecting{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                    Intelligent
                  </span>{" "}
                  Systems
                  <br className="hidden sm:inline" /> & Scalable Software.
                </h1>
              </div>

              <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                We engineer autonomous AI agents, intelligent workflow automation, scalable Python/Django backends, distributed microservices, and high-performance web platforms for ambitious companies.
              </p>

              {/* Verified Engineering Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800/80 shadow-inner">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sub-180ms DB Optimization</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800/80 shadow-inner">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Autonomous AI Automation</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800/80 shadow-inner">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Scalable Backend APIs</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800/80 shadow-inner">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Enterprise RAG Systems</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-sm rounded-xl transition-all shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.7)]"
              >
                <span>EXPLORE CLIENT SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex gap-2.5">
                <a
                  href="https://calendly.com/hello-nevilsonani/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 hover:border-sky-500/50 transition-colors group shadow-lg"
                >
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>BOOK 30-MIN CALL</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/nevilsonani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 hover:border-sky-500/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nevil-sonani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 hover:border-sky-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Concept Visualizer */}
          <div className="pt-2 sm:pt-4">
            <HeroSystemVisualizer />
          </div>
        </div>
      </div>
    </section>
  )
}
