export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-sm font-mono text-primary uppercase tracking-wider">Background</h2>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  Bridging Code and <br />
                  <span className="text-accent">Artificial Intelligence</span>
                </h3>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I{"'"}m a Full Stack and AI Engineer based in Ahmedabad, India. My journey in tech is driven by a
                  fascination with how software can automate complex tasks and provide intelligent insights.
                </p>
                <p>
                  With a solid foundation in modern web technologies and a growing expertise in AI integration, I focus
                  on building applications that are not just functional, but genuinely smart.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="glass p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    Projects Done
                  </div>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-accent mb-1">2026</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    AI Transition
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up [animation-delay:200ms]">
              <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full h-full border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute w-2/3 h-2/3 border-2 border-dashed border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute text-6xl">🚀</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-xl animate-bounce">
                <span className="text-sm font-bold">Available for Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
