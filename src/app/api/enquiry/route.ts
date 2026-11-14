import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getService } from '../../../data/services';

type EnquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatServiceName(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = await request.json() as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = payload.name?.trim() ?? '';
  const company = payload.company?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const service = payload.service?.trim() ?? '';
  const message = payload.message?.trim() ?? '';
  const serviceTitle = getService(service)?.title ?? (service === 'general' ? 'General Enquiry' : formatServiceName(service));

  if (
    !name ||
    !emailPattern.test(email) ||
    (phone && !/^[+\d\s()-]{7,}$/.test(phone)) ||
    !service ||
    message.length < 20 ||
    payload.consent !== true
  ) {
    return NextResponse.json({ error: 'Please provide valid enquiry details.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_RECIPIENT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error('Resend enquiry configuration is incomplete.');
    return NextResponse.json({ error: 'Enquiry service is not configured.' }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || 'Not provided');
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeServiceTitle = escapeHtml(serviceTitle);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  const result = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: [
      'New website enquiry',
      '',
      `Name: ${name}`,
      `Company: ${company || 'Not provided'}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Service: ${serviceTitle}`,
      '',
      'Message:',
      message,
      '',
      'Consent: Confirmed via the website enquiry form',
    ].join('\n'),
    html: `
      <div style="background:#f4f6f9;padding:32px 16px;font-family:Arial,sans-serif;color:#1e2633;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e3e7ee;border-radius:12px;overflow:hidden;">
          <div style="background:#0a1426;padding:24px 28px;color:#ffffff;">
            <div style="font-size:20px;font-weight:700;letter-spacing:.04em;">SOHWAZ</div>
            <div style="margin-top:4px;font-size:12px;color:#b9c1cf;text-transform:uppercase;letter-spacing:.16em;">New Website Enquiry</div>
          </div>
          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:10px 0;color:#566173;width:30%;">Name</td><td style="padding:10px 0;font-weight:600;">${safeName}</td></tr>
              <tr><td style="padding:10px 0;color:#566173;border-top:1px solid #e3e7ee;">Company</td><td style="padding:10px 0;border-top:1px solid #e3e7ee;">${safeCompany}</td></tr>
              <tr><td style="padding:10px 0;color:#566173;border-top:1px solid #e3e7ee;">Email</td><td style="padding:10px 0;border-top:1px solid #e3e7ee;"><a href="mailto:${safeEmail}" style="color:#0f1e38;">${safeEmail}</a></td></tr>
              <tr><td style="padding:10px 0;color:#566173;border-top:1px solid #e3e7ee;">Phone</td><td style="padding:10px 0;border-top:1px solid #e3e7ee;">${safePhone}</td></tr>
              <tr><td style="padding:10px 0;color:#566173;border-top:1px solid #e3e7ee;">Service</td><td style="padding:10px 0;border-top:1px solid #e3e7ee;font-weight:600;">${safeServiceTitle}</td></tr>
            </table>
            <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e3e7ee;">
              <div style="font-size:13px;font-weight:700;color:#0a1426;">Message</div>
              <p style="margin:10px 0 0;white-space:normal;line-height:1.6;">${safeMessage}</p>
            </div>
            <p style="margin:24px 0 0;font-size:12px;color:#566173;">Consent confirmed via the website enquiry form.</p>
          </div>
        </div>
      </div>
    `,
  });

  if (result.error) {
    console.error('Resend failed to send enquiry:', result.error);
    return NextResponse.json({ error: 'Unable to send your enquiry right now.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
