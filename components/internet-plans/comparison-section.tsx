export default function ComparisonSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Plan <span className="text-accent">Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 text-foreground font-bold">Feature</th>
                <th className="pb-4 text-center text-foreground font-bold">Starter</th>
                <th className="pb-4 text-center text-foreground font-bold">Professional</th>
                <th className="pb-4 text-center text-foreground font-bold">Ultra</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Download Speed", starter: "300 Mbps", pro: "500 Mbps", ultra: "1 Gbps" },
                {
                  feature: "Upload Speed",
                  starter: "10 Mbps",
                  pro: "20 Mbps",
                  ultra: "50 Mbps",
                },
                {
                  feature: "Data Limit",
                  starter: "Unlimited",
                  pro: "Unlimited",
                  ultra: "Unlimited",
                },
                { feature: "Router Cost", starter: "$99", pro: "Free", ultra: "Free" },
                {
                  feature: "Installation",
                  starter: "Free",
                  pro: "Free",
                  ultra: "Free",
                },
                {
                  feature: "Contract Length",
                  starter: "Month-to-month",
                  pro: "Month-to-month",
                  ultra: "Month-to-month",
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border">
                  <td className="py-4 text-foreground font-medium">{row.feature}</td>
                  <td className="py-4 text-center text-muted-foreground">{row.starter}</td>
                  <td className="py-4 text-center text-muted-foreground">{row.pro}</td>
                  <td className="py-4 text-center text-accent font-semibold">{row.ultra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
