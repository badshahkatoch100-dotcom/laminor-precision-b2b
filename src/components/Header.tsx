import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-burgundy/95 backdrop-blur-sm ${
        scrolled ? "shadow-elevated" : ""
      }`}
    >
      <nav className="section-container" aria-label="Main">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-cream font-serif text-lg tracking-wide hover:text-champagne transition-colors"
          >
            Deepak Y. Telang
            <span className="block label-uppercase text-champagne/70 text-[0.65rem] mt-0.5">
              Professional Chef
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="label-uppercase text-cream-warm/80 hover:text-champagne transition-colors
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-cream hover:text-champagne transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-burgundy border-t border-champagne/20">
            <ul className="section-container py-6 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="label-uppercase text-cream-warm/80 hover:text-champagne transition-colors
                               block py-4 border-b border-champagne/10"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
