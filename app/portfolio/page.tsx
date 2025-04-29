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
      image: "https://images.unsplash.com/photo-1581091870634-75b99cd8cf85?auto=format&fit=crop&q=80&w=1920",
      category: "Education"
    },
    {
      title: "Electron Charger",
      description: "EV cloud server platform for data transmission and charger solutions.",
      keyFeature: "Revolutionizing EV power solutions with a business-oriented design.",
      link: "https://electroncharger.com/",
      image: "https://images.unsplash.com/photo-1603980927632-fc76a0cfd77d?auto=format&fit=crop&q=80&w=1920",
      category: "EV Platforms"
    },
    {
      title: "Credential-Ed",
      description: "SaaS platform for healthcare credentialing.",
      keyFeature: "Streamlined workflows for healthcare providers.",
      link: "https://credential-ed.com/",
      image: "https://images.unsplash.com/photo-1581092580496-9c3a5e4d579d?auto=format&fit=crop&q=80&w=1920",
      category: "SaaS Platforms"
    },
    {
      title: "Cummins IP",
      description: "Portfolio website showcasing intellectual property.",
      keyFeature: "Professional, minimalist design for strong brand presence.",
      link: "https://cumminsip.com/",
      image: "https://images.unsplash.com/photo-1581093588401-5a6f09f3db8d?auto=format&fit=crop&q=80&w=1920",
      category: "Website Development"
    },
    {
      title: "CC1 Multimedia",
      description: "AI-powered multimedia marketing agency.",
      keyFeature: "High-performing multimedia and marketing solutions.",
      link: "https://cc1multimedia.com/",
      image: "https://images.unsplash.com/photo-1573164574399-389f7ebdf3f7?auto=format&fit=crop&q=80&w=1920",
      category: "Social Media & Marketing"
    },
    {
      title: "HW Restaurants",
      description: "Dynamic website for a restaurant business.",
      keyFeature: "Showcased menu, events, and reservation management.",
      link: "https://hwrestaurants.com/",
      image: "https://images.unsplash.com/photo-1600891963935-c9451b9a4f7c?auto=format&fit=crop&q=80&w=1920",
      category: "Website Development"
    },
    {
      title: "Rachel Wolf Photography",
      description: "Portfolio for a professional photographer.",
      keyFeature: "Immersive visuals and light-based installations.",
      link: "https://rachelwolf.com/",
      image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=1920",
      category: "Photography"
    },
    {
      title: "Appalachian Trash BGone",
      description: "Trash removal service for residential and commercial clients.",
      keyFeature: "User-friendly booking and service management.",
      link: "https://appalachiantrashbgone.com/",
      image: "https://images.unsplash.com/photo-1585314062604-7f77d4ea43f6?auto=format&fit=crop&q=80&w=1920",
      category: "Website Development"
    },
    {
      title: "Naturally Sima",
      description: "Natural lifestyle blog and shop platform.",
      keyFeature: "Empowering natural living with e-commerce.",
      link: "https://naturallysima.com/",
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?auto=format&fit=crop&q=80&w=1920",
      category: "Website Development"
    }
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
    "Education"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Showcasing real-world examples across Website Development, Mobile Apps, Analytics, Social Media, and more.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border 
              ${selectedCategory === category 
                ? "bg-primary text-white border-primary" 
                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
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
      className="overflow-hidden border border-gray-200 rounded-xl shadow-sm bg-white transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "both" }}
    >
      {/* Image */}
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <p className="text-gray-500 text-sm italic">{project.keyFeature}</p>

        <div className="flex items-center gap-2 text-sm text-primary font-medium mt-4">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group hover:underline"
          >
            <GalleryVerticalEnd className="w-4 h-4" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">View Project</span>
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
