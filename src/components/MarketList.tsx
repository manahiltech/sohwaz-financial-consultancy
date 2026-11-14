import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { RegionMap } from './RegionMap';
import { Reveal } from './Reveal';
import { markets } from '../data/company';

export function MarketList() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12">
      <Reveal className="rounded-2xl bg-mist p-6 md:p-8 lg:col-span-5">
        <RegionMap />
      </Reveal>
      <ul className="divide-y divide-line border-y border-line lg:col-span-7">
        {markets.map((m, i) =>
        <Reveal key={m.code} delay={i * 0.05}>
            <li>
              <Link
              href={`/markets#${m.code.toLowerCase()}`}
              className="group grid grid-cols-[56px_1fr_auto] items-start gap-4 py-7 md:grid-cols-[72px_1fr_auto]">
              
                <span className="font-display text-sm font-bold tracking-[0.12em] text-gold-700">{m.code}</span>
                <span>
                  <span className="block font-display text-xl font-bold text-ink-950">{m.name}</span>
                  <span className="block text-sm text-muted">{m.cities}</span>
                  <span className="mt-3 block max-w-md text-[15px] leading-relaxed text-muted">{m.summary}</span>
                </span>
                <ArrowRightIcon
                className="mt-1 h-5 w-5 text-muted transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-ink-950"
                aria-hidden="true" />
              
              </Link>
            </li>
          </Reveal>
        )}
      </ul>
    </div>);

}
