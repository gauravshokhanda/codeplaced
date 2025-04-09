import { DivideIcon as LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  className?: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, items, className = "", delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-600 mb-6">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      <Link 
        href="/contact" 
        className="inline-flex items-center text-primary hover:text-secondary transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}