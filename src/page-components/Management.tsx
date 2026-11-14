import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { LeaderCard } from '../components/LeaderCard';
import { ConsultationCTA } from '../components/ConsultationCTA';
import { Reveal } from '../components/Reveal';
import { engagementRoles, expertiseAreas, leaders } from '../data/company';
import { images } from '../data/images';

export function Management() {
  return (
    <>
      <PageBanner
        title="Management"
        lead="Experienced practitioners who lead every engagement personally."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Management' }]}
        image={images.boardroom} />
      

      <section className="section pb-0 md:pb-0 lg:pb-0">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading title="Leadership introduction" />
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-muted lg:col-span-7">
            <p className="text-xl leading-relaxed text-ink-950">
              Our lead management team member combines senior experience across banking, treasury, investment and risk management
              across Pakistan, South East Asia and Canada.
            </p>
            <p>
              We have deliberately kept the firm senior-led. Clients work directly with the people responsible for
              their advice, and our leadership remains accountable for the quality and independence of every
              recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container-site">
          <h2 className="sr-only">Management profiles</h2>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) =>
            <Reveal key={l.role} delay={i * 0.05}>
                <LeaderCard leader={l} />
              </Reveal>
            )}
          </div>
        </div>
      </section> */}

      <section className="section bg-mist">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              title="Professional background & areas of expertise"
              lead="Collectively, our leadership brings over 35 years of experience across the following disciplines." />
            
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {expertiseAreas.map((e) =>
            <div key={e.title} className="border-t border-line py-6">
                <dt className="font-display font-bold text-ink-950">{e.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{e.description}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading
            title="Management’s role in client engagements"
            lead="Senior involvement is not a feature we add on — it is how the firm is structured." />
          
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {engagementRoles.map((r, i) =>
            <Reveal key={r.title} delay={i * 0.05}>
                <li className="h-full rounded-xl border border-line p-7">
                  <span className="font-display text-sm font-bold text-gold-700">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink-950">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.description}</p>
                </li>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      <ConsultationCTA title="Speak directly with our leadership." />
    </>);

}
