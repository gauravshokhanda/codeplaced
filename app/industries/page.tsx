"use client";

import { 
  ShoppingBag, 
  GraduationCap, 
  Megaphone, 
  Landmark, 
  ArrowRight,
  TrendingUp,
  Users,
  LineChart,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function IndustriesPage() {
  const industries = [
    {
      id: "martech",
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "MarTech & AdTech",
      description: "Optimize ad spend and personalize customer journeys with granular attribution modeling.",
      challenges: [
        "Data siloed across ad platforms",
        "Attribution accuracy issues",
        "Real-time bidding latency",
        "Privacy compliance (GDPR/CCPA)"
      ],
      solutions: [
        "Unified Identity Graph",
        "Multi-touch Attribution",
        "Real-time ROAS Dashboards",
        "Server-side Tracking"
      ],
      outcome: "ROAS ↑ 35%"
    },
    {
      id: "edutech",
      icon: <GraduationCap className="h-10 w-10 text-accent" />,
      title: "EduTech & Learning",
      description: "Personalize learning paths and predict student outcomes with engagement analytics.",
      challenges: [
        "Student churn prediction",
        "Content efficacy measurement",
        "Scalable personalization",
        "LMS data integration"
      ],
      solutions: [
        "Learning Analytics Warehouse",
        "Adaptive Learning Engines",
        "Student 360 View",
        "Engagement Scoring"
      ],
      outcome: "Retention ↑ 20%"
    },
    {
      id: "retail",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Retail & E-Commerce",
      description: "Drive sales with inventory optimization and hyper-personalized recommendations.",
      challenges: [
        "Inventory forecasting",
        "Customer lifetime value calculation",
        "Supply chain visibility",
        "Omnichannel data unification"
      ],
      solutions: [
        "Demand Forecasting Models",
        "Customer Segmentation",
        "Market Basket Analysis",
        "Real-time Inventory Sync"
      ],
      outcome: "Inventory Costs ↓ 15%"
    },
    {
      id: "fintech",
      icon: <Landmark className="h-10 w-10 text-accent" />,
      title: "FinTech & Financial Services",
      description: "Ensure compliance and detect fraud while delivering personalized financial insights.",
      challenges: [
        "Fraud detection latency",
        "Regulatory reporting",
        "Data security & privacy",
        "Transaction volume scaling"
      ],
      solutions: [
        "Real-time Fraud Detection",
        "Automated Compliance Reporting",
        "Secure Data Clean Rooms",
        "Personalized Financial Health Scores"
      ],
      outcome: "Fraud Losses ↓ 40%"
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
             Vertical Expertise
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
             Tailored Solutions for <br className="hidden md:block" />
             <span className="text-primary">Your Industry</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
             We understand the unique data challenges and opportunities in your sector.
             Proven architectures that deliver value from day one.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                <Link href="/contact">Discuss Your Use Case</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} id={industry.id} className="scroll-mt-24">
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{industry.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 text-red-500/80">Challenges</h4>
                    <ul className="grid gap-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-red-400 font-bold">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3 text-primary">Our Solutions</h4>
                    <ul className="grid gap-2">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-6 bg-slate-50/50">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm font-medium text-primary">
                      {industry.outcome}
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 hover:bg-transparent group" asChild>
                      <Link href="/contact">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
