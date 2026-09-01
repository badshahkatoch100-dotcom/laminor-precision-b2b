import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { career, countries, environments } from "@/data/cv";

export function CareerSection() {
  const entries = [...career].reverse();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Journey index — fills the column and frames the story */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <FadeIn distance={16}>
                <div className="border-t border-border pt-6">
                  <span className="label-uppercase text-muted-foreground">
                    The route so far
                  </span>
                  <ul className="mt-6 space-y-5">
                    {[
                      { k: "Roles", v: String(career.length) },
                      { k: "Countries", v: countries.map((c) => c.name).join(" · ") },
                      { k: "Environments", v: String(environments.length) },
                      { k: "Currently", v: career[career.length - 1].org },
                    ].map((row) => (
                      <li
                        key={row.k}
                        className="flex items-baseline justify-between gap-6 border-b border-border/70 pb-3"
                      >
                        <span className="label-uppercase text-muted-foreground">
                          {row.k}
                        </span>
                        <span className="font-serif text-lg text-foreground text-right leading-tight">
                          {row.v}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </aside>

          {/* Timeline */}
          <ol
            ref={listRef}
            className="lg:col-span-8 order-1 lg:order-2 relative"
            onMouseLeave={() => setActiveIndex(null)}
          >
            <span
              aria-hidden="true"
              className="absolute left-[5px] sm:left-[7px] top-3 bottom-3 w-px bg-border"
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-[5px] sm:left-[7px] top-3 bottom-3 w-px bg-champagne origin-top"
              style={{ scaleY: reduce ? 1 : railScale }}
            />

            {entries.map((entry, index) => {
              const dimmed = activeIndex !== null && activeIndex !== index;
              return (
                <li
                  key={`${entry.org}-${entry.period}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`relative pl-8 sm:pl-12 pb-12 last:pb-0 transition-opacity duration-500 ${
                    dimmed ? "lg:opacity-45" : "opacity-100"
                  }`}
                >
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
                    <div className="group">
                      <div className="flex items-baseline gap-4 flex-wrap">
                        <span
                          className={`label-uppercase tabular ${
                            entry.current ? "text-champagne" : "text-muted-foreground"
                          }`}
                        >
                          {entry.current ? "Present" : entry.period}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-px flex-1 min-w-6 bg-border transition-colors duration-500 group-hover:bg-champagne/60"
                        />
                        <span className="text-sm text-muted-foreground">
                          {entry.location}
                        </span>
                      </div>

                      <h3 className="heading-subsection text-foreground mt-3">
                        {entry.org}
                      </h3>
                      <p className="text-foreground/80 font-medium text-[0.9375rem] mt-1.5">
                        {entry.title}
                      </p>

                      <ul className="mt-4 space-y-1.5">
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
                  </FadeIn>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
