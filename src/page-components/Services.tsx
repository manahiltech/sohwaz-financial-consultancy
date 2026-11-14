import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Reveal } from '../components/Reveal';
import { CheckCircle2Icon, ShieldCheckIcon, LandmarkIcon, Building2Icon, LayersIcon } from 'lucide-react';
import { images } from '../data/images';

export function Services() {
  return (
    <>
      <PageBanner
        title="Services"
        lead="Specialized, expert-led advisory services across the Middle East and Pakistan."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image={images.dubai}
      />

      {/* Intro Section */}
      <section className="section border-b border-line bg-white">
        <div className="container-site max-w-4xl text-center">
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-relaxed text-ink-950 md:text-[28px]">
              We deliver highly specialized, expert-led advisory services across Treasury, ALM, ALCO, Debt Restructuring, Real Estate, HR, and IT, backed by a team of fully qualified, credentialed professionals.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              Our subject-matter experts bring a unique blend of international market experience and localized operational knowledge to support your highest-stakes decisions across the Middle East and Pakistan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Specialized Advisory Frameworks */}
      <section className="section bg-mist">
        <div className="container-site">
          <SectionHeading
            title="Specialized Advisory Frameworks"
            lead="Disciplined, institutional-grade solutions structured around corporate resilience and strategic execution."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {/* Group 1: Capital, Liquidity & Governance */}
            <Reveal className="rounded-2xl border border-line bg-white p-8 shadow-soft md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <LandmarkIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold text-ink-950">
                  Capital, Liquidity & Governance
                </h3>
              </div>

              <div className="mt-8 space-y-6 divide-y divide-line">
                <div className="pt-2">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    Treasury Management
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Designing, implementing, and optimizing Corporate and bank Treasury functions.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    Asset Liability Management (ALM)
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Constructing robust frameworks to manage liquidity, interest rate risk, and balance sheet modelling.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    ALCO Support
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Empowering Asset Liability Committees with data-driven insights, policy formulation, and strategic balance sheet optimization.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    Debt Restructuring
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Reengineering stressed or underperforming financial frameworks, renegotiating facilities, and securing new bank lines.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Group 2: Infrastructure & Enabling Functions */}
            <Reveal delay={0.06} className="rounded-2xl border border-line bg-white p-8 shadow-soft md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Building2Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold text-ink-950">
                  Infrastructure & Enabling Functions
                </h3>
              </div>

              <div className="mt-8 space-y-6 divide-y divide-line">
                <div className="pt-2">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    Real Estate Advisory
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Strategic portfolio reviews, asset optimization, and yield enhancement for real estate investments. We are currently managing Family Holdings.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    Human Resources (HR)
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Aligning organizational design, governance, and human capital with corporate goals. Our HR advisory is led by an expert holding an <strong className="font-semibold text-ink-900">MBA in Banking and Finance</strong> alongside elite global credentials: <strong className="font-semibold text-ink-900">CPHR, RPR, and SHRM-SCP</strong>, as well as being an Accredited Mediator.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="font-display text-lg font-bold text-ink-950">
                    Information Technology (IT)
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Implementing secure financial tech infrastructure, treasury management systems (TMS), and ensuring regulatory readiness. Our IT solutions are driven by specialists <strong className="font-semibold text-ink-900">educated and qualified at top-tier, highly rated Canadian universities</strong>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Driven by Qualified Personnel */}
      <section className="section bg-white">
        <div className="container-site max-w-5xl">
          <SectionHeading
            title="Driven by Qualified Personnel"
            lead="Our greatest asset is our people. Every engagement is led by highly qualified specialists who bring elite credentials and field experience."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.02} className="h-full rounded-2xl border border-line bg-mist/60 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-gold-700">
                <ShieldCheckIcon className="h-6 w-6" />
              </span>
              <h4 className="mt-6 font-display text-lg font-bold text-ink-950">
                Global Designations
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Top-tier global professional designations spanning banking, risk management, human resources, and technology.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="h-full rounded-2xl border border-line bg-mist/60 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-gold-700">
                <CheckCircle2Icon className="h-6 w-6" />
              </span>
              <h4 className="mt-6 font-display text-lg font-bold text-ink-950">
                Canadian & Global Academics
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Academic and technical qualifications from internationally renowned, highly rated Canadian institutions and elite global programs.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="h-full rounded-2xl border border-line bg-mist/60 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-gold-700">
                <LayersIcon className="h-6 w-6" />
              </span>
              <h4 className="mt-6 font-display text-lg font-bold text-ink-950">
                On-The-Ground Execution
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Diversified, hands-on experience in competitive international financial markets with on-the-ground execution knowledge in the Middle East and Pakistan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
