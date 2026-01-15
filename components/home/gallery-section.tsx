"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

export default function GallerySection() {
  const [visibleImages, setVisibleImages] = useState(Array(8).fill(false))
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = imagesRef.current.map((img, index) => {
      if (!img) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => {
                setVisibleImages((prev) => {
                  const updated = [...prev]
                  updated[index] = true
                  return updated
                })
              },
              (index % 4) * 100,
            )
          }
        },
        { threshold: 0.1 },
      )
    })

    imagesRef.current.forEach((img, index) => {
      if (img && observers[index]) {
        observers[index]!.observe(img)
      }
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const galleryImages = [
    { image: "/family-streaming-entertainment-together.jpg", alt: "Family streaming content" },
    { image: "/modern-router-wifi-device.jpg", alt: "Modern router" },
    { image: "/home-office-desk-setup-internet.jpg", alt: "Home office setup" },
    { image: "/multiple-devices-connected-network.jpg", alt: "Multiple devices" },
    { image: "/gaming-setup-high-speed-internet.jpg", alt: "Gaming setup" },
    { image: "/cable-tv-remote-entertainment-system.jpg", alt: "Cable TV system" },
    { image: "/high-speed-internet-connection-tech.jpg", alt: "Connection technology" },
    { image: "/smart-home-wifi-devices-network.jpg", alt: "Smart home devices" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-accent">Network</span> in Action
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            See how our services transform the way people work, play, and stay connected
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el
              }}
              className={`group relative h-64 rounded-lg overflow-hidden bg-card cursor-pointer transition-all duration-500 ${
                visibleImages[index] ? "animate-fade-in opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-semibold">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <a
          href="tel:+18556837625"
          className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all font-bold text-lg flex items-center gap-3 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
        >
          Call Now: (855) 683-7625
        </a>
      </div>
    </section>
  )
}
