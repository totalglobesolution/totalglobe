export default function ChannelsSection() {
  const categories = [
    { name: "Sports", channels: "ESPN, Fox Sports, NFL Network, MLB Network, NBA TV" },
    { name: "Movies", channels: "HBO, Showtime, Starz, Cinemax, Premium movies on-demand" },
    { name: "News", channels: "CNN, MSNBC, Fox News, BBC, International news networks" },
    { name: "Family", channels: "Disney, Nickelodeon, Cartoon Network, Discovery Kids" },
    { name: "Entertainment", channels: "AMC, TNT, TBS, E!, Bravo, reality and entertainment" },
    { name: "Lifestyle", channels: "HGTV, Food Network, Travel Channel, home and garden" },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Explore Our <span className="text-accent">Channels</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-accent transition"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">{category.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{category.channels}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
