import { useState } from 'react';
import type { FormEvent } from 'react';

export type EnquiryValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;
export type EnquiryStatus = 'idle' | 'submitting' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!v.name.trim()) errors.name = 'Please enter your full name.';
  if (!v.email.trim()) errors.email = 'Please enter your email address.';else
  if (!emailPattern.test(v.email)) errors.email = 'Please enter a valid email address.';
  if (v.phone && !/^[+\d\s()-]{7,}$/.test(v.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!v.service) errors.service = 'Please select a service of interest.';
  if (v.message.trim().length < 20) errors.message = 'Please share a little more detail (at least 20 characters).';
  if (!v.consent) errors.consent = 'Please confirm consent so we can respond to your enquiry.';
  return errors;
}

export function useEnquiryForm(defaultService = '') {
  const initial: EnquiryValues = {
    name: '',
    company: '',
    email: '',
    phone: '',
    service: defaultService,
    message: '',
    consent: false
  };
  const [values, setValues] = useState<EnquiryValues>(initial);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<EnquiryStatus>('idle');
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof EnquiryValues,>(key: K, value: EnquiryValues[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitted) setErrors(validateEnquiry(next));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`enq-${first}`)?.focus();
      return;
    }
    setStatus('submitting');
    setSubmitError('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json() as {error?: string};

      if (!response.ok) {
        setSubmitError(result.error ?? 'Unable to send your enquiry right now.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch (error) {
      console.error('Enquiry submission failed:', error);
      setSubmitError('Unable to send your enquiry right now. Please try again.');
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setSubmitted(false);
    setStatus('idle');
    setSubmitError('');
  };

  return { values, errors, status, submitError, update, submit, reset };
}
