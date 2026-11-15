import React from 'react';
import Image from 'next/image';
import type { Audience } from '../types/content';

export function AudienceCard({ audience }: {audience: Audience;}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-gold-400 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-900">
        <Image
          src={audience.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="h-full w-full object-cover opacity-85 saturate-[0.6]" />
        
      </div>
      <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink-950">{audience.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{audience.description}</p>
    </article>);

}
