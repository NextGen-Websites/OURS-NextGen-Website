import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-950 text-white py-28 md:py-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text + CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-900/50 border border-brand-800 text-brand-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
              Now taking new clients
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              We build websites for the businesses that{' '}
              <span className="text-brand-500">built your town.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Professional websites for local businesses — done in a week, starting at $1,000. No bloated agencies, no 6-week timelines, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact"
                 className="inline-flex items-center justify-center bg-brand-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-700 transition-colors">
                Get a Free Quote
              </a>
              <a href="#how-it-works"
                 className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-14">
              {['Contractors', 'Restaurants', 'Salons', 'Healthcare', 'And more'].map((niche) => (
                <span key={niche} className="text-gray-500 text-sm flex items-center gap-2">
                  <span className="text-brand-500">✓</span> {niche}
                </span>
              ))}
            </div>
          </div>

          {/* Right: logo */}
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="NextGen Websites"
              width={420}
              height={420}
              className="w-full max-w-sm rounded-3xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
