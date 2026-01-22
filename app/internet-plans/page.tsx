import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Internet Guidance & Support | Total Global Solutions",
  description:
    "We guide and assist you in understanding internet options, speeds, and what works best for your household needs.",
}

export default function InternetPlansPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Internet Guidance & Support</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We assist households and individuals in understanding internet options, speeds, and considerations for their specific needs. As an independent platform, we provide guidance without selling plans or representing any provider.
        </p>
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Help With</h2>
            <ul className="text-base text-muted-foreground list-disc list-inside space-y-3">
              <li>Understanding different internet speeds and what they mean for your needs</li>
              <li>Comparing different provider options in your area</li>
              <li>Identifying the right speed tier for streaming, gaming, and working from home</li>
              <li>Understanding data plans, equipment, and contract terms</li>
              <li>Navigating provider selection and service setup</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Role</h2>
            <p className="text-base text-muted-foreground">
              We do not sell internet plans. Instead, we facilitate your understanding of available options and assist you in making informed decisions about which provider and speed tier aligns with your household needs. Our service fees are separate from provider charges.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
