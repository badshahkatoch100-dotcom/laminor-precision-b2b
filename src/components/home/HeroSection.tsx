import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/laminor-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-burgundy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Artisanal pastry craftsmanship"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Logo Badge */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img src={logo} alt="Laminor" className="h-20 lg:h-24 w-auto opacity-90" />
          </div>

          {/* Headline */}
          <h1 
            className="heading-display text-cream mb-6 animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
          >
            Precision Pastry for Professional Kitchens
          </h1>

          {/* Subheadline */}
          <p 
            className="text-body text-cream-warm/80 max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Artisanal cakes and cheesecakes crafted for restaurants, cafés, and premium events.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 
                         bg-champagne text-burgundy font-medium tracking-wide 
                         uppercase text-sm transition-all duration-300
                         hover:bg-champagne-light"
            >
              Request Product List
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 
                         border border-cream-warm/50 text-cream-warm font-medium 
                         tracking-wide uppercase text-sm transition-all duration-300
                         hover:border-champagne hover:text-champagne"
            >
              Book a Tasting
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
    </section>
  );
}
