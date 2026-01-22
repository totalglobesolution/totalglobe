import { Heart, Zap, Users, Award } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Transparency",
      description: "We clearly disclose what we do, what we don't do, and how we operate. No hidden agendas.",
    },
    {
      icon: Zap,
      title: "Independence",
      description: "We are not affiliated with any service provider. Our guidance is unbiased and in your interest.",
    },
    {
      icon: Users,
      title: "Honesty",
      description: "We provide truthful, accurate information. We never misrepresent our role or services.",
    },
    {
      icon: Award,
      title: "Compliance",
      description: "We follow all regulations and best practices to protect consumers and maintain trust.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Our <span className="text-accent">Core Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
