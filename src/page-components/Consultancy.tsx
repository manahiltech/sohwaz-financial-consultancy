import React from 'react';
import Image from 'next/image';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Reveal } from '../components/Reveal';
import {
  LandmarkIcon,
  Building2Icon,
  ScaleIcon,
  LayersIcon,
  ShieldCheckIcon,
  SearchCheckIcon,
  CompassIcon,
  MapIcon,
  HeadphonesIcon,
} from 'lucide-react';
import { images } from '../data/images';
import { CardGrid } from '../components/CardGrid';

const practices = [
  {
    icon: LandmarkIcon,
    title: 'Treasury, ALCO and ALM functions',
    description:
      'Our Treasury, ALM, and ALCO capabilities provide sophisticated oversight for cash, funding, and risk management across complex business groups. We deliver practical strategies aligned with your corporate risk appetite, optimizing capital allocation and balancing liquidity needs with regulatory constraints. From managing asset-liability mismatches to strengthening governance, we ensure your financial infrastructure supports resilient growth and long-term stability.',
  },
  {
    icon: Building2Icon,
    title: 'Real Estate Advisory',
    description:
      'Our Real Estate Investment capabilities offer rigorous assessment and strategic oversight across acquisitions, developments, and income-producing portfolios. We combine deep market intelligence with institutional-grade financial analysis to evaluate risk, optimize asset performance, and unlock value. Whether underwriting new developments or managing established portfolios, we deliver the independent insights needed to maximize returns and ensure long-term portfolio resilience.',
  },
  {
    icon: ScaleIcon,
    title: 'Credit & Restructuring',
    description:
      'Our Credit & Restructuring practice supports businesses navigating complex lender negotiations, financial turnarounds, and liquidity challenges. We work alongside management teams to stabilize operations, restructure debt facilities, and restore stakeholder confidence. By delivering independent, objective strategies, we help companies protect value and establish a sustainable path forward through periods of financial transition.',
  },
  {
    icon: LayersIcon,
    title: 'Portfolio Management Advisory',
    description:
      'Our Portfolio Management Advisory service delivers institutional-grade investment insights and rigorous analytics while preserving your organization’s absolute decision-making autonomy. Acting strictly as a non-discretionary partner, we evaluate asset allocations, assess risk-adjusted returns, and identify market opportunities tailored to your strategic mandates. We provide the comprehensive data, objective forecasting, and independent recommendations your leadership needs to optimize performance, with the final execution and investment control remaining entirely in your hands.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Governance, Risk & Compliance (GRC)',
    description:
      'Our practice engineers right-sized governance structures that align directly with your organization’s scale, complexity, and strategic mandates. Moving entirely away from generic checklists, we deliver proportionate oversight frameworks that empower Boards and Management to protect enterprise value, navigate rigorous Anti-Money Laundering (AML) standards, and execute complex corporate decisions with absolute regulatory confidence.',
  },
];

const pillars = [
  {
    icon: SearchCheckIcon,
    title: 'Diagnostic Assessments',
    description:
      'Deep-dive reviews of your current financial health, constraints, and operational bottlenecks.',
  },
  {
    icon: CompassIcon,
    title: 'Bespoke Solution Design',
    description:
      'Tailoring corporate strategies directly to your specific risk appetite and regulatory requirements.',
  },
  {
    icon: MapIcon,
    title: 'Implementation Mapping',
    description:
      'Delivering the explicit blueprints and step-by-step roadmaps your team needs to succeed.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Continuous Advisory',
    description:
      'Serving as your trusted sounding board for ongoing market changes and counterparty negotiations.',
  },
];

export function Consultancy() {
  return (
    <>
      <PageBanner
        title="Consulting Services"
        lead="Specialized advisory practices led by seasoned professionals to engineer structural resilience and long-term value."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Consultancy' }]}
      />

      {/* Six Practices */}
      <section className="section bg-white">
        <div className="container-site">
          <SectionHeading
            title="Consulting Practices"
            lead="Independent, objective frameworks tailored to institutional leaders, CFOs, and family holdings."
          />

          <CardGrid className="mt-14">
            {practices.map((practice, idx) => {
              const Icon = practice.icon;
              return (
                <Reveal key={practice.title} delay={idx * 0.04} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-mist/50 p-8 transition-shadow hover:shadow-soft">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-ink-950">
                      {practice.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                      {practice.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </CardGrid>
        </div>
      </section>

      {/* Expert Guidance. Actionable Strategy. */}
      <section className="section bg-ink-950 text-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Expert Guidance. Actionable Strategy.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              We strip away complexity to help your business move forward with confidence. As independent consultants, we provide objective, data-driven insights to optimize your financial structures and streamline your path to growth.
            </p>
          </div>

          <CardGrid columns={4} className="mt-14">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={idx * 0.05} className="h-full">
                  <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/20 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </CardGrid>
        </div>
      </section>

      {/* Consultancy Delivered Professionally (EUPS) */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="rounded-2xl border border-line bg-mist/60 p-8 md:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-8">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
                  Client Case Highlight
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink-950 md:text-4xl">
                  Consultancy Delivered Professionally
                </h2>
                <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted md:text-[17px]">
                  <p>
                    Provided Financial Consultancy Services to <strong className="font-semibold text-ink-900">Eastern United Petroleum Services (EUPS)</strong> a premier, privately held Energy Company headquartered in Al-Ahmadi, State of Kuwait.
                  </p>
                  <p>
                    EUPS is managed by a distinguished executive leadership and holds the acclaimed position of being <strong className="font-semibold text-ink-900">Kuwait’s first national wireline logging company</strong>. The Company bridges the gap between major International Oil Companies (IOCs) and National Oil Companies (NOCs) like Kuwait Oil Company (KOC) by delivering locally responsive, state-of-the-art upstream tech solutions, technical support, and hydrocarbon extraction infrastructure.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="flex justify-center lg:col-span-4">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                  {/* EUPS logo is 200x200 px, displayed at max 200px and not upscaled */}
                  <div className="relative h-[160px] w-[160px] sm:h-[180px] sm:w-[180px]">
                    <Image
                      src={images.eupsLogo}
                      alt="Eastern United Petroleum Services (EUPS) Logo"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-center text-xs font-semibold text-muted">
                    Eastern United Petroleum Services
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

