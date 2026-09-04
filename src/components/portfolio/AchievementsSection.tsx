import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { useI18n } from "@/i18n/I18nProvider";

export function AchievementsSection() {
  const reduce = useReducedMotion();
  const { t, cv, formatNumber } = useI18n();
  const { achievements } = cv;

  return (
    <section id="achievements" className="section-padding bg-cream">
      <div className="section-container">
        <SectionHeading eyebrow={t("achievements.eyebrow")} title={t("achievements.title")} />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-20">
          {achievements.map((item, index) => (
            <FadeIn
              as="li"
              key={`${item.title}-${item.org}`}
              delay={index * 0.08}
              className="group relative"
            >
              <div className="flex items-start gap-6">
                <span
                  aria-hidden="true"
                  className="font-serif text-5xl lg:text-6xl leading-none tabular text-champagne/35
                             transition-colors duration-500 group-hover:text-champagne/70"
                >
                  {formatNumber(index + 1, { minimumIntegerDigits: 2 })}
                </span>
                <div className="pt-1">
                  <h3 className="heading-subsection text-foreground text-balance">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">{item.org}</p>
                </div>
              </div>

              <motion.span
                aria-hidden="true"
                className="block h-px bg-champagne mt-6 origin-left"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: EASE }}
              />
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
