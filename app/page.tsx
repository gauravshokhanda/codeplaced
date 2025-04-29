import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Cloud, BarChart3, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl mb-8 animate-fade-up">
            Empowering businesses with innovative technology solutions
          </p>
          <Button asChild className="animate-fade-up">
            <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Agency Introduction */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="About Us"
            subtitle="We are passionate about building modern, high-quality digital solutions"
            centered
          />
          <p className="text-lg text-muted-foreground mt-6 animate-fade-up">
            Our agency specializes in delivering custom web, mobile, and cloud solutions to businesses around the globe. 
            We blend creativity, technology, and strategy to create impactful digital experiences.
          </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="What Our Clients Say"
            subtitle="Trusted by businesses around the world"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "John Doe",
                feedback: "They transformed our website into a powerful business tool. Highly recommend their team!"
              },
              {
                name: "Jane Smith",
                feedback: "Exceptional mobile app development skills. They delivered on time and exceeded expectations."
              },
              {
                name: "Michael Lee",
                feedback: "Their cloud solutions helped scale our infrastructure seamlessly. A pleasure to work with."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="h-8 w-8 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground italic mb-4">&quot;{testimonial.feedback}&quot;</p>
                <h4 className="font-bold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="Our Clients"
            subtitle="Brands that trust us"
            centered
          />
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 animate-fade-up">
            {/* Replace src with real logo paths */}
            {["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"].map((logo, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                key={index}
                src={logo}
                alt="Client Logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
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
            Let&apos;s discuss how we can help transform your business
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://wa.me/917017684236?text=Hi%20there!%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
