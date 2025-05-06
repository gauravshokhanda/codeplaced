/* eslint-disable @next/next/no-img-element */
"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "We prioritize our clients' needs and deliver solutions that exceed expectations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Our success is measured by the tangible results we achieve for our clients."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions."
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-6 animate-fade-up tracking-tight">
              About CodePlaced
            </h1>
            <p className="text-xl mb-8 animate-fade-up max-w-3xl mx-auto">
              We are a team of passionate technology experts dedicated to transforming businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
      {/* Core Values Section */}
 
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="Our Core Values"
            subtitle="Guiding principles that shape everything we do"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {["Collaborate", "Own the Process", "Deliver Results", "Empower Growth"].map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-primary mb-2">{label[0]}</div>
                <p className="font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
 
      </section>

        {/* What We Do Section */}
        <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp}>
              <SectionTitle 
                title="What We Do"
                subtitle="We are passionate about building modern, high-quality digital solutions"
              />
            </motion.div>
            <motion.p {...fadeUp} className="text-lg text-muted-foreground">
              We turn your vision into reality. From custom web and mobile app development to UI/UX design, analytics integration, and marketing automation—we do it all. Whether you&apos;re a startup building from scratch or an enterprise optimizing for scale, we provide full-stack solutions tailored to your goals.
            </motion.p>
          </div>
        </div>
      </section>


 
          {/* Mission Section */}
      <section className="py-20 bg-white">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="Our Mission"
            subtitle="Driving innovation with purpose"
            centered
          />
          <p className="text-lg text-muted-foreground mt-6">
            To empower businesses and individuals by building smart, scalable, and impactful digital solutions that drive growth, solve real-world problems, and elevate user experiences. At <strong>CodePlaced</strong>, we strive to bridge the gap between innovation and execution—one line of code at a time.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Team" 
            subtitle="Meet the experts behind our success"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Manya Tyagi",
                role: "CEO & Founder",
                image: "/images/manya.png",
              },
              {
                name: "Muskan Chaudhary ",
                role: "Growth & Creative ",
                image: "/images/muskan.png",
              },
              {
                name: "Prabhjeet",
                role: " Outreach & Content ",
                image: "/images/muskan.png",
              },
              {
                name: "Tanisha",
                role: " Outreach & Content ",
                image: "/images/tanisha.png",
              }
            ].map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
