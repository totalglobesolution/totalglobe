export default function InternetGallery() {
  const images = [
    { image: "/home-office-desk-setup-internet.jpg", alt: "Home office setup" },
    { image: "/gaming-setup-high-speed-internet.jpg", alt: "Gaming setup" },
    { image: "/multiple-devices-connected-network.jpg", alt: "Multiple devices" },
    { image: "/modern-router-wifi-device.jpg", alt: "WiFi router" },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Internet for Every <span className="text-accent">Lifestyle</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
