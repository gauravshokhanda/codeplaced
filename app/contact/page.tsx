"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mblodyvk", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      form.reset();
      setShowPopup(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl animate-fade-up">
            We&apos;d love to hear from you. Reach out with your ideas or questions.
          </p>
        </div>
      </section> */}

      {/* Contact Info + Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Questions ready? Because we’re ready to make your project happen!"
            centered
          />

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white mt-12 p-6 rounded-lg shadow-md space-y-4 animate-fade-up"
          >
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border px-4 py-2 rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows={5}
                name="message"
                required
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Tell us how we can help..."
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center space-y-4 animate-fade-up">
            <CheckCircle className="text-green-500 w-12 h-12 mx-auto" />
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="text-gray-600">
              We have received your request. We&apos;ll contact you soon!
            </p>
            <Button onClick={() => setShowPopup(false)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
