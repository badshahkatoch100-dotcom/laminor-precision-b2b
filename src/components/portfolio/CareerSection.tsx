import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { useI18n } from "@/i18n/I18nProvider";

export function CareerSection() {
  const { t, cv, formatNumber } = useI18n();
  const { career, development, countries, environments, chef } = cv;
  const entries = [...career].reverse();
  const developmentEntries = [...development].reverse();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const dim = (key: string) =>
    activeKey !== null && activeKey !== key ? "lg:opacity-45" : "opacity-100";

  return (
    <section id="experience" className="section-padding bg-cream-warm">
      <div className="section-container">
        <SectionHeading
          eyebrow={t("career.eyebrow")}
          title={t("career.title")}
          intro={t("career.intro")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Journey index */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <FadeIn distance={16}>
                <div className="border-t border-border pt-6">
                  <span className="label-uppercase text-muted-foreground">
                    {t("career.routeSoFar")}
                  </span>
                  <ul className="mt-6 space-y-5">
                    {[
                      { k: t("career.documentedRoles"), v: formatNumber(career.length) },
                      {
                        k: t("career.countries"),
                        v: countries.map((c) => c.name).join(" · "),
                      },
                      {
                        k: t("career.environments"),
                        v: formatNumber(environments.length),
                      },
                      { k: t("career.currentlyBasedIn"), v: chef.location },
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
          <div
            ref={listRef}
            className="lg:col-span-8 order-1 lg:order-2 relative"
            onMouseLeave={() => setActiveKey(null)}
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

            {/* Group: International Culinary Development */}
            <FadeIn distance={12}>
              <h3 className="label-uppercase text-champagne pl-8 sm:pl-12 mb-8">
                {t("career.developmentGroup")}
              </h3>
            </FadeIn>

            <ol>
              {developmentEntries.map((entry) => {
                const key = `dev-${entry.place}`;
                return (
                  <li
                    key={key}
                    onMouseEnter={() => setActiveKey(key)}
                    onFocus={() => setActiveKey(key)}
                    className={`relative pl-8 sm:pl-12 pb-12 transition-opacity duration-500 ${dim(key)}`}
                  >
                    {/* Ring marker — visually distinct from the documented-role diamonds */}
                    <motion.span
                      aria-hidden="true"
                      initial={reduce ? false : { scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className={`absolute left-0 top-[7px] rounded-full ${
                        entry.current
                          ? "w-3 h-3 bg-champagne ring-4 ring-cream-warm"
                          : "w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] border-2 border-champagne/60 bg-cream-warm"
                      }`}
                      style={entry.current ? { left: "1px" } : undefined}
                    />

                    <FadeIn delay={0.05} distance={26}>
                      <div
                        className={`group ${
                          entry.current
                            ? "border border-champagne/40 bg-cream/70 px-6 py-6 sm:px-8 sm:py-7"
                            : ""
                        }`}
                      >
                        <div className="flex items-baseline gap-4 flex-wrap">
                          <span
                            className={`label-uppercase tabular ${
                              entry.current ? "text-champagne" : "text-muted-foreground"
                            }`}
                          >
                            {entry.period}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-px flex-1 min-w-6 bg-border transition-colors duration-500 group-hover:bg-champagne/60"
                          />
                          {entry.current && (
                            <span className="label-uppercase text-champagne">
                              {t("career.currentChapter")}
                            </span>
                          )}
                        </div>

                        <h4 className="heading-subsection text-foreground mt-3">
                          {entry.place}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-xl">
                          {entry.note}
                        </p>
                      </div>
                    </FadeIn>
                  </li>
                );
              })}
            </ol>

            {/* Divider into documented career */}
            <FadeIn distance={12} className="relative pl-8 sm:pl-12 pb-8">
              <div className="flex items-center gap-4 border-t border-border pt-8">
                <h3 className="label-uppercase text-muted-foreground">
                  {t("career.documentedGroup")}
                </h3>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              </div>
            </FadeIn>

            {/* Group: Documented Professional Experience */}
            <ol>
              {entries.map((entry, index) => {
                const key = `career-${entry.org}-${entry.period}`;
                const last = index === entries.length - 1;
                return (
                  <li
                    key={key}
                    onMouseEnter={() => setActiveKey(key)}
                    onFocus={() => setActiveKey(key)}
                    className={`relative pl-8 sm:pl-12 ${last ? "" : "pb-12"} transition-opacity duration-500 ${dim(key)}`}
                  >
                    <motion.span
                      aria-hidden="true"
                      initial={reduce ? false : { scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="absolute left-0 top-[7px] rotate-45 w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] border border-border bg-cream-warm"
                    />

                    <FadeIn delay={0.05} distance={26}>
                      <div className="group">
                        <div className="flex items-baseline gap-4 flex-wrap">
                          {entry.period && (
                            <span className="label-uppercase tabular text-muted-foreground">
                              {entry.period}
                            </span>
                          )}
                          <span
                            aria-hidden="true"
                            className="h-px flex-1 min-w-6 bg-border transition-colors duration-500 group-hover:bg-champagne/60"
                          />
                          <span className="text-sm text-muted-foreground">
                            {entry.location}
                          </span>
                        </div>

                        <h4 className="heading-subsection text-foreground mt-3">
                          {entry.org}
                        </h4>
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
      </div>
    </section>
  );
}
