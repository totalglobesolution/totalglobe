"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Phone, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: Zap, text: "Fast Setup" },
    { icon: Shield, text: "Secure Guidance" },
    { icon: TrendingUp, text: "Best Options" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
          alt="Digital network background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-accent/20" />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div
                className={`mb-8 inline-flex items-center gap-2 transform transition-all duration-1000 ${
                  isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="text-sm font-semibold text-accent tracking-wide">
                  INDEPENDENT STARTUP • LAUNCHED 2026
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.1] transform transition-all duration-1000 delay-100 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Independent Internet
                <span className="block text-accent mt-2">
                  & Cable Guidance
                </span>
                <span className="block mt-2 text-lg">
                  From a Third-Party Advisor
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed transform transition-all duration-1000 delay-200 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
              </p>

              {/* Feature Pills */}
              <div
                className={`flex flex-wrap gap-4 mb-10 transform transition-all duration-1000 delay-300 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-5 py-3 bg-card/50 backdrop-blur border border-border rounded-full hover:border-accent/50 transition-all duration-300 hover:scale-105"
                  >
                    <feature.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <div
                className={`space-y-3 mb-10 transform transition-all duration-1000 delay-400 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {[
                  "Not an ISP or service provider",
                  "Independent, unbiased guidance only",
                  "Transparent fees, no hidden charges",
                  "We never request provider passwords"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <button className="group px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all font-semibold text-lg flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-105">
                  Talk to an Advisor: (855) 683-7625
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-card/50 backdrop-blur text-foreground border border-border rounded-xl hover:border-accent/50 transition-all font-semibold text-lg flex items-center gap-2 hover:scale-105">
                  Get Guidance: (855) 683-7625
                </button>
              </div>

              {/* Micro-text */}
              <p className="text-xs text-muted-foreground mt-6 flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                Not an ISP. No brand affiliation.
              </p>
            </div>

            {/* Right Visual Section - 5 columns */}
            <div className="lg:col-span-5 relative">
              <div
                className={`relative transform transition-all duration-1000 delay-200 ${
                  isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-background/50 backdrop-blur rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                      <div className="text-4xl font-bold text-accent mb-2">5K+</div>
                      <div className="text-sm text-muted-foreground">Customers Helped</div>
                    </div>
                    <div className="bg-background/50 backdrop-blur rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                      <div className="text-4xl font-bold text-accent mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">States Covered</div>
                    </div>
                    <div className="bg-background/50 backdrop-blur rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                      <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                    <div className="bg-background/50 backdrop-blur rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                      <div className="text-4xl font-bold text-accent mb-2">$200+</div>
                      <div className="text-sm text-muted-foreground">Avg. Savings</div>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800&auto=format&fit=crop"
                      alt="Professional consultation"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-card/90 backdrop-blur-lg rounded-xl p-4 border border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-sm">Independent Guidance</div>
                            <div className="text-xs text-muted-foreground">Your best interests first</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
