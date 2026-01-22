import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Advertising Disclosure | Total Global Solutions",
  description: "Advertising and FTC disclosure for Total Global Solutions.",
}

export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Advertising <span className="text-accent">Disclosure</span>
          </h1>
          <p className="text-lg text-muted-foreground">Transparency in how we operate and earn compensation</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Advertising Disclosure</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">FTC Disclosure</h2>
              <p>
                <strong className="text-foreground">
                  We are an independent authorized dealer and not the service provider.
                </strong>
              </p>
              <p>
                Total Global Solutions is an independent authorized dealer, not the cable or internet service provider. We
                are compensated by service providers for referring customers. This means we may receive commissions or
                other compensation when you sign up for services through us. This compensation does not affect the price
                you pay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Provider Information</h2>
              <p>
                We partner with major cable and internet service providers to offer their services in your area. The
                actual services are provided by these third-party providers, not by Total Global Solutions. For service
                support, billing issues, or technical problems, you may need to contact the actual service provider
                directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Pricing Disclosure</h2>
              <p>
                Advertised prices are current promotional rates. After promotional periods, standard rates apply. All
                prices are subject to change. Equipment fees, taxes, and additional charges may apply. Please review
                your service agreement for complete pricing details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Availability</h2>
              <p>
                Services are not available in all areas. Service availability is determined by the service provider. Use
                the "Call Now" tool on our website to confirm service availability at your address.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Speeds and Performance</h2>
              <p>
                Advertised internet speeds are the maximum speeds available. Actual speeds may vary based on network
                conditions, equipment, distance from the network hub, and other factors. We do not guarantee specific
                speeds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Comparison Tools</h2>
              <p>
                When comparing services, please note that our pricing and service offerings may differ from other
                providers. Contact us directly for the most accurate information about services available in your area.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p>
                For questions about this disclosure or to verify our status as an independent dealer, contact us at:
                <br />
                Phone: (855) 683-7625
                <br />
                Email: disclosure@talkpointsolutions.com
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
