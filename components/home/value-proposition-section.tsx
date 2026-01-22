"use client"

import { MapPin, Clock, DollarSign, Users, Phone } from "lucide-react"

export default function ValuePropositionSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-accent/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Making Connectivity <span className="text-accent">Simple</span> for Everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Navigating cable, internet, and streaming services can be overwhelming. That's where we come in. As an independent third-party service, we provide expert guidance to help you find the right solutions for your needs—without the pressure or bias.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">We know what services are available in your area and help you find the best options.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Save Time</h3>
                  <p className="text-muted-foreground">Let us do the research and comparison work so you don't have to.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5,000+</div>
              <p className="text-muted-foreground">Happy Customers Assisted</p>
            </div>

            <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 mt-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">$200+</div>
              <p className="text-muted-foreground">Average Savings Found</p>
            </div>

            <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 -mt-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <p className="text-muted-foreground">States Covered</p>
            </div>

            <div className="bg-card/80 backdrop-blur border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
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
      </div>
    </section>
  )
}
