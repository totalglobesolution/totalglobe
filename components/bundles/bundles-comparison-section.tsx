export default function BundlesComparisonSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Bundle <span className="text-accent">Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 text-foreground font-bold">Feature</th>
                <th className="pb-4 text-center text-foreground font-bold">Starter</th>
                <th className="pb-4 text-center text-foreground font-bold">Premium</th>
                <th className="pb-4 text-center text-foreground font-bold">Ultimate</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Internet Speed",
                  starter: "300 Mbps",
                  premium: "500 Mbps",
                  ultimate: "1 Gbps",
                },
                {
                  feature: "Cable TV Channels",
                  starter: "200+",
                  premium: "350+",
                  ultimate: "500+",
                },
                {
                  feature: "Home Phone",
                  starter: "✓",
                  premium: "✓",
                  ultimate: "✓",
                },
                {
                  feature: "Free Router",
                  starter: "–",
                  premium: "✓",
                  ultimate: "✓",
                },
                {
                  feature: "4K Ready",
                  starter: "–",
                  premium: "✓",
                  ultimate: "✓",
                },
                {
                  feature: "DVR Included",
                  starter: "✓",
                  premium: "✓",
                  ultimate: "✓",
                },
                {
                  feature: "Monthly Savings",
                  starter: "$45",
                  premium: "$70",
                  ultimate: "$105",
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border">
                  <td className="py-4 text-foreground font-medium">{row.feature}</td>
                  <td className="py-4 text-center text-muted-foreground">{row.starter}</td>
                  <td className="py-4 text-center text-muted-foreground">{row.premium}</td>
                  <td className="py-4 text-center text-accent font-semibold">{row.ultimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
