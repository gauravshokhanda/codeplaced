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
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
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

  return (
    <div className="w-full overflow-x-hidden">
      {/* 
        =============================================
        HERO SECTION
        =============================================
      */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div {...fadeUp} className="text-left">
              <div className="flex flex-wrap gap-2 mb-6">
                 <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                   <Users className="w-3 h-3 mr-1" /> Senior Engineers Only
                 </Badge>
                 <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                   <Clock className="w-3 h-3 mr-1" /> 2-4 Week Delivery
                 </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                AI-Ready Data Systems. <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Built by Senior Engineers.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                We turn messy data into reliable pipelines, executive dashboards, and practical AI copilots. Fixed scope, direct access, no junior handoffs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20">
                  <Link href="/contact">
                    Book 7-Day Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-base bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80">
                  <Link href="/case-studies">
                    See Case Studies
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                   {/* Placeholder avatars or icons */}
                   <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs border-2 border-white">S</div>
                   <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs border-2 border-white">M</div>
                   <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center text-white text-xs border-2 border-white">D</div>
                </div>
                <p>Trusted by founders & Ops leaders</p>
              </div>
            </motion.div>

            {/* Hero Visual - Dashboard Mock */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-2">
                 <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200/60">
                    {/* Mock Browser Header */}
                    <div className="h-8 bg-white border-b border-slate-100 flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                       <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                       <div className="ml-4 h-4 w-64 bg-slate-100 rounded-full"></div>
                    </div>
                    {/* Mock Dashboard Content */}
                    <div className="p-6 grid grid-cols-3 gap-4">
                       {/* Stats Cards */}
                       <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                          <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
                          <div className="text-2xl font-bold text-primary">$124,500</div>
                          <div className="text-xs text-emerald-500 flex items-center mt-1"><ArrowRight className="w-3 h-3 rotate-[-45deg] mr-1"/> +12% vs last month</div>
                       </div>
                       <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                          <div className="text-xs text-muted-foreground mb-1">Active Users</div>
                          <div className="text-2xl font-bold text-primary">8,432</div>
                          <div className="text-xs text-emerald-500 flex items-center mt-1"><ArrowRight className="w-3 h-3 rotate-[-45deg] mr-1"/> +5% vs last month</div>
                       </div>
                       <div className="col-span-1 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                          <div className="text-xs text-muted-foreground mb-1">Pipeline Health</div>
                          <div className="text-2xl font-bold text-accent">98.5%</div>
                          <div className="text-xs text-muted-foreground mt-1">Updated 2m ago</div>
                       </div>
                       
                       {/* Chart Area */}
                       <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100 h-48 flex items-end justify-between px-2 pb-2 gap-2">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                             <div key={i} className="w-full bg-primary/10 rounded-t-sm hover:bg-primary/20 transition-colors relative group">
                                <div className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                             </div>
                          ))}
                       </div>

                       {/* AI Chat Mock */}
                       <div className="col-span-1 bg-slate-900 text-white p-4 rounded-lg shadow-lg border border-slate-800 flex flex-col justify-between">
                          <div className="space-y-3">
                             <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-[10px]">AI</div>
                                <div className="text-[10px] bg-slate-800 p-2 rounded-r-lg rounded-bl-lg">
                                   Revenue is up 12% due to the new Q3 pricing model.
                                </div>
                             </div>
                             <div className="flex gap-2 flex-row-reverse">
                                <div className="text-[10px] bg-primary p-2 rounded-l-lg rounded-br-lg">
                                   Forecast for next month?
                                </div>
                             </div>
                          </div>
                          <div className="mt-2 relative">
                             <div className="h-6 w-full bg-slate-800 rounded-full opacity-50"></div>
                             <div className="absolute right-1 top-1 w-4 h-4 bg-accent rounded-full"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              {/* Decorative Blur */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        SOCIAL PROOF SECTION
        =============================================
      */}
      <section className="py-12 border-y border-border bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
             Trusted by teams in Education • E-commerce • Operations
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { label: "Reporting Speed", val: "40–60% Faster" },
                { label: "Pipeline Reliability", val: "99.9% Uptime" },
                { label: "Data Integrity", val: "Single Source of Truth" },
                { label: "Cost Optimization", val: "Reduced Cloud Spend" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="font-bold text-foreground">{stat.val}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 
        =============================================
        PRODUCTIZED PACKAGES SECTION
        =============================================
      */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div {...fadeUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Fixed Scope. Transparent Pricing. No Surprises.
             </h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               We deliver high-impact data systems in weeks, not months. Choose the package that fits your stage.
             </p>
           </motion.div>

           <motion.div 
             variants={staggerChildren}
             initial="initial"
             whileInView="whileInView"
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
           >
              {/* Package 1 */}
              <Card className="relative border-primary shadow-lg scale-105 z-10 flex flex-col">
                 <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl" />
                 <CardHeader>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-2 w-fit">
                       Best First Step
                    </div>
                    <CardTitle className="text-2xl">7-Day Readiness Audit</CardTitle>
                    <CardDescription className="text-base mt-2">
                       For founders who need to know their data quality and AI potential before investing.
                    </CardDescription>
                 </CardHeader>
                 <CardContent className="flex-grow space-y-4">
                    <ul className="space-y-3">
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Data quality scorecard</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Pipeline risk & cost analysis</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">AI readiness checklist</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">30-day execution roadmap</span>
                       </li>
                    </ul>
                 </CardContent>
                 <CardFooter>
                    <Button asChild className="w-full bg-primary text-lg h-12">
                       <Link href="/contact">Book Audit</Link>
                    </Button>
                 </CardFooter>
              </Card>

              {/* Package 2 */}
              <Card className="flex flex-col border-border/60 hover:border-primary/50 transition-colors">
                 <CardHeader>
                    <CardTitle className="text-xl">Executive Dashboard System</CardTitle>
                    <CardDescription className="mt-2">
                       A centralized single-source-of-truth for your leadership team.
                    </CardDescription>
                 </CardHeader>
                 <CardContent className="flex-grow space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                       <Clock className="w-4 h-4" /> <span>14-Day Delivery</span>
                    </div>
                    <ul className="space-y-3">
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Automated data pipelines</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Live KPI Dashboards (BI)</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">dbt transformation layer</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Documentation & Handover</span>
                       </li>
                    </ul>
                 </CardContent>
                 <CardFooter>
                    <Button asChild variant="outline" className="w-full h-12">
                       <Link href="/contact">Get Started</Link>
                    </Button>
                 </CardFooter>
              </Card>

              {/* Package 3 */}
              <Card className="flex flex-col border-border/60 hover:border-primary/50 transition-colors">
                 <CardHeader>
                    <CardTitle className="text-xl">AI Ops Pilot</CardTitle>
                    <CardDescription className="mt-2">
                       Deploy a practical AI agent to automate analysis or support.
                    </CardDescription>
                 </CardHeader>
                 <CardContent className="flex-grow space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                       <Clock className="w-4 h-4" /> <span>2-3 Weeks Delivery</span>
                    </div>
                    <ul className="space-y-3">
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Custom RAG Knowledge Bot</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Or Automated Analyst Agent</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Integration with Slack/Teams</span>
                       </li>
                       <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">Prompt Engineering & Testing</span>
                       </li>
                    </ul>
                 </CardContent>
                 <CardFooter>
                    <Button asChild variant="outline" className="w-full h-12">
                       <Link href="/contact">Explore AI Pilot</Link>
                    </Button>
                 </CardFooter>
              </Card>
           </motion.div>
        </div>
      </section>

      {/* 
        =============================================
        CAPABILITIES SECTION
        =============================================
      */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <motion.div {...fadeUp}>
                  <h2 className="text-3xl font-bold mb-6">What We Build</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                     We don't just "consult". We ship production-grade code and infrastructure that your team can own.
                  </p>
                  
                  <div className="space-y-6">
                     {[
                        { icon: Database, title: "Modern Data Pipelines", desc: "Robust ELT pipelines using Airbyte, dbt, and Snowflake/BigQuery." },
                        { icon: LayoutDashboard, title: "Executive BI Dashboards", desc: "Clear, fast, and interactive dashboards in PowerBI, Tableau, or Looker." },
                        { icon: Bot, title: "AI Copilots & Agents", desc: "Custom LLM applications securely connected to your internal knowledge base." },
                        { icon: ShieldCheck, title: "Governance & Quality", desc: "Automated testing, documentation, and access controls built-in." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                              <item.icon className="w-6 h-6 text-primary" />
                           </div>
                           <div>
                              <h3 className="font-semibold text-foreground">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative"
               >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl rotate-3">
                     <div className="bg-slate-900 w-full h-full rounded-xl p-6 overflow-hidden relative">
                        {/* Abstract Code/Data Visual */}
                        <div className="space-y-3 font-mono text-xs text-blue-200/80 opacity-80">
                           <p><span className="text-pink-400">SELECT</span> date_trunc('week', created_at) <span className="text-pink-400">AS</span> week,</p>
                           <p className="pl-4">COUNT(DISTINCT user_id) <span className="text-pink-400">AS</span> active_users,</p>
                           <p className="pl-4">SUM(revenue) <span className="text-pink-400">AS</span> total_revenue</p>
                           <p><span className="text-pink-400">FROM</span> prod.transactions</p>
                           <p><span className="text-pink-400">WHERE</span> status = 'completed'</p>
                           <p><span className="text-pink-400">GROUP BY</span> 1</p>
                           <p><span className="text-pink-400">ORDER BY</span> 1 DESC;</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-700/50">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                              <span className="text-xs text-emerald-400">Pipeline Active • 204 rows processed</span>
                           </div>
                           <div className="h-32 bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-end justify-between p-2 gap-1">
                               {[20, 40, 30, 70, 50, 90, 60, 80, 40, 60, 50, 70].map((h, i) => (
                                 <div key={i} className="w-full bg-blue-500/40 rounded-sm" style={{ height: `${h}%` }}></div>
                               ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 
        =============================================
        HOW WE WORK (TIMELINE)
        =============================================
      */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">Delivery in Weeks, Not Months</h2>
               <p className="text-muted-foreground">Our 4-week sprint model ensures rapid value.</p>
            </div>
            
            <div className="relative">
               {/* Line */}
               <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {[
                     { step: "01", title: "Audit & Plan", desc: "We map your data landscape and define KPIs." },
                     { step: "02", title: "Build Foundation", desc: "Set up pipelines and data warehouse." },
                     { step: "03", title: "Deliver UI/AI", desc: "Build dashboards and AI agents." },
                     { step: "04", title: "Harden & Handoff", desc: "Docs, training, and full transfer." }
                  ].map((item, i) => (
                     <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative z-10 md:text-center group hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-lg font-bold flex items-center justify-center text-primary mb-4 md:mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                           {item.step}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="mt-12 text-center">
               <Badge variant="secondary" className="px-4 py-2 text-sm bg-accent/10 text-accent-foreground border-accent/20">
                  <Zap className="w-4 h-4 mr-2" /> You work directly with senior engineers
               </Badge>
            </div>
         </div>
      </section>

      {/* 
        =============================================
        SECURITY SECTION
        =============================================
      */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
               <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  Security First. Always.
               </h2>
               <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  We operate with a "least privilege" mindset. We don't train AI on your data without consent, and we design systems that keep your sensitive information locked down.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                     "Least Privilege Access Control",
                     "Read-Only First Policy",
                     "Data Retention & Deletion Policy",
                     "No AI Training on Client Data",
                     "Audit Logs Included",
                     "Optional NDA"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300 text-sm">{item}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 
        =============================================
        CASE STUDIES PREVIEW
        =============================================
      */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold mb-2">Recent Work</h2>
                  <p className="text-muted-foreground">Real outcomes for real businesses.</p>
               </div>
               <Link href="/case-studies" className="hidden md:flex items-center text-primary font-medium hover:underline">
                  View all case studies <ArrowRight className="w-4 h-4 ml-1" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  {
                     title: "EdTech Platform",
                     desc: "Centralized student data from 5 sources into BigQuery.",
                     stat: "Saved 20hrs/week",
                     stack: ["BigQuery", "dbt", "Looker"]
                  },
                  {
                     title: "Shopify Brand",
                     desc: "Forecast inventory needs with 90% accuracy using AI.",
                     stat: "15% less stockout",
                     stack: ["Snowflake", "Python", "Streamlit"]
                  },
                  {
                     title: "SaaS Ops Team",
                     desc: "Unified customer health score across Support & Sales.",
                     stat: "3x faster renewals",
                     stack: ["Postgres", "Hightouch", "Slack"]
                  }
               ].map((caseStudy, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow border-slate-100 bg-slate-50/50">
                     <CardHeader>
                        <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                        <div className="flex gap-2 mt-2">
                           {caseStudy.stack.map(s => (
                              <Badge key={s} variant="secondary" className="text-[10px] h-5">{s}</Badge>
                           ))}
                        </div>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground text-sm mb-4">{caseStudy.desc}</p>
                        <div className="font-bold text-primary flex items-center gap-2">
                           <Zap className="w-4 h-4" /> {caseStudy.stat}
                        </div>
                     </CardContent>
                     <CardFooter>
                        <Link href="/case-studies" className="text-sm font-medium text-foreground hover:text-primary flex items-center">
                           Read more <ChevronRight className="w-4 h-4" />
                        </Link>
                     </CardFooter>
                  </Card>
               ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
               <Link href="/case-studies" className="text-primary font-medium hover:underline">
                  View all case studies
               </Link>
            </div>
         </div>
      </section>

      {/* 
        =============================================
        FINAL CTA
        =============================================
      */}
      <section className="py-24 bg-primary text-white text-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Stop Guessing. Start Knowing.
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               Book your 7-Day Data Readiness Audit today. We'll identify your risks, map your opportunities, and give you a roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 h-14 px-10 text-lg font-bold rounded-xl">
                  <Link href="/contact">Get Your Audit</Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-blue-300 text-white hover:bg-white/10 h-14 px-10 text-lg rounded-xl bg-transparent">
                  <Link href="/contact">See a Sample Report</Link>
               </Button>
            </div>
            <p className="mt-6 text-sm text-blue-200 opacity-80">
               No commitment required. 100% money-back guarantee on the audit.
            </p>
         </div>
      </section>
    </div>
  );
}
