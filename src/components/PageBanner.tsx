import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { DataLines } from './DataLines';

type Crumb = {label: string;to?: string;};

type PageBannerProps = {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  image?: string;
  children?: React.ReactNode;
};

export function PageBanner({ title, lead, crumbs, image, children }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {image &&
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" aria-hidden="true" />
      }
      <div className="absolute inset-0 bg-ink-950/60" aria-hidden="true" />
      <DataLines className="pointer-events-none absolute -right-20 bottom-0 hidden w-[720px] text-white lg:block" />
      <div className="container-site relative py-16 md:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
            {crumbs.map((c, i) =>
            <li key={c.label} className="flex items-center gap-1.5">
                {c.to ?
              <Link href={c.to} className="hover:text-white">
                    {c.label}
                  </Link> :

              <span aria-current="page" className="text-white/85">
                    {c.label}
                  </span>
              }
                {i < crumbs.length - 1 && <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              </li>
            )}
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.025em] md:text-[56px]">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p>}
        {children}
      </div>
    </section>);

}
