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
  BarChart3,
  LayoutDashboard,
  Eraser,
  LineChart,
  Workflow,
  Terminal,
  Briefcase,
  Phone,
  MessageSquare,
  User,
  ArrowRight,
  Scale,
  Building2,
  ShoppingBag,
  Factory,
  Home,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
                        "bg-transparent hover:bg-primary hover:text-white",
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-primary data-[state=open]:text-white hover:bg-primary hover:text-white">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 grid grid-cols-12 gap-6 bg-white">
                      {/* Column 1: Data Services */}
                      <div className="col-span-5 space-y-4">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          Data & Analytics
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/services#analytics-reporting"
                            title="Data Analytics & Reporting"
                            icon={
                              <BarChart3 className="h-5 w-5 text-primary" />
                            }
                          >
                            Automated reporting & custom metrics
                          </ListItem>
                          <ListItem
                            href="/services#bi-dashboards"
                            title="BI & Dashboards"
                            icon={
                              <LayoutDashboard className="h-5 w-5 text-accent" />
                            }
                          >
                            Interactive dashboards & insights
                          </ListItem>
                          <ListItem
                            href="/services#data-engineering"
                            title="Data Engineering"
                            icon={<Database className="h-5 w-5 text-primary" />}
                          >
                            Robust pipelines & warehousing
                          </ListItem>
                          <ListItem
                            href="/services#data-cleaning"
                            title="Data Cleaning"
                            icon={<Eraser className="h-5 w-5 text-accent" />}
                          >
                            Transformation & quality assurance
                          </ListItem>
                        </ul>
                      </div>

                      {/* Column 2: AI & Strategy */}
                      <div className="col-span-4 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          AI & Strategy
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/services#ai-ml"
                            title="AI & Machine Learning"
                            icon={<Brain className="h-5 w-5 text-primary" />}
                          >
                            Custom models & solutions
                          </ListItem>
                          <ListItem
                            href="/services#predictive-analytics"
                            title="Predictive Analytics"
                            icon={<LineChart className="h-5 w-5 text-accent" />}
                          >
                            Forecasting & trend analysis
                          </ListItem>
                          <ListItem
                            href="/services#process-optimization"
                            title="Process Optimization"
                            icon={<Workflow className="h-5 w-5 text-primary" />}
                          >
                            AI-powered efficiency
                          </ListItem>
                          <ListItem
                            href="/services#data-strategy"
                            title="Data Strategy"
                            icon={<Terminal className="h-5 w-5 text-accent" />}
                          >
                            Consulting & roadmapping
                          </ListItem>
                        </ul>
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
                  <NavigationMenuTrigger
                    className="bg-transparent data-[state=open]:bg-primary data-[state=open]:text-white hover:bg-primary hover:text-white cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/industries");
                    }}
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-6 grid grid-cols-12 gap-6 bg-white">
                      <div className="col-span-5 space-y-4">
                        <h4 className="font-bold text-base mb-2 text-foreground">
                          Industries We Work With
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/industries#edu-marketing"
                            title="Education & Marketing"
                            icon={
                              <GraduationCap className="h-5 w-5 text-primary" />
                            }
                          >
                            GET MY COURSE - Optimizing ad spend
                          </ListItem>
                          <ListItem
                            href="/industries#fintech"
                            title="Financial Firms"
                            icon={<Landmark className="h-5 w-5 text-accent" />}
                          >
                            JS ACCOUNTING - Financial reporting
                          </ListItem>
                          <ListItem
                            href="/industries#law"
                            title="Law Firms"
                            icon={<Scale className="h-5 w-5 text-primary" />}
                          >
                            LISINKI LAW FIRM - Legal ops data
                          </ListItem>
                          <ListItem
                            href="/industries#infrastructure"
                            title="Infrastructure"
                            icon={<Building2 className="h-5 w-5 text-accent" />}
                          >
                            Amalfia Acquisitions - Project analytics
                          </ListItem>
                        </ul>
                      </div>

                      <div className="col-span-4 border-l border-slate-100 pl-6">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Target Industries
                        </h4>
                        <ul className="grid gap-3">
                          <ListItem
                            href="/industries#healthcare"
                            title="Healthcare"
                            icon={<Activity className="h-5 w-5 text-primary" />}
                          >
                            Analytics & AI Diagnostics
                          </ListItem>
                          <ListItem
                            href="/industries#retail"
                            title="Retail & E-commerce"
                            icon={
                              <ShoppingBag className="h-5 w-5 text-accent" />
                            }
                          >
                            Insights & Personalization
                          </ListItem>
                          <ListItem
                            href="/industries#manufacturing"
                            title="Manufacturing"
                            icon={<Factory className="h-5 w-5 text-primary" />}
                          >
                            Predictive Maintenance
                          </ListItem>
                          <ListItem
                            href="/industries#real-estate"
                            title="Real Estate"
                            icon={<Home className="h-5 w-5 text-accent" />}
                          >
                            Cost Optimization
                          </ListItem>
                          <ListItem
                            href="/industries#tech"
                            title="Tech & SaaS"
                            icon={<Laptop className="h-5 w-5 text-primary" />}
                          >
                            Product Analytics
                          </ListItem>
                        </ul>
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
                  <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-primary data-[state=open]:text-white hover:bg-primary hover:text-white">
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
                  <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-primary data-[state=open]:text-white hover:bg-primary hover:text-white">
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
                  href="/services#analytics-reporting"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Data Analytics & Reporting
                </Link>
                <Link
                  href="/services#bi-dashboards"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  BI & Dashboards
                </Link>
                <Link
                  href="/services#data-engineering"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Data Engineering
                </Link>
                <Link
                  href="/services#data-cleaning"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Data Cleaning
                </Link>
                <Link
                  href="/services#ai-ml"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  AI & Machine Learning
                </Link>
                <Link
                  href="/services#predictive-analytics"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Predictive Analytics
                </Link>
                <Link
                  href="/services#process-optimization"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Process Optimization
                </Link>
                <Link
                  href="/services#data-strategy"
                  className="text-slate-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Data Strategy
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
