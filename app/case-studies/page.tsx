"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  TrendingUp,
  Layers,
} from "lucide-react";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Scaling Data Analytics for a Growing EdTech Platform",
      client: "Get My Course",
      tag: "EdTech",
      problem:
        "Fragmented marketing and sales data across 5+ platforms. Manual reporting took hours and lacked funnel visibility.",
      solution:
        "Centralized BigQuery warehouse with automated pipelines. Built executive Looker Studio dashboards for real-time insights.",
      outcome: [
        "83.6% Course Completion Rate",
        "Real-time decision making enabled",
        "100% automated reporting",
      ],
      stack: ["BigQuery", "Looker Studio", "SQL", "Google Ads API"],
      stat: "83.6% Completion Rate",
      link: "/case-studies/get-my-course",
    },
    {
      title: "Centralizing Operations & Payroll for a Distributed Workforce",
      client: "Amalfi Acquisition",
      tag: "Real Estate Operations",
      problem:
        "Disconnected operational data across Google Forms and spreadsheets led to manual payroll calculations and lack of performance visibility.",
      solution:
        "Built a centralized Excel-based workflow engine automating payroll calculations and creating performance rating dashboards.",
      outcome: [
        "100% Payroll Accuracy",
        "90% Less Admin Time",
        "Real-time Workforce Visibility",
      ],
      stack: ["Advanced Excel", "Google Forms", "Apps Script"],
      stat: "100% Payroll Accuracy",
      link: "/case-studies/amalfi-acquisition",
    },
    {
      title: "Scaling Data for a Series B EdTech Platform",
      client: "Leading Education Platform",
      tag: "Education",
      problem:
        "Student engagement data was siloed across 5 different tools (LMS, CRM, Payment, App). Reporting took 20+ hours/week of manual Excel work.",
      solution:
        "We built a centralized data warehouse in BigQuery with automated Airbyte pipelines. Designed a dbt transformation layer to model 'Student 360' and 'Class Performance' tables.",
      outcome: [
        "Saved 20 hours/week of manual reporting",
        "Enabled real-time 'At-Risk Student' alerts",
        "Single source of truth for 3 departments",
      ],
      stack: ["Google BigQuery", "dbt Cloud", "Looker Studio", "Airbyte"],
      stat: "20hrs/week saved",
    },
    {
      title: "AI-Driven Inventory for a Shopify Brand",
      client: "High-Growth Apparel Brand",
      tag: "E-commerce",
      problem:
        "Stockouts were killing revenue during peak seasons. The team relied on gut feeling and basic spreadsheets to plan inventory.",
      solution:
        "Implemented a Snowflake data lake with a custom Python forecasting model. Deployed a Streamlit app for the Ops team to view demand predictions.",
      outcome: [
        "Reduced stockouts by 15% in Q4",
        "90% forecast accuracy for core SKUs",
        "Automated reorder alerts to suppliers",
      ],
      stack: ["Snowflake", "Python", "Streamlit", "Fivetran"],
      stat: "15% less stockout",
    },
    {
      title: "Unified Customer Health for SaaS Ops",
      client: "B2B SaaS Operations Team",
      tag: "SaaS Ops",
      problem:
        "Customer Success and Sales had different definitions of 'churn risk'. No visibility into product usage vs. support tickets.",
      solution:
        "Unified Postgres application data with Zendesk and Salesforce data. Created a 'Customer Health Score' algorithm running daily via Reverse ETL.",
      outcome: [
        "3x faster renewal conversations",
        "Aligned Sales & CS on one 'Health Score'",
        "Proactive intervention for 50+ accounts",
      ],
      stack: ["Postgres", "Hightouch", "Slack API", "Salesforce"],
      stat: "3x faster renewals",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 bg-primary/5 text-primary border-primary/20"
          >
            Real World Results
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we help startups and SMBs turn messy data into a competitive
            advantage.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Context & Outcome */}
                <div className="lg:col-span-8 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                      {c.tag}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">
                      {c.client}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {c.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-muted-foreground" /> The
                        Problem
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {c.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-muted-foreground" /> The
                        Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-500" /> Key
                      Outcomes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {c.outcome.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Stack & CTA */}
                <div className="lg:col-span-4 bg-slate-50 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {c.stack.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="bg-white border-slate-200 text-slate-700"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8">
                      <div className="text-xs text-muted-foreground mb-1">
                        Primary Impact
                      </div>
                      <div className="text-2xl font-bold text-primary flex items-center gap-2">
                        <BarChart3 className="w-6 h-6" /> {c.stat}
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary text-white rounded-xl h-12"
                  >
                    <Link
                      href={
                        c.link || "https://calendly.com/manyatyagi0607/30min"
                      }
                      target={c.link ? undefined : "_blank"}
                      rel={c.link ? undefined : "noopener noreferrer"}
                    >
                      {c.link ? "View Case Study" : "Get Similar Results"}{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to upgrade your data stack?
          </h2>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white rounded-xl h-14 px-8"
            >
              <Link
                href="https://calendly.com/manyatyagi0607/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Audit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
