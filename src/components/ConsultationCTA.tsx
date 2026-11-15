import React from 'react';
import { Button } from './Button';
import { DataLines } from './DataLines';
import { Reveal } from './Reveal';

type ConsultationCTAProps = {title?: string;lead?: string;};

export function ConsultationCTA({
  title = 'Discuss your objectives with a senior advisor.',
  lead = 'Initial consultations are confidential and carry no obligation. Tell us about the decision in front of you, and we’ll outline how we can support it.'
}: ConsultationCTAProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-ink-950 px-6 py-14 md:px-14 md:py-20">
            <DataLines variant="chart" className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-gold-300" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-[44px]">
                  {title}
                </h2>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/75">{lead}</p>
              </div>
              <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end lg:justify-center">
                <Button href="/contact" size="lg">
                  Request a Consultation
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}