"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Logo from "./logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition">
          <Logo className="h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-foreground hover:text-accent transition">
            Services
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent transition">
            About
          </Link>
          <Link href="/faq" className="text-foreground hover:text-accent transition">
            FAQ
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition">
            Contact
          </Link>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Call: (855) 683-7625
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-fade-in-up">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/services" className="text-foreground hover:text-accent transition">
                Services
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition">
                About
              </Link>
              <Link href="/faq" className="text-foreground hover:text-accent transition">
                FAQ
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition">
                Contact
              </Link>
              <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call: (855) 683-7625
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
