"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-Learning Platform",
      description:
        "Scalable course marketplace where instructors upload video content with automated transcoding and secure global CDN delivery.",
      image: "/elearning-platform.png",
      tech: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "College ERP System",
      description:
        "Centralized management system covering student lifecycle, academic planning, library resources, and institutional financial modules.",
      image: "/college-erp-system.jpg",
      tech: ["React", "NestJS", "PostgreSQL", "Docker"],
      link: "#",
      github: "#",
    },
    {
      title: "Real Estate Platform",
      description:
        "High-performance property listing portal featuring advanced search filters, 3D tours, and real-time agent booking integration.",
      image: "/real-estate-platform.jpg",
      tech: ["MERN Stack", "Socket.io", "Cloudinary", "Nodemailer"],
      link: "#",
      github: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "A feature-rich marketplace with real-time inventory tracking, secure Stripe/Razorpay integration, and a sophisticated admin dashboard for order fulfillment and analytics.",
      image: "/ecommerce-dashboard.jpg",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      link: "#",
      github: "#",
    },
    {
      title: "HRMS Management System",
      description:
        "Comprehensive enterprise solution for employee lifecycle management, featuring automated payroll, leave tracking, performance analytics, and seamless onboarding workflows.",
      image: "/hrms-interface.jpg",
      tech: ["React", "NestJS", "PostgreSQL", "Docker", "AWS"],
      link: "#",
      github: "#",
    },
    {
      title: "Cineverse Movie Review",
      description:
        "Social platform for film enthusiasts to discover, review, and discuss movies. Includes real-time updates, personalized watchlists, and community-driven ratings.",
      image: "/movie-streaming-app.jpg",
      tech: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS", "TMDB API"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Projects</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">20+ Featured Projects</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              {"A selection of high-impact products I've built, focusing on scalability and modern user experience."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:glass-strong transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-4">
                      <a href={project.github} className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
