import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  Code2,
  FileText,
  Heart,
  Users,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span>About CodePlaced</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            The Data Engineering Team <br className="hidden md:block" />
            <span className="text-primary">
              You&apos;ll Wish You Hired Sooner
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            CodePlaced was built out of frustration with traditional &quot;black
            box&quot; agencies — expensive, opaque, and impossible to maintain
            without them.
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            We believe in transparent code, modern data stacks, and systems your
            team can fully own. No lock-ins. No unnecessary complexity. Just
            clean, scalable engineering.
          </p>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-slate-700 mb-4">
                The data world has evolved. It&apos;s no longer about heavy
                on-premise infrastructure or multi-year enterprise
                implementations.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Today, it&apos;s about agility, modular architecture,
                automation, and AI-readiness. CodePlaced exists to bridge the
                gap between chaos and a clean, scalable, enterprise-grade data
                foundation.
              </p>
              <p className="text-lg text-slate-700">
                We bring Silicon Valley–level engineering standards to startups
                and SMBs — helping them move fast without accumulating technical
                debt.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 mb-4">
                Bridging The Gap
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Messy spreadsheets
                    </div>
                    <p className="text-sm text-slate-600">
                      CSVs, exports, and ad-hoc files spread across teams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Disconnected tools
                    </div>
                    <p className="text-sm text-slate-600">
                      CRMs, billing, product, and marketing data that never
                      speak to each other.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Scattered reporting
                    </div>
                    <p className="text-sm text-slate-600">
                      Multiple dashboards, conflicting numbers, and low
                      confidence in metrics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-slate-900 text-white p-4">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-300 mb-1">
                  To This
                </p>
                <p className="text-sm">
                  One clean, scalable, AI-ready data foundation your team can
                  trust and own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">
              Our Core Values – C.O.D.E
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide every engagement, line of code, and
              decision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-1">
                C – Code with integrity
              </h3>
              <p className="text-muted-foreground text-sm mt-2">
                We build systems we&apos;d be proud to maintain ourselves:
                clear, tested, and designed to last.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-1">O – Own the process</h3>
              <p className="text-muted-foreground text-sm mt-2">
                We treat your stack like our own, taking responsibility from
                discovery to deployment and beyond.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-1">D – Deliver results</h3>
              <p className="text-muted-foreground text-sm mt-2">
                Every engagement ties back to real outcomes: faster decisions,
                better visibility, and confident leadership.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-1">E – Empower growth</h3>
              <p className="text-muted-foreground text-sm mt-2">
                We level up your team through documentation, training, and
                systems that are simple to run and extend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Built by Engineers</h2>
              <p className="text-muted-foreground mb-6">
                Our team comes from backgrounds in high-growth startups and
                enterprise tech. We&apos;ve seen what works at scale and what
                crushes innovation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Senior-only talent</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    US-based timezone alignment
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    Deep expertise in Modern Data Stack
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  $10M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Revenue Unlocked
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Retention
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">
                  Avg. Response Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to fix your data foundation?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Stop guessing and start building with a team that cares about your
            long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/manyatyagi0607/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto text-lg h-12 px-8"
              >
                Talk to an Engineer
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg h-12 px-8"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
