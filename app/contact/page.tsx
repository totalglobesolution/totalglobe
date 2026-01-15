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
      
      {/* Consent Message Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#f5f0eb] dark:bg-slate-800 rounded-xl p-8 shadow-sm">
          <p className="text-red-600 dark:text-red-400 text-base leading-relaxed">
            By providing your phone number and submitting this form, you consent to receive <span className="font-bold">Customer Care</span> and <span className="font-bold">Marketing</span> SMS (text) messages and phone calls. Message and Data Rates may apply, message frequency may vary. You can STOP messaging by sending STOP and get more help by sending HELP.
          </p>
          <p className="text-red-600 dark:text-red-400 text-base leading-relaxed mt-4">
            We value your privacy and will not share your information with third parties without your consent. For more information, please review our <a href="/privacy" className="underline font-bold hover:text-red-700 dark:hover:text-red-300 transition-colors">Privacy Policy</a> & <a href="/terms" className="underline font-bold hover:text-red-700 dark:hover:text-red-300 transition-colors">Terms & Conditions</a> By clicking "Submit," you acknowledge that you have read and agree to the terms of this consent.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
