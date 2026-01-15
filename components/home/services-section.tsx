"use client"

import { Wifi, Tv, Package, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState([false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const updated = [...prev]
                updated[index] = true
                return updated
              })
            }, index * 100)
          }
        },
        { threshold: 0.1 },
      )
    })

    cardsRef.current.forEach((card, index) => {
      if (card && observers[index]) {
        observers[index]!.observe(card)
      }
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const services = [
    {
      icon: Wifi,
      title: "Internet",
      description: "Ultra-fast speeds up to 1Gbps for streaming, gaming, and working from home.",
      image: "/fiber-optic-internet-router-wifi.jpg",
      href: "/internet-plans",
    },
    {
      icon: Tv,
      title: "Cable TV",
      description: "Crystal-clear HD and 4K channels with on-demand movies and shows.",
      image: "/cable-television-tv-box-channels.jpg",
      href: "/cable-tv",
    },
    {
      icon: Package,
      title: "Bundles",
      description: "Save big by bundling Internet, Cable TV, and Home Phone services.",
      image: "/bundle-package-internet-cable-phone.jpg",
      href: "/bundles",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the perfect service for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`group cursor-pointer h-full transition-all duration-500 ${
                  visibleCards[index] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 h-64 bg-card hover-lift">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="pt-4 text-accent font-semibold group-hover:translate-x-2 transition-transform flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call for Details →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
