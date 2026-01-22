export default function OnDemandSection() {
  return (
    <section
      className="parallax relative h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/placeholder.svg?height=600&width=1920&query=on-demand-streaming-movies-shows-entertainment)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Watch <span className="text-accent">On-Demand</span> Content
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Thousands of movies, shows, and specials available 24/7. Choose what you want to watch, when you want to watch
          it.
        </p>
      </div>
    </section>
  )
}
