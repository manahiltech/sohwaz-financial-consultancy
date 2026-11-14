import React from 'react';
import Link from 'next/link';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from './Logo';
import { LinkedInIcon } from './LinkedInIcon';
import { services } from '../data/services';
import { contactDetails } from '../data/navigation';

const company = [
{ label: 'About Us', to: '/about' },
{ label: 'Management', to: '/management' },
{ label: 'Markets Served', to: '/markets' },
{ label: 'Contact', to: '/contact' }];


const legal = [
{ label: 'Privacy Policy', to: '/privacy' },
{ label: 'Terms of Use', to: '/terms' },
{ label: 'Regulatory Disclosures', to: '/terms#regulatory-status' },
{ label: 'Design System', to: '/design-system' }];


export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-site pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo onDark />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
              Independent financial and investment advisory for corporates, investors and institutions in Kuwait, the
              UAE and Bahrain.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" strokeWidth={1.5} aria-hidden="true" />
                <span>{contactDetails.email}</span>
              </li>
            </ul>
          </div>

          <FooterColumn title="Services" className="lg:col-span-3">
            {services.map((s) =>
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            )}
          </FooterColumn>
          <FooterColumn title="Company" className="lg:col-span-2">
            {company.map((l) =>
            <FooterLink key={l.to} href={l.to}>
                {l.label}
              </FooterLink>
            )}
          </FooterColumn>
          <FooterColumn title="Legal & compliance" className="lg:col-span-3">
            {legal.map((l) =>
            <FooterLink key={l.to} href={l.to}>
                {l.label}
              </FooterLink>
            )}
          </FooterColumn>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className=" text-[13px] leading-relaxed text-white/55">
            <span className="font-semibold text-white/75">Important information. </span>
            Sohwaz Holdings provides financial and investment advisory services only. Information on this website is
            for general purposes and does not constitute an offer, solicitation or recommendation to buy or sell any
            financial instrument, nor financial, legal or tax advice. Advice is provided only under a written
            engagement. Past performance is not a reliable indicator of future results. [Regulatory status and licence
            details for each jurisdiction to be inserted once confirmed.]
          </p>
          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-[13px] text-white/55">© 2026 Sohwaz Holdings. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Sohwaz Holdings on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/75 transition-colors duration-150 hover:border-white/40 hover:text-white">
                
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}

function FooterColumn({ title, className, children }: {title: string;className?: string;children: React.ReactNode;}) {
  return (
    <div className={className}>
      <h2 className="font-display text-sm font-bold text-white">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>);

}

function FooterLink({ href, children }: {href: string;children: React.ReactNode;}) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/65 transition-colors duration-150 hover:text-white">
        {children}
      </Link>
    </li>);

}
