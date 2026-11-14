import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../Button';
import { HeroDashboard } from '../HeroDashboard';
import { images } from '../../data/images';

export function HomeHero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], delay }
  });

  return (
    <section className="relative overflow-hidden jade-marble text-white">
      <img src={images.kuwait} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-ink-950/55" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-full bg-ink-950/45 lg:w-[62%]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
        <span className="currency-float currency-usd">$</span>
        <span className="currency-float currency-eur">€</span>
        <span className="currency-float currency-jpy">¥</span>
        <span className="currency-float currency-cad">C$</span>
        <span className="currency-float currency-kwd">د.ك</span>
        <span className="currency-float currency-gbp">£</span>
        <span className="currency-float currency-chf">Fr.</span>
      </div>
      <div className="container-site relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-7">
          <motion.h1
            {...enter(0)}
            className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-[68px]">
            
            Independent advice for consequential decisions.
          </motion.h1>
          <motion.p {...enter(0.06)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Strategic financial and investment advisory for corporates, investors and institutions.
          </motion.p>
          <motion.div {...enter(0.12)} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              Request a consultation
            </Button>
            <Button href="/services" size="lg" variant="outlineDark">
              Explore our services
            </Button>
          </motion.div>
        </div>
        <motion.div {...enter(0.18)} className="hidden lg:col-span-5 lg:block">
          <HeroDashboard />
        </motion.div>
      </div>
    </section>);

}
