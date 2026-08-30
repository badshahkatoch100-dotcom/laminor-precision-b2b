import { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import chefPortrait from "@/assets/chef-portrait.png";
import heroBg from "@/assets/hero-bg.jpg";
import { chef } from "@/data/cv";
import { EASE, Magnetic } from "@/components/motion/Motion";

const nameLines = ["Deepak", "Yashwant", "Telang"];

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const spring = { stiffness: 90, damping: 20, mass: 0.6 };
  const mx = useSpring(0, spring);
  const my = useSpring(0, spring);

  const bgX = useTransform(mx, (v) => v * -14);
  const bgY = useTransform(my, (v) => v * -10);
  const portraitX = useTransform(mx, (v) => v * 22);
  const portraitY = useTransform(my, (v) => v * 16);

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / r.width);
    my.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
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
                 pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28
                 lg:min-h-[100svh] lg:flex lg:items-center"
    >
      {/* Cinematic background plate */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-16 bg-cover bg-center opacity-[0.14]"
        style={{
          backgroundImage: `url(${heroBg})`,
          x: reduce ? 0 : bgX,
          y: reduce ? 0 : bgY,
        }}
        initial={reduce ? undefined : { scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.14 }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,transparent,hsl(var(--burgundy))_78%)]"
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
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
                  <span key={line} className="block overflow-hidden pb-[0.06em]">
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
              className="h-px bg-accent mt-7 mb-7 origin-left"
              style={{ width: "6rem" }}
              initial={reduce ? undefined : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            />

            <motion.p
              className="font-serif text-champagne-light text-2xl sm:text-3xl leading-snug"
              {...rise(0.78)}
            >
              {chef.role}
            </motion.p>
            <motion.p
              className="label-uppercase text-cream-warm/55 mt-3"
              {...rise(0.86)}
            >
              {chef.disciplines}
            </motion.p>

            <motion.p
              className="text-body text-cream-warm/75 max-w-xl mt-8"
              {...rise(0.96)}
            >
              Experienced culinary professional across flight catering, international
              hospitality, cruise operations, restaurants and high-volume food
              production.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              {...rise(1.08)}
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
                <a href="#contact" className="btn-ghost-light w-full sm:w-auto">
                  Contact Me
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative w-full max-w-[22rem] sm:max-w-md mx-auto lg:mx-0 lg:ml-auto"
              style={{ x: reduce ? 0 : portraitX, y: reduce ? 0 : portraitY }}
            >
              <motion.div
                aria-hidden="true"
                className="absolute -inset-3 border border-champagne/25 hidden sm:block"
                initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: EASE }}
              />
              <div className="relative overflow-hidden aspect-[4/5]">
                <motion.img
                  src={chefPortrait}
                  alt={`Portrait of ${chef.name}, professional chef, in chef whites`}
                  className="w-full h-full object-cover object-[50%_20%]"
                  width={800}
                  height={1000}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  initial={reduce ? undefined : { scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.15, ease: EASE }}
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
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to professional profile"
          className="hidden sm:inline-flex mt-16 lg:mt-20 items-center gap-3
                     text-cream-warm/50 hover:text-champagne transition-colors label-uppercase
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
        >
          Scroll
          <ChevronDown className="w-4 h-4 motion-safe:animate-bounce" strokeWidth={1.5} />
        </motion.a>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent"
      />
    </section>
  );
}
