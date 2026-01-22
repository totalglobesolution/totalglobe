"use client"

import { Shield, Search, FileCheck, HeartHandshake, Phone } from "lucide-react"

export default function OurRoleSection() {
  const roles = [
    {
      icon: Search,
      title: "Informational Support",
      description: "We provide general guidance on internet, cable, and telecom service options available in your area.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: FileCheck,
      title: "Understanding Options",
      description: "We help you understand different service plans, speeds, terms, and features so you can make informed decisions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: HeartHandshake,
      title: "Educational Guidance",
      description: "We provide informational assistance to help you understand connectivity concepts and service differences.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Shield,
      title: "Independent Advice",
      description: "As an independent third-party provider, we offer unbiased guidance without representing any service provider.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Role</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As an independent third-party service assistance provider, we help you navigate the complex world of internet and cable services through informational guidance only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <role.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Compliance Statement */}
        <div className="mt-16 bg-accent/5 border-2 border-accent/30 rounded-2xl p-8">
          <p className="text-foreground font-semibold mb-3">
            🔒 What This Means
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Total Global Solutions is an independent third-party service assistance provider. We are NOT affiliated with, authorized by, or endorsed by any internet service provider, cable company, or telecom carrier. We do not sell services directly, and we charge separate fees distinct from any provider charges. We never request provider passwords or sensitive credentials.
          </p>
          <p className="text-sm text-muted-foreground font-semibold">
            Our role is limited to independent guidance and informational support only.
          </p>
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
