import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { DSFoundations } from '../components/design-system/DSFoundations';
import { DSComponents } from '../components/design-system/DSComponents';
import { DSHeaderStates } from '../components/design-system/DSHeaderStates';

const toc = [
{ id: 'note', label: 'Design rationale' },
{ id: 'logo', label: 'Logo usage' },
{ id: 'color', label: 'Color' },
{ id: 'type', label: 'Typography' },
{ id: 'spacing', label: 'Spacing & grid' },
{ id: 'buttons', label: 'Buttons' },
{ id: 'cards', label: 'Cards' },
{ id: 'forms', label: 'Form states' },
{ id: 'icons', label: 'Icons' },
{ id: 'header', label: 'Header & menus' },
{ id: 'responsive', label: 'Responsive' }];


export function DesignSystem() {
  return (
    <>
      <PageBanner
        title="Sohwaz design system"
        lead="Foundations, components and states used across the Sohwaz Holdings website."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Design System' }]} />
      
      <div className="container-site grid gap-12 py-16 md:py-20 lg:grid-cols-12">
        <nav aria-label="Design system sections" className="hidden lg:col-span-2 lg:block">
          <ul className="sticky top-28 space-y-1 border-s border-line">
            {toc.map((t) =>
            <li key={t.id}>
                <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-gold-400 hover:text-ink-950">
                  {t.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
        <div className="min-w-0 lg:col-span-10">
          <section id="note" className="scroll-mt-28 pb-16">
            <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink-950 md:text-3xl">Design rationale</h2>
            <div className="mt-6 grid gap-10 md:grid-cols-2">
              <div className="space-y-4 text-[15px] leading-relaxed text-muted">
                <h3 className="font-display text-lg font-bold text-ink-950">Built for advisory and treasury</h3>
                <p>
                  Clients engaging a financial advisor are judging competence and discretion. The interface is mostly
                  white, with dark ink reserved for hero, approach and closing sections, so content reads as calm and
                  considered. Gold — taken from the logo — appears only on the primary action and small markers.
                </p>
                <p>
                  Copy is measured (“advise”, “structure”, “support”) with no guarantees. Proof points, client logos,
                  headshots and regulatory details are clearly marked placeholders, and every page carries footer
                  disclaimers and compliance links.
                </p>
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-muted">
                <h3 className="font-display text-lg font-bold text-ink-950">How it draws on the Ripple references</h3>
                <p>
                  We borrowed principles, not assets: a confident headline hero with one primary CTA, a three-figure
                  credibility row beneath it, icon-led service cards with “Learn more” links, a sticky header with
                  mega-menus and a persistent CTA, and data-line motifs used sparingly.
                </p>
                <p>
                  Everything else is original to Sohwaz: the black-and-gold palette from the eagle mark, Gulf skyline
                  imagery, a regional node map of Kuwait, Bahrain and the UAE, a treasury-style liquidity panel instead
                  of product illustrations.
                </p>
              </div>
            </div>
          </section>
          <DSFoundations />
          <DSComponents />
          <DSHeaderStates />
        </div>
      </div>
    </>);

}
