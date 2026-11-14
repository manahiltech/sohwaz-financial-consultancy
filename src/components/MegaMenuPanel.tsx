import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { RegionMap } from './RegionMap';
import { services } from '../data/services';
import { markets } from '../data/company';

type MegaMenuPanelProps = {type: 'services' | 'markets';onNavigate?: () => void;};

export function MegaMenuPanel({ type, onNavigate }: MegaMenuPanelProps) {
  if (type === 'markets') {
    return (
      <div className="container-site grid grid-cols-12 gap-8 py-8">
        <div className="col-span-8 grid grid-cols-3 gap-4">
          {markets.map((m) =>
          <Link
            key={m.code}
            href={`/markets#${m.code.toLowerCase()}`}
            onClick={onNavigate}
            className="group rounded-xl border border-line p-5 transition-[border-color,background-color] duration-150 hover:border-ink-600/40 hover:bg-mist">
            
              <span className="font-display text-xs font-bold tracking-[0.12em] text-gold-700">{m.code}</span>
              <span className="mt-2 block font-display text-base font-bold text-ink-950">{m.name}</span>
              <span className="block text-[13px] text-muted">{m.cities}</span>
              <span className="mt-3 block text-[13px] leading-relaxed text-muted">{m.summary}</span>
            </Link>
          )}
        </div>
        <div className="col-span-4 rounded-xl bg-mist p-4">
          <RegionMap />
        </div>
      </div>);

  }

  return (
    <div className="container-site grid grid-cols-12 gap-8 py-8">
      <ul className="col-span-8 grid grid-cols-2 gap-1">
        {services.map((s) =>
        <li key={s.slug}>
            <Link
            href={`/services/${s.slug}`}
            onClick={onNavigate}
            className="group flex gap-4 rounded-lg p-3 transition-colors duration-150 hover:bg-mist">
            
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-ink-800 transition-colors duration-150 group-hover:border-gold-400">
                <ServiceIcon icon={s.icon} />
              </span>
              <span>
                <span className="block text-[14px] font-semibold text-ink-950">{s.title}</span>
                <span className="mt-0.5 line-clamp-2 block text-[13px] leading-snug text-muted">{s.summary}</span>
              </span>
            </Link>
          </li>
        )}
      </ul>
      <div className="col-span-4 flex flex-col rounded-xl bg-ink-950 p-6 text-white">
        <p className="font-display text-lg font-bold">Not sure where to start?</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Every engagement begins with a confidential conversation about your objectives. We’ll recommend the right
          scope from there.
        </p>
        <div className="mt-auto flex flex-col gap-3 pt-6">
          <Link
            href="/contact"
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 hover:text-gold-200">
            
            Request a consultation
          </Link>
          <Link href="/services" onClick={onNavigate} className="text-sm text-white/70 hover:text-white">
            View all services
          </Link>
        </div>
      </div>
    </div>);

}
