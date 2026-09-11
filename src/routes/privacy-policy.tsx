import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | DS Recruitment Solutions" },
      {
        name: "description",
        content:
          "How DS Recruitment Solutions collects, uses, stores and shares candidate and client personal data, and how you can exercise your data rights.",
      },
      { property: "og:title", content: "Privacy Policy | DS Recruitment Solutions" },
      {
        property: "og:description",
        content:
          "Our privacy commitments covering candidate CVs, client contact data, retention periods and your rights under Malaysian data protection law.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    heading: "1. Who we are",
    body: [
      `DS Recruitment Solutions ("we", "us", "our") is a recruitment consultancy founded in 2021 and operating from Malaysia. We provide contingent recruitment, retained search, outsourced hiring support and career consultation services.`,
      `For any privacy question or request, contact us at ${site.emails.general}.`,
    ],
  },
  {
    heading: "2. Personal data we collect",
    list: [
      "Identity and contact details: name, email address, telephone number and location.",
      "Candidate information: CV or résumé, employment history, education, qualifications, references, salary expectations, notice period and work eligibility.",
      "Client information: business contact details, hiring requirements and correspondence.",
      "Website usage data: pages viewed and general technical information such as browser type, used to keep the site secure and reliable.",
      "Any additional information you choose to include in a form, email or coaching session.",
    ],
  },
  {
    heading: "3. How we use your data",
    list: [
      "To assess your suitability for roles and to present your profile to relevant clients.",
      "To fulfil recruitment mandates and provide agreed services to client organisations.",
      "To deliver career consultation and coaching services you have requested.",
      "To communicate with you about applications, vacancies, mandates and bookings.",
      "To meet legal, regulatory, accounting and record-keeping obligations.",
    ],
  },
  {
    heading: "4. Legal basis and consent",
    body: [
      "We process personal data where you have given consent, where processing is necessary to perform a contract or take steps at your request, where we have a legitimate interest in operating a recruitment business, or where processing is required by law.",
      "Where consent is the basis for processing, you may withdraw it at any time by contacting us. Withdrawal does not affect processing carried out before the withdrawal.",
    ],
  },
  {
    heading: "5. Sharing your data",
    body: [
      "We share candidate profiles with client organisations only for roles you have discussed or applied for. We do not sell personal data.",
      "We may share data with service providers that support our operations (for example email, document storage or scheduling tools), with professional advisers, or where disclosure is required by law or a competent authority.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "We keep candidate data for as long as it is relevant to your job search and our services, and thereafter for the period required by applicable law or legitimate business need. You may ask us to delete your data at any time and we will do so unless we are legally required to retain it.",
    ],
  },
  {
    heading: "7. Security",
    body: [
      "We apply reasonable organisational and technical measures to protect personal data against loss, misuse and unauthorised access. Access to candidate records is limited to consultants who need it to deliver our services. No online transmission or storage method can be guaranteed to be entirely secure.",
    ],
  },
  {
    heading: "8. Your rights",
    list: [
      "Request access to the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your data, subject to legal retention requirements.",
      "Limit or object to certain uses of your data, including withdrawing consent.",
      "Ask questions about how your data has been shared with clients.",
    ],
  },
  {
    heading: "9. Cookies and analytics",
    body: [
      "This website uses only the cookies and storage necessary for the site to function. If we introduce analytics or marketing cookies in the future, we will update this policy and, where required, request your consent.",
    ],
  },
  {
    heading: "10. International transfers",
    body: [
      "Some of our service providers may store data outside Malaysia. Where that happens, we take reasonable steps to ensure your data continues to be protected to a standard consistent with this policy.",
    ],
  },
  {
    heading: "11. Changes to this policy",
    body: [
      "We may update this policy from time to time to reflect changes in our services or legal obligations. The revised version applies from the date it is published on this page.",
    ],
  },
  {
    heading: "12. Contact us",
    body: [
      `Questions, requests or complaints about this policy can be sent to ${site.emails.general} or ${site.emails.joanne}. We aim to respond within 14 business days.`,
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we handle personal data belonging to candidates, clients, freelance recruiters and website visitors."
      />

      <section className="section-y bg-background">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border border-brand-mid/30 bg-brand-tint p-6 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-sm font-semibold text-foreground">Important notice</h2>
            <p className="mt-2">
              This policy is provided as a professional website template. It is not legal advice and
              should be reviewed by a qualified legal adviser against the exact circumstances,
              jurisdictions and data practices of the business before publication.
            </p>
            <p className="mt-2">Last updated: September 2026.</p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-mid" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
