"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Users,
  Database,
  BarChart3,
  Bot,
  Lock,
  LayoutDashboard,
  MessageSquare,
  Zap,
  ChevronRight,
  Quote,
  Play,
  Terminal,
  Cpu,
  FileText,
  HelpCircle,
  Plus,
  Minus,
  Shield,
  Search,
  PieChart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
    viewport: { once: true },
  };

  const faqs = [
    {
      q: "Do you really deliver in 2-4 weeks?",
      a: "Yes. We use a modular 'lego-block' architecture of pre-built data connectors and transformation logic. We don't reinvent the wheel; we assemble proven systems customized to your data.",
    },
    {
      q: "Do I need an internal data team?",
      a: "No. We build the system to run on autopilot. We provide documentation and a handover period so your existing ops or technical team can manage it, or we can offer a lightweight maintenance retainer.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We build directly in your cloud environment (AWS, GCP, Azure) or use secure, SOC2-compliant modern data stack tools. We never store your data on our own servers.",
    },
    {
      q: "What if I have messy spreadsheet data?",
      a: "That's our specialty. We build the pipelines to clean, normalize, and validate your data automatically, turning 'messy spreadsheets' into a structured warehouse.",
    },
    {
      q: "How does the fixed pricing work?",
      a: "We scope the deliverables upfront (e.g., '3 dashboards, 5 pipelines, 1 AI bot'). You pay a flat fee for that scope. No hourly billing surprises.",
    },
    {
      q: "Can you build custom AI agents?",
      a: "Yes. We build RAG (Retrieval-Augmented Generation) bots that can search your internal docs/data to answer employee or customer questions securely.",
    },
    {
      q: "What tech stack do you use?",
      a: "We use modern standards: Fivetran/Airbyte for ingestion, Snowflake/BigQuery/Postgres for warehousing, dbt for transformation, and Retool/Streamlit/Next.js for interfaces.",
    },
    {
      q: "How do we get started?",
      a: "Book a 7-Day Readiness Audit. We'll analyze your current state and give you a detailed roadmap and fixed-price quote for the full build.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-900 font-sans">
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-slate-50">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="text-left">
              <div className="flex flex-wrap gap-2 mb-8">
                {/* <Badge
                  variant="outline"
                  className="bg-white border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  <Users className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Senior Engineers Only
                </Badge> */}
                <Badge
                  variant="outline"
                  className="bg-white border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  Delivery in 2–4 Weeks
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Data Systems That Scale. <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                  Delivered in Weeks.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                We turn messy data into reliable pipelines, executive
                dashboards, and practical AI copilots.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                >
                  <Link
                    href="https://calendly.com/manyatyagi0607/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Audit Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl h-14 px-8 text-base border-slate-200 bg-white hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  <Link href="#recent-work">View Case Studies</Link>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Security-First Architecture</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - Unified Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100">
                    <Lock className="w-3 h-3" />
                    <span className="font-mono">unified_growth_view.app</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-slate-50/50">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        Total Ad Spend
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        ₹1.24L
                      </div>
                      <div className="text-[10px] font-medium text-emerald-600 flex items-center mt-2">
                        <ArrowRight className="w-3 h-3 rotate-[-45deg] mr-1" />
                        12% vs last mo
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        Attributed Enrollments
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        28
                      </div>
                      <div className="text-[10px] font-medium text-emerald-600 flex items-center mt-2">
                        <ArrowRight className="w-3 h-3 rotate-[-45deg] mr-1" />
                        8% vs last mo
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        CAC / Enrollment
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        ₹4,428
                      </div>
                      <div className="text-[10px] font-medium text-emerald-600 flex items-center mt-2">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Target Met
                      </div>
                    </div>
                  </div>

                  {/* Campaign Table */}
                  <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Active Campaigns
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Sync
                      </div>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {[
                        {
                          name: "Summer_Bootcamp_Meta",
                          source: "Meta",
                          spend: "₹45k",
                          leads: 124,
                          enrolls: 12,
                          roi: "High",
                        },
                        {
                          name: "Search_Brand_Google",
                          source: "Google",
                          spend: "₹28k",
                          leads: 85,
                          enrolls: 8,
                          roi: "High",
                        },
                        {
                          name: "Organic_Webinar_Email",
                          source: "Email",
                          spend: "₹0",
                          leads: 210,
                          enrolls: 8,
                          roi: "Max",
                        },
                      ].map((camp, i) => (
                        <div
                          key={i}
                          className="px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center border ${camp.source === "Meta" ? "bg-blue-50 border-blue-100 text-blue-600" : camp.source === "Google" ? "bg-red-50 border-red-100 text-red-600" : "bg-amber-50 border-amber-100 text-amber-600"}`}
                            >
                              {camp.source === "Meta" ? (
                                <Users className="w-4 h-4" />
                              ) : camp.source === "Google" ? (
                                <Search className="w-4 h-4" />
                              ) : (
                                <MessageSquare className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-700 group-hover:text-primary transition-colors">
                                {camp.name}
                              </div>
                              <div className="text-[10px] text-slate-400 font-medium">
                                {camp.source} • {camp.spend} spend
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-slate-900">
                              {camp.enrolls} Enrolled
                            </div>
                            <div className="text-[10px] text-emerald-600 font-medium">
                              {camp.leads} Leads
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        PACKAGES SECTION (Moved Up)
        =============================================
      */}
      <section
        id="services"
        className="py-24 bg-white relative border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Services Designed for ROI
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              High-impact data systems delivered in weeks. Choose your path to
              modern data maturity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {/* Featured Card 1: 7-Day Readiness Audit */}

            {/* Card 2: Data Platform & Pipelines */}
            <div className="relative p-8 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Database className="w-6 h-6" />
                </div>
                {/* Micro-visual: Nodes */}
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-200" />
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Data Platform & Pipelines
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Build a solid foundation for scale.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Production-grade pipelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Automated observability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Cloud cost optimization
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Scalable
                </span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Reliable
                </span>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-slate-200 hover:border-primary hover:text-primary"
              >
                <Link href="/services#architecture">See Architecture</Link>
              </Button>
            </div>

            {/* Card 3: Executive Dashboards */}
            <div className="relative p-8 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-50" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                {/* Micro-visual: Bar chart */}
                <div className="flex gap-1 items-end h-6">
                  <div className="w-1.5 h-3 bg-emerald-200 rounded-sm" />
                  <div className="w-1.5 h-5 bg-emerald-400 rounded-sm" />
                  <div className="w-1.5 h-4 bg-emerald-300 rounded-sm" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Executive Dashboards & KPI System
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Turn data into decisions instantly.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Robust semantic layer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Real-time executive dashboards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Automated alert systems
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Actionable
                </span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Real-time
                </span>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-slate-200 hover:border-primary hover:text-primary"
              >
                {/* <Link
                  href="https://calendly.com/manyatyagi0607/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Sample Dashboard
                </Link> */}
                <Link href="/services#dashboards">See Dashboard</Link>
              </Button>
            </div>

            {/* Card 4: AI Copilots */}
            <div className="relative p-8 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                  <Bot className="w-6 h-6" />
                </div>
                {/* Micro-visual: Chat */}
                <div className="relative">
                  <div className="w-6 h-4 bg-purple-200 rounded-lg rounded-bl-none" />
                  <div className="absolute -right-2 top-3 w-6 h-4 bg-purple-400 rounded-lg rounded-tr-none" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                AI Copilots (RAG + Agents)
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Secure AI that knows your business.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Governed knowledge bot (RAG)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Specialized analyst agents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Workflow automation
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Secure
                </span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Automated
                </span>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-slate-200 hover:border-primary hover:text-primary"
              >
                <Link href="/services#ai">Explore AI Pilot</Link>
              </Button>
            </div>

            {/* Card 5: Embedded Analytics (Optional) */}
            <div className="relative p-8 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-50" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                  <PieChart className="w-6 h-6" />
                </div>
                {/* Micro-visual: Embed */}
                <div className="w-8 h-6 border-2 border-orange-200 rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 border border-orange-400 rounded-sm" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Embedded Analytics
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Monetize your data with white-label dashboards.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    White-label dashboards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    Granular permissions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-slate-700 text-sm">
                    High-performance caching
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Monetizable
                </span>
                <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                  Seamless
                </span>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-slate-200 hover:border-primary hover:text-primary"
              >
                <Link href="/services#embedded">See Embedded Options</Link>
              </Button>
            </div>
          </div>

          <div className="relative py-24 bg-slate-950 w-[100vw] ml-[calc(50%-50vw)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 container mx-auto px-4">
              <div className="flex flex-col items-center gap-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <Badge
                    variant="outline"
                    className="border-primary/50 bg-primary/10 text-primary-foreground mb-2"
                  >
                    Powering Your Data
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Built on a Modern Stack
                  </h3>
                  <p className="text-slate-400 text-lg">
                    We use best-in-class tools to build scalable, maintainable,
                    and secure data platforms.
                  </p>
                </div>

                <Tabs defaultValue="data-platform" className="w-full max-w-5xl">
                  <div className="flex justify-center mb-12">
                    <TabsList className="bg-slate-900/50 p-1 h-auto rounded-full border border-slate-800 backdrop-blur-sm">
                      {[
                        "data-platform",
                        "analytics",
                        "orchestration",
                        "ai",
                      ].map((tab) => (
                        <TabsTrigger
                          key={tab}
                          value={tab}
                          className="rounded-full px-6 py-2.5 text-sm font-medium text-slate-400 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                        >
                          {tab === "data-platform" && "Data Platform"}
                          {tab === "analytics" && "Analytics & BI"}
                          {tab === "orchestration" && "Pipelines & ELT"}
                          {tab === "ai" && "AI & ML"}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  <AnimatePresence mode="wait">
                    <TabsContent
                      value="data-platform"
                      className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                          {
                            name: "Snowflake",
                            icon: "/icons/snowflake.png",
                            desc: "Cloud Data Warehouse",
                          },
                          {
                            name: "BigQuery",
                            icon: "/icons/bigquery.png",
                            desc: "Serverless Data Warehouse",
                          },
                          {
                            name: "Postgres",
                            icon: "/icons/postgress.png",
                            desc: "Relational Database",
                          },
                          {
                            name: "DuckDB",
                            icon: "/icons/duckdb.png",
                            desc: "In-process OLAP",
                          },
                        ].map((tech) => (
                          <div
                            key={tech.name}
                            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-900"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                            <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <div className="text-center relative">
                              <div className="font-semibold text-slate-100 group-hover:text-primary transition-colors">
                                {tech.name}
                              </div>
                              <div className="text-xs text-slate-400 mt-1">
                                {tech.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="analytics"
                      className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                          {
                            name: "Looker",
                            icon: "/icons/looker.png",
                            desc: "Enterprise BI",
                          },
                          {
                            name: "Power BI",
                            icon: "/icons/power-bi.png",
                            desc: "Business Analytics",
                          },
                          {
                            name: "Metabase",
                            icon: "/icons/metabase.svg",
                            desc: "Open Source BI",
                          },
                          {
                            name: "Tableau",
                            icon: "/icons/tableau.png",
                            desc: "Visual Analytics",
                          },
                        ].map((tech) => (
                          <div
                            key={tech.name}
                            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-900"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                            <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <div className="text-center relative">
                              <div className="font-semibold text-slate-100 group-hover:text-primary transition-colors">
                                {tech.name}
                              </div>
                              <div className="text-xs text-slate-400 mt-1">
                                {tech.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="orchestration"
                      className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                          {
                            name: "dbt",
                            icon: "/icons/dbt.svg",
                            desc: "Data Transformation",
                          },
                          {
                            name: "Airbyte",
                            icon: "/icons/airbyte.svg",
                            desc: "Data Integration",
                          },
                          {
                            name: "Fivetran",
                            icon: "/icons/fivetran.svg",
                            desc: "Automated ELT",
                          },
                          {
                            name: "Airflow",
                            icon: "/icons/airflow.svg",
                            desc: "Workflow Orchestration",
                          },
                          {
                            name: "Prefect",
                            icon: "/icons/prefect.svg",
                            desc: "Modern Workflow",
                          },
                        ].map((tech) => (
                          <div
                            key={tech.name}
                            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-900"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                            <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <div className="text-center relative">
                              <div className="font-semibold text-slate-100 group-hover:text-primary transition-colors">
                                {tech.name}
                              </div>
                              <div className="text-xs text-slate-400 mt-1">
                                {tech.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="ai"
                      className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                          {
                            name: "OpenAI",
                            icon: "/icons/openai-brands-solid-full.svg",
                            desc: "LLM Models",
                          },
                          {
                            name: "Anthropic",
                            icon: "/icons/anthropic-color.svg",
                            desc: "Claude Models",
                          },
                          {
                            name: "LangChain",
                            icon: "/icons/langchain-color.svg",
                            desc: "LLM Framework",
                          },
                          {
                            name: "LlamaIndex",
                            icon: "/icons/llamaindex-color.svg",
                            desc: "Data Framework",
                          },
                        ].map((tech) => (
                          <div
                            key={tech.name}
                            className="group relative flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-900"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                            <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <div className="text-center relative">
                              <div className="font-semibold text-slate-100 group-hover:text-primary transition-colors">
                                {tech.name}
                              </div>
                              <div className="text-xs text-slate-400 mt-1">
                                {tech.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </AnimatePresence>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        RECENT WORK (Moved Up)
        =============================================
      */}
      <section id="recent-work" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-slate-600">
              Real problems. Real engineering. Real outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1: Get My Course */}
            <Link
              href="/case-studies/get-my-course"
              className="block group h-full"
            >
              <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm group-hover:shadow-md transition-all h-full flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    EdTech
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono">GMC</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Scaling Data Analytics
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  <span className="font-semibold text-slate-900">Problem:</span>{" "}
                  Fragmented marketing and sales data across 5+ platforms.
                  Manual reporting took hours.
                </p>
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-slate-600">
                      Centralized BigQuery warehouse with automated pipelines.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-slate-600">
                      Built executive Looker Studio dashboards.
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg mt-auto">
                  <div className="text-emerald-700 font-bold text-2xl">
                    83.6%
                  </div>
                  <div className="text-emerald-600 text-xs uppercase tracking-wide font-semibold">
                    Completion Rate
                  </div>
                </div>
              </div>
            </Link>

            {/* Case Study 2: Amalfi Acquisition */}
            <Link
              href="/case-studies/amalfi-acquisition"
              className="block group h-full"
            >
              <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm group-hover:shadow-md transition-all h-full flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    Real Estate Ops
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono">
                    AMALFI
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Automated Payroll & Ops
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  <span className="font-semibold text-slate-900">Problem:</span>{" "}
                  Disconnected Google Forms & spreadsheets caused manual payroll
                  errors and lack of visibility.
                </p>
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-slate-600">
                      Centralized workflow engine with automated payroll logic.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-slate-600">
                      Real-time performance rating dashboards.
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg mt-auto">
                  <div className="text-emerald-700 font-bold text-2xl">
                    100%
                  </div>
                  <div className="text-emerald-600 text-xs uppercase tracking-wide font-semibold">
                    Payroll Accuracy
                  </div>
                </div>
              </div>
            </Link>

            {/* Case Study 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700"
                >
                  Ops Tech
                </Badge>
                <span className="text-xs text-slate-400 font-mono">
                  CASE-087
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Pipeline Reliability Audit
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                <span className="font-semibold text-slate-900">Problem:</span>{" "}
                Critical reporting pipelines were failing 3x/week, causing
                leadership mistrust.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-slate-600">
                    Refactored legacy Airflow DAGs and implemented testing.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-slate-600">
                    Added alerting and data quality checks.
                  </p>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg">
                <div className="text-emerald-700 font-bold text-2xl">99.9%</div>
                <div className="text-emerald-600 text-xs uppercase tracking-wide font-semibold">
                  Uptime Achieved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        WHAT WE BUILD
        =============================================
      */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                What We Build
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We don&apos;t just &quot;consult&quot;. We ship production-grade
                assets that you own forever.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Modern Data Stack
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Snowflake, BigQuery, Postgres. Clean, documented schemas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Practical AI Agents
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      RAG bots that know your internal docs. Automated support
                      triage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Live BI Dashboards
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Self-serve metrics for executives. No more &quot;asking
                      data team&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-2 opacity-10"></div>
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl relative z-10 font-mono text-sm">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 opacity-90">
                  <p>
                    <span className="text-purple-400">➜</span>{" "}
                    <span className="text-blue-400">~/project</span> git commit
                    -m &quot;feat: deploy automated pipeline&quot;
                  </p>
                  <p>
                    <span className="text-purple-400">➜</span>{" "}
                    <span className="text-blue-400">~/project</span> npm run
                    build:production
                  </p>
                  <p className="text-emerald-400">✔ Build completed in 2.4s</p>
                  <p className="text-emerald-400">
                    ✔ All tests passed (142/142)
                  </p>
                  <p className="text-emerald-400">✔ Deploying to edge...</p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        HOW WE WORK (Timeline)
        =============================================
      */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, end-to-end delivery process so you always know
              what&apos;s happening next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "01. Discovery & Audit",
                desc: "We deep-dive into your data, systems, and business goals to identify gaps and opportunities within 7 days.",
                icon: <Search className="w-5 h-5 text-sky-500" />,
                accent: "from-sky-500/80 to-cyan-400/80",
              },
              {
                title: "02. Strategy & Roadmap",
                desc: "We define KPIs, architecture, and a clear execution roadmap with transparent pricing.",
                icon: <FileText className="w-5 h-5 text-emerald-500" />,
                accent: "from-emerald-500/80 to-teal-400/80",
              },
              {
                title: "03. Build & Optimize",
                desc: "We design, develop, and deploy dashboards, pipelines, and automations in agile sprints.",
                icon: <Zap className="w-5 h-5 text-amber-500" />,
                accent: "from-amber-500/80 to-orange-400/80",
              },
              {
                title: "04. Handover & Scale",
                desc: "Complete documentation, training, and post-launch support to ensure smooth adoption.",
                icon: <Users className="w-5 h-5 text-purple-500" />,
                accent: "from-purple-500/80 to-pink-400/80",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.accent}`}
                />
                <div className="relative p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                        0{i + 1}
                      </div> */}
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200">
                      {step.icon}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =============================================
        SECURITY SECTION
        =============================================
      */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
              <div>
                <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
                <h2 className="text-3xl font-bold mb-6">
                  Your Data Stays Yours.
                </h2>
                <p className="text-slate-300 mb-8 text-lg">
                  We build directly in your cloud environment. We don&apos;t
                  store your customer data. Everything is documented, compliant,
                  and handed over to you.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>SOC2 Compliant Tooling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Zero-Retention Policy</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="font-mono text-sm space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Access Level</span>
                    <span className="text-emerald-400">Least Privilege</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Encryption</span>
                    <span className="text-emerald-400">AES-256 (At Rest)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Audit Logs</span>
                    <span className="text-emerald-400">Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Data Residency</span>
                    <span className="text-emerald-400">
                      Your VPC (US-East-1)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        CLIENT VIDEOS (Placeholders)
        =============================================
      */}
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            See What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group relative aspect-video bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                    <Play
                      className="w-8 h-8 text-primary ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="font-bold text-xl mb-1">
                    Client Success Story {i}
                  </div>
                  <div className="text-sm opacity-90">
                    Scaling data infrastructure for high-growth SaaS
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 
        =============================================
        MEET THE TEAM
        =============================================
      */}

      {/* 
        =============================================
        FAQ
        =============================================
      */}
      {/* hidden section of FAQ */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveQuestion(activeQuestion === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">
                    {faq.q}
                  </span>
                  {activeQuestion === i ? (
                    <Minus className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeQuestion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 
        =============================================
        FINAL CTA
        =============================================
      */}
    </div>
  );
}
