"use client"

import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ConsentMessage() {
  return (
    <section className="w-full bg-accent/10 border-y border-accent/30 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-accent" />
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-sm text-foreground">
              <strong>By providing your phone number and submitting this form, you consent to</strong> receive SMS (text) messages and phone calls. Message and Data Rates may apply. Message frequency may vary. You can STOP messages by sending STOP and get more help by sending HELP.
            </p>
            <p className="text-sm text-muted-foreground">
              We value your privacy and will not share your information with third parties without your consent. For more information, please review our{" "}
              <Link href="/privacy" className="text-accent underline hover:text-accent/80 transition-colors font-medium">
                Privacy Policy
              </Link>
              {" "}&{" "}
              <Link href="/terms" className="text-accent underline hover:text-accent/80 transition-colors font-medium">
                Terms & Conditions
              </Link>
              . By clicking "Submit," you acknowledge that you have read and agree to the terms of this notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
