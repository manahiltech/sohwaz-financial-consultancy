import React from 'react';

type DSSectionProps = {id: string;title: string;description?: string;children: React.ReactNode;};

export function DSSection({ id, title, description, children }: DSSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-16 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink-950 md:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>}
      <div className="mt-8">{children}</div>
    </section>);

}
