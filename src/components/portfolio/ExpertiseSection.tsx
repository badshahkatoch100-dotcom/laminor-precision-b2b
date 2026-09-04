import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { useI18n } from "@/i18n/I18nProvider";

export function ExpertiseSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const { t, cv, formatNumber } = useI18n();
  const { expertise } = cv;

  return (
    <section id="expertise" className="section-padding bg-cream">
      <div className="section-container">
        <SectionHeading eyebrow={t("expertise.eyebrow")} title={t("expertise.title")} />

        <ul className="border-t border-border max-w-5xl">
          {expertise.map((item, index) => {
            const isOpen = open === index;
            return (
              <FadeIn
                as="li"
                key={item.title}
                delay={index * 0.04}
                distance={16}
                className="border-b border-border"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  onMouseEnter={() => setOpen(index)}
                  onFocus={() => setOpen(index)}
                  aria-expanded={isOpen}
                  className="group w-full text-left py-6 sm:py-7 flex items-baseline gap-5 sm:gap-10
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  <span className="label-uppercase tabular text-champagne/70 shrink-0 w-8">
                    {formatNumber(index + 1, { minimumIntegerDigits: 2 })}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`heading-subsection block transition-colors duration-300 ${
                        isOpen ? "text-champagne" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>

                    <motion.span
                      className="block overflow-hidden"
                      initial={false}
                      animate={{
                        height: isOpen || reduce ? "auto" : 0,
                        opacity: isOpen || reduce ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <span className="block text-muted-foreground text-sm leading-relaxed pt-3 max-w-xl">
                        {item.note}
                      </span>
                    </motion.span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`hidden sm:block h-px bg-champagne transition-all duration-500 ${
                      isOpen ? "w-16 opacity-100" : "w-6 opacity-40"
                    }`}
                  />
                </button>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
