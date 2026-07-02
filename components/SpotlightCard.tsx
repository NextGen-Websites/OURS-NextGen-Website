'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'motion/react'

export default function SpotlightCard({
  children,
  className = '',
  glow = 'rgba(214,54,143,0.16)',
  tilt = true,
}: {
  children: ReactNode
  className?: string
  glow?: string
  tilt?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
    if (tilt) {
      rotateY.set((x / rect.width - 0.5) * 10)
      rotateX.set(-(y / rect.height - 0.5) * 10)
    }
  }

  function handleMouseLeave() {
    if (tilt) {
      rotateX.set(0)
      rotateY.set(0)
    }
  }

  const background = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 70%)`

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative group ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  )
}
