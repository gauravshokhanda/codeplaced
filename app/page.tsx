"use client";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  BarChart3,
  Quote,
  MessageSquare,
  Camera,
  Palette,
  Megaphone,
} from "lucide-react";
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
      <section className="bg-primary text-white py-24">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl mb-8">Your Partner in Growth</p>
          <Button asChild>
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
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
            title="Our Services"
            subtitle="Comprehensive technology and creative solutions for your business needs"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description:
                  "Custom websites and web applications built with cutting-edge technologies.",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile Development",
                description:
                  "Native and cross-platform mobile applications for iOS and Android.",
              },
              {
                icon: <Cloud className="h-8 w-8" />,
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure and DevOps implementation.",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Analytics Services",
                description:
                  "Data-driven insights and business intelligence solutions.",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX Design",
                description:
                  "User research, wireframing, prototyping, and visual design.",
              },
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Brand Design",
                description:
                  "Logo design, brand guidelines, marketing materials, and strategy.",
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Content Creation",
                description:
                  "Copywriting, graphics, video production, and animation.",
              },
              {
                icon: <Megaphone className="h-8 w-8" />,
                title: "Digital Marketing",
                description:
                  "SEO, social media marketing, paid ads, and content strategy to grow your audience.",
              },
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
      </section>

      {/* Testimonials */}
      <section className="py-20 ">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Trusted by businesses around the world"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Shreya Joshi ",
                feedback:
                  "I honestly didn’t know how much I needed CodePlaced until they stepped in. From helping me clean up my LinkedIn strategy to building a personal website that finally looked like me, they handled it all. Their team set up a simple dashboard so I could track what content was bringing leads — game-changer for someone juggling client calls and content daily!",
              },
              {
                name: "Rachel Wolf ",
                feedback:
                  "“Working with CodePlaced was one of the best decisions we made for our brand’s early-stage growth. Their team understood our vision instantly and delivered content strategies that actually converted. Their execution was seamless, and their creativity brought our campaigns to life",
              },
              // {
              //   name: "Michael Lee",
              //   feedback:
              //     "Their cloud solutions helped scale our infrastructure seamlessly. A pleasure to work with.",
              // },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-6 rounded-lg shadow-md"
              >
                <Quote className="h-8 w-8 text-white mb-4 mx-auto" />
                <p className="text-white italic mb-4">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className=" text-white font-bold">{testimonial.name}</h4>
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
      <section className=" py-20">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
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
        </motion.div>
      </section>
    </div>
  );
}
