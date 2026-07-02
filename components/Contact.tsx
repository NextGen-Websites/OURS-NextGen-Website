'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Magnetic from './Magnetic'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    })
    setLoading(false)
    if (res.ok) setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-cream-50 py-20 md:py-28 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full bg-brand-200/40 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">Let's get your business online</h2>
          <p className="text-ink-500 mt-3 text-lg">Free quote, no pressure. We'll get back to you within 1 business day.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-brand-50 border border-brand-200 rounded-2xl p-14 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                className="text-5xl mb-4"
              >
                🎉
              </motion.div>
              <h3 className="text-brand-700 font-bold text-2xl mb-2">We got it!</h3>
              <p className="text-brand-600">We'll be in touch within 1 business day.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-10 shadow-xl shadow-brand-900/5 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Your name</label>
                  <input type="text" name="name" required placeholder="John Smith"
                    className="w-full bg-white/70 border border-cream-200 rounded-lg px-4 py-3 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Business name</label>
                  <input type="text" name="business_name" required placeholder="Smith Plumbing"
                    className="w-full bg-white/70 border border-cream-200 rounded-lg px-4 py-3 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Phone</label>
                  <input type="tel" name="phone" required placeholder="(555) 000-0000"
                    className="w-full bg-white/70 border border-cream-200 rounded-lg px-4 py-3 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Email</label>
                  <input type="email" name="email" placeholder="john@business.com"
                    className="w-full bg-white/70 border border-cream-200 rounded-lg px-4 py-3 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">What type of business?</label>
                <select name="business_type"
                  className="w-full bg-white/70 border border-cream-200 rounded-lg px-4 py-3 text-ink-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors">
                  <option value="">Select one...</option>
                  <option>Contractor / Trades</option>
                  <option>Restaurant / Food</option>
                  <option>Salon / Barbershop</option>
                  <option>Healthcare / Wellness</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Anything else? (optional)</label>
                <textarea name="message" rows={4} placeholder="Tell us about your business, what you need, any sites you like..."
                  className="w-full bg-white/70 border border-cream-200 rounded-lg px-4 py-3 text-ink-900 placeholder-ink-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none transition-colors" />
              </div>

              {!FORMSPREE_ID && (
                <p className="text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                  Add <code>NEXT_PUBLIC_FORMSPREE_ID</code> to <code>.env.local</code> to enable form submissions.
                </p>
              )}

              <Magnetic strength={0.15} className="block w-full">
                <motion.button
                  type="submit"
                  disabled={loading || !FORMSPREE_ID}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="glow-btn w-full bg-brand-500 text-white py-4 rounded-lg font-bold text-lg shadow-sm hover:bg-brand-600 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Get My Free Quote'}
                </motion.button>
              </Magnetic>
              <p className="text-center text-ink-400 text-sm">We respond within 1 business day. No spam, ever.</p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
