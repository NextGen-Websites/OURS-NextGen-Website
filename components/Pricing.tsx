const plans = [
  {
    name: 'Starter Site',
    price: '$1,000',
    period: 'one-time',
    description: 'Everything you need to get online and look professional.',
    features: [
      'Custom-designed website (5–7 pages)',
      'Mobile-first, fast-loading',
      'Contact form (email leads directly to you)',
      'Google Maps embed',
      'Social links + click-to-call',
      'SEO meta tags set up',
      'Deployed to Vercel (free hosting)',
      '1 round of revisions included',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Starter + Care Plan',
    price: '$1,000',
    period: '+ $150/mo',
    description: 'Build your site and keep it maintained — hands off for you.',
    features: [
      'Everything in Starter Site',
      'Hosting managed on our end',
      'Up to 3 content updates/month',
      'Same-week turnaround on changes',
      'Annual design refresh',
      'Priority support',
    ],
    cta: 'Best Value — Get Started',
    highlight: true,
  },
  {
    name: 'Care Plan Only',
    price: '$150',
    period: '/month',
    description: "Already have a site? We'll maintain it for you.",
    features: [
      'Up to 3 content updates/month',
      'Hosting managed on our end',
      'Same-week turnaround on changes',
      'Priority support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, honest pricing</h2>
          <p className="text-gray-500 mt-3 text-lg">No hidden fees. No hourly billing. No surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlight
                  ? 'border-brand-500 bg-brand-600 text-white shadow-xl shadow-brand-900/20'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-2">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? 'text-brand-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-7 ${plan.highlight ? 'text-brand-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-brand-200' : 'text-brand-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={plan.highlight ? 'text-brand-100' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          All projects require a 50% deposit upfront. Domain not included (usually ~$15/yr).
        </p>
      </div>
    </section>
  )
}
