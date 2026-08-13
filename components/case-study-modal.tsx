"use client"

import { X, ExternalLink, Github, CheckCircle2, Cpu, Server, Database, Layers, ArrowRight, ShieldCheck } from "lucide-react"
import Image from "next/image"

export interface ProjectCaseStudy {
  id: string
  title: string
  subtitle: string
  image: string
  category: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  overview: string
  problem: string
  architecture: {
    frontend: string
    apiLayer: string
    services: string
    database: string
  }
  engineeringHighlights: string[]
  keyChallenges: string
  outcome: string
}

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null
  onClose: () => void
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0f17] border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto my-auto font-sans text-slate-200 text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Nav */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 px-6 bg-[#0d0f17]/90 backdrop-blur-md border-b border-slate-800/80">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-sky-400 font-bold uppercase tracking-wider">CASE STUDY // 0{project.id}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-semibold">{project.title}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors border border-slate-800"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono text-xs font-bold">
                {project.category}
              </span>
              <span className="text-slate-500 font-mono text-xs">• Production Architecture</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100 font-mono">
              {project.title}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">{project.subtitle}</p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs rounded-lg transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs rounded-lg transition-colors"
                >
                  <span>GITHUB REPO</span>
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Featured Visual Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <Image
              src={project.image || "/placeholder.jpg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Section 01: Overview */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              01 — Overview
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.overview}</p>
          </div>

          {/* Section 02: Problem */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              02 — Problem & Technical Objective
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">{project.problem}</p>
          </div>

          {/* Section 03: Architecture Diagram */}
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              03 — System Architecture
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">01 / Presentation</span>
                <h4 className="font-bold text-sky-300">Frontend Layer</h4>
                <p className="text-slate-400 text-[11px] leading-tight">{project.architecture.frontend}</p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">02 / Gateway</span>
                <h4 className="font-bold text-emerald-300">API & Auth Layer</h4>
                <p className="text-slate-400 text-[11px] leading-tight">{project.architecture.apiLayer}</p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">03 / Logic</span>
                <h4 className="font-bold text-teal-300">Services & Workers</h4>
                <p className="text-slate-400 text-[11px] leading-tight">{project.architecture.services}</p>
              </div>

              <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">04 / Persistence</span>
                <h4 className="font-bold text-indigo-300">Database & Cache</h4>
                <p className="text-slate-400 text-[11px] leading-tight">{project.architecture.database}</p>
              </div>
            </div>
          </div>

          {/* Section 04: Engineering Highlights */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              04 — Engineering Implementation Highlights
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {project.engineeringHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05: Key Challenges */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              05 — Technical Challenge & Solution
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 font-mono">
              {project.keyChallenges}
            </p>
          </div>

          {/* Section 06: Outcome & Tech Stack */}
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              06 — Tech Stack & Impact
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">{project.outcome}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
