"use client"

import { useState } from "react"
import { Phone } from "lucide-react"

export default function SpeedTestSection() {
  const [testing, setTesting] = useState(false)

  const handleSpeedTest = () => {
    setTesting(true)
    setTimeout(() => {
      setTesting(false)
    }, 3000)
  }

  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 border border-accent/30 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Test Your Current <span className="text-accent">Internet Speed</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Compare your current speeds with what our recommended providers can deliver. See how much faster you could be.
          </p>

          <button
            onClick={handleSpeedTest}
            disabled={testing}
            className="px-10 py-5 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg disabled:opacity-50"
          >
            {testing ? "Testing... Please Wait" : "Start Speed Test"}
          </button>

          {testing && (
            <div className="mt-8 space-y-4">
              <div className="bg-background rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Download Speed</span>
                  <span className="text-2xl font-bold text-accent animate-pulse">•••</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: "45%" }} />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Upload Speed</span>
                  <span className="text-2xl font-bold text-accent animate-pulse">•••</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: "32%" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <a
            href="tel:+18556837625"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all font-bold text-lg flex items-center gap-3 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
          >
            Call Now: (855) 683-7625
          </a>
        </div>
      </div>
    </section>
  )
}
