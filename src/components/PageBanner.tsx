import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import { DataLines } from "./DataLines";

type Crumb = {
  label: string;
  to?: string;
};

type PageBannerProps = {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
  hideHandsEmblem?: boolean;
};

export function PageBanner({
  title,
  lead,
  crumbs,
  children,
  hideHandsEmblem = false,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-ink-950/70" aria-hidden="true" />
      <DataLines className="pointer-events-none absolute -right-20 bottom-0 hidden w-[720px] text-white opacity-40 lg:block" />

      <div className="container-site relative py-12 md:py-16 lg:py-20">
        {/* Breadcrumbs (z-10 keeps them above the mobile background image) */}
        <nav aria-label="Breadcrumb" className="relative z-10 mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link
                    href={c.to}
                    className="transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="font-medium text-white/90"
                  >
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRightIcon
                    className="h-3.5 w-3.5 text-white/40"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main Title & Lead Text */}
          <div
            className={
              hideHandsEmblem ? "lg:col-span-12" : "relative z-10 lg:col-span-8"
            }
          >
            <h1 className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.025em] md:text-5xl lg:text-[54px]">
              {title}
            </h1>
            {lead && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                {lead}
              </p>
            )}
            {children}
          </div>

          {/* Hands and Dollar Emblem
              Below lg: faint background behind the content, takes no space.
              lg and up: normal column on the right, as before. */}
          {!hideHandsEmblem && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:pointer-events-auto lg:static lg:inset-auto lg:col-span-4 lg:items-stretch lg:justify-end">
              {" "}
              <div className="relative aspect-square w-48 shrink-0 opacity-[0.14] drop-shadow-[0_10px_25px_rgba(242,190,44,0.14)] transition-opacity duration-200 sm:w-56 md:w-64 lg:w-72 lg:opacity-75 lg:hover:opacity-90">
                <Image
                  src="/assets/hands-and-dollar.png"
                  alt=""
                  width={366}
                  height={318}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
