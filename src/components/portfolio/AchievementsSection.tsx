import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/data/cv";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-cream">
      <div className="section-container">
        <SectionHeading eyebrow="Achievements" title="Recognition earned on the line." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {achievements.map((item, index) => (
            <Reveal
              key={`${item.title}-${item.org}`}
              delay={index * 60}
              className="relative border-l-2 border-champagne pl-8 py-2"
            >
              <span className="label-uppercase text-champagne/70 block mb-3">
                Award {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-subsection text-2xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.org}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
