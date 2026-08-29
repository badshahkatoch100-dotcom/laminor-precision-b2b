import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { languages, interests } from "@/data/cv";

export function LanguagesSection() {
  return (
    <section id="languages" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Languages"
              title="Working across languages and regions."
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
            <SectionHeading eyebrow="Beyond the Kitchen" title="Personal interests." />
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
