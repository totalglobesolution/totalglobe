import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Chatbot from "@/components/chatbot"
import HelpLightbox from "@/components/help-lightbox"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Premium Cable & Internet Services | Total Globe Solutions",
  description:
    "Fast, reliable cable and internet services from Total Globe Solutions. Compare plans, check availability, and get connected today.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <HelpLightbox />
        <Chatbot />
      </body>
    </html>
  )
}
