import React from 'react';

type DataLinesProps = {className?: string;variant?: 'network' | 'chart';};

const nodes = [
[60, 220],
[180, 140],
[300, 190],
[420, 90],
[540, 160],
[660, 60],
[760, 130]];


export function DataLines({ className = '', variant = 'network' }: DataLinesProps) {
  if (variant === 'chart') {
    return (
      <svg className={className} viewBox="0 0 800 300" fill="none" aria-hidden="true" preserveAspectRatio="none">
        {[60, 120, 180, 240].map((y) =>
        <line key={y} x1="0" x2="800" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.08" />
        )}
        <polyline
          points="0,240 80,220 160,228 240,190 320,200 400,150 480,162 560,118 640,126 720,80 800,92"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5" />
        
        <polyline
          points="0,260 80,250 160,246 240,232 320,236 400,210 480,214 560,190 640,196 720,170 800,176"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="1.25"
          strokeDasharray="4 6" />
        
      </svg>);

  }
  return (
    <svg className={className} viewBox="0 0 820 280" fill="none" aria-hidden="true">
      {Array.from({ length: 11 }).map((_, i) =>
      <line key={`v${i}`} x1={i * 82} x2={i * 82} y1="0" y2="280" stroke="currentColor" strokeOpacity="0.06" />
      )}
      {nodes.slice(0, -1).map(([x, y], i) =>
      <line
        key={`l${i}`}
        x1={x}
        y1={y}
        x2={nodes[i + 1][0]}
        y2={nodes[i + 1][1]}
        stroke="currentColor"
        strokeOpacity="0.28" />

      )}
      <line x1="180" y1="140" x2="420" y2="90" stroke="currentColor" strokeOpacity="0.12" />
      <line x1="300" y1="190" x2="540" y2="160" stroke="currentColor" strokeOpacity="0.12" />
      {nodes.map(([x, y], i) =>
      <g key={`n${i}`}>
          <circle cx={x} cy={y} r="9" fill="currentColor" fillOpacity="0.06" />
          <circle cx={x} cy={y} r="3" fill="currentColor" fillOpacity="0.55" />
        </g>
      )}
    </svg>);

}
