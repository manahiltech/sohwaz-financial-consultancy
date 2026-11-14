import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CheckIcon, FileTextIcon, PhoneIcon, ArrowRightIcon } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ServiceIcon } from '../components/ServiceIcon';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessSteps } from '../components/ProcessSteps';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { EnquiryForm } from '../components/form/EnquiryForm';
import { engagementSteps, getService, services } from '../data/services';
import { contactDetails } from '../data/navigation';
import { images } from '../data/images';

const toc = [
{ id: 'overview', label: 'Service overview' },
{ id: 'scope', label: 'Scope of advisory' },
{ id: 'audience', label: 'Who this service is for' },
{ id: 'approach', label: 'Our approach' },
{ id: 'deliverables', label: 'Potential deliverables' },
{ id: 'faqs', label: 'FAQs' }];


export function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = getService(slug);
  const [enquiryVisible, setEnquiryVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById('enquiry');
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setEnquiryVisible(entry.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [slug]);

  if (!service) return null;

  const approach = service.approach ?? engagementSteps.slice(1, 5);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageBanner
        title={service.title}
        lead={service.intro}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
        image={images.architecture}>
        
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#enquiry" size="lg">
            Enquire about this service
          </Button>
          <Button href="/services" size="lg" variant="outlineDark">
            All services
          </Button>
        </div>
        <span className="absolute right-12 top-24 hidden h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-gold-300 lg:flex">
          <ServiceIcon icon={service.icon} className="h-9 w-9" />
        </span>
      </PageBanner>

      <div className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-20 lg:col-span-8">
          <section id="overview" className="scroll-mt-28">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Service overview</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted">
              {service.overview.map((p, i) =>
              <p key={i} className={i === 0 ? 'text-xl leading-relaxed text-ink-950' : ''}>
                  {p}
                </p>
              )}
            </div>
          </section>

          <section id="scope" className="scroll-mt-28">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Scope of advisory</h2>
            <p className="mt-3 text-[17px] text-muted">Engagements are scoped to your needs and may include:</p>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
              {service.scope.map((s) =>
              <li key={s.title} className="flex gap-4 border-t border-line py-6">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold-100 text-gold-700">
                    <CheckIcon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-ink-950">{s.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.description}</p>
                  </div>
                </li>
              )}
            </ul>
          </section>

          <section id="audience" className="scroll-mt-28 rounded-2xl bg-mist p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Who this service is for</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {service.audience.map((a) =>
              <li key={a.title}>
                  <h3 className="font-display font-bold text-ink-950">{a.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{a.description}</p>
                </li>
              )}
            </ul>
          </section>

          <section id="approach" className="scroll-mt-28">
            <h2 className="mb-10 font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Our approach</h2>
            <ProcessSteps steps={approach} layout="timeline" />
          </section>

          <section id="deliverables" className="scroll-mt-28">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Potential deliverables</h2>
            <p className="mt-3 text-[17px] text-muted">
              Deliverables are agreed during scoping and vary with each engagement.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) =>
              <li key={d} className="flex items-center gap-3 rounded-lg border border-line px-4 py-3.5">
                  <FileTextIcon className="h-5 w-5 shrink-0 text-ink-700" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[15px] font-medium text-ink-950">{d}</span>
                </li>
              )}
            </ul>
          </section>

          <section id="faqs" className="scroll-mt-28">
            <h2 className="mb-8 font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Frequently asked questions</h2>
            <Accordion items={service.faqs} />
          </section>
        </div>

        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 space-y-8">
            <div className="rounded-xl bg-ink-950 p-7 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-gold-300">
                <ServiceIcon icon={service.icon} />
              </span>
              <p className="mt-5 font-display text-xl font-bold leading-snug">Discuss {service.title.toLowerCase()}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Speak with a senior advisor about your situation. Initial consultations are confidential.
              </p>
              <Button href="#enquiry" className="mt-6 w-full">
                Enquire now
              </Button>
              <a href={`tel:${contactDetails.phone}`} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70 hover:text-white">
                <PhoneIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                <span>{contactDetails.phone}</span>
              </a>
            </div>
            <nav aria-label="On this page">
              <p className="text-sm font-semibold text-ink-950">On this page</p>
              <ul className="mt-3 border-s border-line">
                {toc.map((t) =>
                <li key={t.id}>
                    <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-gold-400 hover:text-ink-950">
                      {t.label}
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </aside>
      </div>

      <section className="section bg-mist">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">Related services</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((s, i) =>
            <Reveal key={s.slug} delay={i * 0.04}>
                <ServiceCard service={s} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section id="enquiry" className="section scroll-mt-20">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-ink-950 md:text-[40px]">
              Enquire about {service.title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Share a few details and a senior advisor will be in touch to arrange an initial, confidential
              conversation.
            </p>
            <ol className="mt-10 space-y-6">
              {['We review your enquiry', 'A senior advisor contacts you', 'We agree scope and next steps'].map((s, i) =>
              <li key={s} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-display text-sm font-bold text-ink-900">
                    {i + 1}
                  </span>
                  <span className="font-medium text-ink-950">{s}</span>
                </li>
              )}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm key={service.slug} defaultService={service.slug} />
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur transition-transform duration-200 ease-out lg:hidden ${enquiryVisible ? 'translate-y-full' : 'translate-y-0'}`}>
        
        <Button href="#enquiry" size="lg" className="w-full">
          Enquire about this service
        </Button>
      </div>
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>);

}
