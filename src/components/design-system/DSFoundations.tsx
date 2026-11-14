import React from 'react';
import { XIcon } from 'lucide-react';
import { DSSection } from './DSSection';
import { Logo } from '../Logo';
import { logoUrl } from '../../data/navigation';

const colors = [
{ group: 'Primary — Ink', items: [
  { name: 'ink-950', hex: '#060B16', note: 'Hero, footer, CTA', dark: true },
  { name: 'ink-900', hex: '#0A1426', note: 'Dark buttons, panels', dark: true },
  { name: 'ink-800', hex: '#0F1E38', note: 'Icon strokes', dark: true },
  { name: 'ink-700', hex: '#18305A', note: 'Hover, focus', dark: true }]
},
{ group: 'Accent — Gold (from logo)', items: [
  { name: 'gold-400', hex: '#F2BE2C', note: 'Primary CTA · ink text 11.6:1', dark: false },
  { name: 'gold-300', hex: '#F5CF5C', note: 'CTA hover, text on ink', dark: false },
  { name: 'gold-100', hex: '#FCF4DB', note: 'Icon tile hover', dark: false },
  { name: 'gold-700', hex: '#7E5A07', note: 'Gold text on white · 6.1:1', dark: true }]
},
{ group: 'Neutrals & feedback', items: [
  { name: 'body', hex: '#1E2633', note: 'Body text · 15.2:1', dark: true },
  { name: 'muted', hex: '#566173', note: 'Secondary text · 6.2:1', dark: true },
  { name: 'line', hex: '#E3E7EE', note: 'Borders, dividers', dark: false },
  { name: 'mist', hex: '#F4F6F9', note: 'Alternate sections', dark: false },
  { name: 'danger', hex: '#B42318', note: 'Errors', dark: true },
  { name: 'success', hex: '#067647', note: 'Success', dark: true }]
}];


const typeScale = [
{ name: 'Display', spec: 'Manrope 700 · 68/1.05 · −3%', cls: 'font-display text-[44px] md:text-[68px] font-bold leading-[1.05] tracking-[-0.03em]', sample: 'Measured advice' },
{ name: 'H1', spec: 'Manrope 700 · 56/1.08 · −2.5%', cls: 'font-display text-4xl md:text-[56px] font-bold leading-[1.08] tracking-[-0.025em]', sample: 'Treasury Advisory' },
{ name: 'H2', spec: 'Manrope 700 · 40/1.15 · −2%', cls: 'font-display text-3xl md:text-[40px] font-bold leading-[1.15] tracking-[-0.02em]', sample: 'Our advisory approach' },
{ name: 'H3', spec: 'Manrope 700 · 19/1.35', cls: 'font-display text-[19px] font-bold', sample: 'Liquidity & cash management' },
{ name: 'Body L', spec: 'Inter 400 · 17/1.6', cls: 'text-[17px] leading-relaxed', sample: 'We help finance teams build treasury functions that are disciplined and resilient.' },
{ name: 'Body', spec: 'Inter 400 · 15/1.6', cls: 'text-[15px] leading-relaxed', sample: 'Engagements are scoped to your needs and agreed in writing.' },
{ name: 'Small', spec: 'Inter 500 · 13/1.5', cls: 'text-[13px] font-medium', sample: 'Your enquiry is confidential.' }];


const spacing = [4, 8, 16, 24, 32, 48, 64, 96, 128];

