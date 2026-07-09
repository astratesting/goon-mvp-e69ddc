import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <header className="border-b border-violet-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-violet-900">Goon</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors">
              Sign in
            </Link>
            <Link href="/signup" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500"></span>
            Built for Real Estate Teams
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Marketing on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-coral-500">
              Autopilot
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            Goon generates property blogs, social posts, and email sequences for your real estate brokerage. Compliance-aware, neighborhood-specific content — in minutes, not hours.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/signup" className="btn-primary text-lg px-8 py-3.5">
              Start Free Trial
            </Link>
            <Link href="#features" className="btn-outline text-lg px-8 py-3.5">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything Your Brokerage Needs</h2>
        <p className="text-center text-gray-500 font-body mb-12 max-w-xl mx-auto">
          From listing to lead nurture, Goon handles your marketing so you can focus on closing deals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '📝', title: 'AI Blog Posts', desc: 'Property-focused blog drafts with neighborhood context, SEO keywords, and compliance-aware copy.' },
            { icon: '📱', title: 'Social Content', desc: 'Platform-optimized posts for Instagram, Facebook, and LinkedIn with brand voice consistency.' },
            { icon: '📧', title: 'Email Sequences', desc: 'Drip campaigns for new listings, open houses, and past-client nurture — all on brand.' },
            { icon: '🗺️', title: 'Neighborhood Intel', desc: 'Auto-populated local market data, school info, and community highlights for every listing.' },
            { icon: '✅', title: 'Compliance Built-In', desc: 'TCPA-aware messaging, fair housing language checks, and franchise rule compliance.' },
            { icon: '📊', title: 'Performance Reports', desc: 'Track engagement, reach, and conversion across all your marketing channels.' },
          ].map((feature, i) => (
            <div key={i} className="card-warm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 font-body leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-3xl mx-6 mb-20 p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Marketing?</h2>
        <p className="text-violet-100 font-body text-lg mb-8 max-w-xl mx-auto">
          Join brokerages across Arizona and California who are saving 10+ hours per week on content creation.
        </p>
        <Link href="/signup" className="inline-flex bg-white text-violet-700 font-bold py-3 px-8 rounded-xl hover:bg-violet-50 transition-colors text-lg">
          Start Your Free Trial
        </Link>
      </section>

      <footer className="border-t border-violet-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-400">
          <p>© 2026 Goon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/login" className="hover:text-violet-600 transition-colors">Sign In</Link>
            <Link href="/signup" className="hover:text-violet-600 transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}