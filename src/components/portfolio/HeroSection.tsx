import { ChevronDown } from "lucide-react";
import chefPortrait from "@/assets/chef-portrait.png";
import { chef } from "@/data/cv";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-burgundy overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 animate-fade-in">
            <span className="label-uppercase text-champagne block mb-6">
              {chef.currentPosition.title} · {chef.currentPosition.org}
            </span>
            <h1 className="heading-display text-cream mb-5">{chef.name}</h1>
            <p className="text-champagne-light text-lg md:text-xl mb-3">
              {chef.role}
            </p>
            <p className="label-uppercase text-cream-warm/60 mb-8">
              {chef.disciplines}
            </p>
            <p className="text-body text-cream-warm/80 max-w-xl mb-10">
              Experienced chef with a career spanning flight catering, international
              hospitality, cruise operations, restaurants and high-volume food
              production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-champagne
                           text-burgundy font-medium tracking-wide uppercase text-sm
                           transition-colors duration-300 hover:bg-champagne-light
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-champagne-light"
              >
                View My Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border
                           border-cream-warm/50 text-cream-warm font-medium tracking-wide
                           uppercase text-sm transition-colors duration-300
                           hover:border-champagne hover:text-champagne
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-champagne"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-champagne/25 hidden sm:block" />
              <img
                src={chefPortrait}
                alt={`Portrait of ${chef.name}, professional chef, in chef whites`}
                className="relative w-full aspect-[4/5] object-cover object-top
                           motion-safe:animate-fade-in-slow"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to profile"
          className="mt-16 inline-flex items-center gap-3 text-cream-warm/50
                     hover:text-champagne transition-colors label-uppercase"
        >
          Scroll
          <ChevronDown className="w-4 h-4 motion-safe:animate-bounce" strokeWidth={1.5} />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
    </section>
  );
}
