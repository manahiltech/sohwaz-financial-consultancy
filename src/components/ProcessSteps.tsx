import React from 'react';
import { Reveal } from './Reveal';
import type { TitledText } from '../types/content';

type ProcessStepsProps = {steps: TitledText[];layout?: 'row' | 'timeline';onDark?: boolean;};

export function ProcessSteps({ steps, layout = 'row', onDark = false }: ProcessStepsProps) {
  const titleColor = onDark ? 'text-white' : 'text-ink-950';
  const textColor = onDark ? 'text-white/70' : 'text-muted';
  const lineColor = onDark ? 'bg-white/15' : 'bg-line';

  if (layout === 'timeline') {
    return (
      <ol className="relative">
        {steps.map((step, i) =>
        <li key={step.title} className="relative grid grid-cols-[48px_1fr] gap-5 pb-10 last:pb-0 md:grid-cols-[64px_1fr]">
            {i < steps.length - 1 &&
          <span className={`absolute left-6 top-12 h-[calc(100%-48px)] w-px md:left-8 ${lineColor}`} aria-hidden="true" />
          }
            <span
            className={`flex h-12 w-12 items-center justify-center rounded-full border font-display text-sm font-bold md:h-16 md:w-16 md:text-base ${onDark ? 'border-white/20 text-gold-300' : 'border-line bg-white text-ink-900'}`}>
            
              {String(i + 1).padStart(2, '0')}
            </span>
            <Reveal delay={i * 0.04} className="pt-2 md:pt-4">
              <h3 className={`font-display text-xl font-bold tracking-[-0.01em] ${titleColor}`}>{step.title}</h3>
              <p className={`mt-2 max-w-xl text-[15px] leading-relaxed ${textColor}`}>{step.description}</p>
            </Reveal>
          </li>
        )}
      </ol>);

  }

  return (
    <ol className={`grid gap-10 md:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} lg:gap-8`}>
      {steps.map((step, i) =>
      <Reveal key={step.title} delay={i * 0.05}>
          <li className="flex h-full flex-col">
            <div className="flex items-center gap-4">
              <span className={`font-display text-sm font-bold ${onDark ? 'text-gold-300' : 'text-gold-700'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`h-px flex-1 ${lineColor}`} aria-hidden="true" />
            </div>
            <h3 className={`mt-5 font-display text-lg font-bold tracking-[-0.01em] ${titleColor}`}>{step.title}</h3>
            <p className={`mt-2 text-[15px] leading-relaxed ${textColor}`}>{step.description}</p>
          </li>
        </Reveal>
      )}
    </ol>);

}
