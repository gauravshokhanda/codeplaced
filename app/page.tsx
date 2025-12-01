"use client";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cloud, BarChart3, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Operationalize Decisions From Your Data
          </h1>
          <p className="mt-5 text-lg text-foreground/70 max-w-3xl mx-auto">
            Strategy engineering, BI dashboards, and ML — delivered with
            measurable ROI.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 bg-primary text-[hsl(var(--primary-foreground))] font-medium shadow-glow"
            >
              Book a Data Audit
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl px-5 py-3 border border-[var(--divider)] text-foreground"
            >
              See Case Studies
            </Link>
          </div>
        </motion.div>

        {/* Hero visual collage */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="/images/ana3.png"
              alt="Executive KPI dashboard preview"
              className="w-full h-48 sm:h-56 object-cover rounded-xl border border-[var(--divider)] shadow-sm"
            />
            <img
              src="/images/ana4.png"
              alt="Data pipeline and lineage snapshot"
              className="w-full h-48 sm:h-56 object-cover rounded-xl border border-[var(--divider)] shadow-sm"
            />
            <img
              src="/images/ana5.png"
              alt="Forecasting and trends visualization"
              className="w-full h-48 sm:h-56 object-cover rounded-xl border border-[var(--divider)] shadow-sm"
            />
          </div>
        </div>

        {/* Trust / Compliance strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 text-xs text-foreground/60">
            {["AWS", "Azure", "GCP", "Snowflake", "BigQuery"].map((p) => (
              <div
                key={p}
                className="border border-[var(--divider)] rounded-md px-3 py-2 text-center"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {/* <section className="py-20">
        <motion.div {...fadeUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive technology solutions for your business needs"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <Code className="h-8 w-8" />, title: "Web Development", description: "Custom websites and web applications built with cutting-edge technologies." },
              { icon: <Smartphone className="h-8 w-8" />, title: "Mobile Development", description: "Native and cross-platform mobile applications for iOS and Android." },
              { icon: <Cloud className="h-8 w-8" />, title: "Cloud Solutions", description: "Scalable cloud infrastructure and DevOps implementation." },
              { icon: <BarChart3 className="h-8 w-8" />, title: "Analytics Services", description: "Data-driven insights and business intelligence solutions." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}

      <section className="py-20">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionTitle
            title="Services"
            subtitle="Strategy engineering, BI dashboards, and ML — delivered with measurable ROI."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Data Strategy & Governance",
                description:
                  "Roadmaps, data product strategy, governance, quality, security, spend optimization.",
                image: "/images/tt.png",
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Data Engineering & Cloud",
                description:
                  "Warehouses/lakehouses (Snowflake, BigQuery), ELT (Fivetran/dbt), real-time pipelines.",
                image: "/images/hw.png",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "BI Dashboards",
                description:
                  "Executive dashboards, KPI architecture, self-serve & embedded analytics.",
                image: "/images/ec.png",
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "ML & Forecasting",
                description:
                  "Forecasting, churn/propensity, LTV, personalization, marketing mix modeling.",
                image: "/images/ce.png",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="material-card p-6 hover:shadow-glow transition-shadow"
              >
                <img
                  src={service.image}
                  alt={`${service.title} visual`}
                  className="w-full h-28 object-cover rounded-lg border border-[var(--divider)] mb-4"
                />
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <SectionTitle
            title="What Execs Say"
            subtitle="Enterprise outcomes  verified"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "VP of Operations, Global Retail",
                feedback:
                  "From data chaos to governed dashboards in 6 weeks. Time-to-insight dropped by 45%.",
              },
              {
                name: "CTO, HealthTech",
                feedback:
                  "Pipeline reliability hit 99.95% with observability baked-in. Compliance-ready from day one.",
              },
              {
                name: "Head of Growth, D2C",
                feedback:
                  "+27% lift in ROAS after unifying metrics and rebuilding attribution.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="material-card p-6 text-left"
              >
                <div className="h-px w-full bg-[var(--divider)] mb-4" />
                <p className="text-foreground/90 mb-4">
                  “{testimonial.feedback}”
                </p>
                <h4 className="text-foreground/70 font-medium">
                  {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client Logos */}
      {/* <section className="py-20">
        <motion.div {...fadeUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="Our Clients"
            subtitle="Brands that trust us"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 mt-12"
          >
            {["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"].map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt="Client Logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Get a 7-Day Data Health Check
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Identify quick wins across governance, pipelines, and BI. Actionable
            in one week.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 bg-primary text-[hsl(var(--primary-foreground))] font-medium shadow-glow"
            >
              Book a Data Audit
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl px-5 py-3 border border-[var(--divider)] text-foreground"
            >
              See Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
