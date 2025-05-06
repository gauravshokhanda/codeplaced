import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CodePlaced</h3>
            <p className="text-sm">
              Transforming ideas into digital reality with cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Mobile Development</Link></li>
              <li><Link href="/services">Cloud Solutions</Link></li>
              <li><Link href="/services">Analytics Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              {/* <li><Link href="/careers">Careers</Link></li> */}
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">
              Email: <a href="mailto:codeplaced@gmail.com" className="underline">codeplaced@gmail.com</a><br />
              Phone: <a href="tel:+916397525028" className="underline">+91 6397525028</a><br />
              {/* Address: 123 Tech Street<br />
              Silicon Valley, CA 94025 */}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} CodePlaced. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
