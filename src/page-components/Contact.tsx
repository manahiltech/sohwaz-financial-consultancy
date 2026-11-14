import React from "react";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { EnquiryForm } from "../components/form/EnquiryForm";
import { LinkedInIcon } from "../components/LinkedInIcon";
import { contactDetails } from "../data/navigation";
import { images } from "../data/images";

export function Contact() {
  return (
    <>
      <PageBanner
        title="Contact us"
        lead="Tell us about your objectives. A senior advisor will respond to arrange an initial, confidential conversation."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        image={images.kuwait}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink-950">
              Send an enquiry
            </h2>
            <p className="mb-8 mt-3 max-w-xl text-[17px] leading-relaxed text-muted">
              Whether you have a specific mandate in mind or would like to
              explore options, we welcome your enquiry. Fields marked * are
              required.
            </p>
            <EnquiryForm />
          </div>

          <aside className="space-y-10 lg:col-span-5 lg:pt-[120px]">
            <div>
              <h2 className="font-display text-lg font-bold text-ink-950">
                Contact details
              </h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                <li className="flex items-center gap-4 py-4">
                  <MailIcon
                    className="h-5 w-5 text-ink-700"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[13px] text-muted">Email</p>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="font-medium text-ink-950 hover:underline"
                    >
                      {contactDetails.email}
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
                      Sohwaz Holdings
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-mist p-7">
              {/* <div className="flex gap-4">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-ink-700" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h2 className="font-display font-bold text-ink-950">Office address</h2>
                  <address className="mt-2 not-italic leading-relaxed text-muted">
                    {contactDetails.address.map((a) =>
                    <span key={a} className="block">
                        {a}
                      </span>
                    )}
                  </address>
                </div>
              </div> */}
              <div className="mt-6 flex gap-4 border-t border-line pt-6">
                <ClockIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink-700"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h2 className="font-display font-bold text-ink-950">
                    Business days
                  </h2>
                  <dl className="mt-2 space-y-1 text-[15px]">
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
              Meetings are available by appointment.
            </p>
          </aside>
        </div>{" "}
        <div className="container-site mt-16 border-t border-line pt-8">
          <p className="text-[13px] leading-relaxed text-muted">
            <span className="font-semibold text-ink-950">Disclaimer: </span>
            Submitting an enquiry through this website does not create an
            advisory, client or contractual relationship between you and us. We
            do not guarantee that every enquiry will receive a response, and we
            accept no liability or responsibility for any loss, damage or
            inconvenience arising from a delayed response, a lack of response,
            or a submission that is not received. Information shared through
            this form should not be treated as a request for, or receipt of,
            professional advice. Please avoid including sensitive or
            confidential details in your initial enquiry.
          </p>
        </div>
      </section>
    </>
  );
}
