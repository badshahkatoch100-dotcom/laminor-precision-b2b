import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { useI18n } from "@/i18n/I18nProvider";

export function InternationalSection() {
  const reduce = useReducedMotion();
  const { t, cv, formatNumber } = useI18n();
  const { countries, environments } = cv;

  return (
    <section id="international" className="section-padding bg-burgundy">
      <div className="section-container">
        <SectionHeading
          eyebrow={t("international.eyebrow")}
          title={t("international.title")}
          tone="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <ul>
            {countries.map((country, index) => (
              <FadeIn
                as="li"
                key={country.name}
                delay={index * 0.08}
                className="group border-t border-champagne/20 py-7 last:border-b"
              >
                <div className="flex items-baseline gap-5">
                  <span className="label-uppercase tabular text-champagne/50 shrink-0">
                    {formatNumber(index + 1, { minimumIntegerDigits: 2 })}
                  </span>
                  <div>
                    <h3 className="heading-subsection text-cream transition-colors duration-300 group-hover:text-champagne">
                      {country.name}
                    </h3>
                    <p className="text-cream-warm/60 text-sm mt-2 leading-relaxed">
                      {country.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </ul>

          <div>
            <FadeIn delay={0.08}>
              <h3 className="label-uppercase text-champagne mb-6">
                {t("international.environments")}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-champagne/20 border border-champagne/20">
                {environments.map((env, i) => (
                  <motion.li
                    key={env}
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                    className="bg-burgundy px-6 py-7 text-cream-warm/85 text-[0.9375rem]
                               transition-colors duration-300 hover:text-champagne"
                  >
                    {env}
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
