import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomeHero } from '../components/home/HomeHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { AudienceCard } from '../components/AudienceCard';
import { ProcessSteps } from '../components/ProcessSteps';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { DataLines } from '../components/DataLines';
import { HeroDashboard } from '../components/HeroDashboard';
import { CardGrid } from '../components/CardGrid';
import { services } from '../data/services';
import { audiences, advisoryApproach } from '../data/company';
import { images } from '../data/images';

export function Home() {
  return (
    <>
      {/* 1. Hero with Rotating Globe & Orbiting Currencies */}
      <HomeHero />

      

      {/* 3. Market Advisory Intro */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={images.boardroom}
                alt="Corporate conference room overlooking international financial district"
                width={960}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.05}>
            <SectionHeading title="Measured advice for financial decisions across the Middle East and Pakistan." />
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                Sohwaz Financial Consultants advises Private Investors, Financial Institutions, Corporates and Family Offices on Treasury management functions, Investments, Risk Management, Human Resources and IT related services for structuring business decisions with discipline and discretion.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-[6px] hover:text-ink-700"
            >
              About Sohwaz Financial Consultants
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Advisory Disciplines */}
      <section className="section bg-mist">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Services & Consultancy"
              lead="Advisory disciplines led by senior practitioners and delivered with the same rigour."
            />
            <div className="flex flex-wrap gap-3">
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
              <Button href="/consultancy" variant="dark">
                Consulting Practices
              </Button>
            </div>
          </div>
          <CardGrid className="mt-12">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* 5. Who We Advise */}
      <section className="section">
        <div className="container-site">
          <SectionHeading
            title="Who we advise"
            lead="We work with organisations and individuals whose decisions carry long-term financial consequences."
          />
          <CardGrid columns={4} className="mt-12">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05} className="h-full">
                <AudienceCard audience={a} />
              </Reveal>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* 6. Advisory Approach */}
      <section className="section relative overflow-hidden bg-ink-950">
        <DataLines className="pointer-events-none absolute -top-10 right-0 w-[760px] text-white opacity-60" />
        <div className="container-site relative">
          <SectionHeading
            onDark
            title="Our advisory approach"
            lead="A consistent, four-stage method that keeps every engagement focused on the decision at hand."
          />
          <div className="mt-14">
            <ProcessSteps steps={advisoryApproach} onDark />
          </div>
        </div>
      </section>

      {/* 2. Group Liquidity Overview (Kept intact with [Value] placeholders as required) */}
      <section className="border-b border-line bg-mist/60 py-12 md:py-16">
        <div className="container-site max-w-4xl">
          <HeroDashboard />
        </div>
      </section>

      {/* 7. Quote Section (Client logos placeholder removed per instructions) */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-site">
          <Reveal>
            <figure className="mx-auto max-w-4xl text-center">
              <blockquote className="font-display text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink-950 md:text-[34px]">
                “Good advice begins with understanding the full picture — the balance sheet, the people behind it, and the market it operates in.”
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-muted">
                Sohwaz Financial Consultants · Advisory principles
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 8. Call to Action */}
      <ConsultationCTA />
    </>
  );
}
