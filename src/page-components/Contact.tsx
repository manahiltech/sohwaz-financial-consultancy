import React from "react";
import { MailIcon } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { EnquiryForm } from "../components/form/EnquiryForm";
import { contactDetails } from "../data/navigation";

export function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        lead="Tell us about your objectives. A senior advisor will respond to arrange an initial, confidential conversation."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
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

              </ul>
            </div>

            <p className="text-[13px] leading-relaxed text-muted">
              Consultations and advisory sessions are arranged confidentially by appointment.
            </p>
          </aside>
        </div>

      </section>
    </>
  );
}
