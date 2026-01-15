"use client"

import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function StickyCallButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const phoneNumber = "(855) 683-7625"
  const phoneLink = "+18556837625"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <a
      href={`tel:${phoneLink}`}
      className="fixed bottom-8 right-8 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3">
          <Phone className="w-6 h-6" />
          <span className={`font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
          }`}>
            {phoneNumber}
          </span>
        </div>

        {/* Tooltip */}
        {!isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-sm font-semibold text-foreground">Call Now</p>
            <p className="text-xs text-muted-foreground">{phoneNumber}</p>
          </div>
        )}
      </div>
    </a>
  )
}
