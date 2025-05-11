"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GalleryVerticalEnd, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "TTIOC",
      description: "Educational platform for cosmetology students.",
      keyFeature: "Coaching and mentoring system for instructors and students.",
      link: "https://ttioc.edu/",
      image: "/images/tt.png",
      category: "Education",
    },
    {
      title: "Paradyes",
      description: "Managed their Social Media pages.",
      keyFeature:
        "Managed daily content scheduling while ensuring the use of relevant keywords and hashtags to maximize reach. Handled collaboration inquiries, responded to comments, and actively engaged with other creators to foster community trust and visibility. Also contributed to visual design by editing reel thumbnails and creating engaging carousel posts to enhance content performance.",
      link: "https://www.canva.com/design/DAGXkoytL0I/NGnGlqAI5TYA7oJEhlYedA/edit",
      image: "/images/1.png",
      category: "beauty",
    },
    {
      title: "Gabit",
      description: "Designed Social Media Posts and Carousels",
      keyFeature:
        "Designed social media posters and carousels aligned with brand aesthetics to ensure visual consistency and enhance audience engagement.",
      link: "https://www.canva.com/design/DAGKKNRt6sY/1bWXvbGugQj-oVBmBUMLzg/edit",
      image: "/images/2.png",
      category: "fitness",
    },

    {
      title: "BeMyself",
      description:
        "BeMyself is Korean skincare brand, they wanted their Social Media presence to be set aligned with their brand aesthetics",
      keyFeature:
        "Worked with BeMyself, a Korean skincare brand, to build a visually aligned social media presence. Designed content that reflected the brand’s clean and minimal aesthetic. Curated and organized the feed to ensure consistency and appeal. Focused on enhancing brand identity through every visual element",
      link: "https://www.canva.com/design/DAGXkoytL0I/NGnGlqAI5TYA7oJEhlYedA/edit",
      image: "/images/3.png",
      category: "fitness",
    },
    {
      title: "Manya Tyagi",
      description:
        "She aimed to strengthen her LinkedIn presence and establish herself as a recognizable personal brand.",
      keyFeature:
        "Initiated a 30-day content campaign to maintain consistency and enhance visibility on LinkedIn. Implemented a strategic use of relevant keywords to boost content reach and ensure the profile remained active and discoverable in user feeds.",
      link: "https://www.canva.com/design/DAGXkoytL0I/NGnGlqAI5TYA7oJEhlYedA/edit.",
      image: "/images/4.png",
      category: "fitness",
    },

    {
      title: "Electron Charger",
      description:
        "EV cloud server platform for data transmission and charger solutions.",
      keyFeature:
        "Revolutionizing EV power solutions with a business-oriented design.",
      link: "https://electroncharger.com/",
      image: "/images/ec.png",
      category: "EV Platforms",
    },
    // {
    //   title: "Credential-Ed",
    //   description: "SaaS platform for healthcare credentialing.",
    //   keyFeature: "Streamlined workflows for healthcare providers.",
    //   link: "https://credential-ed.com/",
    //   image: "https://images.unsplash.com/photo-1581092580496-9c3a5e4d579d?auto=format&fit=crop&q=80&w=1920",
    //   category: "SaaS Platforms"
    // },
    {
      title: "Cummins IP",
      description: "Portfolio website showcasing intellectual property.",
      keyFeature: "Professional, minimalist design for strong brand presence.",
      link: "https://cumminsip.com/",
      image: "/images/ce.png",
      category: "Website Development",
    },
    {
      title: "CC1 Multimedia",
      description: "AI-powered multimedia marketing agency.",
      keyFeature: "High-performing multimedia and marketing solutions.",
      link: "https://cc1multimedia.com/",
      image: "/images/mc.png",
      category: "Social Media & Marketing",
    },
    {
      title: "HW Restaurants",
      description: "Dynamic website for a restaurant business.",
      keyFeature: "Showcased menu, events, and reservation management.",
      link: "https://hwrestaurants.com/",
      image: "/images/hw.png",
      category: "Website Development",
    },
    {
      title: "Rachel Wolf Photography",
      description: "Portfolio for a professional photographer.",
      keyFeature: "Immersive visuals and light-based installations.",
      link: "https://rachelwolf.com/",
      image: "/images/photo2.png",
      category: "Photography",
    },
    {
      title: "Appalachian Trash BGone",
      description:
        "Trash removal service for residential and commercial clients.",
      keyFeature: "User-friendly booking and service management.",
      link: "https://appalachiantrashbgone.com/",
      image: "/images/trashbgone.png",
      category: "Website Development",
    },
    {
      title: "Naturally Sima",
      description: "Natural lifestyle blog and shop platform.",
      keyFeature: "Empowering natural living with e-commerce.",
      link: "https://naturallysima.com/",
      image: "/images/sima.png",
      category: "Website Development",
    },
    {
      title: "NailuxebyK",
      description:
        "They were looking for aesthetically designed Instagram carousels to support and elevate their brand launch..",
      keyFeature:
        "Designed visually appealing Instagram carousels and stories for their launch, ensuring consistency with the brand's aesthetics.",
      link: "https://www.canva.com/design/DAGUrCG1Cj4/rUPmriRZqax_bRgkIi1_8g/edit",
      image: "/images/nail.png",
      category: "fitness",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Website Development",
    "Mobile Apps",
    "Analytics & Dashboards",
    "Social Media & Marketing",
    "SaaS Platforms",
    "EV Platforms",
    "Photography",
    "Education",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="bg-muted/40 min-h-screen px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Showcasing real-world examples across Website Development, Mobile
          Apps, Analytics, Social Media, and more.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border duration-200
              ${
                selectedCategory === category
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-primary border-primary hover:bg-primary/90 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden border border-primary/10 rounded-xl bg-white transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 group"
          >
            <div className="aspect-video relative overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {project.category}
              </span>
            </div>
            <div className="p-6 space-y-3 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-500 text-sm italic">
                {project.keyFeature}
              </p>

              <div className="flex items-center gap-2 text-sm text-primary font-medium mt-4">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group hover:underline"
                >
                  <GalleryVerticalEnd className="w-4 h-4" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    View Project
                  </span>
                  <LinkIcon className="w-4 h-4 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
