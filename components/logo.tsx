export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized TBS Icon */}
      <g>
        {/* Outer hexagon frame */}
        <path
          d="M25 8L38 15V29L25 36L12 29V15L25 8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent"
        />
        
        {/* Inner T shape */}
        <path
          d="M17 18H33M25 18V30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-accent"
        />
        
        {/* Accent dots */}
        <circle cx="25" cy="22" r="1.5" fill="currentColor" className="text-accent" />
        
        {/* Connection lines - representing connectivity */}
        <line x1="38" y1="15" x2="42" y2="13" stroke="currentColor" strokeWidth="1.5" className="text-accent opacity-60" />
        <line x1="38" y1="29" x2="42" y2="31" stroke="currentColor" strokeWidth="1.5" className="text-accent opacity-60" />
        <line x1="12" y1="15" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" className="text-accent opacity-60" />
      </g>

      {/* Company Name */}
      <text
        x="52"
        y="26"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
        className="text-foreground"
      >
        Total Global
      </text>
      <text
        x="52"
        y="42"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="currentColor"
        className="text-accent"
      >
        Solutions
      </text>
      
      {/* Tagline */}
      <text
        x="52"
        y="51"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="7"
        fontWeight="400"
        fill="currentColor"
        className="text-muted-foreground"
        letterSpacing="0.5"
      >
        YOUR CONNECTIVITY PARTNER
      </text>
    </svg>
  )
}
