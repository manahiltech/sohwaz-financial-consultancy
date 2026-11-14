import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessSteps } from '../components/ProcessSteps';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Reveal } from '../components/Reveal';
import { engagementSteps, services } from '../data/services';
import { images } from '../data/images';

export function Services() {
  return (
    <>
      <PageBanner
        title="Advisory services & consultancy"
        lead="Practical, independent advice across treasury, investment, financing, restructuring and risk."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image={images.dubai} />
      

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading title="Advice structured around your decision, not our products." />
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-muted lg:col-span-7">
            <p>
              Our services are designed to be used on their own or together. A treasury review may lead to a
              financing discussion; a portfolio review may raise governance questions. We scope each engagement around
              the decision you need to make.
            </p>
            <p>
              We do not sell financial products, hold client assets or lend. That independence allows us to give
              clear, unconflicted advice and to work alongside your existing banks and professional advisors.
            </p>
          </div>
        </div>
        <div className="container-site mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) =>
          <Reveal key={s.slug} delay={i * 0.04}>
              <ServiceCard service={s} detailed />
            </Reveal>
          )}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title="Our engagement process"
                lead="Every engagement follows the same disciplined sequence, so you know what to expect at each stage." />
              
              <p className="mt-6 text-sm text-muted">Timelines vary by scope and are agreed before work begins.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ProcessSteps steps={engagementSteps} layout="timeline" />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>);

}
