import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

export function LanguagesSection() {
  const { t, cv } = useI18n();
  const { languages, interests } = cv;

  return (
    <section id="languages" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow={t("languages.eyebrow")}
              title={t("languages.title")}
            />
            <ul className="border-t border-border">
              {languages.map((lang, index) => (
                <Reveal
                  as="li"
                  key={lang.name}
                  delay={index * 40}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                >
                  <span className="heading-card text-foreground">{lang.name}</span>
                  <span className="label-uppercase text-muted-foreground shrink-0">
                    {lang.level}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div id="interests">
            <SectionHeading
              eyebrow={t("languages.interestsEyebrow")}
              title={t("languages.interestsTitle")}
            />
            <div className="space-y-8">
              {interests.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <h3 className="heading-subsection text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
