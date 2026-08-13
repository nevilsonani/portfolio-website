"use client"

import { useState, useRef } from "react"
import { Send, Mail, MapPin, Linkedin, Github, Check, Copy, Sparkles, MessageSquare, Phone } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nevilsonani2810@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9054375438")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("https://formspree.io/f/mwvvladd", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        formRef.current.reset()
      } else {
        alert("Unable to send message. Please email directly at nevilsonani2810@gmail.com")
      }
    } catch (error) {
      console.error(error)
      alert("Unable to send message. Please email directly at nevilsonani2810@gmail.com")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>08 // Let's Build</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.1]">
            Have a product worth building?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
              Let's make it intelligent.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed font-sans pt-1">
            Whether you need a production AI agent system, scalable Django/Node.js backend microservices, enterprise ERP workflows, or an end-to-end web platform — I'm open to high-impact opportunities.
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
                    <a href="mailto:nevilsonani2810@gmail.com" className="flex items-center gap-2.5 min-w-0 hover:text-sky-400 transition-colors">
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-200 font-semibold truncate text-xs">
                        nevilsonani2810@gmail.com
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 tech-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-6">
            <div className="space-y-1 pb-4 border-b border-slate-800/80">
              <h3 className="font-mono text-base font-bold text-slate-100">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 font-sans">
                Fill out the details below to discuss project requirements, architecture consults, or hiring.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 font-mono">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-100">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto font-sans">
                  Thank you for getting in touch. I will review your message and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold block">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-xs font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold block">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="e.g. sarah@company.com"
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-xs font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold block">Project Scope & Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about the system, platform, or AI integration you're looking to build..."
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-xs font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2 mt-2"
                >
                  <span>{loading ? "DISPATCHING..." : "DISPATCH MESSAGE"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
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
