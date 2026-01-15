"use client"

import { Phone } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Tell Us Your Needs",
      description: "Describe your cable, internet, and streaming requirements and current situation.",
      image: "/check-availability-address-search.jpg",
    },
    {
      number: "2",
      title: "We Provide Guidance",
      description: "Our team assists and guides you through available options and considerations.",
      image: "/choose-plan-compare-pricing.jpg",
    },
    {
      number: "3",
      title: "Support Your Journey",
      description: "We facilitate your next steps and answer questions every step of the way.",
      image: "/installation-technician-setting-up-service.jpg",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          How It <span className="text-accent">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6 bg-background">
                <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">{step.number}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
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
