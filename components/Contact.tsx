'use client'

import { useState } from 'react'

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
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's get your business online</h2>
          <p className="text-gray-500 mt-3 text-lg">Free quote, no pressure. We'll get back to you within 1 business day.</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-14 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-green-800 font-bold text-2xl mb-2">We got it!</h3>
            <p className="text-green-600">We'll be in touch within 1 business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name</label>
                <input type="text" name="name" required placeholder="John Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Business name</label>
                <input type="text" name="business_name" required placeholder="Smith Plumbing"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <input type="tel" name="phone" required placeholder="(555) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input type="email" name="email" placeholder="john@business.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">What type of business?</label>
              <select name="business_type"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500">
                <option value="">Select one...</option>
                <option>Contractor / Trades</option>
                <option>Restaurant / Food</option>
                <option>Salon / Barbershop</option>
                <option>Healthcare / Wellness</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Anything else? (optional)</label>
              <textarea name="message" rows={4} placeholder="Tell us about your business, what you need, any sites you like..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none" />
            </div>

            {!FORMSPREE_ID && (
              <p className="text-xs text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                Add <code>NEXT_PUBLIC_FORMSPREE_ID</code> to <code>.env.local</code> to enable form submissions.
              </p>
            )}

            <button type="submit" disabled={loading || !FORMSPREE_ID}
              className="w-full bg-brand-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-700 transition-colors disabled:opacity-60">
              {loading ? 'Sending...' : 'Get My Free Quote'}
            </button>
            <p className="text-center text-gray-400 text-sm">We respond within 1 business day. No spam, ever.</p>
          </form>
        )}
      </div>
    </section>
  )
}
