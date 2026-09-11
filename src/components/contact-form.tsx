import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Field, controlClass } from "@/components/form-field";
import { Button } from "@/components/ui/button";

type Errors = { fullName?: string; email?: string; interest?: string };

const interests = ["Hiring", "Finding a Job", "Career Coaching", "Joining as Recruiter"];

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "");

    const next: Errors = {};
    if (!fullName) next.fullName = "Please enter your full name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Please enter a valid email address, e.g. name@company.com.";
    if (!interest) next.interest = "Please choose what you are interested in.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brand-mid/25 bg-brand-tint p-8 text-center"
      >
        <CheckCircle2 aria-hidden="true" className="mx-auto size-9 text-brand-mid" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Thank you — message received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A DS Recruitment consultant will reply within one business day. For urgent enquiries, email{" "}
          <a className="font-medium text-brand-mid underline" href="mailto:admin@dsrecruitment-solutions.com">
            admin@dsrecruitment-solutions.com
          </a>
          .
        </p>
        <Button variant="brandOutline" size="pill" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={controlClass}
            placeholder="Joanne Mok"
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={controlClass}
            placeholder="name@company.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={controlClass}
            placeholder="+60 12 345 6789"
          />
        </Field>
        <Field id="interest" label="I'm interested in..." required error={errors.interest}>
          <select
            id="interest"
            name="interest"
            required
            defaultValue={defaultInterest ?? ""}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className={controlClass}
          >
            <option value="">Please select an option</option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" hint="Tell us about the role, timeline or support you need.">
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-describedby="message-hint"
          className={controlClass}
          placeholder="We are hiring two audit seniors in Kuala Lumpur..."
        />
      </Field>

      <Button type="submit" variant="brand" size="pillLg" className="w-full sm:w-auto">
        Send My Enquiry
      </Button>
    </form>
  );
}
