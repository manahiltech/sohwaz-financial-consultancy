import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { termsSections } from '../data/legal';

export function Terms() {
  return (
    <>
      <PageBanner
        title="Terms of Service & Advisory Disclaimer"
        lead="Last updated: November 2026"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms' }]}
      />

      <div className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        {/* Table of Contents */}
        <nav aria-label="Contents" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold tracking-wide uppercase text-ink-950">
              Contents
            </p>
            <ol className="mt-4 space-y-2 border-l border-line text-sm">
              {termsSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-muted hover:border-gold-400 hover:text-ink-950"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Legal Text Body */}
        <article className="max-w-[70ch] lg:col-span-8 lg:col-start-5">
          <section id="overview" className="pb-10">
            <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink-950">
              Welcome
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-body">
              <p>
                Welcome to the website of <strong className="font-semibold text-ink-950">Sohwaz Financial Consultants</strong>. By accessing, browsing, or using this website, or by engaging our professional advisory services, you acknowledge that you have read, understood, and agreed to be bound by the following terms, conditions, and regulatory disclaimers.
              </p>
            </div>
          </section>

          {termsSections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-t border-line py-10"
            >
              <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink-950">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-body">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
