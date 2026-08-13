import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { AISystems } from "@/components/ai-systems"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { TechEcosystem } from "@/components/tech-ecosystem"
import { EngineeringPrinciples } from "@/components/engineering-principles"
import { ClientSystemTelemetry } from "@/components/client-system-telemetry"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080c] text-foreground selection:bg-sky-500/20 selection:text-sky-400">
      <Navigation />
      <Hero />
      <About />
      <AISystems />
      <Projects />
      <Experience />
      <TechEcosystem />
      <EngineeringPrinciples />
      <ClientSystemTelemetry />
      <Contact />
    </main>
  )
}
