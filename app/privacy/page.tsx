import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Total Global Solutions",
  description: "Privacy policy for Total Global Solutions. Learn how we protect your data as an independent service assistance startup.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">How we protect and handle your personal information</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong className="text-foreground">Last Updated: January 2026</strong>
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              <p className="text-sm">
                <strong className="text-foreground">Important Disclosure:</strong> Total Global Solutions is an independent third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We do not request or store provider passwords or sensitive credentials.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                Total Global Solutions ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services to seek guidance and assistance with cable, internet, and streaming options.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, postal address
                </li>
                <li>
                  <strong>Service Information:</strong> Details about your current services and guidance requests (we do NOT request provider passwords)
                </li>
                <li>
                  <strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p>Total Global Solutions uses collected information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide guidance and assistance with service options</li>
                <li>Respond to your inquiries and requests</li>
                <li>Process refund requests within our policy guidelines</li>
                <li>Improve and personalize our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. What We Do NOT Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provider account passwords or login credentials</li>
                <li>Social Security numbers or financial account details</li>
                <li>Credit card or banking information (we do not process provider payments)</li>
                <li>Any sensitive provider-specific data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or share your personal information with third parties for marketing purposes. We may disclose information as required by law or when necessary to fulfill your requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Request access to the information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at <a href="/contact" className="text-accent underline">our contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
