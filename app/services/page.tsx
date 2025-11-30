import { ShieldCheck, Cloud, BarChart3, Cpu } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";

export default function ServicesPage() {
  const pillars = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Data Strategy & Governance",
      value:
        "Roadmaps, data product strategy, governance, quality, security, spend optimization.",
      scope: [
        "Data product roadmap",
        "Governance & quality (DQ rules)",
        "Access, security & compliance",
        "Cost controls & FinOps",
      ],
      tooling: ["KPI Contracts", "Catalog", "Lineage", "dbt Docs"],
      outcomes: ["Time-to-Insight ↓ 45%", "Data Accuracy 99.9%"],
      cta: { href: "/contact", label: "Request Sample Dashboard" },
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Data Engineering & Cloud",
      value:
        "Warehouses/lakehouses (Snowflake, BigQuery), ELT (Fivetran/dbt), real-time pipelines.",
      scope: [
        "Ingestion (Fivetran)",
        "Transform (dbt)",
        "Lakehouse architecture",
        "Streaming & CDC",
      ],
      tooling: ["Snowflake", "BigQuery", "Redshift", "Fivetran", "dbt"],
      outcomes: ["Pipeline Uptime 99.95%", "Build Time ↓ 40%"],
      cta: { href: "/case-studies", label: "See Architecture Diagram" },
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence Dashboards",
      value:
        "Executive dashboards, KPI architecture, self-serve, embedded analytics.",
      scope: [
        "Executive KPI design",
        "Semantic layer",
        "Self-serve BI",
        "Embedded analytics",
      ],
      tooling: ["Power BI", "Looker", "Tableau", "Mode"],
      outcomes: ["Adoption ↑", "Report Latency ↓"],
      cta: { href: "/contact", label: "Request Sample Dashboard" },
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Machine Learning & Forecasting",
      value:
        "Forecasting, churn/propensity, LTV, personalization, marketing mix modeling.",
      scope: [
        "Propensity & churn",
        "LTV & attribution",
        "Recommendations",
        "Forecasting",
      ],
      tooling: ["Python", "dbt ML", "Vertex AI", "SageMaker"],
      outcomes: ["+18% ROAS", "+12% Retention"],
      cta: { href: "/case-studies", label: "See Case Studies" },
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services"
          subtitle="Strategy engineering, BI dashboards, and ML — delivered with measurable ROI."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card rounded-2xl p-6 hover:shadow-glow transition-shadow"
            >
              <div className="text-primary mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-foreground/70 mb-4">{p.value}</p>
              <ul className="space-y-1 text-foreground/60 mb-4">
                {p.scope.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tooling.map((t) => (
                  <span
                    key={t}
                    className="rounded-md px-2 py-1 text-xs border border-[var(--divider)] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.outcomes.map((o) => (
                  <span
                    key={o}
                    className="rounded-md px-2 py-1 text-xs bg-[var(--surface-muted)] text-foreground/80 border border-[var(--divider)]"
                  >
                    {o}
                  </span>
                ))}
              </div>
              <Link
                href={p.cta.href}
                className="rounded-xl px-4 py-2 bg-primary text-[hsl(var(--primary-foreground))] font-medium shadow-glow inline-block"
              >
                {p.cta.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust / Tooling strip */}
        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 text-xs text-foreground/60">
            {["AWS", "Azure", "GCP", "Snowflake", "BigQuery", "dbt"].map(
              (p) => (
                <div
                  key={p}
                  className="border border-[var(--divider)] rounded-md px-3 py-2 text-center"
                >
                  {p}
                </div>
              )
            )}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Get a 7-Day Data Health Check
          </h3>
          <p className="text-foreground/70 mb-6">
            Identify quick wins across governance, pipelines, and BI. Actionable
            in one week.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 bg-primary text-[hsl(var(--primary-foreground))] font-medium shadow-glow"
            >
              Book a Data Audit
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl px-5 py-3 border border-[var(--divider)] text-foreground"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
