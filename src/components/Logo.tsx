export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  const isInverted = className?.includes('invert') || className?.includes('text-white') || className?.includes('brightness-0');
  const textColor = isInverted ? "#FFFFFF" : "#0B253A";

  const sizeClasses = className?.includes('h-') || className?.includes('w-') ? '' : 'h-12';

  return (
    <div className={`aspect-[5/1] flex items-center justify-start ${sizeClasses} ${className} select-none`}>
      <svg 
        viewBox="0 0 500 100" 
        className="w-full h-full" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="smp-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#398E3D" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
          <linearGradient id="smp-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#33C1FF" />
          </linearGradient>
        </defs>

        <g transform="translate(10, 10)">
          <circle 
            cx="40" 
            cy="40" 
            r="36" 
            stroke={isInverted ? "rgba(255, 255, 255, 0.12)" : "rgba(11, 37, 58, 0.05)"} 
            strokeWidth="2" 
            fill="none" 
          />
          <circle 
            cx="40" 
            cy="40" 
            r="36" 
            stroke="url(#smp-green-grad)" 
            strokeWidth="3.5" 
            strokeDasharray="45 180" 
            strokeLinecap="round" 
            fill="none" 
            transform="rotate(-40 40 40)" 
          />
          <circle 
            cx="40" 
            cy="40" 
            r="36" 
            stroke="url(#smp-blue-grad)" 
            strokeWidth="3.5" 
            strokeDasharray="35 190" 
            strokeLinecap="round" 
            fill="none" 
            transform="rotate(130 40 40)" 
          />
          <path
            d="M 40 15 C 56 15, 65 24, 65 40 C 65 56, 52 65, 40 65 C 25 65, 22 50, 31 40 C 35 34, 40 15, 40 15 Z"
            fill="url(#smp-green-grad)"
          />
          <path
            d="M 46 28 C 55 28, 60 35, 60 46 C 60 58, 51 63, 42 63 C 35 63, 33 55, 38 48 C 41 44, 46 28, 46 28 Z"
            fill="url(#smp-blue-grad)"
            opacity="0.92"
          />
        </g>

        <text
          x="105"
          y="66"
          style={{
            fontFamily: '"Outfit", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            fontSize: '52px',
            userSelect: 'none'
          }}
        >
          <tspan fontWeight="900" fill={textColor} letterSpacing="-1.5px">SMP</tspan>
          <tspan fontWeight="300" fill={textColor} letterSpacing="2px">{" "}FRANCE</tspan>
        </text>
      </svg>
    </div>
  );
}
