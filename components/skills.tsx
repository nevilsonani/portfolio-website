"use client"

export function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Microservices", "REST APIs"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Chart.js", "Framer Motion"],
    },
    {
      title: "Databases & AI",
      skills: ["PostgreSQL", "MongoDB", "Redis", "LLM Integration", "AI Agents", "Vector Databases"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS (S3, Lambda)", "Git", "Postman", "Swagger", "JWT"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Skills</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Tech Stack</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl space-y-6 hover:border-primary/50 transition-colors duration-300"
              >
                <h4 className="text-xl font-bold text-primary">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
