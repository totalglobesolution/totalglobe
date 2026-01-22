import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    { icon: Phone, label: "Phone", value: "(855) 683-7625" },
    { icon: Mail, label: "Email", value: "support@totalbusinesssolutions.com" },
    { icon: MapPin, label: "Address", value: "123 Main Street, Springfield, IL 62701" },
    { icon: Clock, label: "Hours", value: "24/7 Available" },
  ]

  return (
    <div className="md:col-span-1">
      <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>

      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon
          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{method.label}</h3>
                <p className="text-muted-foreground">{method.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 p-8 bg-card rounded-lg border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday:</span>
            <span>10:00 AM - 5:00 PM</span>
          </li>
          <li className="flex justify-between pt-2 border-t border-border">
            <span>Support:</span>
            <span>24/7 Available</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
