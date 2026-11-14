import React from "react";
import { ClockIcon, MailIcon } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { EnquiryForm } from "../components/form/EnquiryForm";
import { LinkedInIcon } from "../components/LinkedInIcon";
import { contactDetails } from "../data/navigation";
import { images } from "../data/images";

export function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        lead="Tell us about your objectives. A senior advisor will respond to arrange an initial, confidential conversation."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        image={images.kuwait}
      />

      <section className="section bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main Enquiry Form Column */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">
              Send an enquiry
            </h2>
            <p className="mb-8 mt-3 max-w-xl text-[17px] leading-relaxed text-muted">
              Whether you have a specific mandate in mind or would like to explore options, we welcome your enquiry. Fields marked * are required.
            </p>
            <EnquiryForm />
          </div>

          {/* Contact Details Sidebar */}
          <aside className="space-y-10 lg:col-span-5 lg:pt-14">
            <div>
              <h2 className="font-display text-lg font-bold text-ink-950">
                Contact details
              </h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                <li className="flex items-start gap-4 py-4">
                  <MailIcon
                    className="mt-1 h-5 w-5 text-gold-700"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[13px] text-muted">Primary Advisory Email</p>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="font-medium text-ink-950 hover:underline select-text"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4 py-4">
                  <MailIcon
                    className="mt-1 h-5 w-5 text-gold-700"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[13px] text-muted">Secondary Advisory Email</p>
                    <a
                      href={`mailto:${contactDetails.secondaryEmail}`}
                      className="font-medium text-ink-950 hover:underline select-text"
                    >
                      {contactDetails.secondaryEmail}
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4 py-4">
                  <LinkedInIcon className="h-5 w-5 text-ink-700" />
                  <div>
                    <p className="text-[13px] text-muted">LinkedIn</p>
                    <a
                      href={contactDetails.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-ink-950 hover:underline"
                    >
                      Sohwaz Financial Consultants
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-mist/60 p-7">
              <div className="flex gap-4">
                <ClockIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="font-display font-bold text-ink-950">
                    Business Hours
                  </h3>
                  <dl className="mt-2 space-y-1.5 text-[15px]">
                    {contactDetails.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-4">
                        <dt className="text-muted">{h.days}</dt>
                        <dd className="font-medium text-ink-950">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed text-muted">
              Consultations and advisory sessions are arranged confidentially by appointment.
            </p>
          </aside>
        </div>

        {/* Disclaimer / Legal Notice at the bottom in small fine print */}
        <div className="container-site mt-16 border-t border-line pt-8">
          <p className="text-[12px] leading-relaxed text-muted">
            <span className="font-semibold text-ink-950">Legal Notice & Enquiry Policy: </span>
            All advisory services provided by Sohwaz Financial Consultants constitute strategic guidance only; all ultimate corporate decisions, implementation actions, and compliance rest solely with the Client, carrying no legal or financial recourse to our firm or its advisors. Inbound submissions via this contact platform do not establish a formal engagement. Enquiries that do not receive a written response from Sohwaz Financial Consultants within five (5) business days are automatically deemed declined without liability, and it is understood that the Firm has elected not to pursue the matter.
          </p>
        </div>
      </section>
    </>
  );
}
