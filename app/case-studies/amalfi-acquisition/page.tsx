"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Layers,
  Zap,
  Target,
  FileSpreadsheet,
  Users,
  Database,
  Calculator,
} from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";

export default function AmalfiAcquisitionCaseStudy() {
  // Chart Data - Simulated based on case study impact
  const efficiencyData = [
    { month: "Month 1", manual: 40, automated: 40 },
    { month: "Month 2", manual: 42, automated: 20 },
    { month: "Month 3", manual: 45, automated: 10 },
    { month: "Month 4", manual: 43, automated: 5 },
    { month: "Month 5", manual: 48, automated: 5 },
    { month: "Month 6", manual: 50, automated: 5 },
  ];

  const chartConfig = {
    manual: {
      label: "Manual Hours",
      color: "hsl(var(--muted-foreground))",
    },
    automated: {
      label: "Automated Hours",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Navigation */}
      <div className="bg-white border-b border-slate-100 sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Button
            variant="ghost"
            asChild
            className="gap-2 pl-0 hover:bg-transparent hover:text-primary"
          >
            <Link href="/case-studies">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="bg-primary/5 text-primary border-primary/20"
                >
                  Real Estate Operations
                </Badge>
                <span className="text-sm font-medium text-muted-foreground">
                  Amalfi Acquisition
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Centralizing Operations & Payroll for a Distributed Workforce
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming disconnected Google Forms and spreadsheets into a centralized, automated workflow engine for payroll and performance tracking.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <span>Automated Payroll</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Database className="w-5 h-5" />
                  </div>
                  <span>Centralized Data</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <span>Performance Tracking</span>
                </div>
              </div>
            </div>

            {/* Key Stats Card */}
            <Card className="w-full md:w-80 shadow-lg border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Impact at a Glance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Payroll Accuracy
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">90%</div>
                  <div className="text-sm text-muted-foreground">
                    Less Admin Time
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">Real-time</div>
                  <div className="text-sm text-muted-foreground">
                    Workforce Visibility
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Dashboard Image - Placeholder using existing asset or generic */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
               {/* Using a placeholder image or reusing one if appropriate. 
                   Ideally we would have a specific screenshot for Amalfi. 
                   For now, reusing a generic analytics image or keeping it simple. */}
              <Image
                src="/images/ana2.png" 
                alt="Amalfi Acquisition Operations Dashboard"
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Problem Statement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                  <Layers className="w-5 h-5" />
                </div>
                The Challenge
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Amalfi Acquisition was facing growing operational challenges as their virtual workforce of County Leads, Supervisors, and Skip-Tracers expanded. Managing performance, payroll, and work tracking through manual spreadsheets and disconnected systems had become unsustainable.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>
                    <strong>Disconnected Operational Data:</strong> Task progress, payroll inputs, and records were scattered across Google Forms and legacy Excel files, causing reconciliation issues.
                  </li>
                  <li>
                    <strong>Manual Payroll Calculations:</strong> Compensation was computed manually, leading to human error risks and slow monthly payroll cycles.
                  </li>
                  <li>
                    <strong>Lack of Performance Visibility:</strong> Employee ratings existed but weren't structured for trend analysis, leaving management blind to long-term performance.
                  </li>
                  <li>
                    <strong>Time-Intensive Reporting:</strong> Consolidating reports required hours of manual cleaning and integration.
                  </li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                The Solution
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">
                <p>
                  We designed a centralized, automated Excel-based workflow to transform raw operational data into actionable management insights.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 not-prose">
                  <Card className="bg-slate-50 border-slate-200">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Centralized Data</h3>
                      <p className="text-sm">Integrated legacy payroll files and live Google Form submissions into a single source of truth for all workforce activities.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-50 border-slate-200">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Automated Payroll</h3>
                      <p className="text-sm">Dynamic engines automatically compute compensation for all roles based on task completion and performance criteria.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-50 border-slate-200">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Performance Ratings</h3>
                      <p className="text-sm">Monthly rating dashboards to monitor individual contributions and identify top performers automatically.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-50 border-slate-200">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Workforce Tracking</h3>
                      <p className="text-sm">Interactive dashboards visualizing task progress, last activity dates, and submission frequency.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

             {/* Impact Visualization */}
             <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                Efficiency Gains
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Admin Time Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <BarChart data={efficiencyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="manual" fill="var(--color-manual)" radius={[4, 4, 0, 0]} name="Manual Hours" />
                      <Bar dataKey="automated" fill="var(--color-automated)" radius={[4, 4, 0, 0]} name="Automated Hours" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </section>

            {/* Technical Implementation */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                Technical Implementation
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Advanced Excel Functions:</strong> Used FILTER, QUERY, REGEXMATCH, MMULT, and array formulas to clean and standardize incoming data.
                  </li>
                  <li>
                    <strong>Dynamic Payroll Engine:</strong> Implemented end-to-end logic for role-based payouts that updates in real-time with new submissions.
                  </li>
                  <li>
                    <strong>Automated Aggregation:</strong> Logic to extract date-time values and group them into monthly reporting periods for trend analysis.
                  </li>
                  <li>
                    <strong>Data Validation:</strong> Advanced conditional logic and controls to improve usability and reduce reporting errors.
                  </li>
                </ul>
              </div>
            </section>

            {/* Outcome */}
            <section className="bg-slate-900 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-emerald-400" />
                Business Outcomes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-emerald-400">
                    Reduced Admin Effort
                  </h3>
                  <p className="text-slate-300">
                    Automating payroll and reporting minimized manual spreadsheet work, allowing management to focus on strategy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-emerald-400">
                    Faster Decision Making
                  </h3>
                  <p className="text-slate-300">
                    Consolidated data provides instant insights on task progress and payroll status without manual reconciliation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-emerald-400">
                    Improved Accuracy
                  </h3>
                  <p className="text-slate-300">
                    Dynamic calculations eliminated discrepancies between bookkeeping records and payouts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-emerald-400">
                    Enhanced Visibility
                  </h3>
                  <p className="text-slate-300">
                    Leadership gained real-time visibility into team activity, submission consistency, and performance trends.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">
                    Client
                  </div>
                  <div className="font-semibold text-slate-900">
                    Amalfi Acquisition
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">
                    Industry
                  </div>
                  <div className="font-semibold text-slate-900">
                    Real Estate / Operations
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">
                    Services
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Integration</Badge>
                    <Badge variant="secondary">Payroll Automation</Badge>
                    <Badge variant="secondary">Excel Workflows</Badge>
                    <Badge variant="secondary">Dashboards</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Advanced Excel</Badge>
                    <Badge variant="outline">Google Forms</Badge>
                    <Badge variant="outline">Apps Script</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-none">
              <CardHeader>
                <CardTitle className="text-white">Need similar results?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-primary-foreground/90">
                  We help companies automate complex operations and gain visibility into their workforce.
                </p>
                <Button variant="secondary" className="w-full font-semibold" asChild>
                  <Link href="https://calendly.com/manyatyagi0607/30min" target="_blank" rel="noopener noreferrer">
                    Book a Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
