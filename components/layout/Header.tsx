"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Database,
  Brain,
  BarChart,
  Code,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Smartphone,
  Cloud,
  Box,
  GitBranch,
  Activity,
  BookOpen,
  Video,
  BarChart2,
  Briefcase,
  Phone,
  MessageSquare,
  User,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-white border-b border-transparent",
        isScrolled ? "shadow-md border-slate-100 py-2" : "py-4",
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 relative z-50 mr-8"
          >
            <Image
              src="/images/logo.png"
              alt="CodePlaced Logo"
              width={180}
              height={50}
              className="w-auto h-8 sm:h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent",
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 grid grid-cols-12 gap-6 bg-white">
                      {/* Column 1: Main Challenges */}
                      <div className="col-span-5 space-y-4">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          What&apos;s Your Main Data Challenge?
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/services#strategy"
                            title="Data Platform Implementation"
                            icon={<Database className="h-5 w-5 text-primary" />}
                          >
                            Cloud Data Stack Implementation
                          </ListItem>
                          <ListItem
                            href="/services#ai"
                            title="AI-Augmented Delivery"
                            icon={<Brain className="h-5 w-5 text-accent" />}
                          >
                            AI-accelerated analytics
                          </ListItem>
                          <ListItem
                            href="/services#bi"
                            title="BI, DW & AI Expert Services"
                            icon={<Code className="h-5 w-5 text-primary" />}
                          >
                            Expert guidance & Staff Augmentation
                          </ListItem>
                          <ListItem
                            href="/services#ai"
                            title="Generative AI Solutions"
                            icon={<Activity className="h-5 w-5 text-accent" />}
                          >
                            Custom LLM & RAG Agents
                          </ListItem>
                        </ul>
                      </div>

                      {/* Column 2: Featured Service */}
                      <div className="col-span-4 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Featured Service
                        </h4>
                        <div className="group relative rounded-lg border border-slate-100 bg-slate-50 overflow-hidden hover:shadow-md transition-all">
                          <div className="aspect-video w-full bg-slate-200 relative">
                            {/* Placeholder for chart/image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                              <BarChart className="h-12 w-12" />
                            </div>
                          </div>
                          <div className="p-4">
                            <h5 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              Embedded Analytics
                            </h5>
                            <p className="text-xs text-muted-foreground mb-3">
                              Want to embed analytics into your product?
                            </p>
                            <span className="text-xs font-medium text-primary flex items-center">
                              Learn more <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                          </div>
                          <Link
                            href="/services#embedded"
                            className="absolute inset-0"
                          />
                        </div>
                      </div>

                      {/* Column 3: Quick Links */}
                      <div className="col-span-3 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Quick Links
                        </h4>
                        <ul className="space-y-4">
                          <QuickLinkItem
                            href="/contact"
                            icon={<Phone className="h-4 w-4" />}
                            title="Schedule a Call"
                            desc="Book a discovery session"
                          />
                          <QuickLinkItem
                            href="/contact"
                            icon={<MessageSquare className="h-4 w-4" />}
                            title="Contact Us"
                            desc="Get in touch"
                          />
                          <QuickLinkItem
                            href="/about"
                            icon={<User className="h-4 w-4" />}
                            title="About Us"
                            desc="Our team and story"
                          />
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 grid grid-cols-12 gap-6 bg-white">
                      <div className="col-span-5 space-y-4">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          Industry Solutions
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/industries#martech"
                            title="MarTech"
                            icon={<Activity className="h-5 w-5 text-primary" />}
                          >
                            Customer journey insights
                          </ListItem>
                          <ListItem
                            href="/industries#edutech"
                            title="EduTech"
                            icon={
                              <GraduationCap className="h-5 w-5 text-accent" />
                            }
                          >
                            Educational analytics
                          </ListItem>
                          <ListItem
                            href="/industries#retail"
                            title="Ecommerce Retail Analytics"
                            icon={<Box className="h-5 w-5 text-primary" />}
                          >
                            Retail data insights
                          </ListItem>
                          <ListItem
                            href="/industries#fintech"
                            title="FinTech"
                            icon={<Landmark className="h-5 w-5 text-accent" />}
                          >
                            Financial data platforms
                          </ListItem>
                        </ul>
                      </div>

                      <div className="col-span-4 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Featured Success Story
                        </h4>
                        <div className="group relative rounded-lg border border-slate-100 bg-slate-50 overflow-hidden hover:shadow-md transition-all">
                          <div className="aspect-video w-full bg-slate-900 relative flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              PLEO
                            </span>
                          </div>
                          <div className="p-4">
                            <p className="text-sm font-medium mb-2 line-clamp-2">
                              Pleo Uses CodePlaced to Scale And Modernise Its
                              Data Platform
                            </p>
                            <span className="text-xs text-muted-foreground">
                              FinTech
                            </span>
                          </div>
                          <Link
                            href="/case-studies"
                            className="absolute inset-0"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Quick Links
                        </h4>
                        <ul className="space-y-4">
                          <QuickLinkItem
                            href="/contact"
                            icon={<Phone className="h-4 w-4" />}
                            title="Schedule a Call"
                            desc="Book a discovery session"
                          />
                          <QuickLinkItem
                            href="/contact"
                            icon={<MessageSquare className="h-4 w-4" />}
                            title="Contact Us"
                            desc="Get in touch"
                          />
                          <QuickLinkItem
                            href="/about"
                            icon={<User className="h-4 w-4" />}
                            title="About Us"
                            desc="Our team and story"
                          />
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Partners Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Partners
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 grid grid-cols-12 gap-6 bg-white">
                      <div className="col-span-5 space-y-4">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          Technology Partners
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/partners#google"
                            title="Google Cloud & Looker"
                            icon={<Cloud className="h-5 w-5 text-primary" />}
                          >
                            Specialized data platform expertise
                          </ListItem>
                          <ListItem
                            href="/partners#embeddable"
                            title="Embeddable"
                            icon={<Code className="h-5 w-5 text-accent" />}
                          >
                            Developer toolkit for analytics
                          </ListItem>
                          <ListItem
                            href="/partners#dagster"
                            title="Dagster"
                            icon={<Activity className="h-5 w-5 text-primary" />}
                          >
                            Modern data orchestration
                          </ListItem>
                          <ListItem
                            href="/partners#rudderstack"
                            title="RudderStack"
                            icon={<GitBranch className="h-5 w-5 text-accent" />}
                          >
                            Customer data platform
                          </ListItem>
                        </ul>
                      </div>

                      <div className="col-span-4 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Featured Partner
                        </h4>
                        <div className="group relative rounded-lg border border-slate-100 bg-slate-50 overflow-hidden hover:shadow-md transition-all">
                          <div className="aspect-video w-full bg-white relative flex items-center justify-center p-4">
                            <div className="text-center">
                              <Cloud className="h-10 w-10 mx-auto text-blue-600 mb-2" />
                              <span className="font-bold text-slate-900">
                                Google Cloud
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <h5 className="font-semibold mb-1">
                              Google Cloud & Looker
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              Build scalable, trusted analytics platforms on
                              Google Cloud.
                            </p>
                          </div>
                          <Link
                            href="/partners#google"
                            className="absolute inset-0"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Quick Links
                        </h4>
                        <ul className="space-y-4">
                          <QuickLinkItem
                            href="/contact"
                            icon={<Phone className="h-4 w-4" />}
                            title="Schedule a Call"
                            desc="Book a discovery session"
                          />
                          <QuickLinkItem
                            href="/contact"
                            icon={<MessageSquare className="h-4 w-4" />}
                            title="Contact Us"
                            desc="Get in touch"
                          />
                          <QuickLinkItem
                            href="/about"
                            icon={<User className="h-4 w-4" />}
                            title="About Us"
                            desc="Our team and story"
                          />
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 grid grid-cols-12 gap-6 bg-white">
                      <div className="col-span-5 space-y-4">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          Resources & Content
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/resources#blog"
                            title="Blog"
                            icon={<BookOpen className="h-5 w-5 text-primary" />}
                          >
                            Latest insights and articles
                          </ListItem>
                          <ListItem
                            href="/resources#videos"
                            title="Videos"
                            icon={<Video className="h-5 w-5 text-accent" />}
                          >
                            Tutorials and presentations
                          </ListItem>
                          <ListItem
                            href="/resources#guides"
                            title="Site Analytics"
                            icon={
                              <BarChart2 className="h-5 w-5 text-primary" />
                            }
                          >
                            Powered by Looker
                          </ListItem>
                          <ListItem
                            href="/resources#careers"
                            title="Careers"
                            icon={<Briefcase className="h-5 w-5 text-accent" />}
                          >
                            Join our team
                          </ListItem>
                        </ul>
                      </div>

                      <div className="col-span-4 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Featured Blog
                        </h4>
                        <div className="group relative rounded-lg border border-slate-100 bg-slate-50 overflow-hidden hover:shadow-md transition-all">
                          <div className="h-24 w-full bg-slate-200"></div>
                          <div className="p-4">
                            <h5 className="font-semibold text-sm mb-2 line-clamp-2">
                              Adventures in Aggregate Awareness with Looker
                            </h5>
                            <div className="flex items-center text-xs text-muted-foreground space-x-2">
                              <span>Aug 26, 2025</span>
                              <span>•</span>
                              <span>Mark Rittman</span>
                            </div>
                          </div>
                          <Link
                            href="/resources#blog"
                            className="absolute inset-0"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Quick Links
                        </h4>
                        <ul className="space-y-4">
                          <QuickLinkItem
                            href="/contact"
                            icon={<Phone className="h-4 w-4" />}
                            title="Schedule a Call"
                            desc="Book a discovery session"
                          />
                          <QuickLinkItem
                            href="/contact"
                            icon={<MessageSquare className="h-4 w-4" />}
                            title="Contact Us"
                            desc="Get in touch"
                          />
                          <QuickLinkItem
                            href="/about"
                            icon={<User className="h-4 w-4" />}
                            title="About Us"
                            desc="Our team and story"
                          />
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-none rounded-md"
            >
              <Link href="/contact">Schedule Call</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-2">
              <div className="font-medium text-lg text-slate-900">Services</div>
              <div className="pl-4 space-y-2 flex flex-col">
                <Link
                  href="/services#strategy"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Data Platform Implementation
                </Link>
                <Link
                  href="/services#ai"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  AI-Augmented Delivery
                </Link>
                <Link
                  href="/services#bi"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  BI & Expert Services
                </Link>
              </div>
            </div>
            <Link
              href="/industries"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/partners"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/resources"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-4 bg-primary text-white">
              <Link href="/contact">Schedule Call</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ReactNode;
    title: string;
  }
>(({ className, title, children, icon, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "flex select-none space-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50 group",
          className,
        )}
        {...props}
      >
        <div className="mt-1 shrink-0">{icon}</div>
        <div className="space-y-1">
          <div className="text-sm font-medium leading-none text-foreground group-hover:text-primary transition-colors">
            {title}
          </div>
          <p className="line-clamp-2 text-xs text-muted-foreground">
            {children}
          </p>
        </div>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

const QuickLinkItem = ({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <li>
    <Link
      href={href}
      className="flex items-center space-x-3 group hover:bg-slate-50 p-2 rounded-md transition-colors"
    >
      <div className="p-2 bg-slate-100 rounded-full group-hover:bg-white group-hover:shadow-sm transition-all text-primary">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {title}
        </div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </Link>
  </li>
);

export default Header;
