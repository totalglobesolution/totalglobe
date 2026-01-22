import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Total<span className="text-accent">Global</span>
              </h2>
              <p className="text-accent text-sm font-semibold">YOUR CONNECTIVITY PARTNER</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Independent third-party service assistance guiding you to the perfect cable, internet, and streaming solutions since 2026.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-accent transition">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+18556837625" className="text-sm">(855) 683-7625</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-accent transition">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:support@totalbusinesssolutions.com" className="text-sm">support@totalbusinesssolutions.com</a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-accent transition font-medium">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/internet-plans" className="hover:text-accent transition">
                  Internet Plans
                </Link>
              </li>
              <li>
                <Link href="/bundles" className="hover:text-accent transition">
                  Bundle Deals
                </Link>
              </li>
              <li>
                <Link href="/cable-tv" className="hover:text-accent transition">
                  Cable TV
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-accent transition font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-accent transition">
                  Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-foreground mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-accent transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-accent transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-accent transition">
                  Refunds
                </Link>
              </li>
              <li>
                <Link href="/do-not-sell" className="hover:text-accent transition">
                  Do Not Sell
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-accent transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Compliance Disclaimer */}
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <h5 className="font-bold text-foreground mb-3 text-sm">Disclaimer</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Total Global Solutions is an independent third-party service assistance provider. We are NOT affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider. Brand names, if mentioned, are used strictly for informational purposes only. We do not sell services directly and charge separate fees for our guidance.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-between md:justify-end gap-6">
              <span className="text-sm text-muted-foreground font-medium">Follow Us</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition group">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} <span className="font-semibold text-foreground">Total Global Solutions</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-accent transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-accent transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
