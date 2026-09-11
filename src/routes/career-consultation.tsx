import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import coachingImage from "@/assets/career-coaching.jpg";

export const Route = createFileRoute("/career-consultation")({
  head: () => ({
    meta: [
      { title: "Career Consultation & Coaching in Malaysia | DS Recruitment Solutions" },
      {
        name: "description",
        content:
          "CV reviews, interview coaching and career strategy sessions from Malaysian recruiters, with clearly published example pricing and a booking call.",
      },
      { property: "og:title", content: "Career Consultation & Coaching | DS Recruitment Solutions" },
      {
        property: "og:description",
        content:
          "One-to-one career coaching from practising recruiters: CV review, interview preparation and career strategy packages with transparent pricing.",
      },
      { property: "og:url", content: "/career-consultation" },
    ],
    links: [{ rel: "canonical", href: "/career-consultation" }],
  }),
  component: CareerConsultationPage,
});

const packages = [
  {
    name: "CV & Profile Review",
    price: "RM 250",
    meta: "One 45-minute session",
    copy: "A recruiter-led rewrite plan for your CV and LinkedIn profile, based on what Malaysian hiring managers actually shortlist.",
    includes: [
      "45-minute video session",
      "Line-by-line CV feedback document",
      "LinkedIn headline and summary rewrite notes",
      "Written follow-up within 3 working days",
    ],
  },
  {
    name: "Interview Preparation",
    price: "RM 450",
    meta: "Two 60-minute sessions",
    copy: "Structured mock interviews with competency and technical questions used by our clients, plus salary negotiation coaching.",
    includes: [
      "Two 60-minute mock interviews",
      "Role-specific question bank",
      "Answer structuring using STAR",
      "Salary negotiation script",
    ],
    featured: true,
  },
  {
    name: "Career Strategy Programme",
    price: "RM 1,200",
    meta: "Four sessions over 6 weeks",
    copy: "For professionals planning a function change, a step up to leadership, or a return to the Malaysian market.",
    includes: [
      "Four 60-minute coaching sessions",
      "Target company and market mapping",
      "Full CV and LinkedIn overhaul",
      "Interview and negotiation coaching",
      "Email support throughout the programme",
    ],
  },
];

function CareerConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="For candidates"
        title="Career Consultation & Coaching"
        intro="One-to-one coaching from recruiters who screen candidates every day. Clear packages, published pricing, and practical output you can use in your next interview."
      >
        <Button asChild variant="brand" size="pillLg">
          <a href="#book">Book a Call</a>
        </Button>
        <Button asChild variant="onDark" size="pillLg">
          <Link to="/jobs">See Open Roles</Link>
        </Button>
      </PageHero>

      <section className="section-y bg-background" aria-labelledby="approach-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={coachingImage}
            width={1200}
            height={912}
            loading="lazy"
            alt="Career coach reviewing a candidate's CV with them during a one-to-one consultation"
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <p className="eyebrow text-brand-mid">Our approach</p>
            <h2 id="approach-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Coaching grounded in live hiring decisions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every session is delivered by a consultant who works on live mandates in Malaysia. You get
              honest feedback on how your profile reads to a hiring manager, what salary band is
              realistic, and exactly what to change before you apply again.
            </p>
            <ul className="mt-7 space-y-4 text-sm">
              {[
                "Sessions held online, scheduled around working hours (MYT).",
                "Every package includes written notes you keep.",
                "Coaching is independent of any job application with us.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-mid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-brand-tint" aria-labelledby="pricing-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-mid">Transparent pricing</p>
            <h2 id="pricing-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Packages & Pricing
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Prices below are illustrative examples in Malaysian Ringgit for this website template and
              are easy to update — confirm current fees with us before booking. All prices are per
              person and exclude any applicable taxes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex flex-col rounded-3xl border bg-card p-8 shadow-card ${
                  pkg.featured ? "border-brand-mid ring-1 ring-brand-mid/30" : "border-border"
                }`}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-[48px] bg-brand text-brand-foreground px-3 py-1 text-xs font-semibold">
                    Most requested
                  </span>
                )}
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="mt-4 text-3xl font-semibold text-brand-mid">{pkg.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">{pkg.meta}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{pkg.copy}</p>
                <h4 className="mt-7 text-sm font-semibold">What's included</h4>
                <ul className="mt-3 flex-1 space-y-2 text-sm text-muted-foreground">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-mid" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={pkg.featured ? "brand" : "brandOutline"} size="pill" className="mt-8">
                  <a href="#book">Book a Call</a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="section-y scroll-mt-24 bg-background" aria-labelledby="book-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-brand-mid">Book a call</p>
            <h2 id="book-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Request a coaching session
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Send your details and preferred package. We will reply with available times and confirm
              the fee before anything is booked.
            </p>
            <p className="mt-6 text-sm">
              Prefer email?{" "}
              <a className="break-all font-medium text-brand-mid underline" href={`mailto:${site.emails.joanne}`}>
                {site.emails.joanne}
              </a>
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <ContactForm defaultInterest="Career Coaching" />
          </div>
        </div>
      </section>
    </>
  );
}
