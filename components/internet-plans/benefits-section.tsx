import { Zap, RotateCcw, Headphones, Lock } from "lucide-react"

export default function InternetBenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Speeds",
      description: "Stream 4K video, play online games, and video conference simultaneously without buffering.",
    },
    {
      icon: RotateCcw,
      title: "99.9% Uptime Guarantee",
      description: "Our network is built for reliability. We guarantee 99.9% uptime or you get credits.",
    },
    {
      icon: Headphones,
      title: "Award-Winning Support",
      description: "24/7 customer service with local technicians ready to help when you need them.",
    },
    {
      icon: Lock,
      title: "Security Included",
      description: "Advanced antivirus protection and firewall included with every plan.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Why Choose <span className="text-accent">Total Global Solutions</span> Internet Guidance
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
