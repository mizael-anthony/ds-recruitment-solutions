# DS Recruitment Hub

Build a professional, conversion-focused recruitment agency website for DS Recruitment Solutions, a Malaysia-based firm founded in 2021. Create a polished production-ready 5-page responsive site using TypeScript + Tailwind/shadcn as appropriate.

BRAND & STYLE
- Primary #25153d (deep purple), secondary #4b356f, hover #654994.
- Poppins for all headings/body; Adamina serif ONLY for testimonials.
- Pill-shaped buttons (48px radius), white text, medium-purple background.
- Clean white sections alternating with dark-purple hero/footer.
- No watermarks, builder branding, “Powered by” badges, lorem ipsum, or generic stock handshake imagery.
- Use tasteful recruitment/corporate imagery only where it adds value; prefer curated, relevant imagery and descriptive alt text.

SITE STRUCTURE / ROUTES
1. Homepage / — Hero + About + 3 Services + 3 Industries + 2 Testimonials + Contact form.
2. /jobs — Job listings with Apply Now CTAs.
3. /join-us — Freelance recruiter recruitment page with application form.
4. /career-consultation — Career coaching services with transparent pricing and booking CTA.
5. /privacy-policy and /terms-of-service — legal pages; ensure both routes work and never 404.

HOMEPAGE HERO — EXACT CRITICAL COPY
H1: “Malaysia's Trusted Recruitment Partner”
Subheadline: “Connecting top talent with leading companies since 2021. Contingent search, retained recruitment, and end-to-end outsourcing solutions.”
Three CTAs side-by-side: “Hire Talent” | “Find a Job” | “Join as Recruiter”
Do not use generic slogans such as “Unleash Your Brilliance.”

SERVICES H2: “Our Services”
1. Contingent Recruitment — “Pay only when we place. Risk-free hiring for growing teams.”
2. Retained Search — “Dedicated exclusive search for senior and executive roles.”
3. Fully Integrated Services — “End-to-end: sourcing, screening, assessment, onboarding.”
Use action-oriented CTAs, never “Learn More.”

INDUSTRIES H2: “Industries We Serve”
- Recruitment & Executive Search
- BPO & RPO Outsourcing
- Customer Service & Call Centers

SOCIAL PROOF — include exactly these two supplied testimonials, rendered with Adamina serif for quote text:
“DS Recruitment placed our Audit Manager in 3 weeks. Professional and efficient.” — CFO, KL Manufacturing
“They understood our outsourcing needs immediately. Highly recommended.” — HR Director, BPO Firm

TRUST SIGNALS
- 200+ Successful Placements
- 50+ Client Companies
- Founded 2021 in Malaysia
Footer must include LinkedIn link and emails: admin@dsrecruitment-solutions.com and joanne.mok@dsrecruitment-solutions.com.

CONTACT FORM
Visible labels on every field. Fields: Full Name (required), Email (required), Phone, “I'm interested in...” dropdown with Hiring / Finding a Job / Career Coaching / Joining as Recruiter, Message, Submit. Show a clear confirmation/success message after submit. Add accessible validation and focus states.

JOBS PAGE
Create a professional listing layout with realistic clearly-labeled sample vacancies rather than placeholders, each with title, location, employment type, short description, and Apply Now CTA. If no backend is configured, structure the data cleanly for later replacement and make application CTAs usable. Do not invent claims about real open roles beyond the sample/demo nature; make the page easy to update.

JOIN-US PAGE
Recruit freelance recruiters. Explain the opportunity, benefits, expectations, and process. Include a visible labeled application form with useful fields and success confirmation. CTA should be “Apply as Recruiter” or similar outcome-specific action.

CAREER CONSULTATION PAGE
Present career coaching services and transparent pricing (use clearly marked illustrative/example pricing if exact business pricing was not supplied, so it is easy to replace). Include service descriptions, what is included, and a strong “Book a Call” CTA. Do not hide pricing.

LEGAL PAGES
Create complete, professional privacy-policy and terms-of-service content suitable as a website template, with clear notice that legal text should be reviewed for the business’s exact circumstances. No broken routes.

SEO / TECHNICAL REQUIREMENTS
- Unique meta title + meta description per page.
- Exactly ONE H1 per page; correct H1 > H2 > H3 hierarchy.
- Descriptive alt text for every image.
- Schema.org JSON-LD for Organization and EmploymentAgency; JobPosting structured data for actual/sample job cards only where appropriate, clearly using accurate fields.
- Unique OpenGraph tags per page.
- Canonical URLs.
- Clean routes exactly /jobs, /join-us, /career-consultation, /privacy-policy, /terms-of-service; no “-1” suffixes.
- Mobile-first, fully responsive, polished desktop and mobile layouts.
- Performance-conscious: WebP/optimized images, lazy loading below the fold, font-display: swap.
- Accessibility: skip link, visible form labels, keyboard navigation, visible focus rings, appropriate ARIA labels, sufficient contrast, semantic landmarks.
- HTTPS-only external links; no http:// links. LinkedIn link should use HTTPS. Do not create insecure wa.me links.
- No broken pages, no console errors, no placeholder text.

DESIGN DIRECTION
Make it feel like a credible Malaysian recruitment consultancy rather than an AI-generated template. Strong typography, restrained motion, generous spacing, clear hierarchy, trust-focused sections, subtle cards/dividers, and conversion paths for employers, candidates, and recruiters. Keep the three hero CTAs visually distinct but cohesive. Footer should be comprehensive and professional.

IMPORTANT: Build the complete site, not just a landing-page mockup. Verify all routes and forms work in the preview, and avoid duplicate H1s or generic CTA labels.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e7c2ffee-bbe0-446f-8366-8e13ac2844bb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
