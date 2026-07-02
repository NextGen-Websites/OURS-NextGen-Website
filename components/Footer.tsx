'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-cream-100 border-t border-cream-200 text-ink-500 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <Image src="/Logo3.jpg" alt="Redbud Websites" width={1349} height={720} className="h-9 w-auto rounded-md" />
        <p className="text-sm">© {year} Redbud Websites. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a>
        </div>
      </motion.div>
    </footer>
  )
}
