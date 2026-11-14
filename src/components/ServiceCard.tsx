import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import type { Service } from '../types/content';

type ServiceCardProps = {service: Service;detailed?: boolean;};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-ink-600/40 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400">
      
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-mist text-ink-800 transition-colors duration-200 group-hover:border-gold-400 group-hover:bg-gold-100">
        <ServiceIcon icon={service.icon} />
      </span>
      <h3 className="mt-6 font-display text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink-950">
        {service.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.summary}</p>
      {detailed &&
      <ul className="mt-5 space-y-2 border-t border-line pt-5">
          {service.scope.slice(0, 3).map((s) =>
        <li key={s.title} className="flex items-start gap-2.5 text-sm text-body">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" strokeWidth={2} aria-hidden="true" />
              {s.title}
            </li>
        )}
        </ul>
      }
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink-900">
        Learn more
        <ArrowRightIcon
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden="true" />
        
      </span>
    </Link>);

}
