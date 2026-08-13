"use client"

import { useState, useEffect } from "react"
import { Github, Star, GitFork, ExternalLink, Code2, Terminal, Activity } from "lucide-react"

interface RepoItem {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
}

export function GithubSection() {
  const [repos, setRepos] = useState<RepoItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fallbackRepos: RepoItem[] = [
    {
      id: 1,
      name: "portfolio-website",
      description: "Full Stack AI Engineer portfolio built with Next.js, TypeScript, Tailwind CSS, and interactive system visualizers.",
      html_url: "https://github.com/nevilsonani/portfolio-website",
      stargazers_count: 12,
      forks_count: 3,
      language: "TypeScript",
      updated_at: "2026-08-13",
    },
    {
      id: 2,
      name: "ai-erp-chatbot-engine",
      description: "GPT-4 function calling agent for ERP natural language inventory and order querying.",
      html_url: "https://github.com/nevilsonani",
      stargazers_count: 18,
      forks_count: 5,
      language: "Python",
      updated_at: "2026-07-28",
    },
    {
      id: 3,
      name: "nest-college-erp-microservices",
      description: "Enterprise NestJS microservices covering HRMS, payroll, and academic management.",
      html_url: "https://github.com/nevilsonani",
      stargazers_count: 15,
      forks_count: 4,
      language: "TypeScript",
      updated_at: "2026-06-15",
    },
    {
      id: 4,
      name: "ecommerce-payment-logistics",
      description: "High-throughput e-commerce engine with Razorpay webhook signatures & Delhivery API sync.",
      html_url: "https://github.com/nevilsonani",
      stargazers_count: 14,
      forks_count: 2,
      language: "JavaScript",
      updated_at: "2025-12-20",
    },
  ]

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/nevilsonani/repos?sort=updated&per_page=6")
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data)
            setLoading(false)
            return
          }
        }
      } catch (err) {
        console.warn("GitHub API fallback to curated list", err)
      }
      setRepos(fallbackRepos)
      setLoading(false)
    }
    fetchRepos()
  }, [])

  return (
    <section id="github" className="py-24 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
              <Github className="w-3.5 h-3.5" />
              <span>07 // Open Source & Code Activity</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              GitHub Repositories
            </h2>
          </div>

          <a
            href="https://github.com/nevilsonani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs rounded-xl transition-colors shrink-0"
          >
            <Github className="w-4 h-4 text-sky-400" />
            <span>@nevilsonani ON GITHUB</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {(loading ? fallbackRepos : repos).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group tech-card p-5 rounded-xl border border-slate-800/80 space-y-3 hover:border-sky-500/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2 text-sky-300 font-bold group-hover:text-sky-400">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">{repo.language || "TypeScript"}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                  {repo.description || "Public software repository by Nevil Sonani."}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 font-mono text-[11px] text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>

                <span className="text-sky-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>View Code</span>
                  <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
