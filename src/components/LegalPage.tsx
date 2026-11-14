import React from 'react';
import { PageBanner } from './PageBanner';
import type { LegalSection } from '../types/content';

type LegalPageProps = {title: string;updated: string;sections: LegalSection[];};

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageBanner title={title} lead={`Last updated: ${updated}`} crumbs={[{ label: 'Home', to: '/' }, { label: title }]} />
      <div className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <nav aria-label="Contents" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-ink-950">Contents</p>
            <ol className="mt-3 space-y-1 border-l border-line">
              {sections.map((s) =>
              <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-gold-400 hover:text-ink-950">
                    {s.heading}
                  </a>
                </li>
              )}
            </ol>
          </div>
        </nav>
        <article className="max-w-[68ch] lg:col-span-8 lg:col-start-5">
          {sections.map((s, i) =>
          <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
              <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink-950">
                <span className="mr-3 text-muted">{i + 1}.</span>
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-body">
                {s.paragraphs.map((p, j) =>
              <p key={j} className={p.startsWith('[') ? 'rounded-lg bg-gold-100 px-4 py-3 text-[15px] text-gold-700' : ''}>
                    {p}
                  </p>
              )}
              </div>
            </section>
          )}
        </article>
      </div>
    </>);

}
