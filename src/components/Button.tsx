import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'dark' | 'outline' | 'outlineDark';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-gold-400 text-ink-950 hover:bg-gold-300',
  dark: 'bg-ink-900 text-white hover:bg-ink-700',
  outline: 'border border-line bg-white text-ink-900 hover:border-ink-900',
  outlineDark: 'border border-white/25 text-white hover:border-white/60 hover:bg-white/5 focus-visible:ring-offset-ink-950'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  className = '',
  onClick
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (to) {
    return (
      <Link href={to} className={classes} onClick={onClick}>
        {children}
      </Link>);

  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>);

  }
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>);

}
