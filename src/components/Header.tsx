import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { chef } from "@/data/cv";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Expertise", id: "expertise" },
  { name: "Achievements", id: "achievements" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Close mobile menu on Escape / resize; lock body scroll while open */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]
                   focus:bg-champagne focus:text-burgundy focus:px-5 focus:py-3
                   focus:text-sm focus:font-medium focus:uppercase focus:tracking-[0.14em]"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            scrolled || isOpen
              ? "bg-burgundy/95 backdrop-blur-md shadow-elevated border-b border-champagne/15"
              : "bg-burgundy/80 backdrop-blur-sm border-b border-transparent"
          }`}
      >
        <nav className="section-container" aria-label="Main">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              <span className="block font-serif text-lg leading-tight tracking-wide text-cream transition-colors group-hover:text-champagne">
                Deepak Y. Telang
              </span>
              <span className="block label-uppercase text-champagne/70 text-[0.6rem] mt-0.5">
                {chef.role}
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.name}>
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative label-uppercase py-2 transition-colors
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne
                        ${isActive ? "text-champagne" : "text-cream-warm/70 hover:text-cream"}`}
                    >
                      {link.name}
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 -bottom-0.5 h-px bg-champagne transition-all duration-300
                          ${isActive ? "w-full" : "w-0"}`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 -mr-2 text-cream hover:text-champagne transition-colors
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-20 left-0 right-0 bg-burgundy border-t border-champagne/20
                       max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <ul className="section-container py-4 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-champagne/10 last:border-0">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active === link.id ? "true" : undefined}
                    className={`block label-uppercase py-4 transition-colors
                      ${active === link.id ? "text-champagne" : "text-cream-warm/80 hover:text-champagne"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
