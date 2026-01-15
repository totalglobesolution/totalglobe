import Header from "@/components/header"
import Footer from "@/components/footer"
import FaqHero from "@/components/faq/faq-hero"
import FaqContent from "@/components/faq/faq-content"

export const metadata = {
  title: "FAQ | Total Global Solutions",
  description: "Frequently asked questions about Total Global Solutions services, billing, and support.",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FaqHero />
      <FaqContent />
      <Footer />
    </main>
  )
}
