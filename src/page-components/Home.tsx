import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { HomeHero } from '../components/home/HomeHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { AudienceCard } from '../components/AudienceCard';
import { ProcessSteps } from '../components/ProcessSteps';
import { MarketList } from '../components/MarketList';
import { LeaderCard } from '../components/LeaderCard';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { DataLines } from '../components/DataLines';
import { services } from '../data/services';
import { audiences, advisoryApproach, leaders } from '../data/company';
import { images } from '../data/images';

export function Home() {
  return (
    <>
      <HomeHero />
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={images.boardroom} alt="A modern boardroom overlooking the city" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.05}>
            <SectionHeading title="Measured advice for financial markets decisions across the Middle East, Canada and Pakistan." />
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                Sohwaz Holdings advises Private Investors, Financial Institutions, Corporates and Family Offices on Treasury management functions, Investments, Risk Management, Human Resources and IT related services for structuring business decisions with discipline and discretion.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-[6px] hover:text-ink-700">
              
              About Sohwaz Holdings
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Services & Consultancy"
              lead="Advisory disciplines led by senior practitioners and delivered with the same rigour." />
            
            <Button href="/services" variant="outline">
              View all services
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 ">
            {services.map((s, i) =>
            <Reveal key={s.slug} delay={i * 0.04}>
                <ServiceCard service={s} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading
            title="Who we advise"
            lead="We work with organisations and individuals whose decisions carry long-term financial consequences." />
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) =>
            <Reveal key={a.title} delay={i * 0.05}>
                <AudienceCard audience={a} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink-950">
        <DataLines className="pointer-events-none absolute -top-10 right-0 w-[760px] text-white opacity-60" />
        <div className="container-site relative">
          <SectionHeading
            onDark
            title="Our advisory approach"
            lead="A consistent, four-stage method that keeps every engagement focused on the decision at hand." />
          
          <div className="mt-14">
            <ProcessSteps steps={advisoryApproach} onDark />
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container-site">
          <SectionHeading
            title="Regional Focus: Kuwait, UAE & Bahrain"
            lead="Markets with distinct banking, regulatory and business environments — advised with local understanding." />
          
          <div className="mt-12">
            <MarketList />
          </div>
        </div>
      </section> */}

      <section className="bg-mist py-20 md:py-24">
        <div className="container-site">
          <Reveal>
            <figure className="mx-auto max-w-4xl text-center">
              <blockquote className="font-display text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink-950 md:text-[34px]">
                “Good advice begins with understanding the full picture — the balance sheet, the people behind it, and
                the market it operates in.”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">Sohwaz Holdings · Advisory principles</figcaption>
            </figure>
          </Reveal>
          <div className="mt-14 border-t border-line pt-10">
            <p className="text-center text-sm text-muted">Organisations we have advised</p>
            <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) =>
              <li
                key={i}
                className="flex h-14 items-center justify-center rounded-lg border border-dashed border-ink-600/25 text-[13px] font-medium text-muted">
                
                  [Client logo]
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Senior leadership, directly involved"
              lead="Every engagement is led by a member of our management team, from the first conversation onward." />
            
            <Button href="/management" variant="outline">
              Meet the management team
            </Button>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) =>
            <Reveal key={l.role} delay={i * 0.05}>
                <LeaderCard leader={l} compact />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>);

}
