"use client"

import { Tv, Film, Radio, Zap, PhoneIcon } from "lucide-react"

export default function CablePlansGrid() {
  const plans = [
    {
      name: "Basic Cable",
      channels: "200+",
      price: "$39.99",
      period: "/month",
      image: "/basic-internet-plan.jpg",
      description: "Essential channels for the whole family",
      features: [
        { icon: Tv, text: "200+ channels" },
        { icon: Film, text: "On-demand movies" },
        { icon: Radio, text: "Music channels" },
        { icon: Zap, text: "DVR included" },
      ],
      popular: false,
    },
    {
      name: "Premium Cable",
      channels: "350+",
      price: "$69.99",
      period: "/month",
      image: "/cable-television-tv-box-channels.jpg",
      description: "Most popular choice with premium channels",
      features: [
        { icon: Tv, text: "350+ channels" },
        { icon: Film, text: "Premium movies" },
        { icon: Radio, text: "Music channels" },
        { icon: Zap, text: "4K ready" },
      ],
      popular: true,
    },
    {
      name: "Ultimate Cable",
      channels: "500+",
      price: "$99.99",
      period: "/month",
      image: "/ultra-1gbps-fastest-internet.jpg",
      description: "Complete entertainment with all premium channels",
      features: [
        { icon: Tv, text: "500+ channels" },
        { icon: Film, text: "All premium content" },
        { icon: Radio, text: "Full music library" },
        { icon: Zap, text: "4K Ultra HD" },
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your Cable TV <span className="text-accent">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">All plans include DVR, on-demand, and HD channels</p>
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
                    <span className="text-3xl font-bold text-accent">{plan.channels}</span>
                    <span className="text-muted-foreground">channels</span>
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
                  <PhoneIcon className="w-5 h-5" />
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
