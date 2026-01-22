import Link from "next/link"
import { Phone } from "lucide-react"

export default function GuidanceAreasSection() {
  const areas = [
    {
      title: "Internet Service Guidance",
      description: "Learn about internet speeds, data options, and how to choose the right service for your needs.",
      href: "/services",
    },
    {
      title: "Cable TV Information",
      description: "Understand cable TV options, channel packages, and entertainment choices available.",
      href: "/services",
    },
    {
      title: "Service Comparison",
      description: "Get guidance on how different service options compare so you can make informed decisions.",
      href: "/services",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Guidance <span className="text-accent">Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide informational support across multiple service categories to help you understand your options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Link href={area.href} key={index}>
              <div className="h-full bg-card rounded-lg p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <span className="text-accent font-semibold inline-flex items-center gap-2">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
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
