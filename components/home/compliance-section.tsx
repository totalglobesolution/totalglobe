import { CheckCircle2, XCircle, Phone } from "lucide-react"

export default function ComplianceSection() {
  const whatWeDo = [
    "Provide general guidance on internet and cable service options",
    "Help you understand connectivity terminology and service differences",
    "Offer informational support about common connectivity issues",
    "Assist with service provider research and comparison",
    "Guide you through the decision-making process independently",
  ]

  const whatWeDoNot = [
    "We are NOT an Internet Service Provider (ISP)",
    "We do NOT sell internet or cable subscriptions directly",
    "We do NOT provide official customer support for any brand",
    "We are NOT affiliated, authorized, or endorsed by any telecom provider",
    "We do NOT guarantee technical fixes or service availability",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-accent">Do & Do Not Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For complete transparency, here's exactly what our independent third-party guidance includes and what it doesn't.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* What We Do */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What We Do</h3>
            </div>

            <ul className="space-y-4">
              {whatWeDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do Not Do */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What We Do Not Do</h3>
            </div>

            <ul className="space-y-4">
              {whatWeDoNot.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Statement */}
        <div className="mt-16 bg-accent/5 border-2 border-accent/30 rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground font-semibold mb-3">
            Our Independent Role
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Total Global Solutions is an independent third-party service assistance provider. We provide informational guidance and support to help you understand your options. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="tel:+18556837625"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all font-bold text-lg flex items-center gap-3 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
          >
            Call Now: (855) 683-7625
          </a>
        </div>
      </div>
    </section>
  )
}
