export default function CableHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1920&query=4k-television-streaming-entertainment-home)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Premium <span className="text-accent">Cable TV</span> Experience
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          500+ channels in HD and 4K. Movies, sports, news, and more.
        </p>
      </div>
    </section>
  )
}
