'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { MegaMenuPanel } from './MegaMenuPanel';
import { MobileMenuContent } from './MobileMenu';
import { navItems } from '../data/navigation';


export function Header() {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<'services' | 'markets' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const { body, documentElement } = document;
    const previousBodyStyles = {
      overflow: body.style.overflow,
    };
    const previousDocumentOverflow = documentElement.style.overflow;

    documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      documentElement.style.overflow = previousDocumentOverflow;
      body.style.overflow = previousBodyStyles.overflow;
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 transition-[box-shadow,border-color] duration-200 ${scrolled || openMega ? 'border-line shadow-soft' : 'border-transparent'}`}
      onMouseLeave={() => setOpenMega(null)}
      onKeyDown={(e) => e.key === 'Escape' && setOpenMega(null)}>

      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Sohwaz Holdings — home" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden h-full xl:block">
          <ul className="flex h-full items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <li
                  key={item.key}
                  className="flex h-full items-center"
                  onMouseEnter={() => setOpenMega(item.mega ?? null)}>

                  <Link
                    href={item.to}
                    onClick={() => {
                      setOpenMega(null);
                      setMobileOpen(false);
                    }}
                    className={`group relative flex h-full items-center px-3 text-[14px] font-medium transition-colors duration-150 ${isActive ? 'text-ink-950' : 'text-muted hover:text-ink-950'}`}>

                    {item.key.replace('nav.', '').charAt(0).toUpperCase() + item.key.replace('nav.', '').slice(1)}
                    <span
                      className={`absolute inset-x-3 bottom-0 h-0.5 bg-gold-400 transition-opacity duration-150 ${isActive || (openMega === item.mega && item.mega) ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                      aria-hidden="true" />

                  </Link>
                  {item.mega &&
                  <button
                    type="button"
                    aria-label={`Open ${item.key.replace('nav.', '').charAt(0).toUpperCase() + item.key.replace('nav.', '').slice(1)} menu`}
                    aria-expanded={openMega === item.mega}
                    onClick={() => setOpenMega(openMega === item.mega ? null : item.mega ?? null)}
                    className="-ml-2 mr-1 rounded p-1 text-muted hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400">

                      <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${openMega === item.mega ? 'rotate-180' : ''}`}
                    aria-hidden="true" />

                    </button>
                  }
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <Button href="/contact" size="sm" className="desktop-consultation">
            Request a Consultation
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-900 xl:hidden">

            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMega &&
        <motion.div
          key={openMega}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-x-0 top-full hidden border-t border-line bg-white shadow-lift xl:block">

            <MegaMenuPanel type={openMega} onNavigate={() => setOpenMega(null)} />
          </motion.div>
        }
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-x-0 bottom-0 top-[72px] overflow-x-hidden overflow-y-auto bg-white px-5 pb-8 pt-4 md:px-8 xl:hidden">

            <MobileMenuContent onNavigate={() => setMobileOpen(false)} />
          </motion.div>
        }
      </AnimatePresence>
    </header>
  );
}