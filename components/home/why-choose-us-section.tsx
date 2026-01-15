"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Phone } from "lucide-react"

export default function WhyChooseUsSection() {
  const [visibleCards, setVisibleCards] = useState([false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const updated = [...prev]
                updated[index] = true
                return updated
              })
            }, index * 150)
          }
        },
        { threshold: 0.1 },
      )
    })

    cardsRef.current.forEach((card, index) => {
      if (card && observers[index]) {
        observers[index]!.observe(card)
      }
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const reasons = [
    {
      title: "Independent & Unbiased",
      description: "We are not affiliated with any provider, so we guide you based on your needs—not sales incentives.",
    },
    {
      title: "Transparent Pricing",
      description: "Our service fees are clearly disclosed upfront. No hidden costs, no provider deception.",
    },
    {
      title: "Your Privacy Matters",
      description: "We never request provider passwords or sensitive credentials. Your data is safe with us.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose <span className="text-accent">Our Guidance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            As an independent startup launched in 2026, we're committed to helping you navigate your options without representing any provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`bg-card rounded-lg p-8 border border-border transform transition-all duration-500 ${
                visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
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
