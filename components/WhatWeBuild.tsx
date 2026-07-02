'use client'

import { motion } from 'motion/react'
import SpotlightCard from './SpotlightCard'

const niches = [
  {
    icon: '🔧',
    name: 'Contractors & Trades',
    description: 'Plumbers, electricians, HVAC, roofers, landscapers. Sites that build trust and drive calls.',
    tags: ['Service list', 'Click-to-call', 'Reviews', 'Contact form'],
  },
  {
    icon: '🍽️',
    name: 'Restaurants & Food',
    description: 'Dine-in, takeout, food trucks. Full menu, gallery, online ordering links, hours and location.',
    tags: ['Menu', 'Gallery', 'Order online', 'Location'],
  },
  {
    icon: '✂️',
    name: 'Salons & Barbershops',
    description: 'Hair, nails, beauty. Booking front and center, portfolio gallery, team profiles, pricing.',
    tags: ['Book online', 'Portfolio', 'Team', 'Pricing'],
  },
  {
    icon: '🏥',
    name: 'Healthcare & Wellness',
    description: 'Chiropractors, dentists, med spas, therapists. Trust signals, insurance info, appointment booking.',
    tags: ['Provider bio', 'Insurance', 'Book appt', 'Reviews'],
  },
]

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">Built for your industry, not just any industry</h2>
          <p className="text-ink-500 mt-3 text-lg max-w-xl mx-auto">
            We have purpose-built templates for the most common local business types — no starting from scratch every time.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {niches.map((niche) => (
            <motion.div
              key={niche.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -6 }}
            >
              <SpotlightCard className="h-full bg-white rounded-xl p-6 border border-cream-200 shadow-sm hover:border-brand-200 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{niche.icon}</div>
                <h3 className="font-bold text-ink-900 mb-2">{niche.name}</h3>
                <p className="text-ink-500 text-sm leading-relaxed mb-5">{niche.description}</p>
                <div className="flex flex-wrap gap-2">
                  {niche.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-brand-50 text-brand-700 font-medium px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-ink-400 text-sm mt-10"
        >
          Don't see your industry? <a href="#contact" className="text-brand-600 font-medium hover:text-brand-700">Ask us — we can build for most niches.</a>
        </motion.p>
      </div>
    </section>
  )
}
