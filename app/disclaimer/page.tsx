import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            <span className="text-accent">Disclaimer</span>
          </h1>
          <p className="text-lg text-muted-foreground">Important information about our services and policies</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Critical Disclaimer</h2>
            <p className="text-foreground font-semibold">
              Total Global Solutions is an independent third-party service assistance startup, launched in 2026. We are NOT:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mt-3">
              <li>A service provider (we do not sell internet, cable TV, or streaming services)</li>
              <li>An authorized dealer for any provider (we have no official affiliation)</li>
              <li>Endorsed by, sponsored by, or affiliated with Xfinity®, Spectrum®, DIRECTV®, or any other provider</li>
              <li>A telecommunications company or ISP</li>
              <li>Able to process provider payments or manage provider accounts</li>
            </ul>
          </div>



          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What We Do</h3>
          <p className="text-muted-foreground mb-6">
            Total Global Solutions provides independent guidance and assistance to help individuals understand cable, internet, and streaming service options. We:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Research service options and provider offerings based on your needs</li>
            <li>Provide transparent guidance on bundled services and pricing models</li>
            <li>Help explain service plans, speeds, and contract terms</li>
            <li>Answer questions about what different services can provide</li>
            <li>Charge separate fees for our guidance services (distinct from provider charges)</li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What We Do NOT Do</h3>
          <p className="text-muted-foreground mb-6">
            To be absolutely clear, Total Global Solutions does not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Sell, resell, or represent any cable, internet, or streaming services</li>
            <li>Request or collect provider passwords, SSNs, or sensitive credentials</li>
            <li>Process provider payments or manage provider accounts</li>
            <li>Handle service installation or technical support (that is the provider's responsibility)</li>
            <li>Guarantee any specific provider actions, pricing, or service outcomes</li>
            <li>Represent ourselves as an official channel for any provider</li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Service Fees</h3>
          <p className="text-muted-foreground mb-6">
            Total Global Solutions charges fees for our guidance and assistance services. These fees are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Completely separate from and independent of provider charges</li>
            <li>Clearly disclosed before you request our services</li>
            <li>Non-refundable after assistance has been delivered (subject to our Refund Policy)</li>
            <li>For guidance and assistance only—not for the actual cable, internet, or streaming services themselves</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Your provider will bill you separately for their services. Our fees do not affect your provider charges or service.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Services As-Is</h3>
          <p className="text-muted-foreground mb-6">
            All services and information provided on this website are offered "as is." Total Global Solutions makes no
            representations or warranties of any kind, express or implied, as to the operation of this website or the
            information, content, materials, or products included on this website.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">No Warranty</h3>
          <p className="text-muted-foreground mb-6">
            To the full extent permissible by applicable law, Total Global Solutions disclaims all warranties, express or
            implied, including but not limited to implied warranties of merchantability and fitness for a particular
            purpose. We provide guidance based on information available at the time of service; outcomes depend entirely
            on provider decisions and circumstances beyond our control.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Third-Party Content</h3>
          <p className="text-muted-foreground mb-6">
            This website may contain links to third-party websites. Total Global Solutions is not responsible for the
            content, accuracy, or practices of external websites. Your use of third-party websites is at your own risk
            and subject to their terms of service and privacy policies.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Service Provider Responsibility</h3>
          <p className="text-muted-foreground mb-6">
            For technical support, service issues, billing questions, or other service-related concerns, please contact
            the actual service provider directly. Total Global Solutions can provide contact information and general guidance but
            is not responsible for service provision, quality, or any provider decisions.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Limitation of Liability</h3>
          <p className="text-muted-foreground mb-6">
            In no event shall Total Global Solutions be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, arising out of
            your use of or inability to use this website or the services offered.
          </p>

          <p className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
            <strong>Last Updated:</strong> January 2025
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
