import React from 'react';
import { logoUrl } from '../data/navigation';
import Image from 'next/image';

type LogoProps = {
  onDark?: boolean;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16'
};

export function Logo({ onDark = false, showWordmark = true, size = 'md' }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`${sizes[size]} shrink-0 overflow-hidden rounded-lg bg-white ${onDark ? '' : 'ring-1 ring-line'}`}>
        
        <Image
          width={100}
          height={100}
          src={logoUrl}
          alt={showWordmark ? '' : 'Sohwaz Holdings'}
          className="h-full w-full  object-contain" />
        
      </span>
      {showWordmark &&
      <span className={`font-display leading-none ${onDark ? 'text-white' : 'text-ink-950'}`}>
          <span className="block text-[22px] font-extrabold tracking-[-0.01em]">SOHWAZ</span>
          <span
          className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.28em] ${onDark ? 'text-white/70' : 'text-muted'}`}>
          
            Holdings
          </span>
        </span>
      }
    </span>);

}
