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
    <section id="what-we-build" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for your industry, not just any industry</h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            We have purpose-built templates for the most common local business types — no starting from scratch every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {niches.map((niche) => (
            <div key={niche.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all">
              <div className="text-3xl mb-4">{niche.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{niche.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{niche.description}</p>
              <div className="flex flex-wrap gap-2">
                {niche.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-brand-50 text-brand-700 font-medium px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Don't see your industry? <a href="#contact" className="text-brand-600 font-medium hover:text-brand-700">Ask us — we can build for most niches.</a>
        </p>
      </div>
    </section>
  )
}
