"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Bot,
  BarChart3,
  Cpu,
  Sparkles,
  ShieldCheck,
  Workflow,
  LineChart,
  Terminal,
  Stars,
  BadgeCheck,
  Layers,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Category = "All" | "Data" | "BI" | "AI" | "Ops" | "Strategy";

type Service = {
  id: string;
  category: Category;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  who: string;
  bullets: string[];
  chips: string[];
  metricLabel: string;
  metricValue: string;
  cta: { label: string; href: string };
  accent: {
    ring: string;
    iconBg: string;
    glow: string;
    bar: string;
  };
  featured?: boolean;
};

function ProductPreview() {
  return (
    <div className="relative">
      {/* floating glow */}
      <div className="absolute -inset-8 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(2,132,199,0.22),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.20),transparent_55%)] blur-2xl" />

      <div className="rounded-[28px] border bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(2,6,23,0.35)] overflow-hidden">
        <div className="flex items-center gap-2 border-b bg-white/60 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="ml-2 text-xs text-slate-600">
            CodePlaced • Audit Snapshot
          </div>
          <Badge className="ml-auto rounded-full bg-slate-900 text-white hover:bg-slate-900">
            Live Preview
          </Badge>
        </div>

        <div className="p-6">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { k: "Data Quality", v: "86/100" },
              { k: "Metric Consistency", v: "92/100" },
              { k: "AI Readiness", v: "78/100" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border bg-white p-4 shadow-sm"
              >
                <div className="text-xs text-slate-500">{x.k}</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  {x.v}
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[78%] rounded-full bg-primary/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">Top Risk</div>
                <Badge
                  variant="secondary"
                  className="rounded-full bg-amber-100 text-amber-700"
                >
                  Medium
                </Badge>
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900">
                Marketing spend attribution drifting
              </div>
              <div className="mt-2 text-xs text-slate-600">
                Fix: metric contract + semantic layer + QA checks.
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">Ask your data</div>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-2 space-y-2 text-xs">
                <div className="w-[88%] rounded-xl border bg-white px-3 py-2 text-slate-700">
                  “Why did profit drop last week?”
                </div>
                <div className="ml-auto w-[92%] rounded-xl bg-primary/10 px-3 py-2 text-slate-900">
                  Returns ↑ 6% + ad spend ↑ 18%. Want channel breakdown?
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Permissions", "Audit logs", "Guardrails"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border bg-white px-2 py-1 text-[11px] text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-500">30-day roadmap</div>
              <Terminal className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Fix pipelines",
                "Define KPIs",
                "Ship dashboards",
                "Add AI layer",
              ].map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-full bg-slate-100 text-slate-700"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceTile({ s }: { s: Service }) {
  return (
    <Card
      id={s.id}
      className={[
        "group relative h-full overflow-hidden rounded-[22px] border bg-white/70 backdrop-blur-xl shadow-sm transition-all",
        "hover:-translate-y-1 hover:shadow-[0_25px_70px_-45px_rgba(2,6,23,0.45)]",
        s.featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      {/* top glow */}
      <div
        className={`pointer-events-none absolute -top-28 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full ${s.accent.glow} blur-3xl opacity-70`}
      />

      <CardHeader className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className={`rounded-2xl border p-3 shadow-sm ${s.accent.iconBg} ${s.accent.ring}`}
            >
              {s.icon}
            </div>
            <div>
              <CardTitle className="text-lg md:text-xl font-bold text-slate-900">
                {s.title}
              </CardTitle>
              <p className="mt-1 text-sm text-slate-600">{s.subtitle}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-slate-900 text-white hover:bg-slate-900">
                  {s.who}
                </Badge>
                {s.chips.slice(0, 2).map((c) => (
                  <Badge
                    key={c}
                    variant="secondary"
                    className="rounded-full bg-slate-100 text-slate-700"
                  >
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <ArrowRight className="mt-2 h-5 w-5 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-slate-500" />
        </div>
      </CardHeader>

      <CardContent className="relative px-6 pb-4">
        <div className="space-y-2">
          {s.bullets.map((b) => (
            <div
              key={b}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* outcome bar */}
        <div className="mt-5 rounded-2xl border bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500">{s.metricLabel}</div>
            <div className="text-sm font-semibold text-slate-900">
              {s.metricValue}
            </div>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
            <div className={`h-2 rounded-full ${s.accent.bar} w-[78%]`} />
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative flex items-center justify-between gap-3 border-t bg-white/40 px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span>Security-first • Docs & handoff included</span>
        </div>

        <Button asChild className="rounded-xl">
          <Link href={s.cta.href}>
            {s.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState<Category>("All");

  const services: Service[] = useMemo(
    () => [
      {
        id: "analytics-reporting",
        category: "BI",
        icon: <BarChart3 className="h-6 w-6 text-slate-900" />,
        title: "Data Analytics & Reporting",
        subtitle: "Reliable reporting that replaces manual spreadsheets.",
        who: "Ops & Growth teams",
        bullets: [
          "Automated weekly/monthly reporting (no Excel fire drills)",
          "Custom KPI definitions + metric contracts",
          "Stakeholder-ready reports with clear ownership",
        ],
        chips: ["Fast setup", "Trusted metrics"],
        metricLabel: "Time-to-insight",
        metricValue: "↓ 40–60%",
        cta: {
          label: "Get Better Reports",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        featured: true,
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(2,132,199,0.24),transparent_60%)]",
          bar: "bg-primary/80",
        },
      },
      {
        id: "bi-dashboards",
        category: "BI",
        icon: <LineChart className="h-6 w-6 text-slate-900" />,
        title: "Executive Dashboards & Insights",
        subtitle: "Dashboards your team actually trusts and uses.",
        who: "Founders & leaders",
        bullets: [
          "Exec scorecards + operational drilldowns",
          "Performance tuning for fast dashboards",
          "Self-serve layers for business users",
        ],
        chips: ["Single source of truth", "Adoption ↑"],
        metricLabel: "Dashboard adoption",
        metricValue: "↑ 2–3x",
        cta: {
          label: "See Dashboard Examples",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.22),transparent_60%)]",
          bar: "bg-emerald-400",
        },
      },
      {
        id: "data-engineering",
        category: "Data",
        icon: <Database className="h-6 w-6 text-slate-900" />,
        title: "Data Engineering & Pipelines",
        subtitle: "Production-grade pipelines with observability built-in.",
        who: "Data teams",
        bullets: [
          "ETL/ELT pipelines with retries + monitoring",
          "Warehouse modeling (BigQuery/Snowflake)",
          "Cost + performance optimization",
        ],
        chips: ["Reliable", "Scalable"],
        metricLabel: "Pipeline reliability target",
        metricValue: "99.9%",
        cta: {
          label: "Fix My Pipelines",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.22),transparent_60%)]",
          bar: "bg-sky-400",
        },
      },
      {
        id: "data-cleaning",
        category: "Data",
        icon: <Layers className="h-6 w-6 text-slate-900" />,
        title: "Data Cleaning & Automation",
        subtitle: "Clean, consistent data with fewer human errors.",
        who: "Operations",
        bullets: [
          "Automated cleanup + standardization rules",
          "Schema & transformation best practices",
          "Workflow automation for repetitive tasks",
        ],
        chips: ["High quality", "Automated"],
        metricLabel: "Manual errors",
        metricValue: "↓ 30–50%",
        cta: {
          label: "Clean My Data",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.22),transparent_60%)]",
          bar: "bg-violet-400",
        },
      },
      {
        id: "ai-ml",
        category: "AI",
        icon: <Bot className="h-6 w-6 text-slate-900" />,
        title: "AI Copilots (RAG + Agents)",
        subtitle: "Governed AI that answers from your real data + docs.",
        who: "Support & analytics",
        bullets: [
          "RAG knowledge bot with permissions + audit logs",
          "Analyst agent: Q&A → charts + explanation",
          "Tool integrations for workflow automation",
        ],
        chips: ["Guardrails", "Shipped pilots"],
        metricLabel: "Support load",
        metricValue: "↓ 20–60%",
        cta: {
          label: "Explore AI Pilot",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.24),transparent_60%)]",
          bar: "bg-cyan-400",
        },
      },
      {
        id: "predictive-analytics",
        category: "AI",
        icon: <Stars className="h-6 w-6 text-slate-900" />,
        title: "Predictive Analytics & Forecasting",
        subtitle: "Forecast demand, churn, and growth with explainability.",
        who: "RevOps & finance",
        bullets: [
          "Demand forecasting + inventory planning",
          "Churn prediction + LTV modeling",
          "Scenario planning with drivers analysis",
        ],
        chips: ["Explainable", "Measurable"],
        metricLabel: "Forecast accuracy",
        metricValue: "↑",
        cta: {
          label: "Start Forecasting",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.22),transparent_60%)]",
          bar: "bg-green-400",
        },
      },
      {
        id: "process-optimization",
        category: "Ops",
        icon: <Zap className="h-6 w-6 text-slate-900" />,
        title: "AI-powered Process Optimization",
        subtitle: "Automate workflows and remove bottlenecks.",
        who: "Ops leaders",
        bullets: [
          "Process mapping + bottleneck detection",
          "Automation bots for repetitive tasks",
          "Continuous improvement tracking",
        ],
        chips: ["Efficient", "Cost-saving"],
        metricLabel: "Cycle time",
        metricValue: "↓",
        cta: {
          label: "Optimize Processes",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.20),transparent_60%)]",
          bar: "bg-amber-400",
        },
      },
      {
        id: "data-strategy",
        category: "Strategy",
        icon: <BadgeCheck className="h-6 w-6 text-slate-900" />,
        title: "Data Strategy & Consulting",
        subtitle: "A practical roadmap your team can actually execute.",
        who: "Founders",
        bullets: [
          "Roadmap + stack selection (no over-engineering)",
          "Governance + security practices",
          "Team enablement and handoff",
        ],
        chips: ["Practical", "Senior-led"],
        metricLabel: "Delivery timeline",
        metricValue: "2–4 weeks",
        cta: {
          label: "Get Strategic Advice",
          href: "https://calendly.com/manyatyagi0607/30min",
        },
        accent: {
          ring: "border-slate-200",
          iconBg: "bg-white",
          glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.25),transparent_60%)]",
          bar: "bg-slate-400",
        },
      },
    ],
    [],
  );

  const categories: Category[] = ["All", "Data", "BI", "AI", "Ops", "Strategy"];

  const filtered = useMemo(() => {
    if (active === "All") return services;
    return services.filter((s) => s.category === active);
  }, [active, services]);

  const worksWith = [
    "Snowflake",
    "BigQuery",
    "dbt",
    "Airbyte",
    "Fivetran",
    "Looker",
    "Power BI",
    "Tableau",
    "OpenAI",
    "LangChain",
    "Pinecone",
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,rgba(248,250,252,1),rgba(248,250,252,1))]">
      {/* HERO */}

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 pb-14 mt-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">
              Choose what you need
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Pick a track. We’ll ship it cleanly and hand it off
              production-ready.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const on = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={[
                    "rounded-full px-4 py-2 text-sm border transition-all",
                    on
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white/70 text-slate-700 border-slate-200 hover:bg-white",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceTile key={s.id} s={s} />
          ))}
        </div>

        {/* WORKS WITH */}
        <div className="mt-10 rounded-[22px] border bg-white/70 backdrop-blur-xl p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Terminal className="h-4 w-4 text-primary" />
              Works with your existing stack
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Security-first delivery • Documentation included
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {worksWith.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="rounded-full bg-slate-100 text-slate-700"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-white/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[26px] border bg-white/70 p-8 shadow-sm md:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Start with the 7-Day Audit
                </h3>
                <p className="mt-2 max-w-2xl text-slate-600">
                  We’ll identify reliability risks, define your metrics, and
                  deliver a 30-day execution roadmap.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Fixed scope",
                    "Fast delivery",
                    "Security-first",
                    "Production handoff",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full bg-slate-100 text-slate-700"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <Link href="https://calendly.com/manyatyagi0607/30min">
                    Book Audit <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl bg-white/60"
                >
                  <Link href="/case-studies">See Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
