import React from 'react';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  valid?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function inputClass(error?: string, valid?: boolean) {
  const state = error ?
  'border-danger focus:border-danger focus:ring-danger/15' :
  valid ?
  'border-success focus:border-success focus:ring-success/15' :
  'border-line hover:border-ink-600/40 focus:border-ink-700 focus:ring-ink-700/10';
  return `w-full rounded-lg border bg-white px-4 text-[15px] text-ink-950 placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4 ${state}`;
}

export function FormField({ id, label, required, error, hint, valid, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-950">
        {label}
        {required &&
        <span className="ml-0.5 text-danger" aria-hidden="true">
            *
          </span>
        }
      </label>
      {children}
      {error ?
      <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-[13px] text-danger">
          <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p> :
      valid ?
      <p className="mt-2 flex items-center gap-1.5 text-[13px] text-success">
          <CheckCircle2Icon className="h-3.5 w-3.5" aria-hidden="true" />
          Looks good
        </p> :
      hint ?
      <p className="mt-2 text-[13px] text-muted">{hint}</p> :
      null}
    </div>);

}
