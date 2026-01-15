export default function AboutStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src="/team-meeting-collaboration-business.jpg" alt="Our story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-accent">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Total Global Solutions was founded as an independent third-party service assistance provider dedicated to helping consumers navigate the complex world of internet, cable, and telecom services.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Our mission is simple:</strong> Provide clear, unbiased guidance and informational support without representing any service provider. We help you understand your options, compare plans, and make informed decisions about your connectivity needs.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Since 2026, we've been committed to transparency, accuracy, and putting your interests first. We do not sell subscriptions, we are not affiliated with any ISP or cable company, and we never request provider passwords or sensitive credentials.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, thousands of consumers trust us for independent guidance on internet and cable services. We're building a reputation as the most transparent, honest third-party assistance provider in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
