"use client";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";

type Case = {
  title: string;
  industry: string;
  summary: string;
  impact: string[];
  stack: string[];
  href?: string;
};

const cases: Case[] = [
  {
    title: "Retail: Executive BI & Forecasting",
    industry: "Retail & Ecommerce",
    summary:
      "Unified executive dashboard with sales, inventory, and forecasting. Reduced report latency and enabled self-serve analytics.",
    impact: ["Latency ↓ 60%", "Forecast MAPE ↓ 18%", "Adoption ↑"],
    stack: ["Snowflake", "dbt", "Power BI", "Python"],
  },
  {
    title: "FinTech: Customer LTV & Churn",
    industry: "Financial Services",
    summary:
      "Built propensity and churn models with LTV attribution. Enabled targeted retention playbooks and ROAS optimization.",
    impact: ["Retention ↑ 12%", "+18% ROAS", "Cohort CLV ↑"],
    stack: ["BigQuery", "Vertex AI", "dbt ML", "Looker"],
  },
  {
    title: "Healthcare: Data Governance & Quality",
    industry: "Healthcare",
    summary:
      "Established governance, DQ rules, and lineage with KPI contracts. Increased trust and reduced compliance risk.",
    impact: ["Data Accuracy 99.9%", "Time-to-Insight ↓ 45%"],
    stack: ["Catalog", "Lineage", "dbt Docs", "Snowflake"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Case Studies"
          subtitle="Enterprise-grade outcomes across strategy, engineering, BI, and ML."
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <article key={c.title} className="card rounded-2xl p-6 hover:shadow-glow transition-shadow">
              <div className="text-xs text-foreground/60 mb-2">{c.industry}</div>
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-foreground/70 mb-4">{c.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {c.stack.map((s) => (
                  <span key={s} className="rounded-md px-2 py-1 text-xs border border-[var(--divider)] text-foreground/70">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {c.impact.map((i) => (
                  <span key={i} className="rounded-md px-2 py-1 text-xs bg-[var(--surface-muted)] text-foreground/80 border border-[var(--divider)]">
                    {i}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href={c.href ?? "/contact"} className="rounded-xl px-4 py-2 bg-secondary text-white font-medium shadow-[0_0_24px_rgba(139,92,246,0.25)]">
                  Discuss This Outcome
                </Link>
                <Link href="/services" className="rounded-xl px-4 py-2 border border-[var(--divider)] text-foreground">
                  View Related Services
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to see a tailored demo?</h3>
          <p className="text-foreground/70 mb-6">We’ll mock up your KPIs, stack, and sample data in one week.</p>
          <Link href="/contact" className="rounded-xl px-5 py-3 bg-secondary text-white font-medium shadow-[0_0_24px_rgba(139,92,246,0.25)]">
            Request Sample Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}