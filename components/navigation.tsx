"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { label: "Overview", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "AI Systems", href: "#ai-systems" },
    { label: "Selected Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Tech Stack", href: "#skills" },
    { label: "RAG Engine", href: "#rag-telemetry" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-[#08090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center gap-4">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-all shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              NS
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xs sm:text-sm text-slate-100 group-hover:text-sky-300 transition-colors whitespace-nowrap">
                NEVIL SONANI
              </span>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider hidden sm:inline-block whitespace-nowrap">
                AI & Systems Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-slate-800/90 backdrop-blur-md font-mono text-[11px] text-slate-300 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 rounded-full hover:text-sky-300 hover:bg-slate-800/80 transition-colors whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Availability Action Button */}
          <div className="flex items-center gap-2 font-mono text-xs shrink-0">
            <a
              href="https://calendly.com/hello-nevilsonani/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all shadow-[0_0_15px_-3px_rgba(56,189,248,0.4)] hover:shadow-[0_0_20px_-3px_rgba(56,189,248,0.6)] whitespace-nowrap text-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-5 bg-slate-950/95 border border-slate-800/90 backdrop-blur-xl rounded-2xl space-y-3 font-mono text-xs shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 hover:text-sky-400 transition-colors flex items-center justify-between font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-slate-600 font-normal">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <a
                href="https://calendly.com/hello-nevilsonani/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-sky-500 text-slate-950 font-bold flex items-center justify-center gap-2 text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK 30-MIN DISCOVERY CALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
