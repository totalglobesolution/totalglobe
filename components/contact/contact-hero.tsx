export default function ContactHero() {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Get in <span className="text-accent">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We're here to help. Contact us anytime for questions or support.
        </p>
      </div>
    </section>
  )
}
