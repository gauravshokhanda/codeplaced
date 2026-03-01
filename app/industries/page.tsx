"use client";

import {
  ShoppingBag,
  GraduationCap,
  Megaphone,
  Landmark,
  ArrowRight,
  Scale,
  Building2,
  Activity,
  Factory,
  Home,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function IndustriesPage() {
  const workedWith = [
    {
      id: "edu-marketing",
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Education, Marketing & Advertising",
      description: "Optimizing ad spend and educational content delivery.",
    },
    {
      id: "fintech",
      icon: <Landmark className="h-10 w-10 text-accent" />,
      title: "Financial Firms",
      description: "Streamlining financial data and reporting.",
    },
    {
      id: "law",
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: "Law Firms",
      description: "Data management for legal operations.",
    },
    {
      id: "infrastructure",
      icon: <Building2 className="h-10 w-10 text-accent" />,
      title: "Infrastructure",
      description: "Project and asset data analytics.",
    },
  ];

  const targetIndustries = [
    {
      id: "healthcare",
      icon: <Activity className="h-8 w-8 text-rose-500" />,
      title: "Healthcare & Life Sciences",
      focus: ["Analytics", "AI Diagnostics", "Operations Optimization"],
    },
    {
      id: "retail",
      icon: <ShoppingBag className="h-8 w-8 text-blue-500" />,
      title: "Retail & E-commerce",
      focus: ["Customer Insights", "Demand Forecasting", "Personalization"],
    },
    {
      id: "manufacturing",
      icon: <Factory className="h-8 w-8 text-amber-500" />,
      title: "Manufacturing & Supply Chain",
      focus: ["Predictive Maintenance", "Process Automation"],
    },
    {
      id: "real-estate",
      icon: <Home className="h-8 w-8 text-green-500" />,
      title: "Real Estate & Construction",
      focus: ["Project Analytics", "Cost Optimization"],
    },
    {
      id: "tech",
      icon: <Laptop className="h-8 w-8 text-purple-500" />,
      title: "Technology & SaaS",
      focus: ["Product Analytics", "AI-driven Decision Support"],
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 bg-primary/5 text-primary border-primary/20"
          >
            Vertical Expertise
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From proven success stories to future-ready solutions across
            sectors.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl"
            >
              <Link
                href="https://calendly.com/manyatyagi0607/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss Your Industry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Worked With Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Industries We Have Worked With
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by leading companies to solve their data challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workedWith.map((industry, index) => (
            <Card
              key={index}
              className="border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit mx-auto">
                  {industry.icon}
                </div>
                <CardTitle className="text-xl font-bold text-center h-14 flex items-center justify-center">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4 text-slate-600">
                  {industry.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Industries We Target
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Bringing our expertise to new frontiers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetIndustries.map((industry, index) => (
              <Card
                key={index}
                id={industry.id}
                className="border-slate-100 shadow-sm hover:shadow-md transition-all scroll-mt-28"
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <div className="p-2 bg-slate-50 rounded-md">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-4">
                    {industry.focus.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our data engineering and AI methodologies are industry-agnostic.
            Let&apos;s discuss how we can tailor our solutions to your specific
            needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            <Link
              href="https://calendly.com/manyatyagi0607/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
