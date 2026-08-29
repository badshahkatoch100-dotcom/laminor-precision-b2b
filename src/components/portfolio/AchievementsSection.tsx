import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/data/cv";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-cream">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition earned on the line."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-16">
          {achievements.map((item, index) => (
            <Reveal
              as="li"
              key={`${item.title}-${item.org}`}
              delay={index * 60}
              className="relative border-l-2 border-champagne pl-7 py-1"
            >
              <span className="label-uppercase tabular text-champagne/70 block mb-3">
                Award {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-subsection text-foreground text-balance">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">{item.org}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
