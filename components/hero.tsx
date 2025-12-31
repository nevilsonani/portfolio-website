"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm uppercase tracking-[0.3em]">Software Engineer</p>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              Crafting <span className="italic font-serif">Intelligent</span>
              <br />
              Digital Experiences
            </h1>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full Stack & AI Engineer specializing in building scalable web applications and integrating cutting-edge AI
            technologies to solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/25"
            >
              View Projects
            </a>
            <a href="#contact" className="px-10 py-4 glass rounded-full font-bold hover:glass-strong transition-all">
              Let{"'"}s Talk
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="p-3 glass rounded-full block">
          <ArrowDown className="w-5 h-5 text-primary" />
        </a>
      </div>
    </section>
  )
}
