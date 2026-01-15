"use client"

import { Phone } from "lucide-react"

export default function ParallaxSection() {
  return (
    <section
      className="parallax relative h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url(/corporate-office-high-speed-internet-workspace.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/70" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Stay Connected <span className="text-accent">Anytime, Anywhere</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Whether you're at home, in the office, or on the go, our network reaches you.
        </p>
        <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold">
          View Coverage Map
        </button>
        <a
          href="tel:+18556837625"
          className="inline-block ml-3 px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold flex items-center gap-2"
        >
          Call Now
        </a>
      </div>
    </section>
  )
}
