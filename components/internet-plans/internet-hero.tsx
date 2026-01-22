export default function InternetHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1920&query=fiber-optic-cables-fast-internet-network)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Lightning-Fast <span className="text-accent">Internet</span> Plans
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Speeds up to 1 Gbps. Perfect for streaming, gaming, and working from home.
        </p>
      </div>
    </section>
  )
}
