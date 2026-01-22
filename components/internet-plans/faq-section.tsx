"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function InternetFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What internet speeds do I actually get?",
      answer:
        "Our advertised speeds are the maximum speeds available. Actual speeds may vary depending on your equipment, distance from our network hub, and other factors.",
    },
    {
      question: "Is installation included?",
      answer:
        "Yes! Professional installation is included free with all plans. Our technicians will set up your equipment and test your connection.",
    },
    {
      question: "Do you have a data cap?",
      answer:
        "No, all Total Global Solutions internet plans include unlimited data. You can stream, download, and browse without worrying about data limits.",
    },
    {
      question: "What equipment do I need?",
      answer:
        "We provide a modem with all plans. The Professional and Ultra plans include our premium WiFi 6 router at no extra cost.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "You can change your plan at any time. If you upgrade, you'll only pay the difference. If you downgrade, we'll credit your account.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Internet <span className="text-accent">FAQs</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border text-muted-foreground">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
