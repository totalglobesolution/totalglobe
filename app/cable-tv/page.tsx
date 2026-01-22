import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Cable TV Guidance & Support | Total Global Solutions",
  description:
    "We guide and assist you in understanding cable TV options, channels, and what service works best for your entertainment needs.",
}

export default function CableTvPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Cable TV Guidance & Support</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We assist households and individuals in understanding cable TV options, channel offerings, and what service aligns with their entertainment preferences. As an independent platform, we provide guidance without selling plans or representing any provider.
        </p>
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Help With</h2>
            <ul className="text-base text-muted-foreground list-disc list-inside space-y-3">
              <li>Understanding cable TV channel packages and what channels are included</li>
              <li>Comparing on-demand and DVR options across providers</li>
              <li>Exploring HD and 4K viewing capabilities</li>
              <li>Understanding contract terms, equipment fees, and billing</li>
              <li>Identifying the right cable service for your household needs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Role</h2>
            <p className="text-base text-muted-foreground">
              We do not sell cable TV plans. Instead, we facilitate your understanding of available options and assist you in making informed decisions about which provider and package aligns with your entertainment preferences. Our service fees are separate from provider charges.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
