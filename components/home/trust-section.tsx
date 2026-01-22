"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Zap, Globe, Phone } from "lucide-react"

export default function TrustSection() {
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

  const trustFeatures = [
    {
      icon: Shield,
      title: "Your Data Is Protected",
      description: "We never request provider passwords or sensitive credentials. Your privacy is paramount.",
    },
    {
      icon: Zap,
      title: "Transparent Guidance",
      description: "Clear, upfront information about service options without hidden fees or misleading claims.",
    },
    {
      icon: Globe,
      title: "Independent & Unbiased",
      description: "As an independent startup, we guide you without representing any provider.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by <span className="text-accent">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering reliable service and exceptional customer support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`bg-card rounded-lg p-8 border border-border transition-all duration-500 ${
                visibleCards[index] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
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
