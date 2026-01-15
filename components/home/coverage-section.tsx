import { Phone } from "lucide-react"

export default function CoverageSection() {
  return (
    <section
      className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/world-map-network-connections-global.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Expanding to Your <span className="text-accent">Neighborhood</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">Check if Total Global Solutions is available at your address</p>
        <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg inline-flex items-center gap-2 hover:shadow-lg hover:shadow-accent/50">
          Call Now: (855) 683-7625
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
