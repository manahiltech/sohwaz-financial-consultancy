import React from 'react';
import Link from 'next/link';
import { MailIcon } from 'lucide-react';
import { Logo } from './Logo';
import { contactDetails } from '../data/navigation';

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Consultancy', to: '/consultancy' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Terms of Service & Advisory Disclaimer', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <div className="container-site pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5">
            <Logo onDark />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/65">
              Independent financial and investment advisory across Treasury, ALM, ALCO, Credit & Restructuring, Real Estate, and Governance, Risk & Compliance for corporates, institutions, and investors in the Middle East and Pakistan.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-gold-300" strokeWidth={1.5} aria-hidden="true" />
                <a href={`mailto:${contactDetails.email}`} className="transition-colors hover:text-white">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 shrink-0 text-gold-300" strokeWidth={1.5} aria-hidden="true" />
                <a href={`mailto:${contactDetails.secondaryEmail}`} className="transition-colors hover:text-white">
                  {contactDetails.secondaryEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-display text-sm font-bold tracking-wide uppercase text-white/90">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold tracking-wide uppercase text-white/90">
              Legal & Compliance
            </h2>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Notice & Enquiry Policy (Fine Print) */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-[12px] leading-relaxed text-white/50">
            <span className="font-semibold text-white/70">Legal Notice & Enquiry Policy: </span>
            All advisory services provided by Sohwaz Financial Consultants constitute strategic guidance only; all ultimate corporate decisions, implementation actions, and compliance rest solely with the Client, carrying no legal or financial recourse to our firm or its advisors. Inbound submissions via this contact platform do not establish a formal engagement. Enquiries that do not receive a written response from Sohwaz Financial Consultants within five (5) business days are automatically deemed declined without liability, and it is understood that the Firm has elected not to pursue the matter.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-white/55">
              © 2026 Sohwaz Financial Consultants. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
