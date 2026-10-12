"use client"

import { useEffect, useRef } from "react"

export function NeuralConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    let mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    }

    // Adapt particle count for mobile performance vs desktop richness
    const isMobile = width < 768
    const particleCount = isMobile ? 32 : 65
    const connectionDistance = isMobile ? 85 : 125

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      baseAlpha: number
      color: string
    }

    const colors = [
      "rgba(56, 189, 248,", // sky-400
      "rgba(45, 212, 191,", // teal-400
      "rgba(52, 211, 153,", // emerald-400
      "rgba(99, 102, 241,", // indigo-500
    ]

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6),
      vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6),
      size: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.45 + 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      }
    }

    window.addEventListener("resize", handleResize)
    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove)
      parent.addEventListener("mouseleave", handleMouseLeave)
      parent.addEventListener("touchmove", handleTouchMove, { passive: true })
    }

    // Check visibility with IntersectionObserver to save battery when scrolled away
    let isVisible = true
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(canvas)

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap boundaries
        if (p.x < 0) p.x = width
        else if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        else if (p.y > height) p.y = 0

        // Mouse reaction
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        let alphaBoost = 0

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8
          p.x -= (dx / dist) * force * 1.5
          p.y -= (dy / dist) * force * 1.5
          alphaBoost = (1 - dist / mouse.radius) * 0.5
        }

        // Draw particle dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color} ${Math.min(1, p.baseAlpha + alphaBoost)})`
        ctx.shadowColor = "rgba(56, 189, 248, 0.4)"
        ctx.shadowBlur = dist < mouse.radius ? 8 : 2
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw connection lines to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const p2dx = p.x - p2.x
          const p2dy = p.y - p2.y
          const p2dist = Math.sqrt(p2dx * p2dx + p2dy * p2dy)

          if (p2dist < connectionDistance) {
            const lineAlpha = (1 - p2dist / connectionDistance) * 0.18
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove)
        parent.removeEventListener("mouseleave", handleMouseLeave)
        parent.removeEventListener("touchmove", handleTouchMove)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  )
}
