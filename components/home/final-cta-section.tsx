import { Phone, MessageSquare } from "lucide-react"

export default function FinalCtaSection() {
  return (
    <section
      className="parallax relative h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url(/fiber-optic-cables-network-infrastructure.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Get <span className="text-accent">Connected</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">Check availability with Total Global Solutions today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg flex items-center justify-center gap-2">
            Call Now: (855) 683-7625
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold text-lg flex items-center justify-center gap-2">
            Call Now: (855) 683-7625
          </button>
        </div>
      </div>
    </section>
  )
}
