export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Moderation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Moderate Review Photos{" "}
          <span className="text-[#58a6ff]">Before They Go Live</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          ReviewGuard scans every user-uploaded review photo for inappropriate content, brand violations, and fake review signals — automatically, at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Moderating — $18/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🚫", title: "Inappropriate Content", desc: "Detects nudity, violence, and offensive imagery using OpenAI Vision and AWS Rekognition." },
            { icon: "🏷️", title: "Brand Violations", desc: "Flags competitor logos, counterfeit products, and off-brand imagery in review photos." },
            { icon: "🤖", title: "Fake Review Detection", desc: "Identifies AI-generated images, stock photos, and recycled review assets automatically." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 5,000 photo scans/mo",
              "Inappropriate content detection",
              "Brand violation flagging",
              "Fake review image analysis",
              "REST API for integration",
              "Moderation dashboard",
              "Email alerts for flagged content"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the photo moderation work?",
              a: "ReviewGuard sends each uploaded review photo through OpenAI Vision and AWS Rekognition APIs. Results are combined and scored — flagged photos appear in your dashboard for manual review or are auto-rejected based on your thresholds."
            },
            {
              q: "Can I integrate ReviewGuard with my existing platform?",
              a: "Yes. ReviewGuard provides a simple REST API. Send a photo URL or base64 image to our endpoint and receive a moderation verdict in milliseconds. Works with any e-commerce platform or marketplace."
            },
            {
              q: "What happens if I exceed 5,000 scans per month?",
              a: "You'll receive an email alert at 80% usage. Additional scans are billed at $0.005 per scan. You can also contact us to discuss a custom plan for higher volumes."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} ReviewGuard. All rights reserved.
      </footer>
    </main>
  );
}
