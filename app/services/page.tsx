import { ArrowRight, Code, Smartphone, Cloud, BarChart3, LineChart, PieChart, Search, Share2, Megaphone, Palette, Camera, MessageSquare } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link"; 

export default function ServicesPage() {
  return (
    <div className="bg-secondary w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive digital solutions tailored for your success"
          centered
        />

        <div className="space-y-20">
          {/* Technology Services */}
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Custom Website Development</li>
                  <li>• E-commerce Solutions</li>
                  <li>• Progressive Web Apps</li>
                  <li>• API Integration</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>
            

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• iOS App Development</li>
                  <li>• Android App Development</li>
                  <li>• Cross-platform Solutions</li>
                  <li>• App Maintenance & Updates</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Cloud Migration</li>
                  <li>• AWS & Azure Services</li>
                  <li>• Cloud Infrastructure</li>
                  <li>• DevOps Implementation</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>
            </div>
          </div>

          {/* Analytics Services */}
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics Services</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Data Collection & Analysis</li>
                  <li>• Predictive Analytics</li>
                  <li>• Customer Insights</li>
                  <li>• Performance Metrics</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Business Intelligence</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Interactive Dashboards</li>
                  <li>• Real-time Reporting</li>
                  <li>• KPI Tracking</li>
                  <li>• Data Visualization</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <PieChart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Market Research</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Competitor Analysis</li>
                  <li>• Market Trends</li>
                  <li>• Consumer Behavior</li>
                  <li>• Industry Reports</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Digital Marketing Services</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">SEO Services</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Keyword Research</li>
                  <li>• On-page Optimization</li>
                  <li>• Technical SEO</li>
                  <li>• Link Building</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Share2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Social Media Marketing</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Content Strategy</li>
                  <li>• Community Management</li>
                  <li>• Paid Advertising</li>
                  <li>• Influencer Marketing</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Content Marketing</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Content Creation</li>
                  <li>• Blog Management</li>
                  <li>• Email Marketing</li>
                  <li>• Video Production</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>
            </div>
          </div>

          {/* Creative Services */}
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Creative Services</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• User Research</li>
                  <li>• Wireframing</li>
                  <li>• Prototyping</li>
                  <li>• Visual Design</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Brand Design</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Logo Design</li>
                  <li>• Brand Guidelines</li>
                  <li>• Marketing Materials</li>
                  <li>• Brand Strategy</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

              <div className="material-card p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Content Creation</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Copywriting</li>
                  <li>• Graphic Design</li>
                  <li>• Video Production</li>
                  <li>• Animation</li>
                </ul>
                <Link href="/portfolio" className="group mt-6 inline-flex items-center text-primary hover:text-secondary transition-all duration-300">
  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
    Explore Projects
  </span>
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}