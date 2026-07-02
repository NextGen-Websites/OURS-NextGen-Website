'use client'

import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Fill Out Our Intake Form',
    body: 'You answer a few questions about your business — takes about 10 minutes. Tell us your story, your services, what makes you different.',
  },
  {
    number: '02',
    title: 'We Build Your Site',
    body: "We handle everything — copy, design, contact form, mobile layout. You'll have a preview link within 5–7 days.",
  },
  {
    number: '03',
    title: 'Review, Approve, Go Live',
    body: "You look it over, tell us what to tweak, and we launch. Domain pointed, SSL active, live on the internet — same week.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">From first call to live site in one week</h2>
          <p className="text-ink-500 mt-3 text-lg max-w-xl mx-auto">We've built a process that's fast without cutting corners.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-cream-200" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="relative text-center md:text-left"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: -3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl mb-6"
              >
                <span className="text-brand-600 font-bold text-xl">{step.number}</span>
              </motion.div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">{step.title}</h3>
              <p className="text-ink-500 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a href="#contact"
             whileHover={{ scale: 1.03 }}
             whileTap={{ scale: 0.97 }}
             className="inline-flex items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:bg-brand-600 hover:shadow-md transition-colors">
            Start the Process →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
