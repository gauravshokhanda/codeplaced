import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Code2, Heart, Users, Zap } from "lucide-react";

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
            We are the Data Engineers <br className="hidden md:block" />
            <span className="text-primary">You Wish You Hired Sooner</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            CodePlaced was born from a frustration with "black box" agencies. We believe in open code, modern stacks, and building data systems that your team can actually own.
          </p>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate mx-auto text-center md:text-left">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              The data landscape has changed. It used to be about expensive on-premise servers and multi-year implementations. Today, it's about agility, modular tools, and AI readiness.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              We started CodePlaced to bridge the gap between "messy spreadsheets" and "enterprise data warehouse." We bring Silicon Valley engineering standards to startups and SMBs who need to move fast but can't afford technical debt.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Core Values</h2>
            <p className="mt-4 text-muted-foreground">How we operate every single day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Vendor Lock-in</h3>
              <p className="text-muted-foreground">
                We build on your cloud, in your repo. You own the code, the IP, and the data. We hate black boxes as much as you do.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speed with Rigor</h3>
              <p className="text-muted-foreground">
                We use software engineering best practices (CI/CD, version control, testing) for data. Fast doesn't mean breaking things.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partners, Not Tickets</h3>
              <p className="text-muted-foreground">
                We embed with your team via Slack. No throwing requirements over a wall and waiting 2 weeks. We iterate with you.
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
                  Our team comes from backgrounds in high-growth startups and enterprise tech. We've seen what works at scale and what crushes innovation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Senior-only talent</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">US-based timezone alignment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Deep expertise in Modern Data Stack</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$10M+</div>
                    <div className="text-sm text-muted-foreground">Revenue Unlocked</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24h</div>
                    <div className="text-sm text-muted-foreground">Avg. Response Time</div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to fix your data foundation?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Stop guessing and start building with a team that cares about your long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto text-lg h-12 px-8">
                  Talk to an Engineer
                </Button>
             </Link>
             <Link href="/case-studies">
                <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg h-12 px-8">
                  View Case Studies
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
