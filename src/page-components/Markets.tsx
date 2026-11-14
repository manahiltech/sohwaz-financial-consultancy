import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { RegionMap } from '../components/RegionMap';
import { ServiceIcon } from '../components/ServiceIcon';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Reveal } from '../components/Reveal';
import { markets } from '../data/company';
import { getService } from '../data/services';
import { images } from '../data/images';
import Image from 'next/image';

export function Markets() {
  return (
    <>
      <PageBanner
        title="Markets served"
        lead="Focused coverage includes Kuwait, Qatar, Saudi Arabia, Bahrain, Oman and the United Arab Emirates."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Markets Served' }]}
        image={images.manama} />
      

      {/* <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Depth in three markets, rather than breadth across many."
              lead="Each market has its own banking practices, regulators and business culture. Concentrating on three allows us to advise with genuine familiarity — and to support clients whose operations span more than one." />
            
          </div>
          <div className="rounded-2xl bg-mist p-6 md:p-8 lg:col-span-6">
            <RegionMap />
          </div>
        </div>
      </section> */}

      {markets.map((m, idx) =>
      <section
        key={m.code}
        id={m.code.toLowerCase()}
        className={`scroll-mt-20 py-16 md:py-20 ${idx % 2 === 0 ? 'bg-mist' : 'bg-white'}`}>
        
          <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={m.image} alt={`${m.cities} skyline`} fill className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <span className="font-display text-sm font-bold tracking-[0.12em] text-gold-700">{m.code}</span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em] text-ink-950 md:text-[40px]">
                {m.name}
              </h2>
              <p className="text-muted">{m.cities}</p>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">{m.overview}</p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-ink-950">Typical focus areas</h3>
                  <ul className="mt-3 space-y-2">
                    {m.focus.map((f) =>
                  <li key={f} className="flex items-center gap-2.5 text-[15px] text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                        {f}
                      </li>
                  )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink-950">Relevant services</h3>
                  <ul className="mt-3 space-y-1">
                    {m.serviceSlugs.map((slug) => {
                    const s = getService(slug);
                    if (!s) return null;
                    return (
                      <li key={slug}>
                          <Link href={`/services/${slug}`} className="group flex items-center gap-2.5 py-1 text-[15px] font-medium text-ink-900">
                            <ServiceIcon icon={s.icon} className="h-4 w-4 text-ink-700" />
                            <span className="group-hover:underline group-hover:decoration-gold-400 group-hover:underline-offset-4">{s.title}</span>
                            <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true" />
                          </Link>
                        </li>);

                  })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA title="Operating across more than one market?" lead="We regularly advise groups whose treasury, financing or governance spans Kuwait, the UAE and Bahrain. Tell us about your structure." />
    </>);

}
