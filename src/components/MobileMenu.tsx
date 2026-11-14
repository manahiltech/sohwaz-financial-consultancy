import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, PhoneIcon } from 'lucide-react';
import { Button } from './Button';
import { navItems, contactDetails } from '../data/navigation';
import { services } from '../data/services';
import { markets } from '../data/company';

type MobileMenuContentProps = {onNavigate?: () => void;defaultExpanded?: string | null;};

export function MobileMenuContent({ onNavigate, defaultExpanded = null }: MobileMenuContentProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(defaultExpanded);

  return (
    <div className="flex min-h-full flex-col">
      <nav aria-label="Mobile" className="flex-1">
        <ul className="divide-y divide-line">
          {navItems.map((item) => {
            const sub =
            item.mega === 'services' ?
            services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })) :
            item.mega === 'markets' ?
            markets.map((m) => ({ label: m.name, to: `/markets#${m.code.toLowerCase()}` })) :
            null;
            const isOpen = expanded === item.key;
            const isActive = pathname === item.to;
            return (
              <li key={item.key}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.to}
                    onClick={onNavigate}
                    className={`flex-1 py-4 font-display text-lg font-semibold ${isActive ? 'text-ink-950' : 'text-ink-800'}`}>

                    {item.key === 'nav.home' ? 'Home' : item.key === 'nav.about' ? 'About Us' : item.key === 'nav.services' ? 'Services' : item.key === 'nav.management' ? 'Management' : item.key === 'nav.markets' ? 'Markets Served' : item.key === 'nav.contact' ? 'Contact' : item.key}
                  </Link>
                  {sub &&
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`Show ${item.key}`}
                    onClick={() => setExpanded(isOpen ? null : item.key)}
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-muted hover:bg-mist">
                    
                      <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true" />
                    
                    </button>
                  }
                </div>
                {sub && isOpen &&
                <ul className="mb-3 space-y-0.5 border-l-2 border-gold-400 pl-4">
                    {sub.map((s) =>
                  <li key={s.to}>
                        <Link href={s.to} onClick={onNavigate} className="block py-2 text-[15px] text-muted hover:text-ink-950">
                          {s.label}
                        </Link>
                      </li>
                  )}
                  </ul>
                }
              </li>);

          })}
        </ul>
      </nav>
      <div className="space-y-5 border-t border-line pt-6">
        <Button href="/contact" size="lg" className="w-full py-4 text-base" onClick={onNavigate}>
          Request a Consultation
        </Button>
      </div>
    </div>);

}
