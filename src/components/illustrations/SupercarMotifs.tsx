import React from 'react';

export const SupercarLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="OnlySuds Supercar Logo"
  >
    {/* Aggressive Supercar Shield */}
    <path
      d="M50 4L92 20V62L50 96L8 62V20L50 4Z"
      fill="#121418"
      stroke="#E50914"
      strokeWidth="3.5"
    />
    {/* Inner Racing Stripe */}
    <path
      d="M50 14L82 27V56L50 84L18 56V27L50 14Z"
      stroke="#FF1E27"
      strokeWidth="1.5"
      strokeDasharray="4 2"
      fill="none"
    />
    {/* Stylized Supercar Silhouette / Aerodynamic Wing */}
    <path
      d="M26 52C32 44 42 40 50 40C58 40 68 44 74 52L80 50C72 38 60 34 50 34C40 34 28 38 20 50L26 52Z"
      fill="#E50914"
    />
    <path
      d="M24 60H76L68 66H32L24 60Z"
      fill="#FF1E27"
    />
    {/* OnlySuds Lettering */}
    <text
      x="50"
      y="48"
      fill="#FFFFFF"
      fontSize="8"
      fontWeight="900"
      fontFamily="Space Grotesk, sans-serif"
      textAnchor="middle"
      letterSpacing="1.5"
    >
      ONLYSUDS
    </text>
    {/* Foam bubbles accent */}
    <circle cx="38" cy="28" r="3.5" fill="#E50914" opacity="0.8" />
    <circle cx="62" cy="26" r="2.5" fill="#FFFFFF" opacity="0.9" />
    <circle cx="50" cy="22" r="2" fill="#E50914" />
  </svg>
);

export const TachometerMotif: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Dial Arc */}
    <path
      d="M20 75 A 40 40 0 1 1 80 75"
      stroke="#2A303C"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Redline zone */}
    <path
      d="M65 30 A 40 40 0 0 1 80 75"
      stroke="#E50914"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Needle pointing near redline */}
    <line x1="50" y1="50" x2="72" y2="35" stroke="#FF1E27" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="50" r="5" fill="#E50914" stroke="#FFFFFF" strokeWidth="1.5" />
  </svg>
);
