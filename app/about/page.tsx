/* eslint-disable @next/next/no-img-element */
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our work"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
  <SectionTitle 
    title="What We Do?" 
    subtitle="Helping brands grow with creativity and technology"
  />
  <p className="mt-6 text-lg text-gray-700">
    We’re a growing startup agency partnering with clients from <strong>India, U.K., Canada, New Zealand, Hong Kong, Singapore, U.A.E.</strong> and more—across industries like <strong>ecommerce, retail, events, and technology.</strong>
    <br /><br />
    From managing <strong>LinkedIn lead generation</strong> and running high-converting <strong>digital ad campaigns</strong> to building modern <strong>business websites</strong> and helping brands improve their <strong>online presence</strong>, we focus on what actually drives results.
    <br /><br />
    Whether it&apos;s setting up marketing funnels, promoting events, or supporting small businesses with their digital growth—our team is hands-on, strategic, and committed to delivering value.
    <br /><br />
    We’re passionate about creativity, growth, and working with brands that are ready to scale up.
  </p>
</div>




          {/* Image */}
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/images/what-we-do.png" 
              alt="What We Do"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Team" 
            subtitle="Meet the experts behind our success"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Manya Tyagi",
                role: "CEO & Founder",
                image: "https://media.licdn.com/dms/image/v2/D5603AQEGGcve6RVr0A/profile-displayphoto-shrink_200_200/B56ZWyJujmGUAc-/0/1742450649868?e=1750896000&v=beta&t=rd4GmUATOo8NvEzPBwXc26sKaehygEeuw18u00ZrJXc"
              },
              {
                name: "Michael Chen",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1920"
              },
              {
                name: "Emily Rodriguez",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1920"
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
