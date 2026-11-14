import React from 'react';

type SectionHeadingProps = {
  title: string;
  lead?: string;
  onDark?: boolean;
  align?: 'start' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export function SectionHeading({
  title,
  lead,
  onDark = false,
  align = 'start',
  as = 'h2',
  className = ''
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <Tag
        className={`font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] md:text-[40px] ${onDark ? 'text-white' : 'text-ink-950'}`}>
        
        {title}
      </Tag>
      {lead &&
      <p className={`mt-4 text-[17px] leading-relaxed ${onDark ? 'text-white/75' : 'text-muted'}`}>{lead}</p>
      }
    </div>);

}
