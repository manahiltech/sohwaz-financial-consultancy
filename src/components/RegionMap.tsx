import React from 'react';

const points = [
{ code: 'KW', label: 'Kuwait City', x: 120, y: 70 },
{ code: 'QA', label: 'Doha', x: 250, y: 178 },
{ code: 'BH', label: 'Manama', x: 390, y: 262 },
];


export function RegionMap({ onDark = false }: {onDark?: boolean;}) {
  const dot = onDark ? '#ffffff' : '#0A1426';
  return (
    <svg viewBox="0 0 480 340" className="h-auto w-full" role="img" aria-label="Map showing Sohwaz Holdings markets: Kuwait, Bahrain and the UAE">
      <defs>
        <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill={dot} fillOpacity={onDark ? 0.14 : 0.12} />
        </pattern>
      </defs>
      <rect width="480" height="340" fill="url(#dots)" />
      <path
        d="M120 70 C 170 110, 210 140, 250 178 S 340 240, 390 262"
        stroke="#E0A91B"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="5 6" />
      
      <path d="M120 70 C 260 90, 360 170, 390 262" stroke={dot} strokeOpacity="0.16" fill="none" />
      <text x="232" y="112" fill={dot} fillOpacity="0.35" fontSize="11" letterSpacing="3" fontFamily="Inter">
        ARABIAN GULF
      </text>
      {points.map((p) =>
      <g key={p.code}>
          <circle cx={p.x} cy={p.y} r="18" fill="#E0A91B" fillOpacity="0.12" />
          <circle cx={p.x} cy={p.y} r="6" fill="#F2BE2C" stroke={onDark ? '#060B16' : '#ffffff'} strokeWidth="2" />
          <text x={p.x + 16} y={p.y - 14} fill={dot} fontSize="13" fontWeight="700" fontFamily="Manrope">
            {p.code}
          </text>
          <text x={p.x + 16} y={p.y + 2} fill={dot} fillOpacity="0.6" fontSize="11" fontFamily="Inter">
            {p.label}
          </text>
        </g>
      )}
    </svg>);

}
