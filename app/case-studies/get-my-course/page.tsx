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
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Layers,
  Zap,
  Target,
  LineChart as LineChartIcon,
  PieChart,
  Users,
  Database,
  Workflow,
  LayoutDashboard,
} from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function GetMyCourseCaseStudy() {
  // Chart Data
  const completionData = [
    { month: "Jan", completions: 60 },
    { month: "Feb", completions: 85 },
    { month: "Mar", completions: 75 },
    { month: "Apr", completions: 70 },
    { month: "May", completions: 90 },
    { month: "Jun", completions: 85 },
    { month: "Jul", completions: 100 },
    { month: "Aug", completions: 95 },
    { month: "Sep", completions: 80 },
    { month: "Oct", completions: 110 },
  ];

  const chartConfig = {
    completions: {
      label: "Completions",
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
                  EdTech
                </Badge>
                <span className="text-sm font-medium text-muted-foreground">
                  Get My Course
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Scaling Data Analytics for a Growing EdTech Platform
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                How we built a centralized data warehouse and automated
                reporting infrastructure to drive 83.6% completion rates and
                real-time decision making.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span>Real-time Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span>Automated Pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <Target className="w-5 h-5" />
                  </div>
                  <span>Funnel Optimization</span>
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
                  <div className="text-3xl font-bold text-primary">83.6%</div>
                  <div className="text-sm text-muted-foreground">
                    Completion Rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1,124</div>
                  <div className="text-sm text-muted-foreground">
                    Total Completions
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Automated Reporting
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
            {/* Dashboard Image */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
              <Image
                src="/images/casestudy/gmc.png"
                alt="Get My Course Analytics Dashboard"
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
                  When we first engaged with Get My Course, they were
                  experiencing rapid growth in enrollments, marketing campaigns,
                  and partner collaborations. While growth was positive, their
                  data ecosystem was becoming increasingly complex and difficult
                  to manage.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>
                    <strong>Fragmented Marketing & Sales Data:</strong> Data
                    from Facebook Ads, Google Ads, organic channels, CRM
                    systems, and payment gateways existed in separate platforms.
                  </li>
                  <li>
                    <strong>Manual Reporting & Delayed Insights:</strong> The
                    team relied heavily on manual exports and spreadsheet
                    consolidation. Weekly performance reports required hours of
                    effort.
                  </li>
                  <li>
                    <strong>Limited Funnel Visibility:</strong> There was no
                    clear end-to-end tracking of the student journey — from ad
                    click to lead generation, counseling calls, enrollment, and
                    final payment.
                  </li>
                  <li>
                    <strong>Scaling Challenges:</strong> As marketing budgets
                    increased, leadership needed granular insights into campaign
                    efficiency and counselor performance.
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
                  Our objective was to build a centralized, scalable, and
                  automated analytics infrastructure that could provide
                  real-time, reliable, and actionable insights across the entire
                  business funnel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 not-prose">
                  <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold flex items-center gap-2">
                        <Database className="w-4 h-4 text-primary" /> Single
                        Source of Truth
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Designed a cloud-based data architecture using Google
                      BigQuery as the centralized data warehouse, integrating
                      all marketing, CRM, and sales data.
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-primary" /> Automated
                        Pipelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Implemented automated ETL processes to extract and load
                      data from multiple sources on scheduled intervals,
                      removing manual dependency.
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold flex items-center gap-2">
                        <LayoutDashboard className="w-4 h-4 text-primary" />{" "}
                        Executive Dashboards
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Developed comprehensive Looker Studio dashboards covering
                      Marketing Performance, Sales Funnel, Counselor Metrics,
                      and Revenue Trends.
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold flex items-center gap-2">
                        <LineChartIcon className="w-4 h-4 text-primary" />{" "}
                        Funnel Transparency
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Mapped the entire user journey from first ad interaction
                      to final enrollment, enabling accurate attribution and
                      drop-off identification.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Chart Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <BarChart3 className="w-5 h-5" />
                </div>
                Growth Trajectory
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Completions Per Month</CardTitle>
                  <CardDescription>
                    Consistent growth in course completions following the
                    implementation of data-driven optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[300px] w-full"
                  >
                    <LineChart
                      data={completionData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="completions"
                        stroke="var(--color-completions)"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "var(--color-completions)" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </section>

            {/* Results */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                Business Impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Real-Time Decision Making: Reporting cycles shifted from manual weekly reports to near real-time.",
                  "Improved Marketing ROI: Optimized budgets toward high-performing channels significantly improved ROAS.",
                  "Stronger Sales Funnel: Conversion rates improved through targeted interventions.",
                  "Operational Efficiency: Eliminated manual reporting, freeing up team bandwidth.",
                  "Clear Revenue Visibility: Full transparency into course-wise and counselor-wise revenue.",
                  "Scalable Infrastructure: A robust foundation for future growth and advanced analytics.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar - Tech Stack & Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-40">
              <h3 className="text-lg font-bold mb-6">
                Technical Implementation
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Google BigQuery",
                      "Looker Studio",
                      "SQL",
                      "Google Ads API",
                      "Facebook Ads API",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white border-slate-200 text-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Data Sources
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Facebook Ads",
                      "Google Ads",
                      "CRM System",
                      "Payment Gateways",
                      "Enrollment DB",
                    ].map((source) => (
                      <li
                        key={source}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Centralized Data Warehouse",
                      "Automated ETL Pipelines",
                      "Executive Dashboards",
                      "Funnel Attribution Models",
                      "Role-Based Access Control",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Button asChild className="w-full h-12 text-lg">
                    <Link
                      href="https://calendly.com/manyatyagi0607/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Similar Project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
