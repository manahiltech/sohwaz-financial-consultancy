import React from 'react';
import Image from 'next/image';

type LogoProps = {
  onDark?: boolean;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

// Same lockup as the old hero logo: eagle, bold SOHWAZ, widely spaced gold
// "FINANCIAL CONSULTANTS". md is for the header and footer, lg matches the old hero size.
const sizes = {
  sm: { icon: 'h-9 w-9', gap: 'gap-2.5', text: 'text-[17px]', subtext: 'text-[7.5px]' },
  md: { icon: 'h-12 w-12', gap: 'gap-3', text: 'text-[22px]', subtext: 'text-[9.5px]' },
  lg: { icon: 'h-16 w-16', gap: 'gap-4', text: 'text-3xl', subtext: 'text-[12px]' },
};

export function Logo({ onDark = false, showWordmark = true, size = 'md' }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap}`}>
      <span
        className={`${s.icon} relative shrink-0 ${
          // The eagle is black, so on dark backgrounds it sits on a white badge.
          onDark ? 'overflow-hidden rounded-lg bg-white p-1.5 shadow-sm' : ''
        }`}
      >
        <Image
          width={128}
          height={128}
          src="/assets/eagle-logo.png"
          alt="Sohwaz Financial Consultants"
          priority
          className="h-full w-full object-contain"
        />
      </span>
      {showWordmark && (
        <span className="font-display leading-tight">
          <span
            className={`block font-extrabold tracking-wide ${s.text} ${
              onDark ? 'text-white' : 'text-ink-950'
            }`}
          >
            SOHWAZ
          </span>
          <span
            className={`block font-bold uppercase tracking-[0.24em] ${s.subtext} ${
              onDark ? 'text-gold-300' : 'text-gold-700'
            }`}
          >
            Financial Consultants
          </span>
        </span>
      )}
    </span>
  );
}