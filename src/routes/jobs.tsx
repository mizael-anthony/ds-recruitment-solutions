import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, Briefcase, CalendarDays, MapPin } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { jobs, jobPostingSchema } from "@/data/jobs";
import { site } from "@/data/site";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs in Malaysia | DS Recruitment Solutions" },
      {
        name: "description",
        content:
          "Browse current sample vacancies from DS Recruitment Solutions across audit, finance, HR, recruitment and contact centre roles in Malaysia.",
      },
      { property: "og:title", content: "Jobs in Malaysia | DS Recruitment Solutions" },
      {
        property: "og:description",
        content:
          "Audit, finance, HR, recruitment and customer service vacancies with DS Recruitment Solutions in Kuala Lumpur, Selangor and Penang.",
      },
      { property: "og:url", content: "/jobs" },
    ],
    links: [{ rel: "canonical", href: "/jobs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sample vacancies at DS Recruitment Solutions",
          itemListElement: jobs.map((job, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: jobPostingSchema(job),
          })),
        }),
      },
    ],
  }),
  component: JobsPage,
});

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="Candidates"
        title="Open Roles With DS Recruitment Solutions"
        intro="A snapshot of the mandates our consultants typically run across Malaysia. Apply directly and a consultant will review your profile against both listed and confidential roles."
      >
        <Button asChild variant="brand" size="pillLg">
          <a href={`mailto:${site.emails.general}?subject=Application%20-%20General%20CV%20Submission`}>
            Send Us Your CV
          </a>
        </Button>
        <Button asChild variant="onDark" size="pillLg">
          <Link to="/career-consultation">Get Interview Coaching</Link>
        </Button>
      </PageHero>

      <section className="section-y bg-background" aria-labelledby="listings-heading">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="listings-heading" className="text-3xl font-semibold lg:text-4xl">
                Current Vacancies
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {jobs.length} sample listings shown below to illustrate the roles we recruit for.
                Live vacancies are confirmed with you directly by a consultant before any application
                is submitted to a client.
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-6">
            {jobs.map((job) => (
              <li key={job.id}>
                <article className="rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <span className="inline-flex items-center rounded-[48px] bg-brand-tint px-3 py-1 text-xs font-semibold text-brand-mid">
                        {job.industry}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold">{job.title}</h3>
                      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin aria-hidden="true" className="size-4 text-brand-mid" />
                          <dt className="sr-only">Location</dt>
                          <dd>{job.location}</dd>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase aria-hidden="true" className="size-4 text-brand-mid" />
                          <dt className="sr-only">Employment type</dt>
                          <dd>{job.type}</dd>
                        </div>
                        <div className="flex items-center gap-2">
                          <Banknote aria-hidden="true" className="size-4 text-brand-mid" />
                          <dt className="sr-only">Indicative salary</dt>
                          <dd>{job.salary}</dd>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays aria-hidden="true" className="size-4 text-brand-mid" />
                          <dt className="sr-only">Date posted</dt>
                          <dd>Posted {dateFormat.format(new Date(job.posted))}</dd>
                        </div>
                      </dl>
                      <p className="mt-5 text-sm leading-relaxed text-foreground">{job.summary}</p>
                      <h4 className="mt-6 text-sm font-semibold">What we look for</h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex gap-2">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-mid" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-56 lg:shrink-0">
                      <Button asChild variant="brand" size="pill" className="w-full">
                        <a
                          href={`mailto:${site.emails.general}?subject=${encodeURIComponent(
                            `Apply Now: ${job.title} (${job.location})`,
                          )}&body=${encodeURIComponent(
                            `Hello DS Recruitment Solutions,\n\nI would like to apply for the ${job.title} role in ${job.location}. My CV is attached.\n\nName:\nPhone:\nNotice period:\n\nThank you.`,
                          )}`}
                        >
                          Apply Now
                        </a>
                      </Button>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        Opens an email to our consultants — attach your CV before sending.
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-3xl border border-dashed border-brand-mid/35 bg-brand-tint p-8">
            <h2 className="text-lg font-semibold">Not seeing the right role?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Many of our mandates are confidential and never advertised. Register your interest and a
              consultant will contact you when a suitable role opens.
            </p>
            <Button asChild variant="brand" size="pill" className="mt-6">
              <Link to="/" hash="contact">
                Register Your Interest
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