export function DSFoundations() {
  return (
    <>
      <DSSection id="logo" title="Logo usage" description="The supplied mark is used exactly as provided — never redrawn or recoloured. On dark surfaces it sits in a white tile so the original artwork stays intact.">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex h-44 items-center justify-center rounded-xl border border-line bg-white">
            <Logo size="lg" />
          </div>
          <div className="flex h-44 items-center justify-center rounded-xl bg-ink-950">
            <Logo size="lg" onDark />
          </div>
          <div className="relative flex h-44 items-center justify-center rounded-xl border border-line bg-mist">
            <div className="relative rounded-lg border border-dashed border-gold-500 p-4">
              <Logo size="md" showWordmark={false} />
              <span className="absolute -top-5 left-0 text-[11px] text-muted">Clear space = ½ mark height</span>
            </div>
          </div>
        </div>
        <ul className="mt-5 grid gap-5 sm:grid-cols-3">
          {[
          { label: 'Do not recolour', style: { filter: 'hue-rotate(180deg)' } },
          { label: 'Do not stretch', style: { transform: 'scaleX(1.5)' } },
          { label: 'No transparent overlay on dark', style: { opacity: 0.4 } }].
          map((d) =>
          <li key={d.label} className="rounded-xl border border-line p-4">
              <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg bg-ink-900">
                <img src={logoUrl} alt="" className="h-14 w-14 object-contain" style={d.style} />
              </div>
              <p className="mt-3 flex items-center gap-2 text-[13px] font-medium text-danger">
                <XIcon className="h-4 w-4" aria-hidden="true" /> {d.label}
              </p>
            </li>
          )}
        </ul>
      </DSSection>

      <DSSection id="color" title="Color tokens" description="Black ink and gold are taken directly from the logo; ink is shifted slightly toward navy for an institutional tone. All text pairings meet WCAG AA.">
        <div className="space-y-8">
          {colors.map((g) =>
          <div key={g.group}>
              <h3 className="text-sm font-semibold text-ink-950">{g.group}</h3>
              <ul className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {g.items.map((c) =>
              <li key={c.name} className="overflow-hidden rounded-xl border border-line">
                    <div className="h-20" style={{ background: c.hex }} />
                    <div className="p-3">
                      <p className="text-[13px] font-semibold text-ink-950">{c.name}</p>
                      <p className="font-mono text-[12px] text-muted">{c.hex}</p>
                      <p className="mt-1 text-[12px] leading-snug text-muted">{c.note}</p>
                    </div>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </DSSection>

      <DSSection id="type" title="Typography" description="Manrope (geometric) for headings with tight tracking; Inter for body at 1.6 line height.">
        <ul className="divide-y divide-line border-y border-line">
          {typeScale.map((t) =>
          <li key={t.name} className="grid gap-3 py-6 md:grid-cols-[180px_1fr] md:items-baseline">
              <div>
                <p className="text-sm font-semibold text-ink-950">{t.name}</p>
                <p className="text-[12px] text-muted">{t.spec}</p>
              </div>
              <p className={`${t.cls} text-ink-950`}>{t.sample}</p>
            </li>
          )}
        </ul>
      </DSSection>

      <DSSection id="spacing" title="Spacing & grid" description="8px base scale (with a 4px half-step). Desktop uses a 12-column grid, 1280px max width, 24–32px gutters; tablet 8 columns; mobile 4 columns with 20px margins.">
        <div className="space-y-3">
          {spacing.map((s) =>
          <div key={s} className="flex items-center gap-4">
              <span className="w-14 text-[13px] font-medium text-muted">{s}px</span>
              <span className="h-3 rounded-sm bg-ink-700" style={{ width: s * 2 }} />
            </div>
          )}
        </div>
        <div className="mt-10 space-y-4">
          {[
          { label: 'Desktop · 1440 · 12 col', cols: 12 },
          { label: 'Tablet · 768 · 8 col', cols: 8 },
          { label: 'Mobile · 390 · 4 col', cols: 4 }].
          map((g) =>
          <div key={g.label}>
              <p className="mb-2 text-[13px] font-medium text-muted">{g.label}</p>
              <div className="grid gap-2 rounded-lg bg-mist p-2 md:gap-3" style={{ gridTemplateColumns: `repeat(${g.cols}, minmax(0, 1fr))` }}>
                {Array.from({ length: g.cols }).map((_, i) =>
              <div key={i} className="h-12 rounded bg-gold-400/30" />
              )}
              </div>
            </div>
          )}
        </div>
      </DSSection>
    </>);

}
