import { ChevronDown } from "lucide-react";
import chefPortrait from "@/assets/chef-portrait.png";
import { chef } from "@/data/cv";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-burgundy overflow-hidden
                 pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28
                 lg:min-h-[100svh] lg:flex lg:items-center"
    >
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 motion-safe:animate-fade-in">
            <span className="label-uppercase text-champagne block mb-6">
              {chef.currentPosition.title} · {chef.currentPosition.org}
            </span>

            <h1 className="heading-display text-cream max-w-[14ch]">{chef.name}</h1>

            <div className="gold-line mt-7 mb-7" />

            <p className="font-serif text-champagne-light text-2xl sm:text-3xl leading-snug">
              {chef.role}
            </p>
            <p className="label-uppercase text-cream-warm/55 mt-3">{chef.disciplines}</p>

            <p className="text-body text-cream-warm/75 max-w-xl mt-8">
              Experienced chef with a career spanning flight catering, international
              hospitality, cruise operations, restaurants and high-volume food
              production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href="#experience" className="btn-gold">
                View My Experience
              </a>
              <a href="#contact" className="btn-ghost-light">
                Contact Me
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-[22rem] sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -inset-3 border border-champagne/25 hidden sm:block"
              />
              <img
                src={chefPortrait}
                alt={`Portrait of ${chef.name}, professional chef, in chef whites`}
                className="relative w-full aspect-[4/5] object-cover object-[50%_20%]
                           motion-safe:animate-fade-in-slow"
                width={800}
                height={1000}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to professional profile"
          className="hidden sm:inline-flex mt-16 lg:mt-20 items-center gap-3
                     text-cream-warm/50 hover:text-champagne transition-colors label-uppercase
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        >
          Scroll
          <ChevronDown className="w-4 h-4 motion-safe:animate-bounce" strokeWidth={1.5} />
        </a>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent"
      />
    </section>
  );
}
