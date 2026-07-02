const values = [
  { title: 'We move fast', body: 'Most agencies take 6–8 weeks. We deliver in one. Our process is built for speed without cutting corners.' },
  { title: 'Fair prices', body: 'We built a streamlined process so we can charge $1,000 instead of $5,000 and still do great work.' },
  { title: 'Real people', body: 'You get our direct contact. No account managers, no ticket systems. Text us if something comes up.' },
  { title: 'Built to last', body: 'Every site runs on Next.js — fast, SEO-friendly, and easy to update. No Wix, no drag-and-drop builders.' },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              We started Redbud because local businesses deserve better than what they've been getting.
            </h2>
            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              <p>
                Walk down any Main Street and you'll find great businesses with terrible websites — or no website at all. Not because they don't care, but because the quotes they got were $5,000 and six weeks away.
              </p>
              <p>
                We built Redbud to fix that. Using modern tools and a tight process, we build professional sites in a week for a price that actually makes sense for a small business. Every site is custom — not a drag-and-drop template you could've built yourself.
              </p>
              <p>
                We're a small team. That's on purpose. You'll always know who you're working with, and you'll always be able to reach us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
