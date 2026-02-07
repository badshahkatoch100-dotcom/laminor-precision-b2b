import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/laminor-logo.png";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isHome ? "bg-burgundy/95 backdrop-blur-sm" : "bg-burgundy"
    }`}>
      <nav className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Laminor - Artisanal Pâtisserie" 
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`label-uppercase text-cream-warm/80 hover:text-champagne transition-colors duration-200 ${
                  location.pathname === link.href ? "text-champagne" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-champagne text-champagne 
                         label-uppercase hover:bg-champagne hover:text-burgundy transition-all duration-300"
            >
              Request Product List
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cream-warm hover:text-champagne transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-burgundy border-t border-champagne/20">
            <div className="section-container py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`label-uppercase text-cream-warm/80 hover:text-champagne transition-colors py-2 ${
                    location.pathname === link.href ? "text-champagne" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 border border-champagne 
                           text-champagne label-uppercase hover:bg-champagne hover:text-burgundy 
                           transition-all duration-300 mt-4"
              >
                Request Product List
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
