"use client"

import { useState } from "react"
import { ChevronDown, PhoneIcon } from "lucide-react"

export default function FaqContent() {
  const [openCategory, setOpenCategory] = useState<string | null>("service")

  const faqCategories = {
    service: {
      title: "About Total Global Solutions",
      questions: [
        {
          q: "What is Total Global Solutions?",
          a: "We are an independent, third-party service assistance startup launched in 2026. We help individuals and households understand and navigate cable, internet, and streaming service options through unbiased guidance.",
        },
        {
          q: "Are you a service provider or ISP?",
          a: "No. We are NOT a service provider, ISP, or authorized dealer for any cable, internet, or streaming company. We are completely independent and provide guidance only.",
        },
        {
          q: "Who do you represent?",
          a: "We represent ourselves—an independent guidance company. We do not represent, sell for, or have official affiliation with Xfinity®, Spectrum®, DIRECTV®, or any other provider.",
        },
        {
          q: "Will you ever ask for my provider password?",
          a: "Never. We will never request your provider password, SSN, credit card number, or any sensitive credentials. If anyone claiming to represent us asks for this information, it is a scam.",
        },
      ],
    },
    guidance: {
      title: "Our Services & Guidance",
      questions: [
        {
          q: "What guidance do you provide?",
          a: "We help you understand internet speeds, cable TV options, bundled services, pricing models, and how to evaluate which services best fit your household needs. We provide research and education, not sales.",
        },
        {
          q: "What is the cost of your guidance?",
          a: "Our service fees vary based on the complexity of assistance needed and whether we provide full research and recommendations. All fees are transparent and clearly communicated before you request our services.",
        },
        {
          q: "Are your service fees separate from provider charges?",
          a: "Yes, completely separate. Our fees are for our guidance and research services only. You continue to be billed separately by your provider for their cable, internet, or streaming services.",
        },
        {
          q: "Can I get a refund?",
          a: "Yes. Refund requests may be submitted within 7 to 15 days of purchase, depending on the type of assistance provided and whether we have already delivered the service. See our Refund Policy for complete details.",
        },
      ],
    },
    data: {
      title: "Data & Privacy",
      questions: [
        {
          q: "What information do you collect from me?",
          a: "We collect basic contact information (name, email, phone) and details about your current or desired services to provide accurate guidance. We do NOT collect passwords, financial information, or SSNs.",
        },
        {
          q: "Will you share my information with service providers?",
          a: "No, never without your explicit written consent. We do not sell or share your personal information with providers, marketers, or third parties.",
        },
        {
          q: "How do you keep my information safe?",
          a: "We use industry-standard encryption and security practices to protect your data. Your information is stored securely and only accessed by our guidance team for your service delivery.",
        },
        {
          q: "Do you use cookies to track my provider information?",
          a: "No. Our cookies are only used for website functionality and analytics. We never use cookies to track provider accounts or collect sensitive information.",
        },
      ],
    },
    process: {
      title: "How Our Guidance Works",
      questions: [
        {
          q: "How does the guidance process work?",
          a: "You share your situation (current services, needs, budget), we research your options independently, and we provide transparent guidance on what might work best. You then contact providers directly based on our recommendations.",
        },
        {
          q: "Will you help me sign up with a provider?",
          a: "We do not sign you up or process applications for providers. We provide guidance only. After receiving our recommendations, you will contact the provider directly to arrange service.",
        },
        {
          q: "Who is responsible for my service after I sign up?",
          a: "The service provider is completely responsible for service delivery, billing, technical support, and customer service. We are not involved in your account after the guidance phase ends.",
        },
        {
          q: "How do I contact a service provider based on your recommendations?",
          a: "We will provide you with direct contact information for providers. You then reach out to them directly to discuss service options and pricing.",
        },
      ],
    },
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers about Total Global Solutions and how our independent guidance works.</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-border">
        {Object.entries(faqCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setOpenCategory(key)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              openCategory === key
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Q&A Content */}
      <div className="space-y-4">
        {openCategory &&
          faqCategories[openCategory as keyof typeof faqCategories]?.questions.map(
            (item: { q: string; a: string }, index: number) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:bg-card/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-accent font-bold">Q:</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-muted-foreground flex items-start gap-3">
                  <span className="text-accent font-bold">A:</span>
                  <span>{item.a}</span>
                </p>
              </div>
            )
          )}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 pt-12 border-t border-border">
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is ready to help. Reach out to us through any channel for additional assistance.
          </p>
          <a
            href="tel:18001234567"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            Call Now: (855) 683-7625
          </a>
        </div>
      </div>
    </section>
  )
}
