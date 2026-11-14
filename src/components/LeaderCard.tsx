import React from 'react';
import { UserIcon } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';
import type { Leader } from '../types/content';

type LeaderCardProps = {leader: Leader;compact?: boolean;};

export function LeaderCard({ leader, compact = false }: LeaderCardProps) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-dashed border-ink-600/25 bg-mist">
        <UserIcon className="h-16 w-16 text-ink-600/30" strokeWidth={1} aria-hidden="true" />
        <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-[11px] font-medium text-muted">
          [Headshot placeholder]
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-ink-950">{leader.name}</h3>
          <p className="mt-0.5 text-sm text-muted">{leader.role}</p>
        </div>
        <a
          href="#"
          aria-label={`${leader.role} on LinkedIn (link placeholder)`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-ink-800 transition-colors duration-150 hover:border-ink-900 hover:text-ink-950">
          
          <LinkedInIcon className="h-4 w-4" />
        </a>
      </div>
      {!compact &&
      <>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{leader.bio}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-5">
            {leader.expertise.map((e) =>
          <li key={e} className="rounded-md bg-mist px-2.5 py-1 text-[12px] font-medium text-ink-800">
                {e}
              </li>
          )}
          </ul>
        </>
      }
    </article>);

}
