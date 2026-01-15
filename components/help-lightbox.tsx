"use client"

import { X, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function HelpLightbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const phoneNumber = "(855) 683-7625"
  const phoneLink = "+18556837625"

  useEffect(() => {
    setIsMounted(true)
    // Show lightbox after 2 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-gradient-to-br from-background to-card rounded-2xl border-2 border-accent/40 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-accent animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-foreground mb-2">Need Help Now?</h2>

          {/* Subheading */}
          <p className="text-muted-foreground mb-8">
            Talk to our independent assistance team
          </p>

          {/* Phone Display Box */}
          <div className="bg-card/50 border border-accent/30 rounded-xl px-6 py-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Call Us Now</p>
            <p className="text-4xl font-bold text-accent">{phoneNumber}</p>
          </div>

          {/* CTA Button */}
          <a
            href={`tel:${phoneLink}`}
            className="block w-full px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 mb-4 whitespace-nowrap"
          >
            <Phone className="w-6 h-6 flex-shrink-0" />
            <span>Call Now for Guidance</span>
          </a>

          {/* Footer Text */}
          <p className="text-xs text-muted-foreground">
            Independent assistance • No ISP affiliation
          </p>
        </div>

        {/* Decorative accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      </div>
    </div>
  )
}
