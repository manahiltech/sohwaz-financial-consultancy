import React from 'react';
import Image from 'next/image';

type LogoProps = {
  onDark?: boolean;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-11 w-11',
  lg: 'h-16 w-16',
};

export function Logo({ onDark = false, showWordmark = true, size = 'md' }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`${sizes[size]} relative shrink-0 overflow-hidden rounded-lg ${
          onDark ? 'bg-white/10 p-0.5' : 'bg-transparent'
        }`}
      >
        <Image
          width={120}
          height={120}
          src="/assets/eagle-logo.png"
          alt="Sohwaz Financial Consultants"
          priority
          className="h-full w-full object-contain"
        />
      </span>
      {showWordmark && (
        <span className={`font-display leading-none ${onDark ? 'text-white' : 'text-ink-950'}`}>
          <span className="block text-[18px] font-extrabold tracking-[0.02em] md:text-[20px]">
            SOHWAZ
          </span>
          <span
            className={`mt-1 block text-[9.5px] font-bold uppercase tracking-[0.16em] md:text-[10px] ${
              onDark ? 'text-gold-300' : 'text-ink-700'
            }`}
          >
            Financial Consultants
          </span>
        </span>
      )}
    </span>
  );
}
