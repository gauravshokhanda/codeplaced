import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/logo.png"
                alt="CodePlaced"
                width={140}
                height={40}
                className="w-auto h-8"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-ready data systems and decision workflows built by senior
              engineers. We turn messy data into reliable insights for startups
              and SMBs.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:hello@codeplaced.com"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                hello@codeplaced.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Data Platform & Pipelines
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Executive Dashboards & KPI System
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  AI Copilots (RAG + Agents)
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Embedded Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="cursor-not-allowed opacity-50">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-not-allowed opacity-50">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack & Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodePlaced. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
