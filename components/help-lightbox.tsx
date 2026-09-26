"use client"

import { X, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HelpLightbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const phoneNumber = "(833) 821-1859"
  const phoneLink = "+18338211859"

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isMounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-lg border-2 border-accent/40 bg-gradient-to-br from-background to-card shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="call-lightbox-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 transition-colors hover:bg-foreground/20 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Close call dialog"
          ref={closeButtonRef}
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Content */}
        <div className="p-6 text-center sm:p-8">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-accent animate-pulse" />
          </div>

          {/* Heading */}
          <h2 id="call-lightbox-title" className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">Need Help Now?</h2>

          {/* Subheading */}
          <p className="text-muted-foreground mb-8">
            Talk to our independent assistance team
          </p>

          {/* Phone Display Box */}
          <div className="mb-6 rounded-lg border border-accent/30 bg-card/50 px-4 py-4 sm:px-6">
            <p className="text-sm text-muted-foreground mb-2">Call Us Now</p>
            <p className="text-3xl font-bold text-accent sm:text-4xl">{phoneNumber}</p>
          </div>

          {/* CTA Button */}
          <a
            href={`tel:${phoneLink}`}
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            <Phone className="w-6 h-6 flex-shrink-0" />
            <span>Call Now for Guidance</span>
          </a>

          {/* Footer Text */}
          <p className="text-xs text-muted-foreground">
            Independent assistance • No ISP affiliation
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      </div>
    </div>
  )
}
