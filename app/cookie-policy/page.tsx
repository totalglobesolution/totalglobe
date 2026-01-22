import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Cookie <span className="text-accent">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">How we use cookies to enhance your experience</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-8">
            <p className="text-sm">
              <strong className="text-foreground">Important Note:</strong> Total Global Solutions is an independent third-party service assistance startup, not a cable, internet, or streaming service provider. Our cookies are used solely for website functionality and analytics—we do not use cookies to collect or share provider account information.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6">Cookie Policy</h2>

          <p className="text-lg text-muted-foreground mb-8">
            Total Global Solutions uses cookies and similar technologies to improve your experience on our website. This policy
            explains what cookies are, how we use them, and your choices regarding their use.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What are Cookies?</h3>
          <p className="text-muted-foreground mb-6">
            Cookies are small text files that are placed on your device when you visit a website. They help websites
            remember your preferences, track your browsing behavior, and provide personalized content and
            advertisements.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Types of Cookies We Use</h3>
          <ul className="text-muted-foreground space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>
                <strong>Essential Cookies:</strong> Required for basic website functionality and security
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>
                <strong>Performance Cookies:</strong> Help us analyze how visitors use the website
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>
                <strong>Marketing Cookies:</strong> Deliver personalized content and advertisements
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Your Cookie Choices</h3>
          <p className="text-muted-foreground mb-6">
            You can control how cookies are used on your device through your browser settings. Most browsers allow you
            to refuse cookies or alert you when a cookie is being sent. However, blocking essential cookies may affect
            website functionality.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Disabling Cookies</h3>
          <p className="text-muted-foreground mb-4">To disable cookies in popular browsers:</p>
          <ul className="text-muted-foreground space-y-2 mb-8">
            <li>
              • <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
            </li>
            <li>
              • <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
            </li>
            <li>
              • <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
            </li>
            <li>
              • <strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Third-Party Cookies</h3>
          <p className="text-muted-foreground mb-6">
            We may allow third parties (such as analytics providers and advertising partners) to set cookies on our
            website. These third parties have their own privacy policies and are responsible for their cookie practices.
            Total Global Solutions does not authorize any third parties to collect provider account information or passwords.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What We Do NOT Track</h3>
          <p className="text-muted-foreground mb-6">
            Our cookies and analytics are used solely for website functionality and user experience optimization. We do NOT use cookies or tracking technologies to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>Collect provider account information</li>
            <li>Track passwords or sensitive credentials</li>
            <li>Monitor your provider service activities</li>
            <li>Share personal data with service providers without your explicit consent</li>
          </ul>

          <p className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
            <strong>Disclaimer:</strong> Total Global Solutions is an independent service assistance startup. This cookie policy applies to
            our website only. Please review the privacy policies of service providers for information about their
            data practices.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
