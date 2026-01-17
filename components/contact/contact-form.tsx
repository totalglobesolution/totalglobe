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
  const [consentChecked, setConsentChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setConsentChecked(false)
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

        {/* Consent Message */}
        <div className="bg-[#f5f0eb] dark:bg-slate-800 rounded-lg p-6 shadow-sm">
          <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">
            By providing your phone number and submitting this form, you consent to receive <span className="font-bold">Customer Care</span> and <span className="font-bold">Marketing</span> SMS (text) messages and phone calls. Message and Data Rates may apply, message frequency may vary. You can STOP messaging by sending STOP and get more help by sending HELP.
          </p>
          <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed mt-3">
            We value your privacy and will not share your information with third parties without your consent. For more information, please review our <a href="/privacy" className="underline font-bold hover:text-red-700 dark:hover:text-red-300 transition-colors">Privacy Policy</a> & <a href="/terms" className="underline font-bold hover:text-red-700 dark:hover:text-red-300 transition-colors">Terms & Conditions</a> By clicking "Submit," you acknowledge that you have read and agree to the terms of this consent.
          </p>
          
          {/* Checkbox */}
          <div className="mt-4 flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              className="mt-1 w-4 h-4 text-accent bg-card border-border rounded focus:ring-accent focus:ring-2"
            />
            <label htmlFor="consent" className="text-sm text-red-600 dark:text-red-400 cursor-pointer">
              I agree
            </label>
          </div>
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
