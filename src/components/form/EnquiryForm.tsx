'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircleIcon, Loader2Icon, LockIcon } from 'lucide-react';
import { Button } from '../Button';
import { FormField, inputClass } from './FormField';
import { EnquirySuccess } from './EnquirySuccess';
import { useEnquiryForm } from '../../hooks/useEnquiryForm';
import { services } from '../../data/services';

type EnquiryFormProps = {defaultService?: string;};

export function EnquiryForm({ defaultService = '' }: EnquiryFormProps) {
  const { values, errors, status, submitError, update, submit, reset } = useEnquiryForm(defaultService);
  const errorCount = Object.keys(errors).length;

  if (status === 'success') return <EnquirySuccess name={values.name} onReset={reset} />;

  const describe = (key: string) => errors[key as keyof typeof errors] ? `enq-${key}-error` : undefined;

  return (
    <form onSubmit={submit} noValidate className="rounded-xl border border-line bg-white p-6 shadow-soft md:p-10">
      {errorCount > 0 &&
      <div role="alert" className="mb-8 flex gap-3 rounded-lg border border-danger/25 bg-danger/5 p-4 text-sm text-danger">
          <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            Please review {errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`} before
            submitting.
          </p>
        </div>
      }
      {submitError &&
      <div role="alert" className="mb-8 rounded-lg border border-danger/25 bg-danger/5 p-4 text-sm text-danger">
          {submitError}
        </div>
      }
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="enq-name" label="Full name" required error={errors.name}>
          <input
            id="enq-name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={describe('name')}
            className={`${inputClass(errors.name)} h-12`} />
          
        </FormField>
        <FormField id="enq-company" label="Company" hint="Optional">
          <input
            id="enq-company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={`${inputClass()} h-12`} />
          
        </FormField>
        <FormField id="enq-email" label="Work email" required error={errors.email}>
          <input
            id="enq-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={describe('email')}
            className={`${inputClass(errors.email)} h-12`} />
          
        </FormField>
        <FormField id="enq-phone" label="Phone" error={errors.phone} hint="Include country code, e.g. +965">
          <input
            id="enq-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={describe('phone')}
            className={`${inputClass(errors.phone)} h-12 text-start`} />
          
        </FormField>
        <FormField id="enq-service" label="Service of interest" required error={errors.service} className="md:col-span-2">
          <select
            id="enq-service"
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={describe('service')}
            className={`${inputClass(errors.service)} h-12 appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23566173' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"
            }}>
            
            <option value="">Select a service</option>
            {services.map((s) =>
            <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            )}
            <option value="general">General enquiry</option>
          </select>
        </FormField>
        <FormField id="enq-message" label="How can we help?" required error={errors.message} className="md:col-span-2">
          <textarea
            id="enq-message"
            rows={5}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={describe('message')}
            placeholder="Briefly describe your objectives or the decision you are considering."
            className={`${inputClass(errors.message)} resize-y py-3`} />
          
        </FormField>
        <div className="md:col-span-2">
          <label htmlFor="enq-consent" className="flex cursor-pointer items-start gap-3">
            <input
              id="enq-consent"
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update('consent', e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={describe('consent')}
              className={`mt-0.5 h-5 w-5 shrink-0 rounded border accent-ink-900 ${errors.consent ? 'border-danger' : 'border-line'}`} />
            
            <span className="text-sm leading-relaxed text-muted">
              I consent to Sohwaz Holdings processing my information to respond to this enquiry, in line with the{' '}
              <Link href="/privacy" className="font-medium text-ink-900 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.consent &&
          <p id="enq-consent-error" className="mt-2 flex items-center gap-1.5 text-[13px] text-danger">
              <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.consent}
            </p>
          }
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-[13px] text-muted">
          <LockIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          Your enquiry is confidential.
        </p>
        <Button type="submit" variant="dark" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {status === 'submitting' ? 'Sending…' : 'Submit enquiry'}
        </Button>
      </div>
    </form>);

}
