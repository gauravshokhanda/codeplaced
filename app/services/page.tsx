"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Layers,
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

type Service = {
  id: string;
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
          <Link href={s.cta.href} target="_blank" rel="noopener noreferrer">
            {s.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: "paid-acquisition",
      icon: <BarChart3 className="h-6 w-6 text-slate-900" />,
      title: "Paid Acquisition Audits",
      subtitle:
        "We find wasted ad spend in 48 hours. No retainer needed to start.",
      who: "Marketing Teams",
      bullets: [
        "48-hour Turnaround",
        "Wasted Spend Analysis",
        "No Retainer Required",
      ],
      chips: ["Fast", "High Impact"],
      metricLabel: "Avg. Savings",
      metricValue: "20-30%",
      cta: {
        label: "Get an Audit",
        href: "https://calendly.com/manyatyagi0607/30min",
      },
      accent: {
        ring: "border-slate-200",
        iconBg: "bg-white",
        glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(2,132,199,0.24),transparent_60%)]",
        bar: "bg-primary/80",
      },
    },
    {
      id: "funnel-instrumentation",
      icon: <Layers className="h-6 w-6 text-slate-900" />,
      title: "Funnel Instrumentation",
      subtitle:
        "Server-side tracking (CAPI), CRM integration, and attribution that actually works.",
      who: "Growth Teams",
      bullets: ["Server-side CAPI", "CRM Integration", "Reliable Attribution"],
      chips: ["Accuracy", "Tracking"],
      metricLabel: "Data Accuracy",
      metricValue: "99%",
      cta: {
        label: "Fix Tracking",
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
      id: "revops-automation",
      icon: <Zap className="h-6 w-6 text-slate-900" />,
      title: "RevOps & Automation",
      subtitle:
        "Automate lead nurturing, SMS/WhatsApp sequences, and sales handoffs.",
      who: "Sales & Ops",
      bullets: ["Lead Nurturing", "SMS/WhatsApp Sequences", "Sales Handoffs"],
      chips: ["Automation", "Efficiency"],
      metricLabel: "Response Time",
      metricValue: "< 5 min",
      cta: {
        label: "Automate Now",
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
      id: "fractional-growth",
      icon: <BadgeCheck className="h-6 w-6 text-slate-900" />,
      title: "Fractional Growth Leadership",
      subtitle:
        "We step in as your Head of Growth to align product, sales, and marketing.",
      who: "Founders",
      bullets: [
        "Product-Marketing Alignment",
        "Sales Enablement",
        "Growth Strategy",
      ],
      chips: ["Leadership", "Strategy"],
      metricLabel: "Growth Uplift",
      metricValue: "2-3x",
      cta: {
        label: "Hire Leadership",
        href: "https://calendly.com/manyatyagi0607/30min",
      },
      accent: {
        ring: "border-slate-200",
        iconBg: "bg-white",
        glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.25),transparent_60%)]",
        bar: "bg-slate-400",
      },
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 bg-primary/5 text-primary border-primary/20"
          >
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Focused Solutions for <br className="hidden md:block" />
            <span className="text-primary">EdTech Growth</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We don&apos;t do everything. We just do the things that actually
            drive revenue in EdTech.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceTile key={service.id} s={service} />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-xl font-medium text-slate-900">
            Engagements start at $2,000/month or project-based pricing.
          </p>
        </div> */}
      </section>
    </div>
  );
}
