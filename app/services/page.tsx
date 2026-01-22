import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Wifi, Tv, Package, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Our Services | Total Global Solutions",
  description:
    "Discover how Total Global Solutions can assist you with cable, internet, streaming, and bundled service guidance. Independent third-party assistance startup launched in 2026.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Wifi,
      title: "Internet Guidance",
      description:
        "We help you understand internet speeds, data requirements, and which provider options align with your household needs—from streaming and gaming to remote work.",
      features: [
        "Speed tier recommendations",
        "Provider comparison assistance",
        "Data plan guidance",
        "Equipment and setup support",
      ],
    },
    {
      icon: Tv,
      title: "Cable TV Assistance",
      description:
        "Navigate cable TV options, channel packages, and entertainment services with our independent guidance. We help you understand what's available without sales pressure.",
      features: [
        "Channel package comparisons",
        "DVR and on-demand guidance",
        "HD/4K capability explanations",
        "Contract term reviews",
      ],
    },
    {
      icon: Package,
      title: "Bundle Guidance",
      description:
        "Understand how bundled services work and which combinations make sense for your situation. We provide clarity on pricing, terms, and what to expect.",
      features: [
        "Bundle option explanations",
        "Cost-benefit analysis",
        "Provider bundle comparisons",
        "Contract guidance",
      ],
    },
    {
      icon: HelpCircle,
      title: "General Support",
      description:
        "Have questions about providers, billing, switching services, or understanding your options? Our team provides unbiased support and answers.",
      features: [
        "Provider questions answered",
        "Service switching guidance",
        "Billing clarifications",
        "General consultations",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Independent Service Assistance
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We guide and assist households in navigating cable, internet, and streaming options—without selling plans
            or representing any provider. Our service fees are separate and transparent.
          </p>
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-lg px-6 py-3">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Disclosure:</strong> We are an independent third-party service
              assistance startup, launched in 2026, and are not affiliated with, endorsed by, or sponsored by any
              cable, internet, or streaming service provider.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border hover:border-accent transition">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-lg mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How We're <span className="text-accent">Different</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Not an ISP</h3>
              <p className="text-muted-foreground">
                We are not a service provider. We don't sell internet, cable, or streaming plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Independent</h3>
              <p className="text-muted-foreground">
                No affiliations with providers. Our guidance is unbiased and based on your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Transparent</h3>
              <p className="text-muted-foreground">
                Clear service fees disclosed upfront. No hidden costs or misleading claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to learn how we can assist you in navigating your cable, internet, and streaming options.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg"
          >
            Request Assistance
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
