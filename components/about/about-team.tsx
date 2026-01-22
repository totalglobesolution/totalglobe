export default function AboutTeam() {
  const team = [
    { name: "John Smith", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
    { name: "Sarah Johnson", role: "VP of Customer Service", image: "/placeholder.svg?height=300&width=300" },
    { name: "Michael Chen", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
    { name: "Emma Davis", role: "VP of Sales", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Meet Our <span className="text-accent">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 h-64 rounded-lg overflow-hidden bg-background">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-accent font-semibold text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
