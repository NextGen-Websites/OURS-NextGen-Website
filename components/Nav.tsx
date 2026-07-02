'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import Magnetic from './Magnetic'

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#what-we-build', label: 'What We Build' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const navShadow = useTransform(scrollY, [0, 80], ['0 0 0 rgba(43,31,39,0)', '0 8px 24px rgba(43,31,39,0.08)'])
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(243,230,208,0)', 'rgba(243,230,208,1)'])

  return (
    <motion.nav
      style={{ boxShadow: navShadow, borderColor: navBorder }}
      className="sticky top-0 z-50 bg-cream-50/60 backdrop-blur-xl border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-ink-900 font-serif font-bold text-lg tracking-tight"
          >
            Redbud <span className="text-brand-500">Websites</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="relative text-ink-500 hover:text-ink-900 text-sm font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <Magnetic strength={0.4}>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glow-btn inline-block bg-brand-500 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-brand-600 transition-colors"
              >
                Get a Free Quote
              </motion.a>
            </Magnetic>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-ink-700" aria-label="Toggle menu">
            <motion.svg
              className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              initial={false}
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-cream-200"
            >
              <div className="py-4 space-y-1">
                {links.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-ink-500 font-medium">
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="block mt-3 bg-brand-500 text-white text-center py-3 rounded-lg font-semibold">
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
