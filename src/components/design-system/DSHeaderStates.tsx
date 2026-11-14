import React from 'react';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { DSSection } from './DSSection';
import { Logo } from '../Logo';
import { MegaMenuPanel } from '../MegaMenuPanel';
import { MobileMenuContent } from '../MobileMenu';
import { navItems } from '../../data/navigation';

const navLabels: Record<string, string> = {
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.services': 'Services',
  'nav.management': 'Management',
  'nav.markets': 'Markets Served',
  'nav.contact': 'Contact',
};

function StaticHeader({ active, hovered }: {active: string;hovered?: string;}) {
  return (
    <div className="flex h-[72px] items-center justify-between gap-6 border-b border-line bg-white px-8">
      <Logo />
      <ul className="flex h-full items-center">
        {navItems.map((n) => {
          const on = n.key === active || n.key === hovered;
          return (
            <li key={n.key} className={`relative flex h-full items-center gap-1 px-3 text-[14px] font-medium ${on ? 'text-ink-950' : 'text-muted'}`}>
              {navLabels[n.key] ?? n.key}
              {n.mega && <ChevronDownIcon className={`h-4 w-4 ${n.key === hovered ? 'rotate-180' : ''}`} aria-hidden="true" />}
              {on && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-gold-400" />}
            </li>);

        })}
      </ul>
      <div className="flex items-center gap-5">
        <span className="inline-flex h-9 items-center rounded-lg bg-gold-400 px-4 text-[13px] font-semibold text-ink-950">
          Request a consultation
        </span>
      </div>
    </div>);

}

export function DSHeaderStates() {
  return (
    <>
      <DSSection id="header" title="Header & menu states" description="Sticky white header (72px) with a persistent consultation CTA. Services and Markets open mega-menus on hover or keyboard; below 1280px navigation collapses into a full-height mobile menu.">
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-[13px] font-semibold text-ink-950">Default</p>
            <div className="overflow-x-auto rounded-xl border border-line">
              <div className="min-w-[1180px]">
                <StaticHeader active="nav.home" />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-[13px] font-semibold text-ink-950">Hover — Services mega-menu</p>
            <div className="overflow-x-auto rounded-xl border border-line">
              <div className="min-w-[1180px]">
                <StaticHeader active="nav.home" hovered="nav.services" />
                <div className="pointer-events-none bg-white shadow-lift">
                  <MegaMenuPanel type="services" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-[13px] font-semibold text-ink-950">Mobile — closed</p>
              <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-[28px] border-[6px] border-ink-950">
                <div className="flex h-16 items-center justify-between border-b border-line bg-white px-5">
                  <Logo size="sm" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line">
                    <MenuIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="bg-ink-950 px-5 py-10">
                  <div className="h-8 w-4/5 rounded bg-white/90" />
                  <div className="mt-3 h-8 w-3/5 rounded bg-white/90" />
                  <div className="mt-5 h-3 w-full rounded bg-white/30" />
                  <div className="mt-2 h-3 w-4/5 rounded bg-white/30" />
                  <div className="mt-6 h-11 w-48 rounded-lg bg-gold-400" />
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[13px] font-semibold text-ink-950">Mobile — menu open</p>
              <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-[28px] border-[6px] border-ink-950 bg-white">
                <div className="flex h-16 items-center justify-between border-b border-line px-5">
                  <Logo size="sm" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line">
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="px-5 pb-6">
                  <MobileMenuContent defaultExpanded="nav.services" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DSSection>

      <DSSection id="responsive" title="Responsive previews" description="Live renders of the Home and Treasury Advisory pages at mobile (390) and tablet (768) widths. Scroll inside each frame.">
        <div className="flex flex-wrap items-start justify-center gap-10">
          {[
          { label: 'Home · 390', src: '/' },
          { label: 'Treasury Advisory · 390', src: '/services/treasury-advisory' }].
          map((f) =>
          <figure key={f.src}>
              <div className="overflow-hidden rounded-[32px] border-[8px] border-ink-950 bg-white">
                <iframe title={f.label} src={f.src} className="block h-[760px] w-[390px] max-w-full" />
              </div>
              <figcaption className="mt-3 text-center text-[13px] font-medium text-muted">{f.label}</figcaption>
            </figure>
          )}
          <figure>
            <div className="h-[520px] w-[392px] overflow-hidden rounded-[24px] border-[8px] border-ink-950 bg-white">
              <iframe title="Home · 768" src="/" className="block h-[1040px] w-[768px] origin-top-left scale-50" />
            </div>
            <figcaption className="mt-3 text-center text-[13px] font-medium text-muted">Home · 768 (50%)</figcaption>
          </figure>
        </div>
      </DSSection>
    </>);

}
