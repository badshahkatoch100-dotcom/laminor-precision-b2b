import { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import chefPortrait from "@/assets/chef-portrait.png";
import heroBg from "@/assets/hero-bg.jpg";
import { chef, career, countries, environments } from "@/data/cv";
import { EASE, Magnetic } from "@/components/motion/Motion";

const nameLines = ["Deepak", "Yashwant", "Telang"];

/* Derived strictly from the CV data — no invented figures. */
const firstYear = career[0].period.slice(0, 4);
const facts = [
  { value: firstYear, label: "In kitchens since" },
  { value: String(countries.length), label: "Countries worked in" },
  { value: String(environments.length), label: "Hospitality environments" },
  { value: String(career.length), label: "Documented roles" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const spring = { stiffness: 90, damping: 20, mass: 0.6 };
  const mx = useSpring(0, spring);
  const my = useSpring(0, spring);

  const bgX = useTransform(mx, (v) => v * -14);
  const bgY = useTransform(my, (v) => v * -10);
  const portraitX = useTransform(mx, (v) => v * 16);
  const portraitY = useTransform(my, (v) => v * 12);

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / r.width);
    my.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative bg-burgundy overflow-hidden
                 pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-0
                 lg:min-h-[100svh] lg:flex lg:flex-col lg:justify-center"
    >
      {/* Cinematic background plate */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-16 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage: `url(${heroBg})`,
          x: reduce ? 0 : bgX,
          y: reduce ? 0 : bgY,
        }}
        initial={reduce ? undefined : { scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12 }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(115%_85%_at_25%_15%,transparent,hsl(var(--burgundy))_75%)]"
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.span
              className="label-uppercase text-champagne block mb-6"
              {...rise(0.15)}
            >
              {chef.currentPosition.title} · {chef.currentPosition.org}
            </motion.span>

            <h1 className="heading-display text-cream">
              <span className="sr-only">{chef.name}</span>
              <span aria-hidden="true" className="block">
                {nameLines.map((line, i) => (
                  <span
                    key={line}
                    className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"
                  >
                    <motion.span
                      className="block"
                      initial={reduce ? undefined : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 1, delay: 0.28 + i * 0.11, ease: EASE }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            <motion.div
              aria-hidden="true"
              className="h-px w-24 bg-accent mt-8 mb-6 origin-left"
              initial={reduce ? undefined : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            />

            <motion.p
              className="font-serif text-champagne-light text-2xl sm:text-[1.75rem] leading-snug"
              {...rise(0.78)}
            >
              {chef.role} <span className="text-cream-warm/40">—</span>{" "}
              {chef.disciplines.replace(/•/g, "·")}
            </motion.p>

            <motion.p
              className="text-body text-cream-warm/70 max-w-lg mt-6"
              {...rise(0.9)}
            >
              Flight catering, cruise lines, international restaurants, luxury rail
              and hotels — high-volume kitchens across India, Kuwait and the USA.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-9"
              {...rise(1.02)}
            >
              <Magnetic>
                <a href="#experience" className="btn-gold group w-full sm:w-auto">
                  View My Experience
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${chef.email}`}
                  className="btn-ghost-light w-full sm:w-auto"
                >
                  Email Deepak
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.figure
              className="relative w-full max-w-[19rem] sm:max-w-[23rem] mx-auto lg:mx-0 lg:ml-auto m-0"
              style={{ x: reduce ? 0 : portraitX, y: reduce ? 0 : portraitY }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute -inset-x-4 -inset-y-5 border border-champagne/20 hidden sm:block"
                initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: EASE }}
              />
              <div className="relative overflow-hidden aspect-[4/5] bg-burgundy-light">
                <motion.img
                  src={chefPortrait}
                  alt={`Portrait of ${chef.name}, professional chef, in chef whites`}
                  className="w-full h-full object-cover object-[52%_18%]"
                  width={896}
                  height={1200}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  initial={reduce ? undefined : { scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.15, ease: EASE }}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-burgundy/55 via-transparent to-transparent"
                />
                {!reduce && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 bg-burgundy origin-bottom"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
                  />
                )}
              </div>
              <motion.figcaption
                className="label-uppercase text-cream-warm/45 mt-5 lg:text-right"
                {...rise(1.15)}
              >
                {chef.currentPosition.location}
              </motion.figcaption>
            </motion.figure>
          </div>
        </div>
      </div>

      {/* Credibility strip — closes the hero and hands off to the story below */}
      <motion.div
        className="section-container relative z-10 w-full mt-14 lg:mt-20"
        {...rise(1.2)}
      >
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-champagne/20">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="py-6 lg:py-8 pr-6 border-b border-champagne/10 lg:border-b-0
                         lg:border-r last:border-r-0 lg:border-champagne/15 lg:pl-8 first:lg:pl-0"
            >
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="font-serif text-3xl lg:text-4xl text-champagne tabular block">
                  {fact.value}
                </span>
                <span className="label-uppercase text-cream-warm/50 mt-2 block">
                  {fact.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <motion.a
          href="#about"
          aria-label="Scroll to professional profile"
          className="hidden lg:inline-flex mt-8 mb-10 items-center gap-3
                     text-cream-warm/45 hover:text-champagne transition-colors label-uppercase
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: EASE }}
        >
          Scroll
          <ChevronDown className="w-4 h-4 motion-safe:animate-bounce" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  );
}
