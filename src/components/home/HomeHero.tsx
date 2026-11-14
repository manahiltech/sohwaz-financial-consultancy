'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../Button';
import { HeroGlobe } from './HeroGlobe';

export function HomeHero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.35,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      delay,
    },
  });

  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Background radial gradients for depth */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-900/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-[450px] w-[450px] rounded-full bg-gold-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-site relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        {/* Left Column: Heading, Larger Logo, and CTAs */}
        <div className="z-10 lg:col-span-6 xl:col-span-6">
          {/* Prominent Logo on Home Page */}
          <motion.div {...enter(0)} className="mb-8 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <Image
                src="/assets/eagle-logo.png"
                alt="Sohwaz Financial Consultants"
                width={128}
                height={128}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div className="font-display leading-tight">
              <span className="block text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
                SOHWAZ
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300 sm:text-[12px]">
                Financial Consultants
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...enter(0.06)}
            className="font-display text-[38px] font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[62px]"
          >
            Independent advice for consequential decisions.
          </motion.h1>

          <motion.p
            {...enter(0.12)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Strategic financial and investment advisory across Treasury, Asset-Liability Management, Debt Restructuring, and Governance for corporates, investors, and institutions across the Middle East and Pakistan.
          </motion.p>

          <motion.div
            {...enter(0.18)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" size="lg">
              Request a consultation
            </Button>
            <Button href="/services" size="lg" variant="outlineDark">
              Explore our services
            </Button>
          </motion.div>
        </div>

        {/* Right Column: The 3D Rotating Earth Globe with Orbiting Currencies */}
        <motion.div
          {...enter(0.22)}
          className="relative flex items-center justify-center lg:col-span-6 xl:col-span-6"
        >
          <HeroGlobe />
        </motion.div>
      </div>
    </section>
  );
}
