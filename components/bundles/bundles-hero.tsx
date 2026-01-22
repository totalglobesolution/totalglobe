export default function BundlesHero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1920&query=bundled-services-internet-cable-phone-together)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Save Big with <span className="text-accent">Bundle Packages</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Get Internet + Cable TV + Phone. Save up to 30% when you bundle.
        </p>
      </div>
    </section>
  )
}
