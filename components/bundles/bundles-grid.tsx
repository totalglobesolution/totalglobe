"use client"

import { Wifi, Tv, PhoneIcon, DollarSign } from "lucide-react"

export default function BundlesGrid() {
  const bundles = [
    {
      name: "Starter Bundle",
      image: "/bundle-package-internet-cable-phone.jpg",
      description: "Perfect for light users and budget-conscious families",
      price: "$89.99",
      period: "/month",
      savingsAmount: "$45/month",
      services: [
        { icon: Wifi, text: "300 Mbps Internet" },
        { icon: Tv, text: "200+ Channels" },
        { icon: PhoneIcon, text: "Home Phone" },
        { icon: DollarSign, text: "Save 25%" },
      ],
      popular: false,
    },
    {
      name: "Premium Bundle",
      image: "/pro-internet-plan-fast.jpg",
      description: "Our most popular choice for families",
      price: "$129.99",
      period: "/month",
      savingsAmount: "$70/month",
      services: [
        { icon: Wifi, text: "500 Mbps Internet" },
        { icon: Tv, text: "350+ Channels" },
        { icon: PhoneIcon, text: "Home Phone" },
        { icon: DollarSign, text: "Save 30%" },
      ],
      popular: true,
    },
    {
      name: "Ultimate Bundle",
      image: "/ultra-1gbps-fastest-internet.jpg",
      description: "Complete entertainment and connectivity solution",
      price: "$189.99",
      period: "/month",
      savingsAmount: "$105/month",
      services: [
        { icon: Wifi, text: "1 Gbps Internet" },
        { icon: Tv, text: "500+ Channels" },
        { icon: PhoneIcon, text: "Home Phone" },
        { icon: DollarSign, text: "Save 30%" },
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your <span className="text-accent">Perfect Bundle</span>
          </h2>
          <p className="text-lg text-muted-foreground">All bundles include free installation and equipment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all ${
                bundle.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {bundle.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                  BEST VALUE
                </div>
              )}

              <div className="h-48 overflow-hidden bg-card">
                <img
                  src={bundle.image || "/placeholder.svg"}
                  alt={bundle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={`p-8 ${bundle.popular ? "bg-accent/10" : "bg-card"}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{bundle.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{bundle.description}</p>

                <div className="mb-6 p-4 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-accent">{bundle.price}</span>
                    <span className="text-muted-foreground">{bundle.period}</span>
                  </div>
                  <div className="text-sm text-accent font-semibold mt-2">{bundle.savingsAmount}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {bundle.services.map((service, idx) => {
                    const IconComponent = service.icon
                    return (
                      <li key={idx} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{service.text}</span>
                      </li>
                    )
                  })}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    bundle.popular
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
