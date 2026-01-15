export default function BundlesGallery() {
  const images = [
    { image: "/family-streaming-entertainment-home-living-room.jpg", alt: "Family enjoying bundles" },
    { image: "/home-office-desk-setup-internet.jpg", alt: "Work and entertainment" },
    { image: "/modern-router-wifi-device.jpg", alt: "Network setup" },
    { image: "/gaming-setup-high-speed-internet.jpg", alt: "Gaming with bundles" },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          All-in-One <span className="text-accent">Solutions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((item, index) => (
            <div key={index} className="group relative h-80 rounded-lg overflow-hidden bg-background cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-semibold">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
