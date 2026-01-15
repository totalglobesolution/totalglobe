import Header from "@/components/header"
import HeroSection from "@/components/home/hero-section"
import ComplianceSection from "@/components/home/compliance-section"
import HowWeHelpSection from "@/components/home/how-we-help-section"
import OurRoleSection from "@/components/home/our-role-section"
import ValuePropositionSection from "@/components/home/value-proposition-section"
import GuidanceAreasSection from "@/components/home/guidance-areas-section"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TrustSection from "@/components/home/trust-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import ConsentMessage from "@/components/consent-message"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <section className="w-full bg-accent/10 border-y border-accent/30 py-4 text-center text-base text-muted-foreground">
        <strong className="text-foreground">Disclosure:</strong> Total Global Solutions is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any cable, internet, or telecom service provider.
      </section>
      <ComplianceSection />
      <HowWeHelpSection />
      <OurRoleSection />
      <ValuePropositionSection />
      <GuidanceAreasSection />
      <WhyChooseUsSection />
      <TrustSection />
      <TestimonialsSection />
      <ConsentMessage />
      <Footer />
    </main>
  )
}
