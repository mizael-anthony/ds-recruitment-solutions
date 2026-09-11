import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Headphones, Handshake, Target, Workflow } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import heroImage from "@/assets/hero-consultants.jpg";
import aboutImage from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malaysia's Trusted Recruitment Partner | DS Recruitment Solutions" },
      {
        name: "description",
        content:
          "DS Recruitment Solutions connects top talent with leading Malaysian companies since 2021 through contingent search, retained recruitment and full outsourcing.",
      },
      { property: "og:title", content: "Malaysia's Trusted Recruitment Partner | DS Recruitment Solutions" },
      {
        property: "og:description",
        content:
          "Contingent search, retained recruitment and end-to-end outsourcing for employers across Malaysia. 200+ placements since 2021.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Target,
    title: "Contingent Recruitment",
    copy: "Pay only when we place. Risk-free hiring for growing teams.",
    cta: "Start a Contingent Search",
  },
  {
    icon: BadgeCheck,
    title: "Retained Search",
    copy: "Dedicated exclusive search for senior and executive roles.",
    cta: "Discuss a Retained Mandate",
  },
  {
    icon: Workflow,
    title: "Fully Integrated Services",
    copy: "End-to-end: sourcing, screening, assessment, onboarding.",
    cta: "Request an Outsourcing Proposal",
  },
];

const industries = [
  {
    icon: Handshake,
    title: "Recruitment & Executive Search",
    copy: "Specialist and leadership hiring across finance, audit, HR and commercial functions.",
  },
  {
    icon: Building2,
    title: "BPO & RPO Outsourcing",
    copy: "Embedded recruiters and managed hiring programmes for scaling shared services teams.",
  },
  {
    icon: Headphones,
    title: "Customer Service & Call Centers",
    copy: "Volume agent hiring, team leads and workforce planning support for contact centres.",
  },
];

const testimonials = [
  {
    quote: "DS Recruitment placed our Audit Manager in 3 weeks. Professional and efficient.",
    author: "CFO, KL Manufacturing",
  },
  {
    quote: "They understood our outsourcing needs immediately. Highly recommended.",
    author: "HR Director, BPO Firm",
  },
];

function HomePage() {
  return (
    <>
      <section className="brand-surface">
        <div className="container-page grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow text-white/65">Recruitment consultancy · Malaysia</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Malaysia's Trusted Recruitment Partner
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">
              Connecting top talent with leading companies since 2021. Contingent search, retained
              recruitment, and end-to-end outsourcing solutions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="brand" size="pillLg">
                <Link to="/" hash="contact">
                  Hire Talent
                </Link>
              </Button>
              <Button asChild variant="onDark" size="pillLg">
                <Link to="/jobs">Find a Job</Link>
              </Button>
              <Button asChild variant="onDark" size="pillLg">
                <Link to="/join-us">Join as Recruiter</Link>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {site.trust.map((item) => (
                <div key={item.label}>
                  <dt className="text-2xl font-semibold lg:text-3xl">{item.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-white/65 sm:text-sm">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              width={1408}
              height={1104}
              alt="Two recruitment consultants reviewing candidate shortlists in a Kuala Lumpur office overlooking the city skyline"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="about-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={aboutImage}
            width={1200}
            height={912}
            loading="lazy"
            alt="DS Recruitment Solutions consultants discussing a client hiring plan around a meeting table"
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <p className="eyebrow text-brand-mid">About DS Recruitment Solutions</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              A Malaysian recruitment team that hires the way you would
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Founded in 2021 and based in Malaysia, we work as an extension of your hiring team. Every
              search starts with a scoping conversation about the role, the market rate and the
              realistic timeline — then we shortlist only candidates we would be happy to interview
              ourselves.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Consultants who specialise by function, not by headcount target.",
                "Transparent shortlists with market feedback, not CV volume.",
                "Flexible engagement: contingent, retained or fully outsourced.",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm text-foreground">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-mid" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="brand" size="pill" className="mt-9">
              <Link to="/" hash="contact">
                Book a Hiring Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y bg-brand-tint" aria-labelledby="services-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-mid">What we do</p>
            <h2 id="services-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Three engagement models, matched to how urgent and how senior the hire is.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                  <service.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                <Link
                  to="/"
                  hash="contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-mid transition-colors hover:text-brand-hover"
                >
                  {service.cta}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="industries-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-mid">Sector coverage</p>
            <h2 id="industries-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Industries We Serve
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="rounded-3xl border border-border p-8">
                <industry.icon aria-hidden="true" className="size-6 text-brand-mid" />
                <h3 className="mt-5 text-lg font-semibold">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-brand-tint" aria-labelledby="testimonials-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-mid">Client feedback</p>
            <h2 id="testimonials-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure
                key={item.author}
                className="rounded-3xl border border-border bg-card p-8 shadow-card"
              >
                <blockquote className="quote-serif text-xl leading-relaxed text-foreground lg:text-2xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-brand-mid">
                  — {item.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-y bg-background scroll-mt-24" aria-labelledby="contact-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-brand-mid">Get in touch</p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Tell us what you need
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you are hiring, job searching, exploring career coaching or want to recruit with
              us, send a short note and the right consultant will respond within one business day.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p>
                <span className="font-medium">General enquiries:</span>{" "}
                <a className="break-all text-brand-mid underline" href={`mailto:${site.emails.general}`}>
                  {site.emails.general}
                </a>
              </p>
              <p>
                <span className="font-medium">Client partnerships:</span>{" "}
                <a className="break-all text-brand-mid underline" href={`mailto:${site.emails.joanne}`}>
                  {site.emails.joanne}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
