import { Link } from "react-router-dom";
import logo from "@/assets/laminor-logo.png";

const footerLinks = {
  navigation: [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-burgundy text-cream-warm">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Laminor" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-cream-warm/70 max-w-md leading-relaxed">
              Premium artisanal pastry for professional kitchens. 
              Precision, consistency, and excellence in every creation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="label-uppercase text-champagne mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream-warm/70 hover:text-champagne transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-uppercase text-champagne mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-cream-warm/70">
              <li>info@laminor.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                123 Artisan Avenue<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-champagne/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-warm/50 text-sm">
            © {new Date().getFullYear()} Laminor. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-cream-warm/50 hover:text-champagne transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
