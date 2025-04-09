"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GalleryVerticalEnd, Link as LinkIcon } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform built with Next.js and Supabase",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1920",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management solution with real-time updates",
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1920",
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard for business metrics",
      tags: ["D3.js", "React", "GraphQL", "Material-UI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
      link: "#"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Showcasing my latest projects and achievements in web development and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <GalleryVerticalEnd className="w-4 h-4" />
                <span>View Project</span>
                <LinkIcon className="w-4 h-4 ml-auto" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}