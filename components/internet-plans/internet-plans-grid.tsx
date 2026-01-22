"use client"

import { Zap, Wifi, Shield, Clock, Phone } from "lucide-react"

export default function InternetPlansGrid() {
  const plans = [
    {
      name: "Starter",
      speed: "300 Mbps",
      price: "$49.99",
      period: "/month",
      image: "/basic-internet-plan.jpg",
      description: "Perfect for everyday browsing and video streaming",
      features: [
        { icon: Zap, text: "300 Mbps download speed" },
        { icon: Wifi, text: "Unlimited data" },
        { icon: Shield, text: "Free antivirus protection" },
        { icon: Clock, text: "24/7 customer support" },
      ],
      popular: false,
    },
    {
      name: "Professional",
      speed: "500 Mbps",
      price: "$69.99",
      period: "/month",
      image: "/pro-internet-plan-fast.jpg",
      description: "Ideal for remote work and multiple device streaming",
      features: [
        { icon: Zap, text: "500 Mbps download speed" },
        { icon: Wifi, text: "Unlimited data" },
        { icon: Shield, text: "Free router included" },
        { icon: Clock, text: "Priority 24/7 support" },
      ],
      popular: true,
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: "$99.99",
      period: "/month",
      image: "/ultra-1gbps-fastest-internet.jpg",
      description: "Ultimate speed for power users and large households",
      features: [
        { icon: Zap, text: "1 Gbps download speed" },
        { icon: Wifi, text: "Unlimited data" },
        { icon: Shield, text: "Premium WiFi 6 router" },
        { icon: Clock, text: "VIP dedicated support" },
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your Internet <span className="text-accent">Speed</span>
          </h2>
          <p className="text-lg text-muted-foreground">All plans include unlimited data and free installation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="h-48 overflow-hidden bg-card">
                <img src={plan.image || "/placeholder.svg"} alt={plan.name} className="w-full h-full object-cover" />
              </div>

              <div className={`p-8 ${plan.popular ? "bg-accent/10" : "bg-card"}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">{plan.speed}</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => {
                    const IconComponent = feature.icon
                    return (
                      <li key={idx} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "border-2 border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (855) 683-7625
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
