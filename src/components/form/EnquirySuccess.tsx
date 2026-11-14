import React from 'react';
import { CheckIcon } from 'lucide-react';

export function EnquirySuccess({ name, onReset }: {name?: string;onReset?: () => void;}) {
  return (
    <div role="status" className="rounded-xl border border-success/25 bg-white p-8 md:p-10">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
        <CheckIcon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.01em] text-ink-950">
        Thank you{name ? `, ${name.split(' ')[0]}` : ''}. Your enquiry has been received.
      </h3>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
        A member of our advisory team will review your message and respond within [two] business days. Your information
        is handled in line with our Privacy Policy.
      </p>
      {onReset &&
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-semibold text-ink-900 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-ink-700">
        
          Send another enquiry
        </button>
      }
    </div>);

}
