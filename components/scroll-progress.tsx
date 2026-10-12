"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 z-[100] origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)] pointer-events-none"
      style={{ scaleX }}
    />
  )
}
