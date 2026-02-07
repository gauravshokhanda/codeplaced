"use client";

import { 
  ShieldCheck, 
  Cloud, 
  BarChart3, 
  Bot, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Terminal,
  Cpu,
  Activity
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  const pillars = [
    {
      id: "strategy",
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Platform Implementation",
      description: "Scalable cloud data stacks that grow with your startup. We implement best-practice Modern Data Stacks.",
      features: [
        "Ingestion (Airbyte/Fivetran)",
        "Transformation (dbt)",
        "Lakehouse architecture",
        "Real-time streaming",
        "Governance & Access Control"
      ],
      tech: ["Snowflake", "BigQuery", "dbt", "Airbyte"],
      outcome: "Pipeline Uptime 99.95%"
    },
    {
      id: "ai",
      icon: <Bot className="h-10 w-10 text-accent" />,
      title: "AI-Augmented Delivery & GenAI",
      description: "Accelerate analytics and automate workflows with custom AI agents and RAG solutions.",
      features: [
        "Custom RAG Knowledge Bots",
        "Automated Analyst Agents",
        "Internal Tool Integration",
        "Prompt Engineering",
        "LLM Fine-tuning"
      ],
      tech: ["OpenAI", "LangChain", "Pinecone", "Vercel AI"],
      outcome: "Support Costs ↓ 60%"
    },
    {
      id: "bi",
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "BI, DW & AI Expert Services",
      description: "Executive-grade dashboards and expert guidance to answer questions before you ask them.",
      features: [
        "Executive KPI design",
        "Semantic layer definition",
        "Self-serve analytics",
        "Staff Augmentation",
        "Data Strategy Audits"
      ],
      tech: ["Power BI", "Looker", "Tableau", "Superset"],
      outcome: "Adoption ↑ 3x"
    },
    {
      id: "embedded",
      icon: <Cpu className="h-10 w-10 text-accent" />,
      title: "Embedded Analytics",
      description: "Seamlessly integrate white-labeled analytics into your customer-facing products.",
      features: [
        "White-label dashboards",
        "Custom data visualizations",
        "Multi-tenant security",
        "API-first integration",
        "Performance optimization"
      ],
      tech: ["Embeddable", "Looker Embedded", "Cube.js", "React"],
      outcome: "New Revenue Streams"
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
             End-to-End Data Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
             Everything You Need to Be <br className="hidden md:block" />
             <span className="text-primary">Data-Driven & AI-Ready</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
             From messy spreadsheets to automated pipelines and predictive AI. 
             We build the infrastructure that powers your growth.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                <Link href="/contact">Get a Proposal</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} id={pillar.id} className="scroll-mt-24">
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{pillar.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Capabilities</h4>
                    <ul className="grid gap-2">
                      {pillar.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-6 bg-slate-50/50">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm font-medium text-primary">
                      {pillar.outcome}
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 hover:bg-transparent group" asChild>
                      <Link href="/contact">
                        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
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
