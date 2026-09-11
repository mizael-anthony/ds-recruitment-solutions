import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";

import { site, nav } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="brand-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2 lg:max-w-sm">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-sm font-semibold"
            >
              DS
            </span>
            <span className="text-base font-semibold">DS Recruitment Solutions</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            A Malaysian recruitment consultancy founded in 2021, delivering contingent search,
            retained recruitment and fully integrated hiring support to employers across the region.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-white/75">
            <MapPin aria-hidden="true" className="size-4" /> Kuala Lumpur, Malaysia
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-[48px] border border-white/30 px-4 py-2 text-sm font-medium transition-colors hover:border-white/70 hover:bg-white/10"
          >
            <Linkedin aria-hidden="true" className="size-4" />
            Follow us on LinkedIn
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="text-white/80 transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="text-white/80 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.emails.general}`}
                className="inline-flex items-start gap-2 break-all text-white/80 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {site.emails.general}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.emails.joanne}`}
                className="inline-flex items-start gap-2 break-all text-white/80 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {site.emails.joanne}
              </a>
            </li>
          </ul>
          <dl className="mt-8 space-y-3 text-sm">
            {site.trust.map((t) => (
              <div key={t.label} className="flex items-baseline gap-2">
                <dt className="font-semibold">{t.value}</dt>
                <dd className="text-white/70">{t.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DS Recruitment Solutions. All rights reserved.</p>
          <p>Recruitment services for employers, candidates and freelance recruiters in Malaysia.</p>
        </div>
      </div>
    </footer>
  );
}
