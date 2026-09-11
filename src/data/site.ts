export const site = {
  name: "DS Recruitment Solutions",
  founded: "2021",
  location: "Malaysia",
  linkedin: "https://www.linkedin.com/company/ds-recruitment-solutions/",
  emails: {
    general: "admin@dsrecruitment-solutions.com",
    joanne: "joanne.mok@dsrecruitment-solutions.com",
  },
  trust: [
    { value: "200+", label: "Successful Placements" },
    { value: "50+", label: "Client Companies" },
    { value: "2021", label: "Founded in Malaysia" },
  ],
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/jobs", label: "Jobs" },
  { to: "/join-us", label: "Join Us" },
  { to: "/career-consultation", label: "Career Consultation" },
] as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EmploymentAgency"],
  name: site.name,
  foundingDate: "2021",
  url: "/",
  areaServed: "MY",
  email: site.emails.general,
  sameAs: [site.linkedin],
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
  },
  description:
    "Malaysia-based recruitment agency providing contingent search, retained recruitment and fully integrated outsourcing solutions.",
};
