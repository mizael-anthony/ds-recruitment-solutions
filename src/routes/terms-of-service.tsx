import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | DS Recruitment Solutions" },
      {
        name: "description",
        content:
          "The terms governing use of the DS Recruitment Solutions website and our recruitment, outsourcing and career consultation services in Malaysia.",
      },
      { property: "og:title", content: "Terms of Service | DS Recruitment Solutions" },
      {
        property: "og:description",
        content:
          "Website terms, service scope, candidate and client responsibilities, fees, liability and governing law for DS Recruitment Solutions.",
      },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "1. Acceptance of these terms",
    body: [
      "By accessing this website or engaging DS Recruitment Solutions for recruitment, outsourcing or career consultation services, you agree to these terms. If you do not agree, please do not use the website or our services.",
    ],
  },
  {
    heading: "2. Our services",
    list: [
      "Contingent recruitment, where a placement fee becomes payable only when a candidate we introduce is engaged.",
      "Retained search, where an exclusive senior or executive mandate is delivered against an agreed fee schedule.",
      "Fully integrated and outsourced recruitment support covering sourcing, screening, assessment and onboarding.",
      "Career consultation and coaching services for individual candidates.",
    ],
    body: [
      "The specific scope, fees, timelines and guarantees for any engagement are set out in a separate written agreement or proposal, which takes precedence over these terms in the event of conflict.",
    ],
  },
  {
    heading: "3. Website content and job listings",
    body: [
      "Vacancies shown on this website may include sample or illustrative listings used to demonstrate the roles we recruit for. Availability, salary ranges and requirements are indicative and may change without notice. Nothing on this website constitutes an offer of employment.",
    ],
  },
  {
    heading: "4. Candidate responsibilities",
    list: [
      "Provide accurate, complete and current information in your CV, application and any interview.",
      "Confirm your legal right to work in the relevant jurisdiction.",
      "Inform us promptly of changes to your availability, notice period or applications in progress.",
      "Not misrepresent qualifications, employment history or references.",
    ],
  },
  {
    heading: "5. Client responsibilities",
    list: [
      "Provide accurate role briefs, salary bands and interview arrangements.",
      "Treat candidate information confidentially and use it only to assess the introduced candidate.",
      "Notify us promptly of any offer, engagement or onward introduction of a candidate we have presented.",
    ],
  },
  {
    heading: "6. Fees and payment",
    body: [
      "Recruitment fees, coaching fees, invoicing terms, replacement or rebate arrangements and any taxes are confirmed in writing before an engagement begins. Prices published on this website, including career consultation pricing, are illustrative examples and must be confirmed with us before booking.",
    ],
  },
  {
    heading: "7. Intellectual property",
    body: [
      "All text, layout, graphics and other material on this website are owned by or licensed to DS Recruitment Solutions and may not be copied, republished or used commercially without written permission.",
    ],
  },
  {
    heading: "8. Acceptable use",
    list: [
      "Do not submit false, misleading or unlawful information through any form on this website.",
      "Do not attempt to gain unauthorised access to the website or any connected system.",
      "Do not use automated tools to scrape, copy or harvest content or contact details.",
    ],
  },
  {
    heading: "9. Third-party links",
    body: [
      "This website may link to third-party sites such as professional networks. We do not control and are not responsible for the content, availability or privacy practices of those sites.",
    ],
  },
  {
    heading: "10. Disclaimers and limitation of liability",
    body: [
      "While we take care to deliver our services professionally, we do not guarantee any specific hiring outcome, job offer, interview, salary result or coaching result.",
      "To the fullest extent permitted by law, DS Recruitment Solutions is not liable for indirect, incidental or consequential losses arising from use of this website or our services. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "11. Termination",
    body: [
      "We may suspend or withdraw access to this website, or decline to provide services, where these terms are breached or where we reasonably consider it necessary to protect candidates, clients or our business.",
    ],
  },
  {
    heading: "12. Governing law",
    body: [
      "These terms are governed by the laws of Malaysia, and disputes are subject to the exclusive jurisdiction of the Malaysian courts, unless a separate signed engagement agreement states otherwise.",
    ],
  },
  {
    heading: "13. Contact",
    body: [
      `Questions about these terms can be sent to ${site.emails.general} or ${site.emails.joanne}.`,
    ],
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        intro="The terms that apply to this website and to our recruitment, outsourcing and career consultation services."
      />

      <section className="section-y bg-background">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border border-brand-mid/30 bg-brand-tint p-6 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-sm font-semibold text-foreground">Important notice</h2>
            <p className="mt-2">
              These terms are provided as a professional website template and are not legal advice. Have
              them reviewed by a qualified legal adviser against the business's exact services,
              contracts and jurisdictions before publication.
            </p>
            <p className="mt-2">Last updated: September 2026.</p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
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
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
