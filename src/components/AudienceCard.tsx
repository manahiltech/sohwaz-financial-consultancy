import React from 'react';
import type { Audience } from '../types/content';

export function AudienceCard({ audience }: {audience: Audience;}) {
  return (
    <article className="flex h-full flex-col">
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ink-900">
        <img
          src={audience.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-85 saturate-[0.6]" />
        
      </div>
      <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink-950">{audience.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{audience.description}</p>
    </article>);

}
