'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { navItems } from '../data/navigation';

export function Header() {
  const pathname = usePathname();
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

  const getLabel = (key: string) => {
    switch (key) {
      case 'nav.home':
        return 'Home';
      case 'nav.services':
        return 'Services';
      case 'nav.consultancy':
        return 'Consultancy';
      case 'nav.about':
        return 'About';
      case 'nav.contact':
        return 'Contact';
      default:
        return key.replace('nav.', '').charAt(0).toUpperCase() + key.replace('nav.', '').slice(1);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-[box-shadow,border-color] duration-200 ${
          scrolled ? 'border-line shadow-soft' : 'border-transparent'
        }`}
      >
        <div className="container-site flex h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Sohwaz Financial Consultants — home"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden h-full lg:block">
            <ul className="flex h-full items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <li key={item.key} className="flex h-full items-center">
                    <Link
                      href={item.to}
                      className={`group relative flex h-full items-center px-3.5 text-[14px] font-semibold transition-colors duration-150 ${
                        isActive ? 'text-ink-950' : 'text-muted hover:text-ink-950'
                      }`}
                    >
                      {getLabel(item.key)}
                      <span
                        className={`absolute inset-x-3.5 bottom-0 h-0.5 bg-gold-400 transition-opacity duration-150 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop only: on smaller screens this button lives inside the menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-900 lg:hidden"
            >
              {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/*
        The mobile menu is a sibling of <header>, not a child. The header uses
        backdrop-blur, and a blurred parent makes `fixed` children position against
        the header instead of the screen, which collapsed the menu to zero height.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-white px-6 pb-8 pt-4 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line">
                {navItems.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-4 font-display text-lg font-semibold ${
                          isActive ? 'text-gold-700' : 'text-ink-900 hover:text-ink-700'
                        }`}
                      >
                        {getLabel(item.key)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-8 border-t border-line pt-6">
              <Button
                href="/contact"
                size="lg"
                className="w-full justify-center py-3.5 text-base"
                onClick={() => setMobileOpen(false)}
              >
                Request a Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}