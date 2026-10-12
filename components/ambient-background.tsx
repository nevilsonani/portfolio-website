"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024)
    const handleResize = () => setIsDesktop(window.innerWidth > 1024)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("resize", handleResize)
    if (window.innerWidth > 1024) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep luxury studio carbon base with subtle radial glow blooms */}
      <div className="absolute inset-0 bg-[#08090e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_-10%,rgba(56,189,248,0.14),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_40%,rgba(99,102,241,0.1),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_80%,rgba(16,185,129,0.08),transparent_60%)]" />

      {/* Floating Aurora Orb 1 (Top Left - Electric Cyan & Sky) */}
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-400/15 to-teal-400/10 blur-[150px]"
      />

      {/* Floating Aurora Orb 2 (Middle Right - Royal Indigo & Violet) */}
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-indigo-500/15 via-purple-500/10 to-transparent blur-[160px]"
      />

      {/* Floating Aurora Orb 3 (Bottom Center - Emerald & Teal) */}
      <motion.div
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -40, 60, 0],
          scale: [0.9, 1.2, 0.95, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/3 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-emerald-500/12 via-teal-500/10 to-transparent blur-[170px]"
      />

      {/* High-Tech Precision Grid with Edge Vignette Mask */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 95% 85% at 50% 50%, black 35%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 50%, black 35%, transparent 92%)",
        }}
      />

      {/* Interactive Cursor Spotlight Glow (Desktop Only) */}
      {isDesktop && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, rgba(99, 102, 241, 0.04) 35%, transparent 65%)",
            filter: "blur(30px)",
          }}
        />
      )}
    </div>
  )
}
