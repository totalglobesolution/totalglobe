export default function SavingsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-lg bg-background border border-border">
            <div className="text-4xl font-bold text-accent mb-2">30%</div>
            <p className="text-lg text-foreground font-semibold mb-2">Bundle Savings</p>
            <p className="text-muted-foreground">Save up to 30% when you bundle all services</p>
          </div>

          <div className="p-8 rounded-lg bg-background border border-border">
            <div className="text-4xl font-bold text-accent mb-2">$0</div>
            <p className="text-lg text-foreground font-semibold mb-2">Installation Cost</p>
            <p className="text-muted-foreground">Free professional installation included</p>
          </div>

          <div className="p-8 rounded-lg bg-background border border-border">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-lg text-foreground font-semibold mb-2">Premium Support</p>
            <p className="text-muted-foreground">Dedicated support for bundle customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
