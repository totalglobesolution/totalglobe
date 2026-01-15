import { Tv, Radio, Gift, Clock } from "lucide-react"

export default function CableBenefitsSection() {
  const benefits = [
    {
      icon: Tv,
      title: "4K Ultra HD",
      description: "Watch in stunning 4K quality on compatible TVs and devices.",
    },
    {
      icon: Radio,
      title: "DVR Included",
      description: "Record and watch your favorite programs whenever you want.",
    },
    {
      icon: Gift,
      title: "Premium Add-ons",
      description: "Add HBO, Showtime, Starz, and other premium channels.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our support team is always available to help.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Premium TV <span className="text-accent">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
