"use client";

import { Laptop, Globe, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IndustriesPage() {
  const industries = [
    {
      id: "coaching",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Coaching & Test Prep",
      description:
        "Google Ads for high-ticket offline centers. We track leads from click to walk-in.",
    },
    {
      id: "study-abroad",
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Study Abroad Consultancies",
      description:
        "Generate qualified student leads looking for US/UK/Canada intake. Not window shoppers.",
    },
    {
      id: "online-degree",
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Online Degree & Skilling",
      description:
        "Scale webinar funnels and direct purchase campaigns with ROAS focus.",
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
            Specialized growth marketing for the Education Technology sector.
          </p>
        </div>
      </section>

      {/* Main Content - The 3 Cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
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
                <div className="text-slate-600">{industry.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            We only take EdTech clients right now.
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Schedule a call to see if we&apos;re a fit.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-xl"
          >
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
