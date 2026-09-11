import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Coins, Clock, GraduationCap, Users } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/page-hero";
import { Field, controlClass } from "@/components/form-field";
import { Button } from "@/components/ui/button";
import recruiterImage from "@/assets/freelance-recruiter.jpg";

export const Route = createFileRoute("/join-us")({
  head: () => ({
    meta: [
      { title: "Become a Freelance Recruiter | DS Recruitment Solutions" },
      {
        name: "description",
        content:
          "Partner with DS Recruitment Solutions as a freelance recruiter in Malaysia: commission-based earnings, live client mandates and consultant support.",
      },
      { property: "og:title", content: "Become a Freelance Recruiter | DS Recruitment Solutions" },
      {
        property: "og:description",
        content:
          "Work flexibly on real client mandates with commission-based earnings and hands-on support from our Malaysian recruitment team.",
      },
      { property: "og:url", content: "/join-us" },
    ],
    links: [{ rel: "canonical", href: "/join-us" }],
  }),
  component: JoinUsPage,
});

const benefits = [
  { icon: Coins, title: "Commission-based earnings", copy: "Transparent split per successful placement, confirmed in writing before you start a mandate." },
  { icon: Clock, title: "Work on your schedule", copy: "Fully remote and flexible. Choose the mandates and volume that fit your week." },
  { icon: Users, title: "Live client mandates", copy: "Access briefed, qualified roles from our Malaysian client base — no cold prospecting required." },
  { icon: GraduationCap, title: "Consultant support", copy: "Onboarding, sourcing playbooks and a named consultant to review your shortlists." },
];

const expectations = [
  "Source and screen candidates against a written client brief.",
  "Submit structured shortlists with availability and salary expectations.",
  "Keep candidates informed throughout the interview process.",
  "Handle all candidate data confidentially and lawfully.",
];

const process = [
  { step: "1", title: "Apply", copy: "Send the short application form below with your recruitment background." },
  { step: "2", title: "Intro call", copy: "A 30-minute call to align on your specialism, capacity and commission terms." },
  { step: "3", title: "Onboarding", copy: "Sign the partner agreement and get access to briefs, templates and tools." },
  { step: "4", title: "First mandate", copy: "Start on a live role with consultant support on your first shortlist." },
];

function JoinUsPage() {
  const [errors, setErrors] = useState<{ name?: string; email?: string; experience?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const experience = String(data.get("experience") ?? "");
    const next: typeof errors = {};
    if (!name) next.name = "Please enter your full name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Please enter a valid email address.";
    if (!experience) next.experience = "Please select your recruitment experience.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Freelance recruiter partnerships"
        title="Recruit With Us as a Freelance Partner"
        intro="Join a Malaysian recruitment consultancy that shares real client mandates, pays transparent commission and supports you on every shortlist."
      >
        <Button asChild variant="brand" size="pillLg">
          <a href="#apply">Apply as Recruiter</a>
        </Button>
      </PageHero>

      <section className="section-y bg-background" aria-labelledby="opportunity-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-brand-mid">The opportunity</p>
            <h2 id="opportunity-heading" className="mt-3 text-3xl font-semibold lg:text-4xl">
              Independent recruiting, with a team behind you
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Freelance recruiters partner with us to deliver briefed roles across audit and finance,
              HR, BPO and contact centre hiring. You own candidate delivery; we handle the client
              relationship, contracts, invoicing and offer management.
            </p>
            <ul className="mt-7 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-mid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={recruiterImage}
            width={1200}
            height={912}
            loading="lazy"
            alt="Freelance recruiter working remotely at a home desk, speaking with a candidate by phone"
            className="w-full rounded-3xl object-cover shadow-card"
          />
        </div>
      </section>

      <section className="section-y bg-brand-tint" aria-labelledby="benefits-heading">
        <div className="container-page">
          <h2 id="benefits-heading" className="text-3xl font-semibold lg:text-4xl">
            What You Get
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <article key={b.title} className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                  <b.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="process-heading">
        <div className="container-page">
          <h2 id="process-heading" className="text-3xl font-semibold lg:text-4xl">
            How the Process Works
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="rounded-3xl border border-border p-7">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand-tint text-sm font-semibold text-brand-mid">
                  {p.step}
                </span>
                <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="section-y scroll-mt-24 bg-brand-tint" aria-labelledby="apply-heading">
        <div className="container-page max-w-3xl">
          <h2 id="apply-heading" className="text-3xl font-semibold lg:text-4xl">
            Recruiter Application
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Takes about two minutes. We reply to every application within two business days.
          </p>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            {submitted ? (
              <div role="status" className="text-center">
                <CheckCircle2 aria-hidden="true" className="mx-auto size-9 text-brand-mid" />
                <h3 className="mt-4 text-lg font-semibold">Application received</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for applying to recruit with DS Recruitment Solutions. We will review your
                  details and email you within two business days to arrange an intro call.
                </p>
                <Button variant="brandOutline" size="pill" className="mt-6" onClick={() => setSubmitted(false)}>
                  Submit another application
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={controlClass}
                    />
                  </Field>
                  <Field id="recruiter-email" label="Email" required error={errors.email}>
                    <input
                      id="recruiter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "recruiter-email-error" : undefined}
                      className={controlClass}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="recruiter-phone" label="Phone">
                    <input
                      id="recruiter-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={controlClass}
                      placeholder="+60 12 345 6789"
                    />
                  </Field>
                  <Field id="experience" label="Recruitment Experience" required error={errors.experience}>
                    <select
                      id="experience"
                      name="experience"
                      required
                      defaultValue=""
                      aria-invalid={Boolean(errors.experience)}
                      aria-describedby={errors.experience ? "experience-error" : undefined}
                      className={controlClass}
                    >
                      <option value="">Please select an option</option>
                      <option value="new">New to recruitment</option>
                      <option value="1-3">1–3 years</option>
                      <option value="4-7">4–7 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="specialism" label="Specialist Area">
                    <input
                      id="specialism"
                      name="specialism"
                      type="text"
                      className={controlClass}
                      placeholder="Finance & audit, contact centre, HR..."
                    />
                  </Field>
                  <Field id="capacity" label="Weekly Availability">
                    <select id="capacity" name="capacity" defaultValue="" className={controlClass}>
                      <option value="">Please select an option</option>
                      <option value="under-10">Under 10 hours</option>
                      <option value="10-20">10–20 hours</option>
                      <option value="20-plus">20+ hours</option>
                    </select>
                  </Field>
                </div>
                <Field
                  id="about"
                  label="Tell Us About Your Recruiting Experience"
                  hint="Roles you have placed, markets you know, and the mandates you would like to work on."
                >
                  <textarea id="about" name="about" rows={5} aria-describedby="about-hint" className={controlClass} />
                </Field>
                <Field id="linkedin" label="LinkedIn Profile URL">
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    className={controlClass}
                    placeholder="https://www.linkedin.com/in/your-profile"
                  />
                </Field>
                <Button type="submit" variant="brand" size="pillLg" className="w-full sm:w-auto">
                  Apply as Recruiter
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
