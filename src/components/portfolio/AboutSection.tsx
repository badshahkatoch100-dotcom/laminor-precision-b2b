import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn, EASE } from "@/components/motion/Motion";
import { useI18n } from "@/i18n/I18nProvider";

export function AboutSection() {
  const reduce = useReducedMotion();
  const { t, d, cv } = useI18n();
  const { chef, skills } = cv;
  const highlights = d.about.highlights;

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
            <FadeIn delay={0.08} className="space-y-6">
              <p className="text-body text-foreground">{chef.profile}</p>
              <p className="text-body text-muted-foreground">{t("about.body")}</p>

              <blockquote className="relative border-l-2 border-champagne pl-6 py-1">
                <p className="font-serif text-xl md:text-2xl leading-snug text-foreground">
                  {t("about.quote")}
                </p>
                <footer className="text-sm text-muted-foreground mt-2">
                  {chef.currentPosition.location}
                </footer>
              </blockquote>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.12}>
              <h3 className="label-uppercase text-muted-foreground mb-5">
                {t("about.coreDisciplines")}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
                    className="group bg-cream px-6 py-7 transition-colors duration-300 hover:bg-cream-warm"
                  >
                    <span className="heading-card text-foreground block">{item}</span>
                    <span
                      aria-hidden="true"
                      className="block h-px w-0 bg-champagne mt-3 transition-all duration-500 group-hover:w-10"
                    />
                  </motion.li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.18} className="mt-12">
              <h3 className="label-uppercase text-muted-foreground mb-5">
                {t("about.keySkills")}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
                    className="border border-border px-4 py-2 text-sm text-muted-foreground
                               transition-colors duration-300 hover:border-champagne hover:text-foreground"
                  >
                    {skill}
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
