"use client"

import { MessageSquare, Phone, Users } from "lucide-react"

export default function HowWeHelpSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Share Your Situation",
      description: "Tell us about your current service, budget, and what you're looking for in cable, internet, or streaming.",
    },
    {
      icon: Users,
      title: "Get Expert Guidance",
      description: "Our independent team provides unbiased information about available options and what works best for you.",
    },
    {
      icon: Phone,
      title: "Ongoing Support",
      description: "We're here to support your journey and answer questions as you make decisions and move forward.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            How We <span className="text-accent">Assist You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our process is designed to understand your needs and guide you to solutions that work best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <step.icon className="w-8 h-8 text-accent" />
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
