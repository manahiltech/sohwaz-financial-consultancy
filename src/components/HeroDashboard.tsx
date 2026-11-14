import React from 'react';

const rows = [
{ label: 'Assets', value: '[Value]' },
{ label: 'Liabilities', value: '[Value]' },
{ label: 'Shareholders’ Equity', value: '[Value]' }];


export function HeroDashboard() {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-900/80 p-6 backdrop-blur" aria-hidden="true">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] font-semibold text-white">Group liquidity overview</p>
          <p className="text-[12px] text-white/50">Illustrative view · 12 months</p>
        </div>
        <div className="flex gap-1 rounded-md bg-white/5 p-1 text-[11px]">
          <span className="rounded px-2 py-0.5 text-white/50">KW</span>
          <span className="rounded bg-white/10 px-2 py-0.5 text-white">KW</span>
          <span className="rounded px-2 py-0.5 text-white/50">CA</span>
        </div>
      </div>
      <svg viewBox="0 0 400 150" className="mt-6 h-36 w-full" fill="none">
        {[30, 70, 110].map((y) =>
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#fff" strokeOpacity="0.07" />
        )}
        <polyline
          points="0,132 36,126 72,128 108,120 144,122 180,110 216,114 252,102 288,106 324,94 360,98 400,88"
          stroke="#F2BE2C"
          strokeWidth="2" />
        
        <polyline
          points="0,108 36,102 72,106 108,92 144,96 180,78 216,84 252,68 288,74 324,58 360,64 400,48"
          stroke="#fff"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 5" />
        
        <circle cx="400" cy="88" r="4" fill="#F2BE2C" />
      </svg>
      <div className="mt-3 flex gap-5 text-[11px] text-white/55">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 bg-gold-400" /> Actual
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-px w-4 border-t border-dashed border-white/50" /> Projected
        </span>
      </div>
      <dl className="mt-6 divide-y divide-white/10 border-t border-white/10">
        {rows.map((r) =>
        <div key={r.label} className="flex items-center justify-between py-3">
            <dt className="text-[13px] text-white/65">{r.label}</dt>
            <dd className="font-display text-[13px] font-semibold text-white">{r.value}</dd>
          </div>
        )}
      </dl>
    </div>);

}
