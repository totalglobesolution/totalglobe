import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions | Total Global Solutions",
  description: "Terms and conditions for Total Global Solutions independent service assistance platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Terms & <span className="text-accent">Conditions</span>
          </h1>
          <p className="text-lg text-muted-foreground">Please read these terms carefully before using our services</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Terms &amp; Conditions</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              <p className="text-sm">
                <strong className="text-foreground">Critical Disclosure:</strong> We are an independent third-party service assistance startup, launched in 2026. We do not sell, resell, or represent any cable, internet, or streaming provider. All provider names (Xfinity®, Spectrum®, DIRECTV®, etc.) are referenced descriptively only. We never request provider passwords or sensitive credentials.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the Total Global Solutions website and services, you accept and agree to be bound by these terms and conditions. If you do not agree to abide by any of these terms, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
              <p>
                Total Global Solutions provides independent guidance and assistance with understanding cable, internet, and streaming service options. We assist individuals and households in navigating their options but do not:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Sell internet, cable TV, or streaming plans</li>
                <li>Represent or act as any service provider</li>
                <li>Process provider payments or manage provider accounts</li>
                <li>Request or store provider passwords or sensitive credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Fees</h2>
              <p>
                Our service fees are separate from and independent of any provider charges. You will continue to be billed by your provider for their services. Our fees are for guidance and assistance only and are clearly disclosed before you request our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Refunds</h2>
              <p>
                Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether assistance has been delivered. Please review our <a href="/refund-policy" className="text-accent underline">Refund Policy</a> for full details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information) on our website for personal, non-commercial viewing only. Under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
              <p>
                All materials on our website are provided on an "as is" basis. Total Global Solutions makes no warranties, expressed or implied, regarding the accuracy, completeness, or usefulness of information provided. We do not guarantee specific outcomes or provider decisions based on our guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall Total Global Solutions be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services or website, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Provider Responsibility</h2>
              <p>
                Total Global Solutions is not responsible for the actions, services, or policies of any cable, internet, or streaming service provider. Provider services, billing, and customer support are the sole responsibility of the provider. Our role is guidance and assistance only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the website after modifications constitutes your acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
              <p>
                For questions about these terms, please <a href="/contact" className="text-accent underline">contact us</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
