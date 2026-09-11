import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { nav } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="DS Recruitment Solutions home">
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-xl bg-brand text-sm font-semibold tracking-tight text-brand-foreground"
          >
            DS
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-foreground">DS Recruitment</span>
            <span className="block text-xs text-muted-foreground">Solutions · Malaysia</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-brand-mid"
              activeProps={{ className: "text-brand-mid font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="brandOutline" size="pill">
            <Link to="/jobs">Browse Jobs</Link>
          </Button>
          <Button asChild variant="brand" size="pill">
            <Link to="/" hash="contact">
              Hire Talent
            </Link>
          </Button>
        </div>

        <Button
          variant="brandOutline"
          size="icon"
          className="lg:hidden min-h-11 min-w-11"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-brand-tint"
                activeProps={{ className: "bg-brand-tint text-brand-mid font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="brand" size="pill" className="mt-3 w-full">
              <Link to="/" hash="contact" onClick={() => setOpen(false)}>
                Hire Talent
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
