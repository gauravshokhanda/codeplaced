import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CodePlaced</h3>
            <p className="text-sm text-gray-600">
              Enterprise Data & Analytics consultancy. We turn messy data into
              executive-grade decisions — fast.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/services">Data Strategy & Governance</Link>
              </li>
              <li>
                <Link href="/services">Data Engineering & Cloud</Link>
              </li>
              <li>
                <Link href="/services">Business Intelligence Dashboards</Link>
              </li>
              <li>
                <Link href="/services">Machine Learning & Forecasting</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-600">
              Email:{" "}
              <a href="mailto:manya@codeplaced.com">manya@codeplaced.com</a>
              <br />
              Phone: <a href="tel:+916397525028">+91 6397525028</a>
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="rounded-xl px-4 py-2 bg-primary text-[hsl(var(--primary-foreground))] font-medium shadow-glow"
              >
                Get a 7-Day Data Health Check
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-6 gap-4 text-xs text-gray-500">
          {["AWS", "Azure", "GCP", "Power BI", "Tableau", "dbt"].map((p) => (
            <div
              key={p}
              className="border border-[var(--divider)] rounded-md px-3 py-2 text-center"
            >
              {p}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--divider)] text-center text-gray-700">
          <p>
            &copy; {new Date().getFullYear()} CodePlaced. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
