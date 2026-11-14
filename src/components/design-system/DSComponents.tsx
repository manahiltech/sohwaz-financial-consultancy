import React from 'react';
import {
  ArrowRightIcon,
  Building2Icon,
  LandmarkIcon,
  LayersIcon,
  BriefcaseIcon,
  ScaleIcon,
  ShieldCheckIcon,
  GlobeIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FileTextIcon,
  CheckIcon,
  ClockIcon,
  LockIcon,
  Loader2Icon } from
'lucide-react';
import { DSSection } from './DSSection';
import { Button } from '../Button';
import { ServiceCard } from '../ServiceCard';
import { AudienceCard } from '../AudienceCard';
import { LeaderCard } from '../LeaderCard';
import { FormField, inputClass } from '../form/FormField';
import { EnquirySuccess } from '../form/EnquirySuccess';
import { services } from '../../data/services';
import { audiences, leaders } from '../../data/company';

const iconSet = [
Building2Icon, LandmarkIcon, LayersIcon, BriefcaseIcon, ScaleIcon, ShieldCheckIcon,
GlobeIcon, PhoneIcon, MailIcon, MapPinIcon, FileTextIcon, CheckIcon, ClockIcon, LockIcon];


export function DSComponents() {
  return (
    <>
      <DSSection id="buttons" title="Buttons" description="Gold is reserved for the single primary action on a view. Radius 8px; heights 36 / 44 / 48. Press feedback scales to 98% in 150ms.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-line p-6">
            <p className="mb-4 text-[13px] font-medium text-muted">On light</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="dark">Secondary</Button>
              <Button variant="outline">Tertiary</Button>
              <Button disabled>Disabled</Button>
              <Button variant="dark" disabled>
                <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[12px] text-muted">
              <div><span className="inline-flex h-11 items-center rounded-lg bg-gold-400 px-5 text-sm font-semibold text-ink-950">Default</span></div>
              <div><span className="inline-flex h-11 items-center rounded-lg bg-gold-300 px-5 text-sm font-semibold text-ink-950">Hover</span></div>
              <div><span className="inline-flex h-11 items-center rounded-lg bg-gold-400 px-5 text-sm font-semibold text-ink-950 ring-2 ring-gold-400 ring-offset-2">Focus</span></div>
            </div>
          </div>
          <div className="rounded-xl bg-ink-950 p-6">
            <p className="mb-4 text-[13px] font-medium text-white/60">On dark</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Request a Consultation</Button>
              <Button variant="outlineDark">Explore services</Button>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
              Text link
            </span>
          </div>
        </div>
      </DSSection>

      <DSSection id="cards" title="Cards" description="Radius 12px, 1px line border, soft shadow on hover only for interactive cards. Footers anchor to a shared baseline.">
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard service={services[1]} />
          <AudienceCard audience={audiences[0]} />
          <LeaderCard leader={leaders[1]} compact />
        </div>
      </DSSection>

      <DSSection id="forms" title="Form states" description="Inputs are 48px high with an 8px radius. Errors use colour, an icon and text together — never colour alone.">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-line p-6">
            <p className="mb-4 text-[13px] font-semibold text-ink-950">Default</p>
            <FormField id="ds-default" label="Work email" required hint="We’ll only use this to reply.">
              <input id="ds-default" className={`${inputClass()} h-12`} placeholder="name@company.com" />
            </FormField>
          </div>
          <div className="rounded-xl border border-line p-6">
            <p className="mb-4 text-[13px] font-semibold text-ink-950">Error</p>
            <FormField id="ds-error" label="Work email" required error="Please enter a valid email address.">
              <input id="ds-error" aria-invalid className={`${inputClass('err')} h-12`} defaultValue="name@company" />
            </FormField>
          </div>
          <div className="rounded-xl border border-line p-6">
            <p className="mb-4 text-[13px] font-semibold text-ink-950">Valid</p>
            <FormField id="ds-valid" label="Work email" required valid>
              <input id="ds-valid" className={`${inputClass(undefined, true)} h-12`} defaultValue="name@company.com" />
            </FormField>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-danger/25 bg-danger/5 p-4 text-sm text-danger" role="note">
            <p className="font-semibold">Error summary</p>
            <p className="mt-1">Please review the 3 highlighted fields before submitting.</p>
          </div>
          <EnquirySuccess name="Example" />
        </div>
      </DSSection>

      <DSSection id="icons" title="Icons" description="Lucide line icons at 1.5px stroke, 20px default, always ink-colored. Gold is used only for small accents.">
        <ul className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {iconSet.map((Icon, i) =>
          <li key={i} className="flex aspect-square items-center justify-center rounded-lg border border-line text-ink-800">
              <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </li>
          )}
        </ul>
      </DSSection>
    </>);

}
