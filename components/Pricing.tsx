const plans = [
  {
    name: 'Website Build',
    price: '$1,000',
    period: 'total',
    split: '$500 upfront · $500 on delivery',
    description: 'Everything you need to get online and look professional — done in one week.',
    features: [
      'Custom-designed website (5–7 pages)',
      'Mobile-first, fast-loading',
      'Contact form (leads sent directly to you)',
      'Google Maps embed',
      'Social links + click-to-call',
      'SEO meta tags set up',
      'Deployed & live within one week',
      '1 round of revisions included',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Care Plan Basic',
    price: '$100',
    period: '/month',
    split: 'Up to 3 edits per month',
    description: "We keep your site running and handle changes — you don't touch a thing.",
    features: [
      'Hosting managed on our end',
      'Up to 3 content updates/month',
      'Same-week turnaround on changes',
      'Security & uptime monitoring',
      'Priority support',
    ],
    cta: 'Add to My Site',
    highlight: false,
  },
  {
    name: 'Care Plan Pro',
    price: '$250',
    period: '/month',
    split: 'Unlimited edits',
    description: 'Full maintenance with no edit limits — we handle everything.',
    features: [
      'Hosting managed on our end',
      'Unlimited content updates',
      'Same-week turnaround on changes',
      'Security & uptime monitoring',
      'Annual design refresh',
      'Priority support',
    ],
    cta: 'Add to My Site',
    highlight: true,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.highlight
                  ? 'border-brand-500 bg-brand-600 text-white shadow-xl shadow-brand-900/20'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-1">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? 'text-brand-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-xs font-medium mb-3 ${plan.highlight ? 'text-brand-200' : 'text-brand-600'}`}>
                {plan.split}
              </p>
              <p className={`text-sm mb-7 ${plan.highlight ? 'text-brand-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
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
                className={`block text-center py-3 rounded-lg font-semibold transition-colors mt-auto ${
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
          Care plans are optional and can be added anytime. Domain not included (~$15/yr).
        </p>
      </div>
    </section>
  )
}
