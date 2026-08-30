import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { career } from "@/data/cv";

export function CareerSection() {
  const entries = [...career].reverse();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section-padding bg-cream-warm">
      <div className="section-container">
        <SectionHeading
          eyebrow="Career Journey"
          title="Kitchens on the ground, at altitude and at sea."
          intro="From hotel kitchens in Hyderabad to flight catering in Mumbai — a documented progression through bakery, pastry and high-volume production."
        />

        <ol ref={listRef} className="relative max-w-4xl">
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="absolute left-[5px] sm:left-[7px] top-3 bottom-3 w-px bg-border"
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-[5px] sm:left-[7px] top-3 bottom-3 w-px bg-champagne origin-top"
            style={{ scaleY: reduce ? 1 : railScale }}
          />

          {entries.map((entry, index) => (
            <li
              key={`${entry.org}-${entry.period}`}
              className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
            >
              {/* Marker */}
              <motion.span
                aria-hidden="true"
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.45, ease: EASE }}
                className={`absolute left-0 top-[7px] rotate-45 ${
                  entry.current
                    ? "w-3 h-3 bg-champagne ring-4 ring-cream-warm"
                    : "w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] border border-border bg-cream-warm"
                }`}
                style={entry.current ? { left: "1px" } : undefined}
              />

              <FadeIn delay={0.05} distance={26}>
                <div className="sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-8">
                  <div className="mb-3 sm:mb-0 sm:pt-1">
                    <span
                      className={`label-uppercase tabular ${
                        entry.current ? "text-champagne" : "text-muted-foreground"
                      }`}
                    >
                      {entry.current ? "Present" : entry.period}
                    </span>
                  </div>

                  <div className="group">
                    <h3 className="heading-subsection text-foreground">{entry.org}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5">
                      {entry.location}
                    </p>

                    <p className="text-foreground font-medium text-[0.9375rem] mt-4">
                      {entry.title}
                    </p>

                    <ul className="mt-3 space-y-1.5">
                      {entry.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-4 text-muted-foreground text-sm leading-relaxed
                                     before:absolute before:left-0 before:top-[0.6em]
                                     before:w-1.5 before:h-px before:bg-champagne"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
