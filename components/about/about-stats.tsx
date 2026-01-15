export default function AboutStats() {
  const stats = [
    { number: "15+", label: "Years in Business" },
    { number: "50K+", label: "Happy Customers" },
    { number: "10+", label: "States Served" },
    { number: "24/7", label: "Customer Support" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
              <p className="text-lg text-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
