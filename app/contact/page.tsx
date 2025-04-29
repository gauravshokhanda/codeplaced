// app/contact/page.tsx

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl animate-fade-up">
            We&apos;d love to hear from you. Reach out with your ideas or questions.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="We’re here to answer your questions and start your project"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Details */}
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">Email</h4>
                  <p>support@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">Location</h4>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-6 rounded-lg shadow-md space-y-4 animate-fade-up">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border px-4 py-2 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full border px-4 py-2 rounded-md"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
