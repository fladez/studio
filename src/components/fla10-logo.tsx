import React from 'react';

export function Fla10Logo() {
  return (
    <div className="h-10 w-10">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="circleView">
            <circle cx="50" cy="50" r="50" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleView)">
          <rect x="0" y="0" width="100" height="50" fill="hsl(var(--primary))" />
          <rect x="0" y="50" width="100" height="50" fill="hsl(var(--accent))" />
          
          {/* Vulture Silhouette */}
          <g transform="translate(50,27) scale(0.65)">
            <g transform="translate(-50,-35)">
              <path 
                d="M68.8,30.3c-0.1-2.9-1.2-5.7-3.1-8.1c-2-2.3-4.5-4-7.4-4.8c-2.8-0.8-5.8-0.7-8.6,0.2c-4.1,1.3-7.7,4.1-10.2,7.9l-1.3,1.9 c-1.5,2.3-2.2,5-2.1,7.8c0.2,4.4,2.1,8.5,5.2,11.7c-2,1.3-4.3,2.3-6.7,3c-1.2,0.3-2.1,1.5-1.8,2.8c0.3,1.2,1.5,2.1,2.8,1.8 c2.9-0.8,5.6-2.1,8.1-3.8c2.1,2.5,4.6,4.6,7.5,6.1c3.2,1.7,6.8,2.6,10.4,2.6c3.4,0,6.7-0.8,9.7-2.3c3.5-1.7,6.4-4.4,8.5-7.8 c1-1.3,0.6-3.1-0.7-4.1c-1.3-1-3.1-0.6-4.1,0.7c-1.7,2.8-4.1,5-7,6.3c-2.5,1.1-5.3,1.7-8.1,1.7c-3.1,0-6.1-0.8-8.8-2.2 c-2.4-1.2-4.5-3-6.1-5.1c3.9-3.9,6-9,6-14.4c0-2.3-0.5-4.6-1.5-6.7l-0.8-1.7c2,3.1,5,5.2,8.5,6c1.3,0.3,2.6-0.5,2.9-1.8 C70,31.8,69.6,30.8,68.8,30.3z"
                fill="black"
              />
            </g>
          </g>
          
          <text 
            x="50" 
            y="80" 
            fontFamily="'PT Sans', sans-serif" 
            fontSize="32" 
            fontWeight="bold" 
            fill="white" 
            textAnchor="middle"
          >
            FLA10
          </text>
        </g>
      </svg>
    </div>
  );
}
