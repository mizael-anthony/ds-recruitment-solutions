export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  industry: string;
  salary: string;
  posted: string;
  summary: string;
  requirements: string[];
};

/**
 * Sample/demo vacancies used to illustrate the listing layout.
 * Replace this array (or swap it for an API/database read) with live roles.
 */
export const jobs: Job[] = [
  {
    id: "audit-manager-kl",
    title: "Audit Manager",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
    industry: "Accounting & Audit",
    salary: "RM 9,000 – RM 12,000 / month",
    posted: "2026-09-01",
    summary:
      "Lead audit engagements for a mid-sized manufacturing group, managing a team of five and reporting directly to the Finance Director.",
    requirements: [
      "6+ years external or internal audit experience",
      "ACCA, CPA or equivalent professional qualification",
      "Experience in manufacturing or FMCG environments",
    ],
  },
  {
    id: "customer-service-team-lead-pj",
    title: "Customer Service Team Lead",
    location: "Petaling Jaya, Selangor",
    type: "Full-time",
    industry: "Customer Service & Call Centers",
    salary: "RM 5,000 – RM 6,500 / month",
    posted: "2026-08-28",
    summary:
      "Supervise a 15-agent inbound support team for a regional e-commerce brand, owning SLA performance and agent coaching.",
    requirements: [
      "3+ years in a contact centre, including 1 year supervising",
      "Strong English and Bahasa Malaysia communication",
      "Comfortable with rotational shift coverage",
    ],
  },
  {
    id: "rpo-recruitment-consultant-kl",
    title: "RPO Recruitment Consultant",
    location: "Kuala Lumpur, Malaysia (Hybrid)",
    type: "Full-time",
    industry: "BPO & RPO Outsourcing",
    salary: "RM 4,500 – RM 7,000 / month + commission",
    posted: "2026-08-25",
    summary:
      "Deliver embedded hiring for an enterprise client, running end-to-end recruitment across volume and specialist roles.",
    requirements: [
      "2+ years agency or in-house recruitment experience",
      "Confident stakeholder management with hiring managers",
      "Familiarity with ATS platforms and sourcing tools",
    ],
  },
  {
    id: "finance-business-partner-penang",
    title: "Finance Business Partner",
    location: "Bayan Lepas, Penang",
    type: "Full-time",
    industry: "Finance & Accounting",
    salary: "RM 10,000 – RM 13,000 / month",
    posted: "2026-08-20",
    summary:
      "Partner with plant operations leadership on budgeting, cost analysis and capital investment cases for a semiconductor manufacturer.",
    requirements: [
      "7+ years FP&A or commercial finance experience",
      "Manufacturing costing exposure",
      "Advanced Excel plus ERP reporting (SAP preferred)",
    ],
  },
  {
    id: "hr-operations-executive-kl",
    title: "HR Operations Executive",
    location: "Bangsar South, Kuala Lumpur",
    type: "Contract",
    industry: "Human Resources",
    salary: "RM 4,000 – RM 5,200 / month",
    posted: "2026-08-15",
    summary:
      "12-month contract supporting payroll input, onboarding administration and employee records for a shared services team.",
    requirements: [
      "2+ years HR administration or payroll support",
      "Knowledge of Malaysian Employment Act basics",
      "High attention to detail with confidential data",
    ],
  },
  {
    id: "executive-search-associate-kl",
    title: "Executive Search Associate",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
    industry: "Recruitment & Executive Search",
    salary: "RM 6,000 – RM 8,500 / month + bonus",
    posted: "2026-08-10",
    summary:
      "Support retained search mandates through market mapping, candidate research and structured competency interviews.",
    requirements: [
      "3+ years research or search delivery experience",
      "Strong written candidate reporting skills",
      "Interest in senior and C-suite market coverage",
    ],
  },
];

export const jobPostingSchema = (job: Job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.summary,
  datePosted: job.posted,
  employmentType: job.type === "Full-time" ? "FULL_TIME" : job.type === "Contract" ? "CONTRACTOR" : "PART_TIME",
  industry: job.industry,
  hiringOrganization: {
    "@type": "Organization",
    name: "DS Recruitment Solutions",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: job.location,
      addressCountry: "MY",
    },
  },
});
