"use client";

import { 
  FileText, 
  Video, 
  BookOpen, 
  Briefcase, 
  ArrowRight,
  Download,
  PlayCircle
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResourcesPage() {
  const resources = [
    {
      id: "blog",
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Blog",
      description: "Latest insights on data engineering, analytics engineering, and AI trends.",
      items: [
        "Building a Modern Data Stack in 2024",
        "The Rise of the Analytics Engineer",
        "Data Quality: The Missing Piece",
        "Introduction to dbt Mesh"
      ],
      action: "Read Articles",
      link: "/blog"
    },
    {
      id: "videos",
      icon: <Video className="h-10 w-10 text-accent" />,
      title: "Videos & Webinars",
      description: "Deep dives into technical topics and recordings of our past events.",
      items: [
        "Looker vs. Tableau: A Technical Comparison",
        "Implementing RudderStack for Event Tracking",
        "AI Agents for Data Analysts Demo",
        "Embedded Analytics Masterclass"
      ],
      action: "Watch Now",
      link: "/videos"
    },
    {
      id: "guides",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Analytics Guides",
      description: "Comprehensive guides and whitepapers to help you build better data products.",
      items: [
        "The Startup Data Stack Playbook",
        "Data Governance Framework Template",
        "Hiring Your First Data Engineer",
        "Migration Guide: Legacy to Cloud"
      ],
      action: "Download Guides",
      link: "/guides"
    },
    {
      id: "careers",
      icon: <Briefcase className="h-10 w-10 text-accent" />,
      title: "Careers",
      description: "Join our team of data experts and help companies become data-driven.",
      items: [
        "Senior Analytics Engineer",
        "Data Platform Architect",
        "AI Solutions Engineer",
        "Technical Project Manager"
      ],
      action: "View Openings",
      link: "/careers"
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
             Knowledge Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
             Learn, Grow, and <br className="hidden md:block" />
             <span className="text-primary">Build with Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
             Explore our library of resources designed to help you navigate the 
             complex world of modern data and AI.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                <Link href="/contact">Subscribe to Newsletter</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} id={resource.id} className="scroll-mt-24">
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{resource.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Featured Content</h4>
                    <ul className="grid gap-2">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <PlayCircle className="h-5 w-5 text-primary shrink-0" />
                          <span className="hover:text-primary cursor-pointer transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-6 bg-slate-50/50">
                  <div className="flex items-center justify-between w-full">
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 hover:bg-transparent group" asChild>
                      <Link href={resource.link}>
                        {resource.action} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
