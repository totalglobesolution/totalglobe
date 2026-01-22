"use client"

import type React from "react"
import { CheckCircle, Send } from "lucide-react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!smsConsent || !marketingConsent) {
      alert("Please check both consent checkboxes to submit the form.")
      return
    }
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setSmsConsent(false)
    setMarketingConsent(false)
  }

  return (
    <div className="md:col-span-2">
      <h2 className="text-3xl font-bold text-foreground mb-8">Reach Out to Us</h2>

      {submitted && (
        <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground">Message Sent!</h3>
            <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
            placeholder="(555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {/* SMS Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="smsConsent"
            checked={smsConsent}
            onChange={(e) => setSmsConsent(e.target.checked)}
            className="mt-1 w-4 h-4 text-accent bg-card border-border rounded focus:ring-accent focus:ring-2 flex-shrink-0"
          />
          <label htmlFor="smsConsent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
            I consent to receive text messages about appointment reminders, delivery notifications, etc. from GetMeConnect at the phone number I provided. I acknowledge that my consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for assistance or STOP to opt out of receiving messages. For more information, please review our <a href="/privacy" className="text-blue-800 dark:text-blue-400 font-bold hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-800 dark:text-blue-400 font-bold hover:underline">Terms and Conditions</a>.
          </label>
        </div>

        {/* Marketing Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="marketingConsent"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            className="mt-1 w-4 h-4 text-accent bg-card border-border rounded focus:ring-accent focus:ring-2 flex-shrink-0"
          />
          <label htmlFor="marketingConsent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
            I consent to receive marketing text messages, such as Promotional Texts, Sales, Special offers, etc., from GetMeConnect at the phone number I provided, including messages sent via auto dialer. I understand that my consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for assistance or STOP to opt out of receiving messages. <a href="/privacy" className="text-blue-800 dark:text-blue-400 font-bold hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-800 dark:text-blue-400 font-bold hover:underline">Terms and Conditions</a>.
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit
        </button>
      </form>
    </div>
  )
}
