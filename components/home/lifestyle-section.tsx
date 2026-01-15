"use client"

import { Phone } from "lucide-react"

export default function LifestyleSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src="/family-streaming-entertainment-home-living-room.jpg" alt="Lifestyle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          {/* Right Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Premium Entertainment for Your <span className="text-accent">Lifestyle</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Stream your favorite movies, shows, and sports in stunning HD and 4K quality. With our cable TV plans, you
              get access to hundreds of channels plus premium content on demand.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">500+ Channels</h4>
                  <p className="text-muted-foreground">Access to movies, sports, news, and more</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">4K Ultra HD</h4>
                  <p className="text-muted-foreground">Crystal-clear picture quality on compatible devices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">DVR Included</h4>
                  <p className="text-muted-foreground">Record and watch your favorite programs anytime</p>
                </div>
              </div>
            </div>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold">
              Explore TV Plans
            </button>
            <a
              href="tel:+18556837625"
              className="inline-block ml-3 px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold flex items-center gap-2"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
