import React from 'react';

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-md overflow-visible">
    {/* Orange Circle Base */}
    <circle cx="50" cy="60" r="35" fill="#ff7e00" />
    
    {/* Calligraphic 'N' */}
    <text 
      x="50" 
      y="72" 
      textAnchor="middle" 
      fill="white" 
      style={{ fontFamily: '"Great Vibes", cursive', fontSize: '50px' }}
    >
      N
    </text>
    
    {/* Subtle Details */}
    <path d="M30 55 A20 20 0 0 1 30 75" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
    <path d="M70 55 A20 20 0 0 0 70 75" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />

    {/* Leaves on top */}
    <g transform="translate(50, 35)">
      {/* Center Leaf */}
      <path 
        d="M0 0 C 5 -15, 15 -25, 0 -35 C -15 -25, -5 -15, 0 0" 
        fill="#ff7e00" 
        stroke="white" 
        strokeWidth="1.5"
      />
      {/* Right Leaf */}
      <path 
        d="M5 -5 C 15 -10, 25 -5, 35 -15 C 25 -25, 15 -20, 5 -5" 
        fill="#ff7e00" 
        stroke="white" 
        strokeWidth="1.5"
      />
      {/* Left Leaf */}
      <path 
        d="M-5 -5 C -15 -10, -25 -5, -35 -15 C -25 -25, -15 -20, -5 -5" 
        fill="#ff7e00" 
        stroke="white" 
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export default Logo;
