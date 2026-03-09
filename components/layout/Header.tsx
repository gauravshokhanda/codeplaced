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
  GraduationCap,
  Landmark,
  ShoppingCart,
  Smartphone,
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
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
                      active={pathname === "/"}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-primary hover:text-white data-[active]:bg-primary data-[active]:text-white",
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
                      {/* Services Column */}
                      <div className="col-span-9">
                        <h4 className="font-bold text-base mb-4 text-foreground">
                          Services
                        </h4>
                        <ul className="grid grid-cols-2 gap-6 list-none p-0 m-0">
                          <ListItem
                            href="/services#data-platform"
                            title="Data Platform & Pipelines"
                            icon={<Database className="h-5 w-5 text-primary" />}
                          >
                            Build a solid foundation for scale
                          </ListItem>
                          <ListItem
                            href="/services#dashboards"
                            title="Executive Dashboards & KPI System"
                            icon={
                              <LayoutDashboard className="h-5 w-5 text-accent" />
                            }
                          >
                            Turn data into decisions instantly
                          </ListItem>
                          <ListItem
                            href="/services#ai-copilots"
                            title="AI Copilots (RAG + Agents)"
                            icon={<Brain className="h-5 w-5 text-primary" />}
                          >
                            Secure AI that knows your business
                          </ListItem>
                          <ListItem
                            href="/services#embedded"
                            title="Embedded Analytics"
                            icon={<BarChart3 className="h-5 w-5 text-accent" />}
                          >
                            Monetize your data with white-label dashboards
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
                            href="https://calendly.com/manyatyagi0607/30min"
                            icon={<Phone className="h-4 w-4" />}
                            title="Schedule a Call"
                            desc="Book a discovery session"
                            target="_blank"
                            rel="noopener noreferrer"
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

                {/* Industries */}
                <NavigationMenuItem>
                  <Link href="/industries" legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === "/industries"}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-primary hover:text-white data-[active]:bg-primary data-[active]:text-white",
                      )}
                    >
                      We Can Work With
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Case Studies */}
                <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-primary hover:text-white",
                      )}
                    >
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === "/about"}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-primary hover:text-white data-[active]:bg-primary data-[active]:text-white",
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
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
              <Link
                href="https://calendly.com/manyatyagi0607/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Call
              </Link>
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
              href="/case-studies"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              className="font-medium text-lg py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-4 bg-primary text-white">
              <Link
                href="https://calendly.com/manyatyagi0607/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Call
              </Link>
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
  ...props
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
} & React.ComponentProps<typeof Link>) => (
  <li>
    <Link
      href={href}
      className="flex items-center space-x-3 group hover:bg-slate-50 p-2 rounded-md transition-colors"
      {...props}
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
