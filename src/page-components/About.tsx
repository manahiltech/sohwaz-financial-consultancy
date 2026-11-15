import React from 'react';
import Image from 'next/image';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Reveal } from '../components/Reveal';
import {
  LandmarkIcon,
  BriefcaseIcon,
  FlameIcon,
  ShieldCheckIcon,
  CompassIcon,
} from 'lucide-react';
import { images } from '../data/images';
import { CardGrid } from '../components/CardGrid';

export function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        lead="Strategic financial and investment advisory led by seasoned executive leadership."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* Executive Profile Section */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* CEO Photo Column */}
            <Reveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-mist shadow-lift">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={images.ceoPhoto}
                    alt="Sohail Nawaz — Founder & CEO of Sohwaz Financial Consultants"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-white border-t border-line">
                  <h3 className="font-display text-2xl font-bold text-ink-950">
                    Sohail Nawaz
                  </h3>
                  <p className="mt-1 font-display text-sm font-bold tracking-wide uppercase text-gold-700">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Executive Bio Text */}
            <div className="space-y-6 lg:col-span-7">
              <Reveal>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
                  Leadership Profile
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink-950 md:text-4xl">
                  Visionary C-Suite Leader & Profitability Architect
                </h2>
              </Reveal>

              <Reveal delay={0.05} className="space-y-5 text-[17px] leading-relaxed text-muted">
                <p>
                  With over <strong className="font-semibold text-ink-950">35 years of distinguished leadership across the banking, investment, and energy sectors</strong>, this executive brings a rare blend of institutional financial sophistication and hands-on operational excellence. Throughout a stellar career spanning global Treasury, Financial Institutions Groups (FIG), and Capital Markets—culminating in a transformative tenure as an Oil & Gas Chief Financial Officer—they have consistently translated complex financial engineering into aggressive bottom-line growth, engineering high profitability and structural resilience for complex business entities.
                </p>
                <p>
                  A distinguished financial executive with an extensive track record of leadership across the <strong className="font-semibold text-ink-950">GCC’s banking, investment, and energy sectors</strong>, with deep localized expertise in <strong className="font-semibold text-ink-950">Kuwait, Qatar, and Bahrain</strong>. Demonstrated success navigating complex corporate environments, ranging from tier-1 sovereign financial institutions to state-backed energy infrastructure. Career highlights include directing capital markets and treasury strategies for major financial groups, alongside serving as the <strong className="font-semibold text-ink-950">Chief Financial Officer (CFO) for a leading oil and gas company in State of Kuwait</strong>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sectors & Executed Capabilities */}
      <section className="section bg-mist">
        <div className="container-site">
          <SectionHeading
            title="Core Sectors & Executed Capabilities"
            lead="Proven executive execution across tier-1 financial institutions, sovereign wealth entities, and large-scale energy infrastructure."
          />

          <div className="mt-14 space-y-16">
            <section aria-labelledby="banking-sector">
              <div className="flex flex-wrap items-center gap-3 border-b border-line pb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <LandmarkIcon className="h-6 w-6" />
                </span>
                <h3 id="banking-sector" className="font-display text-xl font-bold text-ink-950">
                  Banking & Financial Institutions
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap items-stretch justify-center gap-6">
                <Reveal className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(25%-2.25rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Treasury & Asset-Liability Management:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Directed Treasury operations, optimized Asset-Liability Committee (ALCO) strategies, and managed asset-liability frameworks (ALM) for regional commercial, investment, and tier-1 sovereign banking institutions.
                    </p>
                  </article>
                </Reveal>
                <Reveal delay={0.04} className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(25%-2.25rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Financial Institutions Group (FIG) & Capital Markets:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Spearheaded institutional relationships, structured cross-border financial transactions, and executed sophisticated capital markets initiatives across the GCC.
                    </p>
                  </article>
                </Reveal>
                <Reveal delay={0.08} className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(25%-2.25rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Regulatory Alignment & GRC:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Designed and implemented proportionate Governance, Risk, and Compliance (GRC) frameworks that successfully bridged international standards with Central Bank requirements, adhering strictly to <strong className="font-medium text-ink-900">CBK (Kuwait), QCB (Qatar), and CBB (Bahrain)</strong> guidelines.
                    </p>
                  </article>
                </Reveal>
                <Reveal delay={0.12} className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(25%-2.25rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Islamic Finance Integration:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Navigated and managed Sharia-compliant banking operations, ensuring seamless execution within the region&apos;s dual-banking systems.
                    </p>
                  </article>
                </Reveal>
              </div>
            </section>

            <section aria-labelledby="investment-sector">
              <div className="flex flex-wrap items-center gap-3 border-b border-line pb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <BriefcaseIcon className="h-6 w-6" />
                </span>
                <h3 id="investment-sector" className="font-display text-xl font-bold text-ink-950">
                  Investment Firms & Sovereign Wealth
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap items-stretch justify-center gap-6">
                <Reveal className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(50%-1.5rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Institutional Portfolio Advisory:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Provided non-discretionary portfolio management, advanced risk analytics, and strategic asset allocation models for prominent regional investment companies and family offices.
                    </p>
                  </article>
                </Reveal>
                <Reveal delay={0.04} className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(50%-1.5rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Real Estate Underwriting:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Delivered rigorous, independent financial assessments and risk underwriting for high-value acquisitions and income-producing portfolios across regional and international property markets.
                    </p>
                  </article>
                </Reveal>
              </div>
            </section>

            <section aria-labelledby="energy-sector">
              <div className="flex flex-wrap items-center gap-3 border-b border-line pb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <FlameIcon className="h-6 w-6" />
                </span>
                <h3 id="energy-sector" className="font-display text-xl font-bold text-ink-950">
                  Oil & Gas (Energy Infrastructure)
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap items-stretch justify-center gap-6">
                <Reveal className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(50%-1.5rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      CFO Leadership & Capital Advisory:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Served as the <strong className="font-medium text-ink-900">Chief Financial Officer (CFO) for a leading oil and gas company in Kuwait</strong>, providing corporate financial governance, strategic leadership, and sophisticated CapEx optimization for large-scale energy infrastructure.
                    </p>
                  </article>
                </Reveal>
                <Reveal delay={0.04} className="basis-full min-w-0 sm:max-w-[calc(50%-1.5rem)] lg:max-w-[calc(50%-1.5rem)]">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                    <strong className="font-display text-base font-bold text-ink-950">
                      Margin & Revenue Engineering:
                    </strong>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      Deploying commodity risk-mitigation strategies, orchestrating corporate restructurings, and leading high-stakes lender negotiations to maximize profitability.
                    </p>
                  </article>
                </Reveal>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-ink-950 text-white">
        <div className="container-site">
          <SectionHeading
            onDark
            title="Core Values"
            lead="Guiding standards that govern every advisory mandate and institutional client relationship."
          />

          <CardGrid columns={2} className="mt-14">
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-gold-300">
                  <ShieldCheckIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Discretion & Compliance
                </h3>
              </div>
              <p className="mt-6 text-[16px] leading-relaxed text-white/75">
                We maintain the highest standards of professional confidentiality, handling all client data, corporate structures, and proprietary insights with absolute discretion. Our engagement frameworks are explicitly designed to secure your sensitive information in strict accordance with applicable legal, fiduciary, and regulatory reporting requirements.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-gold-300">
                  <CompassIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Strategic Clarity & Client Sovereignty
                </h3>
              </div>
              <p className="mt-6 text-[16px] leading-relaxed text-white/75">
                We eliminate operational ambiguity by delivering plain-language financial assessments and transparent risk analysis. While we provide the strategic blueprints, <strong className="font-semibold text-white">all ultimate corporate decisions and implementation actions rest solely with the Client</strong>.                 Our advisory services constitute guidance only, and execution carries no legal or financial recourse to our firm, its advisors, or its entities.
              </p>
            </Reveal>
          </CardGrid>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
