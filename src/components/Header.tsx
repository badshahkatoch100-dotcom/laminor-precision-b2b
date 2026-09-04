import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { EASE } from "@/components/motion/Motion";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/i18n/I18nProvider";

const navLinks = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "experience", id: "experience" },
  { key: "expertise", id: "expertise" },
  { key: "achievements", id: "achievements" },
  { key: "certifications", id: "certifications" },
  { key: "contact", id: "contact" },
] as const;

export function Header() {
  const { t, cv } = useI18n();
  const { chef } = cv;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

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
        {t("common.skipToContent")}
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color,height] duration-500
          ${
            scrolled || isOpen
              ? "bg-burgundy/95 backdrop-blur-md shadow-elevated border-b border-champagne/15"
              : "bg-transparent border-b border-transparent"
          }`}
      >
        <nav className="section-container" aria-label={t("nav.ariaMain")}>
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20 lg:h-24"
            }`}
          >
            <a
              href="#home"
              className="group shrink-0 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              <span className="block font-serif text-lg leading-tight tracking-wide text-cream transition-colors group-hover:text-champagne">
                Deepak Y. Telang
              </span>
              <span
                className={`block label-uppercase text-champagne/70 text-[0.6rem] mt-0.5 overflow-hidden transition-all duration-500 ${
                  scrolled ? "max-h-0 opacity-0" : "max-h-4 opacity-100"
                }`}
              >
                {chef.role}
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              <ul className="flex items-center gap-4 xl:gap-7">
                {navLinks.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id} className="relative">
                      <a
                        href={`#${link.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`relative block label-uppercase py-2 transition-colors duration-300
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne
                          ${isActive ? "text-champagne" : "text-cream-warm/70 hover:text-cream"}`}
                      >
                        {t(`nav.${link.key}`)}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            aria-hidden="true"
                            className="absolute left-0 right-0 -bottom-0.5 h-px bg-champagne"
                            transition={{ duration: 0.4, ease: EASE }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <LanguageToggle />

              <a
                href={`mailto:${chef.email}`}
                className="hidden xl:inline-flex label-uppercase border border-champagne/50 text-champagne px-5 py-2.5
                           transition-colors duration-300 hover:bg-champagne hover:text-burgundy
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                {t("nav.emailCta")}
              </a>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <LanguageToggle />
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="p-2 -mr-2 text-cream hover:text-champagne transition-colors
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Scroll progress */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-champagne origin-left"
          style={{ scaleX: progress }}
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="lg:hidden absolute top-full left-0 right-0 bg-burgundy border-t border-champagne/20
                         max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <ul className="section-container py-4 flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease: EASE }}
                    className="border-b border-champagne/10 last:border-0"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      aria-current={active === link.id ? "true" : undefined}
                      className={`block label-uppercase py-4 transition-colors
                        ${active === link.id ? "text-champagne" : "text-cream-warm/80 hover:text-champagne"}`}
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="section-container pb-6 flex flex-col gap-3">
                <a
                  href={`mailto:${chef.email}`}
                  onClick={() => setIsOpen(false)}
                  className="btn-gold w-full"
                >
                  {t("nav.emailChef")}
                </a>
                <a
                  href={`tel:+91${chef.phones[0].replace(/\s/g, "")}`}
                  onClick={() => setIsOpen(false)}
                  className="btn-ghost-light w-full tabular"
                >
                  {t("nav.call", { phone: chef.phones[0] })}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
