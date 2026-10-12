"use client"

import { useState } from "react"
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Check,
  Copy,
  Sparkles,
  MessageSquare,
  Phone,
  Calendar,
  Clock,
  Video,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello.nevilsonani@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9054375438")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>08 // Let's Connect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.1]">
            Have a product worth building?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
              Let's make it intelligent.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed font-sans pt-1">
            Whether you need a production AI agent system, scalable Django/Node.js backend microservices, enterprise ERP workflows, or an end-to-end web platform — book a quick call or reach out directly.
          </p>
        </div>

        {/* Contact Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between tech-card p-6 sm:p-8 rounded-2xl border border-slate-800/90">
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-800/80">
                <h3 className="font-mono text-sm sm:text-base font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Direct Contact Information</span>
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Phone Box */}
                <div className="space-y-1.5">
                  <span className="text-slate-400 text-[11px] block">Phone / WhatsApp</span>
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-colors">
                    <a href="tel:+919054375438" className="flex items-center gap-2.5 min-w-0 hover:text-sky-400 transition-colors">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-200 font-semibold truncate text-xs">
                        +91 9054375438
                      </span>
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition-colors shrink-0 text-[10px]"
                    >
                      {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                      <span>{copiedPhone ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                </div>

                {/* Email Box */}
                <div className="space-y-1.5">
                  <span className="text-slate-400 text-[11px] block">Primary Email</span>
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-colors">
                    <a href="mailto:hello.nevilsonani@gmail.com" className="flex items-center gap-2.5 min-w-0 hover:text-sky-400 transition-colors">
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-200 font-semibold truncate text-xs">
                        hello.nevilsonani@gmail.com
                      </span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition-colors shrink-0 text-[10px]"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                      <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                </div>

                {/* Location Box */}
                <div className="space-y-1.5">
                  <span className="text-slate-400 text-[11px] block">Location</span>
                  <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 text-slate-200">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-xs">Bhavnagar, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href="https://github.com/nevilsonani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-slate-950 hover:bg-slate-900 text-slate-200 rounded-xl border border-slate-800 hover:border-sky-500/40 transition-colors"
              >
                <Github className="w-4 h-4 text-sky-400 shrink-0" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nevil-sonani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-slate-950 hover:bg-slate-900 text-slate-200 rounded-xl border border-slate-800 hover:border-sky-500/40 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Book a Call Card */}
          <div className="lg:col-span-7 flex flex-col justify-between tech-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden group">
            {/* Ambient accent background glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />

            <div className="space-y-6 relative z-10">
              {/* Header with live availability status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="font-mono text-base font-bold text-slate-100 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Book a Discovery Call</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Schedule a 30-minute 1-on-1 session to discuss your next big idea or architecture.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>CALENDAR ACTIVE</span>
                </div>
              </div>

              {/* Call Details Pills */}
              <div className="grid grid-cols-3 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col items-center justify-center text-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span className="text-[11px] font-bold text-slate-200">30 Minutes</span>
                  <span className="text-[10px] text-slate-500">Duration</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col items-center justify-center text-center gap-1.5">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-bold text-slate-200">Google Meet</span>
                  <span className="text-[10px] text-slate-500">Format</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col items-center justify-center text-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span className="text-[11px] font-bold text-slate-200">1-on-1 Direct</span>
                  <span className="text-[10px] text-slate-500">With Nevil</span>
                </div>
              </div>

              {/* Agenda / What We'll Cover */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="font-mono text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                  What we can dive into:
                </span>
                <ul className="space-y-2.5 font-sans text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100 font-medium">AI & Agent Feasibility:</strong> Evaluating RAG, LangChain/LlamaIndex, or agentic automation workflows for your stack.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100 font-medium">Full-Stack Architecture:</strong> System design, high-concurrency backends (Django/Node), and database schema planning.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-100 font-medium">Timelines & Milestones:</strong> Realistic MVP estimates, deliverables, and engineering contract roadmap.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA Section */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-3 relative z-10">
              <a
                href="https://calendly.com/hello-nevilsonani/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative w-full py-4 px-6 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs sm:text-sm rounded-xl transition-all shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.6)] flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>SELECT A TIME ON CALENDLY</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
                <span>Direct URL: calendly.com/hello-nevilsonani/30min</span>
                <a
                  href="https://calendly.com/hello-nevilsonani/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center font-mono text-xs text-slate-500 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nevil Sonani. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Engineered for Production</span>
            <span>•</span>
            <a href="#home" className="hover:text-sky-400 transition-colors">Back to Top ↑</a>
          </div>
        </footer>
      </div>
    </section>
  )
}

