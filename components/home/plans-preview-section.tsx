"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

export default function PlansPreviewSection() {
  const [visiblePlans, setVisiblePlans] = useState([false, false, false])
  const plansRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = plansRef.current.map((plan, index) => {
      if (!plan) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisiblePlans((prev) => {
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

    plansRef.current.forEach((plan, index) => {
      if (plan && observers[index]) {
        observers[index]!.observe(plan)
      }
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const plans = [
    {
      name: "Basic",
      speed: "300 Mbps",
      price: "$49.99",
      image: "/basic-internet-plan.jpg",
      features: ["300 Mbps Speed", "Unlimited Data", "24/7 Support"],
    },
    {
      name: "Pro",
      speed: "500 Mbps",
      price: "$69.99",
      image: "/pro-internet-plan-fast.jpg",
      features: ["500 Mbps Speed", "Unlimited Data", "Free Router", "24/7 Support"],
      featured: true,
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: "$99.99",
      image: "/ultra-1gbps-fastest-internet.jpg",
      features: ["1 Gbps Speed", "Unlimited Data", "Free Router", "Priority Support"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Internet <span className="text-accent">Plans</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Find the perfect plan for your speed needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                plansRef.current[index] = el
              }}
              className={`rounded-lg overflow-hidden transition-all duration-500 ${
                visiblePlans[index] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              } ${plan.featured ? "ring-2 ring-accent scale-105 md:scale-100" : ""}`}
            >
              <div className="h-40 overflow-hidden bg-card hover-lift">
                <img src={plan.image || "/placeholder.svg"} alt={plan.name} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 ${plan.featured ? "bg-accent/10" : "bg-card"}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-accent">{plan.speed}</div>
                  <div className="text-2xl font-semibold text-foreground">{plan.price}/mo</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center">
                      <span className="w-4 h-4 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.featured
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "border-2 border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
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
