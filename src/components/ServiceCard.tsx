import React from 'react';
import { CheckIcon } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import type { Service } from '../types/content';

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:border-gold-400 hover:shadow-lift">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-mist text-ink-800 transition-colors duration-200 group-hover:border-gold-400 group-hover:bg-gold-100">
        <ServiceIcon icon={service.icon} />
      </span>
      <h3 className="mt-6 font-display text-[19px] font-bold leading-snug tracking-[-0.01em] text-ink-950">
        {service.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.summary}</p>
      {detailed && (
        <ul className="mt-5 space-y-2 border-t border-line pt-5">
          {service.scope.slice(0, 3).map((s) => (
            <li key={s.title} className="flex items-start gap-2.5 text-sm text-body">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" strokeWidth={2} aria-hidden="true" />
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
