import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Bundle Guidance & Support | Total Global Solutions",
  description:
    "We guide and assist you in understanding bundled service options that combine internet, cable TV, and other services.",
}

export default function BundlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Bundle Guidance & Support</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We assist households and individuals in understanding bundled service options that combine internet, cable TV, and other services. As an independent platform, we provide guidance without selling bundles or representing any provider.
        </p>
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Help With</h2>
            <ul className="text-base text-muted-foreground list-disc list-inside space-y-3">
              <li>Understanding bundled service offerings and how they work</li>
              <li>Comparing bundle options across different providers</li>
              <li>Identifying cost considerations and pricing structures</li>
              <li>Understanding contract terms and equipment included in bundles</li>
              <li>Determining which bundle best fits your household needs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Role</h2>
            <p className="text-base text-muted-foreground">
              We do not sell bundles or represent any provider. Instead, we facilitate your understanding of available bundle options and assist you in making informed decisions about which provider and bundle combination aligns with your needs. Our service fees are separate from provider charges.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
