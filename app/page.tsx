import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Cloud, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl mb-8 animate-fade-up">
              Innovative technology solutions for modern businesses
            </p>
            <Button asChild className="animate-fade-up">
              <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive technology solutions for your business needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Custom websites and web applications built with cutting-edge technologies."
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications for iOS and Android."
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and DevOps implementation."
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Analytics Services",
                description: "Data-driven insights and business intelligence solutions."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8">
            Let's discuss how we can help transform your business
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}