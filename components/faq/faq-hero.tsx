export default function FaqHero() {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Frequently Asked <span className="text-accent">Questions</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">Find answers to common questions about our services</p>
      </div>
    </section>
  )
}
