"use client"

export function Experience() {
  const experiences = [
    {
      role: "Full Stack & AI Engineer",
      company: "LOAM AI",
      period: "Jan 2026 – Present",
      description: [
        "Developing cutting-edge AI-powered solutions focusing on system intelligence and scalability",
        "Implementing full-stack architectures integrating modern LLMs and agentic workflows",
        "Collaborating on high-impact products at the intersection of web technology and artificial intelligence",
      ],
      current: true,
    },
    {
      role: "Backend Developer",
      company: "Elitist Software Solutions LLP",
      location: "Surat, Gujarat",
      period: "Sep 2025 – Dec 2025",
      description: [
        "Built end-to-end e-commerce platform handling product catalog, cart management, and order processing",
        "Integrated Razorpay and Stripe payment gateways with secure webhook handling",
        "Implemented Delhivery API for multi-courier shipping with real-time tracking",
        "Developed authentication system with JWT tokens, OTP verification, and role-based access control",
      ],
    },
    {
      role: "MERN Stack Intern",
      company: "Glasier Inc",
      location: "Ahmedabad, Gujarat",
      period: "Jan 2025 – Jun 2025",
      description: [
        "Developed microservices architecture using NestJS for college ERP system",
        "Built HRMS modules for employee onboarding, leave management, and payroll processing",
        "Optimized PostgreSQL queries reducing response times from 800ms to under 200ms",
        "Created React dashboards with real-time data visualization using Chart.js",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold">My Professional Journey</h3>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-0 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className={`w-3 h-3 rounded-full ${exp.current ? "bg-primary animate-pulse" : "bg-muted"}`} />
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-2xl group-hover:glass-strong transition-all duration-300">
                  <div className="flex flex-col mb-2">
                    <span className="text-primary font-mono text-sm mb-1">{exp.period}</span>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <span className="text-muted-foreground font-medium">{exp.company}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside marker:text-primary">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
