'use client'

import Image from 'next/image'
import { motion, type Variants } from 'motion/react'
import Magnetic from './Magnetic'
import SpotlightCard from './SpotlightCard'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative bg-cream-50 text-ink-900 py-28 md:py-44 overflow-hidden">
      {/* Decorative animated blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-200/50 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-brand-100/70 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: text + CTAs */}
          <div>
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
              Now taking new clients
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl font-serif font-bold leading-tight mb-6">
              We build websites for the businesses that{' '}
              <span className="text-brand-500">built your town.</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl text-ink-500 mb-12 leading-relaxed">
              Professional websites for local businesses — done in a week, starting at $1,000. No bloated agencies, no 6-week timelines, no surprises.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Magnetic strength={0.3}>
                <motion.a href="#contact"
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                   className="glow-btn inline-flex items-center justify-center bg-brand-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-sm hover:bg-brand-600 transition-colors">
                  Get a Free Quote
                </motion.a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <motion.a href="#how-it-works"
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                   className="inline-flex items-center justify-center border border-ink-900/15 text-ink-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream-200/60 transition-colors">
                  See How It Works
                </motion.a>
              </Magnetic>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-x-8 gap-y-3 mt-14">
              {['Contractors', 'Restaurants', 'Salons', 'Healthcare', 'And more'].map((niche) => (
                <span key={niche} className="text-ink-500 text-sm flex items-center gap-2">
                  <span className="text-brand-500">✓</span> {niche}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Logo */}
          <motion.div
            variants={item}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center justify-center relative order-first lg:order-none mb-2 lg:mb-0"
          >
            <motion.div
              aria-hidden
              className="absolute inset-4 sm:inset-8 rounded-full bg-brand-300/40 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <SpotlightCard className="relative rounded-3xl">
              <Image
                src="/Logo3.jpg"
                alt="Redbud Websites"
                width={1349}
                height={720}
                className="w-full max-w-[240px] sm:max-w-sm lg:max-w-md rounded-3xl shadow-2xl shadow-brand-900/20 border border-white/60"
              />
            </SpotlightCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
