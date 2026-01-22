import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Do Not Sell My Personal Information | Total Global Solutions",
  description: "Information about your privacy rights regarding personal data sales.",
}

export default function DoNotSellPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Do Not Sell My <span className="text-accent">Personal Information</span>
          </h1>
          <p className="text-lg text-muted-foreground">Your privacy rights under CCPA and similar laws</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
              <p>
                Under the California Consumer Privacy Act (CCPA) and similar state privacy laws, you have the right to
                know what personal information is collected about you, the sources of that information, and how it is
                used and shared.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Do Not Sell or Share My Personal Information</h2>
              <p>
                You have the right to opt out of the "sale" or "sharing" of your personal information. As an independent
                dealer, Total Global Solutions does not sell your personal information to third parties for marketing purposes. We
                only share information with service providers necessary to fulfill your service request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights Under CCPA</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Know what personal information is collected</li>
                <li>Know whether personal information is sold or disclosed</li>
                <li>Say no to the sale or sharing of personal information</li>
                <li>Access your personal information</li>
                <li>Request deletion of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Submit a Request</h2>
              <p>To exercise your privacy rights, please submit a written request to:</p>
              <p>
                Total Global Solutions Privacy Rights
                <br />
                Email: privacy@totalglobalsolutions.com
                <br />
                Phone: (855) 683-7625
                <br />
                Mail: 123 Main Street, Springfield, IL 62701
              </p>
              <p>
                Please include "Privacy Request" in the subject line and provide sufficient information to verify your
                identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Provider Sharing</h2>
              <p>
                To provide our services, we share necessary information with the cable and internet service providers.
                This information is used solely to activate and maintain your service and is governed by the service
                provider's privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Response Time</h2>
              <p>
                We will respond to verified requests within 45 days. If we need more time, we will notify you in
                writing. Requests that cannot be verified will be denied.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
