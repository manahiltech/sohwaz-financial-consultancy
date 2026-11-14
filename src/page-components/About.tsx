import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceIcon } from '../components/ServiceIcon';
import { ProcessSteps } from '../components/ProcessSteps';
import { MarketList } from '../components/MarketList';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';
import { advisoryApproach, leaders, mission, principles, vision } from '../data/company';
import { images } from '../data/images';

export function About() {
  return (
    <>
      <PageBanner
        title="Independent advice for the decisions that shape a balance sheet."
        lead="Sohwaz Holdings advises corporates, investors and institutions across major markets."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image={images.architecture} />
      

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading title="Company overview" />
          </div>
          <Reveal className="space-y-5 text-[17px] leading-relaxed text-muted lg:col-span-7">
            <p className="text-xl leading-relaxed text-ink-950">
              We are a financial and investment advisory firm built on a simple premise: important financial decisions
              deserve independent, well-reasoned advice.
            </p>
            <p>
              Our clients include family businesses, corporate groups, private investors and holding companies. They
              come to us when the stakes are high — restructuring a treasury function, raising new facilities,
              reviewing a portfolio, or preparing for regulatory change.
            </p>
            <p>
              We combine experience from banking, corporate finance and investment management with a working knowledge
              of how business is done. Our role is to advise and support; decisions always remain with our
              clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <div className="container-site grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-2">
          {[
          { label: 'Our mission', text: mission },
          { label: 'Our vision', text: vision }].
          map((b) =>
          <Reveal key={b.label} className="bg-white p-8 md:p-12">
              <h2 className="font-display text-sm font-bold text-gold-700">{b.label}</h2>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink-950 md:text-[28px]">
                {b.text}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading title="Areas of expertise" lead="Six disciplines, applied individually or together depending on the decision." />
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s) =>
            <li key={s.slug} className="border-t border-line">
                <Link href={`/services/${s.slug}`} className="group flex items-start gap-4 py-6">
                  <span className="mt-0.5 text-ink-800">
                    <ServiceIcon icon={s.icon} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display font-bold text-ink-950 group-hover:underline group-hover:decoration-gold-400 group-hover:decoration-2 group-hover:underline-offset-4">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{s.summary}</span>
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="section bg-ink-950">
        <div className="container-site">
          <SectionHeading onDark title="Advisory principles" lead="The standards that govern how we work with every client." />
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) =>
            <Reveal key={p.title} delay={i * 0.04} className="border-t border-white/15 pt-6">
                <dt className="font-display text-lg font-bold text-white">{p.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-white/70">{p.description}</dd>
              </Reveal>
            )}
          </dl>
        </div>
      </section>

      {/* <section className="section">
        <div className="container-site">
          <SectionHeading title="Regional focus" lead="We advise across selected markets, allowing depth rather than breadth." />
          <div className="mt-12">
            <MarketList />
          </div>
        </div>
      </section> */}

      <section className="section bg-mist">
        <div className="container-site">
          <SectionHeading title="Our working approach" lead="Structured enough to be rigorous, flexible enough to fit how your organisation works." />
          <div className="mt-14">
            <ProcessSteps steps={advisoryApproach} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Led by experienced professionals"
              lead="Our management team brings senior experience across banking, treasury, investment, risk and real estate — and remains directly involved in client work." />
            
            <div className="mt-8">
              <Button href="/management" variant="dark">
                Meet the management team
              </Button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-6">
            {leaders.map((l) =>
            <li key={l.role} className="text-center">
                <div className="mx-auto flex aspect-square w-full items-center justify-center rounded-xl border border-dashed border-ink-600/25 bg-mist text-[11px] text-muted">
                  [Photo]
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-snug text-ink-950">{l.role}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <ConsultationCTA />
    </>);

}
