import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Refund <span className="text-accent">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">Understanding our refund eligibility and process</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8">
            <p className="text-foreground font-semibold mb-2">
              📋 Refund Eligibility Window
            </p>
            <p className="text-muted-foreground mb-0">
              Refund requests can be submitted within <strong>7 to 15 days</strong> of service purchase, depending on the type of assistance provided.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6">Refund Policy Overview</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Eligibility for a refund is determined by:
          </p>
          <ul className="text-muted-foreground space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>The specific service purchased and its terms</div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>Whether assistance has already been delivered or completed</div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>Compliance with our terms and conditions</div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <div>Submission of request within the eligible timeframe</div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Important Notes</h3>
          <p className="text-muted-foreground mb-6">
            We do not offer unconditional refunds. Each refund request is reviewed based on the circumstances and our policy guidelines. Services that have been fully delivered or where significant assistance has been provided may not be eligible for a full refund.
          </p>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">How to Request a Refund</h3>
          <p className="text-muted-foreground mb-6">
            To request a refund, please contact our support team with:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-8">
            <li>• Your order/service confirmation number</li>
            <li>• Date of service purchase</li>
            <li>• Reason for refund request</li>
            <li>• Any relevant documentation</li>
          </ul>

          <div className="bg-muted/10 border border-border rounded-lg p-6 mt-8">
            <p className="text-foreground font-semibold mb-2">Need Help?</p>
            <p className="text-muted-foreground">
              If you have questions about refund eligibility or need clarification, please{" "}
              <a href="/contact" className="text-accent underline hover:text-accent/80 transition-colors">
                contact our support team
              </a>
              . We're here to assist you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
