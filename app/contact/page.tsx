import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact Us | Total Global Solutions",
  description: "Get in touch with Total Global Solutions. Call, email, or visit us for support and inquiries.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-base text-muted-foreground mb-4">
          <strong>Disclosure:</strong> We are an independent third-party service assistance startup, launched in 2026, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
        </p>
        <p className="text-base text-muted-foreground mb-8">
          Have questions or need help? Our team is here to assist and guide you. Please use the form below or call our business number. Our call greeting will always state our independent status.
        </p>
      </section>
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
