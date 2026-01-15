import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutValues from "@/components/about/about-values"
import AboutStats from "@/components/about/about-stats"

export const metadata = {
  title: "About Total Global Solutions | Independent Service Assistance Startup",
  description:
    "Learn about Total Global Solutions, an independent third-party service assistance startup launched in 2026. We guide and assist households in navigating cable, internet, and streaming options without representing any provider.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <Footer />
    </main>
  )
}
