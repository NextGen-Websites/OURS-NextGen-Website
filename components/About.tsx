'use client'

import { motion } from 'motion/react'
import SpotlightCard from './SpotlightCard'

const values = [
  { title: 'We move fast', body: 'Most agencies take 6–8 weeks. We deliver in one. Our process is built for speed without cutting corners.' },
  { title: 'Fair prices', body: 'We built a streamlined process so we can charge $1,000 instead of $5,000 and still do great work.' },
  { title: 'Real people', body: 'You get our direct contact. No account managers, no ticket systems. Text us if something comes up.' },
  { title: 'Built to last', body: 'Every site runs on Next.js — fast, SEO-friendly, and easy to update. No Wix, no drag-and-drop builders.' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream-50 text-ink-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              We started Redbud because local businesses deserve better than what they've been getting.
            </h2>
            <div className="space-y-5 text-ink-500 text-lg leading-relaxed">
              <p>
                Walk down any Main Street and you'll find great businesses with terrible websites — or no website at all. Not because they don't care, but because the quotes they got were $5,000 and six weeks away from launching a site.
              </p>
              <p>
                We built Redbud to fix that. Using modern tools and a tight process, we build professional sites in a week for a price that actually makes sense for a small business. Every site is custom — not a drag-and-drop template you could've built yourself.
              </p>
              <p>
                We're a small team with roots in a small town. We know what it's like to run a business where people still know your name — that's why you'll always know who you're working with, and you'll always be able to reach us.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-5"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -4 }}
              >
                <SpotlightCard className="h-full bg-white border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-ink-900 mb-2">{v.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{v.body}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
