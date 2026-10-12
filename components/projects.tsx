"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code2, Layers, Filter } from "lucide-react"
import { CaseStudyModal, ProjectCaseStudy } from "@/components/case-study-modal"

export function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const projects: ProjectCaseStudy[] = [
    {
      id: "1",
      title: "AI-Powered ERP Chatbot System",
      subtitle: "GPT-4 function calling engine for natural language inventory, order, and requisition querying.",
      category: "AI & Architecture",
      image: "/college-erp-system.jpg",
      tech: ["Python", "Django", "OpenAI GPT-4", "PostgreSQL", "Redis", "Function Calling"],
      liveUrl: "#",
      githubUrl: "https://github.com/nevilsonani",
      overview:
        "Developed a natural-language conversational intelligence assistant that allows enterprise store managers and executives to query inventory levels, check order statuses, and generate automated purchase requisitions.",
      problem:
        "ERP query interfaces required navigating multi-step relational forms and writing manual SQL scripts. Non-technical managers struggled to quickly extract stock alerts during peak operational hours.",
      architecture: {
        frontend: "Next.js 14, React Server Components, Tailwind CSS",
        apiLayer: "Django REST Framework, JWT Bearer Token Auth",
        services: "OpenAI GPT-4 Function Calling, Agentic Tool Dispatch",
        database: "PostgreSQL 15, Redis Cache for context memory",
      },
      engineeringHighlights: [
        "Structured OpenAI tool schemas for deterministic parameters (SKU, warehouse_id, threshold)",
        "Implemented token cost control middleware enforcing organization usage quotas",
        "Sliding context window history maintained in Redis for multi-turn conversations",
        "Sub-200ms query execution via indexed PostgreSQL views",
      ],
      keyChallenges:
        "Ensuring the LLM never generated unverified SQL parameters. Solved by wrapping tool dispatch in strict JSON schema validation prior to database execution.",
      outcome:
        "Reduced average time to retrieve inventory reorder reports from 5 minutes down to 3 seconds via natural language text commands.",
    },
    {
      id: "2",
      title: "College ERP & HRMS System",
      subtitle: "Institutional management covering student lifecycle, academic planning, and enterprise HR payroll.",
      category: "Enterprise Systems",
      image: "/hrms-interface.jpg",
      tech: ["React", "NestJS", "PostgreSQL", "Docker", "Microservices", "Chart.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/nevilsonani",
      overview:
        "Comprehensive enterprise ERP solution built with NestJS microservices covering employee onboarding, leave management, automated payroll processing, and student academic workflows.",
      problem:
        "Legacy monolithic database queries caused response latency spikes of up to 800ms during monthly payroll batch generation and student registration windows.",
      architecture: {
        frontend: "React, Redux Toolkit, Chart.js, Tailwind CSS",
        apiLayer: "NestJS Gateway, Microservices Communication",
        services: "Automated Payroll Worker, Leave Accrual Engine",
        database: "PostgreSQL relational schema with optimized indexing",
      },
      engineeringHighlights: [
        "Optimized complex PostgreSQL JOIN queries, reducing API response times from 800ms to under 180ms",
        "Designed modular HRMS sub-services for leave balance accrual and tax calculation",
        "Implemented role-based access control (RBAC) across administrative, faculty, and employee personas",
        "Integrated interactive real-time telemetry dashboards using Chart.js",
      ],
      keyChallenges:
        "Handling concurrent payroll calculation for hundreds of staff without locking database rows. Solved using database transaction isolation and async batch processing queue.",
      outcome:
        "Successfully streamlined HR processing for institutional administration with zero concurrency locks and sub-200ms query response.",
    },
    {
      id: "3",
      title: "E-Commerce Logistics & Payment Engine",
      subtitle: "High-throughput marketplace with Stripe/Razorpay payment webhooks and Delhivery API shipping sync.",
      category: "Full Stack & APIs",
      image: "/ecommerce-dashboard.jpg",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay", "Delhivery API", "Redis"],
      liveUrl: "#",
      githubUrl: "https://github.com/nevilsonani",
      overview:
        "End-to-end e-commerce infrastructure supporting product catalogs, atomic shopping cart state, multi-gateway payments, and courier dispatch synchronization.",
      problem:
        "Order fulfillment required manual courier assignment and lacked real-time shipment status updates for customers after payment confirmation.",
      architecture: {
        frontend: "Next.js App Router, Tailwind CSS, State Management",
        apiLayer: "Node.js REST API with Webhook Handlers",
        services: "Razorpay Signature Verification & Delhivery Courier Sync",
        database: "PostgreSQL for orders/catalog, Redis for session state",
      },
      engineeringHighlights: [
        "Integrated Razorpay payment gateway with cryptographic signature validation on incoming webhooks",
        "Connected Delhivery Shipping API for automated tracking number generation and status polling",
        "Implemented JWT-based authentication with OTP SMS verification and refresh tokens",
        "Utilized Redis in-memory storage for high-concurrency cart management",
      ],
      keyChallenges:
        "Handling network drops during payment webhook processing. Implemented idempotent transaction logging to ensure orders are never double-charged or lost.",
      outcome:
        "Fully automated the post-purchase workflow from payment capture to shipping label generation.",
    },
    {
      id: "4",
      title: "Global E-Learning Video Platform",
      subtitle: "Course marketplace with automated AWS S3 video transcoding and secure CDN delivery.",
      category: "Full Stack & APIs",
      image: "/elearning-platform.png",
      tech: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Stripe", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "https://github.com/nevilsonani",
      overview:
        "Scalable learning management marketplace where instructors upload video curriculum with secure streaming, course analytics, and automated enrollment.",
      problem:
        "Raw instructor video uploads were too large for mobile cellular bandwidth, causing buffer stalls and high bandwidth overhead.",
      architecture: {
        frontend: "Next.js, Video.js player, Tailwind CSS",
        apiLayer: "Node.js Express API",
        services: "AWS S3 Bucket Pipeline & Transcoding Workers",
        database: "MongoDB document store for video metadata & progress",
      },
      engineeringHighlights: [
        "Constructed AWS S3 upload pipeline with presigned URLs for client-side direct uploads",
        "Integrated Stripe Checkout for seamless course purchasing and instructor revenue split",
        "Implemented user video progress tracking and instant certificate generation",
      ],
      keyChallenges:
        "Preventing unauthorized video downloading. Implemented signed cookie delivery and time-limited HLS playback tokens.",
      outcome:
        "Ensured smooth 1080p video playback globally with low latency streaming across devices.",
    },
    {
      id: "5",
      title: "Real-Estate & Real-Time Booking Portal",
      subtitle: "Property search engine featuring interactive filters, 3D property tours, and live agent chat.",
      category: "Enterprise Systems",
      image: "/real-estate-platform.jpg",
      tech: ["MERN Stack", "Socket.io", "Cloudinary", "Nodemailer", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/nevilsonani",
      overview:
        "Property discovery engine enabling users to filter real estate listings, inspect high-resolution media galleries, and chat directly with property agents in real-time.",
      problem:
        "Inquiries suffered from delayed email responses, leading to missed client booking opportunities for property viewings.",
      architecture: {
        frontend: "React, Redux, Tailwind CSS",
        apiLayer: "Express REST API & Socket.io Server",
        services: "Cloudinary Image Optimization & Nodemailer Alerts",
        database: "MongoDB with Geospatial indexing",
      },
      engineeringHighlights: [
        "Implemented Socket.io WebSockets for real-time buyer-agent chat messaging",
        "Created MongoDB geospatial index queries for instant distance-based property filtering",
        "Optimized image asset pipeline using Cloudinary auto-format compression",
      ],
      keyChallenges:
        "Maintaining real-time message sync across browser refreshes. Solved with persistent message queue backed by MongoDB indexes.",
      outcome:
        "Significantly improved agent response times and user engagement during property search.",
    },
    {
      id: "6",
      title: "Cineverse Movie Review & Social Hub",
      subtitle: "Community platform for film discovery, dynamic TMDB API integration, and real-time reviews.",
      category: "Full Stack & APIs",
      image: "/movie-streaming-app.jpg",
      tech: ["TypeScript", "Next.js", "MongoDB", "TMDB API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/nevilsonani",
      overview:
        "Social platform for film enthusiasts to discover trending movies, curate watchlists, write detailed reviews, and discuss cinema topics.",
      problem:
        "Navigating third-party movie metadata caused slow initial page loads without proper caching.",
      architecture: {
        frontend: "Next.js App Router, TypeScript, Tailwind CSS",
        apiLayer: "Next.js API Routes with TMDB Wrapper",
        services: "Server-side caching for movie details",
        database: "MongoDB for user watchlists & reviews",
      },
      engineeringHighlights: [
        "Utilized Next.js Server Components for fast SEO-optimized rendering of movie detail pages",
        "Built responsive watchlist management with optimistic UI updates",
        "Integrated TMDB API with edge caching strategy",
      ],
      keyChallenges:
        "Third-party API rate limits during peak discovery browsing. Implemented server-side caching layer.",
      outcome:
        "Delivered lightning-fast page transitions and rich media presentation.",
    },
  ]

  const categories = ["All", "AI & Architecture", "Enterprise Systems", "Full Stack & APIs"]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-slate-900/80">
      <div className="container mx-auto px-4 max-w-6xl space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>Featured Systems & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            Production-grade systems built with rigorous software discipline. Click any project card to inspect full architectural flows, schemas, and live outcomes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
          <span className="text-slate-500 text-[11px] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-sky-500/20 border-sky-500/60 text-sky-300 font-semibold shadow-[0_0_15px_-3px_rgba(56,189,248,0.3)]"
                  : "bg-slate-950/80 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedCaseStudy(project)}
              className="group tech-card rounded-2xl overflow-hidden cursor-pointer border border-slate-800/90 flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="aspect-video relative overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <Image
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-slate-950/20 to-transparent opacity-90" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 text-sky-300 border border-sky-500/30 text-[10px] font-mono font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      <span>{project.category}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 bg-sky-500 text-slate-950 rounded-xl inline-flex items-center justify-center font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold font-mono text-slate-100 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 font-sans">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Tech Badges */}
              <div className="p-5 sm:p-6 pt-0 space-y-3.5">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/90 text-slate-300 border border-slate-800/80"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-mono text-sky-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>INSPECT FULL ARCHITECTURE</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal Overlay */}
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      </div>
    </section>
  )
}
