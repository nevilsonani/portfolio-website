"use client"

import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, Server, Layers, ShieldCheck } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      role: "Full Stack & AI Engineer",
      company: "LOAM AI",
      location: "India",
      period: "Jan 2026 – Present",
      current: true,
      phase: "PHASE 03 // AI ENGINEERING & SYSTEMS INTELLIGENCE",
      badge: "ACTIVE ROLE",
      highlights: [
        "Architecting AI-powered chatbot systems for enterprise ERPs with GPT-4 function calling.",
        "Developing natural language database querying tools for real-time inventory, order alerts, and automated purchase requisitions.",
        "Implementing token usage tracking, AI cost controls, and subscription-based usage enforcement middleware.",
        "Designing Redis conversational memory pipelines and Next.js dashboards for live agent telemetry.",
      ],
      techStack: ["Python", "Django", "GPT-4 Function Calling", "Next.js", "Redis", "PostgreSQL"],
    },
    {
      role: "Backend Developer",
      company: "Elitist Software Solutions LLP",
      location: "Surat, Gujarat",
      period: "Sep 2025 – Dec 2025",
      current: false,
      phase: "PHASE 02 // BACKEND SYSTEMS & INTEGRATIONS",
      badge: "PRODUCTION BACKEND",
      highlights: [
        "Built end-to-end e-commerce backend platform handling product catalog, shopping cart state, and high-concurrency order processing.",
        "Integrated Razorpay payment gateways with cryptographic signature verification on incoming webhooks.",
        "Connected Delhivery Shipping API for automated multi-courier tracking label sync and status updates.",
        "Engineered JWT authentication pipeline with OTP SMS verification and fine-grained Role-Based Access Control (RBAC).",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Razorpay Webhooks", "Delhivery API", "JWT/OTP"],
    },
    {
      role: "MERN Stack Intern",
      company: "Glasier Inc",
      location: "Ahmedabad, Gujarat",
      period: "Jan 2025 – Jun 2025",
      current: false,
      phase: "PHASE 01 // MICROSERVICES & ENTERPRISE ERP",
      badge: "ENTERPRISE SOFTWARE",
      highlights: [
        "Developed NestJS microservices architecture for a comprehensive College ERP platform.",
        "Engineered enterprise HRMS modules for automated employee payroll processing, leave balance tracking, and onboarding.",
        "Optimized complex PostgreSQL relational database queries, reducing response latencies from 800ms down to under 180ms.",
        "Built interactive administrative React dashboards with Chart.js real-time data visualization.",
      ],
      techStack: ["NestJS", "React", "PostgreSQL", "Docker", "Microservices", "Chart.js"],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5" />
              <span>04 // Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Engineering Evolution Timeline
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            From MERN microservices and high-throughput backend payment engines to production AI agents and LLM tool execution.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group"
            >
              {/* Central Node Indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 bg-slate-950 z-10">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    exp.current ? "bg-sky-400 animate-pulse shadow-[0_0_10px_#38bdf8]" : "bg-slate-600"
                  }`}
                />
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[46%] tech-card p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="space-y-1.5 pb-3 border-b border-slate-800 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sky-400 font-semibold">{exp.phase}</span>
                    <span className="text-slate-500">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span>{exp.role}</span>
                    {exp.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                        PRESENT
                      </span>
                    )}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 font-mono text-[10px]">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
