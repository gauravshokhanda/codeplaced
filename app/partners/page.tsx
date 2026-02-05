"use client";

import { 
  Cloud, 
  Code, 
  Database, 
  Layers, 
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Box
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PartnersPage() {
  const partners = [
    {
      id: "google",
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Google Cloud",
      description: "Premier Partner for BigQuery and Looker implementations.",
      status: "Premier Partner",
      benefits: [
        "Certified BigQuery Architects",
        "Looker Data Modeling Experts",
        "Cloud Run & GKE Specialists",
        "Vertex AI Implementation"
      ],
      link: "https://cloud.google.com",
      linkText: "Google Cloud Profile"
    },
    {
      id: "embeddable",
      icon: <Box className="h-10 w-10 text-accent" />,
      title: "Embeddable",
      description: "Next-gen embedded analytics toolkit for product teams.",
      status: "Solutions Partner",
      benefits: [
        "Custom Component Development",
        "Performance Optimization",
        "Semantic Layer Design",
        "Rapid Prototyping"
      ],
      link: "https://embeddable.com",
      linkText: "Partner Page"
    },
    {
      id: "dagster",
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Dagster",
      description: "The data orchestration platform for the modern data stack.",
      status: "Implementation Partner",
      benefits: [
        "Asset-based Orchestration",
        "Data Quality Integration",
        "Platform Engineering",
        "Migration Services"
      ],
      link: "https://dagster.io",
      linkText: "Dagster Partners"
    },
    {
      id: "rudderstack",
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "RudderStack",
      description: "Customer Data Platform (CDP) for developers.",
      status: "Technology Partner",
      benefits: [
        "Event Stream Architecture",
        "Warehouse-first Identity Resolution",
        "Reverse ETL Configuration",
        "Privacy & Compliance Setup"
      ],
      link: "https://rudderstack.com",
      linkText: "RudderStack Profile"
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
             Best-in-Class Technology
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
             Our Technology <br className="hidden md:block" />
             <span className="text-primary">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
             We work with the best tools in the modern data stack ecosystem 
             to build scalable, future-proof solutions for our clients.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                <Link href="/contact">Become a Partner</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div key={index} id={partner.id} className="scroll-mt-24">
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-50 rounded-lg w-fit">
                      {partner.icon}
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {partner.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{partner.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Our Expertise</h4>
                    <ul className="grid gap-2">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-6 bg-slate-50/50">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm font-medium text-muted-foreground">
                      Certified Experts
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 hover:bg-transparent group" asChild>
                      <a href={partner.link} target="_blank" rel="noopener noreferrer">
                        {partner.linkText} <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper component for check icon
function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
