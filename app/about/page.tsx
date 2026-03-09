import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, FileText, Zap, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-slate-950">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Spotlights */}
        <div className="absolute top-0 z-0 h-[1000px] w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-slate-300 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            About CodePlaced
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight text-balance">
            The team you wish you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              hired internally.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance">
            But couldn&apos;t find, afford, or manage.{" "}
            <span className="text-slate-500">
              CodePlaced isn&apos;t an agency. We are a Fractional Growth Team.
              We plug into your EdTech operations, audit your funnel, and fix
              the leaks.
            </span>
          </p>
        </div>

        {/* Decorative Gradient Line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </section>

      {/* Story / Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Philosophy
              </h2>
              <p className="text-lg text-slate-700 mb-4">
                Most EdTechs burn cash on ads because they trust dashboard
                metrics. We don&apos;t. We trust bank data, CRM logs, and
                enrollment numbers. If it didn&apos;t result in a student in a
                classroom, it&apos;s vanity.
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

      {/* SECTION 1: THE TEAM */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Who We Are
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden p-8">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm">
                <Image
                  src="/images/founder/image.png"
                  alt="Manya Tyagi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Manya Tyagi
                </h3>
                <p className="text-primary font-medium">
                  Founder — Analytics & Media
                </p>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ex-Annalect Omnicom. 5+ years in media analytics, SQL, Power BI,
                and Tableau. Leads every client engagement at CodePlaced —
                auditing ad accounts, finding where money is being wasted, and
                making sure every dashboard reflects reality.
              </p>
            </div>
            <p className="mt-6 text-slate-500 italic text-sm">
              Manya personally handles every audit, every call, and every
              dashboard we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY WE STARTED */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why We Started CodePlaced
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>We kept seeing the same problem.</p>
            <p>
              EdTech founders in India were spending lakhs on Facebook and
              Google every month. Their counselors were talking to hundreds of
              leads. Enrollments were happening. But nobody could tell you which
              ad drove which enrollment.
            </p>
            <p>
              The data existed — in the ad account, in the CRM, in the payment
              gateway. It just lived in three different places and nobody had
              connected them.
            </p>
            <p>
              We built the system that connects them. First for one company. Now
              we are building it for others.
            </p>
            <p className="font-bold text-slate-900">That is CodePlaced.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Know What We&apos;d Find in Your Accounts?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We will audit your active ads for free and show you exactly what is
            broken. No commitment.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg h-12 px-8"
          >
            <Link
              href="https://calendly.com/manyatyagi0607/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
