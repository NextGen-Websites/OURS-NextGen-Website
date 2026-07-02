'use client'

import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-white font-bold text-lg tracking-tight">
            Redbud <span className="text-brand-500">Websites</span>
          </span>

          <div className="hidden md:flex items-center gap-7">
            <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">How It Works</a>
            <a href="#what-we-build" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">What We Build</a>
            <a href="#pricing" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Pricing</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About</a>
            <a href="#contact"
               className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700 transition-colors">
              Get a Free Quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-400 hover:text-white" aria-label="Toggle menu">
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-800 space-y-1">
            <a href="#how-it-works" onClick={() => setOpen(false)} className="block py-2 text-gray-400 font-medium">How It Works</a>
            <a href="#what-we-build" onClick={() => setOpen(false)} className="block py-2 text-gray-400 font-medium">What We Build</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="block py-2 text-gray-400 font-medium">Pricing</a>
            <a href="#about" onClick={() => setOpen(false)} className="block py-2 text-gray-400 font-medium">About</a>
            <a href="#contact" className="block mt-3 bg-brand-600 text-white text-center py-3 rounded-lg font-semibold">Get a Free Quote</a>
          </div>
        )}
      </div>
    </nav>
  )
}
